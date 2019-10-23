// Shared functionality for IB's desktop and VR's mobile and desktop card forms.
// If changing, make sure to test all clients.

function CardFormShared() {
    var FormController = new FormControllerBase();

    ta.extend(FormController, {
        VALID_CARD_TYPES: ["Visa", "MasterCard", "AmericanExpress", "Discover"]
        , expirationMonth:  function() { return ta.getElemVal(FormController.FIELD_CARD_EXPIRY_MONTH); }

        , ccnameValidation: (function() {
            var ACTIVE_VALIDATION = ["Min1"]
            , VALIDATION_MAP = {
                "Min1" : {
                    "regex" : /^[^\s].*$/,
                    "errorMsgKey" : "cde_pf_error_no_ccname"
                },
                "FirstAndLast" : {
                    "regex" : /^[^\s]+\s[^\s]+$/,
                    "errorMsgKey" : "cde_pf_error_first_and_last"
                },
                "OnlyLettersOrWhitespace" : {
                    "regex" : /^[a-zA-Z]+[\sa-zA-Z]*$/,
                    "errorMsgKey" : "cde_pf_error_english_characters_only",
                    "disclaimerMsgKey" : "cde_pf_error_english_characters_only"
                }
            }
            , ALLOW_DISCLAIMERS = false
            , _setValidation = function(validationTypes) {
                var NEW_VALIDATION = [];
                var hasDisclaimer = false;
                for(var i = 0; i < validationTypes.length; i++) {
                    var validationType = validationTypes[i];
                    var mapEntry = VALIDATION_MAP[validationType];
                    var cardholderDisclaimerElmt = ta.elem("cardholderNameDisclaimer");
                    var cardholderDisclaimerMessageElmt = ta.elem("cardholderNameDisclaimerMessage");

                    if(mapEntry) {
                        NEW_VALIDATION.push(validationType);

                        if(ALLOW_DISCLAIMERS && cardholderDisclaimerMessageElmt && mapEntry.disclaimerMsgKey) {
                            var disclaimerMessage = ta.langs.localize(mapEntry.disclaimerMsgKey);

                            if(disclaimerMessage) {
                              cardholderDisclaimerMessageElmt.innerHTML = disclaimerMessage;
                              hasDisclaimer = true;
                            }
                        }
                    } else {
                        ta.log("Unexpected cardholder name validationType received: " + validationType);
                    }
                }

                //If there is atleast one valid validation, set it as active validation
                if(NEW_VALIDATION.length) {
                    ACTIVE_VALIDATION = NEW_VALIDATION;

                    hasDisclaimer && cardholderDisclaimerElmt ?
                      ta.removeElemClass('cardholderNameDisclaimer', 'hidden') :
                      ta.addElemClass('cardholderNameDisclaimer', 'hidden');
                }
            }
            , _validate = function() {
                var ccname = FormController.ccname();
                if (ccname != null) {
                    for(var i = 0; i < ACTIVE_VALIDATION.length; i++) {
                        var validation = VALIDATION_MAP[ACTIVE_VALIDATION[i]];
                        var result = validation.regex.test(ccname);
                        if (result) {
                            result = !ta.cards.passesLuhn(ccname);
                        }

                        if(!result) {
                            var cardholderErrorElmt = ta.elem("cardholderNameError");
                            if (cardholderErrorElmt) {
                                cardholderErrorElmt.innerHTML = ta.langs.localize(validation.errorMsgKey);
                            }
                            return result;
                        }
                    }
                }

                return true;
            }
            , _allowDisclaimers = function() {
              ALLOW_DISCLAIMERS = true;
            }
            ;
            return {
                validate: _validate,
                setValidation: _setValidation,
                allowDisclaimers: _allowDisclaimers
            };
        })()
        , _validateCvv: function() {
            var cardType = FormController.definiteCardType();
            if (cardType) {
                var cvvRange = "{" + cardType.cvvLength[0] + "," + cardType.cvvLength[1] + "}";
            }
            else {
                cvvRange = "{3,4}";
            }
            var validCvvRegex = new RegExp("^\\d"+cvvRange+"$");
            return validCvvRegex.test(FormController.cvv());
        }
        , _validateExpiryMonth: function() {
            var currentYear = FormController.CURRENT_DATE.getFullYear(),
                expiryYear = parseInt(FormController.expirationYear());
            if (expiryYear === currentYear) {
                var currentMonth = FormController.CURRENT_DATE.getMonth() + 1, //Month starts at 0
                    expiryMonth = parseInt(FormController.expirationMonth());
                if (expiryMonth < currentMonth) {
                    return false;
                }
            }
            return /^(0[1-9])|(1[0-2])$/.test(ta.getElemVal(FormController.FIELD_CARD_EXPIRY_MONTH));
        }
        , _validateExpiryYear: function() {
            var currentYear = FormController.CURRENT_DATE.getFullYear(),
                expiryYear = parseInt(FormController.expirationYear());

            return expiryYear >= currentYear && expiryYear <= (currentYear + FormController._MAX_NUMBER_OF_YEARS_THE_CARD_IS_VALID);
        }
        , _validateExpiryMonthDeadline: function() {
            const currentYear = parseInt(FormController.EXPIRY_DATE_DEADLINE_YEAR);
            const currentMonth = parseInt(FormController.EXPIRY_DATE_DEADLINE_MONTH);
            const expiryYear = parseInt(FormController.expirationYear());
            if (expiryYear === currentYear) {
                const expiryMonth = parseInt(FormController.expirationMonth());
                if (expiryMonth < currentMonth) {
                    return false;
                }
            }
            return /^(0[1-9])|(1[0-2])$/.test(ta.getElemVal(FormController.FIELD_CARD_EXPIRY_MONTH));
        }
        , _validateExpiryYearDeadline: function() {
            const currentYear = parseInt(FormController.EXPIRY_DATE_DEADLINE_YEAR);
            const expiryYear = parseInt(FormController.expirationYear());

            return expiryYear >= currentYear && expiryYear <= (currentYear + FormController._MAX_NUMBER_OF_YEARS_THE_CARD_IS_VALID);
        }
        , validate:  function() {
            return (this._validateCardNumber() &&
            this._validateCvv() &&
            this._validateExpiryMonth() &&
            this._validateExpiryYear() &&
            (!FormController.EXPIRY_DATE_VALIDATE_DEADLINE || (FormController._validateExpiryYearDeadline() && FormController._validateExpiryMonthDeadline())) &&
            this.ccnameValidation.validate());
        }

        , _validateCardNumber: function() {
            var cardType = FormController.definiteCardType();
            if (cardType && cardType.name && FormController.VALID_CARD_TYPES.indexOf(cardType.name) < 0) {
                return false;
            }
            return ta.cards.isValidCardNumber(FormController.ccnumber());
        }
        , _showErrorTitle: function(errorElem) {
            var errorElemTitle = errorElem.parentNode.childNodes[1];
            // Make sure we are actually looking at the title
            if (errorElemTitle && errorElemTitle.className.indexOf('formLabel') === -1) {
                // Try one more step up and then give up
                var tempElem = errorElem.parentNode.parentNode.childNodes[1];
                if (tempElem && tempElem.className.indexOf('formLabel') !== -1) {
                    errorElemTitle = tempElem;
                }
            }
            if (errorElemTitle) {
                errorElemTitle.className = errorElemTitle.className + " errorMsg";
            }
        }
        , _hideErrorTitle: function(errorElem) {
            var errorElemTitle = errorElem.parentNode.childNodes[1];
            // Make sure we are actually looking at the title
            if (errorElemTitle && errorElemTitle.className.indexOf('formLabel') === -1) {
                // Try one more step up and then give up
                var tempElem = errorElem.parentNode.parentNode.childNodes[1];
                if (tempElem && tempElem.className.indexOf('formLabel') !== -1) {
                  errorElemTitle = tempElem;
                }
            }
            if (errorElemTitle) {
                ta.removeClassFromElem(errorElemTitle, "errorMsg");
            }
        }
        , _hideError:  function(errorFieldIdPrefix) {
            ta.removeElemClass(errorFieldIdPrefix + "ErrorImage", "red_form_error");
            ta.addElemClass(errorFieldIdPrefix + "ErrorImage", "green_form_correct");
            ta.addElemClass(errorFieldIdPrefix + "Error", "hidden");
            var errorElem = ta.elem(errorFieldIdPrefix);
            this._hideErrorTitle(errorElem);
        }
        , _showError:  function(errorFieldIdPrefix) {
            ta.removeElemClass(errorFieldIdPrefix + "ErrorImage", "green_form_correct");
            ta.addElemClass(errorFieldIdPrefix + "ErrorImage", "red_form_error");
            ta.removeElemClass(errorFieldIdPrefix + "Error", "hidden");
            var errorElem = ta.elem(errorFieldIdPrefix);
            this._showErrorTitle(errorElem);
        }
        , _inputFieldErrors: function(formElementId, validationFunction) {
            if (validationFunction()) {
                FormController._hideError(formElementId);
                ta.removeElemClass(formElementId, "hasError");
            } else {
                FormController._showError(formElementId);
                ta.addElemClass(formElementId, "hasError");
            }
        }
        , _dropDownFieldErrors: function() {
            if (FormController._validateExpiryYear() && (!FormController.EXPIRY_DATE_VALIDATE_DEADLINE || FormController._validateExpiryYearDeadline())) {
                FormController._hideErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_YEAR));
            } else {
                FormController._showErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_YEAR));
            }

            if (FormController._validateExpiryMonth() && (!FormController.EXPIRY_DATE_VALIDATE_DEADLINE ||FormController._validateExpiryMonthDeadline())) {
                FormController._hideErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_MONTH));
            } else {
                FormController._showErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_MONTH));
            }
        }
        , setupOnChangeListeners:  function(parentPageCommunicationClient) {
            var onInputFieldChange = function(formElementId, validationFunction) {
                var onChangeCallback = function() {
                    FormController._inputFieldErrors(formElementId, validationFunction);
                    parentPageCommunicationClient.postChangeMessage(FormController.validate(), "[input event]: " + formElementId);
                };

                var elem = ta.elem(formElementId);

                // Using addEventListener to avoid removing other oninput handler
                if (elem.addEventListener) {
                    // Don't need to check for blur once this invocation (the first blur) occurs,
                    // as we then attach the validator to any input.
                    elem.onblur = "";
                    elem.addEventListener("input", onChangeCallback);
                }
                onChangeCallback();
            };
            var onMonthDropdownChange = function() {
                FormController._dropDownFieldErrors();
                parentPageCommunicationClient.postChangeMessage(FormController.validate(), "[expiration dropdown event]");
            };

            var onBlurStartErrorRecording = function(fieldChangeFunction, formElementId, validationFunction) {
                var elem = ta.elem(formElementId);
                elem.onblur = function() {fieldChangeFunction(formElementId, validationFunction)};
            };

            onBlurStartErrorRecording(onInputFieldChange, FormController.FIELD_CARD_NUM, FormController._validateCardNumber);
            onBlurStartErrorRecording(onInputFieldChange, FormController.FIELD_CARD_SECURITY_CODE, FormController._validateCvv);
            if(ta.elem(FormController.FIELD_CARD_HOLDER_NAME)) {
              onBlurStartErrorRecording(onInputFieldChange, FormController.FIELD_CARD_HOLDER_NAME, FormController.ccnameValidation.validate);
            }
            // Since month validation depends on the year, validate month when year is changed as well (and vice versa)
            ta.elem(FormController.FIELD_CARD_EXPIRY_YEAR).onchange = onMonthDropdownChange;
            ta.elem(FormController.FIELD_CARD_EXPIRY_MONTH).onchange = onMonthDropdownChange;

            // IBX-4354 and CDE-1349: Safari 7 and below on iOS have a bug with input and iframes

            // CDE-768: The fix to use focus() to enable input broke IE 9 by wiping out its selection indices.
            // I could not repro the original issue on an iPad running iOS 7.1.1, so we'll not include
            // the iOS workaround for IE 9.
            if (navigator.userAgent.indexOf("MSIE 9") === -1) {
                if(ta.elem(FormController.FIELD_CARD_HOLDER_NAME)) {
                    ta.elem(FormController.FIELD_CARD_HOLDER_NAME).onkeydown = ta.elem(FormController.FIELD_CARD_HOLDER_NAME).ontouchend = function () {
                        window.focus();
                        ta.elem(FormController.FIELD_CARD_HOLDER_NAME).focus();
                    };
                }
                ta.elem(FormController.FIELD_CARD_SECURITY_CODE).onkeydown = ta.elem(FormController.FIELD_CARD_SECURITY_CODE).ontouchend = function () {
                    window.focus();
                    ta.elem(FormController.FIELD_CARD_SECURITY_CODE).focus();
                };
                ta.elem(FormController.FIELD_CARD_NUM).onkeydown = ta.elem(FormController.FIELD_CARD_NUM).ontouchend = function () {
                    window.focus();
                    ta.elem(FormController.FIELD_CARD_NUM).focus();
                };
            }

            var ccNumLength = FormController.ccnumber().length;
            var creditCardReformatter = ta.error.wrap(function(event){
                var unformattedValue = ta.getElemVal(FormController.FIELD_CARD_NUM);
                var currentCursorPos = ta.elem(FormController.FIELD_CARD_NUM).selectionStart;
                var digitIndex = ta.cards.getDigitIndexFromTextStringIndex(unformattedValue, currentCursorPos);

                var currentValue = FormController.ccnumber();
                if (currentValue.length - ccNumLength > 1) {
                    // If the length increased by more than 1 on this input, assume it is due to autofill.
                    parentPageCommunicationClient.postAutofillEvent();
                }
                ccNumLength = currentValue.length;

                var formattedValue = ta.cards.formatCreditCardNumber(currentValue, "-");
                ta.setElemVal(FormController.FIELD_CARD_NUM, formattedValue);

                var cardType = FormController.definiteCardType();
                var actualCursorPos = ta.cards.matchDigitIndexToFormattedStringIndex(digitIndex,
                    cardType != null && cardType.name == "AmericanExpress");

                // See CDE-1151
                if (navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome/") > -1)
                {
                    setTimeout(function() {
                        ta.elem(FormController.FIELD_CARD_NUM).setSelectionRange(actualCursorPos, actualCursorPos)
                    }, 0);
                }
                else
                {
                    ta.elem(FormController.FIELD_CARD_NUM).setSelectionRange(actualCursorPos, actualCursorPos);
                }

                FormController.updateCreditCardLogos();
            }, "card_form.js", FormController.getLogLevel);

            var cvvNumLength = FormController.cvv().length;
            var cvvReformatter = ta.error.wrap(function (event) {
                var unformattedValue = ta.getElemVal(FormController.FIELD_CARD_SECURITY_CODE);
                var currentCursorPos = ta.elem(FormController.FIELD_CARD_SECURITY_CODE).selectionStart;
                var digitIndex = ta.cards.getDigitIndexFromTextStringIndex(unformattedValue, currentCursorPos);

                var currentValue = FormController.cvv();
                if (currentValue.length - cvvNumLength > 1) {
                    // If the length increased by more than 1 on this input, assume it is due to autofill.
                    parentPageCommunicationClient.postAutofillEvent();
                }
                cvvNumLength = currentValue.length;

                var formattedValue = ta.cards.formatCVV(currentValue);
                ta.setElemVal(FormController.FIELD_CARD_SECURITY_CODE, formattedValue);
            }, "card_form.js", FormController.getLogLevel);

            // Old versions of WebKit don't update selection range until after oninput is processed.
            // https://bugs.webkit.org/show_bug.cgi?id=110742
            // This prevents us from doing the right thing with formatting credit card numbers in oninput.
            // onkeyup works, but you can see reformatting happen, so do it only for the one impacted version
            // of WebKit we support.
            if (navigator.userAgent.indexOf("AppleWebKit/534.30") === -1) {
                ta.elem(FormController.FIELD_CARD_NUM).oninput = creditCardReformatter;
                ta.elem(FormController.FIELD_CARD_SECURITY_CODE).oninput = cvvReformatter;
            } else {
                ta.elem(FormController.FIELD_CARD_NUM).onkeyup = creditCardReformatter;
                ta.elem(FormController.FIELD_CARD_SECURITY_CODE).onkeyup = cvvReformatter;
            }
        }
        , highlightErrors: function() {
            FormController._inputFieldErrors(FormController.FIELD_CARD_NUM, FormController._validateCardNumber);
            FormController._inputFieldErrors(FormController.FIELD_CARD_SECURITY_CODE, FormController._validateCvv);
            if(ta.elem(FormController.FIELD_CARD_HOLDER_NAME)) {
              FormController._inputFieldErrors(FormController.FIELD_CARD_HOLDER_NAME, FormController.ccnameValidation.validate);
            }
            FormController._dropDownFieldErrors();
        }

        /*
           If validCardTypes is not empty,
           any card types not in its list will be removed
           from the list of supported card types.
           If no list is supplied, then all types supported are allowed.
        */
        , updateValidCardTypes: function(validCardTypes) {
            var index, i, logo;
            if (validCardTypes.length) {
                for (i = 0; i < this.VALID_CARD_TYPES.length; i++) {
                    index = validCardTypes.indexOf(this.VALID_CARD_TYPES[i]);
                    if (index < 0) {
                        logo = ta.elem(this.VALID_CARD_TYPES[i]);
                        if (logo){
                            logo.parentNode.removeChild(logo);
                        }
                        delete FormController.VALID_CARD_TYPES[i];
                    }
                }
            }
        }

        , updateCardholderNameValidation: function(validationType) {
            var elem = ta.elem(FormController.FIELD_CARD_HOLDER_NAME);
            if (!elem) {
              return;
            }

            if(Array.isArray(validationType)) {
              this.ccnameValidation.setValidation(validationType);
            } else {
              this.ccnameValidation.setValidation([validationType]);
            }
        }

        , updateCardholderName: function(name) {
            var elem = ta.elem(FormController.FIELD_CARD_HOLDER_NAME);
            if (!name && name !== "" || !elem) {
                return;
            }

            elem.value = name;
        }

        /**
         * This is called in response to the parent page indicating that this iframe is being
         *   used for a pay at stay room and handles any special treatments for this use case.
         */
        , handlePayAtStay: function() {
            var elem = ta.elem("payAtStay");
            if (!elem) {
                return;
            }

            elem.className = elem.className.replace('hidden', '');
        }

        /**
         * This is called in response to the parent page indicating that debit cards are allowed.
         */
        , handleDebitCardAllowed: function() {
            var elem = ta.elem("ccNumLabel");
            if (!elem) {
                return;
            }

            elem.innerHTML = ta.langs.localize('cde_pf_credit_or_debit');
        }

        , handleCardholderDisclaimersAllowed: function() {
          this.ccnameValidation.allowDisclaimers();
        }

        /**
         * General handler for setting up any tooltips. This is called when the form is initialized.
         */
        , setupTooltips:  function() {
            var cvvExplainerElem = ta.elem("cvvExplainer")
            , cvvTooltipElem = ta.elem("cvvTooltipData")
            , showCvvTooltip = function() {
                ta.removeClassFromElem(cvvTooltipElem, "hidden");
            }
            , hideCvvTooltip = function() {
                ta.addClassToElem(cvvTooltipElem, "hidden");
            }
            ;
            if (!cvvExplainerElem || !cvvTooltipElem) {
                return;
            }

            if (cvvExplainerElem.addEventListener) {
                cvvExplainerElem.removeEventListener("mouseover", showCvvTooltip);
                cvvExplainerElem.removeEventListener("mouseout", hideCvvTooltip);
                cvvExplainerElem.addEventListener("mouseover", showCvvTooltip);
                cvvExplainerElem.addEventListener("mouseout", hideCvvTooltip);
            }
        }

        , hideCardTypeIcons: function() {
            var cardTypeIcons = ta.elem("creditCardType");
            if (!cardTypeIcons) {
                return;
            }

            cardTypeIcons.style.display = "none";
        }

        ,
    });

    return FormController;
}

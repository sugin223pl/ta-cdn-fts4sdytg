// Listens to messages from parent page sends messages back

//Class
function ParentPageCommunicationClient(origin, xsrfToken) {
    this.origin = origin;
    this.xsrfToken = xsrfToken;
    this.parentWindow = window.parent;

    this.setVaultCallback = function(vaultCallback) {
        this.vaultCallback = vaultCallback;
    }

    this._getFormHeight = function() {
        var D = ta.elem("cdeform");
        return ta.getHeight(D);
    };

    this._postToParent = function(message) {
        this.parentWindow.postMessage(JSON.stringify(message), this.origin);
    };

    this.postFormLoadedMessage = function() {
        this._postToParent({type: "formLoaded", scrollHeight: this._getFormHeight()});
    };
    this.postResizedMessage = function() {
        this._postToParent({type: "resized", scrollHeight: this._getFormHeight()});
    };
    this.postChangeMessage = function(isValid, eventCauseType) {
        this._postToParent({type: "change", valid: isValid, eventCauseType: eventCauseType, scrollHeight: this._getFormHeight()});
    };
    this.postPaymentSubmitSucceededMessage = function(vaultHttpObject) {
        ta.log("postPaymentResponseStatus: " + vaultHttpObject.status);
        ta.log("postPaymentResponseText - success: " + vaultHttpObject.responseText);
        responseObject = JSON.parse(vaultHttpObject.responseText);
        //card vault response
        cardDetails = responseObject.paymentAccounts.creditCards[0];
        if (typeof cardDetails !== 'undefined')
        {
          this._postToParent({
            type: "submitSucceeded",
            responseId: responseObject.responseHeader.responseId,
            sessionAccountToken: cardDetails.accountMetaData.sessionAccountToken,
            cardType: cardDetails.cardType,
            expMonth: cardDetails.expMonth,
            expYear: cardDetails.expYear
          });
        }
        else
        {
          var cvvs = responseObject.paymentAccounts.cvvs[0];
          this._postToParent({
            type: "submitSucceeded",
            responseId: responseObject.responseHeader.responseId,
            sessionAccountToken: cvvs.accountMetaData.sessionAccountToken
          });
        }
    };
    this.postCvvSubmitSucceededMessage = function(vaultHttpObject) {
        ta.log("postCvvResponseStatus: " + vaultHttpObject.status);
        ta.log("postCvvResponseText - success: " + vaultHttpObject.responseText);
        responseObject = JSON.parse(vaultHttpObject.responseText);
        //cvv vault response
        this._postToParent({
            type: "submitSucceeded",
            responseId: responseObject.responseHeader.responseId,
            paymentAccountId: responseObject.paymentAccountId
        });
    };
    this.postSubmitFailedMessage = function(vaultHttpObject) {
        responseObject = JSON.parse(vaultHttpObject.responseText);
        responseHeader = responseObject.responseHeader;
        error = responseHeader.errors[0];

        this._postToParent({
            type: "submitFailed",
            responseId: responseHeader.responseId,
            statusCode: error.responseStatus,
            responseCode: error.responseCode,
            responseMessage: error.responseMessage
        });
    };
    this.postVaultCallFailedMessage = function(errorStatusCode) {
        this._postToParent({
            type: "submitFailed",
            statusCode: errorStatusCode
        });
    };
    this.postAutofillEvent = function() {
        this._postToParent({type: "ccNumAutofilled"});
    };
    this.postValidateMessage = function(isValid, offset, requestID) {
	 this._postToParent({
	     type: "validate",
         isValid: isValid,
         offset: offset,
	     requestID: requestID
	 });
    };

    this.setupParentPageMessagesListener = function() {
        var messageListener = function(event) {
            if (event.origin != this.origin) {
                ta.log("Message received from unexpected origin: " + event.origin);
                return;
            }
            var message = JSON.parse(event.data);
            var body = message.body;
            switch (message.type) {
                case "submit": {
                    ta.log("Vaulting payment details");
                    this.vaultCallback(this.xsrfToken, ta.escapeHTML(message.clientId, "submit a"), ta.escapeHTML(body, "submit b"));
                }; break;
                case "errorHighlight": {
                    ta.log("Highlight errors");
                    FormController.highlightErrors();
                }; break;
                case "requestResizedMessage": {
                    ta.log("Request resized message");
                    this.postResizedMessage();
                }; break;
                case "validate": {
                    ta.log("Validate");
                    var requestID = ta.escapeHTML(message.requestID, "validate");
                    var offset = FormController.highlightErrors();
                    //If there are any errors on the page
                    var isValid = offset === null;
                    this.postValidateMessage(isValid, offset, requestID);
                }; break;
                case "validCardTypes": {
                    ta.log("Received list of valid card types");
                    var escapedBody = ta.escapeHTML(body, "validCardTypes a");
                    if (escapedBody) {
                        /*
                           If validCardTypes is not empty,
                           any card types not in its list will be removed
                           from the list of supported card types.
                           If no list is supplied, then all types supported are allowed.
                         */
                        FormController.updateValidCardTypes(escapedBody, ta.escapeHTML(message.locationName, "validCardTypes b"));
                    }
                }; break;
                case "cvvLength": {
                    ta.log("Received cvv length");
                    FormController.updateCvvLength(ta.escapeHTML(body, "cvvLength"));
                }; break;
                case "expiryDateDeadline": {
                    ta.log("Received expiryDateDeadline");
                    /*
                       For reserve bookings test card expiration date on travel date.
                       Format of body message [MONTH, YEAR]. EX: [09, 2019].
                    */
                    var escapedBody = ta.escapeHTML(body, "expiryDateDeadline a");
                    if (escapedBody) {
                        FormController.setExpiryDateDeadline(escapedBody, ta.escapeHTML(message.locationName, "expiryDateDeadline b"));
                    }
                }; break;
                case "logLevel": {
                    ta.log("Received log level");
                    FormController.setLogLevel(ta.escapeHTML(body, "logLevel"));
                }; break;
                case "cardholderNameValidation": {
                    ta.log("Received cardholder name validation info");
                    FormController.updateCardholderNameValidation(ta.escapeHTML(body, "cardholderNameValidation"));
                }; break;
                case "cardholderName": {
                    ta.log("Received cardholder name");
                    // The message can be variable and thus must be escaped
                    FormController.updateCardholderName(ta.escapeHTML(body, "cardholderName"));
                }; break;
                case "payAtStay": {
                  ta.log("Received payAtStay message");
                  FormController.handlePayAtStay();
                }; break;
                case "debitCardAllowed": {
                  ta.log("Received debitCardAllowed message");
                  FormController.handleDebitCardAllowed();
                }; break;
                case "cardholderDisclaimersAllowed" : {
                  ta.log("Received cardholderDisclaimersAllowed message");
                  FormController.handleCardholderDisclaimersAllowed();
                }; break;
                case "requestCvvFocus": {
                  ta.log("Received requestCvvFocus message");
                  FormController.requestCvvFocus();
                }; break;
                case "hideCardTypeIcons": {
                  ta.log("Received hideCardTypeIcons message");
                  FormController.hideCardTypeIcons();
                }; break;
                default: ta.log("Unexpected message type received: " + ta.escapeHTML(message.type, "default"))
            }
        };

        if (window.addEventListener) {
            window.addEventListener("message", messageListener.bind(this), false);
            window.addEventListener("resize", this.postResizedMessage.bind(this), false);
        } else {
            // Only attach the message event because this browser doesn't even support it.
            window.attachEvent("message", messageListener.bind(this));
        }
    }
}

// Base object for card forms

function FormControllerBase() {
    this.FIELD_CARD_HOLDER_NAME = "cardholderName";
    this.FIELD_CARD_NUM = "creditCard";
    this.FIELD_CARD_EXPIRY_MONTH = "expiryDateMonth";
    this.FIELD_CARD_EXPIRY_YEAR = "expiryDateYear";
    this.FIELD_CARD_SECURITY_CODE = "securityCode";
    this.FIELD_CVV_FORM_ONLY = "cvvFormOnly";
    this._MAX_NUMBER_OF_YEARS_THE_CARD_IS_VALID = 20;//there is no agreed limit on max card expiry date, using 20 (previous limit in TA frontend)
    this.VALID_CARD_TYPES = ["Visa", "MasterCard", "AmericanExpress", "Discover"];
    this.LOG_LEVEL = "info";
    this.CURRENT_DATE = new Date();

    this.ccname = function() { return ta.getElemValSafe(this.FIELD_CARD_HOLDER_NAME); };
    this.ccnumber = function() { return ta.getElemVal(this.FIELD_CARD_NUM).replace(/[^\d]/g, ""); };
    this.cvv = function() { return ta.getElemVal(this.FIELD_CARD_SECURITY_CODE); };
    this.expirationYear = function() { return ta.getElemVal(this.FIELD_CARD_EXPIRY_YEAR); };
    this.checkoutSessionId = function() { return ta.getElemVal("checkoutSessionId"); };
    this.cvvFormOnly = function(){
      if (ta.elem(this.FIELD_CVV_FORM_ONLY)){
        return ta.getElemVal(this.FIELD_CVV_FORM_ONLY);
      }else{
        return false;
      }
    };

    // returns a list of possible card types (Visa, Mastercard, etc...) for the ccnumber entered thus far
    this.possibleCardTypes = function() { return ta.cards.detectCardTypeFromIIN(this.ccnumber()); };

    // if there is exactly 1 possible credit card type for the ccnumber entered thus far, return it. otherwise, return null.
    this.definiteCardType = function() {
        var possibleCardTypes = this.possibleCardTypes();
        if (possibleCardTypes != null && possibleCardTypes.length === 1){
            return possibleCardTypes[0];
        }
        return null;
    };
    this.updateCreditCardLogos = function() {
        var possibleCardTypes = FormController.possibleCardTypes()
            , creditCardNumber = FormController.ccnumber()
            ;
        if (!creditCardNumber || creditCardNumber.length <= 0){
            FormController.VALID_CARD_TYPES.forEach(function(cardTypeId) {
                ta.removeElemClass(cardTypeId, "inactive");
            });
        } else if (possibleCardTypes && possibleCardTypes.length > 0) {
            FormController.VALID_CARD_TYPES.forEach(function (cardTypeId) {
                for (var i = 0; i < possibleCardTypes.length; i++) {
                    if (cardTypeId === possibleCardTypes[i].name) {
                        ta.removeElemClass(cardTypeId, "inactive");
                        return;
                    }
                }
                ta.addElemClass(cardTypeId, "inactive");
            });
        } else {
            FormController.VALID_CARD_TYPES.forEach(function(cardTypeId) {
                ta.addElemClass(cardTypeId, "inactive");
            });
        }
    };
    this.setLogLevel = function(level) { this.LOG_LEVEL = level; };
    this.getLogLevel = function() { return this.LOG_LEVEL; };
};

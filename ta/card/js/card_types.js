//Changes to main resource ARE NOT reflected here automatically
(function(ta, undefined) {
  "use strict";

  ta = ta || {};

/**
 * Utilities dealing with credit card names, types, validation, etc. Nothing
 * in this file should interact with the DOM directly.
 *
 * DOES NOT SUBMIT CC NUMBERS OR PII
 */
ta.cards = (function() {

    /* Card list below MUST stay in order of precedence, meaning:
     *  - if a number fully matches a startPattern for a card type, then the number must
     *    be either that card type OR an earlier card type in the list. To put it differently:
     *    if a number fully matches a startPattern for two different card types, it should be of the type of the card
     *    that comes first in the list below.
     *    Example:
     *          - VisaElectron must precede Visa in the list because a card number beginning with "4026" is a VisaElectron card, BUT
     *            it also fully matches the Visa pattern. If Visa came before, it would register as a Visa instead of a VisaElectron.
     *          - Discover must precede Maestro in the list because all Discover cards start with a "6" which also matches Maestro's start pattern
     *
     *    References:
     *    https://en.wikipedia.org/wiki/Payment_card_number
     *    https://www.discovernetwork.com/downloads/IPP_VAR_Compliance.pdf
     *    https://www.cybersource.com/developers/getting_started/test_and_manage/best_practices/card_type_id/
     *    https://baymard.com/checkout-usability/credit-card-patterns
     */
    var CARDS = [
        {
            name: "Discover",
            startPatterns: ["6011","65","64"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [16,17,18,19],
            luhn: true,
            logo: "pf_discover_logo"
        }
        , {
            name: "Maestro",
            startPatterns: ["50","56-58","6"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [12,13,14,15,16,17,18,19],
            luhn: true,
            logo: null
        }
        , {
            name: "Diners",
            startPatterns: ["3095","38-39","36","300-305"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [14,15,16,17,18,19],
            luhn: true,
            logo: "pf_diners_logo"
        }
        , {
            name: "laser",
            startPatterns: ["6706","6771","6709"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [16,17,18,19],
            luhn: true,
            logo: null
        }
        , {
            name: "JCB",
            startPatterns: ["3528-3589"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [16,17,18,19],
            luhn: true,
            logo: "pf_jcb_logo"
        }
        , {
            name: "UnionPay",
            startPatterns: ["62"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [16,17,18,19],
            luhn: false,
            logo: null
        }
        , {
            name: "MasterCard",
            startPatterns: ["51-55","2221-2720"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [16],
            luhn: true,
            logo: "pf_mastercard_logo"
        }
        , {
            name: "AmericanExpress",
            startPatterns: ["34","37"],
            cvvLength: [4,4], /* min,max */
            cardLengths: [15],
            luhn: true,
            logo: "pf_amex_logo"
        }
        , {
            name: "VisaElectron",
            startPatterns: ["4026","417500","4508","4844","4913","4917"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [13,16,19],
            luhn: true,
            logo: "pf_visa_electron_logo"
        }
        , {
            name: "Visa",
            startPatterns: ["4"],
            cvvLength: [3,3], /* min,max */
            cardLengths: [13,16,19],
            luhn: true,
            logo: "pf_visa_logo"
        }
    ]

    /**
     * Retrieve the credit card number from the input box with all
     * non-digits removed
     */
    , _getPureNumberSafe = function(/* String */ dirty) {
        return dirty != null ? dirty.replace(/[^0-9]+/g, "") : "";
    }

    /**
     * Use the CARDS parameter to determine if the credit card number in
     * _number matches a defined type based on pattern. Return null if
     * none match.
     */
    , _detectCardType = function(/* String */ _number) {
        return _isValidCardNumber(_number);
    }

    /**
     * _detectCardType requires the number to have the min number of digits.
     * This method will instead detect card type based only off the first few digits.
     */
    , _detectCardTypesFromIIN = function(/* String */ _number) {
        var number = _getPureNumberSafe(_number)
        , possibleCardTypes = []
        , i
        ;
        for (i = 0; i < CARDS.length; ++i) {
            if (_hasStartedValidPattern(number, CARDS[i])) {
                possibleCardTypes.push(CARDS[i]);
                // if a start pattern is fully matched (even though card length may not be long enough)
                // then no need to look any further b/c card list is in order of precedence.
                if (_matchesPatternToSpecifiedDegree(number, CARDS[i], true)){
                    return possibleCardTypes;
                }
            }
        }
        return possibleCardTypes;
    }

    /*
     * returns true if the card number entered thus far is of a valid length and fully matches a valid pattern
     *
     * Similar to _hasStartedValidPattern except it does not accept partial matches. start patterns must be matched in their entirety
     */
    , _matchesValidPattern = function(/* String */ cleanNumber, /* Card */ card) {
        if (!cleanNumber || !card) {
            return false;
        }
        if (card.cardLengths.indexOf(cleanNumber.length) < 0) {
            return false;
        }
        return _matchesPatternToSpecifiedDegree(cleanNumber, card, true);
    }

    /*
     * returns true if the card number entered thus far is a prefix of a valid card number
     *
     * Example, for a starting pattern of "41": "4" is valid, "42" and "5" are invalid, and "412" is valid
     */
    , _hasStartedValidPattern = function(/* String */ cleanNumber, /* Card */ card) {
        return _matchesPatternToSpecifiedDegree(cleanNumber, card, false);
    }


    , _matchesPatternToSpecifiedDegree = function(/* String */ cleanNumber, /* Card */ card, /* boolean */ mustBeFullMatch) {
        var startPatterns = card ? _expandStartPatterns(card) : null
        , i
        ;
        if (!startPatterns || !startPatterns.length || !cleanNumber){
            return false;
        }
        for (i = 0; i < startPatterns.length; i++) {
            if (mustBeFullMatch) {
                // return true if card number has a valid start pattern as a prefix
                if ( cleanNumber.indexOf(startPatterns[i]) === 0 ) {
                    return true;
                }
            }
            else {
                // return true if card number either is a prefix of a valid start pattern OR has a valid start pattern as a prefix
                if (startPatterns[i].indexOf(cleanNumber) === 0 || cleanNumber.indexOf(startPatterns[i]) === 0){
                    return true;
                }
            }
        }
        return false;
    }

    /*
     * Expands startPatterns that are listed as ranges into their constituent pattern options, leaving
     * non-range patterns as is.
     *
     * Example: ["48","420-422"] ==> ["48","420","421","422"]
     */
    , _expandStartPatterns = function(/* Card */ card) {
        if (card.expandedStartPatterns) {
            return card.expandedStartPatterns;
        }
        var startPatterns = card.startPatterns;
        if (!startPatterns || startPatterns.length <= 0) {
            return startPatterns;
        }
        var expandedStartPatterns = []
        , i
        ;
        for (i = 0; i < startPatterns.length; i++) {
            var splitString = startPatterns[i].split("-");
            if (splitString.length === 1){
                expandedStartPatterns.push(startPatterns[i]);
                continue;
            }
            var rangeStart = parseInt(splitString[0]);
            var rangeEnd = parseInt(splitString[1]);
            for (var j = rangeStart; j <= rangeEnd; j++){
                expandedStartPatterns.push(j + "");
            }
        }
        card.expandedStartPatterns = expandedStartPatterns; //cache expanded list
        return expandedStartPatterns;
    }

    /**
     * Checks to see if the card number being entered is American Express
     */
    , _isAmex = function(/* String */ _number) {
        var possibleCardTypes = _detectCardTypesFromIIN(_number)
        , cardType = possibleCardTypes && possibleCardTypes.length === 1 ? possibleCardTypes[0] : null
        ;
        return cardType != null && cardType.name != null && cardType.name === "AmericanExpress";
    }

    /**
     * Use the CARDS parameter to determine if the credit card number in
     * #creditCard matches a defined type based on luhn, length, and
     * pattern. Return null if none match.
     */
    , _isValidCardNumber = function(/* String */ _number) {
        var number = _getPureNumberSafe(_number)
        , i
        ;

        for (i = 0; i < CARDS.length; ++i) {
            if (_matchesValidPattern(number, CARDS[i]) && (!CARDS[i].luhn || _passesLuhn(number))) {
                return CARDS[i];
            }

        }
        return null;
    }

   /**
    * Perform the Luhn test to see if the number is a credit card number
    */
    , _passesLuhn = function(/* String */ number) {
        var clean
        /**
         * From: http://rosettacode.org/wiki/Luhn_test_of_credit_card_numbers#JavaScript
         */
        , _luhn10 = (function() {
            var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                , i
                ;
            return function(str) {
                var counter = 0
                    , incNum
                    , odd = false
                    , temp = String(str).replace(/[^\d]/g, "")
                    ;
                if ( temp.length === 0) {
                    return false;
                }
                for (i = temp.length-1; i >= 0; --i)
                {
                    incNum = parseInt(temp.charAt(i), 10);
                    counter += (odd = !odd)? incNum : luhnArr[incNum];
                }
                return (counter%10 === 0);
           };
        })()
        ;

        if (!number) {
            throw "invalid number passed to _passesLuhn";
        }

        // Clean up number just in-case
        clean = _getPureNumberSafe(number);
        return _luhn10(clean);
    }

    /**
     * Based on the cardName, return the logo class
     * name for that card.
     */
    , _getCardLogo = function(/* String */ cardName) {
        var logo = null
        ;

        for(var i = 0; i < CARDS.length; i++) {
            var card = CARDS[i];
            if(card.name === cardName){
                logo = card.logo;
            }
        }

        return logo;
    }

    /**
     * Format the credit card number, inserting the separator around groups of 4 or 6 (amex)
     * card digits
     *
     */
    , _formatCreditCardNumber = function(/* String */ creditCardNumber, /* String */ separator) {
        var clean = creditCardNumber.replace(/[^0-9x]/g, "")
        , withSpaces
        ;

        if (_isAmex(clean)) {
            // Amex is a rebel
            withSpaces = clean.replace(/^([0-9x]{4})/, "$1" + separator);
            withSpaces = withSpaces.replace(/([0-9x]{6})/, "$1" + separator);
        }
        else {
            withSpaces = clean.replace(/([0-9x]{4})/g, "$1" + separator);
        }

        // Remove the last separator & any extra whitespace
        withSpaces = withSpaces.replace(new RegExp(separator+"$"), "");
        if (withSpaces.trim) {
            withSpaces = withSpaces.trim();
        }

        return withSpaces;
    }

    , _formatCVV = function(/* String */ cvv) {
        return cvv.replace(/[^0-9]/g, "");
    }

    , _getDigitIndexFromTextStringIndex = function(/* String */ ccText, /* int */ textIndex) {
         var digitIndex = 0;
         for (var i = 0; i < ccText.length && i < textIndex; i++) {
             var currentChar = ccText.charAt(i);
             if ((currentChar >= '0' && currentChar <= '9') || currentChar == 'x') {
                 digitIndex++;
             }
         }
         return digitIndex;
    }

    , _mapDigitIndexToFormattedStringIndex = function(/* int */ index, /* boolean */ cardIsAmex) {
        // Ever the snowflake...
        if (cardIsAmex) {
            if (index < 5) {
                return index;
            }
            if (index < 11) {
                return index + 1;
            }
            return index + 2;
        }

        return index + (index - 1) / 4;
    };



    //
    // Public functions on the ta.cards namespace
    //

    return {
        detectCardType: _detectCardType
        , detectCardTypeFromIIN: _detectCardTypesFromIIN
        , isValidCardNumber: _isValidCardNumber
        , passesLuhn: _passesLuhn
        , getCardLogo: _getCardLogo
        , formatCreditCardNumber: function(creditCardNumber, separator) {
            if (separator == null) {
                separator = " ";
            }
            return _formatCreditCardNumber(creditCardNumber, separator);
        }
        , formatCVV: function(cvv) {
            return _formatCVV(cvv);
        }
        , getDigitIndexFromTextStringIndex: _getDigitIndexFromTextStringIndex
        , matchDigitIndexToFormattedStringIndex: _mapDigitIndexToFormattedStringIndex
    };
})();


})(ta);

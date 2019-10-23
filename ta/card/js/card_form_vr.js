//ccentry form controller for VR
FormController = CardFormShared();

ta.extend(FormController, {
    highlightErrors: function() {
            var firstFailureId;
            var card = FormController._inputFieldErrors(FormController.FIELD_CARD_NUM, FormController._validateCardNumber);
            var cvv = FormController._inputFieldErrors(FormController.FIELD_CARD_SECURITY_CODE, FormController._validateCvv);
            var expiry = FormController._dropDownFieldErrors();
            if(!card){
                firstFailureId =  FormController.FIELD_CARD_NUM;
            } else if(!cvv){
                firstFailureId = FormController.FIELD_CARD_SECURITY_CODE;
            } else if(!expiry){
                firstFailureId = FormController.FIELD_CARD_EXPIRY_MONTH;
            }
            return firstFailureId ? ta.getOffset(ta.elem(firstFailureId)).top : null;
    }
    , _inputFieldErrors: function(formElementId, validationFunction) {
            if (validationFunction()) {
                FormController._hideError(formElementId);
                ta.removeElemClass(formElementId, "hasError");
                return true;
            } else {
                FormController._showError(formElementId);
                ta.addElemClass(formElementId, "hasError");
                return false;
            }
    }
    , _dropDownFieldErrors: function() {
            var validYear = false, validMonth = false;
            if (FormController._validateExpiryYear()) {
                FormController._hideErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_YEAR));
                validYear = true;
            } else {
                FormController._showErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_YEAR));
                validYear = false;
            }

            if (FormController._validateExpiryMonth()) {
                FormController._hideErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_MONTH));
                validMonth = true;
            } else {
                FormController._showErrorTitle(ta.elem(FormController.FIELD_CARD_EXPIRY_MONTH));
                validMonth = false;
            }
           
           return validMonth && validYear;
    }
});

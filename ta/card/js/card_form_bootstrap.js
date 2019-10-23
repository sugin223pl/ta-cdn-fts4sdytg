// Entry point to form processing logic.
// Initializes all components that listen to parent page events, interacts with form and call CDE

function formLoaded(origin, xsrfToken, formControllerFile) {
    var parentPageCommunicationClient = new ParentPageCommunicationClient(origin, xsrfToken);
    var vaultCommunicationClient = new CdeVaultCommunicationClient(parentPageCommunicationClient);
    parentPageCommunicationClient.setVaultCallback(vaultCommunicationClient.vaultPaymentDetails);
    ta.error.wrapAllFunctions(vaultCommunicationClient, "vault_communication_client.js", FormController.getLogLevel);
    ta.error.wrapAllFunctions(parentPageCommunicationClient, "parent_page_communication_client.js", FormController.getLogLevel);
    ta.error.wrapAllFunctions(FormController, formControllerFile, FormController.getLogLevel);
    parentPageCommunicationClient.setupParentPageMessagesListener();
    FormController.setupOnChangeListeners(parentPageCommunicationClient);
    if (FormController.setupOnKeyupListeners) {
        FormController.setupOnKeyupListeners(parentPageCommunicationClient);
    }
    if (FormController.setupTooltips) {
        FormController.setupTooltips();
    }
    parentPageCommunicationClient.postFormLoadedMessage();
}

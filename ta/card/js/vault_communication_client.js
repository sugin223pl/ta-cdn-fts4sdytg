// Vaults card details into CDE

var vault = {
    isSubmitAllowed: true,
    responseTimeoutMillis: 3000//3 seconds
};

//Class
function CdeVaultCommunicationClient(parentPageCommunicationClient) {
    this.vaultPaymentDetails = function(xsrfTokenValue, clientId, extraDetails) {
        if (!FormController.validate()) {
            FormController.highlightErrors();
            parentPageCommunicationClient.postVaultCallFailedMessage(400);
            return;
        }

        url = ta.origin() + "/v1/checkoutsessions/" + FormController.checkoutSessionId() + "/paymentaccounts";

        if (FormController.cvvFormOnly()) {
          postBody = {
              paymentAccounts: {
                  cvvs: [
                      {
                          persistAccount: false,
                          cvv: FormController.cvv()
                      }
                  ]
              },
              xsrfToken: xsrfTokenValue
          };
        }else{
          var cardType = FormController.definiteCardType();
          postBody = {
              paymentAccounts: {
                  creditCards: [
                      {
                          persistAccount: false,
                          cardType: cardType ? cardType.name : null,
                          number: FormController.ccnumber(),
                          expMonth: FormController.expirationMonth(),
                          expYear: FormController.expirationYear(),
                          cvv: FormController.cvv()
                      }
                  ]
              },
              xsrfToken: xsrfTokenValue
          };
        }
        var cardholderName = FormController.ccname();
        if(cardholderName != null) {
          postBody.paymentAccounts.creditCards[0].name = cardholderName;
        }

        // Add whitelisted fields to credit card for vaulting (name + address)
        if (extraDetails) {
            var ccData = postBody.paymentAccounts.creditCards[0];
            if (extraDetails.name) ccData.name = extraDetails.name;
            if (extraDetails.address)
            {
                ccData.address = {};
                for (var attrname in extraDetails.address) {
                    if (["street", "street2", "city", "state", "country", "postalCode", "phoneNumber"].indexOf(attrname) >= 0)
                        ccData.address[attrname] = extraDetails.address[attrname];
                }
            }
        }
        callVault(parentPageCommunicationClient, url, JSON.stringify(postBody), clientId, generateVaultRequestId()/*Possibly it's better to pass it using value from booking context*/, "vaultPaymentDetails");
    };

    this.vaultCvv = function(xsrfTokenValue, clientId) {
        if (!FormController.validate()) {
            FormController.highlightErrors();
            parentPageCommunicationClient.postVaultCallFailedMessage(400);
            return;
        }

        url = ta.origin() + "/v1/checkoutsessions/" + FormController.checkoutSessionId() + "/cvv";
        postBody = {
                cvv: FormController.cvv(),
                xsrfToken: xsrfTokenValue
        };

        callVault(parentPageCommunicationClient, url, JSON.stringify(postBody), clientId, generateVaultRequestId()/*Possibly it's better to pass it using value from booking context*/, "vaultCvv");
    }
}

function generateVaultRequestId() {
    return "VLT-RQ-" + generateUuid();
}

function generateUuid() {
    //UUID implementation from http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function callVault(parentPageCommunicationClient, url, message, clientId, requestId, requestType) {
    if (!(vault.isSubmitAllowed)) {
        return;
    }
    vault.isSubmitAllowed = false;

    xmlhttp = xmlHttpObject();

    xmlhttp.ontimeout = function() {
        httpGatewayTimeoutCode = 504;
        parentPageCommunicationClient.postVaultCallFailedMessage(httpGatewayTimeoutCode);
        vault.isSubmitAllowed = true;
    };
    xmlhttp.onerror = function (e) {
        ta.log("Vault error: " + e);
        httpServerErrorCode = 500;
        parentPageCommunicationClient.postVaultCallFailedMessage(httpServerErrorCode);
        vault.isSubmitAllowed = true;
    };
    xmlhttp.onload = function() {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                if (requestType === "vaultCvv") {
                  parentPageCommunicationClient.postCvvSubmitSucceededMessage(xmlhttp);
                }
                else if (requestType === "vaultPaymentDetails") {
                  parentPageCommunicationClient.postPaymentSubmitSucceededMessage(xmlhttp);
                }
                vault.isSubmitAllowed = false;
            } else {
                parentPageCommunicationClient.postSubmitFailedMessage(xmlhttp);
                vault.isSubmitAllowed = true;
            }
        }
    };

    asynchronous = true;
    xmlhttp.open("POST", url, asynchronous);

    xmlhttp.timeout = vault.responseTimeoutMillis;

    xmlhttp.setRequestHeader("Content-type","application/json");
    xmlhttp.setRequestHeader("x-trip-requestId", requestId);
    xmlhttp.setRequestHeader("x-trip-clientId", clientId);

    xmlhttp.send(message);
}

function xmlHttpObject() {
    if (window.XMLHttpRequest) {
        return new window.XMLHttpRequest;
    }
    else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

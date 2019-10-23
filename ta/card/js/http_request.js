ta = ta || {};
ta.http_request = (function(document, window, undefined) {
    /**
    * Send an ajax request
    * @param url - the url to send to
    * @param callback - an optional callback to execute
    * @param method - the request method to use
    * @param data - the data to send as the request body
    * @param headers - any request headers to send
    */
    var _send = function(/* String */ url, /* Function */ callback, /* String */method, /* String */data, /* Object */ headers) {

        if(_isXDomainBrowser()) {
            return _sendXDomainRequest(url, callback, method, data, headers);
        }

        if (typeof XMLHttpRequest !== 'undefined') {
            var requestObject = new XMLHttpRequest();
        }

        if(!requestObject) {
            return false;
        }

        requestObject.open(method, url, true);
        requestObject.timeout = 120000; // 2 min timeout
        requestObject.onreadystatechange = function() {
            if (requestObject.readyState == 4 && callback) {
                callback(requestObject.responseText, requestObject.status);
            }
        };

        if(headers) {
            for(var headerName in headers) {
                requestObject.setRequestHeader(headerName, headers[headerName]);
            }
        }

        requestObject.send(data);
    }
    /**
    * Send an ajax POST request
    * @param url - the url to send to
    * @param data - A json object or string that will be sent as POST data
    * @param headers - any request headers to send
    * @param callback - An optional callback to execute
    */
    , _post = function(/* String */ url, /* Object/String */data, /* Object */headers, /* Function */ callback) {
        _send(url, callback, 'POST', _objectToQueryString(data), headers);
    }

    /**
    * Send a new XDomainRequest ajax request
    *
    * @param url - the url to send to
    * @param callback - an optional callback to execute
    * @param method - the request method to use
    * @param data - the data to send as the request body
    * @param headers - any request headers to send
    */
    , _sendXDomainRequest = function(url, callback, method, data, headers) {
        var requestId
        , clientId
        , xdr
        ;

        xdr = new XDomainRequest();
        xdr.timeout = 120000;
        xdr.onprogress = function () { };
        xdr.ontimeout = function () { };
        xdr.onerror = function () { };
        if(headers) {
            requestId = headers["x-trip-requestid"];
            clientId = headers["x-trip-clientid"];
        }

        if(requestId) {
            url = _appendQueryParam(url, "x-trip-requestid", requestId);
        }
        if(clientId) {
            url = _appendQueryParam(url, "x-trip-clientid", clientId);
        }

        if(callback) {
            xdr.onload = function() {
                // Note that XDomainRequests don't return a status code
                callback(xdr.responseText, /*status*/ 200);
            };
        }

        xdr.open(method, url);
        xdr.send(data);
    }

    /**
    * If this is an IE browser, return the version number parsed from the
    * user agent string
    */
    , _getInternetExplorerVersion = function() {
        var versionNumber = -1; // Return value assumes failure.
        if (navigator)
        {
            var userAgent = navigator.userAgent;
            var regex  = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
            var matches = regex.exec(userAgent);
            if (matches != null && matches[1] != null)
            versionNumber = parseFloat( matches[1] );
        }
        return versionNumber;
    }

    /**
    * Return true if this browser requires XDomainRequest
    */
    , _isXDomainBrowser = function() {
        var internetExplorerVersion = _getInternetExplorerVersion();
        return internetExplorerVersion >= 8.0 && internetExplorerVersion < 10.0 && typeof XDomainRequest !== 'undefined';
    }
    /**
    * Append a query param to the given url, returning a new string
    *
    * @param url - the url to append to
    * @param key - the query param key
    * @param value - the query param value
    *
    * @return a new url string the the query param appended
    */
    , _appendQueryParam = function(/* String */ url, /* String */ key, /* String */ value) {
        if(!key || !value || !url || !(typeof url === 'string'  || url instanceof String) || url.length == 0) {
            return url;
        }

        var separator = (url.indexOf('?') === -1) ? "?" : "&";

        return url + separator + encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }

    /**
    * Takes an object and URL encodes it
    * @param data - A JS object
    * @returns a url encoded string representing the object
    */
    , _objectToQueryString = function(/* Object/String */ data) {
        if(!data) {
            return "";
        }

        if(typeof data === "string" || data instanceof String) {
            return encodeURIComponent(data);
        }

        var query = [];
        for (var key in data) {
            // In case data.hasOwnProperty is not defined or is not equivalent to Object.hasOwnProperty
            // see http://stackoverflow.com/questions/12017693/why-use-object-prototype-hasownproperty-callmyobj-prop-instead-of-myobj-hasow
            if (!Object.prototype.hasOwnProperty.call(data, key)) {
                continue;
            }

            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        return query.join('&');
    }
    ;
    return {
        post: _post

    }
})(document, window);

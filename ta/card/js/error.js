ta = ta || {};

ta.error = (function(document, window, undefined) {

    /**
    * Wrap this function is a try/catch block to prevent errors from
    * bubbling up to the window error handler. This should be applied
    * to every entry point, which means every publically
    * callable function (in both the top level and all the builders)
    */
    var _wrap = function(/* Function */ originalFunction, filename, logLevelGetter) {
        return function() {
            var postData;

            try {
                return originalFunction.apply(this, arguments);
            } catch (ex) {
                postData = {"file": filename,
                            "app": false,
                            "site": document.location.host,
                            "url": document.location.href,
                            "msg": ex.message || ex,
                            "stack": ex.stack || new Error().stack,
                            "level": logLevelGetter.call(this)};
                var headers = {'Content-type': 'application/x-www-form-urlencoded'};
                ta.http_request.post(ta.origin() + "/JSErrorRecord", postData, headers);
            }
        };
    }
    , _logError = function(message, stacktrace, filename) {
        _log(message, stacktrace, filename, "error");
    }
    , _logDebug = function(message, stacktrace, filename) {
        _log(message, stacktrace, filename, "debug")
    }
    , _log = function(message, stacktrace, filename, level) {
        var postData = {"file": filename,
                        "app": false,
                        "site": document.location.host,
                        "url": document.location.href,
                        "msg": message,
                        "stack": stacktrace,
                        "level": level};
        var headers = {'Content-type': 'application/x-www-form-urlencoded'};
        ta.http_request.post(ta.origin() + "/JSErrorRecord", postData, headers);
    }
    /**
     *  Loops through the given context and wraps all functions with _wrap().
     */
    , _wrapAllFunctions = function(context, filename, logLevelGetter) {
        context.originalFunctions = {}
        for (var func in context) {
            if (typeof(context[func]) === 'function') {
                context.originalFunctions[func] = context[func];
                context[func] = _wrap(context.originalFunctions[func], filename, logLevelGetter);
            }
        }
    }
    ;
    return {
        wrap: _wrap
      , logError: _logError
      , logDebug: _logDebug
      , wrapAllFunctions: _wrapAllFunctions
    }
})(document, window);

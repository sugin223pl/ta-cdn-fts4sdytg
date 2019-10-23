// Common utilities for CDE form.
// It was recommended to not to use any libraries (incl. JQuery) in CDE form.

// IE8 see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Compatibility
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
            from += len;
        }

        for (; from < len; from++)
        {
            if (from in this && this[from] === elt) {
                return from;
            }
        }
        return -1;
    };
}

Array.prototype.clone = function() {
    return this.slice(0);
};

// Pre-JS 1.6 compatible
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, context) {
        var len = this.length >>> 0;
        if (typeof callback != "function") {
            throw new TypeError();
        }
        for (var i = 0; i < len; i++) {
            if (i in this) {
                callback.call(context || null, this[i], i, this);
            }
        }
    };
}

//IE8 see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

//IE8 see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}

ta = {
    DEBUG_MODE: false,//Change to true if you are doing local debugging. NB: log/write to console is not always working in IE
    NUMBER_WORDS: ['zero','one','two','three','four','five','six','seven','eight','nine'],

    // Helper utility to extend object obj with the properties
    // contained in object props.
    extend: function (obj, props) {
        for(var prop in props) {
            if(Object.prototype.hasOwnProperty.call(props, prop)) {
                obj[prop] = props[prop];
            }
        }
    },
    elem: function(id) {
        return document.getElementById(id);
    },
    getElemVal: function(id) {
        return ta.elem(id).value;
    },
    getElemValSafe: function(id) {
        var elem = ta.elem(id);
        return elem ? elem.value : null;
    },
    setElemVal: function(id, newValue) {
        return ta.elem(id).value = newValue;
    },
    addElemClass: function(id, newClass) {
        element = ta.elem(id);
        if (element) {
            ta.addClassToElem(element, newClass);
        }
    },
    addClassToElem: function(elem, newClass) {
        elem.className = elem.className + ' ' + newClass;
    },
    removeElemClass: function(id, oldClass) {
        element = ta.elem(id);
        if (element) {
            ta.removeClassFromElem(element, oldClass);
        }
    },
    removeClassFromElem: function(elem, oldClass) {
        elem.className = elem.className.replace(new RegExp('(?:^|\\s)' + oldClass + '(?!\\S)', 'g') ,'');
    },
    hasElemClass: function(id, testClass) {
        return (" " + ta.elem(id).className + " ").replace(/\s+/g," ").indexOf(" " + testClass + " ") > -1;
    },
    origin: function() {
        if (!window.location.origin) {
            return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
        }
        return window.location.origin;
    },
    log: function(message) {
        if (ta.DEBUG_MODE) {
            console.log("[cde_frame] " + message)
        }
    },
    getHeight: function(elem) {
        if (!elem) {
            return 0;
        }
        var verticalMargin = 0;
        // Try to retrieve the margins and ignore if something goes wrong. A small layout issue is better than failing to get the height.
        try {
            if (window.getComputedStyle) {
                var computedStyles = window.getComputedStyle(elem);
                if (computedStyles) {
                    verticalMargin  = parseInt(computedStyles.getPropertyValue('margin-top'), 10) + parseInt(computedStyles.getPropertyValue('margin-bottom'), 10);
                }
            } else if (elem.currentStyle) {
                // <= IE8
                verticalMargin = parseInt(elem.currentStyle['margin-top'], 10) + parseInt(elem.currentStyle['margin-bottom'], 10);
            }
        } catch (e) {
            // TODO Add logging if something goes wrong so we can fix layout problems.
        }
        if (!verticalMargin) {
            verticalMargin = 0;
        }
        return Math.max(elem.scrollHeight, elem.offsetHeight, elem.clientHeight) + verticalMargin;
    },

    getOffset: function(elem) {
        var offset = {left: 0, top: 0};
        for (var el=elem; el!==null; el=el.offsetParent) {
            offset.left += el.offsetLeft;
            offset.top += el.offsetTop;
        }
        return offset;
    },

    /**
     * Escapes a string s and returns it.
     * Accepts an optional param optionalOrigin that should indicate where this is being called from.
     * Knowing the origin will be helpful for debugging errors.
     */
    escapeHTMLFromString: function(s, optionalOrigin) {
        if (!s || typeof s !== "string") {
            return s;
        }
        var escapedStr = s.replace(/[&"<>]/g, function (c) {
            return {
                '&': "&amp;",
                '"': "&quot;",
                '<': "&lt;",
                '>': "&gt;"
            }[c];
        });
        if (s !== escapedStr) {
            var errorMsg = "Potentially malicious content being escaped. Original size: "
                           + ta.convertNumToEnglish(s.length)
                           + ". Escaped size: "
                           + ta.convertNumToEnglish(escapedStr.length);
            if (optionalOrigin && typeof optionalOrigin === "string") {
                errorMsg = errorMsg + ". Origin: " + optionalOrigin;
            }
            // Potential attack if we had to escape anything
            ta.error.logError(errorMsg, (new Error()).stack, "ta.js");
        }
        return escapedStr;
    },
    /**
     * Iterate through all of the object properties and escape all of the string ones
     * Accepts an optional param optionalOrigin that should indicate where this is being called from.
     * Knowing the origin will be helpful for debugging errors.
     */
    escapeHTML: function(obj, optionalOrigin) {
        if (obj === null) {
            return obj;
        }
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            for (var i = 0 ; i < obj.length; i++ ) {
                var escapedArr = this.escapeHTML(obj[i], optionalOrigin);
                obj[i] = escapedArr;
            }
            return obj;
        }
        if (typeof obj === 'object') {
            for (var o in obj) {
                if (obj.hasOwnProperty(o)) {
                    var escapedObj = this.escapeHTML(obj[o], optionalOrigin);
                    obj[o] = escapedObj;
                }
            }
            return obj;
        }
        return ta.escapeHTMLFromString(obj, optionalOrigin);
    },
    convertNumToEnglish: function(num) {
        if (typeof num !== "number") {
            return "";
        }
        var charArray = ("" + num).split("");
        var numAsWordArray = [];
        charArray.forEach(function(item) {
              numAsWordArray.push(ta.NUMBER_WORDS[parseInt(item)]);
            }
        );
        return numAsWordArray.join(" ");
    },
    langs : (function() {

        var LOCALIZATION_STORE = {} // Contains localizations for keys added in velocity

        , _localize = function(key) {
            if (!(key in LOCALIZATION_STORE)) {
                return key;
            }
            var str = LOCALIZATION_STORE[key];
            return str ? str : key;
        }
        , _addLocalization = function(key, localization) {
            if (!key || !localization) {
                return;
            }
            LOCALIZATION_STORE[key] = localization;
        }
        ;

        return {
            localize: _localize,
            addLocalization: _addLocalization
        };
    })()
}

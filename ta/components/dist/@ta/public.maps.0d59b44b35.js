
	($WP = "undefined" != typeof $WP ? $WP : []).push({
        id: "@ta/public.maps",
        d: ["@ta/maps.provider-names", "vendor-babel", "vendor-react-libs", "ta-platform", "lithium-platform"],
        e: ["./packages/public/maps/maps.jsx"],
        x: {
            "./node_modules/@babel/runtime/helpers/esm/get.js": ["a"],
            "./packages/public/maps/maps.jsx": ["MapProviderGoogle", "MapProviderCitymaps", "MapProviderBing", "MapProviderAutonavi", "LatLng", "LatLngBounds", "MapComponent", "Util", "CircleOverlay", "MapInterface", "useMapEvent", "MapContext", "MapContextProvider", "MapContextConsumer", "Marker", "IconMarker", "Popup", "PolygonOverlay", "MockMapInterface"]
        },
        m: {
            "./node_modules/@babel/runtime/helpers/esm/get.js": function(e, t, o) {
                "use strict";
    
                function n(e) {
                    return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(e)
                }
    
                function i(e, t, o) {
                    return (i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function e(t, o, i) {
                        var a = function r(e, t) {
                            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e)););
                            return e
                        }(t, o);
                        if (a) {
                            var s = Object.getOwnPropertyDescriptor(a, o);
                            return s.get ? s.get.call(i) : s.value
                        }
                    })(e, t, o || e)
                }
                o.d(t, "a", function() {
                    return i
                })
            },
            "./packages/public/maps/maps.jsx": function(e, t, o) {
                "use strict";
                o.r(t);
                var n, i = o("@ta/maps.provider-names"),
                    a = o("@babel/runtime/helpers/esm/classCallCheck"),
                    r = o.n(a),
                    s = o("@babel/runtime/helpers/esm/createClass"),
                    l = o.n(s),
                    u = o("@babel/runtime/helpers/esm/defineProperty"),
                    c = o.n(u),
                    p = Math.PI / 180,
                    h = function() {
                        function e(t, o) {
                            r()(this, e), c()(this, "lat", void 0), c()(this, "lng", void 0), this.lat = t, this.lng = o
                        }
                        return l()(e, [{
                            key: "equals",
                            value: function e(t) {
                                return this.lat === t.lat && this.lng === t.lng
                            }
                        }, {
                            key: "distanceTo",
                            value: function e(t) {
                                var o = this.lat * p,
                                    n = t.lat * p,
                                    i = Math.sin((t.lat - this.lat) * p / 2),
                                    a = Math.sin((t.lng - this.lng) * p / 2),
                                    r = i * i + Math.cos(o) * Math.cos(n) * a * a;
                                return 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r)) * 6371e3
                            }
                        }]), e
                    }(),
                    v = function() {
                        function e(t, o) {
                            var n = this;
                            r()(this, e), c()(this, "southwest", void 0), c()(this, "northeast", void 0), c()(this, "containsPoint", function(e) {
                                return n.southwest.lat <= e.lat && n.southwest.lng <= e.lng && n.northeast.lat >= e.lat && n.northeast.lng >= e.lng
                            }), c()(this, "containsBounds", function(e) {
                                return n.southwest.lat <= e.southwest.lat && n.southwest.lng <= e.southwest.lng && n.northeast.lat >= e.northeast.lat && n.northeast.lng >= e.northeast.lng
                            }), c()(this, "intersectsBounds", function(e) {
                                return n.southwest.lat <= e.northeast.lat && n.southwest.lng <= e.northeast.lng && n.northeast.lat >= e.southwest.lat && n.northeast.lng >= e.southwest.lng
                            }), this.southwest = t, this.northeast = o
                        }
                        return l()(e, [{
                            key: "widthInMeters",
                            value: function e() {
                                return this.northeast.distanceTo(new h(this.northeast.lat, this.southwest.lng))
                            }
                        }, {
                            key: "heightInMeters",
                            value: function e() {
                                return this.northeast.distanceTo(new h(this.southwest.lat, this.northeast.lng))
                            }
                        }], [{
                            key: "fromArray",
                            value: function t(o) {
                                if (0 === o.length) throw new Error("Creating a LatLngBounds from 0 items. You probably don't want this.");
                                for (var n = o[0].lat, i = o[0].lat, a = o[0].lng, r = o[0].lng, s = 1; s < o.length; ++s) {
                                    var l = o[s];
                                    n = Math.min(l.lat, n), a = Math.min(l.lng, a), i = Math.max(l.lat, i), r = Math.max(l.lng, r)
                                }
                                return new e(new h(n, a), new h(i, r))
                            }
                        }]), e
                    }(),
                    d = o("@babel/runtime/helpers/esm/objectSpread"),
                    m = o.n(d),
                    f = o("@babel/runtime/helpers/esm/possibleConstructorReturn"),
                    g = o.n(f),
                    y = o("@babel/runtime/helpers/esm/getPrototypeOf"),
                    k = o.n(y),
                    C = o("@babel/runtime/helpers/esm/inherits"),
                    M = o.n(C),
                    O = o("@babel/runtime/helpers/esm/assertThisInitialized"),
                    b = o.n(O),
                    w = o("react"),
                    P = o("@ta/events.window-scroll"),
                    L = o.n(P),
                    E = o("@ta/common.tracking"),
                    S = o.n(E),
                    x = w.createContext({
                        map: null,
                        mapProvider: ""
                    }),
                    I = x.Provider,
                    z = x.Consumer,
                    Z = o("@babel/runtime/helpers/esm/extends"),
                    H = o.n(Z),
                    A = o("@ta/lithium.context"),
                    W = o("./node_modules/@babel/runtime/helpers/esm/get.js"),
                    B = o("@ta/platform.import"),
                    D = function e(t) {
                        if (!t) return null;
                        var o = window;
                        return o.ta || (o.ta = {}), t.split(".").forEach(function(e) {
                            o[e] || (o[e] = {}), o = o[e]
                        }), o
                    },
                    T = function e(t, o, n) {
                        var i = D(o);
                        return !!i && (i[n] = t, !0)
                    },
                    F = function e(t, o) {
                        var n = D(t);
                        return n ? n[o] : null
                    },
                    R = function() {
                        function e(t) {
                            r()(this, e), c()(this, "libraryConfig", {}), c()(this, "interfaceClass", void 0), this.libraryConfig = {}, this.interfaceClass = t
                        }
                        return l()(e, [{
                            key: "loadLibrary",
                            value: function e(t) {
                                return !!this.isLibraryLoaded() && (t.call(null), !0)
                            }
                        }, {
                            key: "isLibraryLoaded",
                            value: function e() {
                                return !1
                            }
                        }, {
                            key: "getLibraryConfig",
                            value: function e() {
                                return this.libraryConfig
                            }
                        }, {
                            key: "getInterfaceClass",
                            value: function e() {
                                return this.interfaceClass
                            }
                        }, {
                            key: "configureLibrary",
                            value: function e(t) {
                                Object.assign(this.libraryConfig, t)
                            }
                        }]), e
                    }(),
                    j = function() {
                        function e() {
                            r()(this, e), c()(this, "events", {})
                        }
                        return l()(e, [{
                            key: "on",
                            value: function e(t, o) {
                                return this.events[t] || (this.events[t] = []), this.events[t].push({
                                    callback: o,
                                    single: !1
                                }), this
                            }
                        }, {
                            key: "once",
                            value: function e(t, o) {
                                return this.events[t] || (this.events[t] = []), this.events[t].push({
                                    callback: o,
                                    single: !0
                                }), this
                            }
                        }, {
                            key: "off",
                            value: function e(t, o) {
                                return this.events[t] && (this.events[t] = o ? this.events[t].filter(function(e) {
                                    return o && e.callback !== o
                                }) : []), this
                            }
                        }, {
                            key: "removeAllListeners",
                            value: function e(t) {
                                var o = this;
                                return t && this.events[t] ? this.events[t] = [] : t || Object.keys(this.events).forEach(function(e) {
                                    o.events[e] = []
                                }), this
                            }
                        }, {
                            key: "emit",
                            value: function e(t) {
                                for (var o = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                                return this.events[t] && (this.events[t] = this.events[t].filter(function(e) {
                                    if (e.callback) try {
                                        e.callback.apply(o, i)
                                    } catch (e) {
                                        "undefined" != typeof console && "Error in event handler for ".concat(t)
                                    }
                                    return !e.single
                                })), this
                            }
                        }]), e
                    }(),
                    G = function() {
                        function e(t, o) {
                            r()(this, e), c()(this, "events", new j), c()(this, "padding", {
                                left: 32,
                                right: 32,
                                top: 32,
                                bottom: 32
                            }), this.padding = Object.assign(this.padding, o.padding)
                        }
                        return l()(e, [{
                            key: "unmount",
                            value: function e() {}
                        }, {
                            key: "on",
                            value: function e(t, o) {
                                this.events.on(t, o)
                            }
                        }, {
                            key: "once",
                            value: function e(t, o) {
                                this.events.once(t, o)
                            }
                        }, {
                            key: "off",
                            value: function e(t, o) {
                                this.events.off(t, o)
                            }
                        }, {
                            key: "setZoom",
                            value: function e(t, o) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "setBounds",
                            value: function e(t, o, n) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "getZoom",
                            value: function e() {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "getBounds",
                            value: function e() {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "resize",
                            value: function e() {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "createMarkerContainer",
                            value: function e() {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "removeMarkerContainer",
                            value: function e(t) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "addCircleOverlay",
                            value: function e(t) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "removeCircleOverlay",
                            value: function e(t) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "addPolygonOverlay",
                            value: function e(t) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "removePolygonOverlay",
                            value: function e(t) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "addPolylineOverlay",
                            value: function e(t) {
                                throw Error("Unimplemented")
                            }
                        }, {
                            key: "removePolylineOverlay",
                            value: function e(t) {
                                throw Error("Unimplemented")
                            }
                        }]), e
                    }(),
                    _ = function() {
                        function e() {
                            r()(this, e), c()(this, "position", void 0), c()(this, "pinContainer", void 0), c()(this, "zIndexOffset", 0), c()(this, "onMarkerReady", null), c()(this, "draggable", !1), c()(this, "onDrag", null), this.position = new h(0, 0), this.pinContainer = document.createElement("div"), this.pinContainer.style.position = "absolute", this.pinContainer.style.width = "0px", this.pinContainer.style.height = "0px", this.pinContainer.style.cursor = "pointer", this.draggable = !1
                        }
                        return l()(e, [{
                            key: "removeFromMap",
                            value: function e() {}
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t
                            }
                        }, {
                            key: "getPosition",
                            value: function e() {
                                return this.position
                            }
                        }, {
                            key: "setDraggable",
                            value: function e(t) {
                                this.draggable = t
                            }
                        }, {
                            key: "getDraggable",
                            value: function e() {
                                return this.draggable
                            }
                        }, {
                            key: "getContainer",
                            value: function e() {
                                return this.pinContainer.parentElement ? this.pinContainer : null
                            }
                        }, {
                            key: "setMarkerReadyCallback",
                            value: function e(t) {
                                this.onMarkerReady = t
                            }
                        }, {
                            key: "setDragCallback",
                            value: function e(t) {
                                this.onDrag = t
                            }
                        }, {
                            key: "setZIndexOffset",
                            value: function e(t) {
                                this.zIndexOffset = t
                            }
                        }]), e
                    }(),
                    U = function e(t) {
                        return t.clientX ? t.clientX : t.touches ? t.touches[0].clientX : 0
                    },
                    V = function e(t) {
                        return t.clientY ? t.clientY : t.touches ? t.touches[0].clientY : 0
                    },
                    N = function(e) {
                        function t(e) {
                            var o;
                            return r()(this, t), o = g()(this, k()(t).call(this)), c()(b()(b()(o)), "overlayView", void 0), c()(b()(b()(o)), "moveHandler", void 0), c()(b()(b()(o)), "touchHandler", void 0), c()(b()(b()(o)), "dragStartEndHandlers", void 0), c()(b()(b()(o)), "startDrag", function(e) {
                                o.overlayView.map.set("draggable", !1);
                                var t = U(e),
                                    n = V(e),
                                    i = function e(i) {
                                        var a = o.overlayView.getProjection();
                                        if (a) {
                                            var r = new google.maps.LatLng(o.position.lat, o.position.lng),
                                                s = a.fromLatLngToDivPixel(r),
                                                l = U(i),
                                                u = V(i),
                                                c = t - l,
                                                p = n - u,
                                                v = o.overlayView.getProjection().fromDivPixelToLatLng(new google.maps.Point(s.x - c, s.y - p)),
                                                d = new h(v.lat(), v.lng());
                                            d && (o.position = d, o.draw()), t = l, n = u
                                        }
                                    };
                                o.moveHandler = o.moveHandler ? o.moveHandler : google.maps.event.addDomListener(o.overlayView.get("map").getDiv(), "mousemove", function(e) {
                                    i(e)
                                }), o.touchHandler = o.touchHandler ? o.touchHandler : google.maps.event.addDomListener(o.overlayView.map.getDiv(), "touchmove", function(e) {
                                    i(e)
                                })
                            }), c()(b()(b()(o)), "stopDrag", function() {
                                var e = o.overlayView.map;
                                google.maps.event.removeListener(o.moveHandler), google.maps.event.removeListener(o.touchHandler), o.moveHandler = null, o.touchHandler = null, e && (o.bubbleUpDragPosition(), o.overlayView.map.set("draggable", !0))
                            }), c()(b()(b()(o)), "bubbleUpDragPosition", function() {
                                o.onDrag && o.onDrag(new h(o.position.lat, o.position.lng))
                            }), o.dragStartEndHandlers = [], o.overlayView = new google.maps.OverlayView, o.overlayView.onAdd = o.onAdd.bind(b()(b()(o))), o.overlayView.draw = o.draw.bind(b()(b()(o))), o.overlayView.onRemove = o.onRemove.bind(b()(b()(o))), o.overlayView.setMap(e), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.overlayView.setMap(null), this.stopDrag(), this.removeDragHandlers()
                            }
                        }, {
                            key: "onRemove",
                            value: function e() {
                                this.pinContainer && this.pinContainer.parentNode && (this.pinContainer.parentNode.removeChild(this.pinContainer), google.maps.event.trigger(this, "onremove"))
                            }
                        }, {
                            key: "onAdd",
                            value: function e() {
                                this.draggable && this.addDragHandlers(), this.overlayView.getPanes().overlayMouseTarget.appendChild(this.pinContainer), google.maps.OverlayView.preventMapHitsFrom(this.pinContainer), this.onMarkerReady && this.onMarkerReady()
                            }
                        }, {
                            key: "draw",
                            value: function e() {
                                var t = this.overlayView.getProjection();
                                if (t) {
                                    var o = t.fromLatLngToDivPixel(new google.maps.LatLng(this.position.lat, this.position.lng));
                                    this.pinContainer.style.left = "".concat(o.x, "px"), this.pinContainer.style.top = "".concat(o.y, "px");
                                    var n = this.zIndexOffset + Math.round(o.y);
                                    this.pinContainer.style.zIndex = n.toString()
                                }
                            }
                        }, {
                            key: "setZIndexOffset",
                            value: function e(o) {
                                Object(W.a)(k()(t.prototype), "setZIndexOffset", this).call(this, o), this.draw()
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t, this.draw()
                            }
                        }, {
                            key: "setDraggable",
                            value: function e(t) {
                                this.draggable !== t && (this.draggable = t, this.draggable ? this.addDragHandlers() : this.removeDragHandlers())
                            }
                        }, {
                            key: "addDragHandlers",
                            value: function e() {
                                var t = this,
                                    o = google.maps.event.addDomListener(this.pinContainer, "mousedown", this.startDrag),
                                    n = google.maps.event.addDomListener(this.pinContainer, "touchstart", this.startDrag),
                                    i = google.maps.event.addDomListener(this.overlayView.map, "mouseleave", function() {
                                        google.maps.event.trigger(t.pinContainer, "mouseup")
                                    }),
                                    a = google.maps.event.addDomListener(this.overlayView.map, "touchcancel", function() {
                                        google.maps.event.trigger(t.pinContainer, "touchend")
                                    }),
                                    r = google.maps.event.addDomListener(this.pinContainer, "mouseup", this.stopDrag),
                                    s = google.maps.event.addDomListener(this.pinContainer, "touchend", this.stopDrag);
                                this.dragStartEndHandlers = [o, n, i, a, r, s]
                            }
                        }, {
                            key: "removeDragHandlers",
                            value: function e() {
                                this.dragStartEndHandlers.forEach(function(e) {
                                    google.maps.event.removeListener(e)
                                }), this.dragStartEndHandlers = []
                            }
                        }]), t
                    }(_),
                    X = function() {
                        function e(t) {
                            r()(this, e), c()(this, "position", void 0), c()(this, "radius", void 0), c()(this, "opacity", void 0), c()(this, "fillColor", void 0), c()(this, "strokeColor", void 0), c()(this, "strokeWidth", void 0), this.position = t.position, this.radius = t.radius, this.opacity = t.opacity, this.fillColor = t.fillColor, this.strokeColor = t.strokeColor, this.strokeWidth = t.strokeWidth
                        }
                        return l()(e, [{
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t
                            }
                        }, {
                            key: "setRadius",
                            value: function e(t) {
                                this.radius = t
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t
                            }
                        }]), e
                    }(),
                    q = function(e) {
                        function t(e, o) {
                            var n;
                            return r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "googleCircle", void 0), n.googleCircle = new google.maps.Circle({
                                strokeColor: n.strokeColor,
                                strokeWeight: n.strokeWidth,
                                strokeOpacity: n.opacity,
                                fillColor: n.fillColor,
                                fillOpacity: n.opacity,
                                radius: n.radius,
                                map: o,
                                center: {
                                    lat: n.position.lat,
                                    lng: n.position.lng
                                }
                            }), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.googleCircle.setMap(null)
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t, this.googleCircle.setOptions({
                                    center: {
                                        lat: this.position.lat,
                                        lng: this.position.lng
                                    }
                                })
                            }
                        }, {
                            key: "setRadius",
                            value: function e(t) {
                                this.radius = t, this.googleCircle.setOptions({
                                    radius: this.radius
                                })
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.googleCircle.setOptions({
                                    fillOpacity: this.opacity,
                                    strokeOpacity: this.opacity
                                })
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.googleCircle.setOptions({
                                    fillColor: this.fillColor
                                })
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.googleCircle.setOptions({
                                    strokeColor: this.strokeColor
                                })
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.googleCircle.setOptions({
                                    strokeWeight: this.strokeWidth
                                })
                            }
                        }]), t
                    }(X),
                    K = function() {
                        function e(t) {
                            r()(this, e), c()(this, "coords", void 0), c()(this, "opacity", void 0), c()(this, "fillColor", void 0), c()(this, "strokeColor", void 0), c()(this, "strokeWidth", void 0), c()(this, "strokeOpacity", void 0), c()(this, "onMouseOver", void 0), c()(this, "onMouseOut", void 0), c()(this, "onClick", void 0), this.coords = t.coords, this.opacity = t.opacity, this.fillColor = t.fillColor, this.strokeColor = t.strokeColor, this.strokeWidth = t.strokeWidth, this.strokeOpacity = t.strokeOpacity, this.onClick = t.onClick, this.onMouseOver = t.onMouseOver, this.onMouseOut = t.onMouseOut
                        }
                        return l()(e, [{
                            key: "setPolygon",
                            value: function e(t) {
                                this.coords = t
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t
                            }
                        }, {
                            key: "setStrokeOpacity",
                            value: function e(t) {
                                this.strokeOpacity = t
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t
                            }
                        }, {
                            key: "setOnClickInteraction",
                            value: function e(t) {
                                this.onClick = t
                            }
                        }, {
                            key: "setOnMouseOverInteraction",
                            value: function e(t) {
                                this.onMouseOver = t
                            }
                        }, {
                            key: "setOnMouseOutInteraction",
                            value: function e(t) {
                                this.onMouseOut = t
                            }
                        }]), e
                    }(),
                    Y = function(e) {
                        function t(e, o) {
                            var n;
                            return r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "googlePolygon", void 0), c()(b()(b()(n)), "onClickListener", void 0), c()(b()(b()(n)), "onMouseOverListener", void 0), c()(b()(b()(n)), "onMouseOutListener", void 0), n.googlePolygon = new google.maps.Polygon({
                                paths: n.coords,
                                strokeColor: n.strokeColor,
                                strokeWeight: n.strokeWidth,
                                strokeOpacity: n.strokeOpacity,
                                fillColor: n.fillColor,
                                fillOpacity: n.opacity
                            }), n.onClick && (n.onClickListener = google.maps.event.addListener(n.googlePolygon, "click", n.onClick)), n.onMouseOver && (n.onMouseOverListener = google.maps.event.addListener(n.googlePolygon, "mouseover", n.onMouseOver)), n.onMouseOut && (n.onMouseOutListener = google.maps.event.addListener(n.googlePolygon, "mouseout", n.onMouseOut)), n.googlePolygon.setMap(o), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.googlePolygon.setMap(null)
                            }
                        }, {
                            key: "setOnClickInteraction",
                            value: function e(t) {
                                google.maps.event.removeListener(this.onClickListener), this.onClick = t, this.onClick && (this.onClickListener = google.maps.event.addListener(this.googlePolygon, "click", this.onClick))
                            }
                        }, {
                            key: "setOnMouseOverInteraction",
                            value: function e(t) {
                                google.maps.event.removeListener(this.onMouseOverListener), this.onMouseOver = t, this.onMouseOver && (this.onMouseOverListener = google.maps.event.addListener(this.googlePolygon, "mouseover", this.onMouseOver))
                            }
                        }, {
                            key: "setOnMouseOutInteraction",
                            value: function e(t) {
                                google.maps.event.removeListener(this.onMouseOutListener), this.onMouseOut = t, this.onMouseOut && (this.onMouseOutListener = google.maps.event.addListener(this.googlePolygon, "mouseout", this.onMouseOut))
                            }
                        }, {
                            key: "setPolygon",
                            value: function e(t) {
                                this.googlePolygon.setOptions({
                                    paths: t
                                })
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.googlePolygon.setOptions({
                                    fillOpacity: this.opacity,
                                    strokeOpacity: this.opacity
                                })
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.googlePolygon.setOptions({
                                    fillColor: this.fillColor
                                })
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.googlePolygon.setOptions({
                                    strokeColor: this.strokeColor
                                })
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.googlePolygon.setOptions({
                                    strokeWeight: this.strokeWidth
                                })
                            }
                        }, {
                            key: "setStrokeOpacity",
                            value: function e(t) {
                                this.strokeOpacity = t, this.googlePolygon.setOptions({
                                    strokeOpacity: this.strokeOpacity
                                })
                            }
                        }]), t
                    }(K),
                    $ = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e, o)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "markerContainers", []), c()(b()(b()(n)), "circleOverlays", []), c()(b()(b()(n)), "polygonOverlays", []), c()(b()(b()(n)), "oldZoom", 0), c()(b()(b()(n)), "clickPosition", null), c()(b()(b()(n)), "developerBeganMovement", !1), c()(b()(b()(n)), "onIdle", function() {
                                var e = !n.developerBeganMovement;
                                n.developerBeganMovement = !1;
                                var t = n.getZoom();
                                t !== n.oldZoom && (n.oldZoom = t, null), n.events.emit("centerChange", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom(),
                                    userGesture: e
                                })
                            }), c()(b()(b()(n)), "onClick", function(e) {
                                n.clickPosition = new h(e.latLng.lat, e.latLng.lng), n.events.emit("click", {
                                    map: b()(b()(n)),
                                    position: n.clickPosition
                                })
                            }), c()(b()(b()(n)), "onTilesLoaded", function() {
                                n.events.emit("renderComplete", {
                                    map: b()(b()(n))
                                }), google.maps.event.clearListeners(n.map, "tilesloaded")
                            }), c()(b()(b()(n)), "onDragStart", function() {
                                n.events.emit("panStart", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom()
                                })
                            });
                            var i = {
                                backgroundColor: "transparent",
                                zoom: o.zoom,
                                minZoom: o.minZoom,
                                maxZoom: o.maxZoom,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                disableDefaultUI: !0,
                                center: o.center,
                                gestureHandling: !0 === o.disableGestures ? "none" : "greedy",
                                clickableIcons: !1,
                                scrollwheel: o.scrollWheelZoom
                            };
                            return false;
                        }
                        return M()(t, e), l()(t, [{
                            key: "unmount",
                            value: function e() {
                                google.maps.event.clearInstanceListeners(this.map)
                            }
                        }, {
                            key: "setCenter",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n, this.map.panTo(new google.maps.LatLng(t.lat, t.lng)), o && this.setZoom(o)
                            }
                        }, {
                            key: "setZoom",
                            value: function e(t, o) {
                                this.developerBeganMovement = !o, this.map.setZoom(Math.round(t))
                            }
                        }, {
                            key: "setBounds",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n;
                                var i = {
                                        north: t.northeast.lat,
                                        east: t.northeast.lng,
                                        south: t.southwest.lat,
                                        west: t.southwest.lng
                                    },
                                    a = o ? {
                                        left: o.left,
                                        right: o.right,
                                        top: o.top,
                                        bottom: o.bottom
                                    } : null;
                                this.map.fitBounds(i, a)
                            }
                        }, {
                            key: "panIntoView",
                            value: function e(t) {
                                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0
                                    },
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    i = this.map.getDiv().offsetWidth,
                                    a = this.map.getDiv().offsetHeight,
                                    r = function e(t, o) {
                                        var n = o.getProjection().fromLatLngToPoint(o.getBounds().getNorthEast()),
                                            i = o.getProjection().fromLatLngToPoint(o.getBounds().getSouthWest()),
                                            a = Math.pow(2, o.getZoom()),
                                            r = o.getProjection().fromLatLngToPoint(t);
                                        return new google.maps.Point((r.x - i.x) * a, (r.y - n.y) * a)
                                    }(new google.maps.LatLng(t.lat, t.lng), this.map),
                                    s = 0,
                                    l = 0,
                                    u = o.left + this.padding.left,
                                    c = o.right + this.padding.right,
                                    p = o.top + this.padding.top,
                                    h = o.bottom + this.padding.bottom;
                                r.x < u && (s = r.x - u), r.x > i - c && (s = r.x - (i - c)), r.y < p && (l = r.y - p), r.y > a - h && (l = r.y - (a - h));
                                var v = 0 !== s || 0 !== l;
                                return v && (this.developerBeganMovement = !n, this.map.panBy(s, l)), v
                            }
                        }, {
                            key: "getZoom",
                            value: function e() {
                                return this.map.getZoom()
                            }
                        }, {
                            key: "getBounds",
                            value: function e() {
                                var t = this.map.getBounds(),
                                    o = t.getSouthWest(),
                                    n = t.getNorthEast();
                                return new v(new h(o.lat(), o.lng()), new h(n.lat(), n.lng()))
                            }
                        }, {
                            key: "resize",
                            value: function e() {
                                google.maps.event.trigger(this.map, "resize")
                            }
                        }, {
                            key: "createMarkerContainer",
                            value: function e() {
                                var t = new N(this.map);
                                return this.markerContainers.push(t), t
                            }
                        }, {
                            key: "removeMarkerContainer",
                            value: function e(t) {
                                var o = this.markerContainers.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.markerContainers.splice(o, 1))
                            }
                        }, {
                            key: "addCircleOverlay",
                            value: function e(t) {
                                var o = new q(t, this.map);
                                return this.circleOverlays.push(o), o
                            }
                        }, {
                            key: "removeCircleOverlay",
                            value: function e(t) {
                                var o = this.circleOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.circleOverlays.splice(o, 1))
                            }
                        }, {
                            key: "addPolygonOverlay",
                            value: function e(t) {
                                var o = new Y(t, this.map);
                                return this.polygonOverlays.push(o), o
                            }
                        }, {
                            key: "removePolygonOverlay",
                            value: function e(t) {
                                var o = this.polygonOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.polygonOverlays.splice(o, 1))
                            }
                        }]), t
                    }(G),
                    J = {
                        domain: "maps.google.com",
                        version: "3.35",
                        channel: "ta",
                        lang: "",
                        clientId: "gme-tripadvisorinc"
                    },
                    Q = "ta.maps.provider.google",
                    ee = function e() {
                        var t = F(Q, "loadCallbackList");
                        t && t.forEach(function(e) {
                            e()
                        }), T([], Q, "loadCallbackList")
                    },
                    te = function(e) {
                        function t() {
                            var e;
                            return r()(this, t), (e = g()(this, k()(t).call(this, $))).configureLibrary(J), e
                        }
                        return M()(t, e), l()(t, [{
                            key: "isLibraryLoaded",
                            value: function e() {
                                return window.google && window.google.maps
                            }
                        }, {
                            key: "loadLibrary",
                            value: function e(o) {
                                if (Object(W.a)(k()(t.prototype), "loadLibrary", this).call(this, o)) return !0;
                                if (F(Q, "loadCallback")) {
                                    var n = F(Q, "loadCallbackList");
                                    return n && n.push(o), !1
                                }
                                T(ee, Q, "loadCallback"), T([o], Q, "loadCallbackList");
                                var i = this.getLibraryConfig(),
                                    a = {
                                        v: i.version,
                                        client: i.clientId,
                                        channel: i.channel,
                                        language: i.lang,
                                        c: "true",
                                        async: "2",
                                        callback: "".concat(Q, ".").concat("loadCallback")
                                    },
                                    r = new URLSearchParams(a),
                                    s = "//".concat(i.domain, "/maps/api/js?").concat(r.toString());
                                    console.log(s);
                                return Object(B.importScript)(s, "MAPS"), !1
                            }
                        }]), t
                    }(R),
                    oe = function(e) {
                        function t(e) {
                            var o;
                            return r()(this, t), o = g()(this, k()(t).call(this)), c()(b()(b()(o)), "leafletLayerGroup", void 0), c()(b()(b()(o)), "leafletIcon", void 0), c()(b()(b()(o)), "leafletMarker", void 0), c()(b()(b()(o)), "bubbleUpDragPosition", function() {
                                var e = o.leafletMarker.getLatLng();
                                o.onDrag && o.onDrag(new h(e.lat, e.lng))
                            }), o.leafletLayerGroup = e, Leaflet.TAIcon || (Leaflet.TAIcon = Leaflet.Icon.extend({
                                options: {
                                    markerContainer: null
                                },
                                createIcon: function e() {
                                    return this.options.markerContainer.pinContainer
                                }
                            })), o.leafletIcon = new Leaflet.TAIcon({
                                markerContainer: b()(b()(o))
                            }), o.leafletMarker = Leaflet.marker([o.position.lat, o.position.lng], {
                                icon: o.leafletIcon,
                                bubblingMouseEvents: !1,
                                draggable: o.draggable,
                                autoPan: !0
                            }), o.leafletLayerGroup.addLayer(o.leafletMarker), o.leafletMarker.getElement().style.outline = "none", o.leafletMarker.on("click dblclick mousedown mousemove mouseup", function() {}), o.leafletMarker.on("dragend", o.bubbleUpDragPosition), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.leafletLayerGroup.removeLayer(this.leafletMarker)
                            }
                        }, {
                            key: "setZIndexOffset",
                            value: function e(o) {
                                this.zIndexOffset !== o && (Object(W.a)(k()(t.prototype), "setZIndexOffset", this).call(this, o), this.leafletMarker.setZIndexOffset(o))
                            }
                        }, {
                            key: "setDraggable",
                            value: function e(t) {
                                this.draggable = t, t ? this.leafletMarker.dragging.enable() : this.leafletMarker.dragging.disable()
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t, this.leafletMarker.setLatLng([this.position.lat, this.position.lng])
                            }
                        }]), t
                    }(_),
                    ne = function(e) {
                        function t(e, o) {
                            var n;
                            return r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "leafletCircle", void 0), n.leafletCircle = Leaflet.circle([n.position.lat, n.position.lng], {
                                color: n.strokeColor,
                                fillColor: n.fillColor,
                                radius: n.radius,
                                weight: n.radius,
                                opacity: n.opacity,
                                fillOpacity: n.opacity
                            }), o.addLayer(n.leafletCircle), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.leafletCircle.remove()
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.leafletCircle.setLatLng([this.position.lat, this.position.lng]), this.position = t
                            }
                        }, {
                            key: "setRadius",
                            value: function e(t) {
                                this.leafletCircle.setRadius(t), this.radius = t
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "updateCircleStyle",
                            value: function e() {
                                this.leafletCircle.setStyle({
                                    fillColor: this.fillColor,
                                    color: this.strokeColor,
                                    weight: this.strokeWidth,
                                    opacity: this.opacity,
                                    fillOpacity: this.opacity
                                })
                            }
                        }]), t
                    }(X),
                    ie = function(e) {
                        function t(e, o) {
                            var n;
                            return r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "leafletPolygon", void 0), n.leafletPolygon = Leaflet.polygon(n.coords, {
                                color: n.strokeColor,
                                fillColor: n.fillColor,
                                opacity: n.strokeOpacity,
                                fillOpacity: n.opacity
                            }), n.onClick && n.leafletPolygon.on("click", n.onClick), n.onMouseOver && n.leafletPolygon.on("mouseover", n.onMouseOver), n.onMouseOut && n.leafletPolygon.on("mouseout", n.onMouseOut), o.addLayer(n.leafletPolygon), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.leafletPolygon.remove()
                            }
                        }, {
                            key: "setOnClickInteraction",
                            value: function e(t) {
                                this.leafletPolygon.off("click", this.onClick), this.onClick = t, this.onClick && this.leafletPolygon.on("click", this.onClick)
                            }
                        }, {
                            key: "setOnMouseOverInteraction",
                            value: function e(t) {
                                this.leafletPolygon.off("mouseover", this.onMouseOver), this.onMouseOver = t, this.onClick && this.leafletPolygon.on("mouseover", this.onMouseOver)
                            }
                        }, {
                            key: "setOnMouseOutInteraction",
                            value: function e(t) {
                                this.leafletPolygon.off("mouseout", this.onMouseOut), this.onMouseOut = t, this.onMouseOut && this.leafletPolygon.on("mouseout", this.onMouseOut)
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeOpacity",
                            value: function e(t) {
                                this.strokeOpacity = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "updatePolygonStyle",
                            value: function e() {
                                this.leafletPolygon.setStyle({
                                    fillColor: this.fillColor,
                                    color: this.strokeColor,
                                    weight: this.strokeWidth,
                                    opacity: this.strokeOpacity,
                                    fillOpacity: this.opacity
                                })
                            }
                        }]), t
                    }(K),
                    ae = function() {
                        function e(t) {
                            r()(this, e), c()(this, "coords", void 0), c()(this, "opacity", void 0), c()(this, "color", void 0), c()(this, "width", void 0), c()(this, "onMouseOver", void 0), c()(this, "onMouseOut", void 0), c()(this, "onClick", void 0), this.coords = t.coords, this.opacity = t.opacity, this.color = t.color, this.width = t.width, this.onClick = t.onClick, this.onMouseOver = t.onMouseOver, this.onMouseOut = t.onMouseOut
                        }
                        return l()(e, [{
                            key: "setPolyline",
                            value: function e(t) {
                                this.coords = t
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t
                            }
                        }, {
                            key: "setColor",
                            value: function e(t) {
                                this.color = t
                            }
                        }, {
                            key: "setWidth",
                            value: function e(t) {
                                this.width = t
                            }
                        }, {
                            key: "setOnClickInteraction",
                            value: function e(t) {
                                this.onClick = t
                            }
                        }, {
                            key: "setOnMouseOverInteraction",
                            value: function e(t) {
                                this.onMouseOver = t
                            }
                        }, {
                            key: "setOnMouseOutInteraction",
                            value: function e(t) {
                                this.onMouseOut = t
                            }
                        }]), e
                    }(),
                    re = function(e) {
                        function t(e, o) {
                            var n;
                            return r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "leafletPolyline", void 0), n.leafletPolyline = Leaflet.polyline(n.coords, {
                                color: n.color,
                                weight: n.width,
                                opacity: n.opacity
                            }), n.onClick && n.leafletPolyline.on("click", n.onClick), n.onMouseOver && n.leafletPolyline.on("mouseover", n.onMouseOver), n.onMouseOut && n.leafletPolyline.on("mouseout", n.onMouseOut), o.addLayer(n.leafletPolyline), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.leafletPolyline.remove()
                            }
                        }, {
                            key: "setOnClickInteraction",
                            value: function e(t) {
                                this.leafletPolyline.off("click", this.onClick), this.onClick = t, this.onClick && this.leafletPolyline.on("click", this.onClick)
                            }
                        }, {
                            key: "setOnMouseOverInteraction",
                            value: function e(t) {
                                this.leafletPolyline.off("mouseover", this.onMouseOver), this.onMouseOver = t, this.onClick && this.leafletPolyline.on("mouseover", this.onMouseOver)
                            }
                        }, {
                            key: "setOnMouseOutInteraction",
                            value: function e(t) {
                                this.leafletPolyline.off("mouseout", this.onMouseOut), this.onMouseOut = t, this.onMouseOut && this.leafletPolyline.on("mouseout", this.onMouseOut)
                            }
                        }, {
                            key: "setPolyline",
                            value: function e(t) {
                                this.coords = t, this.leafletPolyline.setLatLngs(this.coords)
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.updatePolylineStyle()
                            }
                        }, {
                            key: "setColor",
                            value: function e(t) {
                                this.color = t, this.updatePolylineStyle()
                            }
                        }, {
                            key: "setWidth",
                            value: function e(t) {
                                this.width = t, this.updatePolylineStyle()
                            }
                        }, {
                            key: "updatePolylineStyle",
                            value: function e() {
                                this.leafletPolyline.setStyle({
                                    color: this.color,
                                    weight: this.width,
                                    opacity: this.opacity
                                })
                            }
                        }]), t
                    }(ae),
                    se = function e(t) {
                        return t ? t.substr(0, 2) : null
                    },
                    le = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e, o)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "markerGroup", void 0), c()(b()(b()(n)), "markerContainers", []), c()(b()(b()(n)), "circleOverlays", []), c()(b()(b()(n)), "polygonOverlays", []), c()(b()(b()(n)), "polylineOverlays", []), c()(b()(b()(n)), "zoomDidChange", !1), c()(b()(b()(n)), "developerBeganMovement", !1);
                            var i = o.center || new h(0, 0);
                            return n.map = Leaflet.citymaps.map(e, null, {
                                center: [i.lat, i.lng],
                                zoom: o.zoom,
                                minZoom: o.minZoom,
                                maxZoom: o.maxZoom,
                                language: se(o.locale),
                                scrollWheelZoom: o.scrollWheelZoom,
                                dragging: !0 !== o.disableGestures,
                                touchZoom: !0 !== o.disableGestures,
                                doubleClickZoom: !0 !== o.disableGestures,
                                boxZoom: !0 !== o.disableGestures,
                                keepBuffer: "TABLET" === o.userAgentCategory ? 0 : 2,
                                loadingGrid: "TABLET" !== o.userAgentCategory,
                                scaleControl: "MOBILE" !== o.userAgentCategory,
                                citymapsTileLayerHost: "true" === o.config.citymapsDevTiles ? "dev" : void 0,
                                scalePosition: o.isRtl ? "bottomleft" : "bottomright"
                            }), n.markerGroup = Leaflet.featureGroup([]).addTo(n.map), n.map.getBaseLayer().once("load", function() {
                                n.events.emit("renderComplete", {
                                    map: b()(b()(n))
                                })
                            }), n.map.on("click", function(e) {
                                n.events.emit("click", {
                                    map: b()(b()(n)),
                                    position: new h(e.latlng.lat, e.latlng.lng)
                                })
                            }), n.map.on("dragstart", function() {
                                n.events.emit("panStart", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom()
                                })
                            }), n.map.on("moveend", function() {
                                var e = !n.developerBeganMovement;
                                n.developerBeganMovement = !1, n.zoomDidChange && (n.zoomDidChange = !1, n.events.emit("zoomChange", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom(),
                                    userGesture: e
                                })), n.events.emit("centerChange", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom(),
                                    userGesture: e
                                })
                            }), n.map.on("zoomend", function() {
                                n.zoomDidChange = !0, n.map.getZoom() >= n.map.getMaxZoom() ? n.map.doubleClickZoom.disable() : n.map.doubleClickZoom.enable()
                            }), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "unmount",
                            value: function e() {
                                this.map.off(), this.map.remove()
                            }
                        }, {
                            key: "setCenter",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n, o ? this.map.setView(Leaflet.latLng(t.lat, t.lng), o) : this.map.panTo(Leaflet.latLng(t.lat, t.lng), {
                                    animate: !0
                                })
                            }
                        }, {
                            key: "setZoom",
                            value: function e(t, o) {
                                this.developerBeganMovement = !o, this.map.setZoom(t)
                            }
                        }, {
                            key: "setBounds",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n;
                                var i = Leaflet.latLngBounds(Leaflet.latLng(t.southwest.lat, t.southwest.lng), Leaflet.latLng(t.northeast.lat, t.northeast.lng)),
                                    a = o ? {
                                        paddingTopLeft: Leaflet.point(o.top, o.left),
                                        paddingBottomRight: Leaflet.point(o.bottom, o.right)
                                    } : null;
                                this.map.fitBounds(i, a)
                            }
                        }, {
                            key: "panIntoView",
                            value: function e(t) {
                                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0
                                    },
                                    n = arguments.length > 2 ? arguments[2] : void 0,
                                    i = this.map.latLngToContainerPoint(t),
                                    a = this.map.getSize(),
                                    r = 0,
                                    s = 0,
                                    l = o.left + this.padding.left,
                                    u = o.right + this.padding.right,
                                    c = o.top + this.padding.top,
                                    p = o.bottom + this.padding.bottom;
                                i.x < l && (r = i.x - l), i.x > a.x - u && (r = i.x - (a.x - u)), i.y < c && (s = i.y - c), i.y > a.y - p && (s = i.y - (a.y - p));
                                var h = 0 !== r || 0 !== s;
                                return h && (this.developerBeganMovement = !n, this.map.panBy([r, s])), h
                            }
                        }, {
                            key: "getZoom",
                            value: function e() {
                                return this.map.getZoom()
                            }
                        }, {
                            key: "getBounds",
                            value: function e() {
                                var t = this.map.getBounds();
                                return new v(new h(t.getSouth(), t.getWest()), new h(t.getNorth(), t.getEast()))
                            }
                        }, {
                            key: "resize",
                            value: function e() {
                                this.map.invalidateSize({
                                    pan: !1
                                })
                            }
                        }, {
                            key: "createMarkerContainer",
                            value: function e() {
                                var t = new oe(this.markerGroup);
                                return this.markerContainers.push(t), t
                            }
                        }, {
                            key: "removeMarkerContainer",
                            value: function e(t) {
                                var o = this.markerContainers.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.markerContainers.splice(o, 1))
                            }
                        }, {
                            key: "addCircleOverlay",
                            value: function e(t) {
                                var o = new ne(t, this.map);
                                return this.circleOverlays.push(o), o
                            }
                        }, {
                            key: "removeCircleOverlay",
                            value: function e(t) {
                                var o = this.circleOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.circleOverlays.splice(o, 1))
                            }
                        }, {
                            key: "addPolygonOverlay",
                            value: function e(t) {
                                var o = new ie(t, this.map);
                                return this.polygonOverlays.push(o), o
                            }
                        }, {
                            key: "removePolygonOverlay",
                            value: function e(t) {
                                var o = this.polygonOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.polygonOverlays.splice(o, 1))
                            }
                        }, {
                            key: "addPolylineOverlay",
                            value: function e(t) {
                                var o = new re(t, this.map);
                                return this.polylineOverlays.push(o), o
                            }
                        }, {
                            key: "removePolylineOverlay",
                            value: function e(t) {
                                var o = this.polylineOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.polylineOverlays.splice(o, 1))
                            }
                        }]), t
                    }(G),
                    ue = function(e) {
                        function t() {
                            return r()(this, t), g()(this, k()(t).call(this, le))
                        }
                        return M()(t, e), l()(t, [{
                            key: "isLibraryLoaded",
                            value: function e() {
                                return window.Leaflet && window.Leaflet.citymaps
                            }
                        }, {
                            key: "loadLibrary",
                            value: function e(o) {
                                if (Object(W.a)(k()(t.prototype), "loadLibrary", this).call(this, o)) return !0;
                                for (var n = "https://ta-media.citymaps.io/lib/v1.1.18/citymaps.min.js", i = document.getElementsByTagName("script"), a = 0; a < i.length; ++a) {
                                    var r = i[a];
                                    if (r.getAttribute("src") === n) return r.addEventListener("load", function() {
                                        o()
                                    }), !1
                                }
                                return Object(B.importScript)(n, "MAPS").then(o), !1
                            }
                        }]), t
                    }(R),
                    ce = function(e) {
                        function t(e, o) {
                            var n;
                            return r()(this, t), n = g()(this, k()(t).call(this)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "markerContainer", void 0), c()(b()(b()(n)), "viewChangeEventHandler", void 0), c()(b()(b()(n)), "viewChangedEventHandler", void 0), c()(b()(b()(n)), "mapResizeEventHandler", void 0), n.map = e, n.markerContainer = o, e ? (o.appendChild(n.pinContainer), n.viewChangeEventHandler = Microsoft.Maps.Events.addHandler(e, "viewchange", function() {
                                n.positionContainer()
                            }), n.viewChangedEventHandler = Microsoft.Maps.Events.addHandler(e, "viewchangeend", function() {
                                n.positionContainer()
                            }), n.mapResizeEventHandler = Microsoft.Maps.Events.addHandler(e, "mapresize", function() {
                                n.positionContainer()
                            }), n.onMarkerReady && n.onMarkerReady()) : (o.removeChild(n.pinContainer), Microsoft.Maps.Events.removeHandler(n.viewChangeEventHandler), Microsoft.Maps.Events.removeHandler(n.viewChangedEventHandler), Microsoft.Maps.Events.removeHandler(n.mapResizeEventHandler)), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.markerContainer.removeChild(this.pinContainer), Microsoft.Maps.Events.removeHandler(this.viewChangeEventHandler), Microsoft.Maps.Events.removeHandler(this.viewChangedEventHandler), Microsoft.Maps.Events.removeHandler(this.mapResizeEventHandler)
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t, this.positionContainer()
                            }
                        }, {
                            key: "positionContainer",
                            value: function e() {
                                if (this.map) {
                                    var t = this.map.tryLocationToPixel(new Microsoft.Maps.Location(this.position.lat, this.position.lng), Microsoft.Maps.PixelReference.control);
                                    this.pinContainer.style.left = "".concat(t.x, "px"), this.pinContainer.style.top = "".concat(t.y, "px");
                                    var o = this.zIndexOffset + Math.round(t.y);
                                    this.pinContainer.style.zIndex = o.toString()
                                }
                            }
                        }, {
                            key: "setZIndexOffset",
                            value: function e(o) {
                                Object(W.a)(k()(t.prototype), "setZIndexOffset", this).call(this, o), this.positionContainer()
                            }
                        }]), t
                    }(_),
                    pe = function e(t, o, n, i, a) {
                        return {
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(2 * t, '" height="').concat(2 * t, '">\n    <circle cx="').concat(t, '" cy="').concat(t, '" r="').concat(t - i, '" stroke="').concat(n, '" \n      stroke-width="').concat(i, '" fill="').concat(o, '" fill-opacity="').concat(a, '" stroke-opacity="').concat(a, '"\n    /></svg>'),
                            anchor: new Microsoft.Maps.Point(t, t)
                        }
                    },
                    he = function e(t, o, n) {
                        return n / function e(t, o) {
                            return 156543.04 * Math.abs(Math.cos(t)) / Math.pow(2, o)
                        }(t, o)
                    },
                    ve = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "pushPin", void 0), c()(b()(b()(n)), "viewChangeHandler", void 0), n.map = o;
                            var i = new Microsoft.Maps.Location(n.position.lat, n.position.lng);
                            return n.pushPin = new Microsoft.Maps.Pushpin(i, pe(he(n.position.lat, o.getZoom(), n.radius), n.fillColor, n.strokeColor, n.strokeWidth, n.opacity)), n.map.entities.push(n.pushPin), n.viewChangeHandler = Microsoft.Maps.Events.addHandler(n.map, "viewchangeend", function() {
                                n.updateCircleStyle()
                            }), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.map.entities.remove(this.pushPin), Microsoft.Maps.Events.removeHandler(this.viewChangeHandler)
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t;
                                var o = new Microsoft.Maps.Location(this.position.lat, this.position.lng);
                                this.pushPin.setLocation(o)
                            }
                        }, {
                            key: "setRadius",
                            value: function e(t) {
                                this.radius = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "updateCircleStyle",
                            value: function e() {
                                var t = he(this.position.lat, this.map.getZoom(), this.radius),
                                    o = pe(t, this.fillColor, this.strokeColor, this.strokeWidth, this.opacity);
                                this.pushPin.setOptions(o)
                            }
                        }]), t
                    }(X),
                    de = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "polygon", void 0), c()(b()(b()(n)), "viewChangeHandler", void 0), c()(b()(b()(n)), "onClickHandler", void 0), c()(b()(b()(n)), "onMouseoverHandler", void 0), c()(b()(b()(n)), "onMouseOutHandler", void 0), c()(b()(b()(n)), "rgbaStrokeColor", void 0), c()(b()(b()(n)), "rgbaFillColor", void 0), n.map = o;
                            var i = n.coords.map(function(e) {
                                return new Microsoft.Maps.Location(e.lat, e.lng)
                            });
                            return n.updateFillColor(), n.updateStrokeColor(), n.polygon = new Microsoft.Maps.Polygon(i, {
                                fillColor: n.rgbaFillColor,
                                strokeColor: n.rgbaStrokeColor,
                                strokeThickness: n.strokeWidth
                            }), n.onClick && (n.onClickHandler = Microsoft.Maps.Events.addHandler(n.polygon, "click", n.onClick)), n.onMouseOver && (n.onMouseoverHandler = Microsoft.Maps.Events.addHandler(n.polygon, "mouseover", n.onMouseOver)), n.onMouseOut && (n.onMouseOutHandler = Microsoft.Maps.Events.addHandler(n.polygon, "mouseout", n.onMouseOut)), o.entities.push(n.polygon), n.viewChangeHandler = Microsoft.Maps.Events.addHandler(n.map, "viewchangeend", function() {
                                n.updatePolygonStyle()
                            }), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.map.entities.remove(this.polygon), Microsoft.Maps.Events.removeHandler(this.viewChangeHandler), this.onClickHandler && Microsoft.Maps.Events.removeHandler(this.onClickHandler), this.onMouseoverHandler && Microsoft.Maps.Events.removeHandler(this.onMouseoverHandler), this.onMouseOutHandler && Microsoft.Maps.Events.removeHandler(this.onMouseOutHandler)
                            }
                        }, {
                            key: "setOnClickInteraction",
                            value: function e(t) {
                                Microsoft.Maps.Events.removeHandler(this.onClickHandler), this.onClick = t, this.onClick && (this.onClickHandler = Microsoft.Maps.Events.addHandler(this.polygon, "click", this.onClick))
                            }
                        }, {
                            key: "setOnMouseOverInteraction",
                            value: function e(t) {
                                Microsoft.Maps.Events.removeHandler(this.onMouseoverHandler), this.onMouseOver = t, this.onMouseOver && (this.onMouseoverHandler = Microsoft.Maps.Events.addHandler(this.polygon, "mouseover", this.onMouseOver))
                            }
                        }, {
                            key: "setOnMouseOutInteraction",
                            value: function e(t) {
                                Microsoft.Maps.Events.removeHandler(this.onMouseOutHandler), this.onMouseOut = t, this.onMouseOut && (this.onMouseOutHandler = Microsoft.Maps.Events.addHandler(this.polygon, "mouseout", this.onMouseOut))
                            }
                        }, {
                            key: "setPolygon",
                            value: function e(t) {
                                this.coords = t;
                                var o = this.coords.map(function(e) {
                                    return new Microsoft.Maps.Location(e.lat, e.lng)
                                });
                                this.polygon.setLocations(o)
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.updateFillColor(), this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeOpacity",
                            value: function e(t) {
                                this.strokeOpacity = t, this.updateStrokeColor(), this.updatePolygonStyle()
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.updateFillColor(), this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.updateStrokeColor(), this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "updateFillColor",
                            value: function e() {
                                this.rgbaFillColor = Microsoft.Maps.Color.fromHex(this.fillColor), this.rgbaFillColor.a = this.opacity
                            }
                        }, {
                            key: "updateStrokeColor",
                            value: function e() {
                                this.rgbaStrokeColor = Microsoft.Maps.Color.fromHex(this.strokeColor), this.rgbaStrokeColor.a = this.strokeOpacity
                            }
                        }, {
                            key: "updatePolygonStyle",
                            value: function e() {
                                var t = {
                                    fillColor: this.rgbaFillColor,
                                    strokeColor: this.rgbaStrokeColor,
                                    strokeWidth: this.strokeWidth
                                };
                                this.polygon.setOptions(t)
                            }
                        }]), t
                    }(K),
                    me = {
                        key: "AtNq3Ps1jJbLXvagAsAA2Xp3qUpfXLyZbJxgwDWM3kjrQoZKnOWwULXDn9howX8s"
                    },
                    fe = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e, o)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "oldZoom", void 0), c()(b()(b()(n)), "oldCenter", void 0), c()(b()(b()(n)), "hasPanEventAttached", !1), c()(b()(b()(n)), "markerContainers", []), c()(b()(b()(n)), "circleOverlays", []), c()(b()(b()(n)), "polygonOverlays", []), c()(b()(b()(n)), "markerLayer", void 0), c()(b()(b()(n)), "developerBeganMovement", !1);
                            var i = {
                                credentials: me.key,
                                center: new Microsoft.Maps.Location(o.center.lat, o.center.lng),
                                mapTypeId: Microsoft.Maps.MapTypeId.road,
                                zoom: o.zoom,
                                minZoom: o.minZoom,
                                maxZoom: o.maxZoom,
                                showMapTypeSelector: !1,
                                showDashboard: !1,
                                showScalebar: !1,
                                disableScrollWheelZoom: !o.scrollWheelZoom || !0 === o.disableGestures,
                                disablePanning: !0 === o.disableGestures,
                                disableZooming: !0 === o.disableGestures,
                                disableKeyboardInput: !0,
                                enableClickableLogo: !1,
                                enableSearchLogo: !1,
                                useInertia: !1
                            };
                            return n.map = new Microsoft.Maps.Map(e, i), n.markerLayer = document.createElement("div"), n.markerLayer.style.zIndex = "1", n.markerLayer.style.position = "absolute", e.appendChild(n.markerLayer), n.oldZoom = n.getZoom(), n.oldCenter = n.getCenter(), n.bindMapEvents(), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "setCenter",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n;
                                var i = new Microsoft.Maps.Location(t.lat, t.lng);
                                o ? this.map.setView({
                                    center: i,
                                    animate: !0,
                                    zoom: o
                                }) : this.map.setView({
                                    center: i,
                                    animate: !0
                                })
                            }
                        }, {
                            key: "setZoom",
                            value: function e(t, o) {
                                this.developerBeganMovement = !o, this.map.setView({
                                    zoom: t,
                                    animate: !0
                                })
                            }
                        }, {
                            key: "setBounds",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n;
                                var i = 0;
                                o && (i = Math.max(i, o.top), i = Math.max(i, o.bottom), i = Math.max(i, o.left), i = Math.max(i, o.right));
                                var a = Microsoft.Maps.LocationRect.fromEdges(t.northeast.lat, t.southwest.lng, t.southwest.lat, t.northeast.lng);
                                this.map.setView({
                                    bounds: a,
                                    padding: i
                                })
                            }
                        }, {
                            key: "getZoom",
                            value: function e() {
                                return this.map.getZoom()
                            }
                        }, {
                            key: "getBounds",
                            value: function e() {
                                var t = this.map.getBounds();
                                return new v(new h(t.getSouth(), t.getWest()), new h(t.getNorth(), t.getEast()))
                            }
                        }, {
                            key: "resize",
                            value: function e() {
                                Microsoft.Maps.Events.invoke(this.map, "viewchangeend")
                            }
                        }, {
                            key: "createMarkerContainer",
                            value: function e() {
                                var t = new ce(this.map, this.markerLayer);
                                return this.markerContainers.push(t), t
                            }
                        }, {
                            key: "removeMarkerContainer",
                            value: function e(t) {
                                var o = this.markerContainers.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.markerContainers.splice(o, 1))
                            }
                        }, {
                            key: "addCircleOverlay",
                            value: function e(t) {
                                var o = new ve(t, this.map);
                                return this.circleOverlays.push(o), o
                            }
                        }, {
                            key: "removeCircleOverlay",
                            value: function e(t) {
                                var o = this.circleOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.circleOverlays.splice(o, 1))
                            }
                        }, {
                            key: "addPolygonOverlay",
                            value: function e(t) {
                                var o = new de(t, this.map);
                                return this.polygonOverlays.push(o), o
                            }
                        }, {
                            key: "removePolygonOverlay",
                            value: function e(t) {
                                var o = this.polygonOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.polygonOverlays.splice(o, 1))
                            }
                        }, {
                            key: "bindMapEvents",
                            value: function e() {
                                var t = this;
                                Microsoft.Maps.Events.addHandler(this.map, "click", function(e) {
                                    t.events.emit("click", {
                                        map: t,
                                        position: new h(e.location.latitude, e.location.longitude)
                                    })
                                }), Microsoft.Maps.Events.addOne(this.map, "viewchangestart", function() {
                                    t.events.emit("renderComplete", {
                                        map: t
                                    })
                                }), Microsoft.Maps.Events.addHandler(this.map, "viewchangeend", function() {
                                    var e = !t.developerBeganMovement;
                                    t.developerBeganMovement = !1, t.isZoomTheSameAfterEvent() || t.events.emit("zoomChange", {
                                        map: t,
                                        position: t.getCenter(),
                                        zoom: t.getZoom(),
                                        userGesture: e
                                    }), t.events.emit("centerChange", {
                                        map: t,
                                        position: t.getCenter(),
                                        zoom: t.getZoom(),
                                        userGesture: e
                                    })
                                }), Microsoft.Maps.Events.addHandler(this.map, "viewchangestart", function() {
                                    t.oldZoom = t.getZoom(), t.oldCenter = t.getCenter(), t.hasPanEventAttached || (t.hasPanEventAttached = !0, Microsoft.Maps.Events.addOne(t.map, "viewchange", function() {
                                        t.developerBeganMovement || t.isCenterTheSameAfterEvent() || !t.isZoomTheSameAfterEvent() || t.events.emit("panStart", {
                                            map: t,
                                            position: t.getCenter(),
                                            zoom: t.getZoom()
                                        }), t.hasPanEventAttached = !1
                                    }))
                                })
                            }
                        }, {
                            key: "isZoomTheSameAfterEvent",
                            value: function e() {
                                return this.oldZoom === this.getZoom()
                            }
                        }, {
                            key: "isCenterTheSameAfterEvent",
                            value: function e() {
                                if (!this.oldCenter) return !1;
                                var t = this.getCenter(),
                                    o = this.oldCenter.lat === t.lng,
                                    n = this.oldCenter.lat === t.lng;
                                return o && n
                            }
                        }]), t
                    }(G),
                    ge = {
                        domain: "www.bing.com"
                    },
                    ye = function e() {
                        var t = F("ta.maps.provider.bing", "loadCallbackList");
                        t && t.forEach(function(e) {
                            e()
                        }), T([], "ta.maps.provider.bing", "loadCallbackList")
                    },
                    ke = function(e) {
                        function t() {
                            var e;
                            return r()(this, t), (e = g()(this, k()(t).call(this, fe))).configureLibrary(ge), e
                        }
                        return M()(t, e), l()(t, [{
                            key: "isLibraryLoaded",
                            value: function e() {
                                return window.Microsoft && window.Microsoft.Maps
                            }
                        }, {
                            key: "loadLibrary",
                            value: function e(o) {
                                if (Object(W.a)(k()(t.prototype), "loadLibrary", this).call(this, o)) return !0;
                                if (F("ta.maps.provider.bing", "bingMapLibraryLoadedCallback")) {
                                    var n = F("ta.maps.provider.bing", "loadCallbackList");
                                    return n && n.push(o), !1
                                }
                                T([o], "ta.maps.provider.bing", "loadCallbackList"), window.bingMapLibraryLoadedCallback = ye;
                                var i = "//".concat(this.getLibraryConfig().domain, "/api/maps/mapcontrol?setMkt=zh-CN&callback=").concat("bingMapLibraryLoadedCallback");
                                return Object(B.importScript)(i, "MAPS"), !1
                            }
                        }]), t
                    }(R),
                    Ce = function(e) {
                        function t(e) {
                            var o;
                            r()(this, t), o = g()(this, k()(t).call(this)), c()(b()(b()(o)), "map", void 0), c()(b()(b()(o)), "autonaviMarker", void 0), c()(b()(b()(o)), "checkForParent", function() {
                                o.pinContainer.parentElement ? o.onMarkerReady && o.onMarkerReady() : o.map && setTimeout(o.checkForParent, 1)
                            }), c()(b()(b()(o)), "positionMarker", function() {
                                if (o.map) {
                                    var e = o.map.lngLatToContainer(new AMap.LngLat(o.position.lng, o.position.lat)),
                                        t = o.zIndexOffset + Math.round(e.y);
                                    o.autonaviMarker.setzIndex(t)
                                }
                            }), o.map = e;
                            var n = {
                                map: o.map,
                                position: new AMap.LngLat(0, 0),
                                content: o.pinContainer,
                                offset: new AMap.Pixel(0, 0),
                                clickable: !0
                            };
                            return o.map.on("mapmove", o.positionMarker), o.autonaviMarker = new AMap.Marker(n), o.pinContainer.addEventListener("click", function(e) {
                                e.isMarkerClick = !0
                            }), o.map.add(o.autonaviMarker), o.pinContainer.parentElement || setTimeout(o.checkForParent, 1), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.map.off("mapmove", this.positionMarker), this.autonaviMarker.setMap(null)
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t, this.autonaviMarker.setPosition(new AMap.LngLat(t.lng, t.lat))
                            }
                        }, {
                            key: "setZIndexOffset",
                            value: function e(o) {
                                Object(W.a)(k()(t.prototype), "setZIndexOffset", this).call(this, o), this.positionMarker()
                            }
                        }]), t
                    }(_),
                    Me = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "circle", void 0), n.map = o;
                            var i = new AMap.LngLat(n.position.lng, n.position.lat);
                            return n.circle = new AMap.Circle({
                                center: i,
                                radius: e.radius,
                                fillColor: e.fillColor,
                                fillOpacity: e.opacity,
                                strokeColor: e.strokeColor,
                                strokeWeight: e.strokeWidth,
                                strokeOpacity: e.opacity
                            }), n.map.add(n.circle), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.map.remove(this.circle)
                            }
                        }, {
                            key: "setPosition",
                            value: function e(t) {
                                this.position = t;
                                var o = new AMap.LngLat(this.position.lng, this.position.lat);
                                this.circle.setCenter(o)
                            }
                        }, {
                            key: "setRadius",
                            value: function e(t) {
                                this.radius = t, this.circle.setRadius(t)
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.updateCircleStyle()
                            }
                        }, {
                            key: "updateCircleStyle",
                            value: function e() {
                                var t = new AMap.LngLat(this.position.lng, this.position.lat);
                                this.circle.setOptions({
                                    center: t,
                                    radius: this.radius,
                                    fillColor: this.fillColor,
                                    fillOpacity: this.opacity,
                                    strokeColor: this.strokeColor,
                                    strokeWeight: this.strokeWidth,
                                    strokeOpacity: this.opacity
                                })
                            }
                        }]), t
                    }(X),
                    Oe = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "polygon", void 0), n.map = o;
                            var i = n.coords.map(function(e) {
                                return new AMap.LngLat(e.lng, e.lat)
                            });
                            return n.polygon = new AMap.Polygon({
                                path: i,
                                fillColor: e.fillColor,
                                fillOpacity: e.opacity,
                                strokeColor: e.strokeColor,
                                strokeWeight: e.strokeWidth,
                                strokeOpacity: e.strokeOpacity
                            }), n.onClick && AMap.event.addListener(n.polygon, "click", n.onClick), n.onMouseOver && AMap.event.addListener(n.polygon, "mouseover", n.onMouseOver), n.onMouseOut && AMap.event.addListener(n.polygon, "mouseout", n.onMouseOut), n.map.add(n.polygon), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.map.remove(this.polygon)
                            }
                        }, {
                            key: "setOnClickInteraction",
                            value: function e(t) {
                                AMap.event.removeListener(this.polygon, "click", this.onClick), this.onClick = t, this.onClick && AMap.event.addListener(this.polygon, "click", this.onClick)
                            }
                        }, {
                            key: "setOnMouseOverInteraction",
                            value: function e(t) {
                                AMap.event.removeListener(this.polygon, "mouseover", this.onMouseOver), this.onMouseOver = t, this.onMouseOver && AMap.event.addListener(this.polygon, "mouseover", this.onMouseOver)
                            }
                        }, {
                            key: "setOnMouseOutInteraction",
                            value: function e(t) {
                                AMap.event.removeListener(this.polygon, "mouseout", this.onMouseOut), this.onMouseOut = t, this.onMouseOut && AMap.event.addListener(this.polygon, "mouseout", this.onMouseOut)
                            }
                        }, {
                            key: "setPolygon",
                            value: function e(t) {
                                this.coords = t;
                                var o = this.coords.map(function(e) {
                                    return new AMap.LngLat(e.lng, e.lat)
                                });
                                this.polygon.setPath(o)
                            }
                        }, {
                            key: "setOpacity",
                            value: function e(t) {
                                this.opacity = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setFillColor",
                            value: function e(t) {
                                this.fillColor = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeColor",
                            value: function e(t) {
                                this.strokeColor = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeWidth",
                            value: function e(t) {
                                this.strokeWidth = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "setStrokeOpacity",
                            value: function e(t) {
                                this.strokeOpacity = t, this.updatePolygonStyle()
                            }
                        }, {
                            key: "updatePolygonStyle",
                            value: function e() {
                                var t = this.coords.map(function(e) {
                                    return new AMap.LngLat(e.lng, e.lat)
                                });
                                this.polygon.setOptions({
                                    path: t,
                                    fillColor: this.fillColor,
                                    fillOpacity: this.opacity,
                                    strokeColor: this.strokeColor,
                                    strokeWeight: this.strokeWidth,
                                    strokeOpacity: this.strokeOpacity
                                })
                            }
                        }]), t
                    }(K),
                    be = function(e) {
                        function t(e, o) {
                            var n;
                            r()(this, t), n = g()(this, k()(t).call(this, e, o)), c()(b()(b()(n)), "map", void 0), c()(b()(b()(n)), "markerContainers", []), c()(b()(b()(n)), "circleOverlays", []), c()(b()(b()(n)), "polygonOverlays", []), c()(b()(b()(n)), "clickPosition", null), c()(b()(b()(n)), "touchEvents", !1), c()(b()(b()(n)), "developerBeganMovement", !1), c()(b()(b()(n)), "moveEndWillFire", !1), c()(b()(b()(n)), "zoomChanged", !1), c()(b()(b()(n)), "moveEndTimeout", null), c()(b()(b()(n)), "handleMoveEnd", function() {
                                var e = !n.developerBeganMovement;
                                n.developerBeganMovement = !1, n.zoomChanged && (n.zoomChanged = !1, n.events.emit("zoomChange", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom(),
                                    userGesture: e
                                })), n.events.emit("centerChange", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom(),
                                    userGesture: e
                                })
                            });
                            var i = {
                                scrollWheel: o.scrollWheelZoom && !0 !== o.disableGestures,
                                dragEnable: !0 !== o.disableGestures,
                                zoomEnable: !0 !== o.disableGestures,
                                resizeEnable: !0,
                                zoom: o.zoom,
                                zooms: [o.minZoom, o.maxZoom],
                                center: new AMap.LngLat(o.center.lng, o.center.lat),
                                vectorMapForeign: "Chinese_Simplified"
                            };
                            n.map = new AMap.Map(e, i), n.map.on("complete", function() {
                                n.events.emit("renderComplete", {
                                    map: b()(b()(n))
                                })
                            }), e.addEventListener("touchstart", function() {
                                n.touchEvents = !0
                            });
                            var a = function e(t) {
                                n.clickPosition && !t.isMarkerClick && n.events.emit("click", {
                                    map: b()(b()(n)),
                                    position: n.clickPosition
                                }), n.clickPosition = null, n.touchEvents = !1
                            };
                            return e.addEventListener("click", function(e) {
                                n.touchEvents || a(e)
                            }), e.addEventListener("touchend", a), n.map.on("click", function(e) {
                                n.clickPosition = new h(e.lnglat.lat, e.lnglat.lng)
                            }), n.map.on("zoomchange", function() {
                                n.zoomChanged = !0, n.scheduleMoveEnd()
                            }), n.map.on("dragstart", function() {
                                n.developerBeganMovement || n.events.emit("panStart", {
                                    map: b()(b()(n)),
                                    position: n.getCenter(),
                                    zoom: n.getZoom()
                                })
                            }), n.map.on("movestart", function() {
                                n.moveEndWillFire = !0
                            }), n.map.on("moveend", function() {
                                n.moveEndWillFire = !1, n.scheduleMoveEnd()
                            }), n
                        }
                        return M()(t, e), l()(t, [{
                            key: "scheduleMoveEnd",
                            value: function e() {
                                this.moveEndTimeout && clearTimeout(this.moveEndTimeout), this.moveEndTimeout = setTimeout(this.handleMoveEnd, 0)
                            }
                        }, {
                            key: "setCenter",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n, o ? this.map.setZoomAndCenter(o, new AMap.LngLat(t.lng, t.lat)) : this.map.setCenter(new AMap.LngLat(t.lng, t.lat))
                            }
                        }, {
                            key: "setZoom",
                            value: function e(t, o) {
                                this.developerBeganMovement = !o, this.map.setZoom(t)
                            }
                        }, {
                            key: "setBounds",
                            value: function e(t, o, n) {
                                this.developerBeganMovement = !n;
                                var i = new AMap.Bounds(new AMap.LngLat(t.southwest.lng, t.southwest.lat), new AMap.LngLat(t.northeast.lng, t.northeast.lat));
                                this.map.setBounds(i)
                            }
                        }, {
                            key: "getZoom",
                            value: function e() {
                                return this.map.getZoom()
                            }
                        }, {
                            key: "getBounds",
                            value: function e() {
                                var t = this.map.getBounds(),
                                    o = t.getSouthWest(),
                                    n = t.getNorthEast();
                                return new v(new h(o.getLat(), o.getLng()), new h(n.getLat(), n.getLng()))
                            }
                        }, {
                            key: "resize",
                            value: function e() {
                                AMap.event.trigger(this.map, "complete")
                            }
                        }, {
                            key: "createMarkerContainer",
                            value: function e() {
                                var t = new Ce(this.map);
                                return this.markerContainers.push(t), t
                            }
                        }, {
                            key: "removeMarkerContainer",
                            value: function e(t) {
                                var o = this.markerContainers.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.markerContainers.splice(o, 1))
                            }
                        }, {
                            key: "addCircleOverlay",
                            value: function e(t) {
                                var o = new Me(t, this.map);
                                return this.circleOverlays.push(o), o
                            }
                        }, {
                            key: "removeCircleOverlay",
                            value: function e(t) {
                                var o = this.circleOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.circleOverlays.splice(o, 1))
                            }
                        }, {
                            key: "addPolygonOverlay",
                            value: function e(t) {
                                var o = new Oe(t, this.map);
                                return this.polygonOverlays.push(o), o
                            }
                        }, {
                            key: "removePolygonOverlay",
                            value: function e(t) {
                                var o = this.polygonOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.polygonOverlays.splice(o, 1))
                            }
                        }]), t
                    }(G),
                    we = {
                        domain: "webapi.amap.com",
                        version: "1.4.14",
                        key: "47e0349a41e8b5f3870f9aae11275ef8"
                    },
                    Pe = function e() {
                        var t = F("ta.maps.provider.autonavi", "loadCallbackList");
                        t && t.forEach(function(e) {
                            e()
                        }), T([], "ta.maps.provider.autonavi", "loadCallbackList")
                    },
                    Le = function(e) {
                        function t() {
                            var e;
                            return r()(this, t), (e = g()(this, k()(t).call(this, be))).configureLibrary(we), e
                        }
                        return M()(t, e), l()(t, [{
                            key: "isLibraryLoaded",
                            value: function e() {
                                return !!window.AMap
                            }
                        }, {
                            key: "loadLibrary",
                            value: function e(o) {
                                if (Object(W.a)(k()(t.prototype), "loadLibrary", this).call(this, o)) return !0;
                                if (F("ta.maps.provider.autonavi", "autonaviMapLibraryLoadedCallback")) {
                                    var n = F("ta.maps.provider.autonavi", "loadCallbackList");
                                    return n && n.push(o), !1
                                }
                                T([o], "ta.maps.provider.autonavi", "loadCallbackList"), window.autonaviMapLibraryLoadedCallback = Pe;
                                var i = this.getLibraryConfig(),
                                    a = "https://".concat(i.domain, "/maps?v=").concat(i.version, "&key=").concat(i.key, "&callback=").concat("autonaviMapLibraryLoadedCallback");
                                return Object(B.importScript)(a, "MAPS"), !1
                            }
                        }]), t
                    }(R),
                    Ee = function(e) {
                        function t(e) {
                            var o;
                            return r()(this, t), o = g()(this, k()(t).call(this)), c()(b()(b()(o)), "addedToMap", void 0), e.appendChild(o.pinContainer), o.addedToMap = !0, o
                        }
                        return M()(t, e), l()(t, [{
                            key: "remove",
                            value: function e() {
                                this.addedToMap = !1
                            }
                        }]), t
                    }(_),
                    Se = function(e) {
                        function t(e) {
                            var o;
                            return r()(this, t), o = g()(this, k()(t).call(this, e)), c()(b()(b()(o)), "addedToMap", !1), o.addedToMap = !0, o
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.addedToMap = !1
                            }
                        }]), t
                    }(X),
                    xe = function(e) {
                        function t(e) {
                            var o;
                            return r()(this, t), o = g()(this, k()(t).call(this, e)), c()(b()(b()(o)), "addedToMap", !1), o.addedToMap = !0, o
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.addedToMap = !1
                            }
                        }]), t
                    }(K),
                    Ie = function(e) {
                        function t(e) {
                            var o;
                            return r()(this, t), o = g()(this, k()(t).call(this, e)), c()(b()(b()(o)), "addedToMap", !1), o.addedToMap = !0, o
                        }
                        return M()(t, e), l()(t, [{
                            key: "removeFromMap",
                            value: function e() {
                                this.addedToMap = !1
                            }
                        }]), t
                    }(ae),
                    ze = function(e) {
                        function t(e) {
                            var o;
                            return r()(this, t), o = g()(this, k()(t).call(this, null, e)), c()(b()(b()(o)), "markerContainers", []), c()(b()(b()(o)), "circleOverlays", []), c()(b()(b()(o)), "polygonOverlays", []), c()(b()(b()(o)), "polylineOverlays", []), c()(b()(b()(o)), "mockMapContainer", void 0), c()(b()(b()(o)), "center", void 0), c()(b()(b()(o)), "zoom", void 0), c()(b()(b()(o)), "resizeCalled", !1), o.center = e.center || new h(0, 0), o.zoom = e.zoom, o.mockMapContainer = document.createElement("div"), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "once",
                            value: function e(o, n) {
                                Object(W.a)(k()(t.prototype), "once", this).call(this, o, n), "renderComplete" === o && this.simulateRenderComplete()
                            }
                        }, {
                            key: "simulateRenderComplete",
                            value: function e() {
                                this.events.emit("renderComplete", {
                                    map: this
                                })
                            }
                        }, {
                            key: "simulateClick",
                            value: function e(t) {
                                this.events.emit("click", {
                                    map: this,
                                    position: t
                                })
                            }
                        }, {
                            key: "simulateUserPan",
                            value: function e() {
                                this.events.emit("panStart", {
                                    map: this,
                                    position: this.getCenter(),
                                    zoom: this.getZoom()
                                }), this.center = new h(this.center.lat + Math.random() - .5, this.center.lng + Math.random() - .5), this.events.emit("centerChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: !0
                                })
                            }
                        }, {
                            key: "simulateUserZoom",
                            value: function e() {
                                this.zoom = this.zoom + Math.random() < .5 ? 1 : -1, this.events.emit("zoomChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: !0
                                }), this.events.emit("centerChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: !0
                                })
                            }
                        }, {
                            key: "setCenter",
                            value: function e(t, o, n) {
                                this.center = t, this.events.emit("centerChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: n || !1
                                }), o && this.setZoom(o)
                            }
                        }, {
                            key: "setZoom",
                            value: function e(t, o) {
                                this.zoom = t, this.events.emit("zoomChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: o || !1
                                }), this.events.emit("centerChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: o || !1
                                })
                            }
                        }, {
                            key: "setBounds",
                            value: function e(t, o, n) {
                                this.center = t.getCenter(), this.zoom = 15, this.events.emit("zoomChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: n || !1
                                }), this.events.emit("centerChange", {
                                    map: this,
                                    position: this.center,
                                    zoom: this.zoom,
                                    userGesture: n || !1
                                })
                            }
                        }, {
                            key: "panIntoView",
                            value: function e(t, o, n) {
                                var i = !t.equals(this.center);
                                return i && this.setCenter(t, void 0, n), i
                            }
                        }, {
                            key: "getZoom",
                            value: function e() {
                                return this.zoom
                            }
                        }, {
                            key: "getBounds",
                            value: function e() {
                                return new v(new h(this.center.lat - .1, this.center.lng - .1), new h(this.center.lat + .1, this.center.lng + .1))
                            }
                        }, {
                            key: "resize",
                            value: function e() {
                                this.resizeCalled = !0
                            }
                        }, {
                            key: "createMarkerContainer",
                            value: function e() {
                                var t = new Ee(this.mockMapContainer);
                                return this.markerContainers.push(t), t
                            }
                        }, {
                            key: "removeMarkerContainer",
                            value: function e(t) {
                                var o = this.markerContainers.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.markerContainers.splice(o, 1))
                            }
                        }, {
                            key: "addCircleOverlay",
                            value: function e(t) {
                                var o = new Se(t);
                                return this.circleOverlays.push(o), o
                            }
                        }, {
                            key: "removeCircleOverlay",
                            value: function e(t) {
                                var o = this.circleOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.circleOverlays.splice(o, 1))
                            }
                        }, {
                            key: "addPolygonOverlay",
                            value: function e(t) {
                                var o = new xe(t);
                                return this.polygonOverlays.push(o), o
                            }
                        }, {
                            key: "removePolygonOverlay",
                            value: function e(t) {
                                var o = this.polygonOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.polygonOverlays.splice(o, 1))
                            }
                        }, {
                            key: "addPolylineOverlay",
                            value: function e(t) {
                                var o = new Ie(t);
                                return this.polylineOverlays.push(o), o
                            }
                        }, {
                            key: "removePolylineOverlay",
                            value: function e(t) {
                                var o = this.polylineOverlays.indexOf(t);
                                o > -1 && (t.removeFromMap(), this.polylineOverlays.splice(o, 1))
                            }
                        }]), t
                    }(G),
                    Ze = function(e) {
                        function t() {
                            return r()(this, t), g()(this, k()(t).call(this, ze))
                        }
                        return M()(t, e), l()(t, [{
                            key: "isLibraryLoaded",
                            value: function e() {
                                return !0
                            }
                        }]), t
                    }(R),
                    He = (n = {}, c()(n, i.MapProviderGoogle, te), c()(n, i.MapProviderCitymaps, ue), c()(n, i.MapProviderBing, ke), c()(n, i.MapProviderAutonavi, Le), c()(n, "mock", Ze), n),
                    Ae = function(e) {
                        function t() {
                            var e, o;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                            return o = g()(this, (e = k()(t)).call.apply(e, [this].concat(i))), c()(b()(b()(o)), "state", {
                                loadedMapProvider: void 0,
                                loadedMapFactory: void 0,
                                mapInterface: void 0
                            }), c()(b()(b()(o)), "componentMounted", !1), c()(b()(b()(o)), "createMapInterface", function(e) {
                                var t = o.state,
                                    n = t.loadedMapFactory,
                                    i = t.loadedMapProvider;
                                if (!o.state.mapInterface && i && n && e) {
                                    var a = new(n.getInterfaceClass())(e, Object.assign({}, o.props.interfaceProps, {
                                        config: n.getLibraryConfig(),
                                        locale: o.props.locale,
                                        isRtl: o.props.isRtl,
                                        userAgentCategory: o.props.userAgentCategory
                                    }));
                                    o.setState({
                                        mapInterface: a
                                    }), o.props.onInterfaceLoaded(a, i)
                                }
                            }), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "componentDidMount",
                            value: function e() {
                                this.componentMounted = !0, this.loadMap()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function e() {
                                this.createMapInterface(this.props.containerNode)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function e() {
                                this.componentMounted = !1
                            }
                        }, {
                            key: "loadMap",
                            value: function e() {
                                var t = this;
                                (function e(t) {
                                    if ("mock" === t.forceMapProvider) {
                                        var o = {
                                            mapProvider: "mock",
                                            mapConfig: {}
                                        };
                                        return new Promise(function(e) {
                                            return e({
                                                json: function e() {
                                                    return new Promise(function(e) {
                                                        return e(o)
                                                    })
                                                }
                                            })
                                        })
                                    }
                                    return fetch(asset_path + "/data/1.0/maps/provider?".concat(function e(t) {
                                        var o = {};
                                        return Object.keys(t).forEach(function(e) {
                                            null !== t[e] && void 0 !== t[e] && (o[e] = t[e])
                                        }), new URLSearchParams(o)
                                    }({
                                        servletName: t.servlet,
                                        locale: t.locale,
                                        geoId: t.geoId,
                                        forceMapProvider: t.forceMapProvider
                                    }).toString()), {
                                        credentials: "same-origin"
                                    })
                                })(this.props).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    if (t.componentMounted) {
                                        var o = function e(t) {
                                            var o = t ? He[t] : null;
                                            if (!o) throw new Error("Unsupported map provider: ".concat(t || "null"));
                                            return new o
                                        }(e.mapProvider);
                                        o.configureLibrary(m()({
                                            lang: t.props.locale
                                        }, e.mapConfig));
                                        var n = o.isLibraryLoaded();
                                        o.loadLibrary(function() {
                                            n || S()({
                                                module: "map_view",
                                                action: "load",
                                                context: e.mapProvider || ""
                                            }), t.componentMounted && t.setState({
                                                loadedMapFactory: o,
                                                loadedMapProvider: e.mapProvider
                                            })
                                        })
                                    }
                                })
                            }
                        }, {
                            key: "render",
                            value: function e() {
                                return null
                            }
                        }]), t
                    }(w.PureComponent),
                    We = function e(t) {
                        var o = w.useContext(A.Environment),
                            n = w.useContext(A.Device),
                            i = w.useContext(A.Route);
                        return w.createElement(Ae, H()({}, t, {
                            locale: o.locale.language,
                            isRtl: o.locale.isRtl,
                            userAgentCategory: n.userAgentCategory,
                            servlet: i.page,
                            geoId: parseInt(i.params.geo, 10) || 1
                        }))
                    },
                    Be = function(e) {
                        function t() {
                            var e, o;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                            return o = g()(this, (e = k()(t)).call.apply(e, [this].concat(i))), c()(b()(b()(o)), "state", {
                                mapInterface: null,
                                mapProvider: null
                            }), c()(b()(b()(o)), "onMapInterfaceLoaded", function(e, t) {
                                e.once("renderComplete", function() {
                                    o.props.onLoad && o.componentMounted && e && o.props.onLoad({
                                        map: e
                                    })
                                }), e.on("click", function(e) {
                                    o.props.onClick && o.props.onClick(e)
                                }), e.on("centerChange", function(e) {
                                    o.props.onCenterChange && o.componentMounted && o.props.onCenterChange(e)
                                }), e.on("panStart", function(e) {
                                    S()({
                                        module: "map_move",
                                        action: "pan",
                                        context: e.zoom.toString(10)
                                    }), o.props.onPanStart && o.props.onPanStart(e)
                                }), e.on("renderComplete", function(e) {
                                    o.props.onRenderComplete && o.props.onRenderComplete(e)
                                });
                                var n = o.props.initialZoom;
                                e.on("zoomChange", function(e) {
                                    S()({
                                        module: "map_move",
                                        action: e.zoom > n ? "zoom_in" : "zoom_out",
                                        context: e.zoom.toString(10)
                                    }), n = e.zoom, o.props.onZoomChange && o.props.onZoomChange(e)
                                }), o.props.initialBounds && e.setBounds(o.props.initialBounds), o.setState({
                                    mapInterface: e,
                                    mapProvider: t
                                })
                            }), c()(b()(b()(o)), "setContainerRef", function(e) {
                                o.containerRef || (o.containerRef = e, o.forceUpdate())
                            }), c()(b()(b()(o)), "handleResize", function() {
                                o.state.mapInterface && o.state.mapInterface.resize()
                            }), c()(b()(b()(o)), "componentMounted", !1), c()(b()(b()(o)), "containerRef", null), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "componentDidMount",
                            value: function e() {
                                this.componentMounted = !0, S()({
                                    module: "map_view",
                                    action: "open",
                                    context: this.containerRef ? "".concat(this.containerRef.offsetWidth) : "0"
                                })
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function e() {
                                this.componentMounted = !1;
                                var t = this.state.mapInterface;
                                t && t.unmount(), S()({
                                    module: "map_view",
                                    action: "close"
                                })
                            }
                        }, {
                            key: "render",
                            value: function e() {
                                var t = this.state,
                                    o = t.mapInterface,
                                    n = t.mapProvider,
                                    i = this.props,
                                    a = i.children,
                                    r = i.style,
                                    s = i.className;
                                return w.createElement("div", {
                                    className: s,
                                    style: m()({
                                        position: "relative"
                                    }, r, {
                                        touchAction: this.props.disableGestures ? "auto" : "none"
                                    })
                                }, w.createElement(L.a, {
                                    callback: this.handleResize
                                }), w.createElement(We, {
                                    interfaceProps: {
                                        zoom: this.props.initialZoom,
                                        center: this.props.initialCenter,
                                        minZoom: this.props.minZoom,
                                        maxZoom: this.props.maxZoom,
                                        onLoad: this.props.onLoad,
                                        scrollWheelZoom: this.props.scrollWheelZoom,
                                        disableGestures: this.props.disableGestures
                                    },
                                    containerNode: this.containerRef,
                                    onInterfaceLoaded: this.onMapInterfaceLoaded,
                                    forceMapProvider: this.props.forceMapProvider
                                }), w.createElement("div", {
                                    className: "map_container ".concat("_3gxaoFgc"),
                                    ref: this.setContainerRef
                                }), w.createElement(I, {
                                    value: {
                                        map: o,
                                        mapProvider: n || ""
                                    }
                                }, a))
                            }
                        }]), t
                    }(w.PureComponent);
                c()(Be, "defaultProps", {
                    className: "",
                    initialCenter: new h(0, 0),
                    initialZoom: 13,
                    initialBounds: null,
                    minZoom: 2,
                    maxZoom: 19,
                    scrollWheelZoom: !0,
                    disableGestures: !1,
                    children: [],
                    style: {},
                    onLoad: null,
                    onClick: null,
                    onPanStart: null,
                    onCenterChange: null,
                    onZoomChange: null,
                    onRenderComplete: null
                });
                var De = Be,
                    Te = function e(t) {
                        var o = 20037508.34 * t.lng / 180,
                            n = Math.log(Math.tan((90 + t.lat) * Math.PI / 360)) / (Math.PI / 180);
                        return [o, n = 20037508.34 * n / 180]
                    },
                    Fe = function e(t) {
                        var o = 180 * t[0] / 20037508.34,
                            n = 180 * t[1] / 20037508.34;
                        return n = Math.atan(Math.exp(n * (Math.PI / 180))) / (Math.PI / 360) - 90, new h(n, o)
                    },
                    Re = function e(t) {
                        return 156543.03390625 / Math.pow(2, t)
                    },
                    je = {
                        getBoundsZoom: function e(t, o, n) {
                            var i = Te(t.southwest),
                                a = Te(t.northeast),
                                r = a[0] - i[0],
                                s = a[1] - i[1],
                                l = Math.max(r / o, s / n),
                                u = Math.floor(function e(t) {
                                    return Math.log2(156543.03390625 / t)
                                }(l));
                            return isFinite(u) ? u : void 0
                        },
                        getPaddedBounds: function e(t, o, n) {
                            var i = Te(t),
                                a = Re(o),
                                r = a * n.left,
                                s = a * n.right,
                                l = a * n.top,
                                u = a * n.bottom,
                                c = [i[0] - r, i[1] - u],
                                p = [i[0] + s, i[1] + l];
                            return new v(Fe(c), Fe(p))
                        },
                        getPaddedBoundingBox: function e(t, o, n) {
                            var i = Re(o),
                                a = Te(t.southwest),
                                r = Te(t.northeast),
                                s = i * n.left,
                                l = i * n.right,
                                u = i * n.top,
                                c = (n.bottom, [a[0] + s, a[1] + s]),
                                p = [r[0] - l, r[1] - u];
                            return new v(Fe(c), Fe(p))
                        }
                    },
                    Ge = function(e) {
                        function t() {
                            var e, o;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                            return o = g()(this, (e = k()(t)).call.apply(e, [this].concat(i))), c()(b()(b()(o)), "state", {
                                circleOverlay: null
                            }), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "componentDidMount",
                            value: function e() {
                                this.handleProps(this.props)
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function e() {
                                this.handleProps(this.props)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function e() {
                                var t = this.props.map,
                                    o = this.state.circleOverlay;
                                t && o && (t.removeCircleOverlay(o), this.setState({
                                    circleOverlay: null
                                }))
                            }
                        }, {
                            key: "handleProps",
                            value: function e(t) {
                                var o = this.state.circleOverlay,
                                    n = t.map;
                                n && (o || (o = n.addCircleOverlay(this.props), this.setState({
                                    circleOverlay: o
                                })), o.setPosition(t.position), o.setRadius(t.radius), o.setFillColor(t.fillColor), o.setStrokeColor(t.strokeColor), o.setStrokeWidth(t.strokeWidth), o.setOpacity(t.opacity))
                            }
                        }, {
                            key: "render",
                            value: function e() {
                                return null
                            }
                        }]), t
                    }(w.PureComponent),
                    _e = function e(t) {
                        return w.createElement(z, null, function(e) {
                            var o = e.map;
                            return w.createElement(Ge, H()({}, t, {
                                map: o
                            }))
                        })
                    },
                    Ue = function e(t, o) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = w.useContext(x).map,
                            a = w.useRef(o);
                        w.useEffect(function() {
                            a.current = o
                        }, [o]);
                        var r = w.useCallback(function() {
                            a.current()
                        }, []);
                        w.useEffect(function() {
                            return i ? (n ? i.once(t, r) : i.on(t, r), function() {
                                i.off(t, r)
                            }) : function() {}
                        }, [i, t, r, n])
                    },
                    Ve = o("@babel/runtime/helpers/esm/slicedToArray"),
                    Ne = o.n(Ve),
                    Xe = o("react-dom"),
                    qe = o.n(Xe),
                    Ke = o("@ta/common.classnames"),
                    Ye = o.n(Ke),
                    $e = w.createContext({
                        position: null
                    }),
                    Je = $e.Provider,
                    Qe = $e.Consumer,
                    et = function e(t) {
                        var o = t.zIndexOffset,
                            n = t.position,
                            i = t.children,
                            a = t.onClick,
                            r = t.onMouseEnter,
                            s = t.onMouseLeave,
                            l = t.disableTracking,
                            u = t.trackingContext,
                            p = t.className,
                            h = t.draggable,
                            v = t.onDrag,
                            d = w.useContext(x).map,
                            m = w.useState(null),
                            f = Ne()(m, 2),
                            g = f[0],
                            y = f[1],
                            k = w.useState(!1),
                            C = Ne()(k, 2),
                            M = C[0],
                            O = C[1];
                        w.useLayoutEffect(function() {
                            if (!d) return function() {};
                            var e = d.createMarkerContainer();
                            return y(e), e.getContainer() ? O(!0) : e.setMarkerReadyCallback(function() {
                                    O(!0)
                                }),
                                function() {
                                    d.removeMarkerContainer(e)
                                }
                        }, [d]), w.useLayoutEffect(function() {
                            g && g.setZIndexOffset(o)
                        }, [g, o]), w.useLayoutEffect(function() {
                            g && !n.equals(g.getPosition()) && g.setPosition(n)
                        }, [g, n]), w.useLayoutEffect(function() {
                            g && g.setDraggable(h)
                        }, [g, h]), w.useLayoutEffect(function() {
                            g && g.setDragCallback(v)
                        }, [g, v]);
                        var b = w.useCallback(function(e) {
                                e.stopPropagation(), "touchend" === e.type && e.preventDefault(), l || S()({
                                    module: "pin",
                                    action: "pin_click",
                                    context: u || ""
                                }), a && a()
                            }, [l, u, a]),
                            P = function e(t) {
                                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = w.useRef(null),
                                    i = w.useRef(t),
                                    a = w.useCallback(function() {
                                        n.current && clearTimeout(n.current), n.current = setTimeout(function() {
                                            i.current()
                                        }, o)
                                    }, [o]),
                                    r = w.useCallback(function() {
                                        n.current && (clearTimeout(n.current), n.current = null)
                                    }, []);
                                return w.useEffect(function() {
                                    i.current = t
                                }, [t]), [a, r]
                            }(w.useCallback(function() {
                                l || S()({
                                    module: "pin",
                                    action: "pin_hover",
                                    context: u || ""
                                }), r && r()
                            }, [l, u, r]), 300),
                            L = Ne()(P, 2),
                            E = L[0],
                            I = L[1],
                            z = w.useCallback(function() {
                                I(), s && s()
                            }, [s, I]),
                            Z = g && g.getContainer();
                        if (M && Z) {
                            var H = w.createElement("div", {
                                className: Ye()(p, c()({}, "public-maps-Marker__clickable--1Fb3H", !!a)),
                                onClick: b,
                                onTouchEnd: b,
                                onMouseEnter: E,
                                onMouseLeave: z
                            }, i);
                            return w.createElement(Je, {
                                value: {
                                    position: n
                                }
                            }, qe.a.createPortal(H, Z))
                        }
                        return null
                    };
                et.defaultProps = {
                    zIndexOffset: 0,
                    children: null,
                    onClick: void 0,
                    onMouseEnter: void 0,
                    onMouseLeave: void 0,
                    disableTracking: !1,
                    trackingContext: void 0,
                    className: void 0,
                    draggable: !1
                };
                var tt = et,
                    ot = o("@ta/common.cdn"),
                    nt = function e(t) {
                        return w.createElement(tt, {
                            position: t.position,
                            zIndexOffset: t.zIndexOffset,
                            onMouseEnter: t.onMouseEnter,
                            onMouseLeave: t.onMouseLeave,
                            onClick: t.onClick,
                            trackingContext: t.trackingContext,
                            draggable: t.draggable,
                            onDrag: t.onDrag
                        }, w.createElement(ot.CdnImage, {
                            style: {
                                cursor: "pointer",
                                width: "".concat(t.width, "px"),
                                height: "".concat(t.height, "px"),
                                position: "absolute",
                                left: "-".concat(t.anchor.x, "px"),
                                top: "-".concat(t.anchor.y, "px"),
                                opacity: t.alpha,
                                transition: t.animated ? "width 0.3s, height 0.3s, left 0.3s, top 0.3s" : null
                            },
                            src: t.src
                        }), t.children)
                    };
                nt.defaultProps = {
                    zIndexOffset: 0,
                    draggable: !1,
                    animated: !1,
                    children: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onClick: null,
                    alpha: 1,
                    trackingContext: null
                };
                var it = w.memo(nt),
                    at = {
                        markerCalloutContainer: "public-maps-Popup__markerCalloutContainer--eBKSQ",
                        topleft: "public-maps-Popup__topleft--3fho-",
                        top: "public-maps-Popup__top--dMfPD",
                        topright: "public-maps-Popup__topright--1ghIa",
                        left: "public-maps-Popup__left--m2jAl",
                        right: "public-maps-Popup__right--1Z8ju",
                        bottomleft: "public-maps-Popup__bottomleft--ktwul",
                        bottom: "public-maps-Popup__bottom--1Vhwv",
                        bottomright: "public-maps-Popup__bottomright--38M_r",
                        noInteraction: "public-maps-Popup__noInteraction--KvVa3"
                    },
                    rt = function e() {},
                    st = function e(t, o, n) {
                        var i = {
                            left: o / 2,
                            right: o / 2,
                            top: n / 2,
                            bottom: n / 2
                        };
                        return t.includes("left") && (i.left = o, i.right = 0), t.includes("right") && (i.left = 0, i.right = o), t.includes("top") && (i.top = n, i.bottom = 0), t.includes("bottom") && (i.top = 0, i.bottom = n), i
                    },
                    lt = function(e) {
                        function t() {
                            var e, o;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                            return o = g()(this, (e = k()(t)).call.apply(e, [this].concat(i))), c()(b()(b()(o)), "hasAutoPanned", !1), c()(b()(b()(o)), "checkAutoPan", function(e) {
                                if (e && o.props.autoPan && !o.hasAutoPanned) {
                                    o.hasAutoPanned = !0;
                                    var t = e.offsetWidth,
                                        n = e.offsetHeight;
                                    o.props.map.panIntoView(o.props.position, st(o.props.direction, t, n))
                                }
                            }), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "render",
                            value: function e() {
                                var t = this.props,
                                    o = t.direction,
                                    n = t.position,
                                    i = t.zIndexOffset,
                                    a = t.offset,
                                    r = t.children,
                                    s = t.disableInteraction,
                                    l = at[o];
                                return w.createElement(tt, {
                                    position: n,
                                    zIndexOffset: i,
                                    disableTracking: !0
                                }, w.createElement("div", {
                                    ref: this.checkAutoPan,
                                    className: "".concat(at.markerCalloutContainer, " ").concat(s ? at.noInteraction : "", " ").concat(l),
                                    style: {
                                        marginTop: a.y,
                                        marginLeft: a.x
                                    },
                                    onClick: rt,
                                    onMouseEnter: rt,
                                    onMouseLeave: rt
                                }, r))
                            }
                        }]), t
                    }(w.PureComponent),
                    ut = function e(t) {
                        if (!t.visible) return null;
                        var o = function e(o) {
                            return w.createElement(z, null, function(e) {
                                var n = e.map;
                                return n && w.createElement(lt, {
                                    direction: t.direction,
                                    offset: t.offset,
                                    position: o,
                                    autoPan: t.autoPan,
                                    map: n,
                                    zIndexOffset: t.zIndexOffset,
                                    disableInteraction: t.disableInteraction
                                }, t.children)
                            })
                        };
                        return t.position ? o(t.position) : w.createElement(Qe, null, function(e) {
                            return o(e.position)
                        })
                    };
                ut.defaultProps = {
                    position: null,
                    autoPan: !0,
                    visible: !0,
                    zIndexOffset: 99999999,
                    disableInteraction: !1
                };
                var ct = ut,
                    pt = function(e) {
                        function t() {
                            var e, o;
                            r()(this, t);
                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                            return o = g()(this, (e = k()(t)).call.apply(e, [this].concat(i))), c()(b()(b()(o)), "state", {
                                polygonOverlay: null
                            }), o
                        }
                        return M()(t, e), l()(t, [{
                            key: "componentDidMount",
                            value: function e() {
                                this.handleProps(this.props)
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function e() {
                                this.handleProps(this.props)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function e() {
                                var t = this.props.map,
                                    o = this.state.polygonOverlay;
                                t && o && (t.removePolygonOverlay(o), this.setState({
                                    polygonOverlay: null
                                }))
                            }
                        }, {
                            key: "handleProps",
                            value: function e(t) {
                                var o = this.state.polygonOverlay,
                                    n = t.map;
                                n && (o || (o = n.addPolygonOverlay(this.props), this.setState({
                                    polygonOverlay: o
                                })), o.setPolygon(t.coords), o.setFillColor(t.fillColor), o.setStrokeColor(t.strokeColor), o.setStrokeWidth(t.strokeWidth), o.setOpacity(t.opacity), o.setStrokeOpacity(t.strokeOpacity), o.setOnMouseOverInteraction(t.onMouseOver), o.setOnMouseOutInteraction(t.onMouseOut), o.setOnClickInteraction(t.onClick))
                            }
                        }, {
                            key: "render",
                            value: function e() {
                                return null
                            }
                        }]), t
                    }(w.PureComponent),
                    ht = function e(t) {
                        return w.createElement(z, null, function(e) {
                            var o = e.map;
                            return w.createElement(pt, H()({}, t, {
                                map: o
                            }))
                        })
                    };
                o.d(t, "MapProviderGoogle", function() {
                    return i.MapProviderGoogle
                }), o.d(t, "MapProviderCitymaps", function() {
                    return i.MapProviderCitymaps
                }), o.d(t, "MapProviderBing", function() {
                    return i.MapProviderBing
                }), o.d(t, "MapProviderAutonavi", function() {
                    return i.MapProviderAutonavi
                }), o.d(t, "LatLng", function() {
                    return h
                }), o.d(t, "LatLngBounds", function() {
                    return v
                }), o.d(t, "MapComponent", function() {
                    return De
                }), o.d(t, "Util", function() {
                    return je
                }), o.d(t, "CircleOverlay", function() {
                    return _e
                }), o.d(t, "MapInterface", function() {
                    return G
                }), o.d(t, "useMapEvent", function() {
                    return Ue
                }), o.d(t, "MapContext", function() {
                    return x
                }), o.d(t, "MapContextProvider", function() {
                    return I
                }), o.d(t, "MapContextConsumer", function() {
                    return z
                }), o.d(t, "Marker", function() {
                    return tt
                }), o.d(t, "IconMarker", function() {
                    return it
                }), o.d(t, "Popup", function() {
                    return ct
                }), o.d(t, "PolygonOverlay", function() {
                    return ht
                }), o.d(t, "MockMapInterface", function() {
                    return ze
                })
            }
        }
    });
    //# sourceMappingURL=public.maps.0d59b44b35.js.map
    
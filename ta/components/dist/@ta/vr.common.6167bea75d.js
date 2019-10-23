($WP = "undefined" != typeof $WP ? $WP : []).push({
    id: "@ta/vr.common",
    d: ["vendor-babel", "vendor-react-libs", "@ta/input.text-input", "vendor-common", "ta-platform", "react-transition-group", "@ta/vr.traveler-input-picker", "@ta/vr.datepicker", "lithium-platform"],
    e: ["./packages/vr/common/index.js"],
    x: {
        "./packages/common/state/travelerInfo/vr.jsx": ["a"],
        "./packages/vr/common/PartnerRelated.jsx": ["c", "a", "b", "d"],
        "./packages/vr/common/index.js": ["PhoneInput", "PhoneInputWithRegionCodes", "REGION_CODE_DATA_GET", "mapRegionCodeResponseForDropdown", "isMachineTranslated", "Fade", "SectionHeader", "persistTravelerInfo", "EmailInput", "START_INPUT_NAME", "END_INPUT_NAME", "StayPicker", "buildPartnerReferrerParams", "storePartnerReference", "tryGettingPartnerReference", "tryStoringPartnerReference", "getRapUrl", "getRapUrlBulk", "codeLocaleToAffiliateTextLogoMap"],
        "./packages/vr/common/types.jsx": ["a"]
    },
    m: {
        "./packages/common/state/travelerInfo/vr.jsx": function(e, t, n) {
            "use strict";

            function r(e) {
                return "".concat(e.getFullYear(), "/").concat(function n(e) {
                    var t = e.getMonth() + 1;
                    return "0".concat(t.toString(10)).slice(-2)
                }(e), "/").concat(function t(e) {
                    return "0".concat(e.getDate()).slice(-2)
                }(e))
            }
            n.d(t, "a", function() {
                return r
            }), n("@babel/runtime/helpers/esm/objectSpread")
        },
        "./packages/vr/common/PartnerRelated.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return o
            }), n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return s
            });
            var r = n("@babel/runtime/helpers/esm/objectWithoutProperties"),
                a = n.n(r),
                o = function e() {
                    try {
                        var t = localStorage.getItem("VacationRentalPartnerReferrerParams");
                        if (t) {
                            var n = JSON.parse(t),
                                r = n.expires,
                                o = a()(n, ["expires"]);
                            if (!(new Date(r) <= new Date)) return o;
                            localStorage.removeItem("VacationRentalPartnerReferrerParams")
                        }
                    } catch (e) {
                        return null
                    }
                    return null
                },
                c = function e(t) {
                    var n = t.partnerReference,
                        r = t.partnerReferrerId,
                        a = t.clickref,
                        o = t.referrerid,
                        c = n || a,
                        i = r || o;
                    return c && i ? {
                        partnerReference: c,
                        referrerId: i
                    } : null
                },
                i = function e(t) {
                    var n = t.partnerReference,
                        r = t.referrerId;
                    if (n && r) {
                        var a = new Date;
                        a.setDate(a.getDate() + 7);
                        var o = JSON.stringify({
                            partnerReference: n,
                            referrerId: r,
                            expires: a
                        });
                        localStorage.setItem("VacationRentalPartnerReferrerParams", o)
                    }
                },
                s = function e(t) {
                    var n = c(t);
                    n && i(n)
                }
        },
        "./packages/vr/common/index.js": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("./packages/vr/common/types.jsx"),
                a = n("@babel/runtime/helpers/esm/classCallCheck"),
                o = n.n(a),
                c = n("@babel/runtime/helpers/esm/createClass"),
                i = n.n(c),
                s = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
                u = n.n(s),
                l = n("@babel/runtime/helpers/esm/getPrototypeOf"),
                m = n.n(l),
                d = n("@babel/runtime/helpers/esm/inherits"),
                p = n.n(d),
                f = n("@babel/runtime/helpers/esm/assertThisInitialized"),
                v = n.n(f),
                h = n("@babel/runtime/helpers/esm/defineProperty"),
                g = n.n(h),
                _ = n("react"),
                b = n.n(_),
                E = n("@ta/input.text-input"),
                C = n("lodash/debounce"),
                R = n.n(C),
                P = n("lodash/keyBy"),
                S = n.n(P),
                N = n("@ta/common.api"),
                k = {},
                y = function e(t) {
                    var n = t.phoneNumber,
                        r = t.regionCode,
                        a = new URLSearchParams({
                            phoneNumber: n || "",
                            region: r
                        }),
                        o = a.toString();
                    return k[o] ? Promise.resolve(k[o]) : fetch("/data/1.0/vr/validatePhoneNumber?".concat(a.toString()), {
                        method: "GET",
                        credentials: "same-origin"
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        return k[o] = e, e
                    })
                },
                D = function e(t) {
                    var n = t.options,
                        r = t.currentCountryCode;
                    return {
                        regions: n,
                        regionsByRegionCode: S()(n, function(e) {
                            return e.countryValue.countryRegionCode
                        }),
                        currentCountryCode: r
                    }
                },
                I = function(e) {
                    function t() {
                        var e, n;
                        o()(this, t);
                        for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                        return n = u()(this, (e = m()(t)).call.apply(e, [this].concat(a))), g()(v()(v()(n)), "state", {
                            focused: !1
                        }), g()(v()(v()(n)), "onFocus", function() {
                            n.setState({
                                focused: !0
                            }), n.props.onFocus && n.props.onFocus()
                        }), g()(v()(v()(n)), "onBlur", function() {
                            n.setState({
                                focused: !1
                            }), n.props.onBlur && n.props.onBlur()
                        }), g()(v()(v()(n)), "onPhoneNumberChange", function(e, t) {
                            n.props.onPhoneNumberChange(t), n.debouncedValidatePhoneNumber(t)
                        }), g()(v()(v()(n)), "validatePhoneNumber", function(e) {
                            var t = n.getRegionCode(),
                                r = e;
                            y({
                                phoneNumber: r,
                                regionCode: t
                            }).then(function(e) {
                                n.props.phoneNumber === r && n.getRegionCode() === t && n.props.onValidatePhoneNumber(e)
                            })
                        }), g()(v()(v()(n)), "debouncedValidatePhoneNumber", R()(n.validatePhoneNumber, 300, !0)), g()(v()(v()(n)), "handleRegionChange", function(e) {
                            var t = n.props.phoneNumber,
                                r = e.currentTarget.value;
                            n.props.onRegionCodeChange(r), y({
                                phoneNumber: t,
                                regionCode: r
                            }).then(function(e) {
                                n.props.phoneNumber === t && n.getRegionCode() === r && n.props.onValidatePhoneNumber(e)
                            })
                        }), n
                    }
                    return p()(t, e), i()(t, [{
                        key: "getRegionCode",
                        value: function e() {
                            return this.props.regionCode || this.props.currentCountryCode
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var t = this.getRegionCode();
                            if (!this.props.regions || !this.props.regionsByRegionCode) return null;
                            var n = this.props.regionsByRegionCode[t];
                            return _.createElement("div", {
                                className: "".concat(this.props.className ? this.props.className : "", " ").concat("vr-common-PhoneInput__wrapper--16VBr", " ").concat(this.state.focused ? "vr-common-PhoneInput__focusedWrapper--2GGF8" : "")
                            }, _.createElement("div", {
                                className: "vr-common-PhoneInput__regionDropDown--2mjXz"
                            }, _.createElement("div", null, "+", n.countryValue.countryPhoneCode), _.createElement("span", {
                                className: "ui_icon caret-down"
                            }), _.createElement("select", {
                                value: this.props.regionCode,
                                onChange: this.handleRegionChange
                            }, this.props.regions.map(function(e) {
                                var t = e.countryCodeDropDownValue,
                                    n = e.countryValue.countryRegionCode;
                                return _.createElement("option", {
                                    key: n,
                                    value: n
                                }, t)
                            }))), _.createElement(E.ManagedTextInput, {
                                name: "phone",
                                type: "tel",
                                value: this.props.phoneNumber || "",
                                onChange: this.onPhoneNumberChange,
                                onFocus: this.onFocus,
                                onBlur: this.onBlur
                            }))
                        }
                    }]), t
                }(_.Component);
            g()(I, "defaultProps", {
                className: ""
            });
            var T = Object(N.bind)(function(e, t) {
                var n = t("/data/1.0/vr/countryRegionCodesForPhone");
                return function() {
                    var e = n.get();
                    return e.loading || !e.data ? {} : D(e.data)
                }
            })(I);

            function A(e) {
                return "MACHINE_TRANSLATED" === e || "MACHINE_BING" === e || "MACHINE_GOOGLE" === e || "PARTNER" === e
            }
            var w = n("react-transition-group"),
                x = {
                    appear: "vr-common-Fade__enter--1LTEc",
                    appearActive: "vr-common-Fade__enterActive--1o95m",
                    enter: "vr-common-Fade__enter--1LTEc",
                    enterActive: "vr-common-Fade__enterActive--1o95m",
                    exit: "vr-common-Fade__exit--2q6l6",
                    exitActive: "vr-common-Fade__exitActive--3uSYI"
                },
                F = function e(t) {
                    var n = t.in,
                        r = t.children;
                    return _.createElement(w.CSSTransition, {
                        in: n,
                        timeout: 300,
                        classNames: x,
                        appear: !0
                    }, function() {
                        return r
                    })
                },
                j = function e(t) {
                    var n = t.title;
                    return _.createElement("div", {
                        //className: "ui_header h2 ".concat("vr-common-SectionHeader__title--3AQfR")
                    }, n)
                },
                O = n("./packages/common/state/travelerInfo/vr.jsx"),
                B = function e(t) {
                    var n = new URLSearchParams({
                        a: "PERSIST_TRAVELER_INFO",
                        inDate: t.start ? Object(O.a)(t.start) : "",
                        endDate: t.end ? Object(O.a)(t.end) : "",
                        adults: t.adults.toString()
                    });
                    return null != t.kids && t.kids >= 0 && n.set("children", t.kids.toString()), fetch(asset_path + "/VacationRentalsAjax?".concat(n.toString()), {
                        method: "GET",
                        credentials: "same-origin"
                    }).then(function(e) {
                        console.log('success 1 VacationRentalsAjax');
                        return 200 === e.status
                    })
                },
                V = {},
                M = function e(t) {
                    var n = t.email,
                        r = new URLSearchParams({
                            email: n || ""
                        }),
                        a = r.toString();
                    return V[a] ? Promise.resolve(V[a]) : fetch("/data/1.0/vr/validateEmail?".concat(r.toString()), {
                        method: "GET",
                        credentials: "same-origin"
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        return V[a] = e, e
                    })
                },
                L = function(e) {
                    function t() {
                        var e, n;
                        o()(this, t);
                        for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                        return n = u()(this, (e = m()(t)).call.apply(e, [this].concat(a))), g()(v()(v()(n)), "state", {
                            focused: !1
                        }), g()(v()(v()(n)), "onFocus", function() {
                            n.setState({
                                focused: !0
                            }), n.props.onFocus && n.props.onFocus()
                        }), g()(v()(v()(n)), "onBlur", function() {
                            n.setState({
                                focused: !1
                            }), n.props.onBlur && n.props.onBlur()
                        }), g()(v()(v()(n)), "onEmailChange", function(e, t) {
                            n.props.onEmailChange(t), n.debouncedValidateEmail(t)
                        }), g()(v()(v()(n)), "validateEmail", function(e) {
                            var t = e;
                            M({
                                email: t
                            }).then(function(e) {
                                n.props.email === t && n.props.onValidateEmail(e)
                            })
                        }), g()(v()(v()(n)), "debouncedValidateEmail", R()(n.validateEmail, 300, !0)), n
                    }
                    return p()(t, e), i()(t, [{
                        key: "render",
                        value: function e() {
                            return _.createElement("div", {
                                className: "".concat(this.props.className ? this.props.className : "", " ").concat("vr-common-EmailInput__wrapper--1wxax", " ").concat(this.state.focused ? "vr-common-EmailInput__focusedWrapper--1XVQI" : "")
                            }, _.createElement(E.ManagedTextInput, {
                                name: "email",
                                value: this.props.email || "",
                                onChange: this.onEmailChange,
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                type: "email"
                            }))
                        }
                    }]), t
                }(_.Component);
            g()(L, "defaultProps", {
                className: ""
            });
            var G = n("@babel/runtime/helpers/esm/slicedToArray"),
                U = n.n(G),
                H = n("@ta/vr.traveler-input-picker"),
                W = n("@ta/vr.datepicker"),
                z = n("@ta/common.i18n"),
                Y = n("@ta/common.classnames"),
                q = n.n(Y),
                X = function e(t) {
                    var n = t.target,
                        r = t.isCheckIn,
                        a = t.date,
                        o = t.showIcon,
                        c = r ? "vr-common-DateInput__checkInIcon--1vSvj" : "vr-common-DateInput__checkOutIcon--3EixK",
                        i = t.isSelected ? "vr-common-DateInput__selected--3kEqM" : "";
                    return _.createElement("div", {
                        ref: n,
                        className: "".concat("vr-common-DateInput__container--1vW7o", " ").concat(i),
                        onClick: t.onClick
                    }, o ? _.createElement("span", {
                        className: q()("ui_icon", "calendar", c, "vr-common-DateInput__calendarIcon--2GEqc")
                    }) : null, _.createElement("div", null, _.createElement("div", null, r ? Object(z.localize)("vr_checkin_ffffdd04") : Object(z.localize)("vr_checkout_ffffdd04")), " ", _.createElement("div", {
                        className: "vr-common-DateInput__inputLabel--1WBzc"
                    }, a ? z.globalize.formatDate("week_date_short_v2", a) : "— / — / —")))
                },
                $ = function e(t) {
                    var n, r = t.startDate,
                        a = t.endDate;
                    return r && a && (n = {
                        from: r,
                        to: a
                    }), {
                        start: r,
                        end: a,
                        selected: n
                    }
                },
                J = function e(t) {
                    var n = t.isStart ? "left" : void 0;
                    return _.createElement(W.LocalArrowOverlayWithName, {
                        position: "below",
                        alignEdge: n,
                        name: t.name,
                        contents: function e() {
                            return _.createElement(W.LargeDayPickerWrapper, {
                                numberOfMonths: 2,
                                disabledDays: {
                                    before: H.TODAY,
                                    after: H.FINAL_DAY
                                },
                                fromMonth: H.TODAY,
                                modifiers: $(t),
                                initialMonth: t.startDate || t.endDate || H.TODAY,
                                onDayClick: t.onDateSelected,
                                isCheckOut: !t.isStart
                            })
                        }
                    }, function e(n) {
                        var r = t.isStart ? t.startDate : t.endDate;
                        return _.createElement(X, {
                            isCheckIn: t.isStart,
                            target: n,
                            date: r,
                            onClick: t.onClick,
                            isSelected: t.isSelected,
                            showIcon: !0
                        })
                    })
                },
                K = function e(t) {
                    var n = Object(_.useState)(!1),
                        r = U()(n, 2),
                        a = r[0],
                        o = r[1],
                        c = Object(_.useState)(!1),
                        i = U()(c, 2),
                        s = i[0],
                        u = i[1],
                        l = function e() {
                            t.closeStart(), t.openEnd(), o(!1), u(!0)
                        },
                        m = function e() {
                            t.closeEnd(), t.openStart(), o(!0), u(!1)
                        };
                    return b.a.createElement("div", {
                        className: "vr-common-StayPicker__container--1FDoX"
                    }, b.a.createElement("div", {
                        className: "vr-common-StayPicker__datePickerContainer--2q71B"
                    }, b.a.createElement(J, {
                        startDate: t.startDate,
                        endDate: t.endDate,
                        onDateSelected: function e(n) {
                            var r = t.endDate;
                            Object(H.datesFallOutsideValidRange)(n, r) || (r && r.getTime() <= n.getTime() && (r = null), t.onDateChange(n, r), t.closeStart(), setTimeout(function() {
                                l()
                            }, 300))
                        },
                        name: t.startInputName,
                        onClick: m,
                        isSelected: a,
                        isStart: !0
                    })), b.a.createElement("span", {
                        className: "vr-common-StayPicker__divider--3k7Yk"
                    }), b.a.createElement("div", {
                        className: "vr-common-StayPicker__datePickerContainer--2q71B"
                    }, b.a.createElement(J, {
                        startDate: t.startDate,
                        endDate: t.endDate,
                        onDateSelected: function e(n) {
                            var r = t.startDate;
                            Object(H.datesFallOutsideValidRange)(n, r) || (r && r.getTime() >= n.getTime() && (r = null), t.onDateChange(r, n), t.closeEnd(), t.startDate || setTimeout(function() {
                                m()
                            }, 300))
                        },
                        name: t.endInputName,
                        onClick: l,
                        isSelected: s
                    })))
                },
                Q = n("./packages/vr/common/PartnerRelated.jsx"),
                Z = function e(t) {
                    var n = t.start,
                        r = t.end,
                        a = t.children,
                        o = t.adults > 0 ? t.adults : 2;
                    if (n && r && o) {
                        var c = new URLSearchParams({
                            start: n,
                            end: r,
                            adults: o.toString()
                        });
                        return a && c.set("kids", a.toString()), c
                    }
                    return null
                },
                ee = function e(t, n) {
                    t && t.set("securityToken", n)
                },
                te = function e(t, n, r) {
                    var a = Z(t);
                    return ee(a, r), a ? (a.set("propertyId", n.toString()), "".concat(asset_path + "/data/1.0/vr/getRapRate", "?").concat(a.toString())) : null
                },
                ne = function e(t, n, r) {
                    var a = Z(t);
                    return ee(a, r), a && n ? "".concat(asset_path + "/data/1.0/vr/getRapRateBulk", "?").concat(n, "&").concat(a.toString()) : null
                };
            n.d(t, "codeLocaleToAffiliateTextLogoMap", function() {
                return r.a
            }), n.d(t, "PhoneInput", function() {
                return I
            }), n.d(t, "PhoneInputWithRegionCodes", function() {
                return T
            }), n.d(t, "REGION_CODE_DATA_GET", function() {
                return "/data/1.0/vr/countryRegionCodesForPhone"
            }), n.d(t, "mapRegionCodeResponseForDropdown", function() {
                return D
            }), n.d(t, "isMachineTranslated", function() {
                return A
            }), n.d(t, "Fade", function() {
                return F
            }), n.d(t, "SectionHeader", function() {
                return j
            }), n.d(t, "persistTravelerInfo", function() {
                return B
            }), n.d(t, "EmailInput", function() {
                return L
            }), n.d(t, "START_INPUT_NAME", function() {
                return "vr-home-page-start-input"
            }), n.d(t, "END_INPUT_NAME", function() {
                return "vr-home-page-end-input"
            }), n.d(t, "StayPicker", function() {
                return K
            }), n.d(t, "buildPartnerReferrerParams", function() {
                return Q.a
            }), n.d(t, "storePartnerReference", function() {
                return Q.b
            }), n.d(t, "tryGettingPartnerReference", function() {
                return Q.c
            }), n.d(t, "tryStoringPartnerReference", function() {
                return Q.d
            }), n.d(t, "getRapUrl", function() {
                return te
            }), n.d(t, "getRapUrlBulk", function() {
                return ne
            })
        },
        "./packages/vr/common/types.jsx": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = new Map([
                ["en_US", "Vrbo.com"],
                ["en_CA", "Vrbo.com"],
                ["en_UK", "Homeaway.co.uk"],
                ["fr", "Abritel.fr"],
                ["es", "Homeaway.es"],
                ["de", "Fewo-direkt.de"],
                ["it", "Homeaway.it"],
                ["en_AU", "Stayz.com.au"],
                ["en_NZ", "Bookabach.co.nz"],
                ["fr_CA", "fr.Homeaway.ca"],
                ["pt", "AlugueTemporada.com.br"],
                ["nl", "Homeaway.nl"],
                ["sv", "Homeaway.se"],
                ["es_MX", "Homeaway.com.mx"]
            ])
        }
    }
});
//# sourceMappingURL=vr.common.6167bea75d.js.map

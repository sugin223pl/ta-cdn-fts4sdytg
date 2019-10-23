($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.inquiry",
	d: ["vendor-babel", "vendor-react-libs", "@ta/vr.traveler-input-picker", "ta-common", "ta-platform", "lithium-platform", "@ta/input.text-input", "@ta/input.text-area", "@ta/common.captcha", "@ta/vr.common", "vendor-redux-libs", "vendor-apollo-libs", "@ta/vr.remarketing", "@ta/vr.legacy-rap-functions", "@ta/vr.affiliate-utils", "@ta/overlays.modal"],
	e: ["./packages/vr/inquiry/inquiry.jsx"],
	x: {
		"./packages/common/state/travelerInfo/vr.jsx": ["a"],
		"./packages/vr/inquiry/inquiry.jsx": ["InquiryForm", "InquiryFormWithDeviceAwareness", "ConnectedInquiryForm", "ConnectedModalInquiryForm", "InquiryButton", "InquiryButtonStyles", "MODAL_ID"]
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
		"./packages/vr/inquiry/inquiry.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("@babel/runtime/helpers/esm/extends"),
				a = n.n(r),
				i = n("@babel/runtime/helpers/esm/objectSpread"),
				o = n.n(i),
				s = n("@babel/runtime/helpers/esm/classCallCheck"),
				l = n.n(s),
				c = n("@babel/runtime/helpers/esm/createClass"),
				u = n.n(c),
				m = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				d = n.n(m),
				p = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				v = n.n(p),
				_ = n("@babel/runtime/helpers/esm/inherits"),
				h = n.n(_),
				g = n("@babel/runtime/helpers/esm/assertThisInitialized"),
				y = n.n(g),
				f = n("@babel/runtime/helpers/esm/defineProperty"),
				b = n.n(f),
				I = n("react"),
				k = n("@ta/vr.traveler-input-picker"),
				q = n("@ta/styleguide.button"),
				E = n.n(q),
				C = n("@ta/common.decode"),
				S = n.n(C),
				N = n("@ta/styleguide.avatar"),
				O = n("@ta/common.features"),
				F = n("@ta/input.text-input"),
				R = n("@ta/input.text-area"),
				j = n("@ta/common.captcha"),
				w = n("@ta/vr.common"),
				M = n("react-redux"),
				T = n("@ta/common.i18n"),
				z = function e(t) {
					var n = t.label,
						r = t.price,
						a = t.bold;
					return I.createElement("div", {
						className: a ? "vr-inquiry-pieces-RapQuote__boldPriceRow--1Ymhr" : "vr-inquiry-pieces-RapQuote__priceRow--swAP8"
					}, I.createElement("div", null, n), I.createElement("div", null, r))
				};
			z.defaultProps = {
				bold: !1
			};
			var V = function e(t) {
				var n = t.rapData,
					r = n.rapTax,
					a = n.rapConsolidatedRate,
					i = n.rapDeposit,
					o = n.rapOwnerFees,
					s = n.rapSubtotal;
				return I.createElement("div", {
					className: t.className ? t.className : null
				}, I.createElement("div", {
					className: "vr-inquiry-pieces-RapQuote__quoteTitle--zGTQf"
				}, Object(T.localize)("ftl_quote_rates_title_14cd")), I.createElement(z, {
					label: Object(T.localize)("vr_rap_subtotal_27a", {
						0: t.stayLength
					}),
					price: a
				}), r ? I.createElement(z, {
					label: Object(T.localize)("vr_fees_tax_81f"),
					price: r
				}) : null, i ? I.createElement(z, {
					label: Object(T.localize)("ftl_deposit"),
					price: i
				}) : null, o ? I.createElement(z, {
					label: Object(T.localize)("vr_owner_fees_ffffdcba"),
					price: o
				}) : null, I.createElement(z, {
					bold: !0,
					label: Object(T.localize)("ftl_subtotal"),
					price: s
				}))
			};
			V.defaultProps = {
				className: null
			};
			var D = V,
				x = n("@babel/runtime/helpers/esm/objectWithoutProperties"),
				B = n.n(x),
				P = n("./packages/common/state/travelerInfo/vr.jsx"),
				L = function e(t) {
					var n = t.rapData;
					return !n || !("NONE" !== n.rapBookable || n.isOffsiteBooking)
				},
				A = function e(t) {
					var n, r = t.trim(),
						a = r.indexOf(" "),
						i = r;
					return a > 0 && (i = r.substring(0, a), n = r.substring(a + 1)), {
						firstName: i,
						lastName: n
					}
				},
				U = function e(t) {
					var n = t.csrfToken,
						r = t.startDate,
						a = t.endDate,
						i = t.adults,
						s = B()(t, ["csrfToken", "startDate", "endDate", "adults"]);
					return fetch("/data/1.0/vr/submitInquiry", {
						method: "post",
						credentials: "same-origin",
						headers: {
							"Content-Type": "application/json",
							"X-Requested-By": n
						},
						body: JSON.stringify(o()({
							start: Object(P.a)(r),
							end: Object(P.a)(a),
							adults: i
						}, s))
					}).then(function(e) {
						return e.ok ? e.json() : Promise.reject(new Error("failed inquiry submission!"))
					})
				},
				H = function e(t) {
					if (t && t.length && !/\d/.test(t)) {
						var n = A(t),
							r = n.firstName,
							a = n.lastName;
						return r && r.length > 0 && a && a.length > 0
					}
					return !1
				},
				G = function e(t) {
					return t && t.length
				},
				W = function e(t) {
					var n;
					n = t.propertyManager.photoUrl && t.propertyManager.photoUrl.length ? t.propertyManager.photoUrl : t.thumbnailUrl;
					var r = t.propertyManager,
						a = r.name,
						i = r.localizedLanguages,
						o = i.length > 0;
					return I.createElement("div", {
						className: "".concat("vr-inquiry-InquiryForm__managerSection--AwQEj", " ").concat("vr-inquiry-InquiryForm__rows--1iRnZ")
					}, I.createElement(N.Avatar, {
						photoUrl: n,
						size: "large"
					}), I.createElement("div", {
						className: "vr-inquiry-InquiryForm__managerRightSection--1nXji"
					}, I.createElement("div", {
						className: "vr-inquiry-InquiryForm__sendMessageTo--3hjLs"
					}, Object(T.localize)("vr_send_a_message_to", {
						managerName: a
					})), o ? I.createElement("div", null, Object(T.localize)("vr_pm_languages_ffffdcba"), " ", i) : null, I.createElement("div", null, function e(t) {
						var n = 0 === t.roomCount ? Object(T.localize)("vr_studio_room") : Object(T.localize)("vr_mobile_plural_bedrooms", {
								0: t.roomCount
							}),
							r = t.bathCount ? "".concat(Object(T.localize)("vr_mobile_plural_baths", {
								0: t.bathCount
							}), ", ") : "";
						return "".concat(n, ", ").concat(r).concat(Object(T.localize)("vr_detail_sleeps_171f", {
							0: t.sleepCount
						}))
					}(t))))
				},
				Q = function e() {
					return I.createElement(w.Fade, {
						in: !0,
						key: "name-error"
					}, I.createElement("div", {
						className: "vr-inquiry-InquiryForm__errorText--23n_M"
					}, Object(T.localize)("vr_inquiry_name_input_tip_c35")))
				},
				Y = function e() {
					return I.createElement(w.Fade, {
						in: !0,
						key: "email-error"
					}, I.createElement("div", {
						className: "vr-inquiry-InquiryForm__errorText--23n_M"
					}, Object(T.localize)("vr_inquiry_email_input_tip")))
				},
				X = function e() {
					return I.createElement(w.Fade, {
						in: !0,
						key: "phone-error"
					}, I.createElement("div", {
						className: "vr-inquiry-InquiryForm__errorText--23n_M"
					}, Object(T.localize)("vr_inquiry_phone_input_tip_c35")))
				},
				K = function e() {
					return I.createElement(w.Fade, {
						in: !0,
						key: "messsage-error"
					}, I.createElement("div", {
						className: "vr-inquiry-InquiryForm__errorText--23n_M"
					}, Object(T.localize)("please_include_message_to_owner")))
				},
				Z = function(e) {
					function t(e) {
						var n;
						l()(this, t), n = d()(this, v()(t).call(this, e)), b()(y()(y()(n)), "onValidatePhoneNumber", function(e) {
							var t = e.internationalPhoneNumber,
								r = e.localNumber,
								a = e.isValid;
							n.setState({
								phoneNumber: r,
								isPhoneNumberValid: a,
								internationalPhoneNumber: t
							})
						}), b()(y()(y()(n)), "onValidateEmail", function(e) {
							var t = e.isValid;
							n.setState({
								isEmailValid: t
							})
						}), b()(y()(y()(n)), "onPhoneNumberChange", function(e) {
							n.setState({
								phoneNumber: e
							})
						}), b()(y()(y()(n)), "onEmailChange", function(e) {
							n.setState({
								email: e
							})
						}), b()(y()(y()(n)), "onRegionCodeChange", function(e) {
							n.setState({
								regionCode: e
							})
						}), b()(y()(y()(n)), "onInputsChange", function(e) {
							var t = o()({}, n.state, e),
								r = {
									start: t.startDate,
									end: t.endDate,
									adults: t.adults,
									pets: t.pets,
									kids: t.kids
								};
							r.start && r.end && Object(w.persistTravelerInfo)(r), n.props.setVrTravelerInfo(r), n.setState(e)
						}), b()(y()(y()(n)), "onNameChange", function(e, t) {
							n.setState({
								name: t
							})
						}), b()(y()(y()(n)), "onMessageChange", function(e, t) {
							n.setState({
								message: t
							})
						}), b()(y()(y()(n)), "onSMSChange", function(e) {
							n.setState({
								smsOptIn: e.currentTarget.checked
							})
						}), b()(y()(y()(n)), "onMarketingSMSChange", function(e) {
							n.setState({
								marketingSMSOptIn: e.currentTarget.checked
							})
						}), b()(y()(y()(n)), "onSendInquiry", function() {
							if (n.isInputValid()) {
								var e = n.getValidInquiryInputs();
								e && n.props.onSendInquiry(e)
							}
						}), b()(y()(y()(n)), "onCaptchaResponse", function(e) {
							n.setState({
								recaptchaResponse: e
							})
						}), b()(y()(y()(n)), "getValidInquiryInputs", function() {
							var e = n.state,
								t = e.startDate,
								r = e.endDate,
								a = e.adults,
								i = e.kids,
								o = e.message,
								s = e.name,
								l = e.isPhoneNumberValid,
								c = e.isEmailValid,
								u = e.smsOptIn,
								m = e.marketingSMSOptIn,
								d = e.recaptchaResponse,
								p = l && n.state.internationalPhoneNumber,
								v = c && n.state.email,
								_ = A(s),
								h = _.firstName,
								g = _.lastName;
							return n.props.showEmailInput && !v ? null : h && g && o && t && r ? {
								startDate: t,
								endDate: r,
								adults: a,
								kids: i,
								message: o,
								email: v,
								firstName: h,
								lastName: g,
								phoneNumber: p,
								smsOptIn: !!p && u,
								marketingSMSOptIn: !!p && m,
								recaptchaResponse: d
							} : null
						});
						var r = e.travelerInfo,
							a = r.start,
							i = r.end,
							s = r.adults,
							c = r.pets,
							u = r.children,
							m = e.regionCode,
							p = e.travelerName,
							_ = e.inquirySmsConfig,
							h = _.smsCheckBoxChecked,
							g = _.showSMSCheckBox,
							f = _.marketingSMSChecked,
							I = Object(w.mapRegionCodeResponseForDropdown)(e.regionCodeConfig),
							k = I.regions,
							q = I.regionsByRegionCode,
							E = I.currentCountryCode;
						return n.state = {
							name: p || "",
							nameHasFocused: !!p,
							startDate: a ? new Date(a) : null,
							endDate: i ? new Date(i) : null,
							adults: s,
							pets: c,
							kids: u,
							regionCode: m,
							smsOptIn: h && g,
							marketingSMSOptIn: f,
							internationalPhoneNumber: "",
							isPhoneNumberValid: !0,
							isEmailValid: !0,
							regions: k,
							regionsByRegionCode: q,
							currentCountryCode: E
						}, n
					}
					return h()(t, e), u()(t, [{
						key: "getError",
						value: function e() {
							var t = this.state,
								n = t.startDate,
								r = t.endDate;
							return n || r ? n && function a(e, t) {
								return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
							}(n, new Date) ? {
								message: Object(T.localize)("vr_check_in_too_soon"),
								reason: "NO_SAME_DAY_CHECK_IN"
							} : this.getFirstRapError() : {
								message: Object(T.localize)("vr_inquiry_missing_required_error_ffffdcba"),
								reason: "NO_DATES"
							}
						}
					}, {
						key: "getErrorReason",
						value: function e() {
							var t = this.getError();
							return t ? t.reason : void 0
						}
					}, {
						key: "getErrorCopy",
						value: function e() {
							var t = this.getError();
							return t ? t.message : void 0
						}
					}, {
						key: "getFirstRapError",
						value: function e() {
							if (this.props.rapResponse) {
								var t = this.props.rapResponse.errors;
								return t && t.length ? t[0] : void 0
							}
						}
					}, {
						key: "isCaptchaAllSet",
						value: function e() {
							var t = this.props.inquiryCaptchaConfig;
							return !t || !t.needCaptcha || !!this.state.recaptchaResponse
						}
					}, {
						key: "isInputValid",
						value: function e() {
							return !this.hasRapError() && this.isNameValid() && this.isEmailValid() && G(this.state.message) && this.isCaptchaAllSet()
						}
					}, {
						key: "hasRapError",
						value: function e() {
							return !!this.getErrorReason()
						}
					}, {
						key: "isNameValid",
						value: function e() {
							return H(this.state.name)
						}
					}, {
						key: "isEmailValid",
						value: function e() {
							return !this.props.showEmailInput || this.state.email && this.state.isEmailValid
						}
					}, {
						key: "renderEmailInput",
						value: function e() {
							var t = this,
								n = this.state.email && !this.state.isEmailValid && this.state.emailHasFocused && !this.state.emailFocused;
							return I.createElement("div", null, I.createElement("div", {
								className: "vr-inquiry-InquiryForm__inputLabel--g2beX"
							}, Object(T.localize)("vr_inquiry_form_your_email")), I.createElement(w.EmailInput, {
								className: "".concat("vr-inquiry-InquiryForm__input--16BW1", " ").concat(n ? "vr-inquiry-InquiryForm__inputError--3_z-T" : ""),
								email: this.state.email,
								onValidateEmail: this.onValidateEmail,
								onEmailChange: this.onEmailChange,
								onBlur: function e() {
									t.setState({
										emailFocused: !1
									})
								},
								onFocus: function e() {
									t.setState({
										emailHasFocused: !0,
										emailFocused: !0
									})
								}
							}), n ? I.createElement(Y, null) : null)
						}
					}, {
						key: "renderNameInput",
						value: function e() {
							var t = this,
								n = !this.isNameValid() && this.state.nameHasFocused && !this.state.nameFocused;
							return I.createElement("div", null, I.createElement("div", {
								className: "vr-inquiry-InquiryForm__inputLabel--g2beX"
							}, Object(T.localize)("vr_full_page_inquiry_name_ffffeea6")), I.createElement(F.ManagedTextInput, {
								className: "".concat("vr-inquiry-InquiryForm__input--16BW1", " ").concat("vr-inquiry-InquiryForm__nameInput--1JFcX", " ").concat(n ? "vr-inquiry-InquiryForm__inputError--3_z-T" : ""),
								name: "name",
								value: this.state.name || "",
								onChange: this.onNameChange,
								onBlur: function e() {
									t.setState({
										nameFocused: !1
									})
								},
								onFocus: function e() {
									t.setState({
										nameHasFocused: !0,
										nameFocused: !0
									})
								}
							}), n ? I.createElement(Q, null) : null)
						}
					}, {
						key: "renderPhoneInput",
						value: function e() {
							var t = this,
								n = this.state.phoneNumber && !this.state.isPhoneNumberValid && this.state.phoneHasFocused && !this.state.phoneFocused;
							return I.createElement("div", null, I.createElement("div", {
								className: "vr-inquiry-InquiryForm__inputLabel--g2beX"
							}, Object(T.localize)("vr_full_page_inquiry_phone_ffffeea6")), I.createElement(w.PhoneInput, {
								className: "".concat("vr-inquiry-InquiryForm__input--16BW1", " ").concat(n ? "vr-inquiry-InquiryForm__inputError--3_z-T" : ""),
								regionCode: this.state.regionCode,
								regions: this.state.regions,
								regionsByRegionCode: this.state.regionsByRegionCode,
								currentCountryCode: this.state.currentCountryCode,
								phoneNumber: this.state.phoneNumber,
								onValidatePhoneNumber: this.onValidatePhoneNumber,
								onPhoneNumberChange: this.onPhoneNumberChange,
								onRegionCodeChange: this.onRegionCodeChange,
								onBlur: function e() {
									t.setState({
										phoneFocused: !1
									})
								},
								onFocus: function e() {
									t.setState({
										phoneHasFocused: !0,
										phoneFocused: !0
									})
								}
							}), n ? I.createElement(X, null) : null)
						}
					}, {
						key: "renderSMSCheckBox",
						value: function e() {
							return I.createElement("div", {
								className: "vr-inquiry-InquiryForm__smsRow--3mT7w"
							}, I.createElement("span", {
								className: "ui_checkbox"
							}, I.createElement("input", {
								id: "smsOptIn",
								checked: this.state.smsOptIn,
								onChange: this.onSMSChange,
								type: "checkbox"
							}), I.createElement("label", {
								className: "vr-inquiry-InquiryForm__smsLabel--mZ1wW",
								htmlFor: "smsOptIn"
							}, Object(T.localize)("vr_booking_form_sms_optin_gdpr"))))
						}
					}, {
						key: "renderMarketingSMSCheckBox",
						value: function e() {
							return I.createElement("div", {
								className: "vr-inquiry-InquiryForm__smsRow--3mT7w"
							}, I.createElement("span", {
								className: "ui_checkbox"
							}, I.createElement("input", {
								id: "marketingSMSOptIn",
								checked: this.state.marketingSMSOptIn,
								onChange: this.onMarketingSMSChange,
								type: "checkbox"
							}), I.createElement("label", {
								className: "vr-inquiry-InquiryForm__smsLabel--mZ1wW",
								htmlFor: "marketingSMSOptIn"
							}, Object(T.localize)("vr_gdpr_inquiry_form_email_optin"))))
						}
					}, {
						key: "renderTextArea",
						value: function e() {
							var t = this,
								n = this.state,
								r = n.message,
								a = n.messageFocused,
								i = n.messageHasFocused,
								o = !G(r) && i && !a;
							return I.createElement("div", null, I.createElement("div", {
								className: "vr-inquiry-InquiryForm__inputLabel--g2beX"
							}, Object(T.localize)("vr_full_page_inquiry_message_ffffeea6")), I.createElement(R.ManagedTextArea, {
								className: "".concat("vr-inquiry-InquiryForm__input--16BW1", " ").concat("vr-inquiry-InquiryForm__messageInput--76g0I", " ").concat(o ? "vr-inquiry-InquiryForm__inputError--3_z-T" : ""),
								name: "message",
								value: r || "",
								onChange: this.onMessageChange,
								onBlur: function e() {
									t.setState({
										messageFocused: !1
									})
								},
								onFocus: function e() {
									t.setState({
										messageHasFocused: !0,
										messageFocused: !0
									})
								}
							}), o ? I.createElement(K, null) : null)
						}
					}, {
						key: "renderExtraInfo",
						value: function e() {
							var t = this.props.rental.features,
								n = !(!this.props.rapResponse || !this.props.rapResponse.rapRate) && this.props.rapResponse.rapRate.minStay,
								r = t.amn_all_pets_temp,
								a = Object(T.localize)("ftl_ask_about_pets");
							r && ("YES" === r.value ? a = Object(T.localize)("ftl_pets_allowed") : "NO" === r.value && (a = Object(T.localize)("ftl_pets_not_allowed")));
							var i = t.amn_children,
								o = Object(T.localize)("ftl_ask_about_kids");
							return i && ("YES" === i.value ? o = Object(T.localize)("ftl_kid_friendly") : "NO" === i.value && (o = Object(T.localize)("ftl_not_kid_friendly"))), I.createElement("div", {
								className: "vr-inquiry-InquiryForm__infoBelowTravelerInputs--1BXhx"
							}, n ? I.createElement(w.Fade, {
								in: !0,
								key: "min-stay"
							}, I.createElement("div", {
								className: "vr-inquiry-InquiryForm__infoBelowTravelerInputsCell--3btY2"
							}, Object(T.localize)("vr_nights_min_stay_plural", {
								0: n
							}))) : null, a ? I.createElement("div", {
								className: "vr-inquiry-InquiryForm__infoBelowTravelerInputsCell--3btY2"
							}, a) : null, o ? I.createElement("div", {
								className: "vr-inquiry-InquiryForm__infoBelowTravelerInputsCell--3btY2"
							}, o) : null)
						}
					}, {
						key: "renderRapErrorOrBookedCount",
						value: function e() {
							var t, n, r = this.props.rental.paymentStats && this.props.rental.paymentStats.totalPayments,
								a = this.getErrorCopy();
							return a ? (t = a, n = a) : r && (t = "booked-count", n = I.createElement(I.Fragment, null, I.createElement("span", {
								className: "ui_icon credit-card"
							}), " ", Object(T.localize)("vr_travelers_booked_this_property_plural", {
								0: r
							}))), n ? I.createElement(w.Fade, {
								in: !0,
								key: t
							}, I.createElement("div", {
								className: a ? "vr-inquiry-InquiryForm__topSectionCopyError--2IRpm" : "vr-inquiry-InquiryForm__topSectionCopy--1ySc9"
							}, n)) : null
						}
					}, {
						key: "renderCaptcha",
						value: function e(t) {
							return I.createElement(j.Recaptcha, {
								language: t.recaptchaLang,
								siteKey: t.siteKey,
								onResponse: this.onCaptchaResponse
							})
						}
					}, {
						key: "render",
						value: function e() {
							var t = this.state,
								n = t.startDate,
								r = t.endDate,
								i = t.adults,
								o = t.kids,
								s = this.props,
								l = s.viewportCategory,
								c = s.blockingError,
								u = s.withTravelerInputsTracking,
								m = s.showEmailInput,
								d = s.inquiryCaptchaConfig,
								p = this.props.inquirySmsConfig,
								v = p.showSMSCheckBox,
								_ = p.showMarketingSMSCheckBox,
								h = "MOBILE" === l,
								g = this.getErrorReason(),
								y = !!g,
								f = this.props.rental.rentalSource.termsAndConditionsUrl,
								b = "DESKTOP" !== l ? 1 : 2,
								q = h ? "fullwidth" : "default",
								C = h ? "left" : void 0,
								N = h ? "right" : void 0;
							return I.createElement("div", {
								className: "vr-inquiry-InquiryForm__container--3BfZV"
							}, c ? c(this.state, this.props) : [I.createElement(W, a()({}, this.props.rental, {
								key: "manager-section"
							})), I.createElement("div", {
								className: "vr-inquiry-InquiryForm__travelerInputsSection--1Kn0_",
								key: "traveler-inputs-section"
							}, this.renderRapErrorOrBookedCount(), I.createElement(k.TravelerInputsPicker, {
								onInputsChange: this.onInputsChange,
								startDate: n,
								endDate: r,
								adults: i,
								numberOfMonths: b,
								kids: o,
								errorReason: g,
								calendarData: this.props.calendarData,
								startDateOverlayAlignEdge: C,
								endDateOverlayAlignEdge: N,
								withTracking: u,
								tripSearch: Object(O.featureIsEnabled)("vr_pdp_tripsearch_inputs")
							}))], this.renderExtraInfo(), I.createElement("div", {
								className: "vr-inquiry-InquiryForm__mainSection--3VVfR"
							}, I.createElement("div", {
								className: "vr-inquiry-InquiryForm__inputsAndPrices--3rDfl"
							}, I.createElement("div", {
								className: "vr-inquiry-InquiryForm__inputsWrapper--133xc"
							}, this.renderNameInput(), m ? this.renderEmailInput() : null, this.renderPhoneInput(), v ? this.renderSMSCheckBox() : null, this.renderTextArea(), _ ? this.renderMarketingSMSCheckBox() : null), !y && this.props.rapResponse && this.props.rapResponse.rapData ? I.createElement(w.Fade, {
								in: !0,
								key: JSON.stringify(this.props.rapResponse.rapData)
							}, I.createElement(D, {
								className: "vr-inquiry-InquiryForm__priceWrapper--1eShf",
								rapData: this.props.rapResponse.rapData,
								stayLength: this.props.rapResponse.view.stayLength
							})) : null), d && d.needCaptcha ? this.renderCaptcha(d) : null, I.createElement(E.a, {
								size: q,
								disabled: !this.isInputValid(),
								type: "primary",
								onClick: this.onSendInquiry
							}, Object(T.localize)("vr_tip_send_message_14cd"))), I.createElement("div", {
								className: "vr-inquiry-InquiryForm__privacyAndTermsFooter--3yH3A",
								dangerouslySetInnerHTML: {
									__html: Object(T.localize)("vr_inquiry_privacy_and_terms_new_tab", {
										privacyLink: "/pages/privacy.html",
										termsLink: null != f ? S()(f) : ""
									})
								}
							}))
						}
					}]), t
				}(I.Component);
			b()(Z, "defaultProps", {
				inquirySmsConfig: {
					showSMSCheckBox: !0,
					smsCheckBoxChecked: !0,
					showMarketingSMSCheckBox: !0,
					marketingSMSChecked: !0
				}
			});
			var J = Object(M.connect)(function(e, t) {
					return o()({
						viewportCategory: e.meta.device.viewportCategory
					}, t)
				})(Z),
				$ = n("@ta/common.api"),
				ee = n("@ta/common.state"),
				te = n("react-apollo"),
				ne = n("@ta/common.tracking"),
				re = n.n(ne),
				ae = n("@ta/styleguide.loading"),
				ie = n("@ta/overlays.managers"),
				oe = n("@ta/vr.remarketing"),
				se = n("@ta/vr.legacy-rap-functions"),
				le = n("@ta/vr.affiliate-utils"),
				ce = function e(t) {
					var n = t.rental,
						r = t.trackingUid,
						a = t.partnerParams,
						i = t.locale;
					if (n)
						if (t.isReadOnly) ! function e(t) {
							t && window.open(t.contactManagerUrl ? S()(t.contactManagerUrl) : "", "_blank")
						}(n);
						else if (t.rapResponse && t.rapResponse.rapData) {
						var o = t.rapResponse.rapData.isOffsiteBooking,
							s = t.rapResponse.tipQuoteToken;
						if (o) ! function l(e) {
							var t = e.rental,
								n = e.trackingUid,
								r = e.locale;
							if (t.providerOrdinal) {
								var a = Object(le.createPDPAffiliateTrackingAction)(t.providerOrdinal),
									i = Object(le.createAffiliateTracking)(a, t.id, t.parentGeo.id, n);
								Object(le.affiliateCheckOut)(t.id, i, r, "property")
							}
						}({
							rental: n,
							trackingUid: r,
							locale: i
						});
						else {
							var c = t.travelerInfo,
								u = c.start,
								m = c.end,
								d = c.adults,
								p = c.children;
							u && m && s && Object(se.runLegacyBookingRequestFlow)({
								detailId: n.id,
								start: u,
								end: m,
								adults: d,
								tipQuoteToken: s,
								kids: p,
								partnerParams: a
							}, t.onNavigatingToQuoteLink)
						}
					}
				},
				ue = n("@ta/common.cdn"),
				me = function e(t) {
					return I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__container--14EMe"
					}, I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__header--1dH5m"
					}, Object(T.localize)("vr_inquiry_message_sent")), I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__body--1ma71"
					}, I.createElement(ue.CdnImage, {
						className: "vr-inquiry-pieces-SuccessView__speakerImage--1KCtx",
						src: "/img2/vacationrentals/speakerphone.svg"
					}), I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__title--2418Q"
					}, Object(T.localize)("vr_bookings_are_first_come_first_served")), I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__paragraph--2b-yx"
					}, Object(T.localize)("vr_send_booking_request_urgency")), I.createElement(E.a, {
						onClick: t.onBookNowClick
					}, Object(T.localize)("vr_book_now")), I.createElement("div", {
						className: "ui_link",
						onClick: t.onNoThanksClick,
						style: {
							marginTop: 12
						}
					}, Object(T.localize)("vr_inquiry_no_thanks_171f"))))
				},
				de = function e(t) {
					return function() {
						Object(ne.trackEventCookie)({
							module: "VR",
							action: "VR_Inquirysent_Inquiry_VRR",
							destinationUrl: t
						})
					}
				},
				pe = function e(t) {
					return I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__container--14EMe"
					}, I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__header--1dH5m"
					}, I.createElement("div", null, Object(T.localize)("vr_inquiry_message_sent")), I.createElement("a", {
						className: "ui_link",
						href: "/Inbox"
					}, Object(T.localize)("vr_view_in_rental_inbox"))), I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__body--1ma71"
					}, I.createElement(ue.CdnImage, {
						className: "vr-inquiry-pieces-SuccessView__speakerImage--1KCtx",
						src: "/img2/vacationrentals/speakerphone.svg"
					}), I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__title--2418Q"
					}, Object(T.localize)("vr_inquire_on_few_more_rentals")), I.createElement("div", {
						className: "vr-inquiry-pieces-SuccessView__paragraph--2b-yx"
					}, Object(T.localize)("vr_travelers_who_send_four_inquiries")), I.createElement("a", {
						className: "ui_link",
						onClick: de(t.geoLink),
						href: t.geoLink,
						style: {
							marginBottom: 12
						}
					}, t.localizedGeoName ? Object(T.localize)("vr_see_similar_rentals_in_geo", {
						0: t.localizedGeoName
					}) : Object(T.localize)("vr_see_similar_rentals")), I.createElement(E.a, {
						type: "secondary",
						onClick: t.onNoThanksClick
					}, Object(T.localize)("vr_inquiry_no_thanks_171f"))))
				};
			pe.defaultProps = {
				localizedGeoName: null
			};
			var ve = pe,
				_e = function e() {
					return I.createElement("div", {
						className: "vr-inquiry-pieces-BlockingError__container--3xpHb"
					}, I.createElement("div", {
						className: "vr-inquiry-pieces-BlockingError__sorryHeader--2BBe2"
					}, I.createElement("span", {
						className: "ui_icon exclamation-circle"
					}), Object(T.localize)("VRInquireSorry_171f")), I.createElement("div", null, Object(T.localize)("VRInquireTechnical_171f"), Object(T.localize)("VRInquireAlerted_171f")), I.createElement("div", null, I.createElement("div", {
						className: "vr-inquiry-pieces-BlockingError__listItem--1UvwB"
					}, Object(T.localize)("VRInquireTryRefreshHint_ffffe9f1")), I.createElement("div", {
						className: "vr-inquiry-pieces-BlockingError__listItem--1UvwB",
						dangerouslySetInnerHTML: {
							__html: Object(T.localize)("VRInquireSupport_v2_ffffe9f1", {
								0: "/ContactUs?topic=inquiry_to_vr_owner_not_sent"
							})
						}
					})), I.createElement("div", null, Object(T.localize)("VRInquireAgain_171f")))
				},
				he = {
					kind: "Document",
					definitions: [{
						kind: "OperationDefinition",
						operation: "query",
						name: {
							kind: "Name",
							value: "LoggedInMemberDisplayName"
						},
						variableDefinitions: [],
						directives: [],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{
								kind: "Field",
								name: {
									kind: "Name",
									value: "fullName"
								},
								arguments: [],
								directives: [],
								selectionSet: {
									kind: "SelectionSet",
									selections: [{
										kind: "Field",
										name: {
											kind: "Name",
											value: "fullName"
										},
										arguments: [],
										directives: []
									}]
								}
							}]
						}
					}],
					loc: {
						start: 0,
						end: 66
					}
				};
			he.loc.source = {
				body: "62355d8572b4"
			};
			var ge = he,
				ye = {
					submitted: !1,
					savedInquiryInputs: void 0,
					loginScreen: !1,
					loginScreenLoaded: !1,
					error: !1,
					recaptchaResponse: void 0,
					inquiryId: void 0
				},
				fe = function(e) {
					function t(e) {
						var n;
						return l()(this, t), n = d()(this, v()(t).call(this, e)), b()(y()(y()(n)), "state", ye), b()(y()(y()(n)), "onSendInquiry", function(e) {
							var t = n.props.isMember,
								r = Object(O.featureIsEnabled)("vr_inquiry_guest_checkout");
							re()({
								module: "VR",
								action: "VR_Next_LightBox_VRR"
							}), n.setState({
								savedInquiryInputs: e
							}, function() {
								t || r ? n.sendInquiry().then(function(e) {
									var t = e.inquiryId;
									n.setState({
										submitted: !0,
										inquiryId: t
									})
								}).catch(function() {
									n.setState(o()({}, ye, {
										error: !0
									}))
								}) : n.setState({
									loginScreen: !0
								})
							})
						}), b()(y()(y()(n)), "onLoginFrameLoad", function() {
							n.setState({
								loginScreenLoaded: !0
							})
						}), b()(y()(y()(n)), "isInquiryOnly", function() {
							var e = n.props.rapResponse;
							return !e || L(e)
						}), b()(y()(y()(n)), "sendInquiry", function() {
							var e = n.state.savedInquiryInputs,
								t = n.props,
								r = t.csrfToken,
								a = t.rental;
							if (e && a) {
								var i = Object(w.tryGettingPartnerReference)();
								return U(o()({
									csrfToken: r,
									locationId: a.id
								}, e, {
									partnerParams: i
								}))
							}
							return Promise.reject(new Error("missing savedInquiryInputs!"))
						}), b()(y()(y()(n)), "loginScreenRef", null), b()(y()(y()(n)), "goToCheckOut", function() {
							var e = n.props,
								t = e.rapResponse,
								r = e.rental,
								a = e.locationId,
								i = e.readonlyMode,
								o = e.travelerInfo,
								s = e.locale;
							if (t && r && a && i && o) {
								var l = Object(w.tryGettingPartnerReference)();
								ce({
									rapResponse: t,
									isReadOnly: i,
									detailId: a,
									rental: r,
									travelerInfo: o,
									onNavigatingToQuoteLink: function e(t) {
										Object(ne.trackEventCookie)({
											module: "VR",
											action: "VR_InquiryBRImpression_VRR",
											destinationUrl: t
										})
									},
									partnerParams: l,
									locale: s
								})
							}
						}), n.loginScreenRef = I.createRef(), n
					}
					return h()(t, e), u()(t, [{
						key: "shouldComponentUpdate",
						value: function e(t) {
							return !(t.loading && this.props.rental)
						}
					}, {
						key: "componentDidUpdate",
						value: function e(t) {
							var n = this,
								r = this.state.loginScreen;
							if (!t.isMember && this.props.isMember && r && this.sendInquiry().then(function(e) {
									var t = e.inquiryId;
									n.setState({
										submitted: !0,
										inquiryId: t
									})
								}).catch(function() {
									n.setState(o()({}, ye, {
										error: !0
									}))
								}), t.travelerInfo !== this.props.travelerInfo && this.props.travelerInfo) {
								var a = this.props.travelerInfo,
									i = a.start,
									s = a.end,
									l = a.adults,
									c = a.children,
									u = a.pets;
								if (!i || !s) return;
								Object(w.persistTravelerInfo)({
									start: new Date(i),
									end: new Date(s),
									adults: l,
									kids: c,
									pets: u
								})
							}
						}
					}, {
						key: "renderSubmittedView",
						value: function e() {
							var t = this,
								n = this.props;
							return I.createElement(ie.Closer, null, function(e) {
								return I.createElement(w.Fade, {
									in: !0,
									key: "submitted"
								}, I.createElement(I.Fragment, null, t.isInquiryOnly() && n.rental ? I.createElement(ve, {
									onNoThanksClick: e,
									localizedGeoName: n.rental.parentGeo.name,
									geoLink: n.rental.parentGeo.url
								}) : I.createElement(me, {
									onBookNowClick: t.goToCheckOut,
									onNoThanksClick: e
								}), t.props.marketingOptions ? I.createElement(oe.PageMonikerIframe, {
									title: "inquiry-form-remarketing-success",
									marketingOptions: o()({}, t.props.marketingOptions, {
										pixelType: "LIGHTBOX_CLICKOUT",
										vrInquiryId: t.state.inquiryId
									})
								}) : null))
							})
						}
					}, {
						key: "renderLoginView",
						value: function e() {
							return I.createElement("div", null, this.state.loginScreenLoaded ? null : I.createElement(ae.LoadingSpinner, null), I.createElement("iframe", {
								className: "vr-inquiry-ConnectedInquiryForm__loginScreen--2-Cqp",
								style: this.state.loginScreenLoaded ? null : {
									display: "none"
								},
								title: "login-screen",
								ref: this.loginScreenRef,
								onLoad: this.onLoginFrameLoad,
								src: "/RegistrationController?flow=vr_mid_inquiry"
							}))
						}
					}, {
						key: "renderForm",
						value: function e() {
							var t = this,
								n = this.state.error ? _e : null,
								r = this.props.loggedInUserId;
							return I.createElement(te.Query, {
								errorPolicy: "all",
								query: ge
							}, function(e) {
								var i, s = e.data;
								if (e.loading) return I.createElement(ae.LoadingSpinner, null);
								s && s.fullName && H(s.fullName.fullName) && (i = s.fullName.fullName);
								var l = {
									onSendInquiry: t.onSendInquiry,
									blockingError: n,
									travelerName: i,
									showEmailInput: Object(O.featureIsEnabled)("vr_inquiry_guest_checkout") && !r
								};
								return I.createElement(I.Fragment, null, I.createElement(J, a()({}, t.props, l, {
									withTravelerInputsTracking: !0
								})), I.createElement(oe.PageMonikerIframe, {
									title: "inquiry-form-remarketing",
									marketingOptions: o()({}, t.props.marketingOptions, {
										pixelType: "LIGHTBOX_CLICK"
									})
								}))
							})
						}
					}, {
						key: "render",
						value: function e() {
							var t = this.props;
							return t.loading ? I.createElement(ae.LoadingSpinner, null) : t.rental ? this.state.submitted ? this.renderSubmittedView() : this.state.loginScreen ? this.renderLoginView() : this.renderForm() : null
						}
					}]), t
				}(I.Component),
				be = Object($.bind)({
					data: function e(t, n) {
						var r = t.route.detail,
							a = t.travelerInfo.vr,
							i = a && Object(w.getRapUrl)(a, parseInt(r, 10), t.auth.csrfToken),
							o = i ? n(i) : null,
							s = n("".concat("/data/1.0/vr/rental/").concat(r)),
							l = n("".concat("/data/1.0/vr/rental/calendarData/").concat(r)),
							c = n("/data/1.0/vr/inquiry/captchaConfig"),
							u = n("/data/1.0/vr/inquiry/smsConfig"),
							m = n(w.REGION_CODE_DATA_GET),
							d = t.meta.readonlyMode,
							p = {
								servlet: "VacationRentalInquiry"
							};
						return function() {
							return {
								rapResponse: o && o.get().data,
								rental: s.get().data,
								inquiryCaptchaConfig: c.get().data,
								inquirySmsConfig: u.get().data,
								regionCodeConfig: m.get().data,
								travelerInfo: a,
								loading: s.get().loading || c.get().loading || u.get().loading || m.get().loading || !!o && o.get().loading || l.get().loading,
								readonlyMode: d,
								locationId: r,
								marketingOptions: p,
								calendarData: l.get().data,
								csrfToken: t.auth.csrfToken,
								isMember: t.auth.isMember,
								loggedInUserId: t.auth.loggedInUserId,
								locale: t.i18n.locale
							}
						}
					},
					actions: {
						setVrTravelerInfo: ee.actions.travelerInfo.setVrTravelerInfo
					}
				})(fe),
				Ie = n("@ta/overlays.modal"),
				ke = function e(t) {
					var n = t.modalId;
					return I.createElement(Ie.Modal, {
						name: n,
						isFullBleed: !0
					}, I.createElement("div", {
						className: "vr-inquiry-ConnectedModalInquiryForm__modalCenteringWrapper--3NNta"
					}, I.createElement(be, null)))
				},
				qe = n("@ta/common.routing"),
				Ee = {
					ORIGINAL: "original",
					PRIMARY: "primary",
					SECONDARY: "secondary"
				},
				Ce = function e(t) {
					if (t.readonlyMode && (!t.rental || !t.rental.contactManagerUrl)) return null;
					var n = t.buttonText,
						r = t.modalId;
					return I.createElement(ie.Opener, {
						name: r
					}, function(e) {
						return I.createElement(qe.RouteConsumer, null, function(a) {
							var i = a.route,
								s = a.navigate;
							return t.type && I.createElement(E.a, {
								fullwidth: t.isFullwidth,
								type: t.type,
								onClick: function n(a) {
									return function e(t, n, r, a, i, o) {
										i && i(t), n && r && a && a.contactManagerUrl ? function e(t) {
											window.open(t, "_blank")
										}(a.contactManagerUrl) : n && o()
									}(a, !!t.shouldOpenForm, t.readonlyMode, t.rental, t.onClick, function() {
										e(), t.shouldNavigateOnOpen && s(o()({}, i, {
											modal: r
										}))
									})
								}
							}, n)
						})
					})
				};
			Ce.defaultProps = {
				type: Ee.ORIGINAL,
				shouldOpenForm: !0,
				shouldNavigateOnOpen: !0
			};
			var Se = Ce;
			n.d(t, "MODAL_ID", function() {
				return Ne
			}), n.d(t, "InquiryForm", function() {
				return Z
			}), n.d(t, "InquiryFormWithDeviceAwareness", function() {
				return J
			}), n.d(t, "ConnectedInquiryForm", function() {
				return be
			}), n.d(t, "ConnectedModalInquiryForm", function() {
				return ke
			}), n.d(t, "InquiryButton", function() {
				return Se
			}), n.d(t, "InquiryButtonStyles", function() {
				return Ee
			});
			var Ne = "detail-page-inquiry-modal"
		}
	}
});
//# sourceMappingURL=vr.inquiry.0d2ea88f90.js.map

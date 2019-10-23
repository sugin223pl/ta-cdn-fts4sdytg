($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.rap",
	d: ["vendor-react-libs", "ta-platform", "@ta/vr.common", "vendor-babel", "lithium-platform", "ta-common", "@ta/vr.inquiry", "@ta/vr.remarketing", "@ta/vr.legacy-rap-functions", "@ta/vr.affiliate-utils", "@ta/overlays.popover", "@ta/overlays.tooltip", "@ta/vr.traveler-input-picker"],
	e: ["./packages/vr/rap/rap.jsx"],
	x: {
		"./packages/vr/rap/rap.jsx": ["withRapData", "trackBasedOnResponse", "RapView", "RapFooter", "getBasePeriodDisplay", "getPeriodDisplay", "getPeriodDisplayForRapData", "shouldShowInquiryButton", "PriceHat", "CallRentalOwner", "MaybeCallRentalOwner"],
		"./packages/vr/rap/withRapData.jsx": ["b", "c", "a"]
	},
	m: {
		"./packages/vr/rap/rap.jsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./packages/vr/rap/withRapData.jsx"),
				n = r("@ta/common.tracking"),
				o = r.n(n),
				l = "VR_RAP_WEB_COMPONENT";

			function i(e) {
				var t = e.rental.propertyManager.isRbo;
				o()({
					module: l,
					action: "VR_Propertytype_".concat(t ? "RBO" : "PM", "_VRR")
				});
				var r = e.rapResponse.errors;
				if (r && r.length) o()({
					module: l,
					action: "VR_RAP_ERROR_VRR"
				});
				else if (e.rapResponse.rapData) {
					var a = e.rapResponse.rapData,
						n = a.isOffsiteBooking,
						i = a.rapIsSplitPayment;
					o()({
						module: l,
						action: "VR_Paymenttype_".concat(i ? "Split" : "Full", "Payment_VRR")
					}), n && o()({
						module: l,
						action: "VR_Propertytype_HA_VRR"
					})
				}
			}
			var s = r("@babel/runtime/helpers/esm/classCallCheck"),
				c = r.n(s),
				p = r("@babel/runtime/helpers/esm/createClass"),
				u = r.n(p),
				d = r("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				m = r.n(d),
				v = r("@babel/runtime/helpers/esm/getPrototypeOf"),
				_ = r.n(v),
				f = r("@babel/runtime/helpers/esm/inherits"),
				g = r.n(f),
				h = r("@babel/runtime/helpers/esm/assertThisInitialized"),
				y = r.n(h),
				b = r("@babel/runtime/helpers/esm/defineProperty"),
				E = r.n(b),
				R = r("@ta/common.i18n"),
				O = r("@ta/common.features"),
				C = r("@ta/styleguide.button"),
				k = r.n(C),
				w = r("@ta/common.decode"),
				I = r.n(w),
				P = r("@ta/styleguide.loading"),
				N = r("react"),
				D = r("@ta/vr.common"),
				T = r("@ta/vr.inquiry"),
				j = r("@ta/vr.remarketing"),
				z = r("@ta/vr.legacy-rap-functions"),
				M = r("@ta/vr.affiliate-utils"),
				S = r("@babel/runtime/helpers/esm/objectSpread"),
				B = r.n(S),
				V = r("@ta/common.api"),
				F = r("@ta/overlays.popover"),
				A = r.n(F),
				q = {
					container: "vr-rap-PriceHat__container--3rDlQ",
					icon: "vr-rap-PriceHat__icon--iIzTH",
					popOver: "vr-rap-PriceHat__popOver--1a9I2"
				},
				L = function(e) {
					function t() {
						var e, r;
						c()(this, t);
						for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
						return r = m()(this, (e = _()(t)).call.apply(e, [this].concat(n))), E()(y()(y()(r)), "popoverContent", function() {
							var e = r.getSavingsPercent();
							return e ? N.createElement("div", {
								className: q.popOver,
								dangerouslySetInnerHTML: {
									__html: Object(R.localize)("vr_price_found_is_cheaper_than_others", {
										0: e,
										1: r.props.rental.roomCount
									})
								}
							}) : null
						}), E()(y()(y()(r)), "popoverTrigger", function(e, t) {
							var a = r.getSavingsPercent();
							return a ? N.createElement("div", {
								ref: e,
								onClick: t,
								className: q.container
							}, N.createElement("span", {
								className: "".concat(q.icon, " ui_icon question-circle-fill")
							}), N.createElement("span", null, Object(R.localize)("vr_savings_alert_n_percent_cheaper", {
								0: a
							}))) : null
						}), r
					}
					return g()(t, e), u()(t, [{
						key: "getSavingsPercent",
						value: function e() {
							return this.props.response && this.props.response.savingsPercent
						}
					}, {
						key: "render",
						value: function e() {
							return this.props.response && this.props.response.isApplicable ? N.createElement(D.Fade, {
								in: !0,
								key: "savings"
							}, N.createElement(A.a, {
								above: !0,
								contents: this.popoverContent,
								closeButton: !1
							}, this.popoverTrigger)) : null
						}
					}]), t
				}(N.Component);
			E()(L, "defaultProps", {
				response: null
			});
			var x = Object(V.bind)(function(e, t, r) {
					var a = e.travelerInfo.vr;
					if (!a || !r) return function() {
						return {}
					};
					var n = r.rapRate,
						o = r.rapData,
						l = r.stayLength,
						i = e.page,
						s = t(function c(e) {
							var t = e.travelerInfo,
								r = t.start,
								a = t.end,
								n = e.detailId,
								o = e.geoId,
								l = e.dailyPrice,
								i = e.currency,
								s = new URLSearchParams({
									start: r || "",
									end: a || "",
									geoId: o.toString(),
									dailyPrice: parseInt(l, 10).toString(),
									currency: i
								});
							return "".concat(asset_path + "/data/1.0/vr/priceHat/").concat(n.toString(), "?").concat(s.toString())
						}({
							travelerInfo: a,
							detailId: i.detailId,
							geoId: i.geoId,
							dailyPrice: o.subtotalNumericInSessionCurrency / l,
							currency: n.currency
						}));
					return function(e, t) {
						return B()({
							response: s.get().data,
							loading: s.get().loading
						}, t)
					}
				})(L),
				U = function(e) {
					function t() {
						return c()(this, t), m()(this, _()(t).apply(this, arguments))
					}
					return g()(t, e), u()(t, [{
						key: "componentDidMount",
						value: function e() {
							var t = this.props.rapResponse;
							if (t) {
								var r = t.rapData,
									a = t.rapRate,
									n = t.view.stayLength;
								a && x.load({
									rapData: r,
									rapRate: a,
									stayLength: n
								})
							}
						}
					}, {
						key: "render",
						value: function e() {
							return this.props.rapResponse ? N.createElement(x, {
								rental: this.props.rental
							}) : null
						}
					}]), t
				}(N.Component),
				H = Object(V.bind)(function(e, t) {
					return x.stage(e, t),
						function(e, t) {
							return t
						}
				})(U);

			function W(e) {
				return e.baseDailyRate ? {
					periodCost: R.globalize.formatCurrencyInteger(e.baseDailyRate),
					periodCopy: Object(R.localize)("vr_responsive_card_per_night")
				} : null
			}

			function Q(e, t, r) {
				if (!t || !r) return W(e);
				var a = t.rapConsolidatedRateInSessionCurrency;
				if (!a) return W(e);
				var n = r >= 7;
				return {
					periodCost: R.globalize.formatCurrencyInteger(Math.floor(a / r * (n ? 7 : 1))),
					periodCopy: n ? Object(R.localize)("vr_responsive_card_per_week") : Object(R.localize)("vr_responsive_card_per_night")
				}
			}

			function Y(e, t) {
				return t ? Q(e, t.rapData, t.view.stayLength) : W(e)
			}

			function G(e, t) {
				if (!t || !t.rapData) return e.canReceiveInquiries;
				var r = t.rapData;
				return !!r.isInquiryAllowed && !r.isOffsiteBooking
			}
			var Z = r("@ta/overlays.tooltip"),
				K = r.n(Z),
				X = function e() {
					return N.createElement(K.a, {
						below: !0,
						message: Object(R.localize)("vr_wire_transfer_warning_icon_info")
					}, function(e) {
						return N.createElement("div", {
							ref: e,
							className: "vr-rap-pieces-PaySafelyTip__tip--eCtq3"
						}, Object(R.localize)("vr_wire_transfer_info"))
					})
				},
				J = r("@ta/common.routing"),
				$ = r("@ta/common.cdn"),
				ee = function e(t) {
					var r = t.businessInfo,
						a = r.isFTL,
						n = r.isSTL,
						o = r.tipType;
					return "HA" !== t.vrSource && (a || n || !!o && ("TIP" === o || "TIP_INSTANT_BOOK" === o))
				},
				te = function e() {
					return N.createElement("div", {
						className: "vr-rap-PaymentProtectionBadge__tipContent--hzhN7"
					}, N.createElement($.CdnImage, {
						src: ppbr,
						alt: Object(R.localize)("vr_payment_protection"),
						className: "vr-rap-PaymentProtectionBadge__tipContentBadgeImage--1UnfS"
					}), N.createElement("div", {
						className: "vr-rap-PaymentProtectionBadge__tipContentInfo--1bHwl"
					}, N.createElement("div", {
						className: "vr-rap-PaymentProtectionBadge__tipContentTitle--TPINP"
					}, Object(R.localize)("vr_payment_protection")), N.createElement("div", {
						className: "vr-rap-PaymentProtectionBadge__tipContentCopy--24ZY5"
					}, Object(R.localize)("ftl_peace_of_mind_book_hl_171f"), " ", N.createElement(J.Link, {
						href: "/pages/payment_protection_general.html"
					}, Object(R.localize)("airm_learnMore"))), N.createElement("div", {
						className: "vr-sprite-credit-cards2"
					})))
				},
				re = function e(t, r) {
					return N.createElement("div", {
						ref: t,
						onClick: r,
						className: "vr-rap-PaymentProtectionBadge__tipTrigger--1k0Oz"
					}, N.createElement($.CdnImage, {
						src: ppbr,
						alt: Object(R.localize)("vr_payment_protection"),
						className: "vr-rap-PaymentProtectionBadge__tipTriggerBadgeImage--nTq9S"
					}), N.createElement("div", {
						className: "vr-rap-PaymentProtectionBadge__tipTriggerMessage--hy223"
					}, Object(R.localize)("vr_property_has_payment_protection")))
				},
				ae = function e() {
					return N.createElement(A.a, {
						below: !0,
						contents: te
					}, re)
				},
				ne = function e(t) {
					var r = t.rental,
						a = t.locale;
					if (!r.isAffiliate || !r.affiliateLogoUrl || !Object(O.featureIsEnabled)("vr_show_home_away_branding")) return null;
					var n = D.codeLocaleToAffiliateTextLogoMap.get(a),
						o = n ? Object(R.localize)("vr_affiliate_logo", {
							sAffiliateName: n
						}) : "";
					return N.createElement("div", {
						className: "vr-rap-pieces-AffiliateLogoSection__affiliateLogoContainer--Ja41Q"
					}, N.createElement("img", {
						className: "vr-rap-pieces-AffiliateLogoSection__affiliateLogoImage--yPovc",
						src: r.affiliateLogoUrl,
						alt: o
					}))
				},
				oe = function e(t) {
					return N.createElement("div", {
						className: "vr-rap-pieces-ErrorVariant__container--1U5_r"
					}, t.instantBookNode, N.createElement("div", {
						className: "vr-rap-pieces-ErrorVariant__errorVariant--3QPv1"
					}, t.rental ? N.createElement(ne, {
						rental: t.rental,
						locale: t.locale
					}) : null, t.showBadge ? N.createElement(ae, null) : null, N.createElement("div", {
						className: "vr-rap-pieces-ErrorVariant__warningCopy--2Zoxj"
					}, Object(R.localize)("vr_wire_transfer_warning")), N.createElement(X, null)))
				};
			oe.defaultProps = {
				phoneNumber: null,
				instantBookNode: null
			};
			var le = oe,
				ie = function e(t) {
					return N.createElement("div", {
						className: "vr-rap-pieces-UrgencyMessaging__urgencyMessaging--JAZzw"
					}, N.createElement("span", {
						className: "vr-rap-pieces-UrgencyMessaging__urgencyMessagingCount--26Bgp"
					}, Object(R.localize)("vr_x_travelers", {
						nNumTravelers: 2 * t.recentViewCount
					}), " "), N.createElement("span", null, Object(R.localize)("vr_viewed_property_last_week")))
				},
				se = r("@ta/styleguide.icon"),
				ce = function e(t) {
					return function(e) {
						return N.createElement("div", {
							className: "vr-rap-pieces-AdditionalFees__container--1XFA_"
						}, N.createElement("div", null, t.fees.map(function(e) {
							var t = e.name,
								r = e.costPerUnit;
							return N.createElement("div", {
								key: t
							}, N.createElement("div", {
								className: "vr-rap-pieces-AdditionalFees__name--26a8Z"
							}, t), N.createElement("div", null, r))
						})), N.createElement("div", {
							className: "vr-rap-pieces-AdditionalFees__additionalInfo--5kYb4",
							onClick: function r() {
								! function e(t, r) {
									r(), t.onGoToFees ? t.onGoToFees() : ta.vr.detail.goToRates()
								}(t, e)
							}
						}, Object(R.localize)("vr_view_rate_info_c35")))
					}
				},
				pe = function e(t) {
					return N.createElement(A.a, {
						leftOf: !0,
						contents: ce(t)
					}, function e(t) {
						return function(e, r) {
							return N.createElement("div", {
								ref: e,
								onClick: r
							}, N.createElement("div", {
								className: "vr-rap-pieces-AdditionalFees__link--2NWhE"
							}, Object(R.localize)("vr_fees_applied_ffffdcba", {
								0: t.isRbo ? 1 : 2
							})))
						}
					}(t))
				};
			pe.defaultProps = {
				onGoToFees: null
			};
			var ue = pe,
				de = function e() {
					return N.createElement("div", {
						className: "vr-rap-pieces-InquiryExtraInfo__inquiryExtraInfo--28OdB"
					}, N.createElement(se.Icon, {
						name: "lightbulb-on",
						className: "vr-rap-pieces-InquiryExtraInfo__inquiryBulb--38cln"
					}), N.createElement("div", {
						className: "vr-rap-pieces-InquiryExtraInfo__inquiryWarningCopy--Zz5wv"
					}, Object(R.localize)("vr_wire_transfer_warning")), N.createElement(X, null))
				},
				me = function e(t) {
					return N.createElement("div", null, N.createElement("div", {
						className: "vr-rap-pieces-NoRatesVariant__message--2dvd0"
					}, Object(R.localize)("ftl_inquire_for_rates")), N.createElement(T.InquiryButton, {
						buttonText: Object(R.localize)("ftl_make_inquiry"),
						shouldOpenForm: t.buttonShouldOpenForm,
						modalId: T.MODAL_ID,
						readonlyMode: t.readonlyMode,
						rental: t.rental,
						onClick: t.onSendMessage,
						isFullwidth: !0
					}), N.createElement(ne, {
						rental: t.rental,
						locale: t.locale
					}), N.createElement(de, null))
				};
			me.defaultProps = {
				copy: null
			};
			var ve = me,
				_e = function e(t) {
					return N.createElement("div", {
						className: "vr-rap-pieces-InstantBookSection__container--1hDNk"
					}, N.createElement("span", {
						className: "ui_icon instant ".concat("vr-rap-pieces-InstantBookSection__icon--3lJ-v")
					}), t.isRbo ? Object(R.localize)("vr_instant_book_owner_message") : Object(R.localize)("vr_instant_book_manager_message"))
				},
				fe = function(e) {
					function t() {
						var e, r;
						c()(this, t);
						for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
						return r = m()(this, (e = _()(t)).call.apply(e, [this].concat(n))), E()(y()(y()(r)), "dispatchEnterDatePrompt", function(e) {
							e.preventDefault(), r.props.showEnterDate()
						}), r
					}
					return g()(t, e), u()(t, [{
						key: "renderUrgencyMessaging",
						value: function e() {
							var t = this.props.rental.recentViewCount;
							return t ? N.createElement(ie, {
								recentViewCount: t
							}) : null
						}
					}, {
						key: "render",
						value: function e() {
							var t = this.props.rental.baseDailyRate,
								r = ee(this.props.rental),
								a = this.props.rental.fees;
							return t ? N.createElement("div", null, N.createElement("div", {
								className: "vr-rap-pieces-NoDatesVariant__basePriceContainer--15xNC"
							}, N.createElement("div", null, Object(R.localize)("vr_price_from_283")), N.createElement("div", null, N.createElement("span", {
								className: "vr-rap-pieces-NoDatesVariant__basePrice--_yZ3B"
							}, R.globalize.formatCurrencyInteger(t)), N.createElement("span", null, " /", Object(R.localize)("vr_rate_periods_c35", {
								0: 1
							}), " "), N.createElement(K.a, {
								above: !0,
								message: Object(R.localize)("vr_rate_info_msg_undated_default_ffffeea6")
							}, function(e) {
								return N.createElement("span", {
									ref: e
								}, N.createElement(se.Icon, {
									name: "question-circle"
								}))
							}))), a && a.length ? N.createElement(ue, {
								isRbo: this.props.rental.propertyManager.isRbo,
								fees: a,
								onGoToFees: this.props.onGoToFees
							}) : null, "TIP_INSTANT_BOOK" === this.props.rental.businessInfo.tipType && Object(O.featureIsEnabled)("vr_instant_book_badging") ? N.createElement(_e, {
								isRbo: this.props.rental.propertyManager.isRbo
							}) : null, this.props.rental.isOnlineBookable ? N.createElement(k.a, {
								onClick: this.dispatchEnterDatePrompt,
								size: "fullwidth"
							}, Object(R.localize)("vr_book_now")) : null, this.renderUrgencyMessaging(), N.createElement("div", {
								className: "vr-rap-pieces-NoDatesVariant__inquiryWrapper--187FY"
							}, N.createElement(T.InquiryButton, {
								buttonText: Object(R.localize)("vr_tip_send_message_14cd"),
								shouldOpenForm: !1,
								modalId: T.MODAL_ID,
								readonlyMode: this.props.readonlyMode,
								rental: this.props.rental,
								onClick: this.dispatchEnterDatePrompt,
								type: T.InquiryButtonStyles.SECONDARY,
								isFullwidth: !0
							})), r ? N.createElement(ae, null) : null, N.createElement("div", {
								className: "vr-rap-pieces-NoDatesVariant__warningCopy--15FuJ"
							}, Object(R.localize)("vr_wire_transfer_warning")), N.createElement(X, null)) : this.props.rental.isAffiliate ? N.createElement("div", null, N.createElement(k.a, {
								onClick: this.dispatchEnterDatePrompt,
								size: "fullwidth"
							}, Object(R.localize)("vr_book_now")), N.createElement(ne, {
								rental: this.props.rental,
								locale: this.props.locale
							}), this.renderUrgencyMessaging(), r ? N.createElement(ae, null) : null, N.createElement("div", {
								className: "vr-rap-pieces-NoDatesVariant__warningCopy--15FuJ"
							}, Object(R.localize)("vr_wire_transfer_warning")), N.createElement(X, null)) : N.createElement(ve, {
								onSendMessage: this.dispatchEnterDatePrompt,
								copy: Object(R.localize)("vr_pdp_show_price_vrc6880"),
								rental: this.props.rental,
								buttonShouldOpenForm: !1,
								readonlyMode: this.props.readonlyMode,
								locale: this.props.locale
							})
						}
					}]), t
				}(N.Component),
				ge = function e() {
					return N.createElement("div", {
						className: "vr-rap-pieces-AvailableMessage__availableMessage--3pZij",
						dangerouslySetInnerHTML: {
							__html: Object(R.localize)("ftl_split_pay_available", {
								cssClasses: "vr-rap-pieces-AvailableMessage__availableMessageImportant--wMYLY"
							})
						}
					})
				},
				he = function e(t) {
					var r = t.label,
						a = t.price,
						n = t.bold;
					return N.createElement("div", {
						className: n ? "vr-rap-pieces-PriceRow__boldPriceRow--1bgAQ" : "vr-rap-pieces-PriceRow__priceRow--3oeYe"
					}, N.createElement("div", null, r), N.createElement("div", null, a))
				};
			he.defaultProps = {
				bold: !1
			};
			var ye = he,
				be = function e(t) {
					var r = t.rateComment ? Object(R.localize)("vr_owner_terms_apply") : Object(R.localize)("vr_why_total_estimate"),
						a = t.rateComment ? t.rateComment : Object(R.localize)("vr_rate_info_msg_dated_detail_ffffeea6");
					return N.createElement("div", {
						className: "vr-rap-pieces-InquiryVariant__totalEstimateLine--1UGsf"
					}, "*", r, " ", N.createElement(K.a, {
						below: !0,
						message: a
					}, function(e) {
						return N.createElement("span", {
							ref: e
						}, N.createElement(se.Icon, {
							name: "question-circle"
						}))
					}))
				};
			be.defaultProps = {
				rateComment: null
			};
			var Ee = function e(t) {
					return N.createElement("div", null, N.createElement(ge, null), N.createElement(ye, {
						label: Object(R.localize)("vr_rap_subtotal_27a", {
							0: t.stayLength
						}),
						price: t.rapResponse.rapData.rapConsolidatedRate
					}), t.rapResponse.rapData.rapTax ? N.createElement(ye, {
						label: Object(R.localize)("vr_fees_tax_81f"),
						price: t.rapResponse.rapData.rapTax
					}) : null, t.rapResponse.rapData.rapDeposit ? N.createElement(ye, {
						label: Object(R.localize)("ftl_deposit"),
						price: t.rapResponse.rapData.rapDeposit
					}) : null, t.rapResponse.rapData.rapOwnerFees ? N.createElement(ye, {
						label: Object(R.localize)("vr_owner_fees_ffffdcba"),
						price: t.rapResponse.rapData.rapOwnerFees
					}) : null, N.createElement(ye, {
						bold: !0,
						label: Object(R.localize)("vr_estimated_total"),
						price: t.rapResponse.rapData.rapSubtotal
					}), N.createElement(be, {
						rateComment: t.rateComment
					}), Object(O.featureIsEnabled)("vr_responsive_detail_page") ? N.createElement("div", {
						className: "vr-rap-pieces-InquiryVariant__priceHatContainer--3xwBU"
					}, N.createElement(H, {
						rapResponse: t.rapResponse,
						rental: t.rental
					})) : null, N.createElement(T.InquiryButton, {
						buttonText: Object(R.localize)("ftl_make_inquiry"),
						modalId: T.MODAL_ID,
						readonlyMode: t.readonlyMode,
						rental: t.rental,
						onClick: t.makeInquiry,
						isFullwidth: !0
					}), t.recentViewCount ? N.createElement(ie, {
						recentViewCount: t.recentViewCount
					}) : null, N.createElement(de, null))
				},
				Re = function e(t) {
					return N.createElement("div", null, N.createElement(ge, null), N.createElement(ye, {
						label: Object(R.localize)("vr_rap_subtotal_27a", {
							0: t.stayLength
						}),
						price: t.rateInfo.localizedSubtotal
					}), N.createElement(ye, {
						bold: !0,
						label: Object(R.localize)("vr_estimated_total"),
						price: t.rateInfo.localizedSubtotal
					}), N.createElement(be, {
						rateComment: t.rateComment
					}), N.createElement("div", {
						className: "vr-rap-pieces-InquiryVariant__priceHatContainer--3xwBU"
					}, N.createElement(H, {
						rapResponse: t.rapResponse,
						rental: t.rental
					})), N.createElement(T.InquiryButton, {
						buttonText: Object(R.localize)("ftl_make_inquiry"),
						modalId: T.MODAL_ID,
						readonlyMode: t.readonlyMode,
						rental: t.rental,
						onClick: t.makeInquiry,
						isFullwidth: !0
					}), t.recentViewCount ? N.createElement(ie, {
						recentViewCount: t.recentViewCount
					}) : null, N.createElement(de, null))
				};
			Re.defaultProps = Ee.defaultProps = {
				phoneNumber: null,
				recentViewCount: null
			};
			var Oe = function e(t) {
				return t.rapResponse && t.rapResponse.rapData ? N.createElement(Ee, t) : N.createElement(Re, t)
			};
			Oe.defaultProps = Ee.defaultProps;
			var Ce = Oe,
				ke = r("react-dom"),
				we = r.n(ke),
				Ie = function e(t) {
					return N.createElement("div", {
						className: "vr-rap-pieces-RapError__error--38X_U"
					}, t.message)
				},
				Pe = function(e) {
					function t() {
						var e, r;
						c()(this, t);
						for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
						return r = m()(this, (e = _()(t)).call.apply(e, [this].concat(n))), E()(y()(y()(r)), "state", {}), r
					}
					return g()(t, e), u()(t, [{
						key: "componentDidMount",
						value: function e() {
							this.setState({
								rapErrorEl: document.getElementById("vr-react-rap-error-root")
							})
						}
					}, {
						key: "render",
						value: function e() {
							return this.state.rapErrorEl ? we.a.createPortal(N.createElement(D.Fade, {
								in: !0,
								key: "error"
							}, N.createElement(Ie, {
								message: this.props.message
							})), this.state.rapErrorEl) : null
						}
					}]), t
				}(N.Component),
				Ne = function e(t) {
					var r = t.firstPayment;
					return N.createElement("div", {
						className: "vr-rap-RapView__firstPaymentSection--2AHA_"
					}, N.createElement("div", null, Object(R.localize)("ftl_split_pay_reserve")), N.createElement("div", {
						className: "vr-rap-RapView__bookingPrice--25WsQ"
					}, r))
				},
				De = function e(t) {
					var r = t.subTotal;
					return N.createElement("div", {
						className: "vr-rap-RapView__fullPaymentSubTotalRow--ANu9Q"
					}, N.createElement("div", {
						className: "vr-rap-RapView__fullPaymentSubTotalLabel--2IuKh"
					}, Object(R.localize)("ftl_subtotal")), N.createElement("div", {
						className: "vr-rap-RapView__bookingPrice--25WsQ"
					}, r))
				},
				Te = function(e) {
					function t() {
						var e, r;
						c()(this, t);
						for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
						return r = m()(this, (e = _()(t)).call.apply(e, [this].concat(n))), E()(y()(y()(r)), "state", {
							loadingBooking: !1
						}), E()(y()(y()(r)), "goToCheckOut", function(e) {
							if (r.props.withLoadingSpinner) try {
								r.setState({
									loadingBooking: !0
								}), r.props.goToCheckOut(e)
							} catch (e) {
								r.setState({
									loadingBooking: !1
								})
							} else r.props.goToCheckOut(e)
						}), r
					}
					return g()(t, e), u()(t, [{
						key: "render",
						value: function e() {
							var t = this.props,
								r = t.rapResponse.rapData;
							if (!r) return null;
							var a = r.rapIsSplitPayment,
								n = r.rapTax,
								o = r.rapConsolidatedRate,
								l = r.rapDeposit,
								i = r.rapOwnerFees,
								s = r.rapSubtotal,
								c = r.rapFirstPayment,
								p = ee(t.rental),
								u = function d(e) {
									return !e.rapBaseRateInSessionCurrency || !e.subtotalNumericInSessionCurrency || e.rapBaseRateInSessionCurrency <= e.subtotalNumericInSessionCurrency
								}(r),
								m = t.sendMessage;
							return N.createElement("div", null, N.createElement(ge, null), u ? N.createElement(N.Fragment, null, N.createElement(ye, {
								label: Object(R.localize)("vr_rap_subtotal_27a", {
									0: t.oldView.stayLength
								}),
								price: o
							}), n ? N.createElement(ye, {
								label: Object(R.localize)("vr_fees_tax_81f"),
								price: n
							}) : null, l ? N.createElement(ye, {
								label: Object(R.localize)("ftl_deposit"),
								price: l
							}) : null, i ? N.createElement(ye, {
								label: Object(R.localize)("vr_owner_fees_ffffdcba"),
								price: i
							}) : null, a ? N.createElement(ye, {
								bold: !0,
								label: Object(R.localize)("ftl_subtotal"),
								price: s
							}) : null) : null, a ? N.createElement(Ne, {
								firstPayment: c
							}) : N.createElement(De, {
								subTotal: s
							}), "TIP_INSTANT_BOOK" === this.props.rental.businessInfo.tipType && Object(O.featureIsEnabled)("vr_instant_book_badging") ? N.createElement(_e, {
								isRbo: this.props.rental.propertyManager.isRbo
							}) : null, Object(O.featureIsEnabled)("vr_responsive_detail_page") ? N.createElement("div", {
								className: "vr-rap-RapView__priceHatContainer--2yFIX"
							}, N.createElement(H, {
								rapResponse: this.props.rapResponse,
								rental: this.props.rental
							})) : null, this.state.loadingBooking ? N.createElement(P.LoadingSpinner, {
								size: "small"
							}) : N.createElement(k.a, {
								onClick: this.goToCheckOut,
								size: "fullwidth"
							}, Object(R.localize)("vr_book_now")), N.createElement(ne, {
								rental: t.rental,
								locale: t.locale
							}), t.rental.recentViewCount ? N.createElement(ie, {
								recentViewCount: t.rental.recentViewCount
							}) : null, m ? N.createElement("div", {
								className: "vr-rap-RapView__sendInquiryWrapper--2XJqa"
							}, N.createElement(T.InquiryButton, {
								buttonText: Object(R.localize)("vr_tip_send_message_14cd"),
								rental: this.props.rental,
								modalId: T.MODAL_ID,
								onClick: m,
								readonlyMode: this.props.readonlyMode,
								type: T.InquiryButtonStyles.SECONDARY,
								isFullwidth: !0
							})) : null, p ? N.createElement(ae, null) : null, N.createElement("div", {
								className: "vr-rap-RapView__rapWarningCopy--1tkCB"
							}, Object(R.localize)("vr_wire_transfer_warning")), N.createElement(X, null))
						}
					}]), t
				}(N.Component);
			E()(Te, "defaultProps", {
				sendMessage: null
			}), Te.defaultProps = {
				sendMessage: null
			};
			var je = function e(t) {
					t.preventDefault(), o()({
						module: "VR_RAP_WEB_COMPONENT",
						action: "VR_Make_Inquiry_VRR"
					})
				},
				ze = function e(t) {
					t.preventDefault(), o()({
						module: "VR_RAP_WEB_COMPONENT",
						action: "VR_Send_Message_VRR"
					})
				},
				Me = function(e) {
					function t() {
						var e, r;
						c()(this, t);
						for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
						return r = m()(this, (e = _()(t)).call.apply(e, [this].concat(n))), E()(y()(y()(r)), "state", {
							showLegacyEnterDate: !1
						}), E()(y()(y()(r)), "goToReadonlyUrl", function() {
							r.props.rental && window.open(r.props.rental.contactManagerUrl ? I()(r.props.rental.contactManagerUrl) : "", "_blank")
						}), E()(y()(y()(r)), "goToAffiliateCheckOut", function() {
							if (r.props.rental) {
								var e = r.props.rental.providerOrdinal,
									t = r.props,
									a = t.detailId,
									n = t.geoId;
								if (e) {
									var o = Object(M.createPDPAffiliateTrackingAction)(e),
										l = Object(M.createAffiliateTracking)(o, a, n, r.props.trackingUid);
									Object(M.affiliateCheckOut)(a, l, r.props.locale, "property")
								}
							}
						}), E()(y()(y()(r)), "goToCheckOut", function(e) {
							if (e.preventDefault(), r.isReadOnly()) r.goToReadonlyUrl();
							else if (r.props.rapResponse && r.props.rapResponse.data && r.props.rapResponse.data.rapData) {
								var t = r.props.rapResponse.data.rapData.isOffsiteBooking,
									a = r.props.rapResponse.data.tipQuoteToken;
								if (t) r.goToAffiliateCheckOut();
								else if (r.props.rapResponse) {
									var n = r.props.detailId,
										o = r.props.travelerInfo,
										l = o.start,
										i = o.end,
										s = o.adults,
										c = o.children,
										p = Object(D.tryGettingPartnerReference)();
									Object(z.runLegacyBookingRequestFlow)({
										detailId: n,
										start: l,
										end: i,
										adults: s,
										tipQuoteToken: a,
										kids: c,
										partnerParams: p
									})
								}
							}
						}), E()(y()(y()(r)), "showEnterDate", function() {
							r.props.legacy && r.setState({
								showLegacyEnterDate: !0
							}), r.props.showMissingRequireFields && r.props.showMissingRequireFields()
						}), E()(y()(y()(r)), "generateMarketingOptions", function(e) {
							return {
								vrCurrency: null == e ? void 0 : e.rapSubtotalCurrency,
								vrBaseValue: e && e.rapConsolidatedRateInSessionCurrency ? e.rapConsolidatedRateInSessionCurrency.toString() : void 0,
								vrTaxPrice: e && e.taxNumericInSessionCurrency ? e.taxNumericInSessionCurrency.toString() : void 0,
								vrValue: e && e.subtotalNumericInSessionCurrency ? e.subtotalNumericInSessionCurrency.toString() : void 0,
								pixelType: "ENTER_DATES"
							}
						}), r
					}
					return g()(t, e), u()(t, [{
						key: "getErrorMessage",
						value: function e() {
							if (this.state.showLegacyEnterDate) return Object(R.localize)("vr_inquiry_missing_required_error_ffffdcba");
							var t = this.getErrors();
							return t && t.length && t[0].message
						}
					}, {
						key: "getErrors",
						value: function e() {
							if (!this.props.rapResponse || !this.props.rapResponse.data) return null;
							var t = this.props.rapResponse.data.errors;
							return t && t.length ? t : null
						}
					}, {
						key: "hasErrors",
						value: function e() {
							var t = this.getErrors();
							return t && t.length
						}
					}, {
						key: "isReadOnly",
						value: function e() {
							return this.props.readonlyMode
						}
					}, {
						key: "conditionalRender",
						value: function e() {
							if (this.props.loading) return N.createElement(D.Fade, {
								in: !0,
								key: "loading"
							}, N.createElement(P.LoadingSpinner, {
								size: "small"
							}));
							if (this.props.rapResponse && this.props.rapResponse.data && this.props.rental) {
								var t = this.props.rapResponse.data,
									r = t.rapData,
									a = this.generateMarketingOptions(r);
								return this.renderTreatment(t, a)
							}
							return this.props.rental ? N.createElement(D.Fade, {
								in: !0,
								key: "no-dates"
							}, N.createElement(fe, {
								onGoToFees: this.props.onGoToFees,
								rental: this.props.rental,
								showEnterDate: this.showEnterDate,
								readonlyMode: this.props.readonlyMode,
								locale: this.props.locale
							})) : null
						}
					}, {
						key: "renderErrorVariant",
						value: function e() {
							if (!this.props.rental) return null;
							var t = this.props.rental,
								r = ee(t),
								a = t.showPhoneNumber,
								n = t.businessInfo,
								o = t.propertyManager,
								l = o.typeValue,
								i = null;
							return n && "TIP_INSTANT_BOOK" === n.tipType && Object(O.featureIsEnabled)("vr_instant_book_badging") && (i = N.createElement(_e, {
								isRbo: o.isRbo
							})), N.createElement(D.Fade, {
								in: !0,
								key: "error"
							}, N.createElement(le, {
								showPhoneNumber: a,
								typeValue: l,
								instantBookNode: i,
								showBadge: r,
								rental: this.props.rental,
								locale: this.props.locale
							}))
						}
					}, {
						key: "renderTreatment",
						value: function e(t, r) {
							if (!this.props.rental) return null;
							var a = this.props,
								n = a.rental,
								o = a.locale,
								l = a.readonlyMode;
							i({
								rapResponse: t,
								rental: n
							});
							var s = t.rapData;
							if (this.getErrorMessage()) return this.renderErrorVariant();
							if (s && ("NONE" !== s.rapBookable || s.isOffsiteBooking)) {
								var c = t.view;
								return N.createElement(D.Fade, {
									in: !0,
									key: "rap"
								}, N.createElement(Te, {
									rapResponse: t,
									oldView: c,
									rental: n,
									goToCheckOut: this.goToCheckOut,
									withLoadingSpinner: !s.isOffsiteBooking && !this.isReadOnly(),
									sendMessage: G(n, t) ? ze : null,
									readonlyMode: l,
									locale: o
								}), N.createElement(j.PageMonikerIframe, {
									title: "vr-detail-page-remarketing-lightbox-clickout",
									marketingOptions: r
								}))
							}
							return this.renderInquiryTreatment()
						}
					}, {
						key: "renderInquiryTreatment",
						value: function e() {
							if (!this.props.rapResponse || !this.props.rapResponse.data || !this.props.rental) return null;
							var t = this.props.rapResponse.data,
								r = t.rapData,
								a = t.view,
								n = r ? r.rapSubtotal : a.rateInfo.localizedSubTotal;
							if (!n) return N.createElement(D.Fade, {
								in: !0,
								key: "no-rates"
							}, N.createElement(ve, {
								onSendMessage: je,
								rental: this.props.rental,
								buttonShouldOpenForm: !0,
								readonlyMode: this.props.readonlyMode,
								locale: this.props.locale
							}));
							var o = this.props.rental,
								l = o.recentViewCount,
								i = o.rateComment,
								s = this.props.rental.propertyManager.typeValue;
							return N.createElement(D.Fade, {
								in: !0,
								key: "inquiry"
							}, N.createElement(Ce, {
								makeInquiry: je,
								rapResponse: this.props.rapResponse.data,
								rateInfo: a.rateInfo,
								stayLength: a.stayLength,
								subtotal: n,
								typeValue: s,
								recentViewCount: l,
								rateComment: i,
								rental: this.props.rental,
								readonlyMode: this.props.readonlyMode
							}))
						}
					}, {
						key: "renderPossibleErrorPortal",
						value: function e() {
							if (this.props.loading) return null;
							var t = this.getErrorMessage();
							return t ? N.createElement(Pe, {
								message: t
							}) : null
						}
					}, {
						key: "render",
						value: function e() {
							return N.createElement("div", null, this.conditionalRender(), this.props.legacy ? this.renderPossibleErrorPortal() : null)
						}
					}]), t
				}(N.Component);
			E()(Me, "getDerivedStateFromProps", void 0), E()(Me, "defaultProps", {
				legacy: !1
			}), Me.getDerivedStateFromProps = function() {
				return {
					showEnterDate: !1
				}
			};
			var Se = r("@ta/vr.traveler-input-picker"),
				Be = "vr-rap-RapFooter__container--3ssup",
				Ve = function e(t) {
					return Object(O.featureIsEnabled)("vr_home_away_phase_1") && !!t && t.isAffiliate
				},
				Fe = function e(t) {
					var r = t.inquiryButtonProps,
						a = t.loadingConversion,
						n = t.rental,
						o = t.locale;
					return N.createElement("div", {
						className: Be
					}, N.createElement("div", {
						className: "vr-rap-RapFooter__noRatesCopyContainer--270OC"
					}, N.createElement("div", {
						className: "vr-rap-RapFooter__noRatesCopy--361ZP"
					}, Object(R.localize)("ftl_inquire_for_rates")), Ve(n) && N.createElement(Ue, {
						locale: o,
						hasRates: !1
					})), a ? N.createElement(P.LoadingSpinner, {
						size: "small"
					}) : N.createElement(T.InquiryButton, r))
				},
				Ae = function e(t) {
					var r = t.dispatchEnterDatePrompt,
						a = t.loadingConversion,
						n = t.rental,
						o = t.locale;
					return N.createElement("div", {
						className: Be
					}, Ve(n) && N.createElement(Ue, {
						locale: o,
						hasRates: !1
					}), a ? N.createElement(P.LoadingSpinner, {
						size: "small"
					}) : N.createElement(k.a, {
						size: Ve(n) ? "default" : "fullwidth",
						onClick: r
					}, Object(R.localize)("vr_book_now")))
				},
				qe = function e() {
					return N.createElement("div", {
						className: "vr-rap-RapFooter__paymentMessageContainer--1qynm"
					}, N.createElement($.CdnImage, {
						src: ppbr,
						alt: Object(R.localize)("vr_payment_protection"),
						className: "vr-rap-RapFooter__paymentBadge--_XV5I"
					}), N.createElement("span", {
						className: "vr-rap-RapFooter__paymentMessage--4pz7v"
					}, " ", Object(R.localize)("vr_payment_protection")))
				},
				Le = function e() {
					return N.createElement("div", {
						className: "vr-rap-RapFooter__paymentMessageContainer--1qynm"
					}, N.createElement("span", {
						className: "ui_icon instant ".concat("vr-rap-RapFooter__instantBookIcon--3khPv")
					}), N.createElement("span", {
						className: "vr-rap-RapFooter__paymentMessage--4pz7v"
					}, " ", Object(R.localize)("vr_instant_book_button_fffff29c")))
				},
				xe = function e(t) {
					var r = t.priceDisplay;
					return N.createElement("div", null, r.headerText ? N.createElement("div", null, r.headerText) : null, N.createElement("div", null, N.createElement("span", {
						className: "vr-rap-RapFooter__periodCost--aYLF1"
					}, r.periodCost), N.createElement("span", {
						className: "vr-rap-RapFooter__periodCopy--rcHLW"
					}, " ", r.periodCopy)))
				},
				Ue = function e(t) {
					var r = D.codeLocaleToAffiliateTextLogoMap.get(t.locale),
						a = t.hasRates ? "" : "vr-rap-RapFooter__noRatesHAText--pEfT1";
					return r ? N.createElement("div", {
						className: a
					}, r) : null
				},
				He = function e() {
					o()({
						module: "VR_RAP_WEB_COMPONENT",
						action: "VR_Send_Message_Footer_VRR"
					})
				},
				We = function(e) {
					function t() {
						var e, r;
						c()(this, t);
						for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
						return r = m()(this, (e = _()(t)).call.apply(e, [this].concat(n))), E()(y()(y()(r)), "state", {
							showLegacyEnterDate: !1,
							loadingConversion: !1
						}), E()(y()(y()(r)), "showEnterDate", function() {
							r.props.legacy && r.setState({
								showLegacyEnterDate: !0
							}), r.props.showMissingRequireFields && r.props.showMissingRequireFields()
						}), E()(y()(y()(r)), "dispatchEnterDatePrompt", function(e) {
							e.preventDefault(), r.showEnterDate()
						}), E()(y()(y()(r)), "goToReadonlyUrl", function() {
							r.props.rental && window.open(null != r.props.rental.contactManagerUrl ? I()(r.props.rental.contactManagerUrl) : "", "_blank")
						}), E()(y()(y()(r)), "transitionToConversionWithLoading", function(e) {
							return function(t) {
								t.stopPropagation();
								try {
									r.setState({
										loadingConversion: !0
									}), e()
								} catch (e) {
									r.setState({
										loadingConversion: !1
									})
								}
							}
						}), E()(y()(y()(r)), "goToCheckOut", function(e) {
							r.isReadOnly() ? r.goToReadonlyUrl() : r.transitionToConversionWithLoading(function() {
								if (r.props.rapResponse && r.props.rapResponse.data && r.props.rapResponse.data.rapData) {
									var e = r.props.detailId,
										t = r.props.rapResponse.data.tipQuoteToken,
										a = r.props.travelerInfo,
										n = a.start,
										o = a.end,
										l = a.adults,
										i = a.children,
										s = Object(D.tryGettingPartnerReference)();
									Object(z.runLegacyBookingRequestFlow)({
										detailId: e,
										start: n,
										end: o,
										adults: l,
										kids: i,
										tipQuoteToken: t,
										partnerParams: s
									})
								}
							})(e)
						}), E()(y()(y()(r)), "goToAffiliateCheckOut", function(e) {
							if (e.stopPropagation(), r.props.rental) {
								var t = r.props.rental.providerOrdinal,
									a = r.props,
									n = a.detailId,
									o = a.geoId,
									l = Object(M.createPDPAffiliateTrackingAction)(t),
									i = Object(M.createAffiliateTracking)(l, n, o, r.props.trackingUid);
								Object(M.affiliateCheckOut)(n, i, r.props.locale, "property")
							}
						}), r
					}
					return g()(t, e), u()(t, [{
						key: "getBasePeriodDisplay",
						value: function e() {
							if (!this.props.rental || !this.props.rental.baseDailyRate) return null;
							var t = R.globalize.formatCurrencyInteger(this.props.rental.baseDailyRate);
							return {
								periodCopy: Object(R.localize)("vr_detail_rate2_171f", {
									0: "",
									1: 1
								}),
								periodCost: t,
								headerText: Object(R.localize)("vr_price_from_283")
							}
						}
					}, {
						key: "getPeriodDisplay",
						value: function e() {
							if (!this.props.rapResponse || !this.props.rapResponse.data) return this.getBasePeriodDisplay();
							var t, r = this.props.rapResponse.data.view,
								a = this.getSubtotal();
							if (!a || !r) return this.getBasePeriodDisplay();
							var n = this.props.travelerInfo,
								o = n.start,
								l = n.end,
								i = o && l ? Object(Se.dateDiffInDays)(new Date(o), new Date(l)) : 0;
							if (i > 0) {
								t = R.globalize.formatCurrencyInteger(a);
								var s = Object(R.localize)("vr_pdp_nightly_period_lower", {
									numNights: i
								});
								return {
									periodCost: t,
									periodCopy: "/ ".concat(s)
								}
							}
							return {
								periodCost: t = R.globalize.formatCurrencyInteger(Math.round(a / r.stayLength)),
								periodCopy: Object(R.localize)("vr_detail_rate2_171f", {
									0: "",
									1: 1
								})
							}
						}
					}, {
						key: "getSubtotal",
						value: function e() {
							if (!this.props.rapResponse || !this.props.rapResponse.data) return null;
							var t = this.props.rapResponse.data,
								r = t.rapData,
								a = t.view;
							return r ? r.subtotalNumericInSessionCurrency : a ? a.rateInfo && a.rateInfo.subtotalValueInSessionCurrency : null
						}
					}, {
						key: "getErrorMessage",
						value: function e() {
							if (this.state.showLegacyEnterDate) return Object(R.localize)("vr_inquiry_missing_required_error_ffffdcba");
							var t = this.getErrors();
							return t && t.length && t[0].message
						}
					}, {
						key: "getErrors",
						value: function e() {
							if (!this.props.rapResponse || !this.props.rapResponse.data) return null;
							var t = this.props.rapResponse.data.errors;
							return t && t.length ? t : null
						}
					}, {
						key: "hasErrors",
						value: function e() {
							var t = this.getErrors();
							return t && t.length
						}
					}, {
						key: "isReadOnly",
						value: function e() {
							return this.props.readonlyMode
						}
					}, {
						key: "conditionalRender",
						value: function e() {
							var t;
							if (this.props.loading) return N.createElement(P.LoadingSpinner, {
								size: "small"
							});
							if (!this.props.rental) return null;
							if (this.props.rapResponse && this.props.rapResponse.data) return this.renderTreatment(this.props.rapResponse.data);
							if (this.props.rental.baseDailyRate) return this.renderInquiryTreatment();
							var r = {
								buttonText: Object(R.localize)("vr_tip_send_message_14cd"),
								modalId: T.MODAL_ID,
								readonlyMode: this.props.readonlyMode,
								onClick: He,
								rental: this.props.rental
							};
							return (null === (t = this.props.rental) || void 0 === t ? void 0 : t.isAffiliate) ? N.createElement(Ae, {
								dispatchEnterDatePrompt: this.dispatchEnterDatePrompt,
								loadingConversion: this.state.loadingConversion,
								rental: this.props.rental,
								locale: this.props.locale
							}) : N.createElement(Fe, {
								inquiryButtonProps: r,
								loadingConversion: this.state.loadingConversion,
								rental: this.props.rental,
								locale: this.props.locale
							})
						}
					}, {
						key: "renderTreatment",
						value: function e(t) {
							return this.props.rental ? (i({
								rapResponse: t,
								rental: this.props.rental
							}), t.rapData && t.rapData.isOffsiteBooking ? this.renderAffiliateCheckOutVariant() : this.hasErrors() ? this.renderInquiryTreatment() : t.rapData && "NONE" !== t.rapData.rapBookable ? this.renderRapTreatment() : this.renderInquiryTreatment()) : null
						}
					}, {
						key: "renderAffiliateCheckOutVariant",
						value: function e() {
							if (this.hasErrors()) return null;
							var t = this.getPeriodDisplay();
							return t ? N.createElement("div", {
								className: Be
							}, N.createElement("div", null, N.createElement(xe, {
								priceDisplay: t
							}), Ve(this.props.rental) && N.createElement(Ue, {
								locale: this.props.locale
							})), this.state.loadingConversion ? N.createElement(P.LoadingSpinner, {
								size: "small"
							}) : N.createElement(k.a, {
								onClick: this.goToAffiliateCheckOut
							}, Object(R.localize)("vr_book_now"))) : null
						}
					}, {
						key: "renderRapTreatment",
						value: function e() {
							var t = this.getPeriodDisplay();
							if (!t) return null;
							var r = this.props.rental && "TIP_INSTANT_BOOK" === this.props.rental.businessInfo.tipType;
							return N.createElement("div", {
								className: Be
							}, N.createElement("div", null, N.createElement(xe, {
								priceDisplay: t
							}), Ve(this.props.rental) && N.createElement(Ue, {
								locale: this.props.locale
							}), r && Object(O.featureIsEnabled)("vr_instant_book_badging") ? N.createElement(Le, null) : N.createElement(qe, null)), this.state.loadingConversion ? N.createElement(P.LoadingSpinner, {
								size: "small"
							}) : N.createElement(k.a, {
								onClick: this.goToCheckOut
							}, Object(R.localize)("vr_book_now")))
						}
					}, {
						key: "renderInquiryTreatment",
						value: function e() {
							var t = this.getPeriodDisplay();
							return t ? N.createElement("div", {
								className: Be
							}, N.createElement(xe, {
								priceDisplay: t
							}), this.state.loadingConversion ? N.createElement(P.LoadingSpinner, {
								size: "small"
							}) : N.createElement(T.InquiryButton, {
								buttonText: Object(R.localize)("vr_tip_send_message_14cd"),
								modalId: T.MODAL_ID,
								readonlyMode: this.props.readonlyMode,
								tracking: He,
								rental: this.props.rental
							})) : null
						}
					}, {
						key: "render",
						value: function e() {
							return N.createElement("div", {
								className: "vr-rap-RapFooter__footer--16xv4"
							}, this.conditionalRender())
						}
					}]), t
				}(N.Component);
			E()(We, "getDerivedStateFromProps", void 0), E()(We, "defaultProps", {
				legacy: !1
			}), We.getDerivedStateFromProps = function() {
				return {
					showEnterDate: !1
				}
			};
			var Qe = function(e) {
					function t(e) {
						var r;
						return c()(this, t), r = m()(this, _()(t).call(this, e)), E()(y()(y()(r)), "handleClick", function() {
							r.state.shown ? r.props.rawPhoneNumber && window.open("tel:".concat(r.props.rawPhoneNumber), "_self") : r.setState({
								shown: !0
							})
						}), r.state = {
							shown: e.shown
						}, r
					}
					return g()(t, e), u()(t, [{
						key: "render",
						value: function e() {
							return N.createElement("div", {
								className: "vr-rap-pieces-CallRentalOwner__container--X_kXW",
								onClick: this.handleClick
							}, N.createElement(se.Icon, {
								name: "phone",
								className: "vr-rap-pieces-CallRentalOwner__phoneIcon--2r2ul"
							}), N.createElement("span", {
								className: "vr-rap-pieces-CallRentalOwner__messageAndNumberText--3jKlY"
							}, this.state.shown ? this.props.phoneNumber : this.props.message))
						}
					}]), t
				}(N.Component),
				Ye = function e(t) {
					var r = t.rental,
						a = r.showPhoneNumber,
						n = r.businessInfo,
						o = r.phoneNumber,
						l = t.rental.propertyManager.typeValue,
						i = "PAY_PER_LEAD" === n.subscriptionType || !0;
					return a && o ? N.createElement(Qe, {
						phoneNumber: o,
						rawPhoneNumber: t.rental.rawPhoneNumber,
						message: Object(R.localize)("vr_call_manager_owner", {
							0: l
						}),
						shown: !i
					}) : null
				},
				Ge = Qe;
			r.d(t, "withRapData", function() {
				return a.a
			}), r.d(t, "trackBasedOnResponse", function() {
				return i
			}), r.d(t, "RapView", function() {
				return Me
			}), r.d(t, "RapFooter", function() {
				return We
			}), r.d(t, "getBasePeriodDisplay", function() {
				return W
			}), r.d(t, "getPeriodDisplay", function() {
				return Y
			}), r.d(t, "getPeriodDisplayForRapData", function() {
				return Q
			}), r.d(t, "shouldShowInquiryButton", function() {
				return G
			}), r.d(t, "PriceHat", function() {
				return H
			}), r.d(t, "CallRentalOwner", function() {
				return Ge
			}), r.d(t, "MaybeCallRentalOwner", function() {
				return Ye
			})
		},
		"./packages/vr/rap/withRapData.jsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", function() {
				return o
			}), r.d(t, "c", function() {
				return l
			}), r("react");
			var a = r("@ta/common.api"),
				n = r("@ta/vr.common");

			function o(e) {
				var t = new URLSearchParams({});
				return e.forEach(function(e) {
					t.append("propertyId", e.toString())
				}), t
			}

			function l(e) {
				return Object(a.bind)(function(e, t, r) {
					var a = e.travelerInfo.vr,
						o = a && function l(e, t, r, a) {
							var o = Object(n.getRapUrlBulk)(e, r, a);
							return o ? t(o) : null
						}(a, t, r, e.auth.csrfToken);
					return function() {
						return {
							bulkRapResponse: o && o.get(),
							loading: !!o && o.get().loading,
							travelerInfo: a
						}
					}
				})(e)
			}
			t.a = function e(t) {
				return Object(a.bind)(function(e, t) {
					var r = e.page,
						a = r.detailId,
						o = r.geoId,
						l = e.meta.readonlyMode,
						i = e.travelerInfo.vr && function s(e, t, r, a) {
							var o = Object(n.getRapUrl)(e, r, a);
							return o ? t(o) : null
						}(e.travelerInfo.vr, t, a, e.auth.csrfToken),
						c = t("".concat("/data/1.0/vr/rental/").concat(a));
					return function() {
						return {
							rapResponse: i && i.get(),
							rental: c.get().data,
							loading: c.get().loading || !!i && i.get().loading,
							travelerInfo: e.travelerInfo.vr,
							detailId: a,
							geoId: o,
							readonlyMode: l,
							trackingUid: e.tracking.uid,
							locale: e.i18n.locale
						}
					}
				})(t)
			}
		}
	}
});
//# sourceMappingURL=vr.rap.2d051e5f0b.js.map

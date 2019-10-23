($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.overview",
	d: ["vendor-babel", "vendor-react-libs", "@ta/common.client", "lithium-platform", "@ta/vr.traveler-input-picker", "ta-platform", "@ta/vr.rap", "@ta/vr.inquiry", "@ta/cpm.ad-target", "@ta/vr.common", "ta-common"],
	e: ["./packages/vr/overview/Overview.jsx"],
	x: {
		"./packages/vr/common/JerseyDataFunctions.jsx": ["c", "a", "b", "d"],
		"./packages/vr/overview/Overview.jsx": ["default"],
		"./roots/vr/traveler-inputs-and-rap/TravelerInputsAndRap.jsx": ["default"]
	},
	m: {
		"./packages/vr/common/JerseyDataFunctions.jsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", function() {
				return o
			}), r.d(t, "a", function() {
				return i
			}), r.d(t, "b", function() {
				return s
			}), r.d(t, "d", function() {
				return l
			});
			var n = r("@ta/common.i18n");

			function a(e) {
				return "YES" === e ? Object(n.localize)("common_Yes") : "NO" === e ? Object(n.localize)("common_No") : "ASK" === e ? Object(n.localize)("vr_ask_81f") : ""
			}

			function o(e) {
				var t = [];
				if (e) {
					var r = e.amn_all_pets_temp,
						o = e.amn_children,
						i = e.amn_smoking_temp;
					r.value && t.push(Object(n.localize)("vacation_rental_pets_allowed", {
						0: a(r.value)
					})), i.value && t.push(Object(n.localize)("vacation_rental_smoking_allowed", {
						0: a(i.value)
					})), o.value && t.push(Object(n.localize)("vacation_rental_kid_friendly", {
						0: a(o.value)
					}))
				}
				return t
			}

			function i(e) {
				var t = ["amn_smoking", "amn_pets", "amn_all_pets", "amn_elderly", "amn_children", "amn_smoking_temp", "amn_all_pets_temp", "amn_elderly_temp"];
				return Object.keys(e).filter(function(r) {
					return !t.includes(r) && e[r].hasFeature
				}).map(function(t) {
					return e[t].localizedText
				})
			}

			function s(e) {
				return ["area_fishing_near", "area_golf_far", "area_golf_near", "area_horse_riding_nearby", "area_in_ski_resort", "area_tennis_near", "area_water_park_near", "area_watersports_near", "area_nearest_beach"].map(function(t) {
					return e.features[t] && e.features[t].localizedText
				}).filter(function(e) {
					return e
				})
			}

			function l(e) {
				var t = e.descriptions,
					r = t.ABOUT_THE_AREA,
					n = t.GETTING_AROUND,
					a = t.AREA_DETAILS,
					o = !!r || !!n || !!a,
					i = "NO" === e.rentalData.carRequired || "ADVISED" === e.rentalData.carRequired || "YES" === e.rentalData.carRequired || !!e.features.area_nearest_amenities,
					l = e.descriptions.DIRECTIONS || e.features.area_nearest_airport || e.features.area_nearest_railway || !!e.features.area_nearest_ferry,
					c = s(e),
					p = c && c.length,
					u = e.nearbyGeos && e.nearbyGeos.length;
				return o || i || l || p || u
			}
		},
		"./packages/vr/overview/Overview.jsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("@babel/runtime/helpers/esm/extends"),
				a = r.n(n),
				o = r("@babel/runtime/helpers/esm/classCallCheck"),
				i = r.n(o),
				s = r("@babel/runtime/helpers/esm/createClass"),
				l = r.n(s),
				c = r("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				p = r.n(c),
				u = r("@babel/runtime/helpers/esm/getPrototypeOf"),
				d = r.n(u),
				v = r("@babel/runtime/helpers/esm/inherits"),
				m = r.n(v),
				_ = r("@babel/runtime/helpers/esm/assertThisInitialized"),
				h = r.n(_),
				f = r("@babel/runtime/helpers/esm/defineProperty"),
				b = r.n(f),
				I = r("react"),
				g = r("@ta/common.client"),
				y = r("@ta/common.i18n"),
				E = r("./packages/vr/common/JerseyDataFunctions.jsx"),
				w = r("./roots/vr/traveler-inputs-and-rap/TravelerInputsAndRap.jsx"),
				O = {
					overviewTitleContainer: "vr-overview-Overview__overviewTitleContainer--3mCT9",
					overviewTitle: "vr-overview-Overview__overviewTitle--3q4wN",
					translationBadging: "vr-overview-Overview__translationBadging--38F3i",
					propertyInfoContainer: "vr-overview-Overview__propertyInfoContainer--3RFiA",
					propertyInfo: "vr-overview-Overview__propertyInfo--2FRk7",
					propertyInfoIcon: "vr-overview-Overview__propertyInfoIcon--2YWxF",
					propertyInfoLabel: "vr-overview-Overview__propertyInfoLabel--ynL4L",
					propertyDescription: "vr-overview-Overview__propertyDescription--1lhgd",
					seeMore: "vr-overview-Overview__seeMore--351YP",
					sendToFriend: "vr-overview-Overview__sendToFriend--3IRm3",
					sendToFriendIcon: "vr-overview-Overview__sendToFriendIcon--T9m7a",
					sendToFriendLabel: "vr-overview-Overview__sendToFriendLabel--2t_Xr",
					sectionTitle: "vr-overview-Overview__sectionTitle--3_mjb",
					sectionInfo: "vr-overview-Overview__sectionInfo--1Atpa",
					sectionContainer: "vr-overview-Overview__sectionContainer--3--YV",
					propertyType: "vr-overview-Overview__propertyType--ZnYO5",
					houseRules: "vr-overview-Overview__houseRules--2QZyM",
					suitabilityInfo: "vr-overview-Overview__suitabilityInfo--PMU1w",
					suitabilityItem: "vr-overview-Overview__suitabilityItem--ZXq87",
					extraHouseRules: "vr-overview-Overview__extraHouseRules--33eSk",
					showHideContainer: "vr-overview-Overview__showHideContainer--3_qqH",
					showLabel: "vr-overview-Overview__showLabel--z9MMx",
					listingNumber: "vr-overview-Overview__listingNumber--1Nguw"
				};
			r.d(t, "default", function() {
				return k
			});
			var T = function e(t) {
					var r = t.rental,
						n = t.description;
					return !r.isIndexable || !r.isMachineTranslatedMarkupFeatureEnabled && n.machineTranslated
				},
				R = function e(t) {
					var r = t.rental,
						n = t.description;
					return r.isMachineTranslatedMarkupFeatureEnabled && n.machineTranslated
				},
				k = function(e) {
					function t(e) {
						var r;
						return i()(this, t), r = p()(this, d()(t).call(this, e)), b()(h()(h()(r)), "toggleExtended", function() {
							r.setState({
								isExtended: !r.state.isExtended
							})
						}), b()(h()(h()(r)), "toggleShowMoreInfo", function() {
							r.setState({
								showMoreInfo: !r.state.showMoreInfo
							})
						}), b()(h()(h()(r)), "isMobile", function() {
							return "MOBILE" === r.props.viewportCategory
						}), b()(h()(h()(r)), "maxCharCount", function() {
							return r.isMobile() ? 300 : 800
						}), b()(h()(h()(r)), "shortDescription", function() {
							return r.props.rental.descriptions.OVERVIEW ? "".concat(r.props.rental.descriptions.OVERVIEW.text.substring(0, r.maxCharCount()), "...") : ""
						}), b()(h()(h()(r)), "longDescription", function() {
							return r.props.rental.descriptions.OVERVIEW ? r.props.rental.descriptions.OVERVIEW.text : ""
						}), b()(h()(h()(r)), "showBookingCount", function() {
							return r.props.rental.paymentStats && r.props.rental.paymentStats.totalPayments > 0
						}), b()(h()(h()(r)), "isTranslated", function(e) {
							var t = r.props.rental.descriptions,
								n = t.OVERVIEW,
								a = t.HOUSE_RULES;
							return !(!n || !n.status || n.status !== e) || !(!a || !a.status || a.status !== e)
						}), b()(h()(h()(r)), "showMTBadge", function() {
							return r.isTranslated("MACHINE_GOOGLE") || r.isTranslated("MACHINE_BING") || r.isTranslated("MACHINE_TRANSLATED")
						}), b()(h()(h()(r)), "machineTranslatedBadging", function() {
							var e;
							return r.isTranslated("MACHINE_GOOGLE") ? e = Object(y.unescaped)(Object(y.localize)("translation_powered_by_img_provider_v2", {
								imgUri: "https://www.google.com/uds/css/small-logo.png",
								providerName: "Google"
							})) : (r.isTranslated("MACHINE_BING") || r.isTranslated("MACHINE_TRANSLATED")) && (e = Object(y.unescaped)(Object(y.localize)("mtprovider_attribution_microsoft"))), I.createElement("div", {
								className: "".concat(O.translationBadging)
							}, " ", e, " ")
						}), b()(h()(h()(r)), "localizeFeatureCount", function(e) {
							var t = r.props.rental.features[e].quantity;
							if (e && t) switch (e) {
								case "amn_king_bed":
									return Object(y.localize)("vr_pdp_king_bed_plural", {
										0: t
									});
								case "amn_queen_bed":
									return Object(y.localize)("vr_pdp_queen_bed_plural", {
										0: t
									});
								case "amn_double_bed":
									return Object(y.localize)("vr_pdp_full_bed_plural", {
										0: t
									});
								case "amn_sofabed":
									return Object(y.localize)("vr_pdp_sofa_plural", {
										0: t
									});
								case "amn_bunk_bed":
									return Object(y.localize)("vr_pdp_bunk_bed_plural", {
										0: t
									});
								case "amn_single_bed":
									return Object(y.localize)("vr_pdp_twin_bed_plural", {
										0: t
									});
								case "amn_cot":
									return Object(y.localize)("vr_pdp_crib_bed_plural", {
										0: t
									});
								case "amn_unknown_bed":
									return Object(y.localize)("vr_pdp_unknown_bed_plural", {
										0: t
									});
								case "amn_family_bathroom":
									return Object(y.localize)("vr_pdp_full_bath", {
										0: t
									});
								case "amn_toilet_only":
									return Object(y.localize)("vr_pdp_half_bath", {
										0: t
									});
								case "amn_shower_room":
									return Object(y.localize)("vr_pdp_shower_bath", {
										0: t
									});
								case "amn_ensuite":
									return Object(y.localize)("vr_pdp_attached_bath", {
										0: t
									});
								case "amn_unknown_type_bathroom":
									return Object(y.localize)("vr_pdp_unknown_bathroom", {
										0: t
									})
							}
							return ""
						}), b()(h()(h()(r)), "localizeFeatureCountList", function(e) {
							return Object.keys(r.props.rental.features).filter(function(t) {
								return e.includes(t)
							}).map(function(e) {
								return r.localizeFeatureCount(e)
							}).filter(function(e) {
								return "" !== e
							}).join(", ")
						}), b()(h()(h()(r)), "bedroomInfo", function() {
							return r.localizeFeatureCountList(["amn_king_bed", "amn_queen_bed", "amn_double_bed", "amn_sofabed", "amn_bunk_bed", "amn_single_bed", "amn_cot", "amn_unknown_bed"])
						}), b()(h()(h()(r)), "bathroomInfo", function() {
							return r.localizeFeatureCountList(["amn_toilet_only", "amn_family_bathroom", "amn_unknown_type_bathroom", "amn_ensuite", "amn_shower_room"])
						}), b()(h()(h()(r)), "minimumStayLocalization", function() {
							var e = r.props.rental.minStay;
							return e >= 0 ? Object(y.localize)("vr_mobile_plural_min_nights_2", {
								0: e
							}) : Object(y.localize)("vr_rental_minimum_stay_varies")
						}), r.state = {
							isExtended: !1,
							showMoreInfo: !1
						}, r
					}
					return m()(t, e), l()(t, [{
						key: "renderPropertyDescription",
						value: function e() {
							var t = this.props.rental.descriptions.OVERVIEW;
							if (!t) return null;
							var r = T({
									rental: this.props.rental,
									description: t
								}),
								n = R({
									rental: this.props.rental,
									description: t
								}) ? "".concat(t.lang, "-x-mtfrom-").concat(t.machineTranslatedSourceLang) : null,
								a = I.createElement("div", {
									className: "".concat(O.propertyDescription),
									lang: n
								}, this.state.isExtended ? this.longDescription() : I.createElement(I.Fragment, null, this.shortDescription(), I.createElement("span", {
									style: {
										display: "none"
									}
								}, this.longDescription())), I.createElement("a", {
									className: "".concat(O.seeMore),
									onClick: this.toggleExtended
								}, this.state.isExtended ? Object(y.localize)("vr_description_less") : Object(y.localize)("vr_description_more")));
							return r ? I.createElement(g.ClientOnly, null, a) : a
						}
					}, {
						key: "renderHouseRules",
						value: function e() {
							var t = this.props.rental.descriptions.OVERVIEW;
							if (!t) return null;
							var r = T({
									rental: this.props.rental,
									description: t
								}),
								n = R({
									rental: this.props.rental,
									description: t
								}) ? "".concat(t.lang, "-x-mtfrom-").concat(t.machineTranslatedSourceLang) : null,
								a = I.createElement("div", {
									className: "".concat(O.extraHouseRules),
									lang: n
								}, this.props.rental.descriptions.HOUSE_RULES && this.props.rental.descriptions.HOUSE_RULES.text);
							return r ? I.createElement(g.ClientOnly, null, a) : a
						}
					}, {
						key: "render",
						value: function e() {
							var t = this,
								r = Object(E.c)(this.props.rental.features).map(function(e) {
									return I.createElement("div", {
										key: e,
										className: "".concat(O.suitabilityItem)
									}, e)
								}),
								n = 0 === this.props.rental.roomCount ? Object(y.localize)("vr_studio_room") : Object(y.localize)("vr_mobile_plural_bedrooms", {
									0: this.props.rental.roomCount
								});
							return I.createElement("div", {
								className: this.props.className || ""
							}, this.isMobile() ? I.createElement(w.default, a()({}, this.props, {
								isInline: !0
							})) : null, I.createElement("div", {
								className: "".concat(O.overviewTitleContainer)
							}, I.createElement("div", {
								className: "ui_header h2 ".concat(O.overviewTitle)
							}, Object(y.localize)("overview_common")), this.showMTBadge() ? this.machineTranslatedBadging() : null), I.createElement("div", null, I.createElement("div", {
								className: "".concat(O.propertyInfoContainer)
							}, I.createElement("div", {
								className: "".concat(O.propertyInfo)
							}, I.createElement("div", {
								className: "ui_icon hotels ".concat(O.propertyInfoIcon)
							}), I.createElement("div", {
								className: "".concat(O.propertyInfoLabel)
							}, n)), this.props.rental.bathCount ? I.createElement("div", {
								className: "".concat(O.propertyInfo)
							}, I.createElement("div", {
								className: "ui_icon bathroom-fill ".concat(O.propertyInfoIcon)
							}), I.createElement("div", {
								className: "".concat(O.propertyInfoLabel)
							}, Object(y.localize)("vr_mobile_plural_baths", {
								0: this.props.rental.bathCount
							}))) : null, I.createElement("div", {
								className: "".concat(O.propertyInfo)
							}, I.createElement("div", {
								className: "ui_icon friends ".concat(O.propertyInfoIcon)
							}), I.createElement("div", {
								className: "".concat(O.propertyInfoLabel)
							}, Object(y.localize)("vr_mobile_plural_guests", {
								0: this.props.rental.sleepCount
							}))), I.createElement("div", {
								className: "".concat(O.propertyInfo)
							}, I.createElement("div", {
								className: "ui_icon night ".concat(O.propertyInfoIcon)
							}), I.createElement("div", {
								className: "".concat(O.propertyInfoLabel)
							}, this.minimumStayLocalization()))), I.createElement("div", {
								className: "".concat(O.propertyType)
							}, this.props.rental.rentalType), this.renderPropertyDescription(), !this.isMobile() && I.createElement("div", {
								className: "".concat(O.sendToFriend)
							}, I.createElement("div", {
								className: "ui_icon email-fill ".concat(O.sendToFriendIcon)
							}), I.createElement("a", {
								className: "".concat(O.sendToFriendLabel),
								onClick: this.props.handleSendToFriendClick
							}, Object(y.localize)("send_to_a_friend"))), I.createElement("div", {
								className: "".concat(O.houseRules)
							}, I.createElement("div", {
								className: "ui_header h3 ".concat(O.sectionTitle)
							}, Object(y.localize)("ftl_mobile_house_rules_14cd")), I.createElement("div", {
								className: "".concat(O.sectionInfo)
							}, I.createElement("div", {
								className: "".concat(O.suitabilityInfo)
							}, r), this.renderHouseRules())), this.props.rental.bathroomInfo.length ? I.createElement("div", {
								className: "".concat(O.sectionContainer)
							}, I.createElement("div", {
								className: "ui_header h3 ".concat(O.sectionTitle)
							}, Object(y.localize)("vacation_rental_bathrooms_criteria")), I.createElement("div", {
								className: "".concat(O.sectionInfo)
							}, this.props.rental.bathroomInfo)) : null, this.state.showMoreInfo && this.props.rental.bedroomInfo.length ? I.createElement("div", {
								className: "".concat(O.sectionContainer)
							}, I.createElement("div", {
								className: "ui_header h3 ".concat(O.sectionTitle)
							}, Object(y.localize)("vacation_rental_bedrooms_criteria")), I.createElement("div", {
								className: "".concat(O.sectionInfo)
							}, this.bedroomInfo())) : null, this.state.showMoreInfo && this.props.rental.isPartnerSupplier && I.createElement("div", {
								className: "".concat(O.sectionContainer)
							}, I.createElement("span", {
								className: "".concat(O.listingNumber)
							}, Object(y.localize)("vr_title_listing_by_ffffdcba_v1", {
								0: this.props.rental.externalId
							})))), this.props.rental.bedroomInfo.length || this.props.rental.isPartnerSupplier ? I.createElement("div", {
								className: "".concat(O.showHideContainer)
							}, I.createElement("div", {
								className: "ui_header h3 ".concat(O.sectionTitle),
								onClick: function e() {
									t.toggleShowMoreInfo()
								}
							}, this.state.showMoreInfo ? I.createElement("div", {
								className: "".concat(O.showLabel)
							}, Object(y.localize)("vr_show_less"), I.createElement("div", {
								className: "ui_icon caret-up"
							})) : I.createElement("div", {
								className: "".concat(O.showLabel)
							}, Object(y.localize)("vr_show_more"), I.createElement("div", {
								className: "ui_icon caret-down"
							})))) : null)
						}
					}]), t
				}(I.Component)
		},
		"./roots/vr/traveler-inputs-and-rap/TravelerInputsAndRap.jsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("@babel/runtime/helpers/esm/objectSpread"),
				a = r.n(n),
				o = r("@babel/runtime/helpers/esm/classCallCheck"),
				i = r.n(o),
				s = r("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				l = r.n(s),
				c = r("@babel/runtime/helpers/esm/getPrototypeOf"),
				p = r.n(c),
				u = r("@babel/runtime/helpers/esm/createClass"),
				d = r.n(u),
				v = r("@babel/runtime/helpers/esm/inherits"),
				m = r.n(v),
				_ = r("@babel/runtime/helpers/esm/assertThisInitialized"),
				h = r.n(_),
				f = r("@babel/runtime/helpers/esm/defineProperty"),
				b = r.n(f),
				I = r("react"),
				g = r("@ta/vr.traveler-input-picker"),
				y = r("@ta/common.tracking"),
				E = r.n(y),
				w = r("@ta/vr.rap"),
				O = r("@ta/vr.inquiry"),
				T = r("@ta/common.api"),
				R = r("@ta/common.features"),
				k = r("@ta/common.state"),
				C = r("@ta/cpm.ad-target"),
				N = r.n(C),
				M = r("@ta/vr.common"),
				j = r("@ta/common.i18n"),
				S = r("@ta/styleguide.loading"),
				F = {
					topSectionCopy: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__topSectionCopy--20Ui_",
					topSectionCopyError: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__topSectionCopyError--2_Gua",
					topSection: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__topSection--XlK_V",
					mobileInfoContainer: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__mobileInfoContainer--26s2e",
					wrapperForPriceHat: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__wrapperForPriceHat--2ecSc",
					container: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__container--2hejg",
					mobileInquiryButton: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__mobileInquiryButton--kWR7n",
					vrrRailAd: "vr-traveler-inputs-and-rap-TravelerInputsAndRap__vrrRailAd--2mUq0"
				},
				z = function e() {
					return I.createElement("div", {
						className: F.container
					}, I.createElement(S.LoadingSpinner, null))
				},
				D = function(e) {
					function t(e) {
						var r;
						return i()(this, t), r = l()(this, p()(t).call(this, e)), b()(h()(h()(r)), "onInputsChange", function(e) {
							var t = a()({}, r.state, e, {
									showMissingRequiredFields: !1
								}),
								n = {
									start: t.startDate,
									end: t.endDate,
									adults: t.adults,
									pets: t.pets,
									kids: t.kids
								};
							Object(M.persistTravelerInfo)(n), r.props.setVrTravelerInfo(n), r.setState(e)
						}), b()(h()(h()(r)), "showMissingRequireFields", function() {
							r.setState({
								showMissingRequiredFields: !0
							})
						}), b()(h()(h()(r)), "goToRates", function() {
							var e = document.querySelector("#vr-detail-page-rates-and-fees");
							e && window.scroll({
								top: e.offsetTop,
								behavior: "smooth"
							})
						}), b()(h()(h()(r)), "renderMobileSendMessageButton", function() {
							return r.state.startDate && r.state.endDate && I.createElement(M.Fade, {
								key: "send-message-button"
							}, I.createElement("div", {
								className: F.mobileInquiryButton
							}, I.createElement(O.InquiryButton, {
								buttonText: Object(j.localize)("vr_tip_send_message_14cd"),
								readonlyMode: r.props.readonlyMode,
								modalId: O.MODAL_ID,
								rental: r.props.rental,
								type: O.InquiryButtonStyles.PRIMARY,
								isFullwidth: !0
							})))
						}), r.state = t.travelerInfoToPartialState(e.travelerInfo), r
					}
					return m()(t, e), d()(t, null, [{
						key: "getDerivedStateFromProps",
						value: function e(r, n) {
							var a = r.travelerInfo;
							return t.isTravelerInfoModified(a, n) ? t.travelerInfoToPartialState(a) : {}
						}
					}, {
						key: "isTravelerInfoModified",
						value: function e(t, r) {
							var n = r.startDate,
								a = r.endDate,
								o = r.adults,
								i = r.pets,
								s = r.kids,
								l = t.start,
								c = t.end,
								p = t.adults,
								u = t.pets,
								d = t.children;
							return !(n === l && a === c && o === p && i === u && s === d)
						}
					}, {
						key: "travelerInfoToPartialState",
						value: function e(t) {
							var r = t.start,
								n = t.end,
								a = t.adults,
								o = t.pets,
								i = t.children;
							return {
								startDate: r ? new Date(r) : null,
								endDate: n ? new Date(n) : null,
								adults: a,
								pets: o,
								kids: i,
								showMissingRequiredFields: !1
							}
						}
					}]), d()(t, [{
						key: "getErrorCopy",
						value: function e() {
							if (this.state.showMissingRequiredFields) return Object(j.localize)("vr_inquiry_missing_required_error_ffffdcba");
							var t = this.getFirstRapError();
							return t && t.message
						}
					}, {
						key: "getFirstRapError",
						value: function e() {
							if (!this.props.rapResponse) return null;
							var t = this.props.rapResponse.errors;
							return t && t.length && t[0]
						}
					}, {
						key: "renderRapErrorOrBookedCount",
						value: function e() {
							var t, r, n = this.props.rental.paymentStats && this.props.rental.paymentStats.totalPayments,
								a = this.getErrorCopy();
							return a ? (t = a, r = a) : n && (t = "booked-count", r = I.createElement(I.Fragment, null, I.createElement("span", {
								className: "ui_icon credit-card"
							}), " ", Object(j.localize)("vr_travelers_booked_this_property_plural", {
								0: n
							}))), r ? I.createElement(M.Fade, {
								in: !0,
								key: t
							}, I.createElement("div", {
								className: "".concat(F.topSectionCopy, " ").concat(a ? F.topSectionCopyError : "")
							}, r)) : null
						}
					}, {
						key: "renderInputs",
						value: function e(t) {
							var r, n = this.state,
								a = n.startDate,
								o = n.endDate,
								i = n.adults,
								s = n.pets,
								l = n.kids,
								c = n.showMissingRequiredFields,
								p = "MOBILE" === this.props.deviceType,
								u = this.getFirstRapError();
							return r = c ? "NO_DATES" : u ? u.reason : void 0, I.createElement(g.TravelerInputsPicker, {
								onInputsChange: this.onInputsChange,
								startDate: a,
								endDate: o,
								adults: i || 2,
								pets: s,
								setTarget: t,
								numberOfMonths: p ? 1 : 2,
								kids: l,
								calendarData: this.props.calendarData,
								startDateOverlayAlignEdge: p ? "left" : "right",
								endDateOverlayAlignEdge: "right",
								errorReason: r,
								includePetsFilter: this.props.rental.requiresPetInput,
								withTracking: !0,
								tripSearch: Object(R.featureIsEnabled)("vr_pdp_tripsearch_inputs")
							})
						}
					}, {
						key: "renderWithFooter",
						value: function e() {
							var t = this.props,
								r = t.rapResponse,
								n = t.rental,
								a = t.travelerInfo,
								o = t.detailId,
								i = t.geoId,
								s = t.readonlyMode,
								l = t.isRapLoading,
								c = t.trackingUid;
							return I.createElement("div", {
								className: F.mobileInfoContainer
							}, I.createElement("div", {
								className: F.topSection
							}, this.renderRapErrorOrBookedCount(), this.renderInputs()), Object(w.shouldShowInquiryButton)(n, r) ? this.renderMobileSendMessageButton() : null, I.createElement(w.RapFooter, {
								rapResponse: {
									data: r
								},
								rental: n,
								travelerInfo: a,
								detailId: o,
								geoId: i,
								readonlyMode: s,
								trackingUid: c,
								loading: l,
								showMissingRequireFields: this.showMissingRequireFields,
								onGoToFees: this.goToRates,
								locale: this.props.locale
							}), I.createElement(O.ConnectedModalInquiryForm, {
								modalId: O.MODAL_ID
							}))
						}
					}, {
						key: "renderForPlacement",
						value: function e() {
							var t = this.props,
								r = t.rapResponse,
								n = t.rental,
								a = t.travelerInfo,
								o = t.detailId,
								i = t.geoId,
								s = t.readonlyMode,
								l = t.isRapLoading,
								c = t.trackingUid,
								p = t.locale;
							return I.createElement("div", {
								className: F.wrapperForPriceHat
							}, I.createElement("div", {
								className: F.container
							}, I.createElement("div", {
								className: F.topSection
							}, this.renderRapErrorOrBookedCount(), this.renderInputs()), I.createElement(w.RapView, {
								rapResponse: {
									data: r
								},
								rental: n,
								travelerInfo: a,
								detailId: o,
								geoId: i,
								readonlyMode: s,
								trackingUid: c,
								loading: l,
								showMissingRequireFields: this.showMissingRequireFields,
								onGoToFees: this.goToRates,
								locale: p
							}), I.createElement(O.ConnectedModalInquiryForm, {
								modalId: O.MODAL_ID
							})), I.createElement(N.a, {
								size: "300x250",
								position: "a",
								additionalWrapperClass: F.vrrRailAd
							}))
						}
					}, {
						key: "render",
						value: function e() {
							return "MOBILE" === this.props.deviceType ? this.renderWithFooter() : this.renderForPlacement()
						}
					}]), t
				}(I.Component),
				A = function(e) {
					function t() {
						return i()(this, t), l()(this, p()(t).apply(this, arguments))
					}
					return m()(t, e), d()(t, [{
						key: "componentDidUpdate",
						value: function e(t) {
							t.isInquiryModalShowing && !this.props.isInquiryModalShowing && E()({
								module: "VR",
								action: "VR_Close_inquiryform_VRR"
							})
						}
					}, {
						key: "renderTravelerInputsAndRap",
						value: function e() {
							var t = this.props.loading,
								r = "MOBILE" === this.props.deviceType;
							return t && !r ? I.createElement(z, null) : I.createElement(D, this.props)
						}
					}, {
						key: "render",
						value: function e() {
							return this.props.isInline || "MOBILE" !== this.props.deviceType ? this.renderTravelerInputsAndRap() : null
						}
					}]), t
				}(I.Component),
				L = Object(T.bind)({
					data: function e(t, r) {
						O.ConnectedInquiryForm.stage(t, r);
						var n = t.travelerInfo.vr;
						if (!n) return function() {
							return {}
						};
						var a = t.route,
							o = a.detail,
							i = a.geo,
							s = t.meta.readonlyMode,
							l = Object(M.getRapUrl)(n, o, t.auth.csrfToken),
							c = l && r(l),
							p = r("".concat("/data/1.0/vr/rental/").concat(o)),
							u = r("".concat("/data/1.0/vr/rental/calendarData/").concat(o));
						return w.PriceHat.stage(t, r),
							function() {
								return {
									detailId: o,
									geoId: i,
									travelerInfo: t.travelerInfo.vr,
									rapResponse: c && c.get().data || c && c.get().error && {
										errors: [{
											reason: "API_ERROR",
											message: Object(j.localize)("vr_please_refresh")
										}]
									},
									isRapLoading: !!c && c.get().loading,
									rental: p.get().data,
									loading: !!c && c.get().loading || u.get().loading || p.get().loading,
									regionCode: "US",
									calendarData: u.get().data,
									readonlyMode: s,
									trackingUid: t.tracking.uid,
									deviceType: t.meta.device.viewportCategory,
									isInquiryModalShowing: t.overlays.global === O.MODAL_ID,
									locale: t.i18n.locale
								}
							}
					},
					actions: {
						setVrTravelerInfo: k.actions.travelerInfo.setVrTravelerInfo
					}
				})(A);
			t.default = Object(T.loadOnMount)(L)
		}
	}
});
//# sourceMappingURL=vr.overview.07497d7a77.js.map

($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.rental-detail-owner",
	d: ["vendor-react-libs", "ta-platform", "vendor-babel", "lithium-platform", "ta-common", "@ta/common.obfuscated-link", "@ta/vr.inquiry", "@ta/vr.rap", "@ta/common.client", "@ta/vr.common"],
	e: ["./packages/vr/rental-detail-owner/rental-detail-owner.jsx"],
	x: {
		"./packages/vr/rental-detail-owner/rental-detail-owner.jsx": ["RentalOwnerSection", "getOwnerData", "RentalOwnerSectionV2"]
	},
	m: {
		"./packages/vr/rental-detail-owner/rental-detail-owner.jsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var a = t("react"),
				r = t("@ta/common.api"),
				l = t("@babel/runtime/helpers/esm/classCallCheck"),
				o = t.n(l),
				i = t("@babel/runtime/helpers/esm/createClass"),
				s = t.n(i),
				c = t("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				m = t.n(c),
				d = t("@babel/runtime/helpers/esm/getPrototypeOf"),
				u = t.n(d),
				p = t("@babel/runtime/helpers/esm/inherits"),
				g = t.n(p),
				h = t("@babel/runtime/helpers/esm/assertThisInitialized"),
				_ = t.n(h),
				v = t("@babel/runtime/helpers/esm/defineProperty"),
				w = t.n(v),
				y = t("@ta/common.i18n"),
				E = t("@ta/styleguide.avatar"),
				S = t("@ta/common.obfuscated-link"),
				T = t.n(S),
				b = t("@ta/vr.inquiry"),
				f = t("@ta/vr.rap"),
				I = t("@ta/common.tracking"),
				O = t.n(I),
				M = {
					closePageAction: "VR_CLOSE_LIGHTBOX_INQUIRY_PRICE",
					submitPageAction: "VR_SUBMIT_LIGHTBOX_INQUIRY_PRICE",
					validationErrorPageAction: "VR_LIGHTBOX_INQUIRY_ERROR_PRICE",
					openPageAction: "VR_OPEN_LIGHTBOX_INQUIRY_PRICE"
				},
				N = function R(e) {
					var n = {
						property: {
							locationId: e.rentalId
						},
						registration: {
							flow: "vr_mid_inquiry",
							pid: 39870
						},
						tracking: M
					};
					O()({
						module: "VR_ABOUT_THE_OWNER_COMPONENT",
						action: "VR_contact_owner_overview_card_VRR",
						value: 39591
					}), ta.vr.Inquiry.controller.show(e.event, this, n)
				},
				L = function e(n) {
					return a.createElement("div", {
						className: "vr-rental-detail-owner-RentalDetailOwnerComponents__infoRow--t5qh6"
					}, a.createElement("span", {
						className: "vr-rental-detail-owner-RentalDetailOwnerComponents__label--1mDaM"
					}, n.label), a.createElement("span", {
						className: "value"
					}, n.value))
				},
				k = function e(n) {
					return n.language && n.language.length > 0 ? a.createElement(L, {
						label: Object(y.localize)("vr_pm_languages_ffffdcba"),
						value: n.language
					}) : null
				},
				C = function e(n) {
					return n.responseRate && n.responseRate > 0 ? a.createElement(L, {
						label: Object(y.localize)("vr_owner_response_rate_responsive_pdp"),
						value: "".concat(n.responseRate, "%")
					}) : null
				},
				D = function e(n) {
					return n.responseTime && n.responseTime.length > 0 ? a.createElement(L, {
						label: Object(y.localize)("vr_owner_response_time_responsive_pdp"),
						value: n.responseTime
					}) : null
				},
				H = function e(n) {
					return a.createElement("div", {
						className: "".concat("vr-rental-detail-owner-RentalDetailOwnerComponents__seeMoreLink--CcQgL", " ").concat(function e() {
							return n.hasHostingStyle ? "" : "vr-rental-detail-owner-RentalDetailOwnerComponents__noHostingStyle--3YfGq"
						}())
					}, a.createElement(T.a, {
						encodedUrl: n.seeMoreLink,
						target: "_blank"
					}, a.createElement("a", {
						className: "vr-rental-detail-owner-RentalDetailOwnerComponents__link--2B0yR"
					}, " ", Object(y.localize)("see_more_properties"), " ")))
				};
			H.defaultProps = {
				hasHostingStyle: !0
			};
			var U = function e(n) {
				var t = n.managerInfo.establishedDate ? new Date(n.managerInfo.establishedDate) : null;
				return a.createElement("div", {
					className: "owner_info_body"
				}, function e(n) {
					return !!n && !n.match(/^\s*$/) && !n.match(/^\s*Owner.*/)
				}(n.managerName) ? a.createElement("div", {
					className: "vr-rental-detail-owner-RentalDetailOwnerComponents__ownerName--3allt"
				}, n.managerName) : null, a.createElement(k, {
					language: n.managerInfo.localizedLanguages
				}), a.createElement(C, {
					responseRate: n.managerInfo.respondedPercentage
				}), a.createElement(D, {
					responseTime: n.managerInfo.localizedResponseTimeString
				}), t ? a.createElement(L, {
					label: "".concat(Object(y.localize)("vr_owner_listed_since_responsive_pdp"), ":"),
					value: y.globalize.formatDate("date_full_month_year", t)
				}) : null, n.showManageLink && !n.rentalInfo.isAffiliate ? a.createElement(H, {
					seeMoreLink: n.managerInfo.obfuscatedLanderUrl
				}) : null, n.rentalInfo.showPhoneNumber && n.rentalInfo.phoneNumber ? a.createElement(a.Fragment, null, a.createElement("div", {
					className: "vr-rental-detail-owner-RentalDetailOwnerComponents__contactQuestion--1Hs-1"
				}, Object(y.localize)("vr_pdp_owner_contact_inquiry")), a.createElement(f.MaybeCallRentalOwner, {
					rental: n.rentalInfo,
					isGreen: !0,
					largeIcon: !1
				})) : null)
			};
			U.defaultProps = {
				showManageLink: !1
			};
			var P = function e(n) {
					return a.createElement("div", null, a.createElement("div", {
						className: "vr-rental-detail-owner-RentalDetailOwnerComponents__ownerInfoAvatar--1aajC"
					}, a.createElement(E.Avatar, {
						photoUrl: n.photoUrl || n.thumbnailUrl,
						size: "large",
						alt: function e() {
							return n.overrideAltText ? n.photoUrl : ""
						}()
					})))
				},
				x = function(e) {
					function n() {
						var e, t;
						o()(this, n);
						for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++) r[l] = arguments[l];
						return t = m()(this, (e = u()(n)).call.apply(e, [this].concat(r))), w()(_()(_()(t)), "onClickOnLegacyPage", function(e) {
							var n = t.props,
								a = n.writesDisabled,
								r = n.rental;
							a || N({
								event: e,
								rentalId: r.id
							})
						}), t
					}
					return g()(n, e), s()(n, [{
						key: "render",
						value: function e() {
							var n = this.props,
								t = n.canReceiveInquiries,
								r = n.responsiveOnNarrowScreen,
								l = n.writesDisabled;
							return t ? null : null
						}
					}]), n
				}(a.Component),
				A = function e(n) {
					return a.createElement("div", {
						className: n.isDesktop ? "vr-rental-detail-owner-RentalDetailOwnerComponents__title--7pZV_" : "responsivePdpOwnerTitle"
					}, Object(y.localize)("vr_about_the_owner", {
						0: n.managerType
					}))
				},
				z = t("@ta/common.client"),
				j = function e(n) {
					return a.createElement("div", {
						className: n.className
					}, n.children, a.createElement("div", {
						className: "vr-rental-detail-owner-MachineTranslatorComponent__machineTranslator--zQcYg",
						dangerouslySetInnerHTML: {
							__html: function e() {
								return "MACHINE_BING" === n.machineTranslator || "MACHINE_TRANSLATED" === n.machineTranslator ? Object(y.localize)("mtprovider_attribution_microsoft") : "MACHINE_GOOGLE" === n.machineTranslator ? Object(y.localize)("powered_by_img_provider", {
									0: "https://www.google.com/uds/css/small-logo.png",
									1: "Google"
								}) : null
							}()
						}
					}), a.createElement("div", {
						className: "vr-rental-detail-owner-MachineTranslatorComponent__machineTranslatorClear--37gUE"
					}))
				},
				q = {
					hostingStyleContainer: "vr-rental-detail-owner-OwnerHostingStyle__hostingStyleContainer--oiSZ_",
					hostingStyleTitle: "vr-rental-detail-owner-OwnerHostingStyle__hostingStyleTitle--2QFBg",
					hostingStyleBody: "vr-rental-detail-owner-OwnerHostingStyle__hostingStyleBody--30Uln",
					showLessLink: "vr-rental-detail-owner-OwnerHostingStyle__showLessLink--JDhSP"
				},
				B = 800,
				G = function(e) {
					function n(e) {
						var t;
						return o()(this, n), t = m()(this, u()(n).call(this, e)), w()(_()(_()(t)), "hostingStyleWithMachineTranslator", function() {
							var e = t.props.machineTranslatedSourceLang && t.props.descriptionLang && t.props.isMachineTranslatedMarkupFeatureEnabled && t.props.isIndexable ? "".concat(t.props.descriptionLang, "-x-mtfrom-").concat(t.props.machineTranslatedSourceLang) : null;
							return a.createElement(j, {
								machineTranslator: t.props.machineTranslator,
								className: q.hostingStyleContainer
							}, a.createElement("div", null, a.createElement("span", {
								className: "hosting_style_content"
							}, Object(y.localize)("vr_interaction_with_guests")), a.createElement("span", {
								className: "hostingStyleText",
								lang: e
							}, t.props.hostingStyle)))
						}), w()(_()(_()(t)), "showTextLinkTweaked", function() {
							t.setState({
								showMoreStyle: !t.state.showMoreStyle
							})
						}), w()(_()(_()(t)), "showHostingStyle", function(e, n) {
							return n.length < e ? a.createElement("div", {
								className: q.hostingStyleBody
							}, n) : a.createElement("div", {
								className: q.hostingStyleBody
							}, t.state.showMoreStyle ? a.createElement("span", null, n.substring(0, e), "...", a.createElement("a", {
								onClick: t.showTextLinkTweaked
							}, Object(y.localize)("vacation_rental_more")), a.createElement("span", {
								style: {
									display: "none"
								}
							}, n)) : a.createElement("span", null, n, a.createElement("span", {
								className: q.showLessLink
							}, a.createElement("a", {
								onClick: t.showTextLinkTweaked
							}, Object(y.localize)("vacation_rental_less")))))
						}), w()(_()(_()(t)), "renderHostingStyle", function() {
							return t.props.isMachineTranslated && t.props.hostingStyle && t.props.hostingStyle.length > 0 ? t.props.isMachineTranslatedMarkupFeatureEnabled && t.props.isIndexable ? t.hostingStyleWithMachineTranslator() : a.createElement(z.ClientOnly, null, t.hostingStyleWithMachineTranslator()) : !t.props.isMachineTranslated && t.props.hostingStyle && t.props.hostingStyle.length > 0 ? a.createElement("div", {
								className: q.hostingStyleContainer
							}, a.createElement("span", {
								className: q.hostingStyleTitle
							}, Object(y.localize)("vr_interaction_with_guests"), ": "), t.showHostingStyle(B, t.props.hostingStyle)) : null
						}), t.state = {
							showMoreStyle: !0
						}, t
					}
					return g()(n, e), s()(n, [{
						key: "render",
						value: function e() {
							return a.createElement("div", {
								className: "ownerHostingStyle"
							}, this.renderHostingStyle())
						}
					}]), n
				}(a.Component),
				Y = t("@ta/vr.common"),
				V = function e(n) {
					var t = n.rental.hostingStyle && n.rental.hostingStyle.length;
					return a.createElement("div", {
						className: "vr-rental-detail-owner-rental-detail-owner__aboutTheOwnerNew--3Y5Yr"
					}, a.createElement(Y.SectionHeader, {
						title: Object(y.localize)("vr_about_the_owner", {
							0: n.rentalManager.typeValue
						})
					}), a.createElement("div", {
						className: "vr-rental-detail-owner-rental-detail-owner__ownerInfoSection--1xT9B"
					}, a.createElement("div", {
						className: "vr-rental-detail-owner-rental-detail-owner__leftRail--1tWMX"
					}, a.createElement(P, {
						photoUrl: n.rental.managerPhotoUrl,
						thumbnailUrl: n.rental.thumbnailUrl,
						overrideAltText: n.rental.overidePartnerImageAltText
					}), a.createElement(U, {
						managerName: n.rentalManager.name,
						managerInfo: n.rentalManager,
						rentalInfo: n.rental,
						showManageLink: !t
					}))), a.createElement(G, {
						isMachineTranslated: n.rental.isMachineTranslatedHostingStyle,
						isIndexable: n.rental.isIndexable,
						machineTranslatedSourceLang: n.rental.descriptions.HOSTING_STYLE ? n.rental.descriptions.HOSTING_STYLE.machineTranslatedSourceLang : "",
						descriptionLang: n.rental.descriptions.HOSTING_STYLE ? n.rental.descriptions.HOSTING_STYLE.lang : "",
						isMachineTranslatedMarkupFeatureEnabled: n.rental.isMachineTranslatedMarkupFeatureEnabled,
						machineTranslator: n.rental.hostingStyleMachineTranslator,
						hostingStyle: n.rental.hostingStyle
					}), t && !n.rental.isAffiliate ? a.createElement(H, {
						seeMoreLink: n.rentalManager.obfuscatedLanderUrl
					}) : null, a.createElement(x, {
						responsiveOnNarrowScreen: !0,
						rental: n.rental,
						writesDisabled: n.readonlyMode,
						contactManagerUrl: n.rental.contactManagerUrl,
						canReceiveInquiries: n.rental.canReceiveInquiries,
						shouldOpenResponsiveInquiryForm: !0
					}))
				};
			t.d(n, "RentalOwnerSection", function() {
				return F
			}), t.d(n, "getOwnerData", function() {
				return W
			}), t.d(n, "RentalOwnerSectionV2", function() {
				return V
			});
			var F = function e(n) {
					var t = n.isDesktop ? "vr-rental-detail-owner-rental-detail-owner__aboutTheOwnerContainer--2NghB" : "section OwnerSection responsivePdpOwnerSection ".concat("vr-rental-detail-owner-rental-detail-owner__legacyMobile--EsgKw");
					return a.createElement("div", {
						className: t
					}, a.createElement("div", {
						className: "vr-rental-detail-owner-rental-detail-owner__aboutTheOwner--1Px_V"
					}, a.createElement(A, {
						managerType: n.rentalManager.typeValue,
						isDesktop: n.isDesktop
					}), a.createElement("div", {
						className: "vr-rental-detail-owner-rental-detail-owner__ownerInfoSection--1xT9B"
					}, a.createElement("div", {
						className: "vr-rental-detail-owner-rental-detail-owner__leftRail--1tWMX"
					}, a.createElement(P, {
						photoUrl: n.rental.managerPhotoUrl,
						thumbnailUrl: n.rental.thumbnailUrl,
						overrideAltText: n.rental.overidePartnerImageAltText
					}), a.createElement(U, {
						managerName: n.rentalManager.name,
						managerInfo: n.rentalManager,
						rentalInfo: n.rental
					})), a.createElement(x, {
						rental: n.rental,
						writesDisabled: n.readonlyMode,
						contactManagerUrl: n.rental.contactManagerUrl,
						canReceiveInquiries: n.rental.canReceiveInquiries,
						responsiveOnNarrowScreen: !1
					})), a.createElement(G, {
						isMachineTranslated: n.rental.isMachineTranslatedHostingStyle,
						machineTranslatedSourceLang: n.rental.descriptions.HOSTING_STYLE ? n.rental.descriptions.HOSTING_STYLE.machineTranslatedSourceLang : "",
						descriptionLang: n.rental.descriptions.HOSTING_STYLE ? n.rental.descriptions.HOSTING_STYLE.lang : "",
						isMachineTranslatedMarkupFeatureEnabled: n.rental.isMachineTranslatedMarkupFeatureEnabled,
						isIndexable: n.rental.isIndexable,
						machineTranslator: n.rental.hostingStyleMachineTranslator,
						hostingStyle: n.rental.hostingStyle
					}), a.createElement(H, {
						seeMoreLink: n.rentalManager.obfuscatedLanderUrl,
						hasHostingStyle: n.rental.hostingStyle && n.rental.hostingStyle.length > 0
					}), a.createElement(x, {
						responsiveOnNarrowScreen: !0,
						rental: n.rental,
						writesDisabled: n.readonlyMode,
						contactManagerUrl: n.rental.contactManagerUrl,
						canReceiveInquiries: n.rental.canReceiveInquiries
					})))
				},
				W = Object(r.bind)(function(e, n) {
					var t = n("/data/1.0/vr/rental/".concat(e.page.detailId));
					return function() {
						return {
							rental: t.get().data,
							rentalId: e.page.detailId,
							readonlyMode: e.meta.readonlyMode,
							isDesktop: !1
						}
					}
				})(function e(n) {
					return n.rental && n.rental.propertyManager && a.createElement(F, {
						rentalManager: n.rental.propertyManager,
						rental: n.rental,
						rentalId: n.rentalId,
						readonlyMode: n.readonlyMode,
						isDesktop: n.isDesktop
					})
				})
		}
	}
});

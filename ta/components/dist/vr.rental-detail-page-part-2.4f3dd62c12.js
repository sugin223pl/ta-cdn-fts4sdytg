($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "vr.rental-detail-page-part-2",
	d: ["vendor-babel", "vendor-react-libs", "ta-platform", "@ta/vr.map", "@ta/vr.rental-availability", "lithium-platform", "@ta/vr.common", "@ta/vr.rates-section", "@ta/vr.recommendations", "@ta/vr.owner-solicitation", "@ta/vr.more-destinations", "@ta/vr.payment-protection", "@ta/vr.listing-number", "@ta/vr.rental-detail-faqs", "@ta/vr.amenities", "@ta/common.location-detail-tag-questions"],
	e: ["./roots/vr/rental-detail-page-part-2/rental-detail-page-part-2.jsx"],
	x: {
		"./roots/vr/rental-detail-page-part-2/rental-detail-page-part-2.jsx": ["default"]
	},
	m: {
		"./roots/vr/rental-detail-page-part-2/rental-detail-page-part-2.jsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("@babel/runtime/helpers/esm/objectSpread"),
				r = a.n(n),
				l = a("react"),
				i = a("@ta/common.api"),
				o = a("@ta/vr.map"),
				c = a("@ta/vr.rental-availability"),
				d = a.n(c),
				s = a("@ta/common.i18n"),
				m = a("@ta/common.features"),
				v = a("@ta/vr.common"),
				p = a("@ta/vr.rates-section"),
				u = a.n(p),
				g = a("@ta/vr.recommendations"),
				E = a("@ta/vr.owner-solicitation"),
				f = a.n(E),
				b = a("@ta/vr.more-destinations"),
				_ = a("@ta/vr.payment-protection"),
				y = a("@ta/vr.listing-number"),
				h = a.n(y),
				w = a("@ta/vr.rental-detail-faqs"),
				S = a.n(w),
				j = a("@ta/vr.amenities"),
				O = a("@ta/common.location-detail-tag-questions"),
				L = a.n(O),
				P = {
					monthRowsWhileCollapsed: 2,
					monthRowsWhileExpanded: 6
				},
				x = function e(t) {
					return "TABLET" === t ? r()({
						monthsPerRow: 2
					}, P) : r()({
						monthsPerRow: 3
					}, P)
				},
				A = Object(i.bind)(function(e, t) {
					L.a.stage(e, t);
					var a = e.route,
						n = a.detail,
						r = a.geo,
						l = t("".concat("/data/1.0/vr/rental/").concat(n)),
						i = t("/data/1.0/vr/rental/calendarData/".concat(n)),
						o = t("".concat("/data/1.0/vr/similarGeos", "/").concat(r));
					return function() {
						return {
							rental: l.get().data,
							calendarData: i.get().data,
							destinations: o.get().data,
							loading: l.get().loading || i.get().loading || o.get().loading,
							deviceType: e.meta.device.viewportCategory,
							specialLocaleForFAQs: e.i18n.locale.replace("_", "-").toLocaleLowerCase()
						}
					}
				})(function e(t) {
					var a = t.rental,
						n = t.calendarData,
						r = t.deviceType,
						i = t.destinations,
						c = t.specialLocaleForFAQs;
					if (!a || !n) return null;
					var p = "MOBILE" === r,
						E = p && "ASSISTED_BOOK" !== a.businessInfo.tipType;
					return l.createElement("div", null, l.createElement("div", {
						className: "vr-rental-detail-page-part-2-pageStyles__container--25IBx"
					}, l.createElement("div", {
						id: "vr-detail-page-amenities"
					}, l.createElement(j.Amenities, {
						rental: a
					})), l.createElement(L.a, null), p ? null : l.createElement("div", {
						id: "vr-detail-page-availability"
					}, l.createElement(v.SectionHeader, {
						title: Object(s.localize)("vr_detail_anchorAvailability_171f")
					}), l.createElement(d.a, {
						availability: n,
						displayMonthCounts: x(r)
					}), Object(m.featureIsEnabled)("vr_rates_table_from_pdp_disable") ? null : l.createElement(u.a, {
						className: "vr-rental-detail-page-part-2-pageStyles__rateSection--2uNi1",
						rental: a
					})), l.createElement("div", {
						id: "vr-detail-page-map"
					}, l.createElement(o.MapSection, {
						rental: a,
						device: r,
						showHeader: !0
					})), E ? l.createElement(_.PaymentProtection, null) : null, p ? null : l.createElement("div", null, null, l.createElement(S.a, {
						rental: a,
						locale: c
					})), l.createElement(g.ConnectedRecommendations, null), i ? l.createElement("div", null, l.createElement(b.MoreDestinations, {
						destinations: i
					})) : null, l.createElement(f.a, {
						listingButtonOnclick: function e() {
							window.location = a.listingLink
						}
					}), l.createElement(h.a, {
						rental: a,
						viewportCategory: r
					})))
				});
			t.default = A
		}
	}
});
//# sourceMappingURL=vr.rental-detail-page-part-2.4f3dd62c12.js.map

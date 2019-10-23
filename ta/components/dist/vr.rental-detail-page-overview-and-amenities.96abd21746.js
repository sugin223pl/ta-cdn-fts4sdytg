($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "vr.rental-detail-page-overview-and-amenities",
	d: ["vendor-react-libs", "@ta/vr.overview", "ta-platform", "@ta/vr.rental-detail-owner", "ta-common", "@ta/vr.inquiry"],
	e: ["./roots/vr/rental-detail-page-overview-and-amenities/rental-detail-page-overview-and-amenities.jsx"],
	x: {
		"./roots/vr/rental-detail-page-overview-and-amenities/rental-detail-page-overview-and-amenities.jsx": ["default"]
	},
	m: {
		"./roots/vr/rental-detail-page-overview-and-amenities/rental-detail-page-overview-and-amenities.jsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("react"),
				r = t("@ta/vr.overview"),
				i = t.n(r),
				o = t("@ta/common.api"),
				l = t("@ta/vr.rental-detail-owner"),
				d = t("@ta/overlays.managers"),
				v = t("@ta/vr.inquiry"),
				c = Object(o.bind)(function(e, a) {
					var t = e.route.detail,
						n = a("".concat("/data/1.0/vr/rental/").concat(t));
					return function() {
						return {
							rental: n.get().data,
							loading: n.get().loading,
							viewportCategory: e.meta.device.viewportCategory,
							readonlyMode: e.meta.readonlyMode,
							locationId: t
						}
					}
				})(function e(a) {
					var t = a.rental,
						r = a.viewportCategory,
						o = a.locationId,
						c = a.readonlyMode;
					return t ? n.createElement("div", {
						className: "vr-rental-detail-page-overview-and-amenities-pageStyles__container--bHTT5"
					}, n.createElement("div", {
						id: "vr-detail-page-overview"
					}, n.createElement(i.a, {
						rental: t,
						viewportCategory: r,
						handleSendToFriendClick: function e() {
							! function a(e) {
								window.location = "mailto:name@example.com"
							}(o)
						}
					})), n.createElement(d.Opener, {
						name: v.MODAL_ID
					}, function(e) {
						return n.createElement(l.RentalOwnerSectionV2, {
							rentalManager: t.propertyManager,
							rental: t,
							rentalId: o,
							readonlyMode: c,
							onSendMessageClick: e
						})
					})) : null
				});
			a.default = c
		}
	}
});
//# sourceMappingURL=vr.rental-detail-page-overview-and-amenities.96abd21746.js.map

($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.legacy-rap-functions",
	d: ["ta-platform"],
	e: ["./packages/vr/legacy-rap-functions/legacy-rap-functions.jsx"],
	x: {
		"./packages/vr/legacy-rap-functions/legacy-rap-functions.jsx": ["runLegacyBookingRequestFlow", "legacyGoToMobileInquiryForm"]
	},
	m: {
		"./packages/vr/legacy-rap-functions/legacy-rap-functions.jsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "runLegacyBookingRequestFlow", function() {
				return r
			}), n.d(t, "legacyGoToMobileInquiryForm", function() {
				return i
			});
			var o = n("@ta/common.tracking"),
				a = 38329;

			function r(e, t) {
				var n = e.detailId,
					a = e.start,
					r = e.end,
					i = e.adults,
					c = e.tipQuoteToken,
					s = e.kids,
					u = e.partnerParams,
					l = new URLSearchParams;
				l.set("a", "SUBMIT_BOOKING_REQUEST"), l.set("locationId", n.toString()), l.set("arrive", a), l.set("depart", r), l.set("inquiryAdults", i.toString()), l.set("tipQuoteToken", c), u && (l.set("partnerReference", u.partnerReference), l.set("partnerReferrerId", u.referrerId)), s && s > 0 && l.set("numOfKids", s.toString()), fetch(asset_path + "/VacationRentalsAjax?".concat(l.toString()), {
					method: "GET",
					credentials: "same-origin"
				}).then(function(e) {
					return e.ok ? e.text() : Promise.reject(new Error("failed to get booking request quote!"))
				}).then(function(e) {
					! function n(e, t) {
						var n = new URLSearchParams;
						n.set("quoteId", e);
						var a = app_url + "/BookingRequest";
						t ? t(a) : Object(o.trackEventCookie)({
							module: "VR_RAP_WEB_COMPONENT",
							action: "VR_Book_Now_VRR",
							destinationUrl: a
						}), window.location = a
					}(e, t)
				}).catch(function(e) {
					throw location.reload(), e
				})
			}

			function i(e) {
				var t = "/MobileVacationRentalInquiry-d".concat(e, "-aLOAD_FORM-p").concat(a);
				Object(o.trackEventCookie)({
					module: "VR_RAP_WEB_COMPONENT",
					action: "VR_Make_Inquiry_VRR",
					destinationUrl: t
				}, void 0), window.location = t
			}
		}
	}
});
//# sourceMappingURL=vr.legacy-rap-functions.b21c32ba39.js.map

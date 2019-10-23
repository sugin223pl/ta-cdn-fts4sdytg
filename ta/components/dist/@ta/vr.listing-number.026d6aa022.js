($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.listing-number",
	d: ["vendor-react-libs", "@ta/common.client", "lithium-platform"],
	e: ["./packages/vr/listing-number/ListingNumber.jsx"],
	x: {
		"./packages/vr/listing-number/ListingNumber.jsx": ["default"]
	},
	m: {
		"./packages/vr/listing-number/ListingNumber.jsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("react"),
				r = i("@ta/common.client"),
				a = i("@ta/common.i18n"),
				l = null;

			function o(e) {
				var t = "MOBILE" !== e.viewportCategory && "TABLET" !== e.viewportCategory;
				return true
			}
			i.d(t, "default", function() {
				return o
			})
		}
	}
});
//# sourceMappingURL=vr.listing-number.026d6aa022.js.map

($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.more-destinations",
	d: ["vendor-react-libs", "lithium-platform"],
	e: ["./packages/vr/more-destinations/more-destinations.jsx"],
	x: {
		"./packages/vr/more-destinations/more-destinations.jsx": ["MoreDestinations", "default"]
	},
	m: {
		"./packages/vr/more-destinations/more-destinations.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("react"),
				a = n("@ta/common.i18n"),
				i = function e(t) {
					var n = t.dest;
					return s.createElement("div", {
						//className: "vr-more-destinations-MoreDestinations__geoNameCell---QUqN"
					}, s.createElement("a", {
						//className: "vr-more-destinations-MoreDestinations__geoName--2-XjO",
						//href: n.url
					}, n.anchorText), s.createElement("span", {
						//className: "vr-more-destinations-MoreDestinations__destinationCount--257d5"
					}, " (".concat(n.localizedCount, ")")))
				},
				o = function e(t) {
					var n = t.destType,
						o = t.dests;
					return s.createElement("div", {
						//className: "vr-more-destinations-MoreDestinations__geoContainer--1pNvs"
					}, s.createElement("div", {
						//className: "vr-more-destinations-MoreDestinations__moreDestinations--N3fqB"
					}, Object(a.localize)("vr_similar_more_171f", {
						0: n
					})), s.createElement("div", {
						//className: "vr-more-destinations-MoreDestinations__geoNameContainer--12iit"
					}, o.map(function(e, t) {
						return s.createElement(i, {
							dest: e,
							key: "dest_".concat(t, "_").concat(e.anchorText)
						})
					})))
				},
				r = function e(t) {
					var n = t.destinations;
					return n ? s.createElement("div", null, Object.keys(n).map(function(e) {
						return s.createElement(o, {
							destType: e,
							dests: n[e],
							key: e
						})
					})) : null
				};
			n.d(t, "MoreDestinations", function() {
				return r
			}), t.default = {}
		}
	}
});
//# sourceMappingURL=vr.more-destinations.73dbb79381.js.map

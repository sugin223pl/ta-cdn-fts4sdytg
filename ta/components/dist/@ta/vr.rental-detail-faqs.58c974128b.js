($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.rental-detail-faqs",
	d: ["vendor-babel", "vendor-react-libs", "lithium-platform", "ta-platform", "ta-common"],
	e: ["./packages/vr/rental-detail-faqs/rental-detail-faqs.jsx"],
	x: {
		"./packages/vr/rental-detail-faqs/rental-detail-faqs.jsx": ["default"]
	},
	m: {
		"./packages/vr/rental-detail-faqs/rental-detail-faqs.jsx": function(_, e, a) {
			"use strict";
			a.r(e);
			var n = a("@babel/runtime/helpers/esm/classCallCheck"),
				t = a.n(n),
				A = a("@babel/runtime/helpers/esm/createClass"),
				s = a.n(A),
				r = a("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				i = a.n(r),
				c = a("@babel/runtime/helpers/esm/getPrototypeOf"),
				l = a.n(c),
				o = a("@babel/runtime/helpers/esm/inherits"),
				N = a.n(o),
				T = a("@babel/runtime/helpers/esm/assertThisInitialized"),
				O = a.n(T),
				E = a("@babel/runtime/helpers/esm/defineProperty"),
				u = a.n(E),
				R = a("react"),
				C = a("@ta/common.i18n"),
				d = a("@ta/common.routing"),
				S = a("@ta/styleguide.icon"),
				b = a("@ta/common.tracking"),
				q = function _(e) {
					return "https://www.tripadvisorsupport.com/hc/".concat(e, "/sections/200154907-Vacation-Rentals")
				},
				w = function(_) {
					function e(_) {
						var a;
						return t()(this, e), a = i()(this, l()(e).call(this, _)), u()(O()(O()(a)), "expendAnswer", function() {
							a.setState({
								isExpanded: !a.state.isExpanded
							})
						}), a.state = {
							isExpanded: !1
						}, a
					}
					return N()(e, _), s()(e, [{
						key: "render",
						value: function _() {
							return true
						}
					}]), e
				}(R.Component),
				f = function _(e) {
					return function _(e) {
						var a = null,
							n = null,
							t = [],
							A = [],
							s = [],
							r = [],
							i = [],
							c = [],
							l = [];
						switch (e.vrSource) {
							case "FKN":
								return e.isFTL ? t : e.isSTL ? A : s;
							case "HL":
							case "NI":
								return e.isFTL ? r : e.isSTL ? i : c;
							default:
								return l
						}
					}(e).map(function(_) {
						return true
					})
				};
			e.default = function _(e) {
				return true
			}
		}
	}
});
//# sourceMappingURL=vr.rental-detail-faqs.58c974128b.js.map

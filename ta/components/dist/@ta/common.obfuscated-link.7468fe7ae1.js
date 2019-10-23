($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/common.obfuscated-link",
	d: ["vendor-babel", "vendor-react-libs", "lithium-platform", "ta-platform"],
	e: ["./packages/common/obfuscated-link/ObfuscatedLink.jsx"],
	x: {
		"./packages/common/obfuscated-link/ObfuscatedLink.jsx": ["default"]
	},
	m: {
		"./packages/common/obfuscated-link/ObfuscatedLink.jsx": function(e, n, r) {
			"use strict";
			r.r(n);
			var a = r("@babel/runtime/helpers/esm/slicedToArray"),
				s = r.n(a),
				t = r("@babel/runtime/helpers/esm/classCallCheck"),
				o = r.n(t),
				l = r("@babel/runtime/helpers/esm/createClass"),
				c = r.n(l),
				i = r("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				p = r.n(i),
				m = r("@babel/runtime/helpers/esm/getPrototypeOf"),
				u = r.n(m),
				d = r("@babel/runtime/helpers/esm/inherits"),
				f = r.n(d),
				b = r("@babel/runtime/helpers/esm/assertThisInitialized"),
				h = r.n(b),
				k = r("@babel/runtime/helpers/esm/defineProperty"),
				g = r.n(k),
				v = r("react"),
				y = r("@ta/common.classnames"),
				C = r.n(y),
				P = r("@ta/common.decode"),
				A = r.n(P),
				L = function(e) {
					function n() {
						var e, r;
						o()(this, n);
						for (var a = arguments.length, t = new Array(a), l = 0; l < a; l++) t[l] = arguments[l];
						return r = p()(this, (e = u()(n)).call.apply(e, [this].concat(t))), g()(h()(h()(r)), "addQueryParamsAndfragment", function(e) {
							var n = e;
							if (r.props.urlArgs) {
								var a = r.props.urlArgs,
									t = e.split("?"),
									o = s()(t, 2),
									l = o[0],
									c = o[1],
									i = new URLSearchParams(c);
								Object.keys(a).forEach(function(e) {
									i.set(e, a[e])
								}), n = "".concat(l, "?").concat(i.toString())
							}
							return "".concat(n).concat(r.props.fragment ? "#".concat(r.props.fragment) : "")
						}), g()(h()(h()(r)), "openLink", function() {
							var e = r.props.encodedUrl ? A()(r.props.encodedUrl) : "";
							"" !== e && (e = r.addQueryParamsAndfragment(e), window.open(e, r.props.target).opener = null)
						}), g()(h()(h()(r)), "handleClick", function(e) {
							r.props.onClick && r.props.onClick(e), r.openLink()
						}), r
					}
					return f()(n, e), c()(n, [{
						key: "render",
						value: function e() {
							return v.createElement(this.props.useSpan ? "span" : "div", {
								className: C()("_2wKz--mA", this.props.className),
								//onClick: this.handleClick,
								"data-encoded-url": this.props.encodedUrl
							}, this.props.children)
						}
					}]), n
				}(v.Component);
			g()(L, "defaultProps", {
				target: "_self",
				children: null,
				className: void 0,
				useSpan: !1,
				fragment: ""
			}), n.default = L
		}
	}
});
//# sourceMappingURL=common.obfuscated-link.7468fe7ae1.js.map

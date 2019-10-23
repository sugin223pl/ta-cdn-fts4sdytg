($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "vr.rental-detail-page-nav",
	d: ["vendor-babel", "vendor-react-libs", "ta-platform", "lithium-platform"],
	e: ["./roots/vr/rental-detail-page-nav/rental-detail-page-nav.jsx"],
	x: {
		"./roots/vr/rental-detail-page-nav/rental-detail-page-nav.jsx": ["default"]
	},
	m: {
		"./roots/vr/rental-detail-page-nav/rental-detail-page-nav.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("@babel/runtime/helpers/esm/classCallCheck"),
				i = n.n(r),
				a = n("@babel/runtime/helpers/esm/createClass"),
				o = n.n(a),
				c = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				l = n.n(c),
				s = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				v = n.n(s),
				u = n("@babel/runtime/helpers/esm/inherits"),
				d = n.n(u),
				p = n("@babel/runtime/helpers/esm/assertThisInitialized"),
				m = n.n(p),
				b = n("@babel/runtime/helpers/esm/defineProperty"),
				h = n.n(b),
				f = n("react"),
				g = n("@ta/common.api"),
				_ = n("@ta/common.i18n"),
				S = n("@ta/common.tracking"),
				y = n.n(S),
				I = function e(t) {
					var n = t.text,
						r = t.id,
						i = t.currentSectionId,
						a = t.trackingAction,
						o = r === i;
					return f.createElement(S.ClickTracker, {
						module: "VR_Content_Bar",
						action: a
					}, f.createElement("div", {
						onClick: function e() {
							var t = document.querySelector("#".concat(r));
							t && window.scroll({
								top: t.offsetTop,
								behavior: "smooth"
							})
						},
						className: "".concat("vr-rental-detail-page-nav-pieces-Section__section--1RoeV", " ").concat(o ? "vr-rental-detail-page-nav-pieces-Section__activeSection--21u1t" : "")
					}, n))
				};
			I.defaultProps = {
				currentSectionId: null
			};
			for (var E, R = I, w = "vr-detail-page-availability", A = "vr-detail-page-map", k = [], O = 0; O <= 1; O += .1) k.push(O);
			var C = ["vr-detail-page-overview", "vr-detail-page-amenities", "REVIEWS", w, A],
				V = (E = {}, h()(E, "vr-detail-page-overview", "Overview"), h()(E, "vr-detail-page-amenities", "Amenities"), h()(E, "REVIEWS", "Reviews"), h()(E, w, "Availability"), h()(E, A, "Map"), E),
				x = function e(t) {
					return "VR_Content_Bar_".concat(V[t], "_Click_VRR")
				},
				j = function e(t) {
					return "VR_Content_Bar_".concat(V[t], "_Scroll_VRR")
				};

			function B(e, t) {
				if (t) {
					var n = document.querySelector("#".concat(e));
					n && t.observe(n)
				}
			}
			var P = function(e) {
					function t() {
						var e, n;
						i()(this, t);
						for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
						return n = l()(this, (e = v()(t)).call.apply(e, [this].concat(a))), h()(m()(m()(n)), "state", {
							currentSectionId: "",
							intersectionRatioBySection: {}
						}), h()(m()(m()(n)), "onObservation", function(e) {
							var t = n.state.intersectionRatioBySection;
							e.forEach(function(e) {
								var n = e.target.id;
								t[n] = e.intersectionRatio
							});
							var r = n.getCurrentSectionId(t);
							n.setState({
								currentSectionId: r,
								intersectionRatioBySection: t
							})
						}), h()(m()(m()(n)), "observer", null), n
					}
					return d()(t, e), o()(t, [{
						key: "componentDidMount",
						value: function e() {
							if (this.props.useObserver) {
								var t = new IntersectionObserver(this.onObservation, {
									threshold: k
								});
								t.POLL_INTERVAL = 100, C.forEach(function(e) {
									B(e, t)
								}), this.observer = t
							}
						}
					}, {
						key: "componentDidUpdate",
						value: function e(t, n) {
							var r = this;
							t.showAvailability !== this.props.showAvailability && this.props.useObserver && this.props.showAvailability && this.observer && setTimeout(function() {
								B(w, r.observer)
							}, 300), n.currentSectionId !== this.state.currentSectionId && this.state.currentSectionId && y()({
								module: "VR_Content_Bar",
								action: j(this.state.currentSectionId)
							})
						}
					}, {
						key: "getCurrentSectionId",
						value: function e(t) {
							var n = this,
								r = C.filter(function(e) {
									return !(!t[e] || !n.props.showAvailability && e === w)
								}).reverse().sort(function(e, n) {
									return t[e] - t[n]
								});
							return r[r.length - 1]
						}
					}, {
						key: "render",
						value: function e() {
							var t = this.state.currentSectionId,
								n = this.props.showAvailability;
							return f.createElement("div", {
								className: "vr-rental-detail-page-nav-Nav__container--2rigc"
							}, f.createElement(R, {
								text: Object(_.localize)("overview_common"),
								id: "vr-detail-page-overview",
								currentSectionId: t,
								trackingAction: x("vr-detail-page-overview")
							}), f.createElement(R, {
								text: Object(_.localize)("common_Reviews"),
								id: "REVIEWS",
								currentSectionId: t,
								trackingAction: x("REVIEWS")
							}), f.createElement(R, {
								text: Object(_.localize)("vr_amenities_short_100b"),
								id: "vr-detail-page-amenities",
								currentSectionId: t,
								trackingAction: x("vr-detail-page-amenities")
							}), n ? f.createElement(R, {
								text: Object(_.localize)("vr_detail_anchorAvailability_171f"),
								id: w,
								currentSectionId: t,
								trackingAction: x(w)
							}) : null, f.createElement(R, {
								text: Object(_.localize)("vr_detail_map_2015_map"),
								id: A,
								currentSectionId: t,
								trackingAction: x(A)
							}))
						}
					}]), t
				}(f.Component),
				W = Object(g.bind)(function(e) {
					return function() {
						return {
							showAvailability: "MOBILE" !== e.meta.device.viewportCategory,
							useObserver: "IE" !== e.meta.device.browser.family
						}
					}
				})(P);
			t.default = W
		}
	}
});
//# sourceMappingURL=vr.rental-detail-page-nav.07e5f386f1.js.map

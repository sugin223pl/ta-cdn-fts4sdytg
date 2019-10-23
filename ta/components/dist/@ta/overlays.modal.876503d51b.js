($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/overlays.modal",
	d: ["vendor-babel", "vendor-react-libs", "ta-common", "vendor-redux-libs", "lithium-platform", "@ta/events.keyboard-event-listener", "@ta/overlays.fullscreen-overlay", "@ta/overlays.pieces", "ta-platform", "@ta/common.client"],
	e: ["./packages/overlays/modal/index.jsx"],
	x: {
		"./packages/overlays/modal/Modal.jsx": ["a"],
		"./packages/overlays/modal/ModalView.jsx": ["a"],
		"./packages/overlays/modal/index.jsx": ["Modal", "ModalView", "ViewportRelativeModal", "DeprecatedRoutedModal", "DeprecatedModalLink", "RoutedModal"]
	},
	m: {
		"./packages/overlays/modal/Modal.jsx": function(e, o, n) {
			"use strict";
			var a = n("@babel/runtime/helpers/esm/extends"),
				r = n.n(a),
				t = n("@babel/runtime/helpers/esm/objectWithoutProperties"),
				l = n.n(t),
				s = n("react"),
				i = n("@ta/overlays.managers"),
				c = n("./packages/overlays/modal/ModalView.jsx");
			o.a = function e(o) {
				var n = o.name,
					a = o.onClose,
					t = l()(o, ["name", "onClose"]);
				return s.createElement(i.Closer, null, function(e) {
					return s.createElement(i.Global, {
						name: n
					}, s.createElement(c.a, r()({
						onClose: function o() {
							e(), a && a()
						}
					}, t)))
				})
			}
		},
		"./packages/overlays/modal/ModalView.jsx": function(e, o, n) {
			"use strict";
			var a = n("@babel/runtime/helpers/esm/extends"),
				r = n.n(a),
				t = n("@babel/runtime/helpers/esm/defineProperty"),
				l = n.n(t),
				s = n("@babel/runtime/helpers/esm/objectSpread"),
				i = n.n(s),
				c = n("react"),
				u = n("react-redux"),
				d = n("@ta/common.classnames"),
				m = n.n(d),
				p = n("@ta/events.keyboard-event-listener"),
				v = n.n(p),
				h = n("@ta/overlays.fullscreen-overlay"),
				f = n.n(h),
				y = n("@ta/overlays.pieces"),
				b = function e(o) {
					var n, a, t = i()({
							position: "fixed",
							top: o.overlayTop ? "".concat(o.overlayTop, "px") : "50%",
							left: "50%",
							transform: o.overlayTop ? "translate(-50%)" : "translate(-50%, -50%)"
						}, o.fixedHeight || o.buggyMode ? {
							height: "calc(100% - 4rem)"
						} : {}),
						s = i()({
							position: "fixed",
							top: o.overlayTop ? "".concat(o.overlayTop, "px") : "auto",
							left: "50%",
							bottom: "0",
							transform: "translate(-50%)"
						}, o.fixedHeight || o.buggyMode ? {
							height: "calc(100% - 4rem)"
						} : {}),
						u = {
							position: o.alignToBottom ? s : t
						},
						d = function e() {
							o.onClose && o.onClose()
						},
						p = m()("overlays-modal-ModalView__container--ApzbE", (n = {}, l()(n, "overlays-modal-ModalView__bodyScrollDisabled--1uF4_", !o.bodyScroll), l()(n, "overlays-modal-ModalView__overflowVisible--11wyM", o.overflowVisible), l()(n, "overlays-modal-ModalView__fullscreen--2ZQrO", o.fullscreen), l()(n, "overlays-modal-ModalView__roundedCorners--1UXGs", o.roundedCorners), l()(n, "overlays-modal-ModalView__unconstrainedHeight--CxHYu", o.unconstrainedHeight), n)),
						h = m()("overlays-modal-ModalView__bodyContent--1NwQs", (a = {}, l()(a, "overlays-modal-ModalView__fullBleed--3v73B", o.isFullBleed), l()(a, "overlays-modal-ModalView__noBodyPadding--3t-0H", o.noBodyPadding), a)),
						b = {};
					o.onDragOver && (b.onDragOver = o.onDragOver), o.onDragLeave && (b.onDragLeave = o.onDragLeave), o.onDrop && (b.onDrop = o.onDrop);
					var g = o.isNativeWebview,
						w = o.marginTop,
						C = null;
					g && w && (C = {
						marginTop: w
					});
					var M = c.createElement("div", {
						className: p,
						onScroll: function e() {
							o.onScroll && o.onScroll()
						},
						style: {
							backgroundColor: o.backgroundColor ? o.backgroundColor : "white"
						}
					}, g ? null : o.header, c.createElement("div", r()({
						className: h
					}, b, {
						style: C
					}), o.children), o.closeX && c.createElement(y.CloseX, {
						close: d,
						colorVariant: o.closeXColorVariant
					}));
					return o.fullscreen ? c.createElement(c.Fragment, null, c.createElement(f.a, null, M), c.createElement(v.a, {
						keyName: "Escape",
						callback: d
					})) : c.createElement(c.Fragment, null, c.createElement(y.BlockScroll, null), c.createElement(y.Backdrop, {
						close: d
					}, c.createElement(y.Overlay, u, M), c.createElement(v.a, {
						keyName: "Escape",
						callback: d
					})))
				};
			b.defaultProps = {
				fullscreen: !1,
				isFullBleed: !1,
				header: null,
				bodyScroll: !0,
				overflowVisible: !1,
				onClose: void 0,
				onDragOver: void 0,
				onDragLeave: void 0,
				onDrop: void 0,
				fixedHeight: !1,
				closeX: !0,
				closeXColorVariant: "TA_GREEN",
				isNativeWebview: !1,
				marginTop: void 0,
				overlayTop: void 0,
				alignToBottom: !1,
				noBodyPadding: !1,
				roundedCorners: !1,
				unconstrainedHeight: !1
			};
			var g = [9, 10],
				w = [9, 10],
				C = Object(u.connect)(function(e, o) {
					return i()({}, o, {
						fullscreen: o.fullscreenAlways || !o.disableFullscreenOnMobile && "MOBILE" === e.meta.device.viewportCategory,
						buggyMode: "SAFARI" === e.meta.device.browser.family && g.includes(e.meta.device.browser.majorVersion) || "IOS" === e.meta.device.os.family && w.includes(e.meta.device.os.majorVersion)
					})
				})(b);
			o.a = C
		},
		"./packages/overlays/modal/index.jsx": function(e, o, n) {
			"use strict";
			n.r(o);
			var a = n("./packages/overlays/modal/Modal.jsx"),
				r = n("./packages/overlays/modal/ModalView.jsx"),
				t = n("@babel/runtime/helpers/esm/objectWithoutProperties"),
				l = n.n(t),
				s = n("react"),
				i = function e(o) {
					var n = o.vh,
						r = o.vw,
						t = l()(o, ["vh", "vw"]);
					return s.createElement(a.a, t, s.createElement("div", {
						style: {
							height: "".concat(n, "vh"),
							width: "".concat(r, "vw")
						}
					}, o.children))
				};
			i.defaultProps = {
				vh: 70,
				vw: 80
			};
			var c = i,
				u = n("@babel/runtime/helpers/esm/extends"),
				d = n.n(u),
				m = n("@babel/runtime/helpers/esm/objectSpread"),
				p = n.n(m),
				v = n("@babel/runtime/helpers/esm/classCallCheck"),
				h = n.n(v),
				f = n("@babel/runtime/helpers/esm/createClass"),
				y = n.n(f),
				b = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				g = n.n(b),
				w = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				C = n.n(w),
				M = n("@babel/runtime/helpers/esm/inherits"),
				E = n.n(M),
				k = n("@babel/runtime/helpers/esm/assertThisInitialized"),
				x = n.n(k),
				O = n("@babel/runtime/helpers/esm/defineProperty"),
				V = n.n(O),
				_ = n("@ta/common.routing"),
				D = n("@ta/overlays.managers"),
				j = function(e) {
					function o() {
						var e, n;
						h()(this, o);
						for (var a = arguments.length, r = new Array(a), t = 0; t < a; t++) r[t] = arguments[t];
						return n = g()(this, (e = C()(o)).call.apply(e, [this].concat(r))), V()(x()(x()(n)), "resetRoute", function(e) {
							var o = n.props.route,
								a = o.modal,
								r = l()(o, ["modal"]);
							a === n.props.name && n.props.navigate(r, {
								reset: e
							})
						}), V()(x()(x()(n)), "updateRoute", function() {
							n.props.route.modal !== n.props.name && n.props.navigate(p()({}, n.props.route, {
								modal: n.props.name
							}))
						}), n
					}
					return E()(o, e), y()(o, [{
						key: "componentDidMount",
						value: function e() {
							this.props.route.modal !== this.props.name || this.props.isOpen || this.props.open()
						}
					}, {
						key: "componentDidUpdate",
						value: function e(o) {
							!o.isOpen && this.props.isOpen ? this.updateRoute() : o.isOpen && !this.props.isOpen ? this.resetRoute(!0) : this.props.route.modal !== this.props.name && this.props.isOpen && this.props.close()
						}
					}, {
						key: "componentWillUnmount",
						value: function e() {
							this.props.isOpen && this.props.close()
						}
					}, {
						key: "render",
						value: function e() {
							var o = this.props,
								n = (o.children, o.route, o.navigate, o.open, o.isOpen, o.close, l()(o, ["children", "route", "navigate", "open", "isOpen", "close"]));
							return s.createElement(a.a, n, this.props.children)
						}
					}]), o
				}(s.Component),
				R = function e(o) {
					var n = o.name,
						a = o.username,
						r = o.onClick,
						t = l()(o, ["name", "username", "onClick"]);
					return s.createElement(D.Opener, {
						name: n
					}, function(e) {
						return s.createElement(_.RouteConsumer, null, function(o) {
							var l = o.route;
							return s.createElement(_.Link, d()({
								to: p()({}, l, {
									modal: n,
									username: a
								}),
								onClick: function o(n) {
									e(), r && r(n)
								}
							}, t))
						})
					})
				};
			R.defaultProps = {
				children: null,
				className: "",
				activeClassName: "",
				title: void 0
			};
			var P = function e(o) {
					var n = o.children,
						a = l()(o, ["children"]);
					return s.createElement(D.Opener, {
						name: a.name
					}, function(e, o) {
						return s.createElement(D.Closer, null, function(r) {
							return s.createElement(_.RouteConsumer, null, function(t) {
								var l = t.route,
									i = t.navigate;
								return s.createElement(j, d()({}, a, {
									route: l,
									navigate: i,
									open: e,
									isOpen: o,
									close: r
								}), n)
							})
						})
					})
				},
				T = n("@ta/common.client"),
				B = function(e) {
					function o() {
						var e, n;
						h()(this, o);
						for (var a = arguments.length, r = new Array(a), t = 0; t < a; t++) r[t] = arguments[t];
						return n = g()(this, (e = C()(o)).call.apply(e, [this].concat(r))), V()(x()(x()(n)), "closeModal", function() {
							var e, o, a = n.props,
								r = a.path,
								t = a.navigate,
								l = a.route,
								s = a.onClose;
							if (null === (e = window) || void 0 === e ? void 0 : null === (o = e.history) || void 0 === o ? void 0 : o.state) t(l, {
								reset: !0
							});
							else {
								var i = p()({}, l);
								Object.keys(r).forEach(function(e) {
									delete i[e]
								}), t(i)
							}
							s && s()
						}), n
					}
					return E()(o, e), y()(o, [{
						key: "render",
						value: function e() {
							var o = this.props,
								n = o.path,
								a = (o.route, o.navigate, o.onClose, l()(o, ["path", "route", "navigate", "onClose"]));
							return s.createElement(_.Match, n, s.createElement(r.a, d()({
								onClose: this.closeModal
							}, a)))
						}
					}]), o
				}(s.Component),
				S = function e(o) {
					var n = o.path,
						a = l()(o, ["path"]);
					return s.createElement(_.RouteConsumer, null, function(e) {
						var o = e.route,
							r = e.navigate;
						return s.createElement(T.ClientOnly, null, s.createElement(B, d()({}, a, {
							path: n,
							route: o,
							navigate: r
						})))
					})
				};
			n.d(o, "Modal", function() {
				return a.a
			}), n.d(o, "ModalView", function() {
				return r.a
			}), n.d(o, "ViewportRelativeModal", function() {
				return c
			}), n.d(o, "DeprecatedRoutedModal", function() {
				return P
			}), n.d(o, "DeprecatedModalLink", function() {
				return R
			}), n.d(o, "RoutedModal", function() {
				return S
			})
		}
	}
});
//# sourceMappingURL=overlays.modal.876503d51b.js.map

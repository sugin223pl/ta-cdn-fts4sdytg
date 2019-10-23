($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "ta-common",
	d: ["vendor-babel", "vendor-react-libs", "lithium-platform", "@ta/common.image-preloader", "ta-platform", "@ta/events.lifecycle", "@ta/input.drop-zone", "vendor-redux-libs", "react-transition-group", "@ta/overlays.pieces"],
	e: ["527f7"],
	p: {
		"@ta/media.image": "./packages/media/image/image.jsx",
		"@ta/media.common": "./packages/media/common/common.jsx",
		"@ta/loading.error": "./packages/loading/error/index.js",
		"@ta/failover.readonly": "./packages/failover/readonly/index.jsx",
		"@ta/styleguide.bubble-rating": "./packages/styleguide/bubble-rating/index.jsx",
		"@ta/styleguide.icon": "./packages/styleguide/icon/index.jsx",
		"@ta/styleguide.loading": "./packages/styleguide/loading/index.jsx",
		"@ta/styleguide.avatar": "./packages/styleguide/avatar/index.jsx",
		"@ta/styleguide.button": "./packages/styleguide/button/Button.jsx",
		"@ta/common.string": "./packages/common/string/string.jsx",
		"@ta/overlays.managers": "./packages/overlays/managers/managers.jsx"
	},
	x: {
		"./packages/common/string/string.jsx": ["inputLength", "stringHash", "uuid"],
		"./packages/failover/readonly/index.jsx": ["HideOnReadonly"],
		"./packages/loading/error/index.js": ["LoadingErrorMessage", "LoadingErrorBanner", "RenderErrorBanner"],
		"./packages/media/common/common.jsx": ["getImageDimensions", "getGeoPointFromExif", "base64ToUint8Array", "cropImageToJpegUrl", "orientationValueToDegrees", "photoOrientation", "rotateImageIfNeeded", "mediaType", "checkMediaReady", "getImageDataURL", "restoreExifAndRotateIfNeeded", "getVideoTrackingModule", "getSizeWithMostPixels", "supportedImageTypes", "supportedVideoTypes", "boundNumber", "Point", "Dimension", "VideoPlayerProvider", "VideoPlayerConsumer", "ActionTypes", "getMediaFilterToRetrieveAllPhotos", "getMediaFilterToRetrieveDefaultPhotos"],
		"./packages/media/image/LazyImage.jsx": ["a"],
		"./packages/media/image/image.jsx": ["ResponsiveImage", "pickSourceForSize", "LazyImage", "LazyBackgroundImage", "ResponsiveDefaultImage"],
		"./packages/overlays/managers/Local.jsx": ["a"],
		"./packages/overlays/managers/Opener.jsx": ["a"],
		"./packages/overlays/managers/managers.jsx": ["Closer", "Opener", "Global", "Local", "AutoOpener"],
		"./packages/styleguide/avatar/index.jsx": ["Avatar"],
		"./packages/styleguide/bubble-rating/index.jsx": ["BubbleRating", "BubbleRatingWithReviewCount", "BubbleRatingWithLinkedReviewCount", "BubbleRatingWithLabel"],
		"./packages/styleguide/button/Button.jsx": ["default"],
		"./packages/styleguide/icon/Icon.jsx": ["a"],
		"./packages/styleguide/icon/index.jsx": ["Icon", "IconStacked", "T4BIcon"],
		"./packages/styleguide/loading/index.jsx": ["LoadingBar", "LoadingBubbles", "LoadingSpinner"]
	},
	m: {
		"./packages/common/string/string.jsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "inputLength", function() {
				return a
			}), n.d(t, "stringHash", function() {
				return r
			}), n.d(t, "uuid", function() {
				return i
			});
			var a = function e(t) {
					if (!t) return 0;
					for (var n = 0, a = t.length - 1; a >= 0; a--) {
						n += 1;
						var r = t.charCodeAt(a);
						(r >= 19968 && r <= 40959 || r >= 12352 && r <= 12543 || r >= 44032 && r <= 55295) && (n += 1)
					}
					return n
				},
				r = function e(t) {
					for (var n = 5381, a = t.length; a;) n = 33 * n ^ t.charCodeAt(--a);
					return n >>> 0
				},
				i = function e() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
						var t = 16 * Math.random() | 0;
						return ("x" === e ? t : 3 & t | 8).toString(16)
					})
				}
		},
		"./packages/failover/readonly/index.jsx": function(e, t, n) {
			"use strict";
			n.r(t), n("react");
			var a = n("react-redux"),
				r = Object(a.connect)(function(e) {
					return {
						isReadonlyMode: e.meta.readonlyMode
					}
				})(function e(t) {
					var n = t.isReadonlyMode,
						a = t.replaceWith,
						r = t.children;
					return n ? void 0 !== a ? a : null : r
				});
			n.d(t, "HideOnReadonly", function() {
				return r
			})
		},
		"./packages/loading/error/index.js": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("react"),
				r = n("./packages/styleguide/button/Button.jsx"),
				i = n("@ta/common.i18n"),
				o = function e(t) {
					return a.createElement("div", {
						className: "loading-error-LoadingErrorMessage__error_block--3EMwD"
					}, a.createElement("p", {
						className: "loading-error-LoadingErrorMessage__error_heading--aYyYz"
					}, Object(i.localize)("social_loading_error_1"), " "), a.createElement("p", {
						className: "loading-error-LoadingErrorMessage__error_body--1-Lfo"
					}, Object(i.localize)("soical_loading_error_2"), " "), a.createElement(r.default, {
						onClick: function e() {
							return t.refetch()
						},
						type: "primary",
						size: "large"
					}, a.createElement("span", null, Object(i.localize)("mobile_try_again"), " ")))
				},
				l = n("./packages/overlays/managers/Opener.jsx"),
				s = n("./packages/overlays/managers/Local.jsx"),
				c = function e(t) {
					var n = t.children;
					return a.createElement(l.a, {
						name: "__ERROR__",
						local: !0
					}, n)
				},
				u = function e(t) {
					var n = t.refetch;
					return a.createElement(s.a, {
						name: "__ERROR__"
					}, a.createElement("div", {
						className: "".concat("loading-error-LoadingErrorBanner__error_block--36B8-", " ui_card")
					}, a.createElement("div", {
						className: "loading-error-LoadingErrorBanner__error_heading--21NVA"
					}, Object(i.localize)("social_loading_error_1"), " ", Object(i.localize)("soical_loading_error_2"), " "), a.createElement(r.default, {
						onClick: function e() {
							n && n()
						},
						type: "primary",
						size: "default"
					}, Object(i.localize)("mobile_try_again"), " ")))
				};
			u.defaultProps = {
				refetch: function e() {
					window.location.reload()
				}
			};
			var d = u;
			n.d(t, "LoadingErrorMessage", function() {
				return o
			}), n.d(t, "LoadingErrorBanner", function() {
				return d
			}), n.d(t, "RenderErrorBanner", function() {
				return c
			})
		},
		"./packages/media/common/common.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("@babel/runtime/helpers/esm/slicedToArray"),
				r = n.n(a),
				i = n("@babel/runtime/helpers/esm/classCallCheck"),
				o = n.n(i),
				l = n("@babel/runtime/helpers/esm/defineProperty"),
				s = n.n(l),
				c = [".jpg", ".jpeg", ".gif", ".png"],
				u = [".mp4", ".m4v", ".mov"],
				d = function e(t) {
					var n;
					return t.forEach(function(e) {
						n ? n.width * n.height < e.width * e.height && (n = e) : n = e
					}), n
				},
				g = function e(t, n) {
					var a = this;
					o()(this, e), s()(this, "x", void 0), s()(this, "y", void 0), s()(this, "distanceFrom", function(e) {
						return Math.sqrt(Math.pow(a.x - e.x, 2) + Math.pow(a.y - e.y, 2))
					}), this.x = t, this.y = n
				},
				m = function e(t, n) {
					var a = this;
					o()(this, e), s()(this, "width", void 0), s()(this, "height", void 0), s()(this, "equals", function(e) {
						return e && a.width === e.width && a.height === e.height
					}), s()(this, "aspectRatio", function() {
						return a.width / a.height
					}), this.width = t, this.height = n
				},
				h = function e(t, n, a) {
					var r = Math.max(t, n);
					return Math.min(r, a)
				},
				f = function e(t) {
					var n = "ta_video";
					return t && ("Home" === t.page ? n = "home_video" : "Profile" === t.page && (n = "profile_video")), n
				},
				p = new Map([
					["N", 1],
					["S", -1]
				]),
				v = new Map([
					["E", 1],
					["W", -1]
				]),
				b = function e(t, n) {
					var a = r()(t, 3),
						i = a[0],
						o = a[1],
						l = a[2],
						s = i + (o ? o / 60 : 0) + (l ? l / 3600 : 0);
					return n < 0 ? -s : s
				},
				y = function e(t, a) {
					var r = document.createElement("img");
					r.onload = function() {
						var e = this;
						n.e("exif-js").then(function(t) {
							t.getData(e, function() {
								var e = t.getTag(this, "GPSLatitude"),
									n = t.getTag(this, "GPSLatitudeRef"),
									r = p.get(n),
									i = t.getTag(this, "GPSLongitude"),
									o = t.getTag(this, "GPSLongitudeRef"),
									l = v.get(o);
								if (e && r && i && l) {
									var s = b(e, r),
										c = b(i, l);
									a({
										latitude: s,
										longitude: c
									})
								}
							})
						})
					};
					var i = document.createAttribute("src");
					i.value = t, r.setAttributeNode(i)
				},
				k = function e(t, n) {
					var a = new Image;
					a.onload = function() {
						n(new m(this.width, this.height))
					}, a.src = t
				},
				w = n("@ta/input.drop-zone"),
				x = n("@ta/common.logging"),
				C = n.n(x),
				_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				I = function e(t) {
					var n = "",
						a = "",
						r = "",
						i = "",
						o = "",
						l = "",
						s = 0,
						c = [];
					do {
						n = _.indexOf(t.charAt(s++)) << 2 | (i = _.indexOf(t.charAt(s++))) >> 4, a = (15 & i) << 4 | (o = _.indexOf(t.charAt(s++))) >> 2, r = (3 & o) << 6 | (l = _.indexOf(t.charAt(s++))), c.push(n), 64 !== o && c.push(a), 64 !== l && c.push(r), n = "", a = "", r = "", i = "", o = "", l = ""
					} while (s < t.length);
					return c
				},
				E = function e(t, n, a) {
					var r = "data:".concat(a, ";base64,");
					if (!t.match(r)) return n;
					var i = t.replace(r, "");
					if (/[^A-Za-z0-9+\/=]/g.exec(i)) return n;
					var o = function e(t) {
						var n = 0,
							a = [];
						do {
							if (255 === t[n] && 218 === t[n + 1]) break;
							if (255 === t[n] && 216 === t[n + 1]) n += 2;
							else {
								var r = n + (256 * t[n + 2] + t[n + 3]) + 2,
									i = t.slice(n, r);
								a.push(i), n = r
							}
						} while (n <= t.length);
						return a
					}(I(i));
					return r + function e(t) {
						var n = "",
							a = "",
							r = "",
							i = "",
							o = "",
							l = "",
							s = "",
							c = "",
							u = 0;
						do {
							o = (a = t[u++]) >> 2, l = (3 & a) << 4 | (r = t[u++]) >> 4, s = (15 & r) << 2 | (i = t[u++]) >> 6, c = 63 & i, isNaN(r) ? (s = 64, c = 64) : isNaN(i) && (c = 64), n = "".concat(n).concat(_.charAt(o)).concat(_.charAt(l)).concat(_.charAt(s)).concat(_.charAt(c)), a = "", r = "", i = "", o = "", l = "", s = "", c = ""
						} while (u < t.length);
						return n
					}(function e(t, n) {
						var a = function e(t, n) {
							var a = I(t),
								r = a.indexOf(255, 3),
								i = a.slice(0, r),
								o = a.slice(r);
							return i.concat(n).concat(o)
						}(t, function e(t) {
							for (var n, a = 0; a < t.length; a++)
								if (255 === (n = t[a])[0] && 225 === n[1]) return n;
							return []
						}(n));
						return new Uint8Array(a)
					}(n.replace(r, ""), o))
				},
				R = {
					kind: "Document",
					definitions: [{
						kind: "OperationDefinition",
						operation: "query",
						name: {
							kind: "Name",
							value: "PhotoDetails"
						},
						variableDefinitions: [{
							kind: "VariableDefinition",
							variable: {
								kind: "Variable",
								name: {
									kind: "Name",
									value: "id"
								}
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int"
									}
								}
							},
							directives: []
						}],
						directives: [],
						selectionSet: {
							kind: "SelectionSet",
							selections: [{
								kind: "Field",
								name: {
									kind: "Name",
									value: "photos"
								},
								arguments: [{
									kind: "Argument",
									name: {
										kind: "Name",
										value: "photoIds"
									},
									value: {
										kind: "ListValue",
										values: [{
											kind: "Variable",
											name: {
												kind: "Name",
												value: "id"
											}
										}]
									}
								}],
								directives: [],
								selectionSet: {
									kind: "SelectionSet",
									selections: [{
										kind: "Field",
										name: {
											kind: "Name",
											value: "id"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "statuses"
										},
										arguments: [],
										directives: []
									}, {
										kind: "Field",
										name: {
											kind: "Name",
											value: "photoSizes"
										},
										arguments: [],
										directives: [],
										selectionSet: {
											kind: "SelectionSet",
											selections: [{
												kind: "Field",
												name: {
													kind: "Name",
													value: "url"
												},
												arguments: [],
												directives: []
											}]
										}
									}]
								}
							}]
						}
					}],
					loc: {
						start: 0,
						end: 119
					}
				};
			R.loc.source = {
				body: "ac43ce855b4b"
			};
			var S = R,
				L = function e(t) {
					for (var n = atob(t.split(",")[1]), a = [], r = 0; r < n.length;) a.push(n.charCodeAt(r)), r += 1;
					return new Uint8Array(a)
				},
				z = function e(t, n, a, r, i, o) {
					var l = document.createElement("canvas");
					return l.width = i, l.height = o, l.getContext("2d").drawImage(t, a, r, i, o, 0, 0, i, o), "image/png" === n ? l.toDataURL() : l.toDataURL("image/jpeg")
				},
				N = function e(t, n, a, r) {
					var i = new Image;
					i.onload = function() {
						var e = document.createElement("canvas");
						e.width = 90 === Math.abs(n % 180) ? i.height : i.width, e.height = 90 === Math.abs(n % 180) ? i.width : i.height;
						var t = e.getContext("2d");
						t.save(), t.translate(e.width / 2, e.height / 2), t.rotate(n * Math.PI / 180), t.drawImage(i, -i.width / 2, -i.height / 2), t.restore(), r(e.toDataURL(a))
					}, i.src = t
				},
				P = function e(t, n) {
					var a = new Image;
					a.onload = function() {
						var e = document.createElement("canvas");
						e.width = a.width, e.height = a.height;
						var t = e.getContext("2d");
						t.drawImage(a, 0, 0), t.save(), n(e.toDataURL())
					}, a.src = t
				},
				j = function e(t) {
					return 1 === t ? 0 : 8 === t ? 270 : 3 === t ? 180 : 6 === t ? 90 : 0
				},
				O = function e(t, n) {
					var a = new FileReader;
					a.onload = function() {
						if (!(a.result instanceof ArrayBuffer)) return n(-1);
						var e = new DataView(a.result);
						if (65496 !== e.getUint16(0, !1)) return n(-2);
						for (var t = e.byteLength, r = 2; r < t;) {
							if (e.getUint16(r + 2, !1) <= 8) return n(-1);
							var i = e.getUint16(r, !1);
							if (r += 2, 65505 === i) {
								if (r += 2, 1165519206 !== e.getUint32(r, !1)) return n(-1);
								var o = 18761 === e.getUint16(r += 6, !1);
								r += e.getUint32(r + 4, o);
								var l = e.getUint16(r, o);
								r += 2;
								for (var s = 0; s < l; s++)
									if (274 === e.getUint16(r + 12 * s, o)) return n(e.getUint16(r + 12 * s + 8, o))
							} else {
								if (65280 != (65280 & i)) break;
								r += e.getUint16(r, !1)
							}
						}
						return n(-1)
					}, a.readAsArrayBuffer(t)
				},
				A = function e(t, n) {
					O(t, function(e) {
						var a = j(e);
						if (0 === a) n(URL.createObjectURL(t));
						else {
							var r = new FileReader;
							r.onload = function() {
								var e = r.result && r.result.toString() || "",
									i = t.type,
									o = URL.createObjectURL(t);
								N(o, a, i, function(t) {
									URL.revokeObjectURL(o);
									var a = t;
									try {
										a = E(e, a, i)
									} catch (e) {
										C.a.warn("Cannot restore exif:", e)
									}
									var r = new Blob([L(a)], {
										type: i
									});
									n(URL.createObjectURL(r))
								})
							}, r.readAsDataURL(t)
						}
					})
				},
				U = function e(t, n, a, r) {
					var i = new FileReader;
					i.onload = function() {
						var e = i.result && i.result.toString() || "",
							t = E(e, n, a);
						r(t)
					}, i.readAsDataURL(t)
				},
				B = function e(t, n, a, r) {
					t ? fetch(t, {
						method: "GET",
						credentials: "same-origin"
					}).then(function(e) {
						if (!e.ok) throw new Error(e.statusText);
						return e
					}).then(function(e) {
						return e.blob()
					}).then(function(e) {
						O(e, function(t) {
							var i = j(t);
							0 === i ? U(e, n, a, r) : N(n, -i, a, function(t) {
								U(e, t, a, r)
							})
						})
					}).catch(function(e) {
						C.a.warn("Cannot restore exif:", e), r(n)
					}) : r(n)
				},
				T = function e(t) {
					return c.includes(Object(w.fileExtentsion)(t)) ? "photo" : u.includes(Object(w.fileExtentsion)(t)) ? "video" : "unknown"
				},
				D = function e(t, n, a, r, i) {
					n > a ? i() : setTimeout(function() {
						r.query({
							query: S,
							variables: {
								id: t
							},
							fetchPolicy: "network-only"
						}).then(function(o) {
							if (o.data && o.data.photos && o.data.photos[0]) {
								var l = o.data.photos[0].statuses;
								l && 0 !== l.length && !l.includes("UPLOADING") ? i() : e(t, n + 1, a, r, i)
							} else e(t, n + 1, a, r, i)
						})
					}, 1e3)
				},
				M = n("@babel/runtime/helpers/esm/createClass"),
				V = n.n(M),
				F = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				W = n.n(F),
				H = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				G = n.n(H),
				q = n("@babel/runtime/helpers/esm/inherits"),
				Z = n.n(q),
				K = n("@babel/runtime/helpers/esm/assertThisInitialized"),
				J = n.n(K),
				Y = n("@babel/runtime/helpers/esm/objectSpread"),
				$ = n.n(Y),
				Q = n("react"),
				X = n("@ta/common.object-util"),
				ee = Q.createContext({
					activePlayer: void 0,
					dispatch: void 0
				}),
				te = {
					VIDEO_VISIBLE: "VIDEO_VISIBLE",
					VIDEO_INVISIBLE: "VIDEO_INVISIBLE"
				},
				ne = function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function e() {
							return Object.freeze({})
						}(),
						n = arguments.length > 1 ? arguments[1] : void 0;
					switch (n.type) {
						case te.VIDEO_VISIBLE:
							return !t.activePlayer || t.activePlayer !== n.player && t.activePlayer.state.userInteracted ? $()({}, t, {
								activePlayer: n.player
							}) : t.activePlayer !== n.player && n.player.elemPosition + 50 < t.activePlayer.elemPosition ? $()({}, t, {
								activePlayer: n.player
							}) : t;
						case te.VIDEO_INVISIBLE:
							return t.activePlayer === n.player ? $()({}, t, {
								activePlayer: void 0
							}) : t;
						default:
							return t
					}
				},
				ae = function(e) {
					function t() {
						var e, n;
						o()(this, t);
						for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
						return n = W()(this, (e = G()(t)).call.apply(e, [this].concat(r))), s()(J()(J()(n)), "state", {
							activePlayer: void 0,
							dispatch: function e(t) {
								var a = ne(n.state, t);
								Object(X.shallowEquals)(a, n.state) || n.setState(a)
							}
						}), n
					}
					return Z()(t, e), V()(t, [{
						key: "render",
						value: function e() {
							var t = this.state,
								n = this.props.children;
							return Q.createElement(ee.Provider, {
								value: t
							}, n)
						}
					}]), t
				}(Q.PureComponent),
				re = ee.Consumer,
				ie = n("@ta/common.features"),
				oe = function e() {
					return {
						mediaGroup: Object(ie.featureIsEnabled)("bcom_partner_photos") ? "ALL_INCLUDING_RESTRICTED" : "ALL_UNRESTRICTED"
					}
				},
				le = function e() {
					return {
						mediaGroup: Object(ie.featureIsEnabled)("bcom_partner_photos") ? "DEFAULT_INCLUDING_RESTRICTED" : "DEFAULT"
					}
				};
			n.d(t, "getImageDimensions", function() {
				return k
			}), n.d(t, "getGeoPointFromExif", function() {
				return y
			}), n.d(t, "base64ToUint8Array", function() {
				return L
			}), n.d(t, "cropImageToJpegUrl", function() {
				return z
			}), n.d(t, "orientationValueToDegrees", function() {
				return j
			}), n.d(t, "photoOrientation", function() {
				return O
			}), n.d(t, "rotateImageIfNeeded", function() {
				return A
			}), n.d(t, "mediaType", function() {
				return T
			}), n.d(t, "checkMediaReady", function() {
				return D
			}), n.d(t, "getImageDataURL", function() {
				return P
			}), n.d(t, "restoreExifAndRotateIfNeeded", function() {
				return B
			}), n.d(t, "getVideoTrackingModule", function() {
				return f
			}), n.d(t, "getSizeWithMostPixels", function() {
				return d
			}), n.d(t, "supportedImageTypes", function() {
				return c
			}), n.d(t, "supportedVideoTypes", function() {
				return u
			}), n.d(t, "boundNumber", function() {
				return h
			}), n.d(t, "Point", function() {
				return g
			}), n.d(t, "Dimension", function() {
				return m
			}), n.d(t, "VideoPlayerProvider", function() {
				return ae
			}), n.d(t, "VideoPlayerConsumer", function() {
				return re
			}), n.d(t, "ActionTypes", function() {
				return te
			}), n.d(t, "getMediaFilterToRetrieveAllPhotos", function() {
				return oe
			}), n.d(t, "getMediaFilterToRetrieveDefaultPhotos", function() {
				return le
			})
		},
		"./packages/media/image/LazyImage.jsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return C
			});
			var a = n("@babel/runtime/helpers/esm/extends"),
				r = n.n(a),
				i = n("@babel/runtime/helpers/esm/objectSpread"),
				o = n.n(i),
				l = n("@babel/runtime/helpers/esm/classCallCheck"),
				s = n.n(l),
				c = n("@babel/runtime/helpers/esm/createClass"),
				u = n.n(c),
				d = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				g = n.n(d),
				m = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				h = n.n(m),
				f = n("@babel/runtime/helpers/esm/inherits"),
				p = n.n(f),
				v = n("@babel/runtime/helpers/esm/assertThisInitialized"),
				b = n.n(v),
				y = n("@babel/runtime/helpers/esm/defineProperty"),
				k = n.n(y),
				w = n("react"),
				x = n("@ta/common.is-visible"),
				C = function(e) {
					function t() {
						var e, n;
						s()(this, t);
						for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
						return n = g()(this, (e = h()(t)).call.apply(e, [this].concat(r))), k()(b()(b()(n)), "state", {
							seen: !1
						}), k()(b()(b()(n)), "seen", function() {
							n.setState({
								seen: !0
							})
						}), n
					}
					return p()(t, e), u()(t, [{
						key: "render",
						value: function e() {
							var t = this,
								n = o()({}, this.props);
							return delete n.loadingElement, this.state.seen || (void 0 !== n.src && delete n.src, void 0 !== n.srcSet && delete n.srcSet), delete n.threshold, this.state.seen ? w.createElement("img", n) : w.createElement(x.HasBeenVisible, {
								threshold: this.props.threshold,
								onVisible: this.seen
							}, function(e) {
								return t.props.loadingElement ? t.props.loadingElement(e) : w.createElement("img", r()({
									ref: e
								}, n))
							})
						}
					}]), t
				}(w.Component);
			k()(C, "defaultProps", {
				srcSet: void 0,
				sizes: void 0,
				className: void 0,
				onLoad: void 0,
				threshold: 200
			})
		},
		"./packages/media/image/image.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("@babel/runtime/helpers/esm/extends"),
				r = n.n(a),
				i = n("@babel/runtime/helpers/esm/objectSpread"),
				o = n.n(i),
				l = n("@babel/runtime/helpers/esm/classCallCheck"),
				s = n.n(l),
				c = n("@babel/runtime/helpers/esm/createClass"),
				u = n.n(c),
				d = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				g = n.n(d),
				m = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				h = n.n(m),
				f = n("@babel/runtime/helpers/esm/inherits"),
				p = n.n(f),
				v = n("@babel/runtime/helpers/esm/assertThisInitialized"),
				b = n.n(v),
				y = n("@babel/runtime/helpers/esm/defineProperty"),
				k = n.n(y),
				w = n("react"),
				x = n("@ta/common.classnames"),
				C = n.n(x),
				_ = n("@ta/common.features"),
				I = n("@ta/common.image-preloader"),
				E = n("@ta/common.is-visible"),
				R = n("@ta/common.logging"),
				S = n.n(R),
				L = n("@ta/events.lifecycle"),
				z = function e() {
					var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
						n = 1.5;
					return "undefined" != typeof window && window.devicePixelRatio && t && (n = Math.min(window.devicePixelRatio, 1.5)), n
				},
				N = function e(t, n, a, r) {
					var i = r && r.allowedStretch || .25,
						o = r && r.pickImageBasedOnClientInfo || !0,
						l = z(o),
						s = n * l,
						c = t * l,
						u = s * c,
						d = a.filter(function(e) {
							return e.width <= 2560
						});
					if (0 === d.length) {
						var g = a.length > 0 && (!a[0].width || !a[0].height);
						return S.a.error("ResponsiveImage: no suitable source found. sources.length ".concat(a.length, " missingWidthHeight ").concat(g.toString())), {
							url: "",
							width: 0,
							height: 0
						}
					}
					var m = d.map(function(e) {
						var t = (c - e.width) / e.width,
							n = (s - e.height) / e.height,
							a = Math.max(t, n),
							r = e.width * e.height;
						return {
							src: e,
							stretchRatio: a,
							wastedRatio: (r - u) / r
						}
					});
					m.sort(function(e, t) {
						return e.wastedRatio - t.wastedRatio
					});
					var h = m.filter(function(e) {
						return e.src.width * e.src.height <= 4e4
					}).filter(function(e) {
						return e.stretchRatio <= 0
					});
					if (h.length > 0) {
						var f = h[0].src;
						return {
							url: f.url,
							width: f.width,
							height: f.height
						}
					}
					var p = m.filter(function(e) {
						return e.stretchRatio <= i
					});
					if (p.length > 0) {
						var v = p[0].src;
						return {
							url: v.url,
							width: v.width,
							height: v.height
						}
					}
					m.sort(function(e, t) {
						return e.stretchRatio - t.stretchRatio
					});
					var b = m[0].src;
					return {
						url: b.url,
						width: b.width,
						height: b.height
					}
				},
				P = function e(t, n) {
					var a = Math.floor(t / n) * n,
						r = Math.ceil(t / n) * n,
						i = 0 === a ? 0 : (t - a) / a;
					return 0 === i || i > .25 ? r : a
				},
				j = function e(t, n, a, r, i) {
					var o, l = z(r),
						s = "",
						c = 0,
						u = 0;
					a.forEach(function(e) {
						(!o || e.width > o.width) && (o = e), e.url.indexOf("/photo-o/") > -1 ? (s = e.url, c = e.width, u = e.height) : e.url.indexOf("/photo-m/") > -1 && (s = e.url.replace("/photo-m/1280/", "/photo-o/"), c = e.width, u = e.height)
					}), "" === s && o && (s = o.url, c = o.width, u = o.height);
					var d = P(t * l, 50),
						g = P(n * l, 50);
					d > c && (d = c), g > u && (g = u);
					var m = c / u,
						h = t / n;
					(Math.abs(m - h) / h < .1 || "cover" !== i) && (g = Math.ceil(d * u / c));
					var f = "https://io-tacdn-com.global.ssl.fastly.net".concat(s.substring(s.indexOf("/media/")));
					return {
						url: "".concat(f, "?width=").concat(d, "&height=").concat(g, "&fit=crop&auto=webp"),
						width: d,
						height: g
					}
				},
				O = function(e) {
					function t() {
						var e, n;
						s()(this, t);
						for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
						return n = g()(this, (e = h()(t)).call.apply(e, [this].concat(r))), k()(b()(b()(n)), "state", {
							drawable: !!n.props.ssrContainerDimensions,
							pickImageBasedOnClientInfo: !1
						}), k()(b()(b()(n)), "getContainerSize", function() {
							var e = n.containerNode.current;
							if (!e || 0 === e.clientWidth || 0 === e.clientHeight || !n.state.pickImageBasedOnClientInfo) {
								if (!n.props.ssrContainerDimensions) return null;
								e = n.props.ssrContainerDimensions
							}
							var t = e,
								a = t.clientWidth,
								r = t.clientHeight;
							return 0 === r || 0 === a ? null : {
								clientWidth: a,
								clientHeight: r
							}
						}), k()(b()(b()(n)), "containerNode", w.createRef()), k()(b()(b()(n)), "argCache", {
							sources: null,
							containerSize: null,
							result: null
						}), k()(b()(b()(n)), "pickImage", function(e) {
							var t = n.props.imageSourceDimensions ? n.props.imageSourceDimensions : n.getContainerSize();
							return n.cachedPickUrlFromContainerSize(e, t)
						}), k()(b()(b()(n)), "pickUrlFromContainerSize", function(e, t) {
							if (!e || 0 === e.length || !t) return null;
							var a, r = t.clientWidth,
								i = t.clientHeight,
								o = n.state.pickImageBasedOnClientInfo;
							if (Object(_.featureIsEnabled)("media991_fastly_ondemand_resizing")) a = j(r, i, e, o, n.props.fitStrategy);
							else {
								var l = {
									pickImageBasedOnClientInfo: o,
									allowedStretch: n.props.allowedStretch
								};
								a = N(r, i, e, l)
							}
							return "function" == typeof n.props.onImageChosen && n.props.onImageChosen(a.url), a
						}), k()(b()(b()(n)), "cachedPickUrlFromContainerSize", function(e, t) {
							var a = n.argCache.containerSize && n.argCache.containerSize.clientWidth || -1,
								r = n.argCache.containerSize && n.argCache.containerSize.clientHeight || -1,
								i = t && t.clientWidth || 0,
								o = t && t.clientHeight || 0;
							return n.argCache.sources === e && t && a >= i && r >= o && n.argCache.result ? n.argCache.result : (n.argCache = {
								result: n.pickUrlFromContainerSize(e, t),
								sources: e,
								containerSize: t
							}, n.argCache.result)
						}), k()(b()(b()(n)), "drawable", function() {
							n.setState({
								drawable: !0
							})
						}), k()(b()(b()(n)), "loadFullImage", function(e) {
							var t = new Image;
							t.src = e, t.onload = function() {
								n.containerNode.current && (n.containerNode.current.style.backgroundImage = 'url("'.concat(e, '")'), setTimeout(function() {
									n.containerNode.current && (n.containerNode.current.style.opacity = 1)
								}, 400))
							}
						}), n
					}
					return p()(t, e), u()(t, [{
						key: "componentDidMount",
						value: function e() {
							this.setState({
								pickImageBasedOnClientInfo: !0
							})
						}
					}, {
						key: "renderAltText",
						value: function e() {
							var t = this.props.alt;
							return t ? w.createElement("span", {
								role: "img",
								"aria-label": t
							}) : null
						}
					}, {
						key: "render",
						value: function e() {
							var t, n = this,
								a = this.state.drawable ? this.pickImage(this.props.sources) : null,
								i = this.state.drawable && this.props.sources && this.props.sources.length ? this.props.sources[0] : null,
								l = !this.props.progressiveLoading && a && "string" == typeof a.url ? 'url("'.concat(a.url, '")') : "none",
								s = i && "string" == typeof i.url ? 'url("'.concat(i.url, '")') : "none",
								c = this.props,
								u = c.children,
								d = c.fitStrategy,
								g = c.height,
								m = c.width,
								h = c.padding,
								f = c.borderRadius,
								p = c.transform,
								v = c.opacity,
								b = c.threshold,
								y = c.backgroundColor,
								x = c.backgroundPosition,
								R = c.customFitStrategySelector,
								S = c.ssrContainerDimensions,
								z = "cover";
							if ("contain" === d || "cover" === d) z = d;
							else if ("calculated" === d) {
								var N = this.containerNode.current;
								!N && S && (N = S), N && a && "function" == typeof R && (z = R(a.width, a.height, N.clientWidth, N.clientHeight))
							}
							var P, j = {
									height: g,
									width: m,
									padding: h,
									borderRadius: f,
									transform: p,
									opacity: v,
									backgroundColor: y,
									backgroundPosition: x,
									backgroundSize: z
								},
								O = {
									className: C()("media-image-ResponsiveImage__default--1s-9x", (t = {}, k()(t, "media-image-ResponsiveImage__findResponsiveImage--PI9cG", Object(_.featureIsEnabled)("media_find_responsive_image")), k()(t, "media-image-ResponsiveImage__progressiveImg--2ZkfF", this.props.progressiveLoading), t)),
									style: o()({}, j, {
										backgroundImage: l
									})
								},
								A = {
									className: C()("media-image-ResponsiveImage__default--1s-9x", "media-image-ResponsiveImage__placeholderImg--1VeD1", "media-image-ResponsiveImage__progressiveImg--2ZkfF"),
									style: o()({}, j, {
										backgroundImage: s
									})
								},
								U = this.props.renderLoading ? w.createElement(I.ImagePreloaderRenderer, {
									url: null == a ? void 0 : a.url,
									delay: 0,
									loadingRenderer: this.props.renderLoading
								}) : null;
							P = this.state.drawable || this.props.notLazy ? w.createElement("div", r()({
								ref: this.containerNode
							}, O, {
								key: "image",
								onClick: this.props.onPhotoClick
							}), this.renderAltText(), U, u) : w.createElement(E.HasBeenVisible, {
								node: this.containerNode,
								threshold: b,
								onVisible: this.drawable,
								key: "image"
							}, w.createElement("div", r()({
								ref: this.containerNode
							}, O), this.renderAltText(), u));
							var B = w.createElement("div", A, this.renderAltText(), U, u);
							return w.createElement(w.Fragment, null, this.props.progressiveLoading && a ? w.createElement(w.Fragment, null, w.createElement("div", {
								className: "media-image-ResponsiveImage__progressiveWrap--1dzRZ"
							}, P, B), w.createElement(L.AfterPageLoad, {
								callback: function e() {
									return n.loadFullImage(a.url)
								},
								identifier: "progressiveResponsiveImage"
							})) : [P])
						}
					}], [{
						key: "getDerivedStateFromProps",
						value: function e(t, n) {
							return t.notLazy && !n.drawable ? {
								drawable: !0
							} : null
						}
					}]), t
				}(w.Component);
			k()(O, "defaultProps", {
				padding: void 0,
				borderRadius: void 0,
				threshold: 200,
				fitStrategy: "cover",
				customFitStrategySelector: function e(t, n, a, r) {
					if (0 === r || 0 === a || 0 === n || 0 === t) return "cover";
					var i = t / n,
						o = a / r;
					if (0 === i || 0 === o) return "cover";
					var l = i < o,
						s = l ? i / o : o / i;
					if (s > .75) return "cover";
					var c = s / .75;
					return l ? "".concat(100 * c, "% auto") : "auto ".concat(100 * c, "%")
				}
			});
			var A = n("./packages/media/image/LazyImage.jsx"),
				U = function(e) {
					function t() {
						var e, n;
						s()(this, t);
						for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
						return n = g()(this, (e = h()(t)).call.apply(e, [this].concat(r))), k()(b()(b()(n)), "state", {
							seen: !1
						}), k()(b()(b()(n)), "seen", function() {
							n.setState({
								seen: !0
							})
						}), n
					}
					return p()(t, e), u()(t, [{
						key: "render",
						value: function e() {
							var t = this,
								n = o()({
									className: this.props.className
								}, this.props.containerProps);
							return this.state.seen ? w.createElement("div", r()({}, n, {
								style: {
									backgroundImage: "url(".concat(this.props.src, ")")
								}
							}), this.props.children) : w.createElement(E.HasBeenVisible, {
								threshold: this.props.threshold,
								onVisible: this.seen
							}, function(e) {
								return w.createElement("div", r()({
									ref: e
								}, n), t.props.children)
							})
						}
					}]), t
				}(w.Component);
			k()(U, "defaultProps", {
				className: void 0,
				threshold: 200,
				containerProps: {}
			});
			var B = n("@ta/common.cdn"),
				T = n.n(B),
				D = w.memo(T()(function e(t) {
					var n = t.url,
						a = t.className,
						r = t.imgCdnUrl,
						i = {
							url: "".concat(r).concat(n),
							width: 200,
							height: 200
						};
					return w.createElement("div", {
						className: a || "media-image-ResponsiveDefaultImage__full--1-DE1"
					}, w.createElement(O, {
						sources: [i],
						width: "100%",
						height: "100%"
					}))
				}));
			n.d(t, "ResponsiveImage", function() {
				return O
			}), n.d(t, "pickSourceForSize", function() {
				return N
			}), n.d(t, "LazyImage", function() {
				return A.a
			}), n.d(t, "LazyBackgroundImage", function() {
				return U
			}), n.d(t, "ResponsiveDefaultImage", function() {
				return D
			})
		},
		"./packages/overlays/managers/Local.jsx": function(e, t, n) {
			"use strict";
			var a = n("@babel/runtime/helpers/esm/classCallCheck"),
				r = n.n(a),
				i = n("@babel/runtime/helpers/esm/createClass"),
				o = n.n(i),
				l = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				s = n.n(l),
				c = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				u = n.n(c),
				d = n("@babel/runtime/helpers/esm/inherits"),
				g = n.n(d),
				m = n("react"),
				h = n("react-redux"),
				f = n("react-transition-group"),
				p = n("@ta/overlays.pieces"),
				v = n("@ta/common.logging"),
				b = n.n(v),
				y = new Map,
				k = function(e) {
					function t() {
						return r()(this, t), s()(this, u()(t).apply(this, arguments))
					}
					return g()(t, e), o()(t, [{
						key: "componentDidMount",
						value: function e() {
							var t = this.props.name;
							if (y.has(t)) {
								var n = y.get(t) + 1;
								y.set(t, n), b.a.error("Local overlay with name: ".concat(t, " found ").concat(n, " times, please use another alias"))
							} else y.set(t, 1)
						}
					}, {
						key: "componentWillUnmount",
						value: function e() {
							var t = this.props.name;
							y.delete(t)
						}
					}, {
						key: "render",
						value: function e() {
							var t = this.props,
								n = t.show,
								a = t.children,
								r = t.transitionDuration;
							return m.createElement(f.Transition, {
								in: n,
								timeout: r || 0,
								mountOnEnter: !0,
								unmountOnExit: !0
							}, function(e) {
								return m.createElement(p.Transition.Provider, {
									value: e
								}, a)
							})
						}
					}]), t
				}(m.Component);
			t.a = Object(h.connect)(function(e, t) {
				var n = t.name;
				return {
					show: !!e.overlays.locals[n]
				}
			})(k)
		},
		"./packages/overlays/managers/Opener.jsx": function(e, t, n) {
			"use strict";
			n("react");
			var a = n("react-redux"),
				r = n("@ta/common.state"),
				i = function e(t) {
					var n = t.name,
						a = t.local,
						r = t.showGlobal,
						i = t.showLocal,
						o = t.isOpen,
						l = t.children,
						s = a ? i : r;
					return l(function() {
						return s(n)
					}, o)
				};
			i.defaultProps = {
				local: !1
			}, t.a = Object(a.connect)(function(e, t) {
				return {
					isOpen: t.local ? e.overlays.locals[t.name] : e.overlays.global === t.name
				}
			}, {
				showGlobal: r.actions.overlays.showGlobalOverlay,
				showLocal: r.actions.overlays.showLocalOverlay
			})(i)
		},
		"./packages/overlays/managers/managers.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("@babel/runtime/helpers/esm/objectSpread"),
				r = n.n(a),
				i = n("react"),
				o = n("react-redux"),
				l = n("@ta/common.state"),
				s = function e(t) {
					var n = t.name,
						a = t.showGlobal,
						r = t.hideLocal,
						i = t.isOpen;
					return (0, t.children)(function() {
						return n ? r(n) : a(null)
					}, i)
				};
			s.defaultProps = {
				name: null
			};
			var c = Object(o.connect)(function(e, t) {
					return r()({}, t, {
						isOpen: t.local ? e.overlays.locals[t.name] : e.overlays.global === t.name
					})
				}, {
					showGlobal: l.actions.overlays.showGlobalOverlay,
					hideLocal: l.actions.overlays.hideLocalOverlay
				})(s),
				u = n("./packages/overlays/managers/Opener.jsx"),
				d = n("@babel/runtime/helpers/esm/classCallCheck"),
				g = n.n(d),
				m = n("@babel/runtime/helpers/esm/createClass"),
				h = n.n(m),
				f = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				p = n.n(f),
				v = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				b = n.n(v),
				y = n("@babel/runtime/helpers/esm/inherits"),
				k = n.n(y),
				w = n("react-transition-group"),
				x = n("@ta/overlays.pieces"),
				C = n("@ta/common.logging"),
				_ = n.n(C),
				I = new Map,
				E = function(e) {
					function t() {
						return g()(this, t), p()(this, b()(t).apply(this, arguments))
					}
					return k()(t, e), h()(t, [{
						key: "componentDidMount",
						value: function e() {
							var t = this.props.name;
							if (I.has(t)) {
								var n = I.get(t) + 1;
								I.set(t, n), _.a.error("Global overlay with name: ".concat(t, " found ").concat(n, " times, please use another alias"))
							} else I.set(t, 1)
						}
					}, {
						key: "componentWillUnmount",
						value: function e() {
							var t = this.props.name;
							I.delete(t)
						}
					}, {
						key: "render",
						value: function e() {
							var t = this.props,
								n = t.show,
								a = t.children,
								r = t.transitionDuration;
							return i.createElement(w.Transition, {
								in: n,
								timeout: r || 0,
								mountOnEnter: !0,
								unmountOnExit: !0
							}, function(e) {
								return i.createElement(x.Transition.Provider, {
									value: e
								}, a)
							})
						}
					}]), t
				}(i.Component),
				R = Object(o.connect)(function(e, t) {
					return {
						show: t.name === e.overlays.global
					}
				})(E),
				S = n("./packages/overlays/managers/Local.jsx"),
				L = function(e) {
					function t() {
						return g()(this, t), p()(this, b()(t).apply(this, arguments))
					}
					return k()(t, e), h()(t, [{
						key: "componentDidMount",
						value: function e() {
							this.props.openLayerCheck() && this.props.openLayer(), this.props.markAsCheckedCallback()
						}
					}, {
						key: "render",
						value: function e() {
							return null
						}
					}]), t
				}(i.Component),
				z = function e(t) {
					return i.createElement(u.a, {
						name: t.name,
						local: t.local
					}, function(e) {
						return i.createElement(L, {
							openLayer: e,
							markAsCheckedCallback: t.markAsCheckedCallback,
							openLayerCheck: t.openLayerCheck
						})
					})
				};
			z.defaultProps = {
				local: !1,
				markAsCheckedCallback: function e() {},
				openLayerCheck: function e() {
					return !0
				}
			};
			var N = z;
			n.d(t, "Closer", function() {
				return c
			}), n.d(t, "Opener", function() {
				return u.a
			}), n.d(t, "Global", function() {
				return R
			}), n.d(t, "Local", function() {
				return S.a
			}), n.d(t, "AutoOpener", function() {
				return N
			})
		},
		"./packages/styleguide/avatar/index.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("react"),
				r = n("@ta/common.classnames"),
				i = n.n(r),
				o = n("react-redux"),
				l = n("@ta/common.routing"),
				s = n("./packages/styleguide/icon/Icon.jsx"),
				c = n("./packages/media/image/LazyImage.jsx"),
				u = {
					avatar: "styleguide-avatar-Avatar__avatar--2NStU"
				},
				d = {
					"xtra-small": 24,
					small: 32,
					default: 42,
					large: 72,
					"xtra-large": 120
				},
				g = {
					className: void 0,
					photo: void 0,
					icon: null,
					size: "default",
					tabletSize: void 0,
					desktopSize: void 0,
					widescreenSize: void 0,
					display: null,
					href: "",
					target: "_blank",
					mobileTarget: void 0,
					onClick: void 0,
					imgCdnUrl: "",
					alt: "",
					withBorder: !1,
					notLazy: !1
				},
				m = function e(t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
						a = d[n],
						r = null;
					if (t && t.photoSizes && t.photoSizes.length > 0) {
						var i = t.photoSizes.find(function(e) {
							return e.width >= a ? e.url : null
						});
						r = i ? i.url : t.photoSizes[t.photoSizes.length - 1].url
					}
					return r
				},
				h = function e(t) {
					var n = t.photoUrl,
						r = t.imgCdnUrl,
						i = t.icon,
						o = t.alt,
						l = t.notLazy;
					return a.createElement(a.Fragment, null, n ? function e(t, n, r) {
						return r ? a.createElement("img", {
							src: t,
							alt: n
						}) : a.createElement(c.a, {
							src: t,
							alt: n
						})
					}(function e(t, n) {
						return 0 === t.indexOf("http://") || 0 === t.indexOf("https://") ? t : n ? n + t : t
					}(n, r), o || "", l) : a.createElement(s.a, {
						name: "member-fill"
					}), i && a.createElement("div", {
						className: i
					}))
				},
				f = function e(t) {
					return a.createElement(l.ResponsiveTargetLink, {
						className: t.className,
						href: t.href,
						target: t.target,
						mobileTarget: t.mobileTarget,
						onClick: t.onClick
					}, a.createElement(h, {
						photoUrl: t.photoUrl,
						imgCdnUrl: t.imgCdnUrl,
						icon: t.icon,
						alt: t.alt,
						notLazy: t.notLazy
					}))
				};

			function p(e) {
				var t = e.photo,
					n = e.photoUrl,
					r = e.imgCdnUrl,
					o = e.viewportCategory,
					l = e.icon,
					s = e.size,
					c = e.tabletSize,
					d = e.desktopSize,
					g = e.widescreenSize,
					p = e.display,
					v = e.href,
					b = e.onClick,
					y = e.alt,
					k = e.withBorder ? "ui_social_avatar" : "ui_avatar",
					w = "default" !== e.size && e.size,
					x = c ? "".concat(c, "-tablet") : null,
					C = d ? "".concat(d, "-desktop") : null,
					_ = g ? "".concat(g, "-widescreen") : null,
					I = i()(u.avatar, k, w, x, C, _, p, e.className),
					E = t ? m(t, "DESKTOP" === o ? d || c || s : "TABLET" === o && c || s) : n;
				return v ? a.createElement(f, {
					photoUrl: E,
					imgCdnUrl: e.imgCdnUrl,
					icon: e.icon,
					href: e.href,
					target: e.target,
					mobileTarget: e.mobileTarget,
					onClick: e.onClick,
					alt: e.alt,
					className: I,
					withBorder: e.withBorder,
					notLazy: e.notLazy
				}) : a.createElement("span", {
					className: I,
					onClick: b
				}, a.createElement(h, {
					photoUrl: E,
					imgCdnUrl: r,
					icon: l,
					alt: y,
					notLazy: e.notLazy
				}))
			}
			f.defaultProps = {
				photoUrl: null,
				icon: g.icon,
				className: g.className,
				href: g.href,
				target: g.target,
				onClick: g.onClick,
				imgCdnUrl: g.imgCdnUrl,
				alt: g.alt,
				withBorder: g.withBorder,
				mobileTarget: g.mobileTarget
			}, h.defaultProps = {
				photoUrl: f.defaultProps.photoUrl,
				imgCdnUrl: g.imgCdnUrl,
				icon: g.icon,
				alt: g.alt,
				notLazy: g.notLazy
			}, p.defaultProps = g;
			var v = Object(o.connect)(function(e) {
				return {
					imgCdnUrl: e.meta.imageCdnUrl,
					viewportCategory: e.meta.device.viewportCategory
				}
			})(p);
			n.d(t, "Avatar", function() {
				return v
			})
		},
		"./packages/styleguide/bubble-rating/index.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("react"),
				r = function e(t) {
					var n = t.rating,
						r = t.verticalAlign,
						i = t.useAffiliateStars,
						o = function e(t) {
							return 5 * Math.round(2 * t)
						}(n),
						l = o >= 0 && o <= 50 ? function e(t) {
							return 5 === t ? "05" : "".concat(t)
						}(o) : "0",
						s = i ? "ui_star_rating star_" : "ui_bubble_rating bubble_";
					return a.createElement("span", {
						className: "".concat(s).concat(l),
						style: r && {
							verticalAlign: r
						}
					})
				};
			r.defaultProps = {
				verticalAlign: null,
				useAffiliateStars: !1
			};
			var i = r,
				o = n("@ta/common.i18n"),
				l = function e(t) {
					return a.createElement("div", {
						className: "ui_poi_review_rating ".concat(t.hoverable ? "styleguide-bubble-rating-BubbleRatingWithLabel__hoverable--2Md13" : ""),
						style: t.fontSize && {
							fontSize: t.fontSize,
							lineHeight: t.fontSize > 14 ? 1.36 : 1.29
						}
					}, a.createElement(i, {
						rating: t.rating,
						verticalAlign: t.bubbleRatingVerticalAlign,
						useAffiliateStars: t.useAffiliateStars
					}), t.label)
				};
			l.defaultProps = {
				fontSize: null,
				hoverable: !1,
				bubbleRatingVerticalAlign: null,
				useAffiliateStars: !1
			};
			var s = l,
				c = function e(t) {
					var n = "reviewCount ".concat("styleguide-bubble-rating-BubbleRatingWithReviewCount__reviewCount--37tMc");
					return t.dottedRatingUnderline && (n += " ".concat("styleguide-bubble-rating-BubbleRatingWithReviewCount__dottedUnderline--1oKfh")), t.reviewCountHoverable && (n += " ".concat("styleguide-bubble-rating-BubbleRatingWithReviewCount__reviewCountHoverable--2fU1C")), a.createElement(s, {
						rating: t.rating,
						fontSize: t.fontSize,
						hoverable: t.bubbleRatingHoverable,
						bubbleRatingVerticalAlign: t.bubbleRatingVerticalAlign,
						useAffiliateStars: t.useAffiliateStars,
						label: a.createElement("span", {
							className: n,
							style: t.fontSize && {
								fontSize: t.fontSize
							}
						}, Object(o.localize)("mobile_reviews_plural", {
							0: o.globalize.formatNumber("integer", t.numReviews)
						}))
					})
				};
			c.defaultProps = {
				fontSize: null,
				bubbleRatingHoverable: !1,
				reviewCountHoverable: !1,
				dottedRatingUnderline: !1,
				bubbleRatingVerticalAlign: null,
				useAffiliateStars: !1
			};
			var u = c,
				d = n("@ta/common.routing"),
				g = function e(t) {
					var n = "reviewCount ".concat("styleguide-bubble-rating-BubbleRatingWithReviewCount__reviewCount--37tMc");
					return t.dottedRatingUnderline && (n += " ".concat("styleguide-bubble-rating-BubbleRatingWithReviewCount__dottedUnderline--1oKfh")), t.reviewCountHoverable && (n += " ".concat("styleguide-bubble-rating-BubbleRatingWithReviewCount__reviewCountHoverable--2fU1C")), a.createElement(s, {
						rating: t.rating,
						useAffiliateStars: t.useAffiliateStars,
						bubbleRatingVerticalAlign: t.bubbleRatingVerticalAlign,
						label: a.createElement(d.Link, {
							href: t.url,
							onClick: t.onClick
						}, a.createElement("span", {
							className: n,
							style: t.fontSize && {
								fontSize: t.fontSize
							}
						}, Object(o.localize)("mobile_reviews_plural", {
							0: o.globalize.formatNumber("integer", t.numReviews)
						})))
					})
				};
			g.defaultProps = {
				fontSize: null,
				onClick: void 0,
				dottedRatingUnderline: !1,
				reviewCountHoverable: !1,
				useAffiliateStars: !1,
				bubbleRatingVerticalAlign: null
			};
			var m = g;
			n.d(t, "BubbleRating", function() {
				return i
			}), n.d(t, "BubbleRatingWithReviewCount", function() {
				return u
			}), n.d(t, "BubbleRatingWithLinkedReviewCount", function() {
				return m
			}), n.d(t, "BubbleRatingWithLabel", function() {
				return s
			})
		},
		"./packages/styleguide/button/Button.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("react"),
				r = n("@ta/common.classnames"),
				i = n.n(r),
				o = function e(t) {
					var n = t.children,
						r = t.size,
						o = t.type,
						l = t.fullwidth,
						s = t.chevron,
						c = t.loading,
						u = t.disabled,
						d = t.onClick;
					return a.createElement("button", {
						className: i()("ui_button", "none" !== o ? o : "", "default" !== r ? r : "", {
							chevron: s,
							disabled: u,
							loading: c,
							fullwidth: l
						}),
						disabled: u,
						onClick: d
					}, n)
				};
			o.defaultProps = {
				children: null,
				onClick: function e() {},
				type: "original",
				size: "default",
				chevron: !1,
				loading: !1,
				disabled: !1,
				fullwidth: !1
			}, t.default = o
		},
		"./packages/styleguide/icon/Icon.jsx": function(e, t, n) {
			"use strict";
			var a = n("react"),
				r = function e(t) {
					var n = t.name,
						r = t.className,
						i = t.children,
						o = t.onClick;
					return a.createElement("span", {
						className: "ui_icon ".concat(n, " ").concat(r),
						onClick: o
					}, i)
				};
			r.defaultProps = {
				className: "",
				children: void 0
			}, t.a = r
		},
		"./packages/styleguide/icon/index.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./packages/styleguide/icon/Icon.jsx"),
				r = n("@babel/runtime/helpers/esm/defineProperty"),
				i = n.n(r),
				o = n("react"),
				l = n("@ta/common.classnames"),
				s = n.n(l),
				c = function e(t) {
					var n = t.innerIcon,
						r = t.outerIcon,
						l = t.hover,
						c = t.active;
					return o.createElement("span", {
						className: s()("ui_icon_stacked", "styleguide-icon-IconStacked__ui_icon_stacked--3-Z0a", i()({}, "styleguide-icon-IconStacked__hover--1H_k_", l))
					}, o.createElement("span", {
						className: "styleguide-icon-IconStacked__ui_icon_stacked_inner--1Q9Mh"
					}, o.createElement(a.a, {
						name: n,
						className: s()("stacked", "styleguide-icon-IconStacked__innerIcon--HUV1T", i()({}, "styleguide-icon-IconStacked__active--3zJoA", c))
					}), o.createElement(a.a, {
						name: r,
						className: s()("stacked", "styleguide-icon-IconStacked__outerIcon--7s7FA")
					})))
				};
			c.defaultProps = {
				hover: !1,
				active: !1
			};
			var u = c,
				d = function e(t) {
					var n = t.name,
						a = t.className;
					return o.createElement("span", {
						className: "t4b_ui_icon ".concat(n, " ").concat(a)
					})
				};
			d.defaultProps = {
				className: ""
			};
			var g = d;
			n.d(t, "Icon", function() {
				return a.a
			}), n.d(t, "IconStacked", function() {
				return u
			}), n.d(t, "T4BIcon", function() {
				return g
			})
		},
		"./packages/styleguide/loading/index.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("react"),
				r = {
					loadingBar: "styleguide-loading-LoadingBar__loadingBar--3d3LK",
					infinite: "styleguide-loading-LoadingBar__infinite--3vw-S",
					loading: "styleguide-loading-LoadingBar__loading--39ZY9",
					percentBar: "styleguide-loading-LoadingBar__percentBar--2L6I6"
				},
				i = function e(t) {
					var n = t.visible,
						i = t.topDistance,
						o = t.transitionDuration,
						l = t.infinite,
						s = t.percent,
						c = t.zIndex;
					return a.createElement("div", {
						className: [r.loadingBar, l ? r.infinite : ""].join(" "),
						style: {
							display: n ? "block" : "none",
							top: i,
							transitionDuration: o,
							zIndex: c
						}
					}, a.createElement("div", {
						className: r.percentBar,
						style: {
							width: "".concat(s, "%"),
							display: s > 0 ? "block" : "none"
						}
					}))
				};
			i.defaultProps = {
				infinite: !1,
				percent: 0,
				topDistance: 0,
				transitionDuration: "500ms",
				visible: !0,
				zIndex: "auto"
			};
			var o = i,
				l = function e(t) {
					var n = t.size,
						r = t.color;
					return a.createElement("span", {
						className: "ui_loader ".concat(n || "", " ").concat(r || "")
					}, a.createElement("span", null), a.createElement("span", null), a.createElement("span", null), a.createElement("span", null), a.createElement("span", null))
				};
			l.defaultProps = {
				size: void 0,
				color: void 0
			};
			var s = l,
				c = function e(t) {
					var n = t.size,
						r = t.inverted;
					return null
				};
			c.defaultProps = {
				size: void 0,
				inverted: !1
			};
			var u = c;
			n.d(t, "LoadingBar", function() {
				return o
			}), n.d(t, "LoadingBubbles", function() {
				return s
			}), n.d(t, "LoadingSpinner", function() {
				return u
			})
		},
		"527f7": function(e, t, n) {
			e.exports = n
		}
	}
});
//# sourceMappingURL=ta-common.a895adc67e.js.map

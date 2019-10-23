($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.map",
	d: ["vendor-babel", "lithium-platform", "@ta/common.client", "vendor-react-libs", "@ta/public.maps", "@ta/maps.zoom-control", "@ta/vr.common"],
	e: ["./packages/vr/map/map.jsx"],
	x: {
		"./packages/vr/common/JerseyDataFunctions.jsx": ["c", "a", "b", "d"],
		"./packages/vr/map/map.jsx": ["MapRelatedInformation", "MapSection", "default"]
	},
	m: {
		"./packages/vr/common/JerseyDataFunctions.jsx": function(e, t, a) {
			"use strict";
			a.d(t, "c", function() {
				return l
			}), a.d(t, "a", function() {
				return i
			}), a.d(t, "b", function() {
				return c
			}), a.d(t, "d", function() {
				return o
			});
			var n = a("@ta/common.i18n");

			function r(e) {
				return "YES" === e ? Object(n.localize)("common_Yes") : "NO" === e ? Object(n.localize)("common_No") : "ASK" === e ? Object(n.localize)("vr_ask_81f") : ""
			}

			function l(e) {
				var t = [];
				if (e) {
					var a = e.amn_all_pets_temp,
						l = e.amn_children,
						i = e.amn_smoking_temp;
					a.value && t.push(Object(n.localize)("vacation_rental_pets_allowed", {
						0: r(a.value)
					})), i.value && t.push(Object(n.localize)("vacation_rental_smoking_allowed", {
						0: r(i.value)
					})), l.value && t.push(Object(n.localize)("vacation_rental_kid_friendly", {
						0: r(l.value)
					}))
				}
				return t
			}

			function i(e) {
				var t = ["amn_smoking", "amn_pets", "amn_all_pets", "amn_elderly", "amn_children", "amn_smoking_temp", "amn_all_pets_temp", "amn_elderly_temp"];
				return Object.keys(e).filter(function(a) {
					return !t.includes(a) && e[a].hasFeature
				}).map(function(t) {
					return e[t].localizedText
				})
			}

			function c(e) {
				return ["area_fishing_near", "area_golf_far", "area_golf_near", "area_horse_riding_nearby", "area_in_ski_resort", "area_tennis_near", "area_water_park_near", "area_watersports_near", "area_nearest_beach"].map(function(t) {
					return e.features[t] && e.features[t].localizedText
				}).filter(function(e) {
					return e
				})
			}

			function o(e) {
				var t = e.descriptions,
					a = t.ABOUT_THE_AREA,
					n = t.GETTING_AROUND,
					r = t.AREA_DETAILS,
					l = !!a || !!n || !!r,
					i = "NO" === e.rentalData.carRequired || "ADVISED" === e.rentalData.carRequired || "YES" === e.rentalData.carRequired || !!e.features.area_nearest_amenities,
					o = e.descriptions.DIRECTIONS || e.features.area_nearest_airport || e.features.area_nearest_railway || !!e.features.area_nearest_ferry,
					s = c(e),
					d = s && s.length,
					m = e.nearbyGeos && e.nearbyGeos.length;
				return l || i || o || d || m
			}
		},
		"./packages/vr/map/map.jsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("@babel/runtime/helpers/esm/classCallCheck"),
				r = a.n(n),
				l = a("@babel/runtime/helpers/esm/createClass"),
				i = a.n(l),
				c = a("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				o = a.n(c),
				s = a("@babel/runtime/helpers/esm/getPrototypeOf"),
				d = a.n(s),
				m = a("@babel/runtime/helpers/esm/inherits"),
				u = a.n(m),
				p = a("@babel/runtime/helpers/esm/assertThisInitialized"),
				_ = a.n(p),
				v = a("@babel/runtime/helpers/esm/defineProperty"),
				h = a.n(v),
				f = a("@ta/common.i18n"),
				b = a("@ta/common.client"),
				y = a("./packages/vr/common/JerseyDataFunctions.jsx"),
				E = a("react"),
				x = {
					header: null,
					content: null,
					expandIt: null,
					expandItText: null,
					link: null,
					city: null
				},
				g = function e(t) {
					return "DESKTOP" === t ? 800 : 300
				},
				O = function e(t) {
					var a = t.rental,
						n = t.description;
					return !a.isIndexable || !a.isMachineTranslatedMarkupFeatureEnabled && n.machineTranslated
				},
				T = function(e) {
					function t() {
						var e, a;
						r()(this, t);
						for (var n = arguments.length, l = new Array(n), i = 0; i < n; i++) l[i] = arguments[i];
						return a = o()(this, (e = d()(t)).call.apply(e, [this].concat(l))), h()(_()(_()(a)), "state", {
							expanded: !1
						}), h()(_()(_()(a)), "needsExpandButton", void 0), h()(_()(_()(a)), "section", function(e) {
							var t = e.header,
								n = e.description.text,
								r = e.clientSideOnly,
								l = e.lang,
								i = e.device,
								c = a.maybeTruncateTextBlob(n, i);
							return E.createElement("div", {
								key: t
							}, E.createElement("div", {
								className: x.header
							}, t), E.createElement("div", {
								lang: l
							}, r ? E.createElement(b.ClientOnly, null, "description") : c))
						}), h()(_()(_()(a)), "maybeTruncateTextBlob", function(e, t) {
							return e ? e.length > g(t) + 50 && (a.needsExpandButton = !0, !a.state.expanded) ? "".concat(e.substring(0, g(t)), "...") : e : null
						}), h()(_()(_()(a)), "howToGetThere", function(e) {
							var t = e.howToGetThere,
								n = e.clientSideOnly,
								r = e.device,
								l = t.machineTranslated && !n ? "".concat(t.lang, "-x-mtfrom-").concat(t.machineTranslatedSourceLang) : null,
								i = E.createElement("span", {
									lang: l
								}, a.maybeTruncateTextBlob(t.text, r));
							return E.createElement("div", null, n ? E.createElement(b.ClientOnly, null, i) : i)
						}), h()(_()(_()(a)), "toggleContent", function() {
							a.setState({
								expanded: !a.state.expanded
							})
						}), a
					}
					return u()(t, e), i()(t, [{
						key: "maybeRenderAccessSection",
						value: function e() {
							var t = function e(t) {
									return "NO" === t ? Object(f.localize)("vr_detail_carNotNeeded_171f") : "ADVISED" === t ? Object(f.localize)("vr_detail_carAdvised_171f") : "YES" === t ? Object(f.localize)("vr_detail_carRecommended_171f") : null
								}(this.props.rental.rentalData.carRequired),
								a = this.props.rental.features.area_nearest_amenities;
							return t || a ? E.createElement("div", {
								key: Object(f.localize)("vr_detail_access_171f")
							}, E.createElement("div", {
								className: x.header
							}, Object(f.localize)("vr_detail_access_171f")), t ? E.createElement("div", null, t) : null, a ? E.createElement("div", null, a.localizedText) : null) : null
						}
					}, {
						key: "maybeRenderHowToGetThere",
						value: function e() {
							var t = this.props.rental.descriptions.DIRECTIONS,
								a = this.props.rental.features.area_nearest_airport,
								n = this.props.rental.features.area_nearest_railway,
								r = this.props.rental.features.area_nearest_ferry;
							return t || a || n || r ? ((a || n || r) && (this.needsExpandButton = !0), E.createElement("div", {
								key: Object(f.localize)("vr_detail_howto_171f")
							}, E.createElement("div", {
								className: x.header
							}, Object(f.localize)("vr_detail_howto_171f")), t ? this.howToGetThere({
								howToGetThere: t,
								clientSideOnly: O({
									rental: this.props.rental,
									description: t
								}),
								expanded: this.state.expanded,
								device: this.props.device
							}) : null, a && this.state.expanded ? E.createElement("div", null, Object(f.localize)("vr_detail_airport_171f"), " ", a.localizedText) : null, n && this.state.expanded ? E.createElement("div", null, Object(f.localize)("vr_detail_railway_171f"), " ", n.localizedText) : null, r && this.state.expanded ? E.createElement("div", null, Object(f.localize)("vr_detail_ferry_171f"), " ", r.localizedText) : null)) : null
						}
					}, {
						key: "maybeRenderActivitiesNearby",
						value: function e() {
							var t = Object(y.b)(this.props.rental);
							return t && t.length ? E.createElement("div", {
								key: Object(f.localize)("vr_detail_activities_171f")
							}, E.createElement("div", {
								className: x.header
							}, Object(f.localize)("vr_detail_activities_171f")), E.createElement("div", null, t.join(", "))) : null
						}
					}, {
						key: "maybeRenderDescription",
						value: function e(t, a) {
							var n = this.props.rental.descriptions[t];
							if (!n) return null;
							var r = O({
									rental: this.props.rental,
									description: n
								}),
								l = !r && n.machineTranslated ? "".concat(n.lang, "-x-mtfrom-").concat(n.machineTranslatedSourceLang) : null;
							return this.section({
								lang: l,
								header: a,
								description: n,
								clientSideOnly: r,
								device: this.props.device
							})
						}
					}, {
						key: "maybeRenderNearbyGeos",
						value: function e() {
							var t = this.props.rental.nearbyGeos;
							if (t && t.length) {
								var a = t;
								return t.length > 3 && (this.needsExpandButton = !0, this.state.expanded || (a = a.slice(0, 3))), null
							}
							return null
						}
					}, {
						key: "render",
						value: function e() {
							var t = this.maybeRenderDescription("ABOUT_THE_AREA", Object(f.localize)("vr_about_the_neighborhood")),
								a = this.maybeRenderDescription("GETTING_AROUND", Object(f.localize)("vr_getting_around")),
								n = this.maybeRenderDescription("AREA_DETAILS", Object(f.localize)("vr_location_description_81f")),
								r = this.maybeRenderAccessSection(),
								l = this.maybeRenderHowToGetThere(),
								i = this.maybeRenderActivitiesNearby(),
								c = this.maybeRenderNearbyGeos();
							if (!Object(y.d)(this.props.rental)) return null;
							var o = [t, a, n, r, l, i, c].filter(function(e) {
								return e
							});
							return o.length > 2 && (this.needsExpandButton = !0, this.state.expanded || (o = o.slice(0, 2))), E.createElement("div", {
								className: "".concat(x.content)
							}, o, this.needsExpandButton ? E.createElement("div", {
								className: x.expandIt,
								onClick: this.toggleContent
							}, E.createElement("div", {
								className: x.expandItText
							}, this.state.expanded ? Object(f.localize)("tavrs_common_view_less") : Object(f.localize)("VR_quick_view_more_ffffeea6"))) : null)
						}
					}]), t
				}(E.Component),
				k = a("@ta/public.maps"),
				j = a("@ta/maps.zoom-control"),
				z = a.n(j),
				R = a("@ta/vr.common"),
				N = function e(t) {
					var a;
					if (t.rental.geoCoordinate) {
						var n = t.rental.geoCoordinate,
							r = n.lat,
							l = n.lon;
						a = new k.LatLng(r, l)
					}
					var i = t.rental.isExactMap,
						c = Object(y.d)(t.rental) || "DESKTOP" !== t.device ? {
							height: 200
						} : {
							height: 400
						};
					return E.createElement("div", null, t.showHeader ? E.createElement(R.SectionHeader, {
						title: Object(f.localize)("vr_detail_map_2015_map")
					}) : null, E.createElement("div", {
						className: "vr-map-MapSection__content--1YhjN"
					}, a ? E.createElement(k.MapComponent, {
						style: c,
						initialCenter: a,
						initialZoom: 15,
						forceMapProvider: k.MapProviderGoogle
					}, i ? E.createElement(k.IconMarker, {
						position: a,
						width: 35,
						height: 40,
						anchor: {
							x: 15,
							y: 30
						},
						src: "/img2/icons/responsive_map_pins_v1/VR_green_pin_2x.png"
					}) : E.createElement(k.CircleOverlay, {
						position: a,
						fillColor: "#00a680",
						strokeColor: "#00a680",
						strokeWidth: 3,
						opacity: .3,
						radius: 200
					}), E.createElement("div", {
						className: "vr-map-MapSection__zoomControl--1Nskb"
					}, E.createElement(z.a, null))) : null, E.createElement(T, {
						rental: t.rental,
						device: t.device
					})))
				};
			a.d(t, "MapRelatedInformation", function() {
				return T
			}), a.d(t, "MapSection", function() {
				return N
			}), t.default = {}
		}
	}
});
//# sourceMappingURL=vr.map.66dc536e4d.js.map

($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/vr.rates-section",
	d: ["vendor-babel", "vendor-react-libs", "lithium-platform"],
	e: ["./packages/vr/rates-section/RatesSection.jsx"],
	x: {
		"./packages/vr/rates-section/RatesSection.jsx": ["default"]
	},
	m: {
		"./packages/vr/rates-section/RatesSection.jsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("@babel/runtime/helpers/esm/extends"),
				s = n.n(a),
				r = n("@babel/runtime/helpers/esm/classCallCheck"),
				c = n.n(r),
				i = n("@babel/runtime/helpers/esm/createClass"),
				l = n.n(i),
				o = n("@babel/runtime/helpers/esm/possibleConstructorReturn"),
				m = n.n(o),
				d = n("@babel/runtime/helpers/esm/getPrototypeOf"),
				u = n.n(d),
				_ = n("@babel/runtime/helpers/esm/inherits"),
				h = n.n(_),
				v = n("@babel/runtime/helpers/esm/assertThisInitialized"),
				f = n.n(v),
				p = n("@babel/runtime/helpers/esm/defineProperty"),
				S = n.n(p),
				b = n("react"),
				E = n("@ta/common.i18n"),
				R = {
					ratesSectionSubTitle: "vr-rates-section-RatesSection__ratesSectionSubTitle--3DZyY",
					ratesListContainer: "vr-rates-section-RatesSection__ratesListContainer--2G0AT",
					seeMoreLess: "vr-rates-section-RatesSection__seeMoreLess--15zvH",
					listContent: "vr-rates-section-RatesSection__listContent--fIwmS",
					defaultRateContainer: "vr-rates-section-RatesSection__defaultRateContainer--3mf2p",
					ratesListing: "vr-rates-section-RatesSection__ratesListing--1BqSl",
					ratesCurrencyLabel: "vr-rates-section-RatesSection__ratesCurrencyLabel--3Gb_4",
					monthSelector: "vr-rates-section-RatesSection__monthSelector--1X7_n",
					calendarIcon: "vr-rates-section-RatesSection__calendarIcon--1pa67",
					dropDownIcon: "vr-rates-section-RatesSection__dropDownIcon--6uwiV",
					monthSelectorContainer: "vr-rates-section-RatesSection__monthSelectorContainer--G96P5",
					minStayLabel: "vr-rates-section-RatesSection__minStayLabel--1eAdw",
					ratesSection: "vr-rates-section-RatesSection__ratesSection--12AC4"
				};
			n.d(t, "default", function() {
				return C
			});
			var g = function e(t) {
					var n = t.name,
						a = t.feeType,
						s = t.description,
						r = t.costPerUnit;
					return b.createElement("div", {
						className: "".concat(R.listContent)
					}, s ? Object(E.localize)("vr_fee_with_description", {
						sFeeName: n,
						nCost: r,
						sFeeType: a,
						sDescription: s
					}) : Object(E.localize)("vr_fee_without_description", {
						sFeeName: n,
						nCost: r,
						sFeeType: a
					}))
				},
				N = function e(t) {
					return b.createElement("div", {
						className: "".concat(R.ratesListing)
					}, b.createElement("div", null, b.createElement("div", null, Object(E.localize)("vr_date_range_span", {
						sFirstDate: t.startDate,
						sSecondDate: t.endDate
					})), b.createElement("div", {
						className: "".concat(R.minStayLabel)
					}, Object(E.localize)("vr_calendar_min_stay", {
						nNumNights: t.minStay
					}))), b.createElement("div", null, b.createElement("div", null, E.globalize.formatCurrency(t.cost)), b.createElement("div", {
						className: "".concat(R.ratesCurrencyLabel)
					}, Object(E.localize)("vacation_rental_per_night_fffff29c"))))
				},
				C = function(e) {
					function t(e) {
						var n;
						c()(this, t), n = m()(this, u()(t).call(this, e)), S()(f()(f()(n)), "setMonth", function(e) {
							n.setState({
								month: e
							})
						}), S()(f()(f()(n)), "SEASONAL_RATE_TIMESPAN", 14), S()(f()(f()(n)), "handleMonthChange", function(e) {
							e.target instanceof HTMLSelectElement && n.setMonth(Number.parseInt(e.target.value, 10))
						}), S()(f()(f()(n)), "toggleExtended", function() {
							n.setState({
								isExtended: !n.state.isExtended
							})
						}), S()(f()(f()(n)), "validRate", function(e) {
							return e > 0
						}), S()(f()(f()(n)), "createMonthsList", function() {
							n.state.months.map(function(e, t) {
								return b.createElement("option", {
									value: "".concat(t),
									key: e.toString()
								}, E.globalize.formatDate("date_full_month_year", e))
							})
						}), S()(f()(f()(n)), "renderRates", function() {
							var e = n.props.rental.seasonalRates[n.state.month];
							return e ? e.map(function(e) {
								return b.createElement(N, s()({}, e, {
									key: JSON.stringify(e)
								}))
							}) : null
						}), S()(f()(f()(n)), "renderFees", function() {
							var e = n.props.rental.fees && n.props.rental.fees.length ? n.props.rental.fees : null;
							return e ? b.createElement("div", {
								className: "".concat(R.ratesSection)
							}, b.createElement("div", {
								className: "".concat(R.ratesSectionSubTitle, " ui_header h3")
							}, Object(E.localize)("vr_fees_81f")), e.map(function(e) {
								return b.createElement(g, s()({}, e, {
									key: JSON.stringify(e)
								}))
							})) : null
						}), S()(f()(f()(n)), "renderBasicRates", function() {
							return b.createElement("div", {
								className: n.props.className
							}, b.createElement("div", {
								className: "".concat(R.seeMoreLess),
								onClick: '#'
							}, Object(E.localize)("vr_see_more_rates_and_fees")))
						});
						for (var a = new Date, r = [], i = 0; i < n.SEASONAL_RATE_TIMESPAN; i++) r.push(new Date(a.getFullYear(), a.getMonth() + i, 1));
						return n.state = {
							month: 0,
							isExtended: !1,
							months: r
						}, n
					}
					return h()(t, e), l()(t, [{
						key: "renderRatesWithMonthPicker",
						value: function e() {
							return b.createElement("div", {
								className: this.props.className,
								id: "vr-detail-page-rates-and-fees"
							}, b.createElement("div", {
								className: "".concat(R.ratesSectionSubTitle, " ui_header h3")
							}, Object(E.localize)("vr_detail_sectionRates_171f")), b.createElement("div", null, this.props.rental.defaultSeasonalRate && b.createElement("div", {
								className: "".concat(R.defaultRateContainer)
							}, b.createElement("div", null, b.createElement("div", null, Object(E.localize)("vr_detail_default_rate_14cd")), b.createElement("div", {
								className: "".concat(R.minStayLabel)
							}, Object(E.localize)("vr_calendar_min_stay", {
								nNumNights: this.props.rental.defaultSeasonalRate.minStay
							}))), b.createElement("div", null, b.createElement("div", null, E.globalize.formatCurrency(this.props.rental.defaultSeasonalRate.cost)), b.createElement("div", {
								className: "".concat(R.ratesCurrencyLabel)
							}, Object(E.localize)("vacation_rental_per_night_fffff29c")))), this.props.rental.seasonalRates && Object.keys(this.props.rental.seasonalRates).length > 0 ? b.createElement("div", null, b.createElement("div", {
								className: "".concat(R.monthSelectorContainer)
							}, b.createElement("span", {
								className: "".concat(R.calendarIcon, " ui_icon calendar")
							}), b.createElement("select", {
								className: "".concat(R.monthSelector),
								onChange: this.handleMonthChange
							}, this.createMonthsList()), b.createElement("span", {
								className: "".concat(R.dropDownIcon, " ui_icon single-chevron-down")
							})), b.createElement("div", {
								className: "".concat(R.ratesListContainer)
							}, this.renderRates())) : null), this.renderFees(), b.createElement("div", {
								className: "".concat(R.seeMoreLess),
								onClick: this.toggleExtended
							}, Object(E.localize)("vr_see_less_rates_and_fees")))
						}
					}, {
						key: "render",
						value: function e() {
							return this.state.isExtended ? this.renderRatesWithMonthPicker() : this.renderBasicRates()
						}
					}]), t
				}(b.Component)
		}
	}
});
//# sourceMappingURL=vr.rates-section.65faae073d.js.map

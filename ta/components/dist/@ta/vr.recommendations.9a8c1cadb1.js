($WP = "undefined" != typeof $WP ? $WP : []).push({
    id: "@ta/vr.recommendations",
    d: ["vendor-babel", "vendor-react-libs", "ta-platform", "lithium-platform", "ta-common", "@ta/vr.rap", "@ta/vr.common"],
    e: ["./packages/vr/recommendations/index.jsx"],
    x: {
        "./packages/vr/recommendations/index.jsx": ["Recommendations", "ConnectedRecommendations"]
    },
    m: {
        "./packages/vr/recommendations/index.jsx": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("@babel/runtime/helpers/esm/extends"),
                r = n.n(a),
                o = n("react"),
                i = n("@ta/common.routing"),
                m = n("@ta/common.i18n"),
                l = n("@ta/media.image"),
                s = n("@ta/styleguide.bubble-rating"),
                c = n("@ta/styleguide.loading"),
                d = n("@ta/vr.rap"),
                u = n("@ta/vr.common"),
                p = function e(t) {
                    return t && t.length > 0 ? [{
                        url: t[0].largeUrl,
                        width: t[0].stdWidth,
                        height: t[0].stdHeight
                    }] : []
                },
                g = {
                    big: {
                        width: "240px",
                        height: "150px"
                    },
                    small: {
                        width: "215px",
                        height: "150px"
                    }
                },
                v = function e(t) {
                    var n = t.rental,
                        a = t.stayLength,
                        r = t.rapData,
                        c = n.numOfReviews,
                        u = n.averageRatingNumber,
                        v = n.detailPageUrl,
                        h = u ? n.averageRatingNumber : 0,
                        R = Object(d.getPeriodDisplayForRapData)(n, r, a),
                        f = g[t.size] || g.big,
                        b = f.width,
                        _ = f.height;
                    return o.createElement(i.Link, {
                        target: "_blank",
                        className: "vr-recommendations-Recommendations__cellElement--1ZYQT",
                        href: v
                    }, o.createElement("div", {
                        className: "vr-recommendations-Recommendations__imageContainer--3GYjS"
                    }, o.createElement(l.ResponsiveImage, {
                        width: b,
                        height: _,
                        borderRadius: "2px",
                        sources: p(n.photos)
                    })), R ? o.createElement("div", {
                        className: "vr-recommendations-Recommendations__priceContainer--2ESy1"
                    }, o.createElement("span", {
                        className: "vr-recommendations-Recommendations__priceCost--2Ld9C"
                    }, R.periodCost), " ", R.periodCopy) : null, c && h ? o.createElement(s.BubbleRatingWithReviewCount, {
                        numReviews: c,
                        rating: h,
                        fontSize: 14
                    }) : null, o.createElement("div", {
                        className: "vr-recommendations-Recommendations__sleepsString--1urVZ"
                    }, function e(t) {
                        var n = t.bathCount,
                            a = t.roomCount,
                            r = t.sleepCount,
                            o = [];
                        if (a >= 0) {
                            var i = 0 === a ? Object(m.localize)("vr_studio_room") : Object(m.localize)("vr_mobile_plural_bedrooms", {
                                0: a
                            });
                            o.push(i)
                        }
                        return n && o.push(Object(m.localize)("vr_mobile_plural_baths", {
                            0: n
                        })), r && o.push(Object(m.localize)("vr_detail_sleeps_171f", {
                            0: r
                        })), o.join(", ")
                    }(n)))
                };
            v.defaultProps = {
                rapData: null,
                size: "big"
            };
            var h = function e(t) {
                    return o.createElement("div", {
                        className: "vr-recommendations-Recommendations__rentalCellContainer--3ZfON"
                    }, t.recommendationResponse && t.recommendationResponse.rentals && t.recommendationResponse.rentals.map(function(e) {
                        var n = t.recommendationResponse.locationRapDataMap[e.id];
                        return o.createElement(v, {
                            size: "MOBILE" === t.viewportCategory ? "small" : "big",
                            rental: e,
                            key: e.id,
                            rapData: n,
                            stayLength: t.stayLength
                        })
                    }))
                },
                R = function e(t) {
                    if ("DESKTOP" !== t.viewportCategory) return o.createElement(h, t);
                    var n = t.recommendationResponse,
                        a = n.rentals,
                        i = n.locationRapDataMap;
                    if (!a) return null;
                    var m = a.slice(0, 3),
                        l = a.slice(3, a.length);
                    return o.createElement(o.Fragment, null, o.createElement(h, r()({}, t, {
                        recommendationResponse: {
                            rentals: m,
                            locationRapDataMap: i
                        }
                    })), l.length ? o.createElement("div", {
                        style: {
                            marginTop: 10
                        }
                    }, o.createElement(h, r()({}, t, {
                        recommendationResponse: {
                            rentals: l,
                            locationRapDataMap: i
                        }
                    }))) : null)
                },
                f = function e(t) {
                    var n = t.loading,
                        a = t.recommendationResponse,
                        r = t.stayLength,
                        i = t.viewportCategory;
                    if (n) return o.createElement(c.LoadingSpinner, null);
                    if (!a || !a.rentals || 0 === a.rentals.length) return null;
                    var l = a.rentals.map(function(e) {
                        return e.id
                    }).join(",");
                    return o.createElement("div", null, o.createElement(u.SectionHeader, {
                        title: Object(m.localize)("vr_similar_rentals")
                    }), o.createElement("div", {
                        className: "vr-recommendations-Recommendations__recommendations--12l1-"
                    }, o.createElement(u.Fade, {
                        in: !0,
                        key: l
                    }, o.createElement(R, {
                        recommendationResponse: a,
                        stayLength: r,
                        viewportCategory: i
                    }))))
                };
            f.defaultProps = {
                recommendationResponse: null
            };
            var b = f,
                _ = n("@ta/common.api"),
                E = Object(_.bind)(function(e, t) {
                    var n = e.route.detail,
                        a = e.travelerInfo.vr,
                        r = 0;
                    if (a) {
                        var o = a.start,
                            i = a.end;
                        r = o && i ? function m(e, t) {
                            var n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                                a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
                            return Math.floor((a - n) / 864e5)
                        }(new Date(o), new Date(i)) : 0
                    }
                    var l = t(function e(t, n, a) {
                        return function e(t) {
                            var n = t.numToGet,
                                a = t.detailId,
                                r = t.start,
                                o = t.end,
                                i = new URLSearchParams({
                                    numToGet: n.toString()
                                });
                            return r && o && (i.set("start", r), i.set("end", o)), asset_path + "/data/1.0/vr/rental/".concat(a, "/recommendations?").concat(i.toString())
                        }({
                            numToGet: t,
                            detailId: n,
                            start: a && a.start,
                            end: a && a.end
                        })
                    }(6, n, a));
                    return function() {
                        return {
                            recommendationResponse: l.get().data,
                            loading: l.get().loading,
                            stayLength: r,
                            viewportCategory: e.meta.device.viewportCategory
                        }
                    }
                })(b),
                C = Object(_.loadOnMount)(E);
            n.d(t, "Recommendations", function() {
                return b
            }), n.d(t, "ConnectedRecommendations", function() {
                return C
            })
        }
    }
});
//# sourceMappingURL=vr.recommendations.9a8c1cadb1.js.map

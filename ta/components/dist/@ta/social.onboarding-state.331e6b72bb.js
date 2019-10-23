($WP = "undefined" != typeof $WP ? $WP : []).push({
	id: "@ta/social.onboarding-state",
	se: !0,
	d: ["ta-platform"],
	e: ["./packages/social/onboarding-state/onboardingState.jsx"],
	m: {
		"./packages/social/onboarding-state/onboardingState.jsx": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "CONFIRM_USERNAME_ENTRYPOINTS", function() {
				return a
			}), n.d(e, "STATE_ACCESS", function() {
				return i
			}), n.d(e, "getState", function() {
				return r
			}), n.d(e, "ACTIONS", function() {
				return d
			});
			var o = n("@ta/common.state"),
				a = new Set(["MASTHEAD", "GOOGLE_ONETAP", "GOOGLE_ONETAP_NON_HOME", "TA_TWOTAP", "TA_TWOTAP_NON_HOME", "FACEBOOK_ONETAP", "FACEBOOK_ONETAP_NON_HOME", "FACEBOOK_ENGAGEMENT_CARD", "HOMEPAGE_LEFT_RAIL"]),
				i = new o.PrivateStateAccessor("onboarding-state", {
					shouldFire: !1,
					immediateLoad: !1,
					entryPoint: "UNKNOWN"
				}),
				r = function t(e) {
					return i.getFrom(e)
				},
				d = {
					setShouldFire: function t(e, n) {
						return i.action({
							type: "FIRE_ONBOARDING",
							immediateLoad: e || !1,
							entryPoint: n || "UNKNOWN"
						})
					},
					resetShouldFire: function t() {
						return i.action({
							type: "RESET"
						})
					}
				};
			i.setReducer(function(t, e) {
				switch (e.type) {
					case "FIRE_ONBOARDING":
						return {
							shouldFire: !0,
							immediateLoad: e.immediateLoad,
							entryPoint: e.entryPoint
						};
					case "RESET":
						return {
							shouldFire: !1,
							immediateLoad: !1,
							entryPoint: "UNKNOWN"
						};
					default:
						return t
				}
			}), define("@ta/social.onboarding-state", [], function() {
				return n("@ta/social.onboarding-state")
			})
		}
	}
});
//# sourceMappingURL=social.onboarding-state.331e6b72bb.js.map

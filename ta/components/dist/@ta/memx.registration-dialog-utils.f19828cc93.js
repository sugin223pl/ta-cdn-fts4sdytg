($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/memx.registration-dialog-utils",d:["@ta/common.sessionstorage","@ta/common.localstorage","lithium-platform"],e:["./packages/memx/registration-dialog-utils/RegistrationDialogUtilities.jsx"],x:{"./packages/memx/registration-dialog-utils/RegistrationDialogUtilities.jsx":["ADHESION_COLLAPSE_ADVERTISER_ID","HOTEL_SERVLETS","ATTRACTIONS_SERVLETS","RESTAURANTS_SERVLETS","FLIGHTS_SERVLETS","FORUM_SERVLETS","userSignedOut","setRegDialogDismissed","userPreviouslyClosedRegDialog","userSignedOutRecently","shouldSuppressRegistrationDialog","isCpmMwAdhesionDismissed","isCpmMwAdhesionUnitEnabled","shouldIgnoreAdhesionUnit","doesAdExistOnPage","moveAdCloseX"]},m:{"./packages/memx/registration-dialog-utils/RegistrationDialogUtilities.jsx":function(e,t,i){"use strict";i.r(t),i.d(t,"ADHESION_COLLAPSE_ADVERTISER_ID",function(){return u}),i.d(t,"HOTEL_SERVLETS",function(){return E}),i.d(t,"ATTRACTIONS_SERVLETS",function(){return p}),i.d(t,"RESTAURANTS_SERVLETS",function(){return h}),i.d(t,"FLIGHTS_SERVLETS",function(){return A}),i.d(t,"FORUM_SERVLETS",function(){return D}),i.d(t,"userSignedOut",function(){return T}),i.d(t,"setRegDialogDismissed",function(){return x}),i.d(t,"userPreviouslyClosedRegDialog",function(){return L}),i.d(t,"userSignedOutRecently",function(){return I}),i.d(t,"shouldSuppressRegistrationDialog",function(){return w}),i.d(t,"isCpmMwAdhesionDismissed",function(){return C}),i.d(t,"isCpmMwAdhesionUnitEnabled",function(){return F}),i.d(t,"shouldIgnoreAdhesionUnit",function(){return H}),i.d(t,"doesAdExistOnPage",function(){return P}),i.d(t,"moveAdCloseX",function(){return N});var s=i("@ta/common.sessionstorage"),n=i.n(s),o=i("@ta/common.localstorage"),a=i.n(o),r=i("@ta/common.features"),u=55978451,l="-16px",d="-3px",c="regDialogDismissed",g="regDialogDismissedCount",_=18e4,m=Object(r.featureIsEnabled)("memx_reg_dialogs_12h_suppression")?432e5:864e5,f=2592e6,S="lastSignOutTime",R=864e5,b="ads.fixed.close",E=["Hotel_Review","Hotels","SmartDeals","HotelHighlight","HotelsNear","HotelsList","LastMinute","MobileSmartDeals","MobileHotelHighlight","LocalMapsRedesign","MobileLocalMaps"],p=["Attractions","Attraction_Review","AttractionProductDetail","AttractionsNear","Attraction_Products","AttractionProductReview","MobileAttraction_Review","MobileAttractions","MobileAttractionProductDetail","MobileAttractionsNear","MobileAttraction_Products","MobileAttractionProductReview","AttractionsLander"],h=["Restaurant_Review","Restaurants","RestaurantsNear","MobileRestaurants","MobileRestaurantsNear","MobileRestaurantSearch","RestaurantsLander","MobileNearbyRestaurants"],A=["Flights","MobileFlights","CheapFlightsSearchResults","CheapFlightsSearchDeals","MobileCheapFlightsSearchResults","FlightsRoute","Airline_Review","CheapFlightsHome","FlightsFrom"],D=["ShowTopic","ShowForum","NewTopic","MobileShowForum","MobileShowTopic"];function T(){return a.a.has(S)}function v(){a.a.set(c,1,m)}function O(){a.a.set(c,1,f),a.a.remove(g)}function M(){a.a.remove(c),a.a.remove(g)}function x(){if(!Object(r.featureIsEnabled)("memx_reg_dialogs_suppression_test_1")&&!Object(r.featureIsEnabled)("memx_reg_dialogs_suppression_test_1_expanded")){var e=a.a.get(g)||0;if(a.a.set(g,e+1,0),Object(r.featureIsEnabled)("memx_reg_dialogs_suppression_test_2")||Object(r.featureIsEnabled)("memx_reg_dialogs_suppression_test_2_expanded"))switch(e){case 0:break;case 1:v();break;case 2:O();break;default:M()}else{if(Object(r.featureIsEnabled)("memx_reg_dialogs_suppression_test_3"))return 0===e?void v():void M();if(Object(r.featureIsEnabled)("memx_reg_dialogs_suppression_test_4"))switch(e){case 0:!function t(){a.a.set(c,1,_)}();break;case 1:v();break;case 2:O();break;default:M()}else e<2?v():O()}}}function L(){return Object(r.featureIsEnabled)("memx_reg_dialogs_suppression_test_3")?1===(a.a.get(g)||0)&&(M(),!0):null!==a.a.get(c)}function I(){var e=a.a.get(S);if(!e){var t=n.a.get(S);return void 0!==t&&t+R>(new Date).getTime()}return e+R>(new Date).getTime()}function w(){return!Object(r.featureIsEnabled)("hard_gate_google_one_tap_2pv_mw")&&(L()||I())}function C(){var e=n.a.get(b);return void 0!==e&&"true"===e}function F(){return Object(r.featureIsEnabled)("mobile_fixed_ad")}function H(){return!F()||C()}function P(){var e=document.querySelector("#FIXED_AD .gptAd");if(!e)return!1;var t=e.getAttribute("data-advertiser-id");return t&&t!==u.toString()}function N(e){var t=document.getElementsByClassName("close_ad");t&&0!==t.length&&(t[0].style.top=e?l:d)}}}});
//# sourceMappingURL=memx.registration-dialog-utils.f19828cc93.js.map
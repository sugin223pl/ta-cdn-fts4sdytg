($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/trips.trip-link",d:["vendor-react-libs","vendor-redux-libs","lithium-platform","@ta/trips.states"],e:["./packages/trips/trip-link/TripLinkWidget.jsx"],x:{"./packages/trips/trip-link/TripLinkWidget.jsx":["default","ssrQueries"]},m:{"./packages/trips/trip-link/TripLinkWidget.jsx":function(e,t,r){"use strict";r.r(t),r.d(t,"ssrQueries",function(){return m});var a=r("react"),n=r("react-redux"),i=r("@ta/common.classnames"),s=r.n(i),c=r("@ta/common.features"),l=r("@ta/common.i18n"),p=r.n(l),o=r("@ta/trips.states");t.default=Object(n.connect)(function(e){return{viewportCategory:e.meta.device.viewportCategory}})(function e(t){return"MOBILE"===t.viewportCategory?function e(){return a.createElement(o.TripsLink,{loggedInElement:a.createElement("a",{href:"/Trips",className:"nav-sub-link remove-border","data-tracking-label":"My_trips"},p()("trips_product_name")),loggedOutElement:function e(t){return a.createElement("a",{className:"nav-sub-link remove-border","data-tracking-label":"My_trips",onClick:t},p()("trips_product_name"))}})}():function e(){var t=Object(c.featureIsEnabled)("trips_heart_icon")?"heart":"suitcase";return a.createElement(o.TripsLink,{loggedInElement:a.createElement("a",{className:"trips-icon labeled-trips-icon",href:"/Trips"},a.createElement("span",{className:s()("trips-icon-tablet","ui_icon",t)},a.createElement("span",{className:"my-trips-label"},p()("trips_product_name")))),loggedOutElement:function e(){return a.createElement("a",{className:"trips-icon labeled-trips-icon",href:"/Trips"},a.createElement("span",{className:s()("trips-icon-tablet","ui_icon",t)},a.createElement("span",{className:"my-trips-label"},p()("trips_product_name"))))}})}()});var m=function e(){return[]}}}});
//# sourceMappingURL=trips.trip-link.4e1d7cd44d.js.map
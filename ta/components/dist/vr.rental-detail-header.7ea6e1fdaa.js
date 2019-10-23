($WP="undefined"!=typeof $WP?$WP:[]).push({id:"vr.rental-detail-header",d:["vendor-babel","vendor-react-libs","lithium-platform","ta-platform","@ta/cpm.ad-target","@ta/vr.common","@ta/common.breadcrumbs","@ta/trips.trip-flow-selector","@ta/trips.bookmark-icon","ta-common","@ta/vr.remarketing"],e:["./roots/vr/rental-detail-header/rental-detail-header.jsx"],x:{"./roots/vr/rental-detail-header/rental-detail-header.jsx":["default"]},m:{"./roots/vr/rental-detail-header/rental-detail-header.jsx":function(e,t,a){"use strict";a.r(t);var r=a("@babel/runtime/helpers/esm/classCallCheck"),n=a.n(r),i=a("@babel/runtime/helpers/esm/createClass"),o=a.n(i),l=a("@babel/runtime/helpers/esm/possibleConstructorReturn"),s=a.n(l),c=a("@babel/runtime/helpers/esm/getPrototypeOf"),m=a.n(c),d=a("@babel/runtime/helpers/esm/inherits"),u=a.n(d),v=a("@babel/runtime/helpers/esm/assertThisInitialized"),g=a.n(v),p=a("@babel/runtime/helpers/esm/defineProperty"),b=a.n(p),f=a("react"),h=a("@ta/common.features"),_=a("@ta/common.api"),k=a("@ta/common.state"),w=a("@ta/common.tracking"),y=a.n(w),E=a("@ta/common.i18n"),I=a("@ta/cpm.ad-target"),R=a.n(I),L=a("@ta/vr.common"),N=a("@ta/common.breadcrumbs"),O=a("@ta/trips.trip-flow-selector"),C=a("@ta/trips.bookmark-icon"),S=a("@ta/styleguide.bubble-rating"),M=a("@ta/vr.remarketing"),T="vr-rental-detail-header-styles__title--3aHYb",x=function e(t){return(t-t%.5).toString().replace(".","")},P=function e(t){var a=t.averageRatingNumber,r=t.numOfReviews;return f.createElement("div",{className:"ui_poi_review_rating"},f.createElement("span",{className:"ui_star_rating star_".concat(x(a))}),f.createElement("span",{className:"reviewCount"},Object(E.localize)("mobile_reviews_plural",{0:E.globalize.formatNumber("integer",r)})))},j=function e(t){return t.titleInfo?f.createElement("h1",{className:"".concat(T," propertyHeading"),"data-lang":"".concat(t.titleInfo.reqLang,"-x-mtfrom-").concat(t.titleInfo.srcLang)},t.titleInfo.title):f.createElement("h1",{className:"".concat(T," propertyHeading")},t.name)},W=function e(){var t=document.querySelector("#REVIEWS");t&&window.scroll({top:t.offsetTop,behavior:"smooth"})},B=function(e){function t(){var e,a;n()(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return a=s()(this,(e=m()(t)).call.apply(e,[this].concat(i))),b()(g()(g()(a)),"onLoginMesages",function(e){try{var t=JSON.parse(e.data).resultData;if(t){var r=(t=JSON.parse(t)).user_id;window.require("page-model").session.user_id=r,window.require("page-model").session.loggedIn=!0,window.require("ta/registration/RegEvents").emit("success"),a.props.setLoggedInUserId(r)}}catch(e){}}),a}return u()(t,e),o()(t,[{key:"componentDidMount",value:function e(){var t=this.props,a=t.route,r=t.isDated;this.listenToLoginIFrame(),Object(L.tryStoringPartnerReference)(a),y()({module:"VR",action:"VR_".concat(r?"dated":"undated","_on_Page_Load_VRR")})}},{key:"componentWillUnmount",value:function e(){this.unlistenToLoginIFrame()}},{key:"unlistenToLoginIFrame",value:function e(){window.removeEventListener("message",this.onLoginMesages)}},{key:"listenToLoginIFrame",value:function e(){window.addEventListener("message",this.onLoginMesages)}},{key:"render",value:function e(){var t=this.props,a=t.rental,r=t.breadcrumbs,n=t.isMobile;if(!a)return null;var i=a.averageRatingNumber,o=a.numOfReviews,l=a.isAffiliate;return f.createElement("div",{className:"".concat("vr-rental-detail-header-styles__container--3OcxD"," ").concat(o?"":"vr-rental-detail-header-styles__noReview--2QMHm")},!n&&f.createElement(R.a,{size:"728x90-970x66",position:"b",additionalWrapperClass:"vr-rental-detail-header-styles__reserveBannerAdSpace--vG4MG"}),f.createElement("div",{className:"ui_container ".concat("vr-rental-detail-header-styles__spaceBetween--1wKi2")},f.createElement("div",null,n&&r&&Object.keys(r).length>0&&f.createElement("div",{className:"vr-rental-detail-header-styles__breadcrumbContainer--1V10L"},f.createElement(N.InlineBreadcrumbs,{breadcrumbs:r})),f.createElement(j,{titleInfo:a.titleInfo,name:a.name}),o?f.createElement("div",{onClick:W},l?f.createElement(P,{numOfReviews:o,averageRatingNumber:i}):f.createElement(S.BubbleRatingWithReviewCount,{rating:i,numReviews:o})):null),Object(h.featureIsEnabled)("social_2018")&&f.createElement("div",{className:"vr-rental-detail-header-styles__saveToTripWrapper--AfQrC"},f.createElement(O.QueriedTripFlowSelector,{object:{__typename:"LocationInformation",locationId:a.id},allowPopStatModal:!0},function(e,t){return n?f.createElement(C.BookmarkIcon,{active:t,onClick:e,bookmarkSize:"24",bookmarkStyle:"outline",decorated:!1}):f.createElement(C.BookmarkIcon,{active:t,onClick:e,bookmarkSize:"20",bookmarkStyle:"outline",decorated:!1},function(e){return f.createElement("span",{className:"vr-rental-detail-header-styles__savesText--1ROaS"},e)})}))),f.createElement(M.PageMonikerIframe,{title:"vr-detail-page-remarketing-pageview",marketingOptions:{pixelType:"PAGEVIEW"}}))}}]),t}(f.Component),z=function e(t){if(!t)return!1;var a=t.start,r=t.end;return!!a&&!!r},V=Object(_.bind)({data:function e(t,a){var r=t.route.detail,n=a("".concat("/data/1.0/vr/detailBreadcrumbs","/").concat(r)),i=a("".concat("/data/1.0/vr/rental/").concat(r));return function(){return{breadcrumbs:n&&n.get().data,loading:i&&i.get().loading&&n&&n.get().loading,rental:i.get().data,isMobile:"MOBILE"===t.meta.device.viewportCategory,route:t.route,isDated:z(t.travelerInfo.vr)}}},actions:{setLoggedInUserId:k.actions.auth.setLoggedInUserId}})(B);t.default=V}}});
//# sourceMappingURL=vr.rental-detail-header.7ea6e1fdaa.js.map
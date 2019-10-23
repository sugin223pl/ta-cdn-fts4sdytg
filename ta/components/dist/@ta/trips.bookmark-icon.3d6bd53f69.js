($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/trips.bookmark-icon",d:["vendor-babel","vendor-react-libs","lithium-platform","ta-common","ta-platform","vendor-redux-libs"],e:["./packages/trips/bookmark-icon/index.jsx"],x:{"./packages/trips/bookmark-icon/index.jsx":["BookmarkIcon","EncircledBookmarkIcon"]},m:{"./packages/trips/bookmark-icon/index.jsx":function(o,r,e){"use strict";e.r(r);var n=e("@babel/runtime/helpers/esm/defineProperty"),a=e.n(n),t=e("react"),c=e("@ta/common.classnames"),i=e.n(c),k=e("@ta/common.features"),m=e("@ta/styleguide.icon"),s=e("@ta/common.i18n"),l=e("@ta/common.logging"),_=e.n(l),p=function o(r){var e;return e={},a()(e,"trips-bookmark-icon-BookmarkIcon__s_18--2mZag","18"===r),a()(e,"trips-bookmark-icon-BookmarkIcon__s_20--34b4_","20"===r),a()(e,"trips-bookmark-icon-BookmarkIcon__s_22--2XSYJ","22"===r),a()(e,"trips-bookmark-icon-BookmarkIcon__s_24--1qqII","24"===r),a()(e,"trips-bookmark-icon-BookmarkIcon__s_30--34HSr","30"===r),e},b=function o(r,e,n){var c,k,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=arguments.length>4?arguments[4]:void 0,_=arguments.length>5?arguments[5]:void 0;return t.createElement("span",{className:i()("ui_icon_stacked","trips-bookmark-icon-BookmarkIcon__stacked_bookmark--1tNOx",p(r))},t.createElement("span",{className:i()("trips-bookmark-icon-BookmarkIcon__stacked_bookmark_inner--3_Hwh")},t.createElement(m.Icon,{name:e,className:i()("stacked","trips-bookmark-icon-BookmarkIcon__innerIcon--27zbK",(c={},a()(c,"trips-bookmark-icon-BookmarkIcon__outline--9p6p4",s),a()(c,"trips-bookmark-icon-BookmarkIcon__heart--2jI5-",l),c))}),t.createElement(m.Icon,{name:n,className:i()("stacked","trips-bookmark-icon-BookmarkIcon__outerIcon--2zQ1T",(k={},a()(k,"trips-bookmark-icon-BookmarkIcon__outline--9p6p4",s),a()(k,"trips-bookmark-icon-BookmarkIcon__heart--2jI5-",l),a()(k,"trips-bookmark-icon-BookmarkIcon__animated_heart--1bh5Q",_),k))})))},d=function o(r){var e,n,c=r.bookmarkStyle,l=r.bookmarkSize,d=r.active,u=r.onClick,I=r.vertical,h=r.decorated,v=r.children,B=r.lineHeight,f=r.bookmarkTextStyle,E=r.animated,g=Object(k.featureIsEnabled)("trips_saves_heart"),j=function o(r,e,n,c){var k=n?"heart-fill":"bookmark-fill",s=n?"heart":"bookmark";return"stacked"===r?b(e,k,s,!1,n,c):"flat"===r?function o(r,e,n){return t.createElement(m.Icon,{className:i()("trips-bookmark-icon-BookmarkIcon__flatIcon--S_UuH",p(r),a()({},"trips-bookmark-icon-BookmarkIcon__heart--2jI5-",n)),name:e})}(e,k,n):"outline"===r?b(e,k,s,!0,n,c):(_.a.warn("Bookmark style ".concat(r," not found.")),null)}(c,l,g,g&&E),x=d?Object(s.localize)("social_Saved"):Object(s.localize)("trips_save_CTA"),C=null==v?void 0:v(x),y=B&&{lineHeight:"".concat(B,"px")};return t.createElement("div",{className:i()("trips-bookmark-icon-BookmarkIcon__container--1daVm",(e={},a()(e,"trips-bookmark-icon-BookmarkIcon__vertical--y8NwI",I),a()(e,"trips-bookmark-icon-BookmarkIcon__no_decoration--arZYx",!h),a()(e,"trips-bookmark-icon-BookmarkIcon__active--AxF3r",d),a()(e,"trips-bookmark-icon-BookmarkIcon__dark_icon--18ItN",Object(k.featureIsEnabled)("hr_dark_green_icons")),a()(e,"trips-bookmark-icon-BookmarkIcon__heart--2jI5-",g),e)),onClick:u},j,C&&t.createElement("div",{style:y,className:i()("ui_link","trips-bookmark-icon-BookmarkIcon__children--WewBp",(n={},a()(n,"trips-bookmark-icon-BookmarkIcon__text--FSF5L","green"===f),a()(n,"trips-bookmark-icon-BookmarkIcon__heart--2jI5-",g),n))},C))};d.defaultProps={bookmarkSize:"30",active:!1,onClick:function o(){},vertical:!1,children:function o(){return null},decorated:!0,lineHeight:void 0,animated:!1};var u=d,I=e("@babel/runtime/helpers/esm/classCallCheck"),h=e.n(I),v=e("@babel/runtime/helpers/esm/createClass"),B=e.n(v),f=e("@babel/runtime/helpers/esm/possibleConstructorReturn"),E=e.n(f),g=e("@babel/runtime/helpers/esm/getPrototypeOf"),j=e.n(g),x=e("@babel/runtime/helpers/esm/inherits"),C=e.n(x),y=e("react-redux"),N=function(o){function r(){return h()(this,r),E()(this,j()(r).apply(this,arguments))}return C()(r,o),B()(r,[{key:"render",value:function o(){var r;return t.createElement("span",{className:i()("trips-bookmark-icon-EncircledBookmarkIcon__encircled_bookmark--NQNS5","trips-bookmark-icon-EncircledBookmarkIcon__ripple--M7qbf",(r={},a()(r,"trips-bookmark-icon-EncircledBookmarkIcon__active--1U79Q",this.props.active),a()(r,"trips-bookmark-icon-EncircledBookmarkIcon__hovered--2aDPJ",this.props.hovered),a()(r,"trips-bookmark-icon-EncircledBookmarkIcon__hoverable--2k-iK","MOBILE"!==this.props.viewportCategory),a()(r,"trips-bookmark-icon-EncircledBookmarkIcon__heart--f1Fu6",Object(k.featureIsEnabled)("trips_saves_heart")),r)),onClick:this.props.onClick},t.createElement(m.Icon,{name:Object(k.featureIsEnabled)("trips_saves_heart")?"heart-fill":"bookmark-fill"}))}}]),r}(t.PureComponent);a()(N,"defaultProps",{onClick:function o(){},hovered:!1});var O=Object(y.connect)(function(o){return{viewportCategory:o.meta.device.viewportCategory}})(N);e.d(r,"BookmarkIcon",function(){return u}),e.d(r,"EncircledBookmarkIcon",function(){return O})}}});
//# sourceMappingURL=trips.bookmark-icon.3d6bd53f69.js.map
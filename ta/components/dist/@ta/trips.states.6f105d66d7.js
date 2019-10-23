($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/trips.states",d:["vendor-babel","vendor-react-libs","vendor-redux-libs","lithium-platform","ta-platform","ta-common","@ta/trips.tracking","@ta/social.login-gate","@ta/overlays.fullscreen-overlay","@ta/overlays.modal"],e:["./packages/trips/states/index.jsx"],x:{"./packages/trips/states/index.jsx":["FinishedLoading","LoggedOutControlled","LoggedOut","LoggedOutGates","TripsLink"]},m:{"./packages/trips/states/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("@babel/runtime/helpers/esm/objectSpread"),o=n.n(r),a=n("@babel/runtime/helpers/esm/classCallCheck"),l=n.n(a),i=n("@babel/runtime/helpers/esm/possibleConstructorReturn"),s=n.n(i),c=n("@babel/runtime/helpers/esm/getPrototypeOf"),u=n.n(c),d=n("@babel/runtime/helpers/esm/createClass"),m=n.n(d),g=n("@babel/runtime/helpers/esm/inherits"),p=n.n(g),_=n("react"),f=function(e){function t(e){var n;return l()(this,t),(n=s()(this,u()(t).call(this,e))).state={deferCallback:!1,isMounted:!1},n}return p()(t,e),m()(t,null,[{key:"getDerivedStateFromProps",value:function e(t,n){return t.loading?o()({},n,{hasEverFinishedLoading:!0}):o()({},n)}}]),m()(t,[{key:"componentDidMount",value:function e(){this.state.deferCallback&&!this.props.loading?(this.props.onFinishedLoading(),this.setState({deferCallback:!1,isMounted:!0})):this.setState({isMounted:!0})}},{key:"componentDidUpdate",value:function e(t){this.state.isMounted&&t.loading&&!this.props.loading&&this.props.onFinishedLoading()}},{key:"render",value:function e(){return null}}]),t}(_.Component),v=n("@babel/runtime/helpers/esm/defineProperty"),h=n.n(v),b=n("react-redux"),L=n("@ta/common.i18n"),C=n("@ta/common.cdn"),E=n("@ta/common.classnames"),O=n.n(E),y=n("@ta/common.features"),k=n("@ta/styleguide.button"),w=n.n(k),j=n("@ta/trips.tracking"),F=n("@ta/common.routing"),z=function e(t){return _.createElement("div",null,_.createElement(F.HeadProperties,{title:Object(L.localize)("trips_lander_title"),metaTags:[{name:"description",content:Object(L.localize)("trips_lander_md")}]}),_.createElement("h1",{className:O()("trips-states-LoggedOutControlled__say_hello--VvZUA","trips-states-LoggedOutControlled__header--15BtE")},t))},I=function e(t){var n=t.onLoginClicked,r=t.onLoginFlowComplete,o=t.joinGate,a=t.loginGate,l=t.preventLogInteraction,i=t.isMobile,s=t.placement;return _.createElement(j.TripInteraction,{source:"trips"},function(e){var t,c,u=function t(n){return e(h()({},n,{element:"trips_login_nav"}))},d="PAGE"===s,m="MODAL"===s;return _.createElement("div",{className:"trips-states-LoggedOutControlled__logged_out_container--1gNN8"},_.createElement("div",{className:O()("trips-states-LoggedOutControlled__section_one--2WY0J",(t={},h()(t,"trips-states-LoggedOutControlled__align_center--12AqS",d&&!i),h()(t,"trips-states-LoggedOutControlled__with_border--3hdTG",m),t))},d?function e(t){var n=Object(L.localize)("trips_lander_header");return _.createElement(_.Fragment,null,t&&_.createElement(C.CdnImage,{className:"trips-states-LoggedOutControlled__ta_logo--mKy23",src:asset_path2+"/img2/branding/rebrand/TA_logo_primary.svg"}),z(n),_.createElement("ul",{className:"trips-states-LoggedOutControlled__list--3TgiW"},_.createElement("li",null,Object(L.localize)("trips_lander_copy_1")),_.createElement("li",null,Object(L.localize)("trips_lander_copy_2")),_.createElement("li",null,Object(L.localize)("trips_lander_copy_3b"))))}(i):function e(){var t=Object(L.localize)("trips_education_amazing_ideas_one_place");return _.createElement(_.Fragment,null,_.createElement("div",{className:"trips-states-LoggedOutControlled__logo_wrapper--3dor7"},_.createElement(C.CdnImage,{className:"trips-states-LoggedOutControlled__ta_logo--mKy23",src:asset_path2+"/img2/branding/rebrand/TA_logo_primary.svg"})),z(t),_.createElement("div",{className:"trips-states-LoggedOutControlled__text--1ryou"},Object(L.localize)("trips_education_easy_save_orgaize_map_bring_with_you")))}(),_.createElement("div",null,_.createElement(w.a,{type:"primary",size:d&&!i?"default":"fullwidth",onClick:function e(){n&&n(),l||u("elementClick"),o().then(function(){return!l&&u("modalSuccess")}).then(r)}},Object(L.localize)("empty_trip_home_get_started")),_.createElement("a",{className:O()("trips-states-LoggedOutControlled__log_in--2o7wz","ui_link"),onClick:function e(){n&&n(),l||u("elementClick"),a().then(function(){return!l&&u("modalSuccess")}).then(r)}},Object(L.localize)("trips_log_in_now")))),_.createElement("div",{className:O()("trips-states-LoggedOutControlled__section_two--yicNl",(c={},h()(c,"trips-states-LoggedOutControlled__page_image--2LWby",d),h()(c,"trips-states-LoggedOutControlled__modal_image--1Jbnj",m),h()(c,"trips-states-LoggedOutControlled__heart--1ldpO",Object(y.featureIsEnabled)("trips_saves_heart")),c))}))})};I.defaultProps={onLoginClicked:void 0,onLoginFlowComplete:void 0,placement:"MODAL"};var M=Object(b.connect)(function(e){return{isMobile:"MOBILE"===e.meta.device.viewportCategory}})(I),S=n("@ta/social.login-gate"),N=function e(t){var n=t.onLoginSuccess,r=t.children,o=t.extraRegParams;return _.createElement(S.SocialLoginGate,{flowOrigin:"login",pid:40612,onLoginSuccess:n},function(e){return _.createElement(S.SocialLoginGate,{flowOrigin:"join",pid:40612,onLoginSuccess:n,extraRegParams:o},function(t){return r(t,e)})})},P=function e(t){var n=t.onLoginFlowComplete;return _.createElement(N,null,function(e,t){return _.createElement(M,{onLoginFlowComplete:n,joinGate:e,loginGate:t})})};P.defaultProps={onLoginClicked:void 0,onLoginFlowComplete:void 0},N.defaultProps={onLoginSuccess:void 0};var x=n("@babel/runtime/helpers/esm/assertThisInitialized"),G=n.n(x),T=n("@ta/overlays.fullscreen-overlay"),A=n.n(T),W=n("@ta/overlays.modal"),B=n("@ta/overlays.managers"),D=function(e){function t(){var e,n;l()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(o))),h()(G()(G()(n)),"state",{show:!1}),n}return p()(t,e),m()(t,[{key:"renderInner",value:function e(t,n){var r=this,o=this.props,a=o.isLoggedIn,l=o.isMobile,i=o.loggedInElement,s=o.loggedOutElement;return _.createElement(j.TripInteraction,{source:"trips"},function(e){var o=function t(){return e({elementClick:{element:l?"mw_trips":"mastheadCta"}})};if(a)return _.createElement("span",{onClick:o},i);var c=_.createElement("div",{className:"modal-container"},_.createElement(F.RouteConsumer,null,function(e){var r=e.navigate;return _.createElement(M,{joinGate:t,loginGate:n,onLoginFlowComplete:function e(){return r({page:"Trips",login:!0})}})}));return _.createElement(_.Fragment,null,l?_.createElement(_.Fragment,null,s(function(){o(),r.setState({show:!0})}),r.state.show&&_.createElement(A.a,{closeButton:!0,onClose:function e(){return r.setState({show:!1})}},c)):_.createElement(_.Fragment,null,_.createElement(B.Opener,{name:"trip-link-widget-modal"},function(e){return s(function(){o(),e()})}),_.createElement(W.Modal,{name:"trip-link-widget-modal",isFullBleed:!0,closeXColorVariant:"WHITE"},c)))})}},{key:"render",value:function e(){var t=this;return _.createElement(N,null,function(e,n){return t.renderInner(e,n)})}}]),t}(_.Component),R=Object(b.connect)(function(e){return{isLoggedIn:e.auth.isMember,isMobile:"MOBILE"===e.meta.device.viewportCategory}})(D);n.d(t,"FinishedLoading",function(){return f}),n.d(t,"LoggedOutControlled",function(){return M}),n.d(t,"LoggedOut",function(){return P}),n.d(t,"LoggedOutGates",function(){return N}),n.d(t,"TripsLink",function(){return R})}}});
//# sourceMappingURL=trips.states.6f105d66d7.js.map
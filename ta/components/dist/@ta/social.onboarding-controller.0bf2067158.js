($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/social.onboarding-controller",d:["vendor-babel","vendor-react-libs","vendor-redux-libs","vendor-apollo-libs","@ta/common.localstorage","@ta/social.tooltip-state","@ta/social.onboarding-state","@ta/overlays.modal","ta-common","lithium-platform"],e:["./packages/social/onboarding-controller/OnboardingController.jsx"],x:{"./packages/social/feed/feedFragments/HometownFields.fragment.gql":["a"],"./packages/social/onboarding-controller/OnboardingController.jsx":["OnboardingController","default"]},m:{"./packages/social/feed/feedFragments/HometownFields.fragment.gql":function(e,n,i){"use strict";var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"HometownFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MemberLocation"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fallbackString"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"additionalNames"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"long"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"parent"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:203}};a.loc.source={body:"cd3d893a1d20"},n.a=a},"./packages/social/onboarding-controller/OnboardingController.jsx":function(e,n,i){"use strict";i.r(n);var a=i("@babel/runtime/helpers/esm/classCallCheck"),t=i.n(a),o=i("@babel/runtime/helpers/esm/createClass"),d=i.n(o),l=i("@babel/runtime/helpers/esm/possibleConstructorReturn"),r=i.n(l),s=i("@babel/runtime/helpers/esm/getPrototypeOf"),m=i.n(s),c=i("@babel/runtime/helpers/esm/inherits"),u=i.n(c),g=i("@babel/runtime/helpers/esm/assertThisInitialized"),k=i.n(g),v=i("@babel/runtime/helpers/esm/defineProperty"),b=i.n(v),p=i("react"),f=i("react-redux"),N=i("react-apollo"),F=i("@ta/common.localstorage"),S=i.n(F),h=i("@ta/social.tooltip-state"),y=i("@ta/social.onboarding-state"),_=i("@ta/overlays.modal"),O=i("@ta/styleguide.loading"),D=i("@ta/platform.import"),I=i("./packages/social/feed/feedFragments/HometownFields.fragment.gql"),C={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"OnboardingProfile"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loggedIn"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"memberProfiles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userIds"},value:{kind:"ListValue",values:[{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}]}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"photoSizes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hometown"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"HometownFields"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"myExternallyConnectedAccountTypes"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"loggedIn"}}}]}]},{kind:"Field",name:{kind:"Name",value:"insightProfile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uiCardsState"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"states"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:533}};C.loc.source={body:"db3c37e81623"};var E={};C.definitions=C.definitions.concat(function w(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!E[n]&&(E[n]=!0,!0)})}(I.a.definitions));var A=C;i.d(n,"OnboardingController",function(){return U});var P,L=D.component.onUsage(((P=function e(){return i.e("@ta/social.onboarding-modal")}).__PACKAGE__="@ta/social.onboarding-controller",P.__MODULE_ID__="@ta/social.onboarding-modal",P.__MODULE_NAME__="@ta/social.onboarding-modal",P.__BUNDLE_NAME__="@ta/social.onboarding-modal",P.__GET_SYNC__=function(){return i.m["@ta/social.onboarding-modal"]?i("@ta/social.onboarding-modal"):null},P.__IS_LOADED__=function(){return void 0!==i.m["@ta/social.onboarding-modal"]},P),"default",function(e){var n=e.firedFrom;return y.CONFIRM_USERNAME_ENTRYPOINTS.has(n)&&p.createElement(_.ModalView,{isFullBleed:!0},p.createElement("div",{className:"social-onboarding-controller-OnboardingController__wrapper--3lmbe"},p.createElement(O.LoadingSpinner,null)))}),T=["MASTHEAD","BRAND_EDUCATOR","FACEBOOK_ENGAGEMENT_CARD","UNKNOWN"],U=function(e){function n(e){var i;return t()(this,n),i=r()(this,m()(n).call(this,e)),b()(k()(k()(i)),"onFlowEnd",function(e){i.allowsPageRefresh()&&e?(S.a.set(h.OnboardingCompleteReloadKey,!0),window.location.reload()):(i.setState({disabled:!0}),i.props.onboardingDone())}),b()(k()(k()(i)),"onClose",function(){i.setState({disabled:!0}),i.props.onboardingDone()}),b()(k()(k()(i)),"onDisable",function(){return i.setState({disabled:!0})}),b()(k()(k()(i)),"allowsPageRefresh",function(){return i.isHome()&&T.includes(i.state.firedFrom)}),b()(k()(k()(i)),"isHome",function(){return"Home"===i.props.servlet}),b()(k()(k()(i)),"userIsLoggedIn",function(){return null!==i.props.loggedInUserId}),i.state={disabled:!1,waitForSignal:!0,firedFrom:"UNKNOWN"},i}return u()(n,e),d()(n,[{key:"componentDidMount",value:function e(){this.props.shouldFire&&this.setState({disabled:!1,waitForSignal:!1,firedFrom:this.props.entryPoint})}},{key:"componentDidUpdate",value:function e(n){!n.shouldFire&&this.props.shouldFire&&this.setState({disabled:!1,waitForSignal:!1,firedFrom:this.props.entryPoint})}},{key:"render",value:function e(){var n=this;return this.state.waitForSignal||this.props.readOnly||this.state.disabled?null:p.createElement(N.Query,{query:A,variables:{userId:this.props.loggedInUserId,loggedIn:this.userIsLoggedIn()},errorPolicy:"all"},function(e){var i=e.loading,a=e.data;return p.createElement(L,{firedFrom:n.state.firedFrom,onFlowEnd:n.onFlowEnd,onClose:n.onClose,onDisable:n.onDisable,immediateLoad:n.props.immediateLoad,loading:i,data:a})})}}]),n}(p.Component);n.default=Object(f.connect)(function(e){return{loggedInUserId:e.auth.loggedInUserId,viewportCategory:e.meta.device.viewportCategory,shouldFire:Object(y.getState)(e).shouldFire,immediateLoad:Object(y.getState)(e).immediateLoad,entryPoint:Object(y.getState)(e).entryPoint,readOnly:e.meta.readonlyMode,servlet:e.meta.initialServletName}},{onboardingDone:h.ACTIONS.onboardingDone})(U)}}});
//# sourceMappingURL=social.onboarding-controller.0bf2067158.js.map
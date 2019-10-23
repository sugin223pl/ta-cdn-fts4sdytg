($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/trips.trip-flow-selector",d:["vendor-babel","vendor-react-libs","vendor-redux-libs","vendor-common","@ta/overlays.toast","@ta/common.webview","ta-platform","@ta/social.login-gate","lithium-platform","@ta/trips.saver","@ta/trips.trip-types","@ta/trips.trip-constants","@ta/trips.pixel","@ta/trips.tracking","@ta/trips.trip-util","@ta/trips.trip-toasts","@ta/common.localstorage","@ta/trips.trip-errors","@ta/overlays.modal","@ta/overlays.headers","vendor-apollo-libs","ta-common","@ta/trips.graphql","vendor-urql"],e:["./packages/trips/trip-flow-selector/index.jsx"],x:{"./packages/trips/trip-flow-selector/index.jsx":["TripFlowSelector","QueriedTripFlowSelector"]},m:{"./packages/trips/trip-flow-selector/index.jsx":function(e,t,a){"use strict";a.r(t);var r,o=a("@babel/runtime/helpers/esm/extends"),n=a.n(o),i=a("@babel/runtime/helpers/esm/toConsumableArray"),s=a.n(i),l=a("@babel/runtime/helpers/esm/classCallCheck"),c=a.n(l),p=a("@babel/runtime/helpers/esm/createClass"),u=a.n(p),d=a("@babel/runtime/helpers/esm/possibleConstructorReturn"),v=a.n(d),m=a("@babel/runtime/helpers/esm/getPrototypeOf"),T=a.n(m),_=a("@babel/runtime/helpers/esm/inherits"),f=a.n(_),S=a("@babel/runtime/helpers/esm/assertThisInitialized"),E=a.n(S),b=a("@babel/runtime/helpers/esm/defineProperty"),g=a.n(b),C=a("react"),h=a("react-redux"),I=a("js-cookie"),M=a.n(I),A=a("@ta/overlays.toast"),y=a("@ta/common.webview"),O=a("@ta/common.routing"),k=a("@ta/social.login-gate"),j=a("@ta/common.tracking"),L=a.n(j),P=a("@ta/common.features"),D=a("@ta/trips.saver"),w=a.n(D),N=(a("@ta/trips.trip-types"),a("@ta/trips.trip-constants")),U=a("@ta/trips.pixel"),x=a("@ta/trips.tracking"),R=a("@ta/trips.trip-util"),F=a("@ta/trips.trip-toasts"),V=a("@ta/common.localstorage"),q=a.n(V),G=a("@ta/trips.trip-errors"),Q=a("@babel/runtime/helpers/esm/objectSpread"),B=a.n(Q),z=a("@ta/overlays.modal"),H=a("@ta/overlays.headers"),W=a("react-apollo"),Y=a("@ta/styleguide.loading"),K=a("@ta/loading.error"),X=a("@ta/common.i18n"),$=a("@ta/trips.graphql"),Z=a("@ta/platform.import"),J=Object.freeze({DEFAULT:function e(t){return"bundleSave"!==t?Object(X.localize)("stat_modal_save_to_trip_v2"):Object(X.localize)("save_all_items_modal_header")},CREATE:function e(){return Object(X.localize)("stat_modal_create_a_trip_v2")},SELECT:function e(){return Object(X.localize)("select_trip_header")},SELECT_CREATE:function e(){return Object(X.localize)("stat_modal_create_a_trip_v2")}}),ee=function e(t){var a=C.useContext(O.RouteContext).route,r="Trips"===(null==a?void 0:a.page),o=Object($.selectQuery)("STAT_MODAL",r?"TRIP_DETAIL":t.placement);return C.createElement(W.Query,{query:null==o?void 0:o.query,displayName:null==o?void 0:o.displayName,notifyOnNetworkStatusChange:!0,fetchPolicy:"network-only",errorPolicy:"all",variables:{offset:0,limit:10,userId:t.userId,reference:Object(R.toReference)(t.saveObject),loadSavedTrips:!0,socialReference:Object(P.featureIsEnabled)("social_at_referencing_profile_links")},onCompleted:t.onQueryComplete},function(e){var a=e.data,r=e.loading,o=e.error,n=e.refetch,i=e.fetchMore,l=Object(P.featureIsEnabled)("trips_skip_check_whitelist_public_trips");return C.createElement(W.Query,{skip:l,query:$.GetUserAuthZInfo},function(e){var c,p,u,d=(null==a?void 0:a.paginatedTrips)||{},v=d.trips,m=void 0===v?[]:v,T=d.hasMore,_=void 0===T||T,f=(a||{}).savedTrips,S=void 0===f?[]:f;r?u=C.createElement(Y.LoadingSpinner,{size:"large"}):!m&&o&&(u=C.createElement(K.LoadingErrorMessage,{refetch:n}));var E=new Set(S.map(function(e){return e.id}).filter(Boolean)),b=B()({},e),g=l||(null===(c=b.data)||void 0===c?void 0:null===(p=c.authzInfo)||void 0===p?void 0:p.canMakePublicTrip),h={loadingNode:u,tripList:m,saveSet:E,hasMore:_,getMoreTrips:function e(){return i({variables:{offset:(null==m?void 0:m.length)||0,loadSavedTrips:!1},updateQuery:function e(t,a){var r=a.fetchMoreResult;return r?Object.assign({},t,{paginatedTrips:{trips:[].concat(s()(t.paginatedTrips.trips),s()(r.paginatedTrips.trips)),hasMore:r.paginatedTrips.hasMore,__typename:t.paginatedTrips.__typename},savedTrips:t.savedTrips}):t}})},canMakePublicTrip:g};return t.children(h)})})},te=Z.component.onUsage(((r=function e(){return a.e("@ta/trips.tracking")}).__PACKAGE__="@ta/trips.trip-flow-selector",r.__MODULE_ID__="@ta/trips.tracking",r.__MODULE_NAME__="@ta/trips.tracking",r.__BUNDLE_NAME__="@ta/trips.tracking",r.__GET_SYNC__=function(){return a.m["@ta/trips.tracking"]?a("@ta/trips.tracking"):null},r.__IS_LOADED__=function(){return void 0!==a.m["@ta/trips.tracking"]},r),"TripInteraction"),ae=Z.component.onUsage(function(){var e=function e(){return a.e("@ta/trips.create-trip-modal")};return e.__PACKAGE__="@ta/trips.trip-flow-selector",e.__MODULE_ID__="@ta/trips.create-trip-modal",e.__MODULE_NAME__="@ta/trips.create-trip-modal",e.__BUNDLE_NAME__="@ta/trips.create-trip-modal",e.__GET_SYNC__=function(){return a.m["@ta/trips.create-trip-modal"]?a("@ta/trips.create-trip-modal"):null},e.__IS_LOADED__=function(){return void 0!==a.m["@ta/trips.create-trip-modal"]},e}(),"CreateTripWithAddItemModal",C.createElement("div",{className:"trips-trip-flow-selector-STATModal__loadingContainer--1tP79"},C.createElement(Y.LoadingSpinner,{size:"large"}))),re=Z.component.onUsage(function(){var e=function e(){return a.e("@ta/trips.create-trip-modal")};return e.__PACKAGE__="@ta/trips.trip-flow-selector",e.__MODULE_ID__="@ta/trips.create-trip-modal",e.__MODULE_NAME__="@ta/trips.create-trip-modal",e.__BUNDLE_NAME__="@ta/trips.create-trip-modal",e.__GET_SYNC__=function(){return a.m["@ta/trips.create-trip-modal"]?a("@ta/trips.create-trip-modal"):null},e.__IS_LOADED__=function(){return void 0!==a.m["@ta/trips.create-trip-modal"]},e}(),"CreateTripWithMoveItemModal",C.createElement("div",{className:"trips-trip-flow-selector-STATModal__loadingContainer--1tP79"},C.createElement(Y.LoadingSpinner,{size:"large"}))),oe=Z.component.onUsage(function(){var e=function e(){return a.e("@ta/trips.save-to-trip-modal")};return e.__PACKAGE__="@ta/trips.trip-flow-selector",e.__MODULE_ID__="@ta/trips.save-to-trip-modal",e.__MODULE_NAME__="@ta/trips.save-to-trip-modal",e.__BUNDLE_NAME__="@ta/trips.save-to-trip-modal",e.__GET_SYNC__=function(){return a.m["@ta/trips.save-to-trip-modal"]?a("@ta/trips.save-to-trip-modal"):null},e.__IS_LOADED__=function(){return void 0!==a.m["@ta/trips.save-to-trip-modal"]},e}(),"SaveToTripContent",C.createElement("div",{className:"trips-trip-flow-selector-STATModal__loadingContainer--1tP79"},C.createElement(Y.LoadingSpinner,{size:"large"}))),ne=function(e){function t(e){var a;return c()(this,t),a=v()(this,T()(t).call(this,e)),g()(E()(E()(a)),"closeModal",function(){a.props.onClose(),a.setState({splashLoad:!0})}),g()(E()(E()(a)),"clearSplashLoad",function(){a.setState({splashLoad:!1})}),a.state={splashLoad:!0},a}return f()(t,e),u()(t,[{key:"render",value:function e(){var t=this,a=J[this.props.overlayState](this.props.saveObject.type),r=C.createElement(H.TitleBar,{iconName:Object(P.featureIsEnabled)("trips_heart_icon")?"heart":"suitcase",displayType:"LEFT_ALIGN_GRAY"},a),o=this.props,n=o.loggedInUserId,i=o.saveObject,s=o.placement;return C.createElement(j.Impression,{source:"trips",attributes:Object(x.getTripsImpression)({element:"bundleSave"===i.type?"copyTripModal":"saveTripModal"})},C.createElement(z.ModalView,{header:r,isFullBleed:!0,onClose:this.closeModal},C.createElement(ee,{userId:n,saveObject:i,onQueryComplete:function e(){t.clearSplashLoad()},placement:s||"DEFAULT"},function(e){return e.loadingNode&&t.state.splashLoad?C.createElement("div",{className:"trips-trip-flow-selector-STATModal__loadingContainer--1tP79"},e.loadingNode):t.content(e)})))}},{key:"content",value:function e(t){var a=this,r=this.props,o=r.saveObject,n=r.lastSavedItem,i=r.trackingContext,s=r.onError,l=Object(R.toSavesObject)(n),c=function e(){return C.createElement(te,{source:"trips",trackingContext:i,pageAsContext:!0,withSaveSession:!0},function(e){return C.createElement("div",{className:"trips-trip-flow-selector-STATModal__modalPadding--36qa6"},C.createElement(ae,{object:o,onMount:function a(){t.loadingNode||e({elementClick:{element:"createTrip"}})},onAddedToCreatedTrip:function e(t){a.props.statCallback("ADD","NEW",t,!0,!0),a.closeModal()},onError:s,canMakePublicTrip:t.canMakePublicTrip,placement:a.props.placement||"DEFAULT",validateTripName:a.props.validateTripName}))})};switch(this.props.overlayState){case"DEFAULT":return 0===t.tripList.length?c():C.createElement(te,{source:"trips",trackingContext:i,pageAsContext:!0,withSaveSession:!0},function(e){return C.createElement(oe,{tripList:t.tripList,savedSet:t.saveSet,tripListBottom:t.loadingNode,onPaginate:t.getMoreTrips,hasMore:t.hasMore,saveObject:o,onMount:function t(){a.props.preventInteractionInMountedComponents||e({elementClick:{element:"stat"}})},onCreateTrip:function e(){a.props.onCreateTripClicked&&a.props.onCreateTripClicked()},tripAction:"SAVE",onRemovedFromTrip:function e(t,r,o){a.props.statCallback("REMOVE","EXISTING",t,r,o),a.closeModal()},onSavedToTrip:function e(t,r,o){a.props.statCallback("ADD","EXISTING",t,r,o),a.closeModal()},onError:s,placement:a.props.placement||"DEFAULT"})});case"CREATE":return c();case"SELECT":return l?C.createElement(te,{source:"trips",trackingContext:i,pageAsContext:!0,withSaveSession:!0},function(e){return C.createElement(oe,{tripList:t.tripList,savedSet:t.saveSet,tripListBottom:t.loadingNode,onPaginate:t.getMoreTrips,hasMore:t.hasMore,saveObject:l,onMount:function t(){e({elementClick:{element:"stat"}})},onCreateTrip:function e(){a.props.onSelectCreateTripClicked&&a.props.onSelectCreateTripClicked()},tripAction:"MOVE",onMovedToTrip:function e(t,r,o){a.props.statCallback("MOVE","EXISTING",t,r,o),a.closeModal()},onRemovedFromTrip:function e(t,r,o){a.props.statCallback("REMOVE","EXISTING",t,r,o),a.closeModal()},onError:s,placement:a.props.placement||"DEFAULT"})}):"";case"SELECT_CREATE":return n?C.createElement("div",{className:"trips-trip-flow-selector-STATModal__modalPadding--36qa6"},C.createElement(re,{item:n,onMovedToCreatedTrip:function e(t){a.props.statCallback("MOVE","NEW",t,!0,!0),a.closeModal()},canMakePublicTrip:t.canMakePublicTrip,placement:this.props.placement||"DEFAULT"})):c();default:return""}}}]),t}(C.PureComponent);g()(ne,"defaultProps",{placement:"DEFAULT"});var ie=ne,se=["Profile","HomeFeed","Trips","TripsWebview","Home"],le=new Set(["savesItem","bundleSave"]),ce=function(e){function t(e){var a;return c()(this,t),a=v()(this,T()(t).call(this,e)),g()(E()(E()(a)),"launchToast",void 0),g()(E()(E()(a)),"removeToast",void 0),g()(E()(E()(a)),"removeHash",function(){if(a.hasPopStatHash()){var e=window.location.toString();if(e.indexOf("#")>0){var t=e.substring(0,e.indexOf("#"));window.history.replaceState({},document.title,t)}}}),g()(E()(E()(a)),"hasPopStatHash",function(){var e,t;return"#POPSTAT"===(null===(e=window)||void 0===e?void 0:null===(t=e.location)||void 0===t?void 0:t.hash)}),g()(E()(E()(a)),"popStatQueryParamEnabled",function(){return a.props.autoPopSTAT}),g()(E()(E()(a)),"popStatCookieEnabled",function(){return Object(P.featureIsEnabled)("email_pop_stat_cookie")&&M.a.get("emailPopSTATModal")}),g()(E()(E()(a)),"removePopStatCookie",function(){M.a.remove("emailPopSTATModal",{path:"/",domain:a.props.cookieDomain})}),g()(E()(E()(a)),"popStatEnabled",function(){return!!a.props.allowPopStatModal&&(a.hasPopStatHash()||a.popStatCookieEnabled()||a.popStatQueryParamEnabled())&&Object(P.featureIsEnabled)("trips_pop_stat_modal")}),g()(E()(E()(a)),"onComplete",function(e){a.props.onComplete&&a.props.onComplete(e),a.props.resetSaveSession(),a.removeHash()}),g()(E()(E()(a)),"onModalClose",function(){a.setState({overlayState:"DEFAULT",preventInteractionInMountedComponents:!1,statModalVisible:!1}),a.props.resetSaveSession(),a.removeHash()}),g()(E()(E()(a)),"onCreateTripClicked",function(){a.setState({overlayState:"CREATE"})}),g()(E()(E()(a)),"onSelectCreateTripClicked",function(){a.setState({overlayState:"SELECT_CREATE"})}),g()(E()(E()(a)),"onUndoRemoveAction",function(e){a.launchTripToast(Object(F.viewTripToast)(e,"SAVED")),a.setState({overlayState:"DEFAULT"}),a.onComplete(!0)}),g()(E()(E()(a)),"getFirstCommentBody",function(e){var t=e.comments;return t&&t.length>0?t[0].body:null}),g()(E()(E()(a)),"openModal",function(){a.setState({statModalVisible:!0})}),g()(E()(E()(a)),"openFlow",function(e,t){var r=Object(R.toSavesObject)(a.props.object);if(r){if(!y.NativeBridge.isNativeWebview()||!y.NativeBridge.isActionSupported("presentSavesModal",2))return t().then(function(){var t=a.getMostRecentlyAddedToTrip();return a.props.active||!t||le.has(r.type)?a.openModal():e(t),a.state.overlayState});var o=r.id,n=r.type,i=r.originalObject,s=a.getFirstCommentBody(a.props.object);y.NativeBridge.showSavesModal({id:o,type:n,note:s,originalObject:i&&{type:i.type,id:i.id}})}}),g()(E()(E()(a)),"onSuccessfulAutosave",function(e,t){a.launchTripToast(Object(F.autoSavedToTripToast)(e,function e(){a.setState({overlayState:"SELECT",statModalVisible:!0})},a.removeToast)),a.setState({overlayState:"DEFAULT",lastAutosavedItem:t}),a.onComplete(!0)}),g()(E()(E()(a)),"onSuccessfulSave",function(e,t){"CREATED"===t&&U.fireSave(),a.setState({overlayState:"DEFAULT",preventInteractionInMountedComponents:!0}),a.launchTripToast(Object(F.viewTripToast)(e,t)),a.setMostRecentlyAddedToTrip(e.id),a.onComplete(!0)}),g()(E()(E()(a)),"onSaveError",function(e){a.launchTripToast(Object(F.tripsErrorTripToast)(e))}),a.state={overlayState:"DEFAULT",lastAutosavedItem:null,preventInteractionInMountedComponents:!1,statModalVisible:!1},a}return f()(t,e),u()(t,[{key:"componentDidMount",value:function e(){this.popStatEnabled()&&(this.popStatCookieEnabled()&&this.removePopStatCookie(),this.props.logInteraction({elementClick:{element:"autoPopStat"}}),this.setState({statModalVisible:!0}))}},{key:"launchTripToast",value:function e(t){this.launchToast&&this.launchToast.apply(this,s()(t))}},{key:"showUndoRemoveToast",value:function e(t){var a=Object(R.toSavesObject)(this.props.object);a&&this.launchTripToast(Object(F.removeFromTripToast)(t,a,this.props.placement,this.onUndoRemoveAction))}},{key:"setMostRecentlyAddedToTrip",value:function e(t){q.a.set(N.MOST_RECENTLY_ADDED_TO_TRIP,{tripId:t,userId:this.props.loggedInUserId},144e5)}},{key:"getMostRecentlyAddedToTrip",value:function e(){if(this.popStatEnabled())return null;var t=q.a.get(N.MOST_RECENTLY_ADDED_TO_TRIP);return t&&t.userId===this.props.loggedInUserId?t.tripId:null}},{key:"render",value:function e(){var t=this;if(!Object(P.featureIsEnabled)("trips_bookmark"))return null;var a=this.props,r=a.children,o=a.logInteraction,n=a.puid,i=a.object,s=a.preventInteractionPropagation,l=a.trackingContext,c=a.loggedInUserId,p=a.placement,u=a.resaveTrip,d=a.saveSessionTracking,v=Object(R.toSavesObject)(i);return v?C.createElement(O.RouteConsumer,null,function(e){var a=e.route;return C.createElement(C.Fragment,null,C.createElement(k.SocialLoginGate,{tracking:{source:"trips",element:"ITEM_SAVE_LOGIN",attributes:{context:a?Object(x.getInteractionsContext)(a.page):void 0,puid:n,saveType:v.type&&v.type.toUpperCase(),detailId:v.id&&"".concat(v.id),tripId:null==u?void 0:u.id,sessionType:"SAVE",sessionUuid:d.sessionUuid,sessionOrder:d.sessionOrder}},pid:a&&a.page&&se.includes(a.page)?40439:39766,flow:"SAVES_COMBINED"},function(e){return C.createElement(w.a,{object:v,onSave:function e(a,r){o({modalSuccess:{element:"quickSave"}}),t.onSuccessfulAutosave(a,r)},placement:p,onError:t.onSaveError},function(n){return C.createElement("span",{onClick:function e(r){r.stopPropagation(),r.preventDefault(),!s&&c&&o({elementClick:{element:"item_save",tripId:null==u?void 0:u.id}}),t.props.active||U.fireSaveIntent();var n=t.props.active?"is_saved":"not_saved";L()({action:"saveCTA_click",module:"Trips|".concat(a.page),context:"Trips|".concat(v.type,"|").concat(n)})}},r(function(){return t.openFlow(n,e)}))})}),C.createElement(A.Toaster,null,function(e,a){return t.launchToast=e,t.removeToast=a,null}),t.state.statModalVisible&&C.createElement(ie,{saveObject:v,loggedInUserId:c,overlayState:t.state.overlayState,lastSavedItem:t.state.lastAutosavedItem,trackingContext:l,onCreateTripClicked:t.onCreateTripClicked,onSelectCreateTripClicked:t.onSelectCreateTripClicked,onClose:t.onModalClose,onError:t.onSaveError,preventInteractionInMountedComponents:t.state.preventInteractionInMountedComponents,statCallback:function e(a,r,o,n,i){"REMOVE"===a?(t.showUndoRemoveToast(o),t.onComplete(i)):"NEW"===r?t.onSuccessfulSave(o,"CREATED"):n&&t.onSuccessfulSave(o,"SAVED")},placement:p,validateTripName:function e(t){if("trip"===v.type&&t.trim().toLowerCase()===i.title.trim().toLowerCase())return Object(G.getLocalizedTripsErrorMessage)("COPY_TRIP",{type:"INVALID_VALUE",field:"TITLE"})}}))}):null}}]),t}(C.Component);g()(ce,"defaultProps",{preventInteractionPropagation:!1,onComplete:void 0,trackingContext:void 0,placement:void 0,allowPopStatModal:!1});var pe=Object(h.connect)(function e(t){return{loggedInUserId:t.auth.loggedInUserId,cookieDomain:t.meta.cookieDomain,autoPopSTAT:"true"===t.route.popStat}})(function e(t){return C.createElement(x.SaveSessionProvider,null,function(e,a){return C.createElement(x.TripInteraction,{source:"trips",trackingContext:t.trackingContext,saveObject:Object(R.toSavesObject)(t.object),withSaveSession:!0,pageAsContext:!0},function(r,o){return C.createElement(ce,n()({},t,{saveSessionTracking:e,resetSaveSession:a,logInteraction:r,puid:o}))})})}),ue=a("@babel/runtime/helpers/esm/slicedToArray"),de=a.n(ue),ve=a("urql"),me=a("@ta/common.logging"),Te=a.n(me),_e=new(a("@ta/common.state").PrivateStateAccessor)("is-saved-state",{savedMap:{}}),fe=function e(t,a){return"".concat(t).concat(a)},Se={updateSaved:function e(t,a,r){return _e.action({type:"UPDATE_SAVED",saveId:t,saveType:a,isSaved:r})}};_e.setReducerIfUnset(function(e,t){var a=e.savedMap,r=t.saveId,o=t.saveType,n=t.isSaved,i=t.type,s=B()({},a);return r&&o&&"UPDATE_SAVED"===i&&(s[fe(r,o)]=n),{savedMap:s}});var Ee,be=function e(t,a){return!0===t||!1===t?t:a},ge=function e(t){switch(null==t?void 0:t.page){case"Home":return"HOME";case"Profile":return"PROFILE";case"Trips":return(null==t?void 0:t.tripId)?"TRIP_DETAIL":"TRIPS";default:return"DEFAULT"}},Ce=function e(t,a){return t===$.LocationStatistics?a.locationId:t===$.AttractionStatistics?a.attractionProductId:a.id};(Ee=Object(P.featureIsEnabled)("hr_urql")?function e(t){var a=t.object,r=t.preventInteractionPropagation,o=t.trackingContext,n=t.children,i=t.isActive,s=t.updateSaved,l=t.trip,c=t.allowPopStatModal,p=C.useContext(O.RouteContext).route,u=!1;Object(P.featureIsEnabled)("trips_bookmark")||(u=!0);var d=Object(R.toSavesObject)(a);d||(Te.a.error("An invalid saves object was passed to QueriedTripFlowSelector"),u=!0);var v=d&&Object(R.objectStatisticQuery)(d)||{},m=v&&null===be(i,null)&&!u,T=Object(ve.useQuery)({query:v.query,variables:v.variables,pause:!m}),_=de()(T,1)[0];return C.useEffect(function(){if(_.data&&!_.fetching&&d){var e=_.data&&_.data.savesObjects&&_.data.savesObjects[0];if(e){var t=Ce(v.query,e),a=e.socialStatistics,r=void 0===a?{}:a,o=t===d.id&&!!r.isSaved;s(d.id,d.type,o)}}},[_.fetching]),u?null:C.createElement(pe,{object:a,active:!!i,preventInteractionPropagation:r,trackingContext:o,onComplete:function e(t){d&&s(d.id,d.type,t)},placement:ge(p),resaveTrip:l,allowPopStatModal:c},function(e){return n(e,!!i)})}:function e(t){var a=t.object,r=t.preventInteractionPropagation,o=t.trackingContext,n=t.children,i=t.isActive,s=t.updateSaved,l=t.trip,c=t.allowPopStatModal,p=C.useContext(O.RouteContext).route;if(!Object(P.featureIsEnabled)("trips_bookmark"))return null;var u=Object(R.toSavesObject)(a);if(!u)return Te.a.error("An invalid saves object was passed to QueriedTripFlowSelector"),null;var d=Object(R.objectStatisticQuery)(u)||{},v=d&&null===be(i,null);return C.createElement(W.Query,{query:d.query,variables:d.variables,skip:!v,onCompleted:function e(t){if(v){var a=t&&t.savesObjects&&t.savesObjects[0];if(a){var r=Ce(d.query,a),o=a.socialStatistics,n=void 0===o?{}:o,i=r===u.id&&!!n.isSaved;s(u.id,u.type,i)}}}},function(){return C.createElement(pe,{object:a,active:!!i,preventInteractionPropagation:r,trackingContext:o,onComplete:function e(t){s(u.id,u.type,t)},placement:ge(p),resaveTrip:l,allowPopStatModal:c},function(e){return n(e,!!i)})})}).defaultProps={object:null,trackingContext:void 0,allowPopStatModal:!1};var he=Object(h.connect)(function(e,t){var a,r,o=function e(t,a){var r=a?fe(a.id,a.type):"";return _e.getFrom(t).savedMap[r]}(e,Object(R.toSavesObject)(t.object)),n=null===(a=t.object)||void 0===a?void 0:null===(r=a.socialStatistics)||void 0===r?void 0:r.isSaved,i=be(o,n);return{loggedInUserId:e.auth.loggedInUserId,isActive:i}},{updateSaved:Se.updateSaved})(Ee);a.d(t,"TripFlowSelector",function(){return pe}),a.d(t,"QueriedTripFlowSelector",function(){return he})}}});
//# sourceMappingURL=trips.trip-flow-selector.46bd45f68c.js.map
($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/overlays.popover",d:["vendor-babel","vendor-react-libs","lithium-platform","@ta/events.event-boundary","@ta/events.window","@ta/overlays.attached-arrow-overlay","ta-common","@ta/overlays.pieces"],e:["./packages/overlays/popover/Popover.jsx"],x:{"./packages/overlays/popover/Popover.jsx":["getPosition","default"]},m:{"./packages/overlays/popover/Popover.jsx":function(e,o,r){"use strict";r.r(o);var t=r("@babel/runtime/helpers/esm/classCallCheck"),a=r.n(t),n=r("@babel/runtime/helpers/esm/createClass"),l=r.n(n),s=r("@babel/runtime/helpers/esm/possibleConstructorReturn"),p=r.n(s),i=r("@babel/runtime/helpers/esm/getPrototypeOf"),c=r.n(i),v=r("@babel/runtime/helpers/esm/inherits"),u=r.n(v),m=r("@babel/runtime/helpers/esm/defineProperty"),d=r.n(m),f=r("react"),h=r("@ta/common.classnames"),y=r.n(h),b=r("@ta/events.event-boundary"),E=r.n(b),g=r("@ta/events.window"),C=r.n(g),k=r("@ta/overlays.attached-arrow-overlay"),w=r.n(k),P=r("@ta/overlays.managers"),_=r("@ta/overlays.pieces"),T=function e(o){switch(o){case"TA_GRAY_3":return"overlays-popover-PopoverX__taGray3--oDaVS";case"TA_GREEN":default:return""}},A=function e(o){return f.createElement(P.Closer,{name:o.name},function(e){return f.createElement("div",{className:y()("overlays-popover-PopoverX__close--AKUEu",T(o.colorVariant)),onClick:e})})};A.defaultProps={name:void 0,colorVariant:"TA_GREEN"};var B=A;r.d(o,"getPosition",function(){return O});var x,O=function e(o){return void 0!==o.above?"above":void 0!==o.below?"below":void 0!==o.leftOf?"leftOf":"rightOf"},G=(x=0,function(){return"popover_".concat(x+=1)}),R=function(e){function o(e){var r;return a()(this,o),(r=p()(this,c()(o).call(this,e))).state={name:G()},r}return u()(o,e),l()(o,[{key:"render",value:function e(){var o=this,r=function e(r,t){var a=o.props.anchor&&o.props.anchor.current||t;if(!a)return null;var n=y()("overlays-popover-Popover__popover--2R2s5",d()({},"overlays-popover-Popover__fullBleed--1KK8s",o.props.fullBleed)),l=f.createElement(f.Fragment,null,f.createElement(w.a,{target:a,position:O(o.props),alignEdge:o.props.alignEdge,fixed:o.props.fixed,shiftX:o.props.shiftX,shiftY:o.props.shiftY,shiftArrow:o.props.shiftArrow,arrowType:o.props.arrowType,overlayType:o.props.overlayType},f.createElement(E.a,{events:["onClick","onTouchStart"]},f.createElement("div",{className:n,style:{minWidth:"".concat(o.props.minWidth||0,"px")},onClick:o.props.onClick,onMouseLeave:o.props.onMouseLeave,onBlur:o.props.onMouseLeave},o.props.contents(r),o.props.closeButton&&f.createElement(B,{name:o.props.local?o.state.name:void 0,colorVariant:o.props.closeButtonColorVariant})))),f.createElement(C.a,{event:"click",callback:r}),f.createElement(C.a,{event:"touchstart",callback:r}));return o.props.backdrop?f.createElement(_.Backdrop,{close:r},l):l};return f.createElement(P.Opener,{name:this.state.name,local:this.props.local},function(e,t){return f.createElement(P.Closer,{name:o.props.local?o.state.name:void 0},function(a){var n=function e(){a(),o.props.onClose&&o.props.onClose()};return f.createElement(_.Target,null,function(l,s){return f.createElement(f.Fragment,null,o.props.children(l,e,a,t),o.props.local?f.createElement(P.Local,{name:o.state.name},r(n,s)):f.createElement(P.Global,{name:o.state.name},r(n,s)))})})})}}]),o}(f.Component);d()(R,"defaultProps",{above:void 0,below:void 0,rightOf:void 0,leftOf:void 0,alignEdge:void 0,local:!1,closeButton:!0,closeButtonColorVariant:"TA_GREEN",onClose:void 0,onClick:void 0,shiftX:0,shiftY:0,shiftArrow:0,fixed:!1,arrowType:"large",backdrop:!1,fullBleed:!1,minWidth:0,overlayType:"modal",anchor:void 0}),o.default=R}}});
//# sourceMappingURL=overlays.popover.764a497b28.js.map
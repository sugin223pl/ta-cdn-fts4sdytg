($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/events.window-resize",d:["vendor-babel","vendor-react-libs","ta-platform"],e:["./packages/events/window-resize/WindowResize.jsx"],x:{"./packages/events/window-resize/WindowResize.jsx":["default"]},m:{"./packages/events/window-resize/WindowResize.jsx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return k});var s=t("@babel/runtime/helpers/esm/classCallCheck"),r=t.n(s),i=t("@babel/runtime/helpers/esm/createClass"),o=t.n(i),a=t("@babel/runtime/helpers/esm/possibleConstructorReturn"),l=t.n(a),u=t("@babel/runtime/helpers/esm/getPrototypeOf"),c=t.n(u),d=t("@babel/runtime/helpers/esm/inherits"),p=t.n(d),h=t("@babel/runtime/helpers/esm/assertThisInitialized"),m=t.n(h),b=t("@babel/runtime/helpers/esm/defineProperty"),f=t.n(b),w=t("react"),v=t("@ta/common.throttle"),z=t.n(v),k=function(e){function n(){var e,t;r()(this,n);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return t=l()(this,(e=c()(n)).call.apply(e,[this].concat(i))),f()(m()(m()(t)),"handleResize",z()(function(){t.props.callback()},t.props.throttle||0,t.props.useDebounce)),t}return p()(n,e),o()(n,[{key:"componentDidMount",value:function e(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function e(){return null}}]),n}(w.Component);f()(k,"defaultProps",{throttle:200,useDebounce:!1})}}});
//# sourceMappingURL=events.window-resize.3afb66deca.js.map
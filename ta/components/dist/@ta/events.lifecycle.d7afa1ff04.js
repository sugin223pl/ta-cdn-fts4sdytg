($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/events.lifecycle",d:["vendor-react-libs","vendor-babel"],e:["./packages/events/lifecycle/lifecycle.jsx"],x:{"./packages/events/lifecycle/lifecycle.jsx":["AfterPageLoad","MountListener"]},m:{"./packages/events/lifecycle/lifecycle.jsx":function(e,n,t){"use strict";t.r(n);var r=t("react"),o=t("@babel/runtime/helpers/esm/classCallCheck"),i=t.n(o),l=t("@babel/runtime/helpers/esm/createClass"),s=t.n(l),u=t("@babel/runtime/helpers/esm/possibleConstructorReturn"),a=t.n(u),c=t("@babel/runtime/helpers/esm/getPrototypeOf"),p=t.n(c),f=t("@babel/runtime/helpers/esm/inherits"),m=t.n(f),d=t("@babel/runtime/helpers/esm/assertThisInitialized"),b=t.n(d),h=t("@babel/runtime/helpers/esm/defineProperty"),v=t.n(h),y=function(e){function n(){var e,t;i()(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return t=a()(this,(e=p()(n)).call.apply(e,[this].concat(o))),v()(b()(b()(t)),"render",function(){return null}),t}return m()(n,e),s()(n,[{key:"componentDidMount",value:function e(){this.props.onComponentDidMount&&this.props.onComponentDidMount()}},{key:"componentWillUnmount",value:function e(){this.props.onComponentWillUnmount&&this.props.onComponentWillUnmount()}}]),n}(r.Component),C=function e(n){var t=n.callback,o=n.identifier;return r.createElement(y,{onComponentDidMount:function e(){var n=window.require;n&&t&&n(["ta/Core/TA.Event"],function(e){e&&e.queueForAfterLoad(t,o)})}})};t.d(n,"AfterPageLoad",function(){return C}),t.d(n,"MountListener",function(){return y})}}});
//# sourceMappingURL=events.lifecycle.d7afa1ff04.js.map
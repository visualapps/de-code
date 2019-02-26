(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/products/badge.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return o});var s=n("./node_modules/react/index.js"),l=n.n(s),c=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js");function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,a){if(null==e)return{};var n,s,l=function(e,a){if(null==e)return{};var n,s,l={},c=Object.keys(e);for(s=0;s<c.length;s++)n=c[s],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)n=c[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function p(e,a){for(var n=0;n<a.length;n++){var s=a[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function g(e,a){return!a||"object"!==t(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,a){return(i=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var o=function(e){function a(e){var n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(n=g(this,b(a).call(this,e))).layout=null,n}var n,s,t;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&i(e,a)}(a,l.a.Component),n=a,(s=[{key:"render",value:function(){var e=this.props,a=e.components,n=d(e,["components"]);return l.a.createElement(c.MDXTag,{name:"wrapper",components:a},l.a.createElement(c.MDXTag,{name:"h1",components:a,props:{id:"badge"}},"Badge"),l.a.createElement(c.MDXTag,{name:"h3",components:a,props:{id:"default-badge"}},"Default badge"),l.a.createElement(r.e,{__position:0,__code:'<span class="badge badge-primary">Primary</span>\n<span class="badge badge-secondary">Secondary</span>\n<span class="badge badge-success">Success</span>\n<span class="badge badge-danger">Danger</span>\n<span class="badge badge-warning">Warning</span>\n<span class="badge badge-info">Info</span>\n<span class="badge badge-light">Light</span>\n<span class="badge badge-dark">Dark</span>',__scope:{props:this?this.props:n}},l.a.createElement("span",{class:"badge badge-primary"},"Primary"),l.a.createElement("span",{class:"badge badge-secondary"},"Secondary"),l.a.createElement("span",{class:"badge badge-success"},"Success"),l.a.createElement("span",{class:"badge badge-danger"},"Danger"),l.a.createElement("span",{class:"badge badge-warning"},"Warning"),l.a.createElement("span",{class:"badge badge-info"},"Info"),l.a.createElement("span",{class:"badge badge-light"},"Light"),l.a.createElement("span",{class:"badge badge-dark"},"Dark")),l.a.createElement(c.MDXTag,{name:"h3",components:a,props:{id:"gradient-badge"}},"Gradient badge"),l.a.createElement(r.e,{__position:1,__code:'<span class="badge badge-pill badge-gradient-primary">Primary</span>\n<span class="badge badge-pill badge-gradient-secondary">Secondary</span>\n<span class="badge badge-pill badge-gradient-success">Success</span>\n<span class="badge badge-pill badge-gradient-danger">Danger</span>\n<span class="badge badge-pill badge-gradient-warning">Warning</span>\n<span class="badge badge-pill badge-gradient-info">Info</span>',__scope:{props:this?this.props:n}},l.a.createElement("span",{class:"badge badge-pill badge-gradient-primary"},"Primary"),l.a.createElement("span",{class:"badge badge-pill badge-gradient-secondary"},"Secondary"),l.a.createElement("span",{class:"badge badge-pill badge-gradient-success"},"Success"),l.a.createElement("span",{class:"badge badge-pill badge-gradient-danger"},"Danger"),l.a.createElement("span",{class:"badge badge-pill badge-gradient-warning"},"Warning"),l.a.createElement("span",{class:"badge badge-pill badge-gradient-info"},"Info")),l.a.createElement(c.MDXTag,{name:"h3",components:a,props:{id:"pill-badge"}},"Pill badge"),l.a.createElement(r.e,{__position:2,__code:'<span class="badge badge-pill badge-primary">Primary</span>\n<span class="badge badge-pill badge-secondary">Secondary</span>\n<span class="badge badge-pill badge-success">Success</span>\n<span class="badge badge-pill badge-danger">Danger</span>\n<span class="badge badge-pill badge-warning">Warning</span>\n<span class="badge badge-pill badge-info">Info</span>\n<span class="badge badge-pill badge-light">Light</span>\n<span class="badge badge-pill badge-dark">Dark</span>',__scope:{props:this?this.props:n}},l.a.createElement("span",{class:"badge badge-pill badge-primary"},"Primary"),l.a.createElement("span",{class:"badge badge-pill badge-secondary"},"Secondary"),l.a.createElement("span",{class:"badge badge-pill badge-success"},"Success"),l.a.createElement("span",{class:"badge badge-pill badge-danger"},"Danger"),l.a.createElement("span",{class:"badge badge-pill badge-warning"},"Warning"),l.a.createElement("span",{class:"badge badge-pill badge-info"},"Info"),l.a.createElement("span",{class:"badge badge-pill badge-light"},"Light"),l.a.createElement("span",{class:"badge badge-pill badge-dark"},"Dark")),l.a.createElement(c.MDXTag,{name:"h3",components:a,props:{id:"circle-badge"}},"Circle badge"),l.a.createElement(r.e,{__position:3,__code:'<div class="badge-circle-wrapper">\n  <span class="badge-circle badge-success" />\n  <span class="badge-label">label</span>\n</div>\n<div class="badge-circle-wrapper">\n  <span class="badge-circle badge-danger" />\n  <span class="badge-label">label</span>\n</div>\n<div class="badge-circle-wrapper">\n  <span class="badge-circle badge-warning" />\n  <span class="badge-label">label</span>\n</div>\n<div class="badge-circle-wrapper">\n  <span class="badge-circle badge-primary" />\n  <span class="badge-label">label</span>\n</div>\n<div class="badge-circle-wrapper">\n  <span class="badge-circle badge-secondary" />\n  <span class="badge-label">label</span>\n</div>\n<div class="badge-circle-wrapper">\n  <span class="badge-circle badge-light" />\n  <span class="badge-label">label</span>\n</div>',__scope:{props:this?this.props:n}},l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-success"}),l.a.createElement("span",{class:"badge-label"},"label")),l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-danger"}),l.a.createElement("span",{class:"badge-label"},"label")),l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-warning"}),l.a.createElement("span",{class:"badge-label"},"label")),l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-primary"}),l.a.createElement("span",{class:"badge-label"},"label")),l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-secondary"}),l.a.createElement("span",{class:"badge-label"},"label")),l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-light"}),l.a.createElement("span",{class:"badge-label"},"label"))),l.a.createElement(c.MDXTag,{name:"h3",components:a,props:{id:"sizes"}},"sizes"),l.a.createElement("div",{class:"d-flex align-items-center"},l.a.createElement("div",{class:"pr-4"},"sm",l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-circle-sm badge-success"}),l.a.createElement("span",{class:"badge-label"},"label"))),l.a.createElement("div",{class:"pr-4"},"md",l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-circle-md badge-success"}),l.a.createElement("span",{class:"badge-label"},"label"))),l.a.createElement("div",{class:"pr-4"},"lg",l.a.createElement("div",{class:"badge-circle-wrapper"},l.a.createElement("span",{class:"badge-circle badge-circle-lg badge-success"}),l.a.createElement("span",{class:"badge-label"},"label")))))}}])&&p(n.prototype,s),t&&p(n,t),a}();o.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=products-badge.a7659e9311d68b7dc7b3.js.map
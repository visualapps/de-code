(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./docs/products/headers.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a("./node_modules/react/index.js"),s=a.n(n),o=a("./node_modules/@mdx-js/tag/dist/index.js"),r=a("./node_modules/docz/dist/index.m.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=d(this,p(t).call(this,e))).layout=null,a}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,s.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components,a=l(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:t},s.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"headers"}},"Headers"),s.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"page-header"}},"Page Header"),s.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"example-one"}},"Example one"),s.a.createElement(r.e,{__position:0,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Clusters</span>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},s.a.createElement("div",{class:"outlet-header"},s.a.createElement("div",{class:"outlet-header__top-bar"},s.a.createElement("div",{class:"outlet-header__top-bar-title"},s.a.createElement("span",null,"Clusters"))))),s.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"example-two"}},"Example two"),s.a.createElement(o.MDXTag,{name:"h5",components:t,props:{id:"page-header-with-an-global-level-action-button"}},"Page header with an global level action button"),s.a.createElement(r.e,{__position:1,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Clusters</span>\n    </div>\n    <div class="outlet-header__actions ml-auto">\n      <div>\n        <button class="btn btn-primary" title="Import new cluster">\n          Connect a new Cluster\n        </button>\n      </div>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},s.a.createElement("div",{class:"outlet-header"},s.a.createElement("div",{class:"outlet-header__top-bar"},s.a.createElement("div",{class:"outlet-header__top-bar-title"},s.a.createElement("span",null,"Clusters")),s.a.createElement("div",{class:"outlet-header__actions ml-auto"},s.a.createElement("div",null,s.a.createElement("button",{class:"btn btn-primary",title:"Import new cluster"},"Connect a new Cluster")))))),s.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"example-three"}},"Example three"),s.a.createElement(o.MDXTag,{name:"h5",components:t,props:{id:"page-header-with-back-button"}},"Page header with back button"),s.a.createElement(r.e,{__position:2,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Overview</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-block">\n    <span class="outlet-header-meta-block_content">Dev-cluster-23u72</span>\n    <span class="badge badge-gradient-success badge-pill">Active</span>\n  </div>\n</div>',__scope:{props:this?this.props:a}},s.a.createElement("div",{class:"outlet-header"},s.a.createElement("div",{class:"outlet-header__top-bar"},s.a.createElement("div",{class:"outlet-header__top-bar-title"},s.a.createElement("span",null,"Overview"))),s.a.createElement("div",{class:"outlet-header-meta-block"},s.a.createElement("span",{class:"outlet-header-meta-block_content"},"Dev-cluster-23u72"),s.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")))),s.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"example-four"}},"Example four"),s.a.createElement(o.MDXTag,{name:"h5",components:t,props:{id:"page-header-with-a-back-navigation-button"}},"Page header with a back navigation button"),s.a.createElement(r.e,{__position:3,__code:'<div class="outlet-header">\n  <div class="outlet-header-navigation">\n    <button class="outlet-header-navigation_button">\n      <span class="fa fa-arrow-left outlet-header-navigation_icon" />\n      <span>Back</span>\n    </button>\n  </div>\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Overview</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-block">\n    <span class="outlet-header-meta-block_content">Dev-cluster-23u72</span>\n    <span class="badge badge-gradient-success badge-pill">Active</span>\n  </div>\n</div>',__scope:{props:this?this.props:a}},s.a.createElement("div",{class:"outlet-header"},s.a.createElement("div",{class:"outlet-header-navigation"},s.a.createElement("button",{class:"outlet-header-navigation_button"},s.a.createElement("span",{class:"fa fa-arrow-left outlet-header-navigation_icon"}),s.a.createElement("span",null,"Back"))),s.a.createElement("div",{class:"outlet-header__top-bar"},s.a.createElement("div",{class:"outlet-header__top-bar-title"},s.a.createElement("span",null,"Overview"))),s.a.createElement("div",{class:"outlet-header-meta-block"},s.a.createElement("span",{class:"outlet-header-meta-block_content"},"Dev-cluster-23u72"),s.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active")))),s.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"example-five"}},"Example five"),s.a.createElement(o.MDXTag,{name:"h5",components:t,props:{id:"section-header"}},"Section header"),s.a.createElement(r.e,{__position:4,__code:'<div class="section-header">\n  <div class="section-header_title">\n    <span class="section-header_title__text">Volumes</span>\n  </div>\n  <div class="section-header-controls">\n    <div class="section-header-controls_item">\n      <div class="input-search-icon_wrapper">\n        <div class="input-search-icon" />\n        <input class="form-control" placeholder="Find an application" />\n      </div>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-edit" />\n      </button>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-filter" />\n      </button>\n    </div>\n    <div class="section-header-controls_item ml-auto">\n      <button class="btn btn-primary">Primary action</button>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},s.a.createElement("div",{class:"section-header"},s.a.createElement("div",{class:"section-header_title"},s.a.createElement("span",{class:"section-header_title__text"},"Volumes")),s.a.createElement("div",{class:"section-header-controls"},s.a.createElement("div",{class:"section-header-controls_item"},s.a.createElement("div",{class:"input-search-icon_wrapper"},s.a.createElement("div",{class:"input-search-icon"}),s.a.createElement("input",{class:"form-control",placeholder:"Find an application"}))),s.a.createElement("div",{class:"section-header-controls_item"},s.a.createElement("button",{class:"btn btn-secondary"},s.a.createElement("span",{class:"fa fa-edit"}))),s.a.createElement("div",{class:"section-header-controls_item"},s.a.createElement("button",{class:"btn btn-secondary"},s.a.createElement("span",{class:"fa fa-filter"}))),s.a.createElement("div",{class:"section-header-controls_item ml-auto"},s.a.createElement("button",{class:"btn btn-primary"},"Primary action"))))),s.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"example-six"}},"Example six"),s.a.createElement(o.MDXTag,{name:"h5",components:t,props:{id:"page-header-section-header-and-contents"}},"Page header, section header and contents"),s.a.createElement(r.e,{__position:5,__code:'<div class="outlet-header">\n  <div class="outlet-header__top-bar">\n    <div class="outlet-header__top-bar-title">\n      <span>Overview</span>\n    </div>\n  </div>\n  <div class="outlet-header-meta-block">\n    <span class="outlet-header-meta-block_content">Dev-cluster-23u72</span>\n    <span class="badge badge-gradient-success badge-pill">Active</span>\n  </div>\n</div>\n<div class="section-header">\n  <div class="section-header_title">\n    <span class="section-header_title__text">Volumes</span>\n  </div>\n  <div class="section-header-controls">\n    <div class="section-header-controls_item">\n      <div class="input-search-icon_wrapper">\n        <div class="input-search-icon" />\n        <input class="form-control" placeholder="Find an application" />\n      </div>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-edit" />\n      </button>\n    </div>\n    <div class="section-header-controls_item">\n      <button class="btn btn-secondary">\n        <span class="fa fa-filter" />\n      </button>\n    </div>\n    <div class="section-header-controls_item ml-auto">\n      <button class="btn btn-primary">Primary action</button>\n    </div>\n  </div>\n</div>',__scope:{props:this?this.props:a}},s.a.createElement("div",{class:"outlet-header"},s.a.createElement("div",{class:"outlet-header__top-bar"},s.a.createElement("div",{class:"outlet-header__top-bar-title"},s.a.createElement("span",null,"Overview"))),s.a.createElement("div",{class:"outlet-header-meta-block"},s.a.createElement("span",{class:"outlet-header-meta-block_content"},"Dev-cluster-23u72"),s.a.createElement("span",{class:"badge badge-gradient-success badge-pill"},"Active"))),s.a.createElement("div",{class:"section-header"},s.a.createElement("div",{class:"section-header_title"},s.a.createElement("span",{class:"section-header_title__text"},"Volumes")),s.a.createElement("div",{class:"section-header-controls"},s.a.createElement("div",{class:"section-header-controls_item"},s.a.createElement("div",{class:"input-search-icon_wrapper"},s.a.createElement("div",{class:"input-search-icon"}),s.a.createElement("input",{class:"form-control",placeholder:"Find an application"}))),s.a.createElement("div",{class:"section-header-controls_item"},s.a.createElement("button",{class:"btn btn-secondary"},s.a.createElement("span",{class:"fa fa-edit"}))),s.a.createElement("div",{class:"section-header-controls_item"},s.a.createElement("button",{class:"btn btn-secondary"},s.a.createElement("span",{class:"fa fa-filter"}))),s.a.createElement("div",{class:"section-header-controls_item ml-auto"},s.a.createElement("button",{class:"btn btn-primary"},"Primary action"))))))}}])&&i(a.prototype,n),c&&i(a,c),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=products-headers.6bea40a24b4f31984465.js.map
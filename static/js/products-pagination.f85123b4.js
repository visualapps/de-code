(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./docs/products/pagination.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return g});var l=n("./node_modules/react/index.js"),s=n.n(l),t=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,a){if(null==e)return{};var n,l,s=function(e,a){if(null==e)return{};var n,l,s={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function o(e,a){for(var n=0;n<a.length;n++){var l=a[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function p(e,a){return!a||"object"!==r(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,a){return(f=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var g=function(e){function a(e){var n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(n=p(this,m(a).call(this,e))).layout=null,n}var n,l,r;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&f(e,a)}(a,s.a.Component),n=a,(l=[{key:"render",value:function(){var e=this.props,a=e.components,n=c(e,["components"]);return s.a.createElement(t.MDXTag,{name:"wrapper",components:a},s.a.createElement(t.MDXTag,{name:"h1",components:a,props:{id:"paginations"}},"Paginations"),s.a.createElement(t.MDXTag,{name:"h3",components:a,props:{id:"default-centerd"}},"Default centerd"),s.a.createElement(i.e,{__position:0,__code:'<nav aria-label="Page navigation example">\n  <ul class="pagination justify-content-center">\n    <li class="page-item disabled">\n      <a class="page-link" href="#" aria-label="Previous">\n        <span class="fa fa-chevron-left" aria-hidden="true" />\n        <span class="sr-only">Previous</span>\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        1\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        2\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        3\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#" aria-label="Next">\n        <span class="fa fa-chevron-right" aria-hidden="true" />\n        <span class="sr-only">Next</span>\n      </a>\n    </li>\n  </ul>\n</nav>',__scope:{props:this?this.props:n}},s.a.createElement("nav",{"aria-label":"Page navigation example"},s.a.createElement("ul",{class:"pagination justify-content-center"},s.a.createElement("li",{class:"page-item disabled"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Previous"},s.a.createElement("span",{class:"fa fa-chevron-left","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Previous"))),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"1")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"2")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"3")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Next"},s.a.createElement("span",{class:"fa fa-chevron-right","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Next")))))),s.a.createElement(t.MDXTag,{name:"h3",components:a,props:{id:"disabled-and-active-states"}},"Disabled and active states"),s.a.createElement(i.e,{__position:1,__code:'<nav aria-label="...">\n  <ul class="pagination">\n    <li class="page-item disabled">\n      <a class="page-link" href="#" aria-label="Previous">\n        <span class="fa fa-chevron-left" aria-hidden="true" />\n        <span class="sr-only">Previous</span>\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        1\n      </a>\n    </li>\n    <li class="page-item active">\n      <a class="page-link" href="#">\n        2 <span class="sr-only">(current)</span>\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        3\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#" aria-label="Next">\n        <span class="fa fa-chevron-right" aria-hidden="true" />\n        <span class="sr-only">Next</span>\n      </a>\n    </li>\n  </ul>\n</nav>',__scope:{props:this?this.props:n}},s.a.createElement("nav",{"aria-label":"..."},s.a.createElement("ul",{class:"pagination"},s.a.createElement("li",{class:"page-item disabled"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Previous"},s.a.createElement("span",{class:"fa fa-chevron-left","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Previous"))),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"1")),s.a.createElement("li",{class:"page-item active"},s.a.createElement("a",{class:"page-link",href:"#"},"2 ",s.a.createElement("span",{class:"sr-only"},"(current)"))),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"3")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Next"},s.a.createElement("span",{class:"fa fa-chevron-right","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Next")))))),s.a.createElement(t.MDXTag,{name:"h2",components:a,props:{id:"sizes"}},"Sizes"),s.a.createElement(t.MDXTag,{name:"h4",components:a,props:{id:"small"}},"Small"),s.a.createElement(i.e,{__position:2,__code:'<nav aria-label="...">\n  <ul class="pagination pagination-sm">\n    <li class="page-item">\n      <a class="page-link" href="#" aria-label="Previous">\n        <span class="fa fa-chevron-left" aria-hidden="true" />\n        <span class="sr-only">Previous</span>\n      </a>\n    </li>\n    <li class="page-item disabled">\n      <a class="page-link" href="#" tabindex="-1">\n        1\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        2\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        3\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#" aria-label="Next">\n        <span class="fa fa-chevron-right" aria-hidden="true" />\n        <span class="sr-only">Next</span>\n      </a>\n    </li>\n  </ul>\n</nav>',__scope:{props:this?this.props:n}},s.a.createElement("nav",{"aria-label":"..."},s.a.createElement("ul",{class:"pagination pagination-sm"},s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Previous"},s.a.createElement("span",{class:"fa fa-chevron-left","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Previous"))),s.a.createElement("li",{class:"page-item disabled"},s.a.createElement("a",{class:"page-link",href:"#",tabindex:"-1"},"1")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"2")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"3")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Next"},s.a.createElement("span",{class:"fa fa-chevron-right","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Next")))))),s.a.createElement(t.MDXTag,{name:"h4",components:a,props:{id:"large"}},"Large"),s.a.createElement(i.e,{__position:3,__code:'<nav aria-label="...">\n  <ul class="pagination pagination-lg">\n    <li class="page-item">\n      <a class="page-link" href="#" aria-label="Previous">\n        <span class="fa fa-chevron-left" aria-hidden="true" />\n        <span class="sr-only">Previous</span>\n      </a>\n    </li>\n    <li class="page-item disabled">\n      <a class="page-link" href="#" tabindex="-1">\n        1\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        2\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#">\n        3\n      </a>\n    </li>\n    <li class="page-item">\n      <a class="page-link" href="#" aria-label="Previous">\n        <span class="fa fa-chevron-right" aria-hidden="true" />\n        <span class="sr-only">Previous</span>\n      </a>\n    </li>\n  </ul>\n</nav>',__scope:{props:this?this.props:n}},s.a.createElement("nav",{"aria-label":"..."},s.a.createElement("ul",{class:"pagination pagination-lg"},s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Previous"},s.a.createElement("span",{class:"fa fa-chevron-left","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Previous"))),s.a.createElement("li",{class:"page-item disabled"},s.a.createElement("a",{class:"page-link",href:"#",tabindex:"-1"},"1")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"2")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#"},"3")),s.a.createElement("li",{class:"page-item"},s.a.createElement("a",{class:"page-link",href:"#","aria-label":"Previous"},s.a.createElement("span",{class:"fa fa-chevron-right","aria-hidden":"true"}),s.a.createElement("span",{class:"sr-only"},"Previous")))))))}}])&&o(n.prototype,l),r&&o(n,r),a}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=products-pagination.6bea40a24b4f31984465.js.map
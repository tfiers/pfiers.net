!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="https://vc.pieterfiers.net/",e(e.s=768)}({12:function(t,n){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e},14:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},15:function(t,n,e){var r=e(2),o=e(62);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},16:function(t,n,e){var r=e(88);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}},19:function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"e",(function(){return u})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return i})),e.d(n,"d",(function(){return a}));var r,o="pfiers.net",u="2.0.1",c=!1,i=null!=window.__PRERENDER_INJECTED,f=(r=document.location.hostname,["0.0.0.0","127.0.0.1","localhost"].includes(r)||document.location.hostname.endsWith("local")),a=c?"dev":f?i?"prerender":"localProd":"prod"},2:function(t,n){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e},225:function(t,n){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},226:function(t,n,e){var r=e(88);function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(n,e,c){return o()?t.exports=u=Reflect.construct:t.exports=u=function(t,n,e){var o=[null];o.push.apply(o,n);var u=new(Function.bind.apply(t,o));return e&&r(u,e.prototype),u},u.apply(null,arguments)}t.exports=u},24:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return u}));function r(t){return new URL(t,"".concat("relative:","/"))}function o(t){return"relative:"===t.protocol}function u(t,n){var e=function(t){return new URL(t.href)}(n);return e.pathname=t.pathname,e.search=t.search,e.hash=t.hash,e}},57:function(t,n,e){"use strict";e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return y}));var r=e(14),o=e.n(r),u=e(15),c=e.n(u),i=e(12),f=e.n(i),a=e(16),l=e.n(a),s=e(61),p=e.n(s),d=function(t){function n(t){return o()(this,n),c()(this,f()(n).call(this,t.href))}return l()(n,t),n}(p()(URL)),y=function(t){function n(t){return o()(this,n),c()(this,f()(n).call(this,t.href))}return l()(n,t),n}(p()(URL))},61:function(t,n,e){var r=e(12),o=e(88),u=e(225),c=e(226);function i(n){var e="function"==typeof Map?new Map:void 0;return t.exports=i=function(t){if(null===t||!u(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return c(t,arguments,r(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)},i(n)}t.exports=i},62:function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},76:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e(19),o=e(24),u=e(57),c={dev:document.location.origin,localProd:"http://dist.local:8000",prod:"https://pfiers.net",prerender:"http://dist.local:8000"},i=new URL(c[r.d]);function f(t){return"string"==typeof t&&(t=Object(o.b)(t)),Object(o.a)(t)?new u.b(Object(o.c)(t,i)):t}},768:function(t,n,e){"use strict";e.r(n);function r(t){var n=document.createElement("script");n.src=t.href,document.getElementsByTagName("head")[0].appendChild(n)}var o=e(76),u=e(19),c=window.navigator.userAgent,i=["bot","crawl","spider"].some((function(t){return c.includes(t)})),f="noModule"in document.createElement("script"),a="inject ".concat(f?"modern":"legacy");i&&(a+=" bot"),u.b&&(a+=" prerender"),console.info(a),window.onload=function(){f?r(Object(o.a)("/bundle/main.modern.bundle.js")):(r(Object(o.a)("/bundle/main.bundle.js")),i||function(){var t=document.createElement("div");t.innerHTML='<div>\n  <p style="color: red;">\n    It looks like you\'re using an outdated browser, you should consider upgrading!\n  </p>\n  <p style="font-style: italic;">\n    This may not actually be true but we loaded a more compatible version of the site just in case.\n  </p>\n</div>';var n=document.body;n.insertBefore(t,n.firstChild)}())}},88:function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e}});
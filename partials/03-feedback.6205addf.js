!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(e,t,n){var i,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,l=t,f=e.apply(r,n)}function O(e){return l=e,a=setTimeout(h,t),d?b(e):f}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=y();if(S(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function w(e){return a=void 0,v&&i?b(e):(i=o=void 0,f)}function T(){var e=y(),n=S(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return O(c);if(s)return a=setTimeout(h,t),b(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},T.flush=function(){return void 0===a?f:w(y())},T}function g(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),S="feedback-form-state",h={};!function(){var e=localStorage.getItem(S),t=JSON.parse(e);if(e){Object.keys(t).map((function(e){document.querySelector("[name='".concat(e,"']")).value=t[e]}))}}(),O.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(h))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(S)}))}();
//# sourceMappingURL=03-feedback.6205addf.js.map
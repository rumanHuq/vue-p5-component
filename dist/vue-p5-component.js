!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("p5")):"function"==typeof define&&define.amd?define("vue-p5-component",["p5"],t):"object"==typeof exports?exports["vue-p5-component"]=t(require("p5")):e["vue-p5-component"]=t(e.p5)}(window,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(t,o){t.exports=e},function(e,t,o){"use strict";o.r(t);var n=function(){var e=this.$createElement;return(this._self._c||e)("div")};n._withStripped=!0;var r=o(0),u=o.n(r);var i=function(e,t,o,n,r,u,i,d){var s,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=o,c._compiled=!0),n&&(c.functional=!0),u&&(c._scopeId="data-v-"+u),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=s):r&&(s=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(c.functional){c._injectStyles=s;var a=c.render;c.render=function(e,t){return s.call(t),a(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,s):[s]}return{exports:e,options:c}}({name:"VueP5",mounted:function(){var e=this,t={preload:"preload",setup:"setup",draw:"draw",keyPressed:"keypressed",keyReleased:"keyreleased",keyTyped:"keytyped",mouseMoved:"mousemoved",mouseDragged:"mousedragged",mousePressed:"mousepressed",mouseReleased:"mousereleased",mouseClicked:"mouseclicked",doubleClicked:"doubleclicked",mouseWheel:"mousewheel",touchStarted:"touchstarted",touchMoved:"touchmoved",touchEnded:"touchended",deviceMoved:"devicemoved",deviceTurned:"deviceturned",deviceShaken:"deviceshaken"};new u.a(function(o){e.$emit("sketch",o);var n=function(n){var r=t[n],u=o[n];o[n]=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];u&&u.apply(void 0,[o].concat(n)),e.$emit.apply(e,[r,o].concat(n))}};for(var r in t)n(r)},this.$el)}},n,[],!1,null,null,null);i.options.__file="src/p5-component.vue";t.default=i.exports}])});
/*! For license information please see 7819.process-mgmt-ui.bundle.js.LICENSE.txt */
(self.webpackChunkprocess_mgmt_ui=self.webpackChunkprocess_mgmt_ui||[]).push([[7819],{9191:(t,r,e)=>{var n={"./active_mods.json":[5466,5466],"./assembling-machine.json":[1235,1235],"./boiler.json":[5896,5896],"./equipment-grid.json":[6561,6561],"./equipment.json":[3981,3981],"./fluid.json":[968,968],"./furnace.json":[448,448],"./generator.json":[6379,6379],"./inserter.json":[2584,2584],"./item.json":[9421,9421],"./lab.json":[8865,8865],"./mining-drill.json":[1956,1956],"./projectile.json":[484,484],"./reactor.json":[6030,6030],"./recipe.json":[3519,3519],"./resource.json":[2459,2459],"./rocket-silo.json":[1429,1429],"./solar-panel.json":[5471,5471],"./technology.json":[4264,4264],"./transport-belt.json":[8220,8220]};function o(t){if(!e.o(n,t))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=n[t],o=r[0];return e.e(r[1]).then((()=>e.t(o,17)))}o.keys=()=>Object.keys(n),o.id=9191,t.exports=o},4214:(t,r,e)=>{"use strict";e.d(r,{V:()=>a});var n=e(6968);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==o(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var a=function(){function t(r,e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),(0,n.B)("game",r,"version",e),this.game=r,this.version=e,this.items={},this.factory_groups={},this.factories={},this.processes={}}var r,e;return r=t,(e=[{key:"_check_add",value:function(t,r){if(void 0!==this[t][r.id])throw new Error("duplicate "+t+" id created: "+r);this[t][r.id]=r}},{key:"add_item",value:function(t){this._check_add("items",t)}},{key:"add_factory_group",value:function(t){this._check_add("factory_groups",t)}},{key:"add_factory",value:function(t){this._check_add("factories",t)}},{key:"add_process",value:function(t){this._check_add("processes",t)}},{key:"add_items",value:function(t){var r=this;t.forEach((function(t){return r.add_item(t)}))}},{key:"add_factory_groups",value:function(t){var r=this;t.forEach((function(t){return r.add_factory_group(t)}))}},{key:"add_factories",value:function(t){var r=this;t.forEach((function(t){return r.add_factory(t)}))}},{key:"add_processes",value:function(t){var r=this;t.forEach((function(t){return r.add_process(t)}))}}])&&i(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}()},5359:(t,r,e)=>{"use strict";e.a(t,(async(t,n)=>{try{e.r(r),e.d(r,{default:()=>t});var o=e(5035);const t=await(0,o.Z)("factorio-py-1.1.53","0.0.1");n()}catch(t){n(t)}}),1)},5035:(t,r,e)=>{"use strict";e.d(r,{Z:()=>k});var n=e(3658),o=e(8604),i=e(4700),a=e(4214),u=e(1341);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function f(){f=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),u=new O(o||[]);return n(a,"_invoke",{value:E(t,e,u)}),a}function m(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function h(){}function y(){}function d(){}var v={};s(v,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(L([])));b&&b!==r&&e.call(b,i)&&(v=b);var _=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function o(n,i,a,u){var f=m(t[n],t,i);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==c(l)&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(f.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=m(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function x(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=m(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return y.prototype=d,n(_,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:y,configurable:!0}),y.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(j.prototype),s(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new j(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(_),s(_,u,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:L(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function s(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function l(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}var m=function(t,r){try{return r()}catch(r){throw console.log("error processing item:",t),r}},p=function(t,r,e){return t.items[r]||(e?t.add_item(new i.c(r,e)):t.add_item(new i.c(r,r))),t.items[r]},h=function(t){var r=t.amount;void 0===r&&(r=(t.amount_min+t.amount_max)/2);var e=t.probability;return e&&(r*=e),r},y=function(t,r){var e=h(r);return r.temperature?new o.K(t.items[r.name+"_"+r.temperature],e):new o.K(t.items[r.name],e)},d=function(t){var r=t.ingredients.some((function(t){return t.minimum_temperature||t.maximum_temperature||t.temperature})),e=t.products.some((function(t){return t.minimum_temperature||t.maximum_temperature||t.temperature}));return r||e},v=function(t,r){r.ingredients.forEach((function(e){m([r,e],(function(){return p(t,e.name)}))})),r.products.forEach((function(e){m([r,e],(function(){return p(t,e.name)}))})),m([r,r.category],(function(){t.factory_groups[r.category]||t.add_factory_group(new n.a(r.category))})),m(r,(function(){t.add_process(new u.A(r.name,r.ingredients.map((function(r){return y(t,r)})),r.products.map((function(r){return y(t,r)})),r.energy,t.factory_groups[r.category]))}))},g=function(t,r,e){m([r,r.category],(function(){t.factory_groups[r.category]||t.add_factory_group(new n.a(r.category))})),r.ingredients.forEach((function(e){e.minimum_temperature||e.maximum_temperature||m([r,e],(function(){return p(t,e.name)}))})),r.products.forEach((function(e){m([r,e],(function(){return p(t,e.name)}))}));var o=_(t,r.ingredients,e);m(r,(function(){o.forEach((function(e,n){t.add_process(new u.A(r.name+"--"+n,e,r.products.map((function(r){return y(t,r)})),r.energy,t.factory_groups[r.category]))}))}))},b=function t(r,e){if(0==r.length)return e;var n=r.shift();if(e){var o=[];return e.forEach((function(t){n.forEach((function(r){o.push(t.concat(r))}))})),t(r,o)}return t(r,n.map((function(t){return[t]})))},_=function(t,r,e){var n=r.map((function(r){return r.minimum_temperature||r.maximum_temperature?Object.keys(e[r.name]).filter((function(t){return r.minimum_temperature<=t&&t<=r.maximum_temperature})).map((function(t){return e[r.name][t]})).map((function(t){return new o.K(t,h(r))})):[y(t,r)]}));return b(n.map((function(t){for(var r=[],e=0;e<t.length;++e)r.push(e);return r}))).map((function(t){return t.map((function(t,r){return n[r][t]}))}))},w=function(t,r){Object.values(r).forEach((function(r){m([r,r.crafting_categories],(function(){Object.keys(r.crafting_categories).forEach((function(r){t.factory_groups[r]||t.add_factory_group(new n.a(r))}))})),m(r,(function(){t.add_factory(new n.F(r.name,r.name,Object.keys(r.crafting_categories).map((function(r){return t.factory_groups[r]})),1/r.crafting_speed))}))}))},j=function(t,r,e){t[r.name]||(t[r.name]={}),t[r.name][r.temperature]=e},E=function(t){return e(9191)("./"+t).catch((function(t){console.log("failed to read recipe.json:",t)})).then((function(t){return t.default}))};function x(){var t;return t=f().mark((function t(r,e,n){var o,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n||(n=E),o=n("recipe.json").then((function(t){var n=new a.V(r,e),o={};return Object.values(t).forEach((function(t){Array.isArray(t.ingredients)||(t.ingredients=[]),Array.isArray(t.products)||(t.products=[]),t.products.forEach((function(r){if(r.temperature){var e=r.temperature,i=m([t,r],(function(){return p(n,r.name+"_"+e,r.name+" ("+e+")")}));j(o,r,i)}else m([t,r],(function(){return p(n,r.name)}))}))})),Object.values(t).forEach((function(t){m(t,(function(){Array.isArray(t.ingredients)||(t.ingredients=[]),Array.isArray(t.products)||(t.products=[]),t.ingredients.forEach((function(r){if(r.temperature&&(r.minimum_temperature=r.temperature,r.maximum_temperature=r.temperature),r.minimum_temperature>-1e207){var e=r.minimum_temperature,i=m([t,r],(function(){return p(n,r.name+"_"+e,r.name+" ("+e+")")}));j(o,r,i)}if(r.maximum_temperature<1e207){var a=r.maximum_temperature,u=m([t,r],(function(){return p(n,r.name+"_"+a,r.name+" ("+a+")")}));j(o,r,u)}})),d(t)?g(n,t,o):v(n,t)}))})),n})),i=["assembling-machine.json","furnace.json","rocket-silo.json"].map(E),t.abrupt("return",Promise.all([o].concat((u=i,function(t){if(Array.isArray(t))return s(t)}(u)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(u)||function(t,r){if(t){if("string"==typeof t)return s(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,r):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))).then((function(t){var r=t.shift();return t.forEach((function(t){w(r,t)})),r})));case 4:case"end":return t.stop()}var u}),t)})),x=function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){l(i,n,o,a,u,"next",t)}function u(t){l(i,n,o,a,u,"throw",t)}a(void 0)}))},x.apply(this,arguments)}const k=function(t,r,e){return x.apply(this,arguments)}},4700:(t,r,e)=>{"use strict";e.d(r,{c:()=>a});var n=e(6968);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==o(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var a=function(){function t(r,e,o){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),(0,n.B)("id",r,"name",e),this.id=r,this.name=e,this.group=o}var r,e;return r=t,(e=[{key:"toString",value:function(){return"Item: [name: "+this.name+", group: "+this.group+"]"}}])&&i(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),t}()}}]);
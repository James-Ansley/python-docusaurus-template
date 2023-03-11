/*! For license information please see 923.6081ae24.js.LICENSE.txt */
(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},gca:function(t){return t={}[t]||t,e.p+e.u(t)}};e.r({});const t=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),i=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,s=new Map([["proxy",{canHandle:e=>a(e)&&e[t],serialize(e){const{port1:t,port2:n}=new MessageChannel;return c(e,t),[n,[n]]},deserialize(e){return e.start(),y(e,[],t);var t}}],["throw",{canHandle:e=>a(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(e,n=globalThis,r=["*"]){n.addEventListener("message",(function a(s){if(!s||!s.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(r,s.origin))return void console.warn(`Invalid origin '${s.origin}' for comlink proxy`);const{id:l,type:f,path:p}=Object.assign({path:[]},s.data),d=(s.data.argumentList||[]).map(b);let y;try{const n=p.slice(0,-1).reduce(((e,t)=>e[t]),e),r=p.reduce(((e,t)=>e[t]),e);switch(f){case"GET":y=r;break;case"SET":n[p.slice(-1)[0]]=b(s.data.value),y=!0;break;case"APPLY":y=r.apply(n,d);break;case"CONSTRUCT":y=function(e){return Object.assign(e,{[t]:!0})}(new r(...d));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;c(e,n),y=function(e,t){return h.set(e,t),e}(t,[t])}break;case"RELEASE":y=void 0;break;default:return}}catch(g){y={value:g,[i]:0}}Promise.resolve(y).catch((e=>({value:e,[i]:0}))).then((t=>{const[r,i]=m(t);n.postMessage(Object.assign(Object.assign({},r),{id:l}),i),"RELEASE"===f&&(n.removeEventListener("message",a),u(n),o in e&&"function"==typeof e[o]&&e[o]())})).catch((e=>{const[t,r]=m({value:new TypeError("Unserializable return value"),[i]:0});n.postMessage(Object.assign(Object.assign({},t),{id:l}),r)}))})),n.start&&n.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function l(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e){return v(e,{type:"RELEASE"}).then((()=>{u(e)}))}const p=new WeakMap,d="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(p.get(e)||0)-1;p.set(e,t),0===t&&f(e)}));function y(e,t=[],o=function(){}){let i=!1;const a=new Proxy(o,{get(n,o){if(l(i),o===r)return()=>{!function(e){d&&d.unregister(e)}(a),f(e),i=!0};if("then"===o){if(0===t.length)return{then:()=>a};const n=v(e,{type:"GET",path:t.map((e=>e.toString()))}).then(b);return n.then.bind(n)}return y(e,[...t,o])},set(n,r,o){l(i);const[a,s]=m(o);return v(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:a},s).then(b)},apply(r,o,a){l(i);const s=t[t.length-1];if(s===n)return v(e,{type:"ENDPOINT"}).then(b);if("bind"===s)return y(e,t.slice(0,-1));const[c,u]=g(a);return v(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(b)},construct(n,r){l(i);const[o,a]=g(r);return v(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},a).then(b)}});return function(e,t){const n=(p.get(t)||0)+1;p.set(t,n),d&&d.register(e,t,e)}(a,e),a}function g(e){const t=e.map(m);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function m(e){for(const[t,n]of s)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},h.get(e)||[]]}function b(e){switch(e.type){case"HANDLER":return s.get(e.name).deserialize(e.value);case"RAW":return e.value}}function v(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}var w=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(c){s=[6,c],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};importScripts("https://cdn.jsdelivr.net/pyodide/v0.22.0/full/pyodide.js"),console.log=function(){},c({init:function(e,t,n){return w(this,void 0,void 0,(function(){var r,o;return E(this,(function(i){switch(i.label){case 0:return r=self,[4,self.loadPyodide({stdout:e})];case 1:return r.pyodide=i.sent(),n[0].length>0?[4,self.pyodide.loadPackage(n[0])]:[3,3];case 2:i.sent(),i.label=3;case 3:return n[1].length>0?[4,self.pyodide.loadPackage(["micropip"])]:[3,6];case 4:return i.sent(),[4,self.pyodide.pyimport("micropip").install(n[1])];case 5:i.sent(),i.label=6;case 6:return o=self.pyodide.version,t({version:o}),[2]}}))}))},run:function(e){return w(this,void 0,void 0,(function(){return E(this,(function(t){switch(t.label){case 0:return[4,self.pyodide.runPythonAsync(e)];case 1:return t.sent(),[2]}}))}))},readFile:function(e){return self.pyodide.FS.readFile(e,{encoding:"utf8"})},writeFile:function(e,t){return self.pyodide.FS.writeFile(e,t,{encoding:"utf8"})},mkdir:function(e){self.pyodide.FS.mkdir(e)},rmdir:function(e){self.pyodide.FS.rmdir(e)}})})();
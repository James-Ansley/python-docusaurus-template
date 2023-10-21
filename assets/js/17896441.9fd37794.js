"use strict";(self.webpackChunkpython_docusaurus_template=self.webpackChunkpython_docusaurus_template||[]).push([[918],{261:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(7294),a=n(1262),l=n(2389),i=n(2949),r=n(7562);const d={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function c(e,t,n){let o=e.commands.byName[t];o.bindKeyOriginal||(o.bindKeyOriginal=o.bindKey),o.bindKey=n?o.bindKeyOriginal:null,e.commands.addCommand(o)}const s=e=>{e.renderer.setScrollMargin(10,10,0,0),e.renderer.setPadding(16),e.moveCursorTo(0,0),c(e,"indent",!1),c(e,"outdent",!1),e.commands.on("afterExec",(t=>{"disable-indent"!==t.command.name&&(c(e,"indent",!0),c(e,"outdent",!0))})),e.on("click",(t=>{c(e,"indent",!0),c(e,"outdent",!0)})),e.on("blur",(t=>{c(e,"indent",!1),c(e,"outdent",!1)})),e.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:e=>{c(e,"indent",!1),c(e,"outdent",!1)}})},u=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function m(e){const[t,c]=(0,o.useState)(e.code.trimEnd()),[m,b]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!1),[g,E]=(0,o.useState)(!1);(0,o.useEffect)((()=>{c(e.code.trimEnd()),b(!1)}),[e.code]);const{runPython:y,stdout:h,stderr:C,isLoading:k,isRunning:v,interruptExecution:w}=(0,r.usePython)(),{colorMode:N}=(0,i.useColorMode)(),S=(0,l.default)();let A=null;function P(){b(!1),c(e.code.trimEnd())}function L(){return b(!0),y(t)}function x(){b(!1),w()}S&&(A=n(4981).default,n(4007),n(2777),n(3783),n(2679));const B=o.createElement("pre",{style:{margin:0,padding:"0.55rem"}},t);return o.createElement(a.default,{fallback:B},(()=>o.createElement("div",{className:"code-editor",onMouseLeave:()=>{p(!1),E(!1)}},o.createElement("div",{className:"code-editor-window",style:m?{borderRadius:".25em .25em 0 0"}:{}},o.createElement(A,{value:t,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===N?"idle_fingers":"textmate",onChange:(e,t)=>c(e),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:s,editorProps:{$blockScrolling:!0},setOptions:d}),o.createElement("div",{className:"button-container",style:e.showButtons||u()||f||g?{opacity:100}:{}},k?o.createElement("span",null,"Loading..."):o.createElement(o.Fragment,null,v?o.createElement("button",{className:"icon-button",disabled:k||!v,onClick:x,onFocus:()=>p(!0),onBlur:()=>p(!1),"aria-label":"Stop Code",title:"Stop Code"},o.createElement("span",{className:"icon lsf-icon",title:"stop"})):o.createElement("button",{className:"icon-button",disabled:k||v,onClick:L,onFocus:()=>p(!0),onBlur:()=>p(!1),"aria-label":"Run Code",title:"Run Code"},o.createElement("span",{className:"icon lsf-icon",title:"play"})),o.createElement("button",{className:"icon-button",onClick:P,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Reset Code Window",title:"Reset Code Window"},o.createElement("span",{className:"icon lsf-icon",title:"refresh"}))))),m&&o.createElement("pre",{className:"output-window"},o.createElement("span",null,h),o.createElement("span",{style:{color:"var(--text-code-error)"}},C)))))}},8573:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(7462),a=n(7294),l=n(2389),i=n(1170),r=n(4956),d=n(261);function c(e){let{children:t,...n}=e;const c=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t);if("language-python"===n.className)return a.createElement(d.default,{code:c});{const e=(0,l.default)(),t="string"==typeof c?r.default:i.default;return a.createElement(t,(0,o.default)({key:String(e)},n),c)}}}}]);
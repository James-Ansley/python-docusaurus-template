"use strict";(self.webpackChunkpython_docusaurus_template=self.webpackChunkpython_docusaurus_template||[]).push([[254],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>c});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){return function(n){var t=s(n.components);return o.createElement(e,a({},n,{components:t}))}},s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,u=c["".concat(i,".").concat(m)]||c[m]||h[m]||a;return t?o.createElement(u,l(l({ref:n},p),{},{components:t})):o.createElement(u,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:100},i="Python Code Blocks",l={unversionedId:"overview/python",id:"overview/python",title:"Python Code Blocks",description:"Markdown preformatted code blocks with the python language identifier are",source:"@site/docs/overview/python.md",sourceDirName:"overview",slug:"/overview/python",permalink:"/python-docusaurus-template/docs/overview/python",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/python-docusaurus-template/docs/getting_started"},next:{title:"KaTeX",permalink:"/python-docusaurus-template/docs/overview/katex"}},d={},p=[{value:"Modifying the Default Code Editor / Runner",id:"modifying-the-default-code-editor--runner",level:2},{value:"Notes",id:"notes",level:2},{value:"A Note on Usability",id:"a-note-on-usability",level:2},{value:"The First Code Block",id:"the-first-code-block",level:3},{value:"The second Code Block",id:"the-second-code-block",level:3}],c={toc:p},s="wrapper";function m(e){let{components:n,...t}=e;return(0,r.mdx)(s,(0,o.default)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"python-code-blocks"},"Python Code Blocks"),(0,r.mdx)("p",null,"Markdown preformatted code blocks with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"python")," language identifier are\nautomatically converted to runnable and editable code blocks thanks\nto ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/elilambnz/react-py"},"react-py"),".\nSee the react-py repo and documentation for more info."),(0,r.mdx)("p",null,"For example, in a Markdown docs file:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'```python\nprint("Hello, World!")\n```\n')),(0,r.mdx)("p",null,"Becomes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'print("Hello, World!")\n')),(0,r.mdx)("p",null,"Play and reset buttons appear when hovering over the code windows."),(0,r.mdx)("p",null,"Non-runnable preformatted python blocks can be included by using ",(0,r.mdx)("inlineCode",{parentName:"p"},"py")," as the\nlanguage identifier."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'```py\nprint("Hello, World!")\n```\n')),(0,r.mdx)("p",null,"Becomes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-py"},'print("Hello, World!")\n')),(0,r.mdx)("h2",{id:"modifying-the-default-code-editor--runner"},"Modifying the Default Code Editor / Runner"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"CodeEditor")," component is located in ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/components/CodeEditor.js"),".\nThis code editor uses font files located in ",(0,r.mdx)("inlineCode",{parentName:"p"},"static/fonts")," for the run and\nreset buttons. Modifying this will alter all code editing windows."),(0,r.mdx)("p",null,"Cod windows are automatically inserted into documents by the modified\n",(0,r.mdx)("inlineCode",{parentName:"p"},"CodeBlock")," theme component located in ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/theme/CodeBlock/index.js"),". This\nis a good place to pass any global/default props to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"CodeEditor"),"\ncomponent \u2013 for example, globally setting the ",(0,r.mdx)("inlineCode",{parentName:"p"},"showButtons")," prop to have\nplay and reset buttons always visible."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"PythonProvider")," required by ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-py")," is located in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Root")," theme\ncomponent in ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/theme/Root.js"),". This is where lazy-loading or any other\nglobal ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-py")," settings can be set."),(0,r.mdx)("h2",{id:"notes"},"Notes"),(0,r.mdx)("p",null,"If you intend to have several runnable code windows on a single page, it is\nrecommended to leave the react-py ",(0,r.mdx)("inlineCode",{parentName:"p"},"lazy-loading")," flag on. This means code\nrunner workers are only spawned when a code block is run. Without this, it\nis likely several of the code windows will not work on weaker\nbrowsers/computers."),(0,r.mdx)("h2",{id:"a-note-on-usability"},"A Note on Usability"),(0,r.mdx)("p",null,"The default implementation of runnable and editable python code blocks on this\nsite is keyboard-navigable."),(0,r.mdx)("p",null,"When navigating with the keyboard using ",(0,r.mdx)("kbd",null,"tab")," or ",(0,r.mdx)("kbd",null,"shift +\ntab"),", code blocks can be focused, but do NOT capture tabs to indent code.\nTabs are only captured when the code block is either clicked on, or some other\nkey is used to interact with the code block (e.g. arrow keys, typing\ncharacters) \u2014 at which point tabs and shift-tabs will indent and dedent the\ncode.\nTo go back to navigating the page, the escape key can be pressed \u2014 at which\npoint tabs will work as before."),(0,r.mdx)("p",null,"Try it below:"),(0,r.mdx)("h3",{id:"the-first-code-block"},"The First Code Block"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def main():\n    print("Hello, Code Block 1!")\n    \nmain()\n')),(0,r.mdx)("h3",{id:"the-second-code-block"},"The second Code Block"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def main():\n    print("Hello, Code Block 2!")\n    \nmain()\n')))}m.isMDXComponent=!0}}]);
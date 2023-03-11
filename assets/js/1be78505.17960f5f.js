"use strict";(self.webpackChunkpython_docusaurus_template=self.webpackChunkpython_docusaurus_template||[]).push([[514,972],{9963:(e,t,a)=>{a.r(t),a.d(t,{default:()=>pe});var n=a(7294),l=a(6010),o=a(1944),r=a(5281),i=a(3320),s=a(2802),c=a(4477),d=a(1116),m=a(3929),u=a(5999),b=a(2466),p=a(5936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:i}=(0,b.useSmoothScrollTo)();return(0,b.useScrollPosition)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(i(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.useLocationChange)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",r.ThemeClassNames.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var E=a(6550),g=a(7524),v=a(6668),C=a(1327),S=a(7462);function _(e){return n.createElement("svg",(0,S.default)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",N.collapseSidebarButton),onClick:t},n.createElement(_,{className:N.collapseSidebarButtonIcon}))}var T=a(9689),I=a(902);const x=Symbol("EmptyContext"),y=n.createContext(x);function B(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(y.Provider,{value:o},t)}var L=a(6043),w=a(8596),A=a(9960),P=a(2389);function M(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){let{item:t,onItemClick:a,activePath:o,level:i,index:c,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,v.useThemeConfig)(),E=function(e){const t=(0,P.default)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,s.findFirstCategoryLink)(e):void 0),[e,t])}(t),g=(0,s.isActiveSidebarItem)(t,o),C=(0,w.isSamePath)(h,o),{collapsed:_,setCollapsed:N}=(0,L.useCollapsible)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:k,setExpandedItem:T}=function(){const e=(0,n.useContext)(y);if(e===x)throw new I.ReactContextError("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!_),T(e?null:c),N(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,I.usePrevious)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:g,collapsed:_,updateCollapsed:B}),(0,n.useEffect)((()=>{b&&null!=k&&k!==c&&f&&N(!0)}),[b,k,c,N,f]),n.createElement("li",{className:(0,l.default)(r.ThemeClassNames.docs.docSidebarItemCategory,r.ThemeClassNames.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":_},p)},n.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},n.createElement(A.default,(0,S.default)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{a?.(t),h?B(!1):(e.preventDefault(),B())}:()=>{a?.(t)},"aria-current":C?"page":void 0,"aria-expanded":b?!_:void 0,href:b?E??"#":E},d),u),h&&b&&n.createElement(M,{categoryLabel:u,onClick:e=>{e.preventDefault(),B()}})),n.createElement(L.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.createElement(j,{items:m,tabIndex:_?-1:0,onItemClick:a,activePath:o,level:i+1})))}var W=a(3919),F=a(9471);const D={menuExternalLink:"menuExternalLink_NmtK"};function R(e){let{item:t,onItemClick:a,activePath:o,level:i,index:c,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,s.isActiveSidebarItem)(t,o),f=(0,W.default)(m);return n.createElement("li",{className:(0,l.default)(r.ThemeClassNames.docs.docSidebarItemLink,r.ThemeClassNames.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},n.createElement(A.default,(0,S.default)({className:(0,l.default)("menu__link",!f&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},f&&{onClick:a?()=>a(t):void 0},d),u,!f&&n.createElement(F.default,null)))}const V={menuHtmlItem:"menuHtmlItem_M9Kj"};function z(e){let{item:t,level:a,index:o}=e;const{value:i,defaultStyle:s,className:c}=t;return n.createElement("li",{className:(0,l.default)(r.ThemeClassNames.docs.docSidebarItemLink,r.ThemeClassNames.docs.docSidebarItemLinkLevel(a),s&&[V.menuHtmlItem,"menu__list-item"],c),key:o,dangerouslySetInnerHTML:{__html:i}})}function U(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(H,(0,S.default)({item:t},a));case"html":return n.createElement(z,(0,S.default)({item:t},a));default:return n.createElement(R,(0,S.default)({item:t},a))}}function K(e){let{items:t,...a}=e;return n.createElement(B,null,t.map(((e,t)=>n.createElement(U,(0,S.default)({key:t,item:e,index:t},a)))))}const j=(0,n.memo)(K),Y={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function G(e){let{path:t,sidebar:a,className:o}=e;const i=function(){const{isActive:e}=(0,T.useAnnouncementBar)(),[t,a]=(0,n.useState)(e);return(0,b.useScrollPosition)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.default)("menu thin-scrollbar",Y.menu,i&&Y.menuWithAnnouncementBar,o)},n.createElement("ul",{className:(0,l.default)(r.ThemeClassNames.docs.docSidebarMenu,"menu__list")},n.createElement(j,{items:a,activePath:t,level:1})))}const O={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};function X(e){let{path:t,sidebar:a,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:s}}}=(0,v.useThemeConfig)();return n.createElement("div",{className:(0,l.default)(O.sidebar,i&&O.sidebarWithHideableNavbar,r&&O.sidebarHidden)},i&&n.createElement(C.default,{tabIndex:-1,className:O.sidebarLogo}),n.createElement(G,{path:t,sidebar:a}),s&&n.createElement(k,{onClick:o}))}const q=n.memo(X);var J=a(3102),Q=a(2961);const Z=e=>{let{sidebar:t,path:a}=e;const o=(0,Q.useNavbarMobileSidebar)();return n.createElement("ul",{className:(0,l.default)(r.ThemeClassNames.docs.docSidebarMenu,"menu__list")},n.createElement(j,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function $(e){return n.createElement(J.NavbarSecondaryMenuFiller,{component:Z,props:e})}const ee=n.memo($);function te(e){const t=(0,g.useWindowSize)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(q,e),l&&n.createElement(ee,e))}const ae={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ne(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ae.expandButton,title:(0,u.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(_,{className:ae.expandButtonIcon}))}const le={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function oe(e){let{children:t}=e;const a=(0,d.useDocsSidebar)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function re(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:i}=(0,E.useLocation)(),[s,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{s&&c(!1),o((e=>!e))}),[o,s]);return n.createElement("aside",{className:(0,l.default)(r.ThemeClassNames.docs.docSidebarContainer,le.docSidebarContainer,a&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&a&&c(!0)}},n.createElement(oe,null,n.createElement("div",{className:(0,l.default)(le.sidebarViewport,s&&le.sidebarViewportHidden)},n.createElement(te,{sidebar:t,path:i,onCollapse:d,isHidden:s}),s&&n.createElement(ne,{toggleSidebar:d}))))}const ie={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function se(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.useDocsSidebar)();return n.createElement("main",{className:(0,l.default)(ie.docMainContainer,(t||!o)&&ie.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},a))}const ce={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function de(e){let{children:t}=e;const a=(0,d.useDocsSidebar)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.default,{wrapperClassName:ce.docsWrapper},n.createElement(f,null),n.createElement("div",{className:ce.docPage},a&&n.createElement(re,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(se,{hiddenSidebarContainer:l},t)))}var me=a(4972),ue=a(197);function be(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(ue.default,{version:t.version,tag:(0,i.docVersionSearchTag)(t.pluginId,t.version)}),n.createElement(o.PageMetadata,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function pe(e){const{versionMetadata:t}=e,a=(0,s.useDocRouteMetadata)(e);if(!a)return n.createElement(me.default,null);const{docElement:i,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(be,e),n.createElement(o.HtmlClassNameProvider,{className:(0,l.default)(r.ThemeClassNames.wrapper.docsPages,r.ThemeClassNames.page.docsDocPage,e.versionMetadata.className)},n.createElement(c.DocsVersionProvider,{version:t},n.createElement(d.DocsSidebarProvider,{name:m,items:u},n.createElement(de,null,i)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(5999),o=a(1944),r=a(3929);function i(){return n.createElement(n.Fragment,null,n.createElement(o.PageMetadata,{title:(0,l.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.default,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);
"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[1899],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8519:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=r(98),o=r(6862),i=(r(9496),r(9613)),l=["components"],a={title:"Insert a Html inside the Popup to Build XR Experiences",sidebar_label:"EmbedHtml",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials to Insert a QR Code Reader in GMetri XR experiences.",hide_title:!0},s="EmbedHtml",c={unversionedId:"platform/create/elements/EmbedHtml",id:"platform/create/elements/EmbedHtml",isDocsHomePage:!1,title:"Insert a Html inside the Popup to Build XR Experiences",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials to Insert a QR Code Reader in GMetri XR experiences.",source:"@site/docs/02-platform/create/elements/EmbedHtml.md",sourceDirName:"02-platform/create/elements",slug:"/platform/create/elements/EmbedHtml",permalink:"/docs/platform/create/elements/EmbedHtml",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02-platform/create/elements/EmbedHtml.md",tags:[],version:"current",frontMatter:{title:"Insert a Html inside the Popup to Build XR Experiences",sidebar_label:"EmbedHtml",description:"View Description, Usage, Looks, Properties, Rules, When Events, Then Actions, Compatibility, Tutorials to Insert a QR Code Reader in GMetri XR experiences.",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Cylinder",permalink:"/docs/platform/create/elements/Cylinder"},next:{title:"Emoji",permalink:"/docs/platform/create/elements/Emoji"}},p=[{value:"Description",id:"description",children:[{value:"Use this element if you need to",id:"use-this-element-if-you-need-to",children:[]}]},{value:"Looks EmbedHtml",id:"looks-embedhtml",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Rules",id:"rules",children:[{value:"Then Actions",id:"then-actions",children:[]}]},{value:"Usage",id:"usage",children:[]}],m={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"embedhtml"},"EmbedHtml"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The EmbedHtml element can render any custom HTML content in a popup. The visibility of this popup can be controlled via rules."),(0,i.kt)("h3",{id:"use-this-element-if-you-need-to"},"Use this element if you need to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Show a youtube/vimeo video inside your experience."),(0,i.kt)("li",{parentName:"ul"},"Embed another service like twitter on-demand (for example on clicking a twitter logo in the experience)."),(0,i.kt)("li",{parentName:"ul"},"Render custom html content like a showing a wikipedia page on clicking an object in the experience."),(0,i.kt)("li",{parentName:"ul"},"Stream a live video from youtube/zoom. For further information on this, please see its tutorial.")),(0,i.kt)("h2",{id:"looks-embedhtml"},"Looks ",(0,i.kt)("img",{parentName:"h2",src:"https://s.vrgmetri.com/gb-web/portal-docs/assets/img/svg/Embed.svg#icon/",alt:"EmbedHtml"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/Embed_view.png#boxShadow/",alt:"QR Matcher Element"})),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90,w_250/gb-web/portal-docs/assets/img/screenshots/Embed_properties.png.jpg#boxShadow/",alt:"QR Matcher Element Properties"})),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("h3",{id:"then-actions"},"Then Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"appear")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The EmbedHtml component accepts raw HTML and displays it on screen as a 2D overlay on top of the 3D world. No additional styling is applied on top of your HTML so that you have full control of your\nHTML component. Things might not look properly aligned unless you define the dimensions of your HTML components (width, height). "),(0,i.kt)("p",null,"For example, one of the popular use-case for EmbedHtml is the addition of iframes to open your website from within the experience. To do so, it would be benefitial to use the following template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<iframe \n    width="100%" \n    style="height:100vh" \n    src="https://gmetri.com" \n    frameborder="0"\n    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n    allowfullscreen>\n</iframe>\n')),(0,i.kt)("p",null,"Similarly if you add a div or any other HTML component, make sure that you define the dimensions for that component as well."))}u.isMDXComponent=!0}}]);
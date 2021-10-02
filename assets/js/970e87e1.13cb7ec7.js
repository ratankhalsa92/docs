"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[8030],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(98),a=n(6862),o=(n(9496),n(9613)),l=["components"],i={title:"Build XR Experiences on GMetri Platform",description:"Understand concepts related to Elements on the GMetri XR platform.",hide_title:!0,sidebar_label:"Introduction"},c="Elements",s={unversionedId:"platform/create/elements",id:"platform/create/elements",isDocsHomePage:!1,title:"Build XR Experiences on GMetri Platform",description:"Understand concepts related to Elements on the GMetri XR platform.",source:"@site/docs/02-platform/create/elements.md",sourceDirName:"02-platform/create",slug:"/platform/create/elements",permalink:"/docs/platform/create/elements",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/02-platform/create/elements.md",tags:[],version:"current",frontMatter:{title:"Build XR Experiences on GMetri Platform",description:"Understand concepts related to Elements on the GMetri XR platform.",hide_title:!0,sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"E-Commerce Plugin",permalink:"/docs/platform/create/ecom"},next:{title:"3D Model",permalink:"/docs/platform/create/elements/3D Model"}},p=[{value:"Elements Button",id:"elements-button",children:[]},{value:"Element Properties",id:"element-properties",children:[]},{value:"Events and Actions",id:"events-and-actions",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"elements"},"Elements"),(0,o.kt)("p",null,"Elements are the basic building blocks added to a scene. Examples of elements are ",(0,o.kt)("inlineCode",{parentName:"p"},"Cube"),",",(0,o.kt)("inlineCode",{parentName:"p"},"Text")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Polygon"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Product Card")," and many more."),(0,o.kt)("p",null,"Elements belong to the following categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scene"),(0,o.kt)("li",{parentName:"ul"},"Panorama"),(0,o.kt)("li",{parentName:"ul"},"Standard"),(0,o.kt)("li",{parentName:"ul"},"Audio"),(0,o.kt)("li",{parentName:"ul"},"3D"),(0,o.kt)("li",{parentName:"ul"},"Spatial"),(0,o.kt)("li",{parentName:"ul"},"Gamification"),(0,o.kt)("li",{parentName:"ul"},"User Input"),(0,o.kt)("li",{parentName:"ul"},"User Interface"),(0,o.kt)("li",{parentName:"ul"},"Connect")),(0,o.kt)("h2",{id:"elements-button"},"Elements Button"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/elements.JPG#boxShadow/",alt:"Editor elements"})),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," button in the editor that opens up an array of elements to be added to a scene."),(0,o.kt)("h2",{id:"element-properties"},"Element Properties"),(0,o.kt)("p",null,"Every element has certain set of properties to control the appearence and behaviour of that element. For example, you can control dimensions of the cube, lock it in the 3D space and change its color. SImilarly you can change the product information inside a product card."),(0,o.kt)("p",null,"Some elements are 3D whilst some of them are 2D. Both are associated to a scene but the 2D elements won't appear on the 3D canvas. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product Card")," appears as a dialog or a model overlay on the 3D canvas. It is thus a 2D element."),(0,o.kt)("h2",{id:"events-and-actions"},"Events and Actions"),(0,o.kt)("p",null,"Experience viewers can play around with the 3D canvas and the elements inside it. Every element has a few set of allowed actions that are set by the ",(0,o.kt)("inlineCode",{parentName:"p"},"Rules"),". These actions differ from element to element. Actions are performed when a particular event occurs on an Element."))}u.isMDXComponent=!0}}]);
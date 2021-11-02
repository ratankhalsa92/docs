"use strict";(self.webpackChunkgmetri_docs=self.webpackChunkgmetri_docs||[]).push([[2524],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(r),u=o,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3859:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=r(98),o=r(6862),i=(r(9496),r(9613)),a=["components"],s={sidebar_label:"Export GLTF from 3DS Max",sidebar_position:2},l="Export GLTF from 3DS Max",d={unversionedId:"guidelines/03_3d-modeling-guidelines/export-gltf-from-3ds-max",id:"guidelines/03_3d-modeling-guidelines/export-gltf-from-3ds-max",isDocsHomePage:!1,title:"Export GLTF from 3DS Max",description:"GLTF Models can be exported from the 3D software 3ds Max using a third party script - babylon.js GLTF Exporter.",source:"@site/docs/04_guidelines/03_3d-modeling-guidelines/02_export-gltf-from-3ds-max.md",sourceDirName:"04_guidelines/03_3d-modeling-guidelines",slug:"/guidelines/03_3d-modeling-guidelines/export-gltf-from-3ds-max",permalink:"/docs/guidelines/03_3d-modeling-guidelines/export-gltf-from-3ds-max",editUrl:"https://github.com/gmetrixr/docs/edit/main/gmetri-docs/docs/04_guidelines/03_3d-modeling-guidelines/02_export-gltf-from-3ds-max.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Export GLTF from 3DS Max",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3D Models Conversion",permalink:"/docs/guidelines/03_3d-modeling-guidelines/3d-model-conversion"},next:{title:"Export GLTF from Blender",permalink:"/docs/guidelines/03_3d-modeling-guidelines/export-gltf-from-blender"}},p=[],c={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"export-gltf-from-3ds-max"},"Export GLTF from 3DS Max"),(0,i.kt)("p",null,"GLTF Models can be exported from the 3D software ",(0,i.kt)("a",{parentName:"p",href:"https://www.autodesk.in/products/3ds-max/overview"},"3ds Max")," using a third party script - ",(0,i.kt)("a",{parentName:"p",href:"https://doc.babylonjs.com/resources/3dsmax#how-to-install-the-3ds-max-plugin"},"babylon.js")," GLTF Exporter."),(0,i.kt)("p",null,"Here is the complete ",(0,i.kt)("a",{parentName:"p",href:"https://doc.babylonjs.com/resources/3dsmax/"},"documentation")," on the babylon.js exporter for 3ds Max. "),(0,i.kt)("p",null,"After installing babylon.js, a new menu button will appear in your 3ds Max. Clicking on it will bring up this screen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3dmax_1.jpg#boxShadow",alt:"3d max image1",title:"3d max image1"})),(0,i.kt)("p",null,"You can export either GLTF/GLB format. The editor supports both formats. Select one format and select your export folder and then click export."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3dmax_2.jpg#boxShadow",alt:"3d max image2",title:"3d max image2"})),(0,i.kt)("p",null,"Once export is completed you will get the following message and then you can close the exporter."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/3dmax_3.jpg#boxShadow",alt:"3d max image3",title:"3d max image3"})))}m.isMDXComponent=!0}}]);
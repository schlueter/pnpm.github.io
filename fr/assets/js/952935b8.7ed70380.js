"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9991],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(665),o=n(151),i=(n(9496),n(9613)),c=["components"],a={id:"production",title:"Production"},s=void 0,p={unversionedId:"production",id:"version-7.x/production",title:"Production",description:"There are two ways to bootstrap your package in a production environment with pnpm. One of these is to commit the lockfile. Then, in your production environment, run pnpm install - this will build the dependency tree using the lockfile, meaning the dependency versions will be consistent with how they were when the lockfile was committed. This is the most effective way (and the one we recommend) to ensure your dependency tree persists across environments.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/production.md",sourceDirName:".",slug:"/production",permalink:"/fr/production",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"production",title:"Production"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two ways to bootstrap your package in a production environment with pnpm. One of these is to commit the lockfile. Then, in your production environment, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," - this will build the dependency tree using the lockfile, meaning the dependency versions will be consistent with how they were when the lockfile was committed. This is the most effective way (and the one we recommend) to ensure your dependency tree persists across environments."),(0,i.kt)("p",null,"The other method is to commit the lockfile AND copy the package store to your production environment (you can change where with the ",(0,i.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"store location option"),"). Then, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," and pnpm will use the packages from the global store, so it will not make any requests to the registry. This is recommended ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," for environments where external access to the registry is unavailable for whatever reason."))}d.isMDXComponent=!0}}]);
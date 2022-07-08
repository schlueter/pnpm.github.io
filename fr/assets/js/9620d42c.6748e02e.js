"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4796],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(665),i=n(151),o=(n(9496),n(9613)),l=["components"],a={id:"git",title:"Travailler avec Git"},s=void 0,c={unversionedId:"git",id:"git",title:"Travailler avec Git",description:"Lockfiles",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/git.md",sourceDirName:".",slug:"/git",permalink:"/fr/next/git",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"git",title:"Travailler avec Git"},sidebar:"docs",previous:{title:"Int\xe9gration Continue",permalink:"/fr/next/continuous-integration"},next:{title:"Feature Comparison",permalink:"/fr/next/feature-comparison"}},u={},p=[{value:"Lockfiles",id:"lockfiles",level:2},{value:"Fusionner les conflits",id:"fusionner-les-conflits",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lockfiles"},"Lockfiles"),(0,o.kt)("p",null,"Vous devez toujours commit le lockfile (",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). Ceci pour une multitude de raisons, la principale \xe9tant:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"il permet une installation plus rapide pour les environnements CI et de production, en raison de sa capacit\xe9 de passer la r\xe9solution du package"),(0,o.kt)("li",{parentName:"ul"},"il impose des installations et des r\xe9solutions coh\xe9rentes entre les environnements de d\xe9veloppement, de test et de production, ce qui signifie que les packages utilis\xe9s dans les tests et en production seront exactement les m\xeames lors du d\xe9veloppement du projet")),(0,o.kt)("h3",{id:"fusionner-les-conflits"},"Fusionner les conflits"),(0,o.kt)("p",null,"pnpm peut r\xe9soudre automatiquement les conflits de fusion dans ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". Si vous avez des conflits, ex\xe9cutez simplement ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," et commitez les modifications."),(0,o.kt)("p",null,"Soyez toutefois averti. Il est conseill\xe9 de v\xe9rifier les modifications avant d'effectuer un commit, parce que nous ne pouvons pas garantir que pnpm choisira la bonne base - elle se construit avec les lockfiles les plus \xe0 jour, ce qui est id\xe9al dans la plupart des cas."))}d.isMDXComponent=!0}}]);
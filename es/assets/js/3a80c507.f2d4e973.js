"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7573],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(k,a(a({ref:n},d),{},{components:t})):r.createElement(k,a({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(665),l=t(151),i=(t(9496),t(9613)),a=["components"],o={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"version-6.x/cli/link",title:"pnpm link",description:"Alias: ln",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/es/6.x/cli/link",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-6.x/docs",previous:{title:"pnpm remove",permalink:"/es/6.x/cli/remove"},next:{title:"pnpm unlink",permalink:"/es/6.x/cli/unlink"}},d={},s=[{value:"Options",id:"options",level:2},{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",level:3},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",level:3},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",level:3},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",level:3}],u={toc:s};function m(e){var n=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"ln")),(0,i.kt)("p",null,"Hace que el paquete local actual sea accesible en todo el sistema, o en otra ubicaci\xf3n."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Predeterminado"),": Directorio de trabajo actual"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tipo"),": Ruta (como string)")),(0,i.kt)("p",null,"Cambia la ubicaci\xf3n del enlace a ",(0,i.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,i.kt)("h3",{id:"pnpm-link-dir"},(0,i.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,i.kt)("p",null,"Enlaza el paquete desde la carpeta ",(0,i.kt)("inlineCode",{parentName:"p"},"<dir>")," a los node_modules del paquete situado en la ruta en la que se est\xe9 ejecutando este comando u otra especificada a trav\xe9s de la opci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"--dir"),"."),(0,i.kt)("h3",{id:"pnpm-link---global"},(0,i.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,i.kt)("p",null,"Enlaza el paquete desde la ubicaci\xf3n donde se ejecut\xf3 este comando o desde donde se especific\xf3 a trav\xe9s de la opci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"--dir")," a los ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," globales, por lo que puede ser referenciado desde otro paquete con ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm link --global <pkg>"),"."),(0,i.kt)("h3",{id:"pnpm-link---global-pkg"},(0,i.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,i.kt)("p",null,"Links the specified package (",(0,i.kt)("inlineCode",{parentName:"p"},"<pkg>"),") from global ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_nodules")," of package from where this command was executed or specified via ",(0,i.kt)("inlineCode",{parentName:"p"},"--dir")," option."))}m.isMDXComponent=!0}}]);
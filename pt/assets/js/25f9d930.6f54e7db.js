"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2361],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,f=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var a=n(665),r=n(151),i=(n(9496),n(9613)),p=["components"],o={id:"pnpm-cli",title:"CLI - pnpm"},l=void 0,m={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",title:"CLI - pnpm",description:"Diferen\xe7as do npm",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/pt/6.x/pnpm-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"pnpm-cli",title:"CLI - pnpm"},sidebar:"version-6.x/docs",previous:{title:"Instala\xe7\xe3o",permalink:"/pt/6.x/installation"},next:{title:"pnpx CLI",permalink:"/pt/6.x/pnpx-cli"}},c={},d=[{value:"Diferen\xe7as do npm",id:"diferen\xe7as-do-npm",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"-C &lt;caminho&gt;, --dir &lt;caminho&gt;",id:"-c-caminho---dir-caminho",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"Comandos",id:"comandos",level:2}],s={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diferen\xe7as-do-npm"},"Diferen\xe7as do npm"),(0,i.kt)("p",null,"Diferente do npm o pnpm valida todas as op\xe7\xf5es. Por exemplo, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," falhar\xe1 se ",(0,i.kt)("inlineCode",{parentName:"p"},"--target_arch")," n\xe3o for uma op\xe7\xe3o v\xe1lida para ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"No entanto, algumas depend\xeancias podem utilizar a vari\xe1vel de ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_"),", que \xe9 preenchida a partir das op\xe7\xf5es da CLI. Neste caso, voc\xea tem as seguintes op\xe7\xf5es:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"defina explicitamente a vari\xe1vel de ambiente: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,i.kt)("li",{parentName:"ol"},"force a op\xe7\xe3o desconhecida com ",(0,i.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm instalar --config.target_arch=x64"))),(0,i.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,i.kt)("h3",{id:"-c-caminho---dir-caminho"},"-C ","<","caminho",">",", --dir ","<","caminho",">"),(0,i.kt)("p",null,"Execute como se o pnpm tivesse sido iniciado em ",(0,i.kt)("inlineCode",{parentName:"p"},"<caminho>")," em vez do diret\xf3rio de trabalho atual."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"Added in: v5.6.0"),(0,i.kt)("p",null,"Run as if pnpm was started in the root of the ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," instead of the current working directory."),(0,i.kt)("h2",{id:"comandos"},"Comandos"),(0,i.kt)("p",null,"For more information, see the documentation for individual CLI commands. Here is a list of handy npm equivalents to get you started:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"npm command"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pt/6.x/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,i.kt)("p",null,"When an unknown command is used, pnpm will search for a script with the given name, so ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". If there is no script with the specified name, then pnpm will execute the command as a shell script, so you can do things like ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (see ",(0,i.kt)("a",{parentName:"p",href:"/pt/6.x/cli/exec"},"pnpm exec"),")."))}u.isMDXComponent=!0}}]);
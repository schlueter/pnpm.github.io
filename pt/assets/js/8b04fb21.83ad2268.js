"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8970],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,k=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var a=n(665),r=n(151),o=(n(9496),n(9613)),i=["components"],p={id:"pnpm-cli",title:"pnpm CLI"},l=void 0,m={unversionedId:"pnpm-cli",id:"pnpm-cli",title:"pnpm CLI",description:"Diferen\xe7as vs npm",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/pt/next/pnpm-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"docs",previous:{title:"Instala\xe7\xe3o",permalink:"/pt/next/installation"},next:{title:"Configurando",permalink:"/pt/next/configuring"}},c={},d=[{value:"Diferen\xe7as vs npm",id:"diferen\xe7as-vs-npm",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"-C &lt;caminho&gt;, --dir &lt;caminho&gt;",id:"-c-caminho---dir-caminho",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"Comandos",id:"comandos",level:2}],s={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"diferen\xe7as-vs-npm"},"Diferen\xe7as vs npm"),(0,o.kt)("p",null,"Ao contr\xe1rio do npm, o pnpm valida todas as op\xe7\xf5es. Por exemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," falhar\xe1 porque ",(0,o.kt)("inlineCode",{parentName:"p"},"--target_arch")," n\xe3o \xe9 uma op\xe7\xe3o v\xe1lida para ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,o.kt)("p",null,"No entanto, algumas depend\xeancias podem utilizar a vari\xe1vel de ambiente ",(0,o.kt)("inlineCode",{parentName:"p"},"npm_config_"),", que \xe9 preenchida a partir das op\xe7\xf5es da CLI. Neste caso, voc\xea tem as seguintes op\xe7\xf5es:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"defina explicitamente a vari\xe1vel de ambiente: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,o.kt)("li",{parentName:"ol"},"force a op\xe7\xe3o desconhecida com ",(0,o.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm instalar --config.target_arch=x64"))),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"-c-caminho---dir-caminho"},"-C ","<","caminho",">",", --dir ","<","caminho",">"),(0,o.kt)("p",null,"Execute como se o pnpm tivesse sido iniciado em ",(0,o.kt)("inlineCode",{parentName:"p"},"<caminho>")," em vez do diret\xf3rio de trabalho atual."),(0,o.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,o.kt)("p",null,"Execute como se o pnpm tivesse sido iniciado na raiz do ",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," em vez do diret\xf3rio de trabalho atual."),(0,o.kt)("h2",{id:"comandos"},"Comandos"),(0,o.kt)("p",null,"Para obter mais informa\xe7\xf5es, consulte a documenta\xe7\xe3o de comandos CLI individuais. Aqui est\xe1 uma lista de comandos \xfateis equivalentes ao npm para voc\xea come\xe7ar:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"npm command"),(0,o.kt)("th",{parentName:"tr",align:null},"pnpm equivalent"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm install")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pt/next/cli/install"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,o.kt)("p",null,"Quando um comando desconhecido \xe9 usado, o pnpm buscar\xe1 um script com o nome dado, ent\xe3o ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," \xe9 o mesmo que ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". Se n\xe3o houver script com o nome especificado, ent\xe3o o pnpm executar\xe1 o comando como um shell script, ent\xe3o voc\xea pode fazer coisas como ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (veja ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/cli/exec"},"pnpm exec"),")."))}u.isMDXComponent=!0}}]);
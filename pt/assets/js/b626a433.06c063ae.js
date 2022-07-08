"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[783],{9613:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>m});var t=o(9496);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return o?t.createElement(f,i(i({ref:n},d),{},{components:o})):t.createElement(f,i({ref:n},d))}));function m(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6933:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(665),a=o(151),r=(o(9496),o(9613)),i=["components"],s={id:"aliases",title:"Apelidos"},p=void 0,l={unversionedId:"aliases",id:"aliases",title:"Apelidos",description:"Apelidos permitem que voc\xea instale pacotes com nomes personalizados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/pt/next/aliases",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"aliases",title:"Apelidos"},sidebar:"docs",previous:{title:"\xc1rea de Trabalho",permalink:"/pt/next/workspaces"},next:{title:"Completar linha de comando utilizando tab",permalink:"/pt/next/completion"}},d={},c=[],u={toc:c};function m(e){var n=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apelidos permitem que voc\xea instale pacotes com nomes personalizados."),(0,r.kt)("p",null,"Vamos supor que voc\xea use ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," em todo o seu projeto. H\xe1 um erro no ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," que quebra seu projeto. Voc\xea tem uma corre\xe7\xe3o, mas ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," n\xe3o a mesclar\xe1. Normalmente voc\xea instalaria ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash"),' diretamente do seu fork (como uma depend\xeancia hospedada no git) ou o publicaria com um nome diferente. Se voc\xea usar a segunda solu\xe7\xe3o voc\xea tem que substituir todos os "require" em seu projeto pelo novo nome de depend\xeancia (',(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"require('awesome-dasloh')"),"). Com apelidos, voc\xea tem uma terceira op\xe7\xe3o."),(0,r.kt)("p",null,"Publicar um novo pacote chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"incr\xedvel-lodash")," e instal\xe1-lo usando ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," como seu apelido:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,r.kt)("p",null,'Nenhuma altera\xe7\xe3o no c\xf3digo \xe9 necess\xe1ria. Todos os "require" de ',(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," agora ser\xe3o resolvidos para ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,r.kt)("p",null,"\xc0s vezes voc\xea vai querer usar duas vers\xf5es diferentes de um pacote em seu projeto. F\xe1cil:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,r.kt)("p",null,"Agora voc\xea pode exigir a primeira vers\xe3o do lodash via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," e a segunda vers\xe3o via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,r.kt)("p",null,"Isso fica ainda mais poderoso quando combinado com ganchos. Talvez voc\xea queira substituir ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," por ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," em todos os pacotes em ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". Voc\xea pode facilmente alcan\xe7ar isso com o seguinte ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}m.isMDXComponent=!0}}]);
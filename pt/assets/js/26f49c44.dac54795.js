"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3635],{9613:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>u});var a=n(9496);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=a.createContext({}),l=function(e){var o=a.useContext(p),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},d=function(e){var o=l(e.components);return a.createElement(p.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=t,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(f,i(i({ref:o},d),{},{components:n})):a.createElement(f,i({ref:o},d))}));function u(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5644:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(665),t=n(151),r=(n(9496),n(9613)),i=["components"],s={id:"aliases",title:"Apelidos"},p=void 0,l={unversionedId:"aliases",id:"version-6.x/aliases",title:"Apelidos",description:"Apelidos permitem que voc\xea instale pacotes com nomes personalizados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/aliases.md",sourceDirName:".",slug:"/aliases",permalink:"/pt/6.x/aliases",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"aliases",title:"Apelidos"},sidebar:"version-6.x/docs",previous:{title:"\xc1rea de Trabalho",permalink:"/pt/6.x/workspaces"},next:{title:"Completar linha de comando utilizando tab",permalink:"/pt/6.x/completion"}},d={},c=[],m={toc:c};function u(e){var o=e.components,n=(0,t.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apelidos permitem que voc\xea instale pacotes com nomes personalizados."),(0,r.kt)("p",null,"Vamos supor que voc\xea use ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," em todo o seu projeto. H\xe1 um erro no ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," que quebra seu projeto. Voc\xea tem uma corre\xe7\xe3o, mas ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," n\xe3o a mesclar\xe1. Normalmente voc\xea instalaria ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash"),' diretamente do seu fork (como uma depend\xeancia hospedada no git) ou o publicaria com um nome diferente. Se voc\xea usar a segunda solu\xe7\xe3o voc\xea tem que substituir todos os "require" em seu projeto pelo novo nome de depend\xeancia (',(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash')")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"require('awesome-dasloh')"),"). Com apelidos, voc\xea tem uma terceira op\xe7\xe3o."),(0,r.kt)("p",null,"Publicar um novo pacote chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"incr\xedvel-lodash")," e instal\xe1-lo usando ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," como seu apelido:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm add lodash@npm:awesome-lodash\n")),(0,r.kt)("p",null,'Nenhuma altera\xe7\xe3o no c\xf3digo \xe9 necess\xe1ria. Todos os "require" de ',(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," agora ser\xe3o resolvidos para ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash"),"."),(0,r.kt)("p",null,"\xc0s vezes voc\xea vai querer usar duas vers\xf5es diferentes de um pacote em seu projeto. F\xe1cil:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add lodash1@npm:lodash@1\npnpm add lodash2@npm:lodash@2\n")),(0,r.kt)("p",null,"Agora voc\xea pode exigir a primeira vers\xe3o do lodash via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash1')")," e a segunda vers\xe3o via ",(0,r.kt)("inlineCode",{parentName:"p"},"require('lodash2')"),"."),(0,r.kt)("p",null,"Isso fica ainda mais poderoso quando combinado com ganchos. Talvez voc\xea queira substituir ",(0,r.kt)("inlineCode",{parentName:"p"},"lodash")," por ",(0,r.kt)("inlineCode",{parentName:"p"},"awesome-lodash")," em todos os pacotes em ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". Voc\xea pode facilmente alcan\xe7ar isso com o seguinte ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg) {\n  if (pkg.dependencies && pkg.dependencies.lodash) {\n    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'\n  }\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")))}u.isMDXComponent=!0}}]);
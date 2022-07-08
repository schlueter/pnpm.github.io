"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[856],{9613:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>d});var r=t(9496);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function p(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),l=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},m=function(e){var o=l(e.components);return r.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},c=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(t),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return t?r.createElement(f,i(i({ref:o},m),{},{components:t})):r.createElement(f,i({ref:o},m))}));function d(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=c;var p={};for(var s in o)hasOwnProperty.call(o,s)&&(p[s]=o[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7687:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=t(665),n=t(151),a=(t(9496),t(9613)),i=["components"],p={id:"limitations",title:"Limita\xe7\xf5es"},s=void 0,l={unversionedId:"limitations",id:"limitations",title:"Limita\xe7\xf5es",description:"1. npm-shrinkwrap.json e package-lock.json s\xe3o ignorados. Ao contr\xe1rio do pnpm, o npm pode instalar o mesmo name@version v\xe1rias vezes e com diferentes conjuntos de depend\xeancias. O arquivo de bloqueio do npm \xe9 projetado para refletir o layout flat node_modules, no entanto, como o pnpm cria um layout isolado por padr\xe3o, ele n\xe3o pode respeitar o formato do arquivo de bloqueio do npm. Consulte pnpm import se desejar converter um arquivo de bloqueio para o formato de pnpm.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/pt/next/limitations",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"limitations",title:"Limita\xe7\xf5es"},sidebar:"docs",previous:{title:"Logos",permalink:"/pt/next/logos"},next:{title:"Symlinked `node_modules` structure",permalink:"/pt/next/symlinked-node-modules-structure"}},m={},u=[],c={toc:u};function d(e){var o=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," e ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json")," s\xe3o ignorados. Ao contr\xe1rio do pnpm, o npm pode instalar o mesmo ",(0,a.kt)("inlineCode",{parentName:"li"},"name@version")," v\xe1rias vezes e com diferentes conjuntos de depend\xeancias. O arquivo de bloqueio do npm \xe9 projetado para refletir o layout flat ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),", no entanto, como o pnpm cria um layout isolado por padr\xe3o, ele n\xe3o pode respeitar o formato do arquivo de bloqueio do npm. Consulte ",(0,a.kt)("a",{parentName:"li",href:"/pt/next/cli/import"},"pnpm import")," se desejar converter um arquivo de bloqueio para o formato de pnpm."),(0,a.kt)("li",{parentName:"ol"},"Binstubs (arquivos em ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") s\xe3o sempre arquivos shell, n\xe3o links simb\xf3licos para arquivos JS. Os arquivos shell s\xe3o criados para ajudar os aplicativos CLI conect\xe1veis a encontrar seus plug-ins na estrutura incomum ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),". Isso raramente \xe9 um problema e se voc\xea espera que o arquivo seja um arquivo JS, fa\xe7a refer\xeancia ao arquivo original diretamente, conforme descrito em #736 ","[][]",".")),(0,a.kt)("p",null,"Tem uma ideia para solu\xe7\xf5es alternativas para esses problemas? ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Compartilhe!")))}d.isMDXComponent=!0}}]);
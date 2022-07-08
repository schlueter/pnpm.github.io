"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4580],{9613:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var o=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),i=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=i(a),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||t;return a?o.createElement(f,s(s({ref:n},p),{},{components:a})):o.createElement(f,s({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,s=new Array(t);s[0]=c;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var i=2;i<t;i++)s[i]=a[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2891:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var o=a(665),r=a(151),t=(a(9496),a(9613)),s=["components"],d={id:"symlinked-node-modules-structure",title:"Estructura de `node_modules` con enlaces simb\xf3licos"},l=void 0,i={unversionedId:"symlinked-node-modules-structure",id:"symlinked-node-modules-structure",title:"Estructura de `node_modules` con enlaces simb\xf3licos",description:"Este art\xedculo solo describe c\xf3mo se estructuran la carpeta node_modules de pnpm cuando no hay paquetes con dependencias pares. Para el escenario m\xe1s complejo de dependencias pares, revise c\xf3mo se resuelven las dependencias pares.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/symlinked-node-modules-structure.md",sourceDirName:".",slug:"/symlinked-node-modules-structure",permalink:"/es/next/symlinked-node-modules-structure",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"symlinked-node-modules-structure",title:"Estructura de `node_modules` con enlaces simb\xf3licos"},sidebar:"docs",previous:{title:"Limitaciones",permalink:"/es/next/limitations"},next:{title:"C\xf3mo se resuelven los peers",permalink:"/es/next/how-peers-are-resolved"}},p={},u=[],c={toc:u};function m(e){var n=e.components,a=(0,r.Z)(e,s);return(0,t.kt)("wrapper",(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Este art\xedculo solo describe c\xf3mo se estructuran la carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," de pnpm cuando no hay paquetes con dependencias pares. Para el escenario m\xe1s complejo de dependencias pares, revise ",(0,t.kt)("a",{parentName:"p",href:"/es/next/how-peers-are-resolved"},"c\xf3mo se resuelven las dependencias pares"),"."))),(0,t.kt)("p",null,"El dise\xf1o de la carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," de pnpm utiliza enlaces simb\xf3licos para crear una estructura anidada de dependencias."),(0,t.kt)("p",null,"Cada archivo de un paquete dentro de ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," es un v\xednculo al almacenamiento de contenido direccionable. Digamos vas a instalar ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," el cual depende de ",(0,t.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),". pnpm crear\xe1 un v\xednculo a estos paquetes en ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," esta manera:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2502           \u251c\u2500\u2500 index.js\n    \u2502           \u2514\u2500\u2500 package.json\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 foo -> <store>/foo\n                \u251c\u2500\u2500 index.js\n                \u2514\u2500\u2500 package.json\n")),(0,t.kt)("p",null,'Estos son los \xfanicos archivos "reales" en ',(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),". Una vez que todos los paquetes est\xe1n vinculados a la carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),", los enlaces simb\xf3licos son creados para construir la estructura del gr\xe1fico de las dependencias anidadas."),(0,t.kt)("p",null,"Como habr\xe1s notado, ambos paquetes est\xe1n vinculados a una sub carpeta dentro de una carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),", as\xed: (",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo"),"). Esto es necesario para:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Permitir que los paquetes se importen solos.")," El paquete ",(0,t.kt)("inlineCode",{parentName:"li"},"foo")," deber\xeda poder ",(0,t.kt)("inlineCode",{parentName:"li"},"require('foo/package.json')")," o ",(0,t.kt)("inlineCode",{parentName:"li"},'import * as package from "foo/package.json"'),"."),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"evitar enlaces simb\xf3licos circulares.")," Las dependencias de los paquetes se colocan en la misma carpeta en la que se encuentran los paquetes dependientes. Para Node.js, no hace ninguna diferencia si las dependencias est\xe1n dentro de la carpeta ",(0,t.kt)("inlineCode",{parentName:"li"},"node_modules")," del paquete o en cualquier otro ",(0,t.kt)("inlineCode",{parentName:"li"},"node_modules")," en los directorios superiores.")),(0,t.kt)("p",null,"La siguiente etapa de la instalaci\xf3n es la creaci\xf3n de los enlaces simbolicos de las dependencias. ",(0,t.kt)("inlineCode",{parentName:"p"},"bar")," va a estar vinculado simb\xf3licamente a la carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,t.kt)("p",null,"A continuaci\xf3n, se manejan las dependencias directas. ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," se vincular\xe1 simb\xf3licamente a la carpeta ra\xedz ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules")," debido ",(0,t.kt)("inlineCode",{parentName:"p"},"foo")," es una dependencia del proyecto:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,t.kt)("p",null,"Este es un ejemplo muy simple. Sin embargo, el dise\xf1o mantendr\xe1 esta estructura independientemente del n\xfamero de dependencias y la profundidad del gr\xe1fico de dependencia."),(0,t.kt)("p",null,"Agreguemos ",(0,t.kt)("inlineCode",{parentName:"p"},"qar@2.0.0")," como una dependencia de ",(0,t.kt)("inlineCode",{parentName:"p"},"bar")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"foo"),". As\xed es como se ver\xe1 la nueva estructura:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 bar -> <store>/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u251c\u2500\u2500 foo@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u251c\u2500\u2500 foo -> <store>/foo\n    \u2502       \u251c\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n    \u2502       \u2514\u2500\u2500 qar -> ../../qar@2.0.0/node_modules/qar\n    \u2514\u2500\u2500 qar@2.0.0\n        \u2514\u2500\u2500 node_modules\n            \u2514\u2500\u2500 qar -> <store>/qar\n")),(0,t.kt)("p",null,"Como puede ver, aunque el gr\xe1fico es m\xe1s profundo ahora (",(0,t.kt)("inlineCode",{parentName:"p"},"foo > bar > qar"),"), la profundidad de los directorios en el sistema de archivos sigue siendo la misma."),(0,t.kt)("p",null,"Este dise\xf1o puede parecer extra\xf1o a primera vista, \xa1pero es completamente compatible con el algoritmo de resoluci\xf3n de m\xf3dulos de Node! Al resolver m\xf3dulos, Node ignora enlaces simb\xf3licos, por lo que cuando se requiere ",(0,t.kt)("inlineCode",{parentName:"p"},"bar")," de ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules/foo/index.js"),", Node no usa ",(0,t.kt)("inlineCode",{parentName:"p"},"bar")," en ",(0,t.kt)("inlineCode",{parentName:"p"},"foo@1.0.0/node_modules /bar"),", pero en su lugar, ",(0,t.kt)("inlineCode",{parentName:"p"},"bar")," se convierte a su ubicaci\xf3n real (",(0,t.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules/bar"),"). Como consecuencia, ",(0,t.kt)("inlineCode",{parentName:"p"},"bar")," tambi\xe9n puede resolver sus dependencias que se encuentran en ",(0,t.kt)("inlineCode",{parentName:"p"},"bar@1.0.0/node_modules"),"."),(0,t.kt)("p",null,"Una gran ventaja de este dise\xf1o es que solo los paquetes que realmente est\xe1n en las dependencias son accesibles. Con una estructura plana de la carpeta ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),', se puede acceder a los paquetes superiores. Para obtener m\xe1s informaci\xf3n sobre por qu\xe9 esto es una ventaja, consulte "',(0,t.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"El rigor de pnpm ayuda a evitar errores desagradables"),'"'))}m.isMDXComponent=!0}}]);
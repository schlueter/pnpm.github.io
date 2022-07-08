"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7340],{9613:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var r=a(9496);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,o=function(e,n){if(null==e)return{};var a,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||t;return a?r.createElement(f,l(l({ref:n},s),{},{components:a})):r.createElement(f,l({ref:n},s))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=a.length,l=new Array(t);l[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<t;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1343:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=a(665),o=a(151),t=(a(9496),a(9613)),l=["components"],p={id:"fetch",title:"pnpm fetch"},i=void 0,c={unversionedId:"cli/fetch",id:"version-7.x/cli/fetch",title:"pnpm fetch",description:"Descargar paquetes indicados en un lockfile a la tienda virtual, el manifiesto de paquetes es ignorado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/es/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-7.x/docs",previous:{title:"pnpm prune",permalink:"/es/cli/prune"},next:{title:"pnpm install-test",permalink:"/es/cli/install-test"}},s={},d=[{value:"Escenario de uso",id:"escenario-de-uso",level:2},{value:"Options",id:"options",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],u={toc:d};function m(e){var n=e.components,a=(0,o.Z)(e,l);return(0,t.kt)("wrapper",(0,r.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Descargar paquetes indicados en un lockfile a la tienda virtual, el manifiesto de paquetes es ignorado."),(0,t.kt)("h2",{id:"escenario-de-uso"},"Escenario de uso"),(0,t.kt)("p",null,"Este comando est\xe1 espec\xedficamente dise\xf1ado para acelerar la construcci\xf3n de una imagen docker."),(0,t.kt)("p",null,"Puedes haber le\xeddo la ",(0,t.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"gu\xeda oficial")," para escribir un Dockerfile para una aplicaci\xf3n Node, si a\xfan no la has le\xeddo, tal vez quieras leerla primero."),(0,t.kt)("p",null,"De esa gu\xeda, aprendemos a escribir un Dockerfile optimizado para proyectos usando pnpm, que se ver\xe1 como"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Archivos requeridos por pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Empaqueta el c\xf3digo fuente de la app\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,t.kt)("p",null,"Mientras no haya ning\xfan cambio en ",(0,t.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".pnpmfile. js"),", la cach\xe9 de construcci\xf3n de docker sigue siendo v\xe1lido hasta la capa de ",(0,t.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", la cual cuesta la mayor parte del tiempo de construcci\xf3n de una imagen docker."),(0,t.kt)("p",null,"Sin embargo, las modificaciones al ",(0,t.kt)("inlineCode",{parentName:"p"},"package.json")," ocurren con mayor frecuencia de lo que esper\xe1bamos, porque no solo contiene dependencias, sino que tambi\xe9n puede contener el n\xfamero de versi\xf3n, scripts y configuraci\xf3n arbitraria para cualquier otra herramienta."),(0,t.kt)("p",null,"Tambi\xe9n es dif\xedcil mantener un Dockerfile que construye un proyecto monorepo, puede parecerse a algo tal que:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,t.kt)("p",null,"Como puede ver, el archivo Dockerfile tiene que ser actualizado cuando agregue o elimine sub-paquetes."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," resolver\xe1 perfectamente el problema anterior proporcionando la habilidad de descargar el paquete al almac\xe9n virtual \xfanicamente con la informaci\xf3n de un lockfile."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch solo requiere un lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,t.kt)("p",null,"Funciona tanto para un proyecto simple como para un proyecto monorepo, ",(0,t.kt)("inlineCode",{parentName:"p"},"--offline")," fuerza a pnpm a no comunicarse con el registro de paquetes ya que todos los paquetes necesarios deber\xedan estar (descargados) en la tienda virtual."),(0,t.kt)("p",null,"Mientras el lockfile no se cambie, la cach\xe9 de compilaci\xf3n es v\xe1lida hasta la capa ",(0,t.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", lo cual te ahorrar\xe1 mucho tiempo."),(0,t.kt)("h2",{id:"options"},"Options"),(0,t.kt)("h3",{id:"--dev"},"--dev"),(0,t.kt)("p",null,"S\xf3lo se descargar\xe1n los paquetes de desarrollo"),(0,t.kt)("h3",{id:"--prod"},"--prod"),(0,t.kt)("p",null,"Los paquetes de desarrollo no se descargar\xe1n"))}m.isMDXComponent=!0}}]);
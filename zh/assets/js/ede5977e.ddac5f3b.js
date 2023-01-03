"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3847],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=t(2962),o=t(2742),a=(t(9496),t(9613)),l=["components"],p={id:"fetch",title:"pnpm fetch"},i=void 0,c={unversionedId:"cli/fetch",id:"version-7.x/cli/fetch",title:"pnpm fetch",description:"\u5c06 lockfile \u4e2d\u5217\u51fa\u5305\u4e0b\u8f7d\u5230\u865a\u62df\u5b58\u50a8\u4e2d\uff0c\u5305\u6e05\u5355\u88ab\u5ffd\u7565\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/zh/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-7.x/docs",previous:{title:"pnpm prune",permalink:"/zh/cli/prune"},next:{title:"pnpm install-test",permalink:"/zh/cli/install-test"}},s={},d=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5c06 lockfile \u4e2d\u5217\u51fa\u5305\u4e0b\u8f7d\u5230\u865a\u62df\u5b58\u50a8\u4e2d\uff0c\u5305\u6e05\u5355\u88ab\u5ffd\u7565\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"This command is specifically designed to improve building a docker image."),(0,a.kt)("p",null,"You may have read the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js app, if you haven't read it yet, you may want to read it first."),(0,a.kt)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using pnpm, which looks like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"As long as there are no changes to ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time when building a docker image."),(0,a.kt)("p",null,"However, modification to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than we expect, because it does not only contain dependencies, but may also contain the version number, scripts, and arbitrary configuration for any other tool."),(0,a.kt)("p",null,"It's also hard to maintain a Dockerfile that builds a monorepo project, it may look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,a.kt)("p",null,"\u5982\u60a8\u6240\u89c1\uff0c\u5f53\u60a8\u6dfb\u52a0\u6216\u5220\u9664\u5b50\u5305\u65f6\uff0c\u5fc5\u987b\u66f4\u65b0 Dockerfile\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," solves the above problem perfectly by providing the ability to load packages into the virtual store using only information from a lockfile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"It works for both simple and monorepo projects, ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline")," enforces pnpm not to communicate with the package registry as all needed packages are already present in the virtual store."),(0,a.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the layer, so ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", will save you much time."),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"--dev"},"--dev"),(0,a.kt)("p",null,"\u53ea\u4f1a\u83b7\u53d6\u5f00\u53d1\u5305"),(0,a.kt)("h3",{id:"--prod"},"--prod"),(0,a.kt)("p",null,"\u4e0d\u4f1a\u83b7\u53d6\u5f00\u53d1\u5305"))}u.isMDXComponent=!0}}]);
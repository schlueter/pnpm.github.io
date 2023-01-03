"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6579],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(f,l(l({ref:n},s),{},{components:t})):o.createElement(f,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var o=t(2962),r=t(2742),a=(t(9496),t(9613)),l=["components"],p={id:"fetch",title:"pnpm fetch"},i=void 0,c={unversionedId:"cli/fetch",id:"cli/fetch",title:"pnpm fetch",description:"lockfile\uc5d0\uc11c \uac00\uc0c1 \uc800\uc7a5\uc18c\ub85c \ud328\ud0a4\uc9c0\ub97c \uac00\uc838\uc624\uba74 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc774 \ubb34\uc2dc\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/ko/next/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"docs",previous:{title:"pnpm prune",permalink:"/ko/next/cli/prune"},next:{title:"pnpm install-test",permalink:"/ko/next/cli/install-test"}},s={},d=[{value:"\uc0ac\uc6a9 \uc2dc\ub098\ub9ac\uc624",id:"\uc0ac\uc6a9-\uc2dc\ub098\ub9ac\uc624",level:2},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"lockfile\uc5d0\uc11c \uac00\uc0c1 \uc800\uc7a5\uc18c\ub85c \ud328\ud0a4\uc9c0\ub97c \uac00\uc838\uc624\uba74 \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc774 \ubb34\uc2dc\ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc0ac\uc6a9-\uc2dc\ub098\ub9ac\uc624"},"\uc0ac\uc6a9 \uc2dc\ub098\ub9ac\uc624"),(0,a.kt)("p",null,"This command is specifically designed to improve building a docker image."),(0,a.kt)("p",null,"You may have read the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"official guide")," to writing a Dockerfile for a Node.js app, if you haven't read it yet, you may want to read it first."),(0,a.kt)("p",null,"From that guide, we learn to write an optimized Dockerfile for projects using pnpm, which looks like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm install\uc5d0 \ud544\uc694\ud55c \ud30c\uc77c\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# \ubc88\ub4e4 \uc571 \uc18c\uc2a4\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"As long as there are no changes to ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", docker build cache is still valid up to the layer of ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", which cost most of the time when building a docker image."),(0,a.kt)("p",null,"However, modification to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," may happen much more frequently than we expect, because it does not only contain dependencies, but may also contain the version number, scripts, and arbitrary configuration for any other tool."),(0,a.kt)("p",null,"It's also hard to maintain a Dockerfile that builds a monorepo project, it may look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# \uc124\uce58\ub97c \uc704\ud574 \ud544\uc694\ud55c \ud30c\uc77c\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\n# \ud558\ub098\uc758 \uba85\ub839\uc5b4\ub9cc\uc73c\ub85c \ub3c4\ucee4\ub294 package.json\uc744 \uac78\ub7ec\ub0bc \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \uac01 \uc11c\ube0c \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud574 \ub9e4\ub2c8\ud398\uc2a4\ud2b8\ub97c \uc62c\ubc14\ub978 \uc704\uce58\ub85c \ubcf5\uc0ac\ud558\uae30 \uc704\ud55c \uc5ec\ubd84\uc758 \uba85\ub839\uc5b4\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# \uc571 \uc18c\uc2a4 \ubc88\ub4e4\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,a.kt)("p",null,"\ubcf4\uc2dc\ub2e4\uc2dc\ud53c \ud558\uc704 \ud328\ud0a4\uc9c0\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc81c\uac70\ud560 \ub54c Dockerfile\uc744 \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," solves the above problem perfectly by providing the ability to load packages into the virtual store using only information from a lockfile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node-add --global pnpm\n\n# pnpm fetch\ub294 lockfile\ub9cc \ud544\uc694\ud569\ub2c8\ub2e4.\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD. ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,a.kt)("p",null,"It works for both simple and monorepo projects, ",(0,a.kt)("inlineCode",{parentName:"p"},"--offline")," enforces pnpm not to communicate with the package registry as all needed packages are already present in the virtual store."),(0,a.kt)("p",null,"As long as the lockfile is not changed, the build cache is valid up to the layer, so ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod"),", will save you much time."),(0,a.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,a.kt)("h3",{id:"--dev"},"--dev"),(0,a.kt)("p",null,"\uac1c\ubc1c \ud328\ud0a4\uc9c0\ub9cc \uac00\uc838\uc635\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"--prod"},"--prod"),(0,a.kt)("p",null,"\uac1c\ubc1c \ud328\ud0a4\uc9c0\ub97c \uac00\uc838\uc624\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))}u.isMDXComponent=!0}}]);
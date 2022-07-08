"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[428],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=i(n),d=l,v=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(v,p(p({ref:t},u),{},{components:n})):r.createElement(v,p({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,p=new Array(o);p[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,p[1]=a;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(665),l=n(151),o=(n(9496),n(9613)),p=["components"],a={id:"env",title:"pnpm env <cmd>"},c=void 0,i={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Node.js \ud658\uacbd\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/ko/next/cli/env",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/ko/next/cli/start"},next:{title:"pnpm publish",permalink:"/ko/next/cli/publish"}},u={},s=[{value:"\uba85\ub839\uc5b4",id:"\uba85\ub839\uc5b4",level:2},{value:"use",id:"use",level:3},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--global, -g",id:"--global--g",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Node.js \ud658\uacbd\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"\uba85\ub839\uc5b4"},"\uba85\ub839\uc5b4"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"\uc9c0\uc815\ub41c \ubc84\uc804\uc758 Node.js \uc124\uce58 \ubc0f \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"Node.js\uc758 LTS \ubc84\uc804\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"Node.js v16 \uc124\uce58:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Node.js\uc758 \uc2dc\ud5d8\ud310 \ubc84\uc804\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"\ucd5c\uc2e0 \ubc84\uc804\uc758 Node.js\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"\ubcc0\uacbd \uc0ac\ud56d\uc740 \uc2dc\uc2a4\ud15c \uc804\uccb4\uc5d0 \uc801\uc6a9\ub429\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);
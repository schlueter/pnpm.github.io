"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9436],{9613:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||p;return r?t.createElement(d,i(i({ref:n},u),{},{components:r})):t.createElement(d,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4995:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var t=r(665),o=r(151),p=(r(9496),r(9613)),i=["components"],a={id:"configuring",title:"\uc124\uc815"},c=void 0,l={unversionedId:"configuring",id:"version-7.x/configuring",title:"\uc124\uc815",description:"pnpm\uc740 npm\uc758 \uc124\uc815 \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c npm\uacfc \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc73c\ub85c \uc124\uc815\uc744 \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\uc2dc,",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/ko/configuring",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"configuring",title:"\uc124\uc815"},sidebar:"version-7.x/docs",previous:{title:"pnpm CLI",permalink:"/ko/pnpm-cli"},next:{title:"\ud544\ud130\ub9c1",permalink:"/ko/filtering"}},u={},m=[],s={toc:m};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm\uc740 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm\uc758 \uc124\uc815")," \ud3ec\ub9f7\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c npm\uacfc \ub3d9\uc77c\ud55c \ubc29\uc2dd\uc73c\ub85c \uc124\uc815\uc744 \uc9c4\ud589\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\uc2dc,"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,p.kt)("p",null,"\uc800\uc7a5\uc18c\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4\uba74, pnpm\uc740 \ub4dc\ub77c\uc774\ube0c \ub0b4\uc5d0 \uc800\uc7a5\uc18c\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. pnpm\uc744 \uc5ec\ub7ec \ud558\ub4dc \ub4dc\ub77c\uc774\ube0c \ub610\ub294 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0\uc790 \ud55c\ub2e4\uba74 ",(0,p.kt)("a",{parentName:"p",href:"/ko/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"the FAQ"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,p.kt)("p",null,"\ub610\ud55c \uc124\uce58\ub97c \uc9c4\ud589\ud558\ub294 \uacfc\uc815\uc5d0\uc11c pnpm\uc740 npm\uacfc \ub3d9\uc77c\ud55c \uc124\uc815\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. npm\uc758 private registry\uac00 \uc124\uc815\ub418\uc5b4 \uc788\ub2e4\uba74, pnpm\uc740 \ucd94\uac00 \uc124\uc815\uc5c6\uc774 \uc774\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc774\ub7ec\ud55c \uc635\uc158 \uc678\uc5d0\ub3c4 pnpm\uc740 flag\ub85c \uc0ac\uc6a9\ub418\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"--filter")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency"),"\uc640 \uac19\uc740 \ud30c\ub77c\ubbf8\ud130\ub97c \uc635\uc158\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,p.kt)("p",null,"\ub354 \ub9ce\uc740 \uc815\ubcf4\ub294 ",(0,p.kt)("a",{parentName:"p",href:"/ko/cli/config"},(0,p.kt)("inlineCode",{parentName:"a"},"config")," command"),"\ub97c \ucc38\uace0 \ud558\uc2ed\uc2dc\uc624."))}f.isMDXComponent=!0}}]);
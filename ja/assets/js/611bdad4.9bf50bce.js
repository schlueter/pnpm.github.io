"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7758],{9613:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,c=k["".concat(m,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(c,p(p({ref:e},o),{},{components:a})):n.createElement(c,p({ref:e},o))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5417:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(665),r=a(151),l=(a(9496),a(9613)),p=["components"],i={id:"workspaces",title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"},m=void 0,d={unversionedId:"workspaces",id:"workspaces",title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9",description:"pnpm \u306b\u306f\u3001\u30e2\u30ce\u30ea\u30dd\u30b8\u30c8\u30ea\uff08\u5225\u540d\u3001\u30de\u30eb\u30c1\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30dd\u30b8\u30c8\u30ea\u3001\u307e\u305f\u306f\u30e2\u30ce\u30ea\u30b7\u30c3\u30af\u30ea\u30dd\u30b8\u30c8\u30ea\uff09\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u3066\u3001\u5358\u4e00\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u3067\u8907\u6570\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7d71\u5408\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/ja/next/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"workspaces",title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"},sidebar:"docs",previous:{title:".pnpmfile.cjs",permalink:"/ja/next/pnpmfile"},next:{title:"\u30a8\u30a4\u30ea\u30a2\u30b9",permalink:"/ja/next/aliases"}},o={},s=[{value:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb (workspace:)",id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb-workspace",level:2},{value:"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167",id:"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167",level:3},{value:"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b",id:"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b",level:3},{value:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b",id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b",level:3},{value:"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",id:"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",level:2},{value:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",level:2},{value:"\u4f7f\u7528\u4f8b",id:"\u4f7f\u7528\u4f8b",level:2}],k={toc:s};function u(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm \u306b\u306f\u3001\u30e2\u30ce\u30ea\u30dd\u30b8\u30c8\u30ea\uff08\u5225\u540d\u3001\u30de\u30eb\u30c1\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ea\u30dd\u30b8\u30c8\u30ea\u3001\u307e\u305f\u306f\u30e2\u30ce\u30ea\u30b7\u30c3\u30af\u30ea\u30dd\u30b8\u30c8\u30ea\uff09\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u3066\u3001\u5358\u4e00\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u3067\u8907\u6570\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u7d71\u5408\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30eb\u30fc\u30c8\u306b ",(0,l.kt)("a",{parentName:"p",href:"/ja/next/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 \u307e\u305f\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u306f\u30eb\u30fc\u30c8\u306b ",(0,l.kt)("a",{parentName:"p",href:"/ja/next/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc"))," \u3092\u7f6e\u304f\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are looking into monorepo management, you might also want to look into ",(0,l.kt)("a",{parentName:"p",href:"https://bit.dev/?utm_source=pnpm&utm_medium=workspace_page"},"Bit"),". Bit uses pnpm under the hood but automates a lot of the things that are currently done manually in a traditional workspace managed by pnpm/npm/Yarn. There's an article about ",(0,l.kt)("inlineCode",{parentName:"p"},"bit install")," that talks about it: ",(0,l.kt)("a",{parentName:"p",href:"https://bit.cloud/blog/painless-monorepo-dependency-management-with-bit-l4f9fzyw?utm_source=pnpm&utm_medium=workspace_page"},"Painless Monorepo Dependency Management with Bit"),"."))),(0,l.kt)("h2",{id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb-workspace"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d7\u30ed\u30c8\u30b3\u30eb (workspace:)"),(0,l.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5ba3\u8a00\u3055\u308c\u305f\u7bc4\u56f2\u3068\u4e00\u81f4\u3059\u308b\u5834\u5408\u3001 pnpm \u306f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002 \u305f\u3068\u3048\u3070\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u306f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," \u3092\u4f9d\u5b58\u3068\u3057\u3066\u5b9a\u7fa9\u3057\u3066\u3044\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30ea\u30f3\u30af\u3055\u308c\u307e\u3059\u3002 \u305f\u3060\u3057\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u304c\u4f9d\u5b58\u3068\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," \u3092\u5b9a\u7fa9\u3057\u3066\u3082\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5074\u306b\u306a\u3051\u308c\u3070\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002 \u3053\u306e\u52d5\u4f5c\u306f\u3044\u304f\u3064\u304b\u306e\u4e0d\u78ba\u5b9f\u6027\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u5e78\u3044\u3001pnpm\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001 pnpm \u306f \u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u4ee5\u5916\u306e\u3082\u306e\u306b\u89e3\u6c7a\u3055\u308c\u308b\u3053\u3068\u3092\u7981\u6b62\u3057\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),"\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u4eca\u56de\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," \u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u5b58\u5728\u3057\u306a\u3044\u305f\u3081\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306b\u5931\u6557\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"This protocol is especially useful when the ",(0,l.kt)("a",{parentName:"p",href:"/ja/next/npmrc#link-workspace-packages"},"link-workspace-packages")," option is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". \u3053\u306e\u5834\u5408\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u30d7\u30ed\u30c8\u30b3\u30eb\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u3001pnpm \u306f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167"},"\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4ecb\u3057\u305f\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53c2\u7167"),(0,l.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u3068\u3044\u3046\u540d\u524d\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u3042\u308b\u3068\u3057\u307e\u3059\u3002 \u901a\u5e38\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"')," \u3068\u3057\u3066\u53c2\u7167\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u5225\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u69cb\u6587\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,l.kt)("p",null,"\u516c\u958b\u3059\u308b\u524d\u306b\u3001\u30a8\u30a4\u30ea\u30a2\u30b9\u306f\u901a\u5e38\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3055\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002 \u4e0a\u8a18\u306e\u4f8b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"')," \u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b"},"\u76f8\u5bfe\u30d1\u30b9\u3067\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53c2\u7167\u3059\u308b"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b 2 \u3064\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3042\u308b\u3068\u3057\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," \u3092\u4f9d\u5b58\u3068\u3057\u3066 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"')," \u3068\u5ba3\u8a00\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u516c\u958b\u3059\u308b\u524d\u306b\u3001\u3053\u308c\u3089\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306f\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u901a\u5e38\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \u3084 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u306a\u3069\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066) \u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a1\u30a4\u30eb\u306b\u30d1\u30c3\u30af\u3055\u308c\u308b\u969b\u306b\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," \u30d7\u30ed\u30c8\u30b3\u30eb\u3067\u66f8\u304b\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u3092\u6b21\u306e\u3088\u3046\u306b\u5909\u63db\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u305d\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b\u3042\u308b\u5bfe\u5fdc\u3059\u308b\u30d0\u30fc\u30b8\u30e7\u30f3 (",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:^")," \u306e\u3044\u305a\u308c\u304b\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u65b9\u6cd5\u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408)"),(0,l.kt)("li",{parentName:"ul"},"\u5bfe\u5fdc\u3059\u308b semver \u306e\u7bc4\u56f2\u6307\u5b9a (\u305d\u306e\u4ed6\u306e\u7bc4\u56f2\u6307\u5b9a\u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408)")),(0,l.kt)("p",null,"\u305f\u3068\u3048\u3070\u3001 \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo")," \u3068\u3044\u3046\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3042\u308a\u3001\u5168\u3066\u30d0\u30fc\u30b8\u30e7\u30f3\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0")," \u3067\u3042\u308b\u3068\u304d\u306b\u3001\u6b21\u306e\u3088\u3046\u306a\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u3092\u3057\u305f\u3068\u3057\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30ed\u30fc\u30ab\u30eb\u306b\u3042\u308b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u4f9d\u5b58\u3059\u308b\u6307\u5b9a\u3092\u4f7f\u7528\u3057\u306a\u304c\u3089\u3001\u6700\u7d42\u7684\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u516c\u958b\u3059\u308b\u969b\u306b\u8ffd\u52a0\u306e\u5909\u63db\u30b9\u30c6\u30c3\u30d7\u3092\u631f\u3080\u5fc5\u8981\u304c\u306a\u304f\u306a\u308a\u307e\u3059\u3002\u3042\u306a\u305f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f7f\u7528\u8005\u306f\u3001\u516c\u958b\u3055\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4ed6\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u306a\u3093\u3089\u5909\u308f\u3089\u306a\u3044\u3088\u3046\u306b\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u3001semver \u306e\u6307\u5b9a\u306b\u3088\u308b\u4fdd\u8a3c\u3092\u53d7\u3051\u7d9a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"},"\u30ea\u30ea\u30fc\u30b9\u30ef\u30fc\u30af\u30d5\u30ed\u30fc"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u5185\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u306f\u8907\u96d1\u306a\u30bf\u30b9\u30af\u3067\u3042\u308a\u3001\u73fe\u6642\u70b9\u3067\u306f pnpm \u306f\u7d44\u307f\u8fbc\u307f\u306e\u89e3\u6c7a\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u305b\u3093\u3002 \u3057\u304b\u3057\u3001\u6b21\u306e 2 \u3064\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30cb\u30f3\u30b0\u3092\u6271\u3046 pnpm \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u305f\u3001\u3088\u304f\u30c6\u30b9\u30c8\u3055\u308c\u305f\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"For how to set up a repository using Rush, read ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,l.kt)("p",null,"For using Changesets with pnpm, read ",(0,l.kt)("a",{parentName:"p",href:"/ja/next/using-changesets"},"this guide"),"."),(0,l.kt)("h2",{id:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"),(0,l.kt)("p",null,"pnpm \u306f\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u4f9d\u5b58\u95a2\u4fc2\u9593\u306b\u5faa\u74b0\u304c\u3042\u308b\u5834\u5408\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u9806\u5e8f\u3067\u5b9f\u884c\u3055\u308c\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3057\u307e\u305b\u3093\u3002 pnpm \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306b\u5faa\u74b0\u3059\u308b\u4f9d\u5b58\u95a2\u4fc2\u3092\u691c\u51fa\u3059\u308b\u3068\u3001\u8b66\u544a\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u3069\u306e\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5faa\u74b0\u306e\u539f\u56e0\u3068\u306a\u3063\u3066\u3044\u308b\u304b\u308f\u304b\u308c\u3070\u3001pnpm \u306f\u305d\u308c\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies")," \u3068\u3044\u3063\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u306b\u5b9a\u7fa9\u3055\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u3092\u8abf\u67fb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u4f8b"},"\u4f7f\u7528\u4f8b"),(0,l.kt)("p",null,"Here are a few of the most popular open source projects that use the workspace feature of pnpm:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Stars"),(0,l.kt)("th",{parentName:"tr",align:null},"Migration date"),(0,l.kt)("th",{parentName:"tr",align:null},"Migration commit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nhost/nhost"},"Nhost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nhost/nhost",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-07"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10a1799a1fef2f558f737de3bb6cadda2b50e58f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuepress/vuepress-next"},"VuePress 2.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuepress/vuepress-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-04-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b85b1c3b39e80a8de92a7469381061f75ef33623"))))))}u.isMDXComponent=!0}}]);
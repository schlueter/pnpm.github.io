"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4453],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=p,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(665),p=n(151),l=(n(9496),n(9613)),a=["components"],i={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"cli/run",title:"pnpm run",description:"\u30a8\u30a4\u30ea\u30a2\u30b9: run-script",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ja/next/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"run",title:"pnpm run"},sidebar:"docs",previous:{title:"pnpm why",permalink:"/ja/next/cli/why"},next:{title:"pnpm test",permalink:"/ja/next/cli/test"}},u={},c=[{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u8a73\u7d30\u60c5\u5831",id:"\u8a73\u7d30\u60c5\u5831",level:2},{value:"<code>npm run</code> \u3068\u306e\u9055\u3044",id:"npm-run-\u3068\u306e\u9055\u3044",level:2},{value:"Options",id:"options",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,p.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30a8\u30a4\u30ea\u30a2\u30b9: ",(0,l.kt)("inlineCode",{parentName:"p"},"run-script")),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u4f8b"},"\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u306b\u6b21\u306e\u3088\u3046\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," \u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u3068\u3057\u307e\u3057\u3087\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u3092\u4f7f\u3063\u3066\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059! \u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3088\u306d\uff1f \u30ad\u30fc\u3092\u306a\u308b\u3079\u304f\u6253\u3061\u305f\u304f\u306a\u3044\u4eba\u306e\u305f\u3081\u306b\u3001\u5168\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f pnpm \u30b3\u30de\u30f3\u30c9\u306e\u30a8\u30a4\u30ea\u30a2\u30b9\u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \u306f\u305f\u3060\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \u306e\u7701\u7565\u3067\u3059(\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u540d\u524d\u304c pnpm \u30b3\u30de\u30f3\u30c9\u3068\u88ab\u3063\u3066\u3044\u306a\u3044\u9650\u308a)\u3002"),(0,l.kt)("h2",{id:"\u8a73\u7d30\u60c5\u5831"},"\u8a73\u7d30\u60c5\u5831"),(0,l.kt)("p",null,"\u30b7\u30a7\u30eb\u306e\u65e2\u5b58\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b\u52a0\u3048\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," \u306b\u5bfe\u3057\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308c\u3070\u3001\u305d\u308c\u3092\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u901a\u5e38\u306e\u30b3\u30de\u30f3\u30c9\u306e\u3088\u3046\u306b\u4f7f\u3048\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,l.kt)("p",null,"\u307e\u305f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \u304c\u30b7\u30a7\u30eb\u306b\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u304f\u3066\u3082\u3001\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5834\u5408\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," \u3082 ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," \u306b\u8ffd\u52a0\u3055\u308c\u308b\u305f\u3081\u3001\u30c4\u30fc\u30eb\u304c\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30eb\u30fc\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u4efb\u610f\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30d1\u30c3\u30b1\u30fc\u30b8\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," \u304b\u3089\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"npm-run-\u3068\u306e\u9055\u3044"},(0,l.kt)("inlineCode",{parentName:"h2"},"npm run")," \u3068\u306e\u9055\u3044"),(0,l.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001pnpm \u306f\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u30b9\u30af\u30ea\u30d7\u30c8 (",(0,l.kt)("inlineCode",{parentName:"p"},"prestart")," \u306a\u3069) \u306e\u4efb\u610f\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"pre")," \u304a\u3088\u3073 ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," \u30d5\u30c3\u30af\u3092\u5b9f\u884c\u3057\u307e\u305b\u3093\u3002 npm\u304b\u3089\u53d7\u3051\u7d99\u3044\u3060\u3053\u306e\u52d5\u4f5c\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u660e\u793a\u7684\u3067\u306f\u306a\u304f\u6697\u9ed9\u7684\u306b\u306a\u308a\u3001\u5b9f\u884c\u30d5\u30ed\u30fc\u3092\u96e3\u89e3\u306b\u3059\u308b\u539f\u56e0\u3068\u306a\u3063\u3066\u3044\u307e\u3057\u305f\u3002 \u307e\u305f\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm serve")," \u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm preserve")," \u3082\u5b9f\u884c\u3057\u3066\u3057\u307e\u3046\u3068\u3044\u3046\u9a5a\u304f\u3079\u304d\u5b9f\u884c\u7d50\u679c\u306b\u3082\u3064\u306a\u304c\u308a\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u4f55\u3089\u304b\u306e\u7406\u7531\u3067 npm \u306e pre/post \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u52d5\u4f5c\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"run"),"\u30b3\u30de\u30f3\u30c9\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u540d\u306e\u524d\u306b\u8a18\u8f09\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u30b9\u30af\u30ea\u30d7\u30c8\u540d\u306e\u5f8c\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u5b9f\u884c\u3055\u308c\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u6e21\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3044\u305a\u308c\u3082pnpm CLI\u3092",(0,l.kt)("inlineCode",{parentName:"p"},"--silent"),"\u30aa\u30d7\u30b7\u30e7\u30f3\u4ed8\u304d\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,l.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u540d\u306e\u5f8c\u306b\u5f15\u6570\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u5b9f\u884c\u3055\u308c\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002 \u3064\u307e\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"watch"),"\u304c",(0,l.kt)("inlineCode",{parentName:"p"},"webpack --watch"),"\u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,l.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b\u5b9f\u884c\u3055\u308c\u307e\u3059\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,l.kt)("h3",{id:"script-shell"},"script-shell"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"path"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," \u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u4f7f\u7528\u3059\u308b\u30b7\u30a7\u30eb\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u3001Windows\u3067Git Bash\u3092\u5f37\u5236\u7684\u306b\u4f7f\u7528\u3059\u308b\u5834\u5408:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,l.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001pnpm \u306f\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u306b JavaScript \u306e ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell"),"\u306e\u5b9f\u88c5\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u51e6\u7406\u3092\u7c21\u5358\u306b\u3057\u307e\u3059\u3002 \u4f8b\u3048\u3070\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u6b21\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306fPOSIX\u306b\u6e96\u62e0\u3057\u3066\u3044\u306a\u3044\u30b7\u30b9\u30c6\u30e0\u3067\u5931\u6557\u3057\u307e\u3059:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001 ",(0,l.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \u306e\u8a2d\u5b9a\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306b\u3059\u308c\u3070\u3001\u3059\u3079\u3066\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,'\u3053\u308c\u306f\u3001\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u306e "scripts" \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304b\u3089\u4efb\u610f\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3082\u306e\u3067\u3059\u3002 \u305d\u306e\u30b3\u30de\u30f3\u30c9\u304c\u306a\u3044\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30b9\u30ad\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002 \u3069\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3082\u305d\u306e\u30b3\u30de\u30f3\u30c9\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30b3\u30de\u30f3\u30c9\u306f\u5931\u6557\u3057\u307e\u3059\u3002'),(0,l.kt)("h3",{id:"--if-present"},"--if-present"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"if-present")," \u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u672a\u5b9a\u7fa9\u306e\u3068\u304d\u306b0\u4ee5\u5916\u306e\u7d42\u4e86\u30b3\u30fc\u30c9\u3067\u7d42\u4e86\u3059\u308b\u306e\u3092\u907f\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u672a\u5b9a\u7fa9\u306e\u53ef\u80fd\u6027\u304c\u3042\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u3001\u5b9f\u884c\u306e\u904e\u7a0b\u3092\u65ad\u3061\u5207\u308b\u3053\u3068\u306a\u304f\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"\u4e26\u884c\u6027\u3068\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u30bd\u30fc\u30c8\u306e\u7d50\u679c\u3092\u5b8c\u5168\u306b\u7121\u8996\u3057\u3066\u3001\u30de\u30c3\u30c1\u3059\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3057\u3066\u6307\u5b9a\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5373\u6642\u5b9f\u884c\u3057\u3001\u63a5\u982d\u8f9e\u4ed8\u304d\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u3067\u51fa\u529b\u3057\u307e\u3059\u3002 \u3053\u306e\u30d5\u30e9\u30b0\u306f\u3001\u591a\u304f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u9577\u6642\u9593\u5b9f\u884c\u3055\u308c\u308b\u51e6\u7406\u3001\u4f8b\u3048\u3070\u3001\u9577\u6642\u9593\u306e\u30d3\u30eb\u30c9\u51e6\u7406\u306b\u9069\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--stream"},"--stream"),(0,l.kt)("p",null,"\u5b50\u30d7\u30ed\u30bb\u30b9\u304b\u3089\u306e\u51fa\u529b\u3092\u3001\u5143\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u5148\u982d\u306b\u3001\u5373\u5ea7\u306b\u30b9\u30c8\u30ea\u30fc\u30e0\u51fa\u529b\u3057\u307e\u3059\u3002 \u3053\u308c\u306b\u3088\u308a\u3001\u7570\u306a\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u304b\u3089\u306e\u51fa\u529b\u3092\u30a4\u30f3\u30bf\u30fc\u30ea\u30fc\u30d6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,l.kt)("p",null,"\u4e26\u884c\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u5b50\u30d7\u30ed\u30bb\u30b9\u306e\u51fa\u529b\u3092\u96c6\u7d04\u3057\u3001\u5b50\u30d7\u30ed\u30bb\u30b9\u304c\u7d42\u4e86\u3057\u305f\u3068\u304d\u306e\u307f\u51fa\u529b\u3092\u8868\u793a\u3057\u307e\u3059\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," \u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"--parallel")," \u307e\u305f\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," \u3068\u5171\u306b\u5b9f\u884c\u3057\u305f\u5f8c\u306e\u5927\u304d\u306a\u30ed\u30b0\u3092\u8aad\u3080\u306e\u304c\u975e\u5e38\u306b\u7c21\u5358\u306b\u306a\u308a\u307e\u3059 (\u7279\u306b CI \u306e\u5834\u5408)\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \u306e\u307f\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001pnpm \u306f\u4efb\u610f\u306e pre/post \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u81ea\u52d5\u7684\u306b\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3064\u307e\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm foo")," \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo")," \u3092\u5b9f\u884c\u3059\u308b\u306e\u3068\u540c\u3058\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}k.isMDXComponent=!0}}]);
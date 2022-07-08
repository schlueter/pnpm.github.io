"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4796],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),k=p,u=m["".concat(o,".").concat(k)]||m[k]||c[k]||i;return t?a.createElement(u,r(r({ref:n},d),{},{components:t})):a.createElement(u,r({ref:n},d))}));function k(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(665),p=t(151),i=(t(9496),t(9613)),r=["components"],l={id:"package_json",title:"package.json"},o=void 0,s={unversionedId:"package_json",id:"package_json",title:"package.json",description:"\u4e00\u4e2a\u5305\u7684\u6e05\u5355\u6587\u4ef6\u3002 \u5b83\u5305\u542b\u5305\u7684\u6240\u6709\u5143\u6570\u636e\uff0c\u5305\u62ec\u4f9d\u8d56\u9879\u3001\u6807\u9898\u3001\u4f5c\u8005\u7b49\u7b49\u3002 \u8fd9\u662f\u6240\u6709\u4e3b\u8981\u7684 Node.JS \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u5305\u62ec pnpm \u7684\u4fdd\u7559\u6807\u51c6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/zh/next/package_json",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"package_json",title:"package.json"},sidebar:"docs",previous:{title:"pnpm deploy",permalink:"/zh/next/cli/deploy"},next:{title:".npmrc",permalink:"/zh/next/npmrc"}},d={},c=[{value:"engines",id:"engines",level:2},{value:"dependenciesMeta",id:"dependenciesmeta",level:2},{value:"dependenciesMeta.*.injected",id:"dependenciesmetainjected",level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",level:2},{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",level:3},{value:"publishConfig",id:"publishconfig",level:2},{value:"publishConfig.executableFiles",id:"publishconfigexecutablefiles",level:3},{value:"publishConfig.directory",id:"publishconfigdirectory",level:3},{value:"pnpm.overrides",id:"pnpmoverrides",level:2},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",level:2},{value:"pnpm.peerDependencyRules",id:"pnpmpeerdependencyrules",level:2},{value:"pnpm.peerDependencyRules.ignoreMissing",id:"pnpmpeerdependencyrulesignoremissing",level:3},{value:"pnpm.peerDependencyRules.allowedVersions",id:"pnpmpeerdependencyrulesallowedversions",level:3},{value:"pnpm.peerDependencyRules.allowAny",id:"pnpmpeerdependencyrulesallowany",level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",level:2},{value:"pnpm.onlyBuiltDependencies",id:"pnpmonlybuiltdependencies",level:2},{value:"pnpm.allowedDeprecatedVersions",id:"pnpmalloweddeprecatedversions",level:2},{value:"pnpm.patchedDependencies",id:"pnpmpatcheddependencies",level:2}],m={toc:c};function k(e){var n=e.components,t=(0,p.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e00\u4e2a\u5305\u7684\u6e05\u5355\u6587\u4ef6\u3002 \u5b83\u5305\u542b\u5305\u7684\u6240\u6709\u5143\u6570\u636e\uff0c\u5305\u62ec\u4f9d\u8d56\u9879\u3001\u6807\u9898\u3001\u4f5c\u8005\u7b49\u7b49\u3002 \u8fd9\u662f\u6240\u6709\u4e3b\u8981\u7684 Node.JS \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u5305\u62ec pnpm \u7684\u4fdd\u7559\u6807\u51c6\u3002"),(0,i.kt)("h2",{id:"engines"},"engines"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6307\u5b9a\u4f60\u7684\u8f6f\u4ef6\u80fd\u591f\u8fd0\u884c\u7684 Node \u7248\u672c\u548c pnpm \u7248\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,i.kt)("p",null,"\u5728\u672c\u5730\u5f00\u53d1\u65f6\uff0c \u5982\u679c\u5176\u7248\u672c\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"engines")," \u5b57\u6bb5\u4e2d\u6307\u5b9a\u7684\u7248\u672c\u4e0d\u5339\u914d\uff0cpnpm \u5c06\u59cb\u7ec8\u5931\u8d25\u5e76\u62a5\u9519\u3002"),(0,i.kt)("p",null,"\u5f53\u4f60\u7684\u5305\u4f5c\u4e3a\u4f9d\u8d56\u88ab\u5b89\u88c5\u65f6\uff0c\u9664\u975e\u7528\u6237\u5df2\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"engine-strict")," \u914d\u7f6e\u6807\u5fd7 (\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/zh/next/npmrc#engine-strict"},".npmrc"),")\uff0c\u5426\u5219\u6b64\u5b57\u6bb5\u4ec5\u4f9b\u53c2\u8003\uff0c\u4e14\u53ea\u4f1a\u4ea7\u751f\u8b66\u544a\u3002"),(0,i.kt)("h2",{id:"dependenciesmeta"},"dependenciesMeta"),(0,i.kt)("h3",{id:"dependenciesmetainjected"},"dependenciesMeta.*.injected"),(0,i.kt)("p",null,"\u5982\u679c\u5bf9\u672c\u5730\u4f9d\u8d56\u9879\u5c06\u6b64\u8bbe\u7f6e\u4e3a true\uff0c\u5219",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u5c06\u88ab\u786c\u94fe\u63a5\u5230\u6a21\u5757\u76ee\u5f55\uff0c\u800c\u975e\u8f6f\u94fe\u63a5\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4f1a\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"card"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," \u7684\u8f6f\u94fe\u63a5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"\u4f46\u662f\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," \u5728\u5176",(0,i.kt)("inlineCode",{parentName:"p"},"peer dependencies"),"\u4e2d\u542b\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"react "),"\u5462\uff1f \u5982\u679c monorepo \u4e2d\u7684\u6240\u6709\u9879\u76ee\u90fd\u4f7f\u7528\u76f8\u540c\u7248\u672c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"react"),"\uff0c\u90a3\u4e48\u4e0d\u4f1a\u6709\u4ec0\u4e48\u95ee\u9898\u3002 \u4f46\u8981\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"card "),"\u4f9d\u8d56\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"react@16"),"\uff0c\u800c\u4f9d\u8d56\u7684",(0,i.kt)("inlineCode",{parentName:"p"}," form")," \u5374\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"react@17")," \u5462\uff1f \u5982\u679c\u4e0d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"injection"),"\uff0c\u60a8\u5fc5\u987b\u9009\u62e9\u5355\u4e00\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," \u7248\u672c\u5e76\u5c06\u5176\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"button"),"\u7684 dev dependency \u5b89\u88c5\u3002 \u4f46\u662f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"injected")," \u5b57\u6bb5\uff0c\u60a8\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," \u6ce8\u5165\u5230\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u4e2d\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," \u5c06\u4e0e\u8be5",(0,i.kt)("inlineCode",{parentName:"p"},"package")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"react"),"\u7248\u672c\u4e00\u540c\u5b89\u88c5\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u8fd9\u5c06\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"card "),"\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "16"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"button"),"\u5c06\u88ab\u786c\u94fe\u63a5\u8fdb ",(0,i.kt)("inlineCode",{parentName:"p"},"card"),"\u7684\u4f9d\u8d56\u9879\u4e2d\uff0c\u540c\u65f6",(0,i.kt)("inlineCode",{parentName:"p"},"react@16")," \u4f1a\u88ab\u8f6f\u94fe\u63a5\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"card/node_modules/button"),"\u7684\u4f9d\u8d56\u9879\u3002"),(0,i.kt)("p",null,"\u800c\u4e14\uff0c\u8fd9\u5c06\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"form "),"\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "form",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "17"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"button"),"\u5c06\u88ab\u786c\u94fe\u63a5\u8fdb ",(0,i.kt)("inlineCode",{parentName:"p"},"form"),"\u7684\u4f9d\u8d56\u9879\u4e2d\uff0c\u540c\u65f6",(0,i.kt)("inlineCode",{parentName:"p"},"react@17")," \u4f1a\u88ab\u8f6f\u94fe\u63a5\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"form/node_modules/button"),"\u7684\u4f9d\u8d56\u9879\u3002"),(0,i.kt)("h2",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,i.kt)("p",null,"\u6b64\u5b57\u6bb5\u5217\u51fa\u4e86\u4e00\u4e9b\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u5b57\u6bb5\u4e2d\u5217\u51fa\u7684\u4f9d\u8d56\u5173\u7cfb\u76f8\u5173\u7684\u989d\u5916\u4fe1\u606f\u3002"),(0,i.kt)("h3",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,i.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u6240\u9009\u5bf9 peer dependency \u5c06\u88ab\u5305\u7ba1\u7406\u5de5\u5177\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u3002 \u56e0\u6b64\uff0c\u7701\u7565\u5b83\u5c06\u4e0d\u518d\u4f1a\u88ab\u62a5\u544a\u4e3a\u9519\u8bef\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5373\u4f7f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"\u4e2d\u6ca1\u6709\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),", \u4f46\u5b83\u4e5f\u4f1a\u88ab\u6807\u8bb0\u4e3a\u53ef\u9009\u7684\u3002 \u56e0\u6b64\uff0cpnpm \u5c06\u5047\u5b9a\u4efb\u4f55\u7248\u672c\u7684 bar \u90fd\u662f\u88ab\u5141\u8bb8\u7684\u3002 \u7136\u800c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u662f\u53ef\u9009\u7684\uff0c\u4f46\u4ec5\u9002\u7528\u4e8e\u6240\u6307\u5b9a\u7684\u7248\u672c\u3002"),(0,i.kt)("h2",{id:"publishconfig"},"publishConfig"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u6253\u5305\u4e4b\u524d\uff0c\u53ef\u4ee5\u8986\u76d6 manifest \u4e2d\u7684\u67d0\u4e9b\u5b57\u6bb5\u3002 \u4ee5\u4e0b\u5b57\u6bb5\u53ef\u4ee5\u88ab\u8986\u76d6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#bin"},(0,i.kt)("inlineCode",{parentName:"a"},"bin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#main"},(0,i.kt)("inlineCode",{parentName:"a"},"main"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,i.kt)("inlineCode",{parentName:"a"},"exports"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#types"},(0,i.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,i.kt)("inlineCode",{parentName:"a"},"typings"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#module"},(0,i.kt)("inlineCode",{parentName:"a"},"module"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#browser"},(0,i.kt)("inlineCode",{parentName:"a"},"browser"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#esnext"},(0,i.kt)("inlineCode",{parentName:"a"},"esnext"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#es2015"},(0,i.kt)("inlineCode",{parentName:"a"},"es2015"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,i.kt)("inlineCode",{parentName:"a"},"unpkg"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#microbundle"},(0,i.kt)("inlineCode",{parentName:"a"},"umd:main"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions"},(0,i.kt)("inlineCode",{parentName:"a"},"typesVersions"))),(0,i.kt)("li",{parentName:"ul"},"cpu"),(0,i.kt)("li",{parentName:"ul"},"os")),(0,i.kt)("p",null,"\u8981\u8986\u76d6\u5b57\u6bb5\uff0c\u8bf7\u5c06\u5b57\u6bb5\u7684\u8981\u53d1\u5e03\u7684\u7248\u672c\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig"),"\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,i.kt)("p",null,"\u5c06\u53d1\u5e03\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,i.kt)("h3",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u53ef\u79fb\u690d\u6027\u7684\u539f\u56e0\uff0c\u9664\u4e86\u5728 bin \u5b57\u6bb5\u4e2d\u5217\u51fa\u7684\u6587\u4ef6\u4ee5\u5916\uff0c\u5728\u751f\u6210\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684 archive \u5305\u4e2d\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u6807\u8bb0\u4e3a\u53ef\u6267\u884c\u6587\u4ef6\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"executableFiles")," \u5b57\u6bb5\u5141\u8bb8\u60a8\u58f0\u660e\u5fc5\u987b\u8bbe\u7f6e\u53ef\u6267\u884c\u6807\u5fd7 (+x) \u7684\u989d\u5916\u7684\u5b57\u6bb5\uff0c\u5373\u4f7f\u5b83\u4eec\u4e0d\u80fd\u901a\u8fc7 bin \u5b57\u6bb5\u76f4\u63a5\u8bbf\u95ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js"\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,i.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b57\u6bb5 ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," \u6765\u81ea\u5b9a\u4e49\u76f8\u5bf9\u5f53\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json "),"\u7684\u5df2\u53d1\u5e03\u5b50\u76ee\u5f55\u3002"),(0,i.kt)("p",null,"\u9884\u671f\u4f1a\u5728\u6307\u5b9a\u76ee\u5f55\u4e2d\u6709\u5f53\u524d",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u4fee\u6539\u540e\u7684\u7248\u672c\uff08\u901a\u5e38\u4f7f\u7528\u7b2c\u4e09\u65b9\u6784\u5efa\u5de5\u5177\uff09\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},'"dist"')," \u6587\u4ef6\u5939\u5fc5\u987b\u5305\u542b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmoverrides"},"pnpm.overrides"),(0,i.kt)("p",null,"\u6b64\u5b57\u6bb5\u5141\u8bb8\u60a8\u6307\u793a pnpm \u8986\u76d6\u4f9d\u8d56\u5173\u7cfb\u56fe\u4e2d\u7684\u4efb\u4f55\u4f9d\u8d56\u9879\u3002 \u8fd9\u5bf9\u4e8e\u60a8\u5f3a\u5236\u6240\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"packages"),"\u4f7f\u7528\u5355\u4e2a\u7248\u672c\u7684\u4f9d\u8d56\u9879\uff0c\u6216\u505a\u540e\u79fb\u690d\u7684\u4fee\u590d\uff0c\u6216\u7528\u4e00\u4e2a fork \u6765\u66ff\u6362\u4f9d\u8d56\u9879\u65f6\u5c06\u5341\u5206\u6709\u7528\u3002"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0coverrides \u5b57\u6bb5\u53ea\u80fd\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," \u5b57\u6bb5\u7684\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "quux": "npm:@myorg/quux@^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6307\u5b9a\u8986\u5199\u4f9d\u8d56\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"package"),'\uff0c\u901a\u8fc7\u7528">"\u6765\u4ece\u4f9d\u8d56\u7684\u9009\u62e9\u5668\u5206\u79bb\u51fa',(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u9009\u62e9\u5668\u3002\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," \u5c06\u53ea\u4f1a\u91cd\u5199",(0,i.kt)("inlineCode",{parentName:"p"},"zoo"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"qar@1"),"\u4f9d\u8d56\u3002"),(0,i.kt)("h2",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,i.kt)("p",null,"\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtension")," \u5b57\u6bb5\u63d0\u4f9b\u4e86\u4e00\u79cd\u7528\u989d\u5916\u4fe1\u606f\u6269\u5c55\u73b0\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u5b9a\u4e49\u7684\u65b9\u6cd5\u3002 \u4f8b\u5982\uff0c\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"react-redux")," \u672c\u5e94\u8be5\u5728\u5b83\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u4e2d\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom "),"\uff0c\u4f46\u5374\u6ca1\u6709\uff0c\u5219\u53ef\u4ee5\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions "),"\u6765\u586b\u8865\u4e0a",(0,i.kt)("inlineCode",{parentName:"p"},"react-redux"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions")," \u4e2d\u7684\u952e\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u540d\u79f0\u6216 semver \u7684",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u540d\u79f0\uff0c\u56e0\u6b64\u53ef\u4ee5\u53ea\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"package"),"\u7684\u67d0\u4e9b\u7248\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5b57\u6bb5\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions "),"\u88ab\u6269\u5c55\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"\u3002"),(0,i.kt)("p",null,"\u4e00\u4e2a\u66f4\u5927\u7684\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u4e0e Yarn \u4e00\u8d77\u7ef4\u62a4\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions")," \u7684\u6570\u636e\u5e93\uff0c\u4ee5\u4fbf\u4fee\u8865\u5728\u751f\u6001\u7cfb\u7edf\u4e2d\u635f\u574f\u7684\u5305\u3002 \u5982\u679c\u60a8\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"packageExtensions"),"\uff0c\u8bf7\u8003\u8651\u5411\u4e0a\u6e38\u53d1\u9001\u62c9\u53d6\u8bf7\u6c42 (Pull Request) \u5e76\u5c06\u60a8\u7684\u6269\u5c55\u8d21\u732e\u7ed9 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-extensions/sources/index.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"@yarnpkg/extensions"))," \u6570\u636e\u5e93\u3002"))),(0,i.kt)("h2",{id:"pnpmpeerdependencyrules"},"pnpm.peerDependencyRules"),(0,i.kt)("h3",{id:"pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing"),(0,i.kt)("p",null,"pnpm \u4e0d\u4f1a\u6253\u5370\u6709\u5173\u4f9d\u8d56\u5217\u8868\u4e2d\u7f3a\u5c11\u5bf9 peerDependency \u7684\u8b66\u544a\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff0c\u5982\u679c\u4f9d\u8d56\u9879\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," \u4f46\u672a\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"react"),"\uff0cpnpm \u4e0d\u4f1a\u6253\u5370\u76f8\u5e94\u8b66\u544a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["react"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Package name patterns may also be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["@babel/*", "@eslint/*"]\n    }\n  }\n}\n')),(0,i.kt)("h3",{id:"pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6307\u5b9a\u7248\u672c\u8303\u56f4\u7684 peerDependency\uff0c\u5c06\u4e0d\u4f1a\u6253\u5370\u672a\u6ee1\u8db3\u7248\u672c\u8303\u56f4\u7684\u8b66\u544a\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6709\u4e00\u4e9b\u4f9d\u8d56\u9879\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"react@16")," \u4f46\u60a8\u77e5\u9053\u5b83\u4eec\u53ef\u4ee5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"react@17")," \u4e00\u540c\u6b63\u5e38\u5de5\u4f5c\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowedVersions": {\n        "react": "17"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"\u8fd9\u5c06\u544a\u8bc9 pnpm \u4efb\u4f55\u5728\u5176 peerDependency \u4e2d\u542b\u6709 react \u7684\u4f9d\u8d56\u9879\u90fd\u5e94\u8be5\u5141\u8bb8\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," v17\u3002"),(0,i.kt)("h3",{id:"pnpmpeerdependencyrulesallowany"},"pnpm.peerDependencyRules.allowAny"),(0,i.kt)("p",null,"Added in: v7.3.0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"allowAny")," is an array of package name patterns, any peer dependency matching the pattern will be resolved from any version, regardless of the range specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),". \u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowAny": ["@babel/*", "eslint"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The above setting will mute any warnings about peer dependency version mismatches related to ",(0,i.kt)("inlineCode",{parentName:"p"},"@babel/")," packages or ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint"),"."),(0,i.kt)("h2",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,i.kt)("p",null,"\u8be5\u5b57\u6bb5\u5141\u8bb8\u5ffd\u7565\u7279\u5b9a\u4f9d\u8d56\u9879\u7684\u6784\u5efa\u3002 \u5b89\u88c5\u671f\u95f4\u4e0d\u4f1a\u6267\u884c\u6240\u5217\u5305\u7684 \u201cpreinstall\u201d\u3001\u201cinstall\u201d \u548c \u201cpostinstall\u201d \u811a\u672c\u3002"),(0,i.kt)("p",null,"\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," \u5b57\u6bb5\u7684\u4e00\u4e2a\u4f8b\u5b50:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmonlybuiltdependencies"},"pnpm.onlyBuiltDependencies"),(0,i.kt)("p",null,"\u5141\u8bb8\u5728\u5b89\u88c5\u671f\u95f4\u6267\u884c\u5b89\u88c5\u7684\u5305\u540d\u5217\u8868\u3002 \u5982\u679c\u6b64\u5b57\u6bb5\u5b58\u5728\uff0c\u90a3\u4e48\u53ea\u6709\u5217\u51fa\u7684\u8f6f\u4ef6\u5305\u53ef\u4ee5\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "onlyBuiltDependencies": ["fsevents"]\n  }\n}\n')),(0,i.kt)("h2",{id:"pnpmalloweddeprecatedversions"},"pnpm.allowedDeprecatedVersions"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av7.2.0"),(0,i.kt)("p",null,"This setting allows muting deprecation warnings of specific packages."),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "allowedDeprecatedVersions": {\n      "express": "1",\n      "request": "*"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"With the above configuration pnpm will not print deprecation warnings about any version of ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and about v1 of ",(0,i.kt)("inlineCode",{parentName:"p"},"express"),"."),(0,i.kt)("h2",{id:"pnpmpatcheddependencies"},"pnpm.patchedDependencies"),(0,i.kt)("p",null,"Added in: v7.4.0"),(0,i.kt)("p",null,"This field is added/updated automatically when you run ",(0,i.kt)("a",{parentName:"p",href:"/zh/next/cli/patch-commit"},"pnpm patch-commit"),". It is a dictionary where the key should be the package name and exact version. The value should be a relative path to a patch file."),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "express@4.18.1": "patches/express@4.18.1.patch"\n  }\n}\n')))}k.isMDXComponent=!0}}]);
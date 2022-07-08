"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1683],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),k=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=k(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=k(n),u=a,c=d["".concat(o,".").concat(u)]||d[u]||s[u]||r;return n?l.createElement(c,i(i({ref:t},m),{},{components:n})):l.createElement(c,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var k=2;k<r;k++)i[k]=n[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>k,toc:()=>s});var l=n(665),a=n(151),r=(n(9496),n(9613)),i=["components"],p={id:"install",title:"pnpm install"},o=void 0,k={unversionedId:"cli/install",id:"version-6.x/cli/install",title:"pnpm install",description:"\u522b\u540d: i",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/install.md",sourceDirName:"cli",slug:"/cli/install",permalink:"/zh/6.x/cli/install",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"install",title:"pnpm install"},sidebar:"version-6.x/docs",previous:{title:"pnpm add <pkg>",permalink:"/zh/6.x/cli/add"},next:{title:"pnpm update",permalink:"/zh/6.x/cli/update"}},m={},s=[{value:"\u6458\u8981\uff1a",id:"\u6458\u8981",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"--offline",id:"--offline",level:3},{value:"--prefer-offline",id:"--prefer-offline",level:3},{value:"--ignore-scripts",id:"--ignore-scripts",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--lockfile-only",id:"--lockfile-only",level:3},{value:"--fix-lockfile",id:"--fix-lockfile",level:3},{value:"--frozen-lockfile",id:"--frozen-lockfile",level:3},{value:"--reporter=&lt;name&gt;",id:"--reportername",level:3},{value:"--use-store-server",id:"--use-store-server",level:3},{value:"--shamefully-hoist",id:"--shamefully-hoist",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:s};function u(e){var t=e.components,p=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u522b\u540d: ",(0,r.kt)("inlineCode",{parentName:"p"},"i")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u7528\u4e8e\u5b89\u88c5\u9879\u76ee\u6240\u6709\u4f9d\u8d56."),(0,r.kt)("p",null,"\u5728CI\u73af\u5883\u4e2d, \u5982\u679c\u5b58\u5728\u9700\u8981\u66f4\u65b0\u7684 lockfile \u4f1a\u5b89\u88c5\u5931\u8d25."),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh/6.x/workspaces"},"workspace"),"\u5185, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u4e0b\u8f7d\u9879\u76ee\u6240\u6709\u4f9d\u8d56. \u5982\u679c\u60f3\u7981\u7528\u8fd9\u4e2a\u884c\u4e3a, \u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"recursive-install")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9597).Z,width:"940",height:"472"})),(0,r.kt)("h2",{id:"\u6458\u8981"},"\u6458\u8981\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --offline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ec5\u4ece store \u4e2d\u79bb\u7ebf\u4e0b\u8f7d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --frozen-lockfile")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm i --lockfile-only")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ec5\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"pnpm-lock.yaml"))))),(0,r.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.kt)("h3",{id:"--offline"},"--offline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u5982\u679c\u4e3a true\uff0c\u5219 pnpm \u5c06\u4ec5\u4f7f\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),"\u4e2d\u5df2\u6709\u7684\u5305\u3002 \u5982\u679c\u672c\u5730\u627e\u4e0d\u5230\u5305, \u5219\u4f1a\u5b89\u88c5\u5931\u8d25."),(0,r.kt)("h3",{id:"--prefer-offline"},"--prefer-offline"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e8e: v1.28.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u5982\u679c\u4e3a true\uff0c\u7f3a\u5931\u7684\u6570\u636e\u5c06\u4f1a\u4ece\u670d\u52a1\u5668\u83b7\u53d6\uff0c\u5e76\u7ed5\u8fc7\u7f13\u5b58\u6570\u636e\u7684\u8fc7\u671f\u68c0\u67e5\u3002 \u60f3\u5f3a\u5236\u4f7f\u7528\u79bb\u7ebf\u6a21\u5f0f, \u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline"),"."),(0,r.kt)("h3",{id:"--ignore-scripts"},"--ignore-scripts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u4e0d\u6267\u884c\u4efb\u4f55\u9879\u76ee\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u548c\u5b83\u7684\u4f9d\u8d56\u9879\u4e2d\u5b9a\u4e49\u7684\u4efb\u4f55\u811a\u672c."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be5\u6807\u8bb0\u4e0d\u4f1a\u963b\u6b62\u6267\u884c",(0,r.kt)("a",{parentName:"p",href:"/zh/6.x/pnpmfile"},".pnpmfile.cjs")))),(0,r.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\u73af\u5883\u53d8\u91cf\u88ab\u8bbe\u7f6e\u4e3a production \u5219 pnpm \u4e0d\u4f1a\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u7684\u4efb\u4f55\u5305. \u4f7f\u7528\u8fd9\u4e2a\u6307\u4ee4 pnpm \u4f1a\u5ffd\u7565",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u5e76\u7528\u8be5\u6307\u4ee4\u66ff\u4ee3\u5176\u751f\u4ea7\u72b6\u6001."),(0,r.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,r.kt)("p",null,"\u4e0d\u7ba1 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u7684\u503c, \u53ea\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4f9d\u8d56."),(0,r.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,r.kt)("p",null,"\u4e0d\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4f9d\u8d56"),(0,r.kt)("h3",{id:"--lockfile-only"},"--lockfile-only"),(0,r.kt)("p",null,"Added in: v1.26.0 (\u539f\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"shrinkwrap-only"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u4f7f\u7528\u65f6\uff0c\u53ea\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u3002 \u4e0d\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\u3002"),(0,r.kt)("h3",{id:"--fix-lockfile"},"--fix-lockfile"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.15.0"),(0,r.kt)("p",null,"\u81ea\u52a8\u4fee\u590d\u635f\u574f\u7684 lock \u6587\u4ef6\u5165\u53e3\u3002"),(0,r.kt)("h3",{id:"--frozen-lockfile"},"--frozen-lockfile"),(0,r.kt)("p",null,"Added in: v1.37.1 (\u539f\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"frozen-shrinkwrap"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u975e CI: ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"CI: ",(0,r.kt)("strong",{parentName:"li"},"true"),", \u5982\u679c\u5b58\u5728 lock \u6587\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", pnpm \u4e0d\u4f1a\u751f\u6210 lockfile \u4e14\u5982\u679c lockfile \u8ddf manifest \u4e0d\u540c\u6b65/ \u6587\u4ef6\u9700\u8981\u66f4\u65b0\u6216\u4e0d\u5b58\u5728 lockfile \u5219\u4f1a\u5b89\u88c5\u5931\u8d25."),(0,r.kt)("h3",{id:"--reportername"},"--reporter=","<","name",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"default")),(0,r.kt)("li",{parentName:"ul"},"\u975e TTY stdout: ",(0,r.kt)("strong",{parentName:"li"},"append-only")))),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"default"),", ",(0,r.kt)("strong",{parentName:"li"},"append-only"),", ",(0,r.kt)("strong",{parentName:"li"},"ndjson"),", ",(0,r.kt)("strong",{parentName:"li"},"silent"))),(0,r.kt)("p",null,"\u5141\u8bb8\u60a8\u9009\u62e9\u5c06\u8c03\u8bd5\u4fe1\u606f\u8bb0\u5f55\u5230\u7ec8\u7aef, \u4ee5\u4e86\u89e3\u5b89\u88c5\u8fdb\u5ea6."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"silent")," - \u9664\u4e86\u81f4\u547d errors \u5426\u5219\u4e0d\u8f93\u51fa\u8bb0\u5f55\u4fe1\u606f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"default")," - \u6807\u51c6\u4e3a TTY \u7684\u9ed8\u8ba4\u8f93\u51fa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"append-only")," (\u6dfb\u52a0\u4e8e v1.29.1) - \u59cb\u7ec8\u672b\u5c3e\u8ffd\u52a0\u8f93\u51fa. \u6ca1\u6709\u5149\u6807\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ndjson")," - \u6700\u8be6\u7ec6\u62a5\u544a. \u6253\u5370\u6240\u6709",(0,r.kt)("a",{parentName:"li",href:"http://ndjson.org/"},"ndjson")," \u683c\u5f0f\u65e5\u5fd7")),(0,r.kt)("h3",{id:"--use-store-server"},"--use-store-server"),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e8e: v1.30.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u540e\u53f0\u5f00\u542f store server. \u5b89\u88c5\u5b8c\u6210\u540e, store server \u4f1a\u6301\u7eed\u8fd0\u884c. \u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"\u6765\u505c\u6b62 store server."),(0,r.kt)("h3",{id:"--shamefully-hoist"},"--shamefully-hoist"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,r.kt)("strong",{parentName:"li"},"Boolean"))),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u6241\u5e73",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\u7ed3\u6784, \u7c7b\u4f3c\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),". ",(0,r.kt)("strong",{parentName:"p"},"WARNING"),": \u8fd9\u662f\u975e\u5e38\u4e0d\u63a8\u8350\u7684."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/6.x/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}u.isMDXComponent=!0},9597:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/pnpm-install-922fbb8bb4d96b8f602a40e6cd07ee13.svg"}}]);
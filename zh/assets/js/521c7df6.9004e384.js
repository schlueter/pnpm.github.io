"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9043],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),s=o,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3605:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(2245),o=n(5903),l=(n(9496),n(9613)),i=["components"],a={id:"motivation",title:"\u9879\u76ee\u521d\u8877"},p=void 0,c={unversionedId:"motivation",id:"motivation",isDocsHomePage:!1,title:"\u9879\u76ee\u521d\u8877",description:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/zh/next/motivation",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"motivation",title:"\u9879\u76ee\u521d\u8877"},sidebar:"docs",next:{title:"\u5b89\u88c5",permalink:"/zh/next/installation"}},u=[{value:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6",id:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6",children:[],level:2},{value:"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684 node_modules \u6587\u4ef6\u5939",id:"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684-node_modules-\u6587\u4ef6\u5939",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6"},"\u8282\u7ea6\u78c1\u76d8\u7a7a\u95f4\u5e76\u63d0\u5347\u5b89\u88c5\u901f\u5ea6"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528 npm \u6216 Yarn \u65f6\uff0c\u5982\u679c\u4f60\u6709100\u4e2a\u9879\u76ee\u4f7f\u7528\u4e86\u67d0\u4e2a\u4f9d\u8d56\uff08dependency\uff09\uff0c\u5c31\u4f1a\u6709100\u4efd\u8be5\u4f9d\u8d56\u7684\u526f\u672c\u4fdd\u5b58\u5728\u786c\u76d8\u4e0a\u3002 \xa0\u800c\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u4f9d\u8d56\u4f1a\u88ab\u5b58\u50a8\u5728\u5185\u5bb9\u53ef\u5bfb\u5740\u7684\u5b58\u50a8\u4e2d\uff0c\u6240\u4ee5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7528\u5230\u4e86\u67d0\u4f9d\u8d56\u9879\u7684\u4e0d\u540c\u7248\u672c\uff0c\u53ea\u4f1a\u5c06\u4e0d\u540c\u7248\u672c\u95f4\u6709\u5dee\u5f02\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u4ed3\u5e93\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u67d0\u4e2a\u5305\u6709100\u4e2a\u6587\u4ef6\uff0c\u800c\u5b83\u7684\u65b0\u7248\u672c\u53ea\u6539\u53d8\u4e86\u5176\u4e2d1\u4e2a\u6587\u4ef6\u3002\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm update")," \u65f6\u53ea\u4f1a\u5411\u5b58\u50a8\u4e2d\u5fc3\u989d\u5916\u6dfb\u52a01\u4e2a\u65b0\u6587\u4ef6\uff0c\u800c\u4e0d\u4f1a\u56e0\u4e3a\u4ec5\u4ec5\u4e00\u4e2a\u6587\u4ef6\u7684\u6539\u53d8\u590d\u5236\u6574\u65b0\u7248\u672c\u5305\u7684\u5185\u5bb9\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6240\u6709\u6587\u4ef6\u90fd\u4f1a\u5b58\u50a8\u5728\u786c\u76d8\u4e0a\u7684\u67d0\u4e00\u4f4d\u7f6e\u3002 \u5f53\u8f6f\u4ef6\u5305\u88ab\u88ab\u5b89\u88c5\u65f6\uff0c\u5305\u91cc\u7684\u6587\u4ef6\u4f1a\u786c\u94fe\u63a5\u5230\u8fd9\u4e00\u4f4d\u7f6e\uff0c\u800c\u4e0d\u4f1a\u5360\u7528\u989d\u5916\u7684\u78c1\u76d8\u7a7a\u95f4\u3002 \u8fd9\u5141\u8bb8\u4f60\u8de8\u9879\u76ee\u5730\u5171\u4eab\u540c\u4e00\u7248\u672c\u7684\u4f9d\u8d56\u3002")),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u60a8\u5728\u78c1\u76d8\u4e0a\u8282\u7701\u4e86\u5927\u91cf\u7a7a\u95f4\uff0c\u8fd9\u4e0e\u9879\u76ee\u548c\u4f9d\u8d56\u9879\u7684\u6570\u91cf\u6210\u6b63\u6bd4\uff0c\u5e76\u4e14\u5b89\u88c5\u901f\u5ea6\u8981\u5feb\u5f97\u591a\uff01"),(0,l.kt)("h2",{id:"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684-node_modules-\u6587\u4ef6\u5939"},"\u521b\u5efa\u975e\u6241\u5e73\u5316\u7684 node_modules \u6587\u4ef6\u5939"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528 npm \u5b89\u88c5\u4f9d\u8d56\u65f6\uff0c\u6240\u6709\u7684\u4f9d\u8d56\u90fd\u4f1a\u88ab\u63d0\u5347\u5230\u6a21\u5757\u7684\u6839\u76ee\u5f55\u3002 \u56e0\u6b64\uff0c\u9879\u76ee\u53ef\u4ee5\u8bbf\u95ee\u5230\u672a\u88ab\u6dfb\u52a0\u8fdb\u5f53\u524d\u9879\u76ee\u7684\u4f9d\u8d56\u3002"),(0,l.kt)("p",null,"pnpm \u4f7f\u7528\u8f6f\u94fe\u7684\u65b9\u5f0f\u5c06\u9879\u76ee\u7684\u76f4\u63a5\u4f9d\u8d56\u6dfb\u52a0\u8fdb\u6a21\u5757\u6587\u4ef6\u5939\u7684\u6839\u76ee\u5f55\u3002 \u5982\u679c\u4f60\u60f3\u4e86\u89e3 pnpm \u5173\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u7ed3\u6784\u8bbe\u8ba1\u7684\u66f4\u591a\u7ec6\u8282\uff0c\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u5b83\u5728 Node.js \u751f\u6001\u6210\u4e3a\u4e86\u540e\u8d77\u4e4b\u79c0\uff0c\u8bf7\u53c2\u8003\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"\u6241\u5e73\u7684 node_modules \u4e0d\u662f\u552f\u4e00\u7684\u65b9\u6cd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/next/symlinked-node-modules-structure"},"\u57fa\u4e8e\u7b26\u53f7\u94fe\u63a5\u7684 node_modules \u7ed3\u6784"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3233],{9613:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>c});var t=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return r?t.createElement(k,o(o({ref:n},m),{},{components:r})):t.createElement(k,o({ref:n},m))}));function c(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5720:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var t=r(665),a=r(151),i=(r(9496),r(9613)),o=["components"],l={id:"limitations",title:"S\u0131n\u0131rlamalar"},s=void 0,p={unversionedId:"limitations",id:"version-7.x/limitations",title:"S\u0131n\u0131rlamalar",description:"1. npm-shrinkwrap.json ve package-lock.json yok say\u0131l\u0131r. pnpm'den farkl\u0131 olarak, npm ayn\u0131 ad@s\xfcr\xfcm birden \xe7ok kez ve farkl\u0131 ba\u011f\u0131ml\u0131l\u0131k setiyle kurabilir. npm'nin kilit dosyas\u0131, d\xfcz node_modules d\xfczenini yans\u0131tacak \u015fekilde tasarlanm\u0131\u015ft\u0131r, ancak pnpm varsay\u0131lan olarak yal\u0131t\u0131lm\u0131\u015f bir d\xfczen olu\u015fturdu\u011fundan, npm'nin kilit dosyas\u0131 bi\xe7imine sayg\u0131 g\xf6steremez. Yine de bir kilit dosyas\u0131n\u0131 pnpm format\u0131na d\xf6n\xfc\u015ft\xfcrmek istiyorsan\u0131z pnpm i\xe7e aktarma bak\u0131n.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/tr/limitations",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"limitations",title:"S\u0131n\u0131rlamalar"},sidebar:"version-7.x/docs",previous:{title:"Logolar",permalink:"/tr/logos"},next:{title:"`node_modules`'da sembolik ba\u011f (symlink) yap\u0131s\u0131",permalink:"/tr/symlinked-node-modules-structure"}},m={},d=[],u={toc:d};function c(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," ve ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json")," yok say\u0131l\u0131r. pnpm'den farkl\u0131 olarak, npm ayn\u0131 ",(0,i.kt)("inlineCode",{parentName:"li"},"ad@s\xfcr\xfcm")," birden \xe7ok kez ve farkl\u0131 ba\u011f\u0131ml\u0131l\u0131k setiyle kurabilir. npm'nin kilit dosyas\u0131, d\xfcz ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," d\xfczenini yans\u0131tacak \u015fekilde tasarlanm\u0131\u015ft\u0131r, ancak pnpm varsay\u0131lan olarak yal\u0131t\u0131lm\u0131\u015f bir d\xfczen olu\u015fturdu\u011fundan, npm'nin kilit dosyas\u0131 bi\xe7imine sayg\u0131 g\xf6steremez. Yine de bir kilit dosyas\u0131n\u0131 pnpm format\u0131na d\xf6n\xfc\u015ft\xfcrmek istiyorsan\u0131z ",(0,i.kt)("a",{parentName:"li",href:"/tr/cli/import"},"pnpm i\xe7e aktarma")," bak\u0131n."),(0,i.kt)("li",{parentName:"ol"},"Binstub'lar ( ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),"i\xe7indeki dosyalar) JS dosyalar\u0131na sembolik ba\u011flant\u0131 de\u011fil, her zaman kabuk dosyalar\u0131d\u0131r. Shell dosyalar\u0131, s\u0131ra d\u0131\u015f\u0131 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," yap\u0131s\u0131ndaki eklentilerini bulmada, tak\u0131labilir CLI uygulamalar\u0131 ' ye yard\u0131mc\u0131 olmak i\xe7in olu\u015fturulur. Bu \xe7ok nadiren g\xf6r\xfclen bir sorundur ve dosyan\u0131n bir JS dosyas\u0131 olmas\u0131n\u0131 bekliyorsan\u0131z, bunun yerine ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"a\xe7\u0131kland\u0131\u011f\u0131 gibi do\u011frudan orijinal dosyaya.")),(0,i.kt)("p",null,"Bu sorunlar i\xe7in ge\xe7ici \xe7\xf6z\xfcmler i\xe7in bir fikriniz var m\u0131? ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Payla\u015f\u0131n.")))}c.isMDXComponent=!0}}]);
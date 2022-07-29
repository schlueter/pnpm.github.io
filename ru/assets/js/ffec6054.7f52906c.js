"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5842],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,p(p({ref:t},u),{},{components:n})):a.createElement(k,p({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=n(665),r=n(151),l=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},o=void 0,m={unversionedId:"installation",id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ru/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},sidebar:"docs",previous:{title:"\u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f",permalink:"/ru/next/motivation"},next:{title:"pnpm CLI",permalink:"/ru/next/pnpm-cli"}},u={},s=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439-\u0441\u043a\u0440\u0438\u043f\u0442",level:2},{value:"C \u043f\u043e\u043c\u043e\u0449\u044c\u044e Corepack",id:"c-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-corepack",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f npm",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-npm",level:2},{value:"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Homebrew",id:"\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-homebrew",level:2},{value:"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Scoop",id:"\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-scoop",level:2},{value:"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",id:"\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm",level:2}],d={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439-\u0441\u043a\u0440\u0438\u043f\u0442"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442"),(0,l.kt)("p",null,"\u041d\u0430 POSIX-\u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c pnpm, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d Node.js, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043a\u0440\u0438\u043f\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d curl, \u0438 \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c wget:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"\u041d\u0430 Windows (PowerShell):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,l.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/cli/env"},"pnpm env")," \u0434\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Node.js."),(0,l.kt)("h2",{id:"c-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-corepack"},"C \u043f\u043e\u043c\u043e\u0449\u044c\u044e Corepack"),(0,l.kt)("p",null,"\u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0432\u0435\u0440\u0441\u0438\u0438 v16.13 Node.js \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432. \u042d\u0442\u043e \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435, \u043d\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043a \u043d\u0435\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,l.kt)("p",null,"\u042d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 pnpm \u0432 \u0432\u0430\u0448\u0443 \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u041e\u0434\u043d\u0430\u043a\u043e, \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043d\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f pnpm. To upgrade it, check what is the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"latest pnpm version")," and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,l.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-npm"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f npm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-homebrew"},"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Homebrew"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 Homebrew, \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c pnpm \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,l.kt)("h2",{id:"\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-scoop"},"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Scoop"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d Scoop, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c pnpm \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u0425\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c pnpm \u0432 CI/CD? \u0421\u043c.: ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/continuous-integration"},"\u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f"),".")),(0,l.kt)("h2",{id:"\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"},"\u0421\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c"),(0,l.kt)("p",null,"\u041d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 pnpm \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0439 Node.js."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 pnpm \u043f\u043e \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043f\u0435\u0440\u0435\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0435\u0433\u043e, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c pnpm \u0438 \u0435\u0433\u043e \u0444\u0430\u0439\u043b\u044b, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0432 \u043f\u0443\u0442\u044c \u0434\u043e \u0435\u0433\u043e \u043f\u0430\u043f\u043a\u0438 \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f PATH."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 pnpm, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432: ",(0,l.kt)("inlineCode",{parentName:"p"},"which pnpm"),". \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Windows, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u044d\u0442\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 Git Bash. \u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b pnpm, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f CLI pnpm, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u044d\u0442\u0443 \u043f\u0430\u043f\u043a\u0443 \u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u0435 \u0432\u0441\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 pnpm \u0444\u0430\u0439\u043b\u044b (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm"),"\u0438 \u0442.\u0434.). \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 pnpm \u0435\u0449\u0435 \u0440\u0430\u0437, \u0438 \u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0432\u044b \u0442\u043e\u0433\u043e \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435."),(0,l.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,l.kt)("inlineCode",{parentName:"p"},"pn")," instead. Just put the following line to your ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,l.kt)("h2",{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-pnpm"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 pnpm"),(0,l.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/uninstall"},"Uninstalling pnpm"),"."))}c.isMDXComponent=!0}}]);
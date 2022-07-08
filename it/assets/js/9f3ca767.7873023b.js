"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6701],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(665),l=n(151),i=(n(9496),n(9613)),r=["components"],o={id:"installation",title:"Installazione"},p=void 0,s={unversionedId:"installation",id:"installation",title:"Installazione",description:"Usando uno script standalone",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/it/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"installation",title:"Installazione"},sidebar:"docs",previous:{title:"Motivazione",permalink:"/it/next/motivation"},next:{title:"CLI di pnpm",permalink:"/it/next/pnpm-cli"}},m={},d=[{value:"Usando uno script standalone",id:"usando-uno-script-standalone",level:2},{value:"Utilizzo di Corepack",id:"utilizzo-di-corepack",level:2},{value:"Usando npm",id:"usando-npm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilit\xe0",id:"compatibilit\xe0",level:2},{value:"Risoluzione dei problemi",id:"risoluzione-dei-problemi",level:2},{value:"Disinstallazione di pnpm",id:"disinstallazione-di-pnpm",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usando-uno-script-standalone"},"Usando uno script standalone"),(0,i.kt)("p",null,"Sui sistemi POSIX, puoi installare pnpm anche se non hai installato Node.js, usando il seguente script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("p",null,"Se non hai curl installato, puoi usare wget:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("p",null,"Su Windows (PowerShell):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,i.kt)("p",null,"Puoi utilizzare poi il comando ",(0,i.kt)("a",{parentName:"p",href:"/it/next/cli/env"},"pnpm env")," per installare Node.js."),(0,i.kt)("h2",{id:"utilizzo-di-corepack"},"Utilizzo di Corepack"),(0,i.kt)("p",null,"Dalla versione 16.13, Node.js fornisce ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," per la gestione dei gestori di pacchetti. Questa \xe8 una funzionalit\xe0 sperimentale, quindi \xe8 necessario abilitarla eseguendo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,i.kt)("p",null,"Questo installer\xe0 automaticamente pnpm sul tuo sistema. Tuttavia, probabilmente non sar\xe0 l'ultima versione di pnpm. Per aggiornarlo, controlla qual \xe8 l'",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"ultima versione di pnpm")," ed esegui:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,i.kt)("h2",{id:"usando-npm"},"Usando npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,i.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,i.kt)("p",null,"Se il gestore di pacchetti \xe8 installato, \xe8 possibile installare pnpm utilizzando il seguente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,i.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,i.kt)("p",null,"Se hai installato Scoop, puoi installare pnpm usando il seguente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Vuoi usare pnpm su server CI? Vedi: ",(0,i.kt)("a",{parentName:"p",href:"/it/next/continuous-integration"},"Integrazione vontinua"),"."))),(0,i.kt)("h2",{id:"compatibilit\xe0"},"Compatibilit\xe0"),(0,i.kt)("p",null,"Di seguito \xe8 riportato un elenco delle versioni precedenti di pnpm con le rispettive versioni di Node.js supportate."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,i.kt)("h2",{id:"risoluzione-dei-problemi"},"Risoluzione dei problemi"),(0,i.kt)("p",null,"Se pnpm \xe8 danneggiato e non puoi risolvere reinstallando, potrebbe esser necessario rimuoverlo manualmente dal PATH."),(0,i.kt)("p",null,"Supponiamo di aver il seguente errore durante l'esecuzione di ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,i.kt)("p",null,"Per prima cosa, prova a trovare il percorso di installazione di pnpm eseguendo: ",(0,i.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Se sei su Windows, esegui questo comando usando Git Bash. Otterrai il percorso di installazione del comando pnpm, ad esempio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,i.kt)("p",null,"Ora che sai dove si trova la CLI pnpm, apri la cartella e rimuovi qualsiasi file relativo a pnpm (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),", ecc). Una volta fatto, installa nuovamente pnpm e dovrebbe funzionare come previsto."),(0,i.kt)("h2",{id:"disinstallazione-di-pnpm"},"Disinstallazione di pnpm"),(0,i.kt)("p",null,"Se devi rimuovere la CLI di pnpm dal sistema e tutti i file che ha scritto sul disco, vedi ",(0,i.kt)("a",{parentName:"p",href:"/it/next/uninstall"},"Disinstallazione di pnpm"),"."))}c.isMDXComponent=!0}}]);
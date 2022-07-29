"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6701],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(k,r(r({ref:n},u),{},{components:t})):a.createElement(k,r({ref:n},u))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2559:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(665),l=t(151),i=(t(9496),t(9613)),r=["components"],o={id:"installation",title:"Installazione"},p=void 0,s={unversionedId:"installation",id:"installation",title:"Installazione",description:"Usando uno script standalone",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/it/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"installation",title:"Installazione"},sidebar:"docs",previous:{title:"Motivazione",permalink:"/it/next/motivation"},next:{title:"CLI di pnpm",permalink:"/it/next/pnpm-cli"}},u={},m=[{value:"Usando uno script standalone",id:"usando-uno-script-standalone",level:2},{value:"Utilizzo di Corepack",id:"utilizzo-di-corepack",level:2},{value:"Usando npm",id:"usando-npm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilit\xe0",id:"compatibilit\xe0",level:2},{value:"Risoluzione dei problemi",id:"risoluzione-dei-problemi",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Disinstallazione di pnpm",id:"disinstallazione-di-pnpm",level:2}],d={toc:m};function c(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usando-uno-script-standalone"},"Usando uno script standalone"),(0,i.kt)("p",null,"Sui sistemi POSIX, puoi installare pnpm anche se non hai installato Node.js, usando il seguente script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("p",null,"Se non hai curl installato, puoi usare wget:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,i.kt)("p",null,"Su Windows (PowerShell):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,i.kt)("p",null,"Puoi utilizzare poi il comando ",(0,i.kt)("a",{parentName:"p",href:"/it/next/cli/env"},"pnpm env")," per installare Node.js."),(0,i.kt)("h2",{id:"utilizzo-di-corepack"},"Utilizzo di Corepack"),(0,i.kt)("p",null,"Dalla versione 16.13, Node.js fornisce ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," per la gestione dei gestori di pacchetti. Questa \xe8 una funzionalit\xe0 sperimentale, quindi \xe8 necessario abilitarla eseguendo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,i.kt)("p",null,"Questo installer\xe0 automaticamente pnpm sul tuo sistema. Tuttavia, probabilmente non sar\xe0 l'ultima versione di pnpm. Per aggiornarlo, controlla qual \xe8 l'",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"ultima versione di pnpm")," ed esegui:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,i.kt)("h2",{id:"usando-npm"},"Usando npm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,i.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,i.kt)("p",null,"Se il gestore di pacchetti \xe8 installato, \xe8 possibile installare pnpm utilizzando il seguente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,i.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,i.kt)("p",null,"Se hai installato Scoop, puoi installare pnpm usando il seguente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Vuoi usare pnpm su server CI? Vedi: ",(0,i.kt)("a",{parentName:"p",href:"/it/next/continuous-integration"},"Integrazione vontinua"),".")),(0,i.kt)("h2",{id:"compatibilit\xe0"},"Compatibilit\xe0"),(0,i.kt)("p",null,"Di seguito \xe8 riportato un elenco delle versioni precedenti di pnpm con le rispettive versioni di Node.js supportate."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,i.kt)("h2",{id:"risoluzione-dei-problemi"},"Risoluzione dei problemi"),(0,i.kt)("p",null,"Se pnpm \xe8 danneggiato e non puoi risolvere reinstallando, potrebbe esser necessario rimuoverlo manualmente dal PATH."),(0,i.kt)("p",null,"Supponiamo di aver il seguente errore durante l'esecuzione di ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,i.kt)("p",null,"Per prima cosa, prova a trovare il percorso di installazione di pnpm eseguendo: ",(0,i.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Se sei su Windows, esegui questo comando usando Git Bash. Otterrai il percorso di installazione del comando pnpm, ad esempio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,i.kt)("p",null,"Ora che sai dove si trova la CLI pnpm, apri la cartella e rimuovi qualsiasi file relativo a pnpm (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm"),", ecc). Una volta fatto, installa nuovamente pnpm e dovrebbe funzionare come previsto."),(0,i.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,i.kt)("inlineCode",{parentName:"p"},"pn")," instead. Just put the following line to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,i.kt)("h2",{id:"disinstallazione-di-pnpm"},"Disinstallazione di pnpm"),(0,i.kt)("p",null,"Se devi rimuovere la CLI di pnpm dal sistema e tutti i file che ha scritto sul disco, vedi ",(0,i.kt)("a",{parentName:"p",href:"/it/next/uninstall"},"Disinstallazione di pnpm"),"."))}c.isMDXComponent=!0}}]);
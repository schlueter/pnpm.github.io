"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9951],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(665),r=n(151),o=(n(9496),n(9613)),l=["components"],p={id:"installation",title:"Instala\xe7\xe3o"},i=void 0,s={unversionedId:"installation",id:"installation",title:"Instala\xe7\xe3o",description:"Usando um script",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/pt/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"installation",title:"Instala\xe7\xe3o"},sidebar:"docs",previous:{title:"Motiva\xe7\xe3o",permalink:"/pt/next/motivation"},next:{title:"pnpm CLI",permalink:"/pt/next/pnpm-cli"}},m={},d=[{value:"Usando um script",id:"usando-um-script",level:2},{value:"Usando Corepack",id:"usando-corepack",level:2},{value:"Usando npm",id:"usando-npm",level:2},{value:"Usando Homebrew",id:"usando-homebrew",level:2},{value:"Usando Scoop",id:"usando-scoop",level:2},{value:"Compatibilidade",id:"compatibilidade",level:2},{value:"Solu\xe7\xe3o de Problemas",id:"solu\xe7\xe3o-de-problemas",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Desinstalando o pnpm",id:"desinstalando-o-pnpm",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usando-um-script"},"Usando um script"),(0,o.kt)("p",null,"Em sistemas POSIX, voc\xea pode instalar pnpm mesmo sem o Node.js instalado, usando o seguinte script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,o.kt)("p",null,"Se voc\xea n\xe3o tiver curl instalado, poder\xe1 usar wget:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,o.kt)("p",null,"No Windows (PowerShell):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,o.kt)("p",null,"Ent\xe3o, voc\xea pode utilizar o comando ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/cli/env"},"pnpm env")," para instalar Node.js."),(0,o.kt)("h2",{id:"usando-corepack"},"Usando Corepack"),(0,o.kt)("p",null,"Desde a vers\xe3o v16.13, Node.js inclui ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," para controlar a instala\xe7\xe3o de gerenciadores de pacotes. Esta \xe9 uma ferramenta experimental, ent\xe3o voc\xea precisa habilit\xe1-la com o seguinte comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,o.kt)("p",null,"Isso ir\xe1 automaticamente instalar pnpm no seu sistema. Entretanto, provavelmente n\xe3o ser\xe1 a vers\xe3o mais recente do pnpm. Para atualiz\xe1-lo, verifique a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"vers\xe3o mais recente do pnpm")," e execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,o.kt)("h2",{id:"usando-npm"},"Usando npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,o.kt)("h2",{id:"usando-homebrew"},"Usando Homebrew"),(0,o.kt)("p",null,"Se voc\xea tiver o Homebrew instalado, poder\xe1 instalar pnpm usando o seguinte comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,o.kt)("h2",{id:"usando-scoop"},"Usando Scoop"),(0,o.kt)("p",null,"Se voc\xea tiver Scoop instalado, poder\xe1 instalar pnpm usando o seguinte comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Voc\xea gostaria de utilizar o pnpm em servidores de Integra\xe7\xe3o Cont\xednua (CI)? Veja ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/continuous-integration"},"Integra\xe7\xe3o cont\xednua"),".")),(0,o.kt)("h2",{id:"compatibilidade"},"Compatibilidade"),(0,o.kt)("p",null,"Aqui est\xe1 uma lista de vers\xf5es anteriores do pnpm com suas respectivas vers\xf5es do Node.js suportadas."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,o.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,o.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,o.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,o.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,o.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,o.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,o.kt)("h2",{id:"solu\xe7\xe3o-de-problemas"},"Solu\xe7\xe3o de Problemas"),(0,o.kt)("p",null,"Se o pnpm falhar, e n\xe3o for resolvido por meio de uma reinstala\xe7\xe3o, voc\xea pode precisar remov\xea-lo manualmente do PATH."),(0,o.kt)("p",null,"Assumindo que voc\xea t\xeam o seguinte erro ao rodar ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,o.kt)("p",null,"Primeiro, tente encontrar a localiza\xe7\xe3o do pnpm rodando: ",(0,o.kt)("inlineCode",{parentName:"p"},"which pnpm"),". Se voc\xea usar Windows, execute este comando no Git Bash. Voc\xea ir\xe1 ver a localiza\xe7\xe3o do comando pnpm, como:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Arquivos de Programas/nodejs/pnpm\n")),(0,o.kt)("p",null,"Agora que voc\xea sabe onde est\xe1 localizado o pnpm, abra este diret\xf3rio e remova qualquer arquivo relacionado ao pnpm (",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Ent\xe3o, instale o pnpm novamente, e ele deve funcionar como esperado."),(0,o.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,o.kt)("inlineCode",{parentName:"p"},"pn")," instead. Just put the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,o.kt)("h2",{id:"desinstalando-o-pnpm"},"Desinstalando o pnpm"),(0,o.kt)("p",null,"Se voc\xea precisar remover a CLI do pnpm de seu sistema operacional, assim como quaisquer arquivos que ele tenha gravado em seu disco, consulte ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/uninstall"},"Desinstalando o pnpm"),"."))}c.isMDXComponent=!0}}]);
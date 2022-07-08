"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8573],{9613:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(g,r(r({ref:n},l),{},{components:t})):a.createElement(g,r({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=t(665),o=t(151),s=(t(9496),t(9613)),r=["components"],i={id:"using-changesets",title:"Usando Changesets com pnpm"},c=void 0,p={unversionedId:"using-changesets",id:"using-changesets",title:"Usando Changesets com pnpm",description:"No momento da reda\xe7\xe3o desta documenta\xe7\xe3o, a vers\xe3o mais recente do pnpm era v6.14. A vers\xe3o mais recente do Changesets era v2.16.0.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/pt/next/using-changesets",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"using-changesets",title:"Usando Changesets com pnpm"},sidebar:"docs",previous:{title:"Completar linha de comando utilizando tab",permalink:"/pt/next/completion"},next:{title:"Integra\xe7\xe3o Cont\xednua",permalink:"/pt/next/continuous-integration"}},l={},u=[{value:"Cofnigura\xe7\xe3o",id:"cofnigura\xe7\xe3o",level:2},{value:"Adicionando novos changesets",id:"adicionando-novos-changesets",level:2},{value:"Publicando changesets",id:"publicando-changesets",level:2},{value:"Usnado GitHub Actions",id:"usnado-github-actions",level:2},{value:"Atualizando as vers\xf5es do pacote",id:"atualizando-as-vers\xf5es-do-pacote",level:3},{value:"Publicando",id:"publicando",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"No momento da reda\xe7\xe3o desta documenta\xe7\xe3o, a vers\xe3o mais recente do pnpm era v6.14. A vers\xe3o mais recente do ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," era v2.16.0."))),(0,s.kt)("h2",{id:"cofnigura\xe7\xe3o"},"Cofnigura\xe7\xe3o"),(0,s.kt)("p",null,"Para configurar o changesets num ambiente pnpm, instale ",(0,s.kt)("inlineCode",{parentName:"p"},"changesets")," como uma depend\xeancia de desenvolvimento na raiz do ambiente:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,s.kt)("p",null,"Em seguida, o comando de inicializa\xe7\xe3o do changesets:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,s.kt)("h2",{id:"adicionando-novos-changesets"},"Adicionando novos changesets"),(0,s.kt)("p",null,"Para gerar um novo changeset, execute ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm changeset")," na raiz do reposit\xf3rio. Os arquivos markdown gerados no diret\xf3rio ",(0,s.kt)("inlineCode",{parentName:"p"},".changeset")," devem ser commitados no reposit\xf3rio."),(0,s.kt)("h2",{id:"publicando-changesets"},"Publicando changesets"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Execute ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset version"),". Isso ir\xe1 incrementar as vers\xf5es dos pacotes previamente especificados com ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," (e quaisquer depend\xeancias dos mesmos) e atualizar os arquivos de changelog."),(0,s.kt)("li",{parentName:"ol"},"Execute ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm install"),". Isto ir\xe1 atualizar o lockfile e reconstruir pacotes."),(0,s.kt)("li",{parentName:"ol"},"Fa\xe7a um commit das altera\xe7\xf5es."),(0,s.kt)("li",{parentName:"ol"},"Execute ",(0,s.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),". Esse comando ir\xe1 publicar todos os pacotes que possuem vers\xf5es com colis\xe3o ainda n\xe3o presentes no registro.")),(0,s.kt)("h2",{id:"usnado-github-actions"},"Usnado GitHub Actions"),(0,s.kt)("p",null,"Para automatizar o processo, voc\xea pode usar a ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version")," com GitHub Actions."),(0,s.kt)("h3",{id:"atualizando-as-vers\xf5es-do-pacote"},"Atualizando as vers\xf5es do pacote"),(0,s.kt)("p",null,"A a\xe7\xe3o detectar\xe1 quando arquivos de changeset chegarem na branch ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," e, em seguida, abrir\xe1 um novo Pull Request listando todos os pacotes com vers\xf5es alteradas. Uma vez mesclados, os pacotes ser\xe3o atualizados e voc\xea poder\xe1 decidir se deseja publicar ou n\xe3o adicionando a propriedade ",(0,s.kt)("inlineCode",{parentName:"p"},"publish"),"."),(0,s.kt)("h3",{id:"publicando"},"Publicando"),(0,s.kt)("p",null,"Ao adicionar ",(0,s.kt)("inlineCode",{parentName:"p"},"publish: pnpm ci:publish")," que \xe9 um script que executa ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset publish")," publicar\xe1 no registro assim que o PR for aberto por ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,s.kt)("p",null,"Mais informa\xe7\xf5es e documenta\xe7\xe3o sobre essa a\xe7\xe3o podem ser encontradas ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"aqui"),"."))}m.isMDXComponent=!0}}]);
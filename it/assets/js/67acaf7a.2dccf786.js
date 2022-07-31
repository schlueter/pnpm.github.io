"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6461],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||p;return t?i.createElement(g,r(r({ref:n},m),{},{components:t})):i.createElement(g,r({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,r=new Array(p);r[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<p;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=t(665),a=t(151),p=(t(9496),t(9613)),r=["components"],l={id:"continuous-integration",title:"Integrazione continua"},o=void 0,s={unversionedId:"continuous-integration",id:"version-7.x/continuous-integration",title:"Integrazione continua",description:"pnpm pu\xf2 essere facilmente utilizzato in vari sistemi di integrazione continua.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-7.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/it/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"7.x",frontMatter:{id:"continuous-integration",title:"Integrazione continua"},sidebar:"version-7.x/docs",previous:{title:"Utilizzo di Changesets con pnpm",permalink:"/it/using-changesets"},next:{title:"Lavorare con Git",permalink:"/it/git"}},m={},u=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"Azioni di GitHub",id:"azioni-di-github",level:2},{value:"CI di GitLab",id:"ci-di-gitlab",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2},{value:"Azure Pipelines",id:"azure-pipelines",level:2}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,p.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm pu\xf2 essere facilmente utilizzato in vari sistemi di integrazione continua."),(0,p.kt)("h2",{id:"travis"},"Travis"),(0,p.kt)("p",null,"Su ",(0,p.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", puoi usare pnpm per installare le tue dipendenze aggiungendo questo al tuo file ",(0,p.kt)("inlineCode",{parentName:"p"},".travis.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,p.kt)("h2",{id:"semaphore"},"Semaphore"),(0,p.kt)("p",null,"Su ",(0,p.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", puoi usare pnpm per installare e memorizzare nella cache le tue dipendenze aggiungendo questo al tuo file ",(0,p.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) $(pnpm store path)\n")),(0,p.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,p.kt)("p",null,"Su ",(0,p.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", puoi usare pnpm per installare le tue dipendenze aggiungendo questo al tuo ",(0,p.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n  - pnpm install\n")),(0,p.kt)("h2",{id:"azioni-di-github"},"Azioni di GitHub"),(0,p.kt)("p",null,"Su GitHub Actions, puoi usare pnpm per installare e memorizzare nella cache le tue dipendenze in questo modo (appartiene a ",(0,p.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.2.2\n      with:\n        version: 7\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"La memorizzazione nella cache delle dipendenze dei pacchetti con ",(0,p.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," richiede l'installazione di pnpm con la versione ",(0,p.kt)("strong",{parentName:"p"},"6.10+"),".")),(0,p.kt)("h2",{id:"ci-di-gitlab"},"CI di GitLab"),(0,p.kt)("p",null,"Su Gitlab, puoi usare pnpm per installare e memorizzare nella cache le tue dipendenze modo (appartiene a ",(0,p.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"):"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},"stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key:\n      files:\n        - pnpm-lock.yaml\n    paths:\n      - .pnpm-store\n")),(0,p.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,p.kt)("p",null,"Puoi usare pnpm per installare e memorizzare nella cache le tue dipendenze:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')),(0,p.kt)("h2",{id:"azure-pipelines"},"Azure Pipelines"),(0,p.kt)("p",null,"On Azure Pipelines, you can use pnpm for installing and caching your dependencies by adding this to your ",(0,p.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="azure-pipelines.yml"',title:'"azure-pipelines.yml"'},'variables:\n  pnpm_config_cache: $(Pipeline.Workspace)/.pnpm-store\n\nsteps:\n  - task: Cache@2\n    inputs:\n      key: \'pnpm | "$(Agent.OS)" | pnpm-lock.yaml\'\n      path: $(pnpm_config_cache)\n    displayName: Cache pnpm\n\n  - script: |\n      curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7\n      pnpm config set store-dir $(pnpm_config_cache)\n    displayName: "Setup pnpm"\n\n  - script: |\n      pnpm install\n      pnpm run build\n    displayName: "pnpm install and build"\n')))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4069],{9613:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>m});var t=o(9496);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=t.createContext({}),l=function(e){var a=t.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return o?t.createElement(f,i(i({ref:a},c),{},{components:o})):t.createElement(f,i({ref:a},c))}));function m(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5773:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=o(665),r=o(151),n=(o(9496),o(9613)),i=["components"],s={title:"Op\xe7\xf5es de configura\xe7\xe3o com pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},p=void 0,l={permalink:"/pt/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/pt-BR",source:"@site/i18n/pt/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Op\xe7\xf5es de configura\xe7\xe3o com pnpm",description:"Existem diversas maneiras de criar um diret\xf3rio nodemodules. Seu objetivo deve ser criar o mais estrito, mas caso n\xe3o seja poss\xedvel, h\xe1 op\xe7\xf5es para criar um nodemodules solto tamb\xe9m.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 de outubro de 2020",tags:[],readingTime:1.79,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"Op\xe7\xf5es de configura\xe7\xe3o com pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"O ano de 2021 para pnpm",permalink:"/pt/blog/2021/12/29/yearly-update"},nextItem:{title:"node_modules planos n\xe3o s\xe3o a \xfanica maneira",permalink:"/pt/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},c={authorsImageUrls:[void 0]},u=[{value:"A configura\xe7\xe3o padr\xe3o",id:"a-configura\xe7\xe3o-padr\xe3o",level:2},{value:"Plug&#39;n&#39;Play. A configura\xe7\xe3o mais r\xedgida",id:"plugnplay-a-configura\xe7\xe3o-mais-r\xedgida",level:2},{value:"Um diret\xf3rio de m\xf3dulos estrito e tradicional",id:"um-diret\xf3rio-de-m\xf3dulos-estrito-e-tradicional",level:2},{value:"O pior caso \u2014 hoisting(eleva\xe7\xe3o) \xe0 raiz",id:"o-pior-caso--hoistingeleva\xe7\xe3o-\xe0-raiz",level:2}],d={toc:u};function m(e){var a=e.components,o=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Existem diversas maneiras de criar um diret\xf3rio node_modules. Seu objetivo deve ser criar o mais estrito, mas caso n\xe3o seja poss\xedvel, h\xe1 op\xe7\xf5es para criar um node_modules solto tamb\xe9m."),(0,n.kt)("h2",{id:"a-configura\xe7\xe3o-padr\xe3o"},"A configura\xe7\xe3o padr\xe3o"),(0,n.kt)("p",null,"Por padr\xe3o, o pnpm v5 criar\xe1 um node_modules semi-estrito. Semi-estrito significa que sua aplica\xe7\xe3o s\xf3 poder\xe1 requisitar pacotes inclusos como depend\xeancia ao ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," (com algumas exce\xe7\xf5es). No entanto, suas depend\xeancias poder\xe3o acessar qualquer pacote."),(0,n.kt)("p",null,"A configura\xe7\xe3o padr\xe3o fica assim:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"; Todos os pacotes s\xe3o hoisted(elevados) ao node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n; Todos os tipos s\xe3o hoisted(elevados) \xe0 raiz para satisfazer o TypeScript\npublic-hoist-pattern[]=*types*\n\n; Todos os pacotes relacionados ao ESLint s\xe3o hoisted(elevados) \xe0 raiz tamb\xe9m\npublic-hoist-pattern[]=*eslint*\n")),(0,n.kt)("h2",{id:"plugnplay-a-configura\xe7\xe3o-mais-r\xedgida"},"Plug'n'Play. A configura\xe7\xe3o mais r\xedgida"),(0,n.kt)("p",null,"O pnpm suporta ",(0,n.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Plug'n'Play do Yarn")," desde a vers\xe3o v5.9. Com o PnP, tanto sua aplica\xe7\xe3o quanto as depend\xeancias ter\xe3o acesso apenas \xe0s depend\xeancias declaradas. Isso \xe9 ainda mais restrito do que setar ",(0,n.kt)("inlineCode",{parentName:"p"},"hoist=false")," porque, dentro de um monorepo, a sua aplica\xe7\xe3o n\xe3o ter acesso at\xe9 para as dependencias do projeto raiz."),(0,n.kt)("p",null,"Para usar o Plug'n'Play, defina estas configura\xe7\xf5es:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,n.kt)("h2",{id:"um-diret\xf3rio-de-m\xf3dulos-estrito-e-tradicional"},"Um diret\xf3rio de m\xf3dulos estrito e tradicional"),(0,n.kt)("p",null,"Caso n\xe3o esteja pronto para usar o PnP, ainda \xe9 poss\xedvel ser estrito e permitir que pacotes acessem apenas suas pr\xf3prias depend\xeancias definindo a configura\xe7\xe3o do hoist como falsa:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,n.kt)("p",null,"No entando, se algumas de suas depend\xeancias est\xe3o tentando acessar pacotes que n\xe3o possuem nas deped\xeancias, h\xe1 duas op\xe7\xf5es:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Crie um ",(0,n.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," e use um ",(0,n.kt)("a",{parentName:"p",href:"/pnpmfile"},"hook")," para adicionar a depend\xeancia que falta ao manifesto do pacote.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Adicione um padr\xe3o \xe0 configura\xe7\xe3o do ",(0,n.kt)("inlineCode",{parentName:"p"},"hoist-pattern"),". Por exemplo, se o m\xf3dulo n\xe3o encontrado foi ",(0,n.kt)("inlineCode",{parentName:"p"},"babel-core"),", adicione a seguinte configura\xe7\xe3o ao ",(0,n.kt)("inlineCode",{parentName:"p"},".npmrc"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,n.kt)("h2",{id:"o-pior-caso--hoistingeleva\xe7\xe3o-\xe0-raiz"},"O pior caso \u2014 hoisting(eleva\xe7\xe3o) \xe0 raiz"),(0,n.kt)("p",null,"Algumas ferramentas podem n\xe3o funcionar, mesmo com a configura\xe7\xe3o padr\xe3o do pnpm, que move tudo para a raiz da loja virtual e alguns pacotes para a raiz. Nesse caso, \xe9 poss\xedvel fazer um hoist(elevar) tudo ou apenas uma parte das depend\xeancias \xe0 raiz do diret\xf3rio de m\xf3dulos."),(0,n.kt)("p",null,"Mover tudo para a raiz:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,n.kt)("p",null,"Fazer hoisting(elevar) apenas os pacotes que correspondem a um padr\xe3o:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}m.isMDXComponent=!0}}]);
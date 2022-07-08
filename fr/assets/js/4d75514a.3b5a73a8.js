"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4866],{9613:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>d});var t=n(9496);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},m=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||a;return n?t.createElement(f,p(p({ref:r},m),{},{components:n})):t.createElement(f,p({ref:r},m))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=c;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var s=2;s<a;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7188:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=n(665),l=n(151),a=(n(9496),n(9613)),p=["components"],o={id:"uninstall",title:"D\xe9sinstaller pnpm"},i=void 0,s={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"D\xe9sinstaller pnpm",description:"Supprimer globalement les packages install\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/fr/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"D\xe9sinstaller pnpm"},sidebar:"version-7.x/docs",previous:{title:"How peers are resolved",permalink:"/fr/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/fr/pnpm-vs-npm"}},m={},u=[{value:"Supprimer globalement les packages install\xe9s",id:"supprimer-globalement-les-packages-install\xe9s",level:2},{value:"Supprimer l&#39;interface de commande de pnpm",id:"supprimer-linterface-de-commande-de-pnpm",level:2},{value:"Supprimer la m\xe9moire d&#39;adressage globale",id:"supprimer-la-m\xe9moire-dadressage-globale",level:2}],c={toc:u};function d(e){var r=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"supprimer-globalement-les-packages-install\xe9s"},"Supprimer globalement les packages install\xe9s"),(0,a.kt)("p",null,"Before removing the pnpm CLI, it might make sense to remove all global packages that were installed by pnpm."),(0,a.kt)("p",null,"Pour r\xe9pertorier tous les packages globaux, ex\xe9cutez ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Il existe deux mani\xe8res de supprimer les packages globaux:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," avec chaque package global r\xe9pertori\xe9."),(0,a.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," pour trouver l'emplacement du r\xe9pertoire global et supprimez-le manuellement.")),(0,a.kt)("h2",{id:"supprimer-linterface-de-commande-de-pnpm"},"Supprimer l'interface de commande de pnpm"),(0,a.kt)("p",null,"If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,a.kt)("p",null,"You might also want to clean the ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env variable in your shell configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,a.kt)("p",null,"Si vous avez utilis\xe9 npm pour installer pnpm, vous devez utiliser npm pour d\xe9sinstaller pnpm\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,a.kt)("h2",{id:"supprimer-la-m\xe9moire-dadressage-globale"},"Supprimer la m\xe9moire d'adressage globale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,a.kt)("p",null,"If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used. pnpm creates one store per disk."))}d.isMDXComponent=!0}}]);
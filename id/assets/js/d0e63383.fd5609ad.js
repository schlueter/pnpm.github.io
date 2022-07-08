"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3730],{9613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var t=a(9496);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=i,k=m["".concat(o,".").concat(u)]||m[u]||c[u]||r;return a?t.createElement(k,p(p({ref:n},d),{},{components:a})):t.createElement(k,p({ref:n},d))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<r;s++)p[s]=a[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1393:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=a(665),i=a(151),r=(a(9496),a(9613)),p=["components"],l={id:"fetch",title:"pnpm fetch"},o=void 0,s={unversionedId:"cli/fetch",id:"version-6.x/cli/fetch",title:"pnpm fetch",description:"Ambil paket dari lock file ke virtual store, package manifes akan diabaikan.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/id/6.x/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"version-6.x/docs",previous:{title:"pnpm prune",permalink:"/id/6.x/cli/prune"},next:{title:"pnpm install-test",permalink:"/id/6.x/cli/install-test"}},d={},c=[{value:"Skenario penggunaan",id:"skenario-penggunaan",level:2},{value:"Opsional",id:"opsional",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],m={toc:c};function u(e){var n=e.components,a=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ambil paket dari lock file ke virtual store, package manifes akan diabaikan."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ini adalah command ujicoba. Perubahan yang melanggar dapat diperkenalkan di versi non-utama CLI."))),(0,r.kt)("h2",{id:"skenario-penggunaan"},"Skenario penggunaan"),(0,r.kt)("p",null,"Perintah ini dirancang khusus untuk mempercepat pembuatan docker image."),(0,r.kt)("p",null,"Disarankan Anda telah membaca ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"panduan resmi")," untuk menulis Dockerfile untuk aplikasi Node.js, jika Anda belum membacanya, Anda mungkin ingin membacanya terlebih dahulu."),(0,r.kt)("p",null,"Dari panduan itu, kita belajar menulis Dockerfile yang dioptimalkan untuk proyek menggunakan pnpm, yang akan terlihat seperti"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"Selama tidak ada perubahan ke ",(0,r.kt)("inlineCode",{parentName:"p"},".npmrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", cache pada docker masih valid hingga lapisan ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),", yang menghabiskan sebagian besar waktu saat membuat docker image."),(0,r.kt)("p",null,"Meskipun demikian, modifikasi ke ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," mungkin terjadi lebih sering daripada yang kami harapkan, karena tidak hanya berisi dependensi, tetapi mungkin juga nomor versi, kode, dan konfigurasi arbitrer untuk alat lainnya."),(0,r.kt)("p",null,"Hal ini juga sulit untuk mempertahankan Dockerfile yang digunakan untuk memabngun sebuah proyek monorepo, mungkin terlihat seperti"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,r.kt)("p",null,"Seperti yang Anda lihat, Dockerfile harus diperbarui saat Anda menambah atau menghapus sub-packages."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," akan menyelesaikan masalah di atas dengan sempurna dengan menyediakan kemampuan untuk mengambil paket ke toko virtual dengan informasi hanya dari lockfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,r.kt)("p",null,"Ini berfungsi untuk proyek sederhana dan proyek monorepo, ",(0,r.kt)("inlineCode",{parentName:"p"},"--offline")," memaksa pnpm untuk tidak berkomunikasi dengan registri paket karena semua paket yang dibutuhkan harus sudah disajikan di virtual store."),(0,r.kt)("p",null,"Selama lockfile tidak diubah, cache build valid hingga layer ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline\n"),", yang akan menghemat banyak waktu Anda."),(0,r.kt)("h2",{id:"opsional"},"Opsional"),(0,r.kt)("h3",{id:"--dev"},"--dev"),(0,r.kt)("p",null,"Hanya paket pengembangan yang akan diambil"),(0,r.kt)("h3",{id:"--prod"},"--prod"),(0,r.kt)("p",null,"Paket pengembangan tidak akan diambil"))}u.isMDXComponent=!0}}]);
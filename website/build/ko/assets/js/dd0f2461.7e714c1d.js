"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8985],{69216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(85893),i=t(11151);const s={},r=void 0,a={id:"build/primitives/dao/bos/create-dao",title:"create-dao",description:"The full list of roles and permissions you can find here.",source:"@site/../docs/2.build/5.primitives/dao/bos/create-dao.md",sourceDirName:"2.build/5.primitives/dao/bos",slug:"/build/primitives/dao/bos/create-dao",permalink:"/ko/build/primitives/dao/bos/create-dao",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/bos/create-dao.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},d={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const args = {\n  config: {\n    name: "Primitives",\n    purpose: "Building primitives on NEAR",\n    metadata: ""\n  },\n  policy: ["bob.near"]\n};\nNear.call(\n  "sputnik-dao.near",\n  "create",\n  {\n    name: "primitives",\n    args: Buffer.from(JSON.stringify(args)).toString("base64"),\n  },\n  300000000000000,\n  6000000000000000000000000\n);\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The full list of roles and permissions you can find ",(0,o.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"here"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8096],{35607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(85893),o=n(11151);const s={},r=void 0,i={id:"build/primitives/dex/web-app/swap",title:"swap",description:"The Wallet object comes from our quickstart template",source:"@site/../docs/2.build/5.primitives/dex/web-app/swap.md",sourceDirName:"2.build/5.primitives/dex/web-app",slug:"/build/primitives/dex/web-app/swap",permalink:"/vi/build/primitives/dex/web-app/swap",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dex/web-app/swap.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},l=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst AMM_CONTRACT_ADDRESS = "v2.ref-finance.near";\nconst wallet = new Wallet({ createAccessKeyFor: AMM_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'swap\',\n  args: {\n   actions: [\n      {\n        pool_id: 79,\n        token_in: "token.v2.ref-finance.near",\n        token_out: "wrap.near",\n        amount_in: "100000000000000000",\n        min_amount_out: "1",\n      },\n    ],\n  },\n  contractId: AMM_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 1\n});\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["The ",(0,a.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'"5019606679394603179450"\n'})})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
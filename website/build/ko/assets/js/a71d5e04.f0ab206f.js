"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2801],{19537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(85893),r=n(11151);const a={},s=void 0,i={id:"build/primitives/linkdrop/web-app/create-ft-drop",title:"create-ft-drop",description:"The Wallet object comes from our quickstart template",source:"@site/../docs/2.build/5.primitives/linkdrop/web-app/create-ft-drop.md",sourceDirName:"2.build/5.primitives/linkdrop/web-app",slug:"/build/primitives/linkdrop/web-app/create-ft-drop",permalink:"/ko/build/primitives/linkdrop/web-app/create-ft-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/web-app/create-ft-drop.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},l=[];function d(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst FT_CONTRACT_ADDRESS = "ft.primitives.near";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst wallet = new Wallet({ createAccessKeyFor: KEYPOM_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "create_drop",\n  contractId: KEYPOM_CONTRACT_ADDRESS,\n  args: {\n    public_keys: state.publicKeys,\n    deposit_per_use: DROP_AMOUNT,\n    ftData: {\n      contractId: FT_CONTRACT_ADDRESS,\n      senderId: accountId, // TODO How to get account id\n      // This balance per use is balance of human readable FTs per use. \n      amount: "1"\n      // Alternatively, you could use absoluteAmount, which is dependant on the decimals value of the FT\n      // ex. if decimals of an ft = 8, then 1 FT token would be absoluteAmount = 100000000\n    },\n  },\n  deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["The ",(0,o.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(67294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
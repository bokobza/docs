"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9854],{64581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),o=n(11151);const a={},i=void 0,s={id:"build/primitives/linkdrop/web-app/create-function-call-drop",title:"create-function-call-drop",description:"The Wallet object comes from our quickstart template",source:"@site/../docs/2.build/5.primitives/linkdrop/web-app/create-function-call-drop.md",sourceDirName:"2.build/5.primitives/linkdrop/web-app",slug:"/build/primitives/linkdrop/web-app/create-function-call-drop",permalink:"/zh-CN/build/primitives/linkdrop/web-app/create-function-call-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/web-app/create-function-call-drop.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},l=[];function d(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst NFT_CONTRACT_ADDRESS = "nft.primitives.near";\nconst NFT_TOKEN_ID = "1";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n\nawait wallet.callMethod({\n  method: "create_drop",\n  contractId: KEYPOM_CONTRACT_ADDRESS,\n  args: {\n    public_keys: state.publicKeys,\n    deposit_per_use: DROP_AMOUNT,\n    fcData: {\n      // 2D array of function calls. In this case, there is 1 function call to make for a key use\n      // By default, if only one array of methods is present, this array of function calls will be used for all key uses\n      methods: [\n        // Array of functions for Key use 1. \n          [{\n            receiverId: NFT_CONTRACT_ADDRESS,\n            methodName: "nft_mint",\n            args: JSON.stringify({\n            // Change this token_id if it already exists -> check explorer transaction\n                token_id: NFT_TOKEN_ID,\n                metadata: {\n                  title: "My NFT drop",\n                  description: "",\n                  media: "",\n                }\n            }),\n            accountIdField: "receiver_id",\n            // Attached deposit for when the receiver makes this function call\n            attachedDeposit: "10000000000000000000000"\n          }]\n      ]\n    }\n  },\n  deposit: "23000000000000000000000" // state.publicKeys.length * dropAmount + 3000000000000000000000,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(67294);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
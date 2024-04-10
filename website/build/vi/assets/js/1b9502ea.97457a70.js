"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4353],{97137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(85893),s=n(11151);const a={},r=void 0,i={id:"build/primitives/dao/web-app/get-proposal-list",title:"get-proposal-list",description:"The Wallet object comes from our quickstart template",source:"@site/../docs/2.build/5.primitives/dao/web-app/get-proposal-list.md",sourceDirName:"2.build/5.primitives/dao/web-app",slug:"/build/primitives/dao/web-app/get-proposal-list",permalink:"/vi/build/primitives/dao/web-app/get-proposal-list",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/web-app/get-proposal-list.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},l={},p=[];function c(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst DAO_CONTRACT_ADDRESS = \"nearweek-news-contribution.sputnik-dao.near\";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'get_proposals',\n  args: { from_index: 9262, limit: 2 },\n  contractId: DAO_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["The ",(0,o.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var o=n(67294);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6326],{45644:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(85893),r=n(11151);const i={},d=void 0,s={id:"build/primitives/linkdrop/bos/get-drop-id",title:"get-drop-id",description:"",source:"@site/../docs/2.build/5.primitives/linkdrop/bos/get-drop-id.md",sourceDirName:"2.build/5.primitives/linkdrop/bos",slug:"/build/primitives/linkdrop/bos/get-drop-id",permalink:"/vi/build/primitives/linkdrop/bos/get-drop-id",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/bos/get-drop-id.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},p=[];function a(t){const e={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\n\nconst dropSupplyForOwner = Near.view(\n  keypomContract,\n  "get_drop_supply_for_owner",\n  { account_id: accountId }\n);\n\nconst dropsForOwner = Near.view(keypomContract, "get_drops_for_owner", {\n  account_id: accountId,\n  from_index: (dropSupplyForOwner - 1).toString(),\n});\n\nconst dropId = dropsForOwner[dropsForOwner.length - 1].drop_id;\n'})})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(a,{...t})}):a(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>d});var o=n(67294);const r={},i=o.createContext(r);function d(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:d(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);
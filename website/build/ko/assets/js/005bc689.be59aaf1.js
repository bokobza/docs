"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4156],{83322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var a=n(85893),s=n(11151);const c={id:"callbacks",title:"Cross-Contract Calls"},l=void 0,i={id:"build/smart-contracts/security/callbacks",title:"Cross-Contract Calls",description:"While writing cross-contract calls there is a significant aspect to keep in mind",source:"@site/../docs/2.build/2.smart-contracts/security/callbacks.md",sourceDirName:"2.build/2.smart-contracts/security",slug:"/build/smart-contracts/security/callbacks",permalink:"/ko/build/smart-contracts/security/callbacks",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/security/callbacks.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"callbacks",title:"Cross-Contract Calls"},sidebar:"build",previous:{title:"Million Small Deposits",permalink:"/ko/build/smart-contracts/security/storage"},next:{title:"Ensure it is the User (1y\u24c3)",permalink:"/ko/build/smart-contracts/security/one-yocto"}},o={},r=[{value:"Private Callbacks",id:"private-callbacks",level:2},{value:"User&#39;s Money",id:"users-money",level:2},{value:"Async Callbacks",id:"async-callbacks",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["While writing cross-contract calls there is a significant aspect to keep in mind: all the calls are ",(0,a.jsx)(t.strong,{children:"independent"})," and ",(0,a.jsx)(t.strong,{children:"asynchronous"}),". In other words:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The method in which you make the call and method for the callback are ",(0,a.jsx)(t.strong,{children:"independent"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Between the call and the callback, people could interact with the contract."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This has important implications on how you should handle the callbacks. Particularly:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Your callback method needs to be public, but you want to make sure only your contract can call it."}),"\n",(0,a.jsx)(t.li,{children:"Make sure you don't leave the contract in a exploitable state between the call and the callback."}),"\n",(0,a.jsx)(t.li,{children:"Manually rollback any changes to the state in the callback if the external call failed."}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"private-callbacks",children:"Private Callbacks"}),"\n",(0,a.jsxs)(t.p,{children:["In order for your contract to call itself when a cross-contract call is done, you need to make the callback method public. However, most of the times you would want it to be private. You can make it private while keeping it public by asserting that the ",(0,a.jsx)(t.code,{children:"predecessor"})," is ",(0,a.jsx)(t.code,{children:"current_account"}),". In rust this is done automatically by adding the ",(0,a.jsx)(t.code,{children:"#[private]"})," decorator."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"users-money",children:"User's Money"}),"\n",(0,a.jsxs)(t.p,{children:["When a method panics, the money attached to that transaction returns to the ",(0,a.jsx)(t.code,{children:"predecessor"}),". This means that, if you make a cross-contract call and it fails, then the money ",(0,a.jsx)(t.strong,{children:"returns to your contract"}),". If the money came from a user calling your contract, then you should transfer it back during the callback."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*Hp4TOcaBqm9LS0wkgWw3nA.png",alt:"img"}),"\n",(0,a.jsx)(t.em,{children:"If the user attached money, we need to manually return it in the callback"})]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Make sure you pass have enough GAS in the callback to make the transfer"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"async-callbacks",children:"Async Callbacks"}),"\n",(0,a.jsxs)(t.p,{children:["Between a cross-contract call and its callback ",(0,a.jsx)(t.strong,{children:"any method of your contract can be executed"}),". Not taking this into account is one of the main sources of exploits. It is so common that it has its own name: reentrancy attacks."]}),"\n",(0,a.jsxs)(t.p,{children:["Imagine that we develop a ",(0,a.jsx)(t.code,{children:"deposit_and_stake"})," with the following ",(0,a.jsx)(t.strong,{children:"wrong logic"}),": (1) The user sends us money, (2) we add it to its balance, (3) we try to stake it in a validator, (4) if the staking fails, we remove the balance in the callback. Then, a user could schedule a call to withdraw between (2) and (4), and, if the staking failed, we would send money twice to the user."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*VweWHQYGLBa70uceiWHLQA.png",alt:"img"}),"\n",(0,a.jsx)(t.em,{children:"Between a cross-contract call and the callback anything could happen"})]}),"\n",(0,a.jsx)(t.p,{children:"Luckily for us the solution is rather simple. Instead of immediately adding the money to our user\u2019s balance, we wait until the callback. There we check, and if the staking went well, then we add it to their balance."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{src:"https://miro.medium.com/max/1400/1*o0YVDCp_7l-L3njJMGhU4w.png",alt:"img"}),"\n",(0,a.jsx)(t.em,{children:"Correct way to handle deposits in a cross-contract call"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var a=n(67294);const s={},c=a.createContext(s);function l(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);
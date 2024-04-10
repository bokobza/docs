"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5695],{71533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(85893),s=n(11151);const i={id:"introduction",title:"Fungible Tokens Zero to Hero",sidebar_label:"Introduction"},o=void 0,a={id:"tutorials/fts/introduction",title:"Fungible Tokens Zero to Hero",description:"In this Zero to Hero series, you'll find a set of tutorials covering every aspect of a fungible token (FT) smart contract. You'll start by interacting with a pre-deployed contract and by the end you'll have built a fully-fledged FT smart contract that supports every extension of the standards.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/fts/0-intro.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/introduction",permalink:"/zh-CN/tutorials/fts/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/0-intro.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,sidebarPosition:0,frontMatter:{id:"introduction",title:"Fungible Tokens Zero to Hero",sidebar_label:"Introduction"},sidebar:"tutorials",previous:{title:"Lido Example",permalink:"/zh-CN/tutorials/near-components/lido"},next:{title:"Pre-deployed Contract",permalink:"/zh-CN/tutorials/fts/predeployed-contract"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["In this ",(0,r.jsx)(t.em,{children:"Zero to Hero"})," series, you'll find a set of tutorials covering every aspect of a fungible token (FT) smart contract. You'll start by interacting with a pre-deployed contract and by the end you'll have built a fully-fledged FT smart contract that supports every extension of the standards."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To complete these tutorials successfully, you'll need:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/develop/prerequisites",children:"Rust"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://testnet.mynearwallet.com",children:"A NEAR testnet account"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tools/near-cli#setup",children:"NEAR-CLI"})}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"New to Rust?",type:"info",children:(0,r.jsxs)(t.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,r.jsx)(t.a,{href:"/develop/quickstart-guide",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["These are the steps that will bring you from ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"Zero"})})," to ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"Hero"})})," in no time! \ud83d\udcaa"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Step"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/fts/predeployed-contract",children:"Pre-deployed contract"})}),(0,r.jsx)(t.td,{children:"Receive FTs without the need to code, create, or deploy a smart contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/fts/skeleton",children:"Contract architecture"})}),(0,r.jsx)(t.td,{children:"Learn the basic architecture of the FT smart contract and compile the code."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/fts/defining-a-token",children:"Defining a Token"})}),(0,r.jsx)(t.td,{children:"Flesh out what it means to have a FT and how you can customize your own"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"Circulating Supply"})}),(0,r.jsx)(t.td,{children:"Learn how to create an initial supply and have the token show up in your wallet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/fts/registering-accounts",children:"Registering Accounts"})}),(0,r.jsx)(t.td,{children:"Explore how you can implement and understand the storage management standard to avoid malicious users from draining your funds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/fts/transfers",children:"Transferring FTs"})}),(0,r.jsx)(t.td,{children:"Learn how to transfer FTs and discover some of the true powers that the core standard brings"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"7"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/fts/marketplace",children:"Marketplace"})}),(0,r.jsx)(t.td,{children:"Learn about how common marketplaces operate on NEAR and dive into some of the code that allows buying and selling NFTs by using Fungible Tokens"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(t.p,{children:["Ready to start? Jump to the ",(0,r.jsx)(t.a,{href:"/tutorials/fts/predeployed-contract",children:"Pre-deployed Contract"})," tutorial and begin your learning journey!"]}),"\n",(0,r.jsx)(t.p,{children:"If you already know about fungible tokens and smart contracts, feel free to skip and jump directly to the tutorial of your interest. The tutorials have been designed so you can start at any given point!"}),"\n",(0,r.jsxs)(t.admonition,{title:"Questions?",type:"info",children:[(0,r.jsxs)(t.p,{children:["\ud83d\udc49 Join us on ",(0,r.jsx)(t.a,{href:"https://near.chat/",children:"Discord"})," and let us know in the ",(0,r.jsx)(t.code,{children:"#development"})," channels. \ud83d\udc48"]}),(0,r.jsxs)(t.p,{children:["We also host daily ",(0,r.jsx)(t.a,{href:"https://pages.near.org/developers/get-help/office-hours/",children:"Office Hours"})," live where the DevRel team will answer any questions you may have. \ud83e\udd14"]}),(0,r.jsx)(t.p,{children:"Monday \u2013 Friday 11AM \u2013 12PM Pacific (6PM \u2013 7PM UTC)"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
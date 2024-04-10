"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2394],{4975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(85893),r=t(11151);const a={id:"intro",title:"QueryAPI Overview",sidebar_label:"Introduction"},o=void 0,s={id:"build/data-infrastructure/query-api/intro",title:"QueryAPI Overview",description:"Near QueryAPI is a fully managed solution to build indexer functions,",source:"@site/../docs/2.build/6.data-infrastructure/query-api/intro.md",sourceDirName:"2.build/6.data-infrastructure/query-api",slug:"/build/data-infrastructure/query-api/intro",permalink:"/ko/build/data-infrastructure/query-api/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/query-api/intro.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"intro",title:"QueryAPI Overview",sidebar_label:"Introduction"},sidebar:"build",previous:{title:"BigQuery",permalink:"/ko/build/data-infrastructure/big-query"},next:{title:"How it works",permalink:"/ko/build/data-infrastructure/query-api/how-it-works"}},d={},l=[{value:"Indexing complexity",id:"indexing-complexity",level:2},{value:"Creation",id:"creation",level:4},{value:"Maintenance",id:"maintenance",level:4},{value:"Operation",id:"operation",level:4},{value:"QueryAPI",id:"queryapi",level:2},{value:"NEAR Component",id:"near-component",level:3},{value:"Indexers stored on-chain",id:"indexers-stored-on-chain",level:3},{value:"Known limitations",id:"known-limitations",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Near QueryAPI is a fully managed solution to build indexer functions,\nextract on-chain data, store it in a database, and be able to query it using GraphQL endpoints."}),"\n",(0,i.jsx)(n.h2,{id:"indexing-complexity",children:"Indexing complexity"}),"\n",(0,i.jsx)(n.p,{children:"Blockchain Indexers are known to be challenging to create, maintain, and operate.\nYou have to focus on the business logic of your indexer, while you also have to\ntake care of everything else around it.\nA dedicated team member could be needed to deal with all these challenges."}),"\n",(0,i.jsx)(n.p,{children:"Common indexing challenges include:"}),"\n",(0,i.jsx)(n.h4,{id:"creation",children:"Creation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Design Database Schema and provision it with correct configurations for security, data retention, and performance."}),"\n",(0,i.jsx)(n.li,{children:"Write and test indexer code that interacts with the database"}),"\n",(0,i.jsx)(n.li,{children:"Deploy Indexer to a Cloud provider. Ensure network permissions firewalls, PCs, or other network-related settings are setup correctly."}),"\n",(0,i.jsx)(n.li,{children:"Create an API endpoint to retrieve data from your database for your fronted applications"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"maintenance",children:"Maintenance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Monitor the performance of your database and scale it as needed"}),"\n",(0,i.jsx)(n.li,{children:"Manage permissions and database access with changing requirements"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"operation",children:"Operation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Re-index data due to issues and updates. Ensuring that production environments don't get disrupted."}),"\n",(0,i.jsx)(n.li,{children:"Perform database schema migrations"}),"\n",(0,i.jsx)(n.li,{children:"Scale the API as your application grows"}),"\n",(0,i.jsx)(n.li,{children:"Keep up with all the underlying blockchain nodes and upgrades"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"queryapi",children:"QueryAPI"}),"\n",(0,i.jsx)(n.p,{children:"As you can see, running indexers is a complex and comprehensive set of processes and\nNear QueryAPI tries to cover most (or all) of these needs, offering an open-source solution for creating, managing, and exploring indexers."}),"\n",(0,i.jsx)(n.h3,{id:"near-component",children:"NEAR Component"}),"\n",(0,i.jsxs)(n.p,{children:["QueryAPI has a ",(0,i.jsxs)(n.a,{href:"https://near.org/#/dataplatform.near/widget/QueryApi.App",children:[(0,i.jsx)(n.code,{children:"QueryApi.App"})," NEAR widget"]}),", hosted under the ",(0,i.jsx)(n.code,{children:"dataplatform.near"})," account.\nWith this component, you can see all the public indexers currently available on the Near blockchain."]}),"\n",(0,i.jsxs)(n.p,{children:["If you would like to create a new indexer, simply click ",(0,i.jsx)(n.a,{href:"https://near.org/#/dataplatform.near/widget/QueryApi.App/?view=create-new-indexer",children:(0,i.jsx)(n.strong,{children:"Create New Indexer"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"QueryAPI Dashboard",src:t(82165).Z+"",width:"1178",height:"664"})}),"\n",(0,i.jsx)(n.h3,{id:"indexers-stored-on-chain",children:"Indexers stored on-chain"}),"\n",(0,i.jsxs)(n.p,{children:["QueryAPI stores all the indexer logic and schemas used to provision the databases on-chain.\nWhenever you interact with the QueryAPI NEAR component, in the background it's making an RPC query to ",(0,i.jsx)(n.a,{href:"https://stats.gallery/mainnet/queryapi.dataplatform.near/contract?t=week",children:(0,i.jsx)(n.code,{children:"queryapi.dataplatform.near"})}),",\nwhere a smart contract stores all of your indexer logic as well as your schemas."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you select the ",(0,i.jsx)(n.em,{children:"feed-indexer"})," and click on ",(0,i.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=dataplatform.near/feed-indexer",children:(0,i.jsx)(n.strong,{children:"View indexer"})})," you'll see all the details about an indexer that powers the ",(0,i.jsx)(n.a,{href:"https://near.org",children:"near.org"}),"'s main posts feed.\nYou're free to review the JavaScript code of the indexer function, or check the SQL that defines the database schema."]}),"\n",(0,i.jsx)(n.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Currently under closed beta testing."}),"\n",(0,i.jsx)(n.li,{children:"Only supports JavaScript indexers. (we plan to support Rust in the future)"}),"\n",(0,i.jsxs)(n.li,{children:["It always takes the latest ",(0,i.jsx)(n.code,{children:"@near-lake/primitives"})," library."]}),"\n",(0,i.jsxs)(n.li,{children:["It doesn't support schema migrations.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you have an indexer whose schema needs to change, you may need to create a new indexer and do a historical backfill on that new indexer again."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"There's no way to stop or restart your indexer, truncating all tables."}),"\n",(0,i.jsxs)(n.li,{children:["Historical backfill works in parallel to the real-time indexing.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Historical processing won't happen in order. (it will happen at the same time as top of network)"}),"\n",(0,i.jsx)(n.li,{children:"Keep that in mind to ensure you don't have unintended side effects."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Join the Beta",type:"tip",children:(0,i.jsxs)(n.p,{children:["If you want to join the closed beta, please ",(0,i.jsx)(n.a,{href:"http://bit.ly/near-queryapi-beta",children:"fill out this form"})," for access."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Pricing",type:"info",children:(0,i.jsx)(n.p,{children:"Pagoda currently doesn't charge for storing your indexer code and data or running the indexer, but we will introduce this soon."})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},82165:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/QAPIScreen-f6f10f42dcef46ddf4c9e4fdb9c79eec.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(67294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);
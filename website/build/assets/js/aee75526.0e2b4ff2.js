"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2982],{20612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(85893),i=n(11151);const o={sidebar_position:2},r="Reproducible Builds",d={id:"sdk/js/building/reproducible-builds",title:"Reproducible Builds",description:"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical.",source:"@site/../docs/sdk/js/building/reproducible-builds.md",sourceDirName:"sdk/js/building",slug:"/sdk/js/building/reproducible-builds",permalink:"/sdk/js/building/reproducible-builds",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/building/reproducible-builds.md",tags:[],version:"current",lastUpdatedBy:"Dennis",lastUpdatedAt:1674222229e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Rapid Prototyping",permalink:"/sdk/js/building/prototyping"},next:{title:"JS SDK CLI",permalink:"/sdk/js/cli/"}},l={},c=[{value:"Problem",id:"problem",level:2},{value:"Control for Dependencies",id:"control-for-dependencies",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"reproducible-builds",children:"Reproducible Builds"}),"\n",(0,s.jsx)(t.p,{children:"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical."}),"\n",(0,s.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,s.jsxs)(t.p,{children:["If you will build your contract on two different machines, most likely you will get two similar but not identical binaries. Your compiled ",(0,s.jsx)(t.code,{children:".wasm"})," file is dependent on several factors as the node version used and dependency sub versions."]}),"\n",(0,s.jsx)(t.h2,{id:"control-for-dependencies",children:"Control for Dependencies"}),"\n",(0,s.jsx)(t.p,{children:"We recommend sharing lockfiles (and updating them only when dependencies are added or removed) between machines and specifying node versions to ensure that the same dependencies are used."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
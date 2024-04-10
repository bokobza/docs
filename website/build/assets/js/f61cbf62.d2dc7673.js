"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5769],{43959:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(85893),i=s(11151);const r={id:"post-processing",title:"Post Processing Tools"},o="Post Processing Tools",a={id:"sdk/rust/building/post-processing",title:"Post Processing Tools",description:"The size of the contract is a critical characteristic. The best way to keep it small is a well-designed minimalistic code with a reduced number of dependencies. It is especially important for large contracts and huge multi-contract dApps that can take a fortune to deploy.",source:"@site/../docs/sdk/rust/building/post-processing-tools.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/post-processing",permalink:"/sdk/rust/building/post-processing",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/post-processing-tools.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1661352815e3,frontMatter:{id:"post-processing",title:"Post Processing Tools"},sidebar:"tools",previous:{title:"Rapid Prototyping",permalink:"/sdk/rust/building/prototyping"},next:{title:"Reproducible Builds",permalink:"/sdk/rust/building/reproducible-builds"}},c={},l=[{value:"Ready to use script",id:"ready-to-use-script",level:2},{value:"Requirements to run the script:",id:"requirements-to-run-the-script",level:3},{value:"WARNING",id:"warning",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"post-processing-tools",children:"Post Processing Tools"}),"\n",(0,n.jsx)(t.p,{children:"The size of the contract is a critical characteristic. The best way to keep it small is a well-designed minimalistic code with a reduced number of dependencies. It is especially important for large contracts and huge multi-contract dApps that can take a fortune to deploy."}),"\n",(0,n.jsx)(t.p,{children:"When you have done your best with the code optimization it is worth reducing the size of the contract by minifying it."}),"\n",(0,n.jsx)(t.h2,{id:"ready-to-use-script",children:"Ready to use script"}),"\n",(0,n.jsxs)(t.p,{children:["We have prepared a simple ",(0,n.jsx)(t.code,{children:"bash"})," script that can be used to minify ",(0,n.jsx)(t.code,{children:".wasm"})," contract file. You can find it ",(0,n.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/minifier/minify.sh",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The current approach to minification is the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Snip (i.e. just replace with unreachable instruction) few known fat functions from the standard library (such as float formatting and panic-related) with ",(0,n.jsx)(t.code,{children:"wasm-snip"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"wasm-gc"})," to eliminate all functions reachable from the snipped functions."]}),"\n",(0,n.jsxs)(t.li,{children:["Strip unneeded sections, such as names with ",(0,n.jsx)(t.code,{children:"wasm-strip"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"binaryen wasm-opt"}),", which cleans up the rest."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"requirements-to-run-the-script",children:"Requirements to run the script:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["install ",(0,n.jsx)(t.a,{href:"https://docs.rs/wasm-snip/0.4.0/wasm_snip/",children:"wasm-snip"})," and ",(0,n.jsx)(t.a,{href:"https://docs.rs/crate/wasm-gc/0.1.6",children:"wasm-gc"})," with Cargo:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cargo install wasm-snip wasm-gc\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["install ",(0,n.jsx)(t.a,{href:"https://github.com/WebAssembly/binaryen",children:"binaryen"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/WebAssembly/wabt",children:"wabt"})," on your system. For Ubuntu and other Debian based Linux distributions run:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"apt install binaryen wabt\n"})}),"\n",(0,n.jsx)(t.h2,{id:"warning",children:"WARNING"}),"\n",(0,n.jsxs)(t.p,{children:["Minification could be rather aggressive, so you must test the contract after minification. Standalone NEAR runtime could be helpful ",(0,n.jsx)(t.a,{href:"https://github.com/nearprotocol/nearcore/tree/master/runtime/near-vm-runner",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
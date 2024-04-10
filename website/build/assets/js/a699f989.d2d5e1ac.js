"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4473],{18586:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(85893),a=r(11151),s=r(77229);const i={id:"contract-size",title:"Reducing Contract Size"},l="Reducing a contract's size",o={id:"sdk/rust/contract-size",title:"Reducing Contract Size",description:"Advice & examples",source:"@site/../docs/sdk/rust/reduce-size.md",sourceDirName:"sdk/rust",slug:"/sdk/rust/contract-size",permalink:"/sdk/rust/contract-size",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/reduce-size.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1705668999e3,frontMatter:{id:"contract-size",title:"Reducing Contract Size"},sidebar:"tools",previous:{title:"Best Practices",permalink:"/sdk/rust/best-practices"},next:{title:"About JS SDK",permalink:"/sdk/js/introduction"}},c={},d=[{value:"Advice &amp; examples",id:"advice--examples",level:2},{value:"Small wins",id:"small-wins",level:2},{value:"Using flags",id:"using-flags",level:3},{value:"Removing <code>rlib</code> from the manifest",id:"removing-rlib-from-the-manifest",level:3},{value:"Lower-level approach",id:"lower-level-approach",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"reducing-a-contracts-size",children:"Reducing a contract's size"}),"\n",(0,t.jsx)(n.h2,{id:"advice--examples",children:"Advice & examples"}),"\n",(0,t.jsx)(n.p,{children:"This page is made for developers familiar with lower-level concepts who wish to reduce their contract size significantly, perhaps at the expense of code readability."}),"\n",(0,t.jsx)(n.p,{children:"Some common scenarios where this approach may be helpful:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"contracts intended to be tied to one's account management"}),"\n",(0,t.jsx)(n.li,{children:"contracts deployed using a factory"}),"\n",(0,t.jsx)(n.li,{children:"future advancements similar to the EVM on NEAR"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There have been a few items that may add unwanted bytes to a contract's size when compiled. Some of these may be more easily swapped for other approaches while others require more internal knowledge about system calls."}),"\n",(0,t.jsx)(n.h2,{id:"small-wins",children:"Small wins"}),"\n",(0,t.jsx)(n.h3,{id:"using-flags",children:"Using flags"}),"\n",(0,t.jsxs)(n.p,{children:["When compiling a contract make sure to pass flag ",(0,t.jsx)(n.code,{children:"-C link-arg=-s"})," to the rust compiler:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here is the parameters we use for the most examples in ",(0,t.jsx)(n.code,{children:"Cargo.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[profile.release]\ncodegen-units = 1\nopt-level = "s"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You may want to experiment with using ",(0,t.jsx)(n.code,{children:'opt-level = "z"'})," instead of ",(0,t.jsx)(n.code,{children:'opt-level = "s"'})," to see if generates a smaller binary. See more details on this in ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level",children:"The Cargo Book Profiles section"}),". You may also reference this ",(0,t.jsx)(n.a,{href:"https://rustwasm.github.io/book/reference/code-size.html#tell-llvm-to-optimize-for-size-instead-of-speed",children:"Shrinking .wasm Size"})," resource."]}),"\n",(0,t.jsxs)(n.h3,{id:"removing-rlib-from-the-manifest",children:["Removing ",(0,t.jsx)(n.code,{children:"rlib"})," from the manifest"]}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that your manifest (",(0,t.jsx)(n.code,{children:"Cargo.toml"}),") doesn't contain ",(0,t.jsx)(n.code,{children:"rlib"})," unless it needs to. Some NEAR examples have included this:"]}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib", "rlib"]\n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[lib]\ncrate-type = ["cdylib"]\n'})})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["When using the Rust SDK, you may override the default JSON serialization to use ",(0,t.jsx)(n.a,{href:"https://borsh.io",children:"Borsh"})," instead. ",(0,t.jsx)(n.a,{href:"/sdk/rust/contract-interface/serialization-interface#overriding-serialization-protocol-default",children:"See this page"})," for more information and an example."]}),"\n",(0,t.jsxs)(n.li,{children:["When using assertions or guards, avoid using the standard ",(0,t.jsx)(n.code,{children:"assert"})," macros like ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert.html",children:(0,t.jsx)(n.code,{children:"assert!"})}),", ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert_eq.html",children:(0,t.jsx)(n.code,{children:"assert_eq!"})}),", or ",(0,t.jsx)(n.a,{href:"https://doc.rust-lang.org/std/macro.assert_ne.html",children:(0,t.jsx)(n.code,{children:"assert_ne!"})})," as these may add bloat for information regarding the line number of the error. There are similar issues with ",(0,t.jsx)(n.code,{children:"unwrap"}),", ",(0,t.jsx)(n.code,{children:"expect"}),", and Rust's ",(0,t.jsx)(n.code,{children:"panic!()"})," macro."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example of a standard assertion:"}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'assert_eq!(contract_owner, predecessor_account, "ERR_NOT_OWNER");\n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'if contract_owner != predecessor_account {\n  env::panic(b"ERR_NOT_OWNER");\n}\n'})})}),"\n",(0,t.jsxs)(n.p,{children:["Example of removing ",(0,t.jsx)(n.code,{children:"expect"}),":"]}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'let owner_id = self.owner_by_id.get(&token_id).expect("Token not found");\n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'fn expect_token_found<T>(option: Option<T>) -> T {\n  option.unwrap_or_else(|| env::panic_str("Token not found"))\n}\nlet owner_id = expect_token_found(self.owner_by_id.get(&token_id));  \n'})})}),"\n",(0,t.jsxs)(n.p,{children:["Example of changing standard ",(0,t.jsx)(n.code,{children:"panic!()"}),":"]}),"\n",(0,t.jsx)(n.admonition,{title:"Adds unnecessary bloat",type:"caution",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'panic!("ERR_MSG_HERE"); \n'})})}),"\n",(0,t.jsx)(n.p,{children:"when it could be:"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'env::panic_str("ERR_MSG_HERE");  \n'})})}),"\n",(0,t.jsx)(n.h2,{id:"lower-level-approach",children:"Lower-level approach"}),"\n",(0,t.jsxs)(n.p,{children:["For a ",(0,t.jsx)(n.code,{children:"no_std"})," approach to minimal contracts, observe the following examples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore/tree/1e7c6613f65c23f87adf2c92e3d877f4ffe666ea/runtime/near-test-contracts/tiny-contract-rs",children:"Tiny contract"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ilblackdragon/near-eth-gateway/blob/master/proxy/src/lib.rs",children:"NEAR ETH Gateway"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://youtu.be/Hy4VBSCqnsE",children:"This YouTube video"})," where Eugene demonstrates a fungible token in ",(0,t.jsx)(n.code,{children:"no_std"})," mode. The code for this ",(0,t.jsx)(n.a,{href:"https://github.com/near/core-contracts/pull/88",children:"example lives here"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.a,{href:"https://github.com/austinabell/nesdie/tree/main/examples",children:["Examples using a project called ",(0,t.jsx)(n.code,{children:"nesdie"})]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Note that Aurora has found success using ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/rjson",children:"rjson"})," as a lightweight JSON serialization crate. It has a smaller footprint than ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/serde",children:"serde"})," which is currently packaged with the Rust SDK. See ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/aurora-engine/blob/65a1d11fcd16192cc1bda886c62005c603189a24/src/json.rs#L254",children:"this example of rjson"})," in an Aurora repository, although implementation details will have to be gleaned by the reader and won't be expanded upon here. ",(0,t.jsx)(n.a,{href:"https://github.com/austinabell/nesdie/blob/bb6beb77e32cd54077ac54bf028f262a9dfb6ad0/examples/multisig/src/utils/json/vector.rs#L26-L30",children:"This nesdie example"})," also uses the ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/miniserde",children:"miniserde crate"}),", which is another option to consider for folks who choose to avoid using the Rust SDK."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Information on system calls",type:"note",children:(0,t.jsxs)(r,{children:[(0,t.jsxs)("summary",{children:["Expand to see what's available from ",(0,t.jsx)("code",{children:"sys.rs"})]}),(0,t.jsx)(s.Ey,{language:"rust",start:"",end:"",url:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/environment/sys.rs"})]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(36905),s=r(12466),i=r(16550),l=r(20469),o=r(91980),c=r(67392),d=r(50012);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,o._X)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function f(e){var n,r,a,s,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,u=e.groupId,f=h(e),x=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),g=x[0],b=x[1],j=m({queryString:c,groupId:u}),v=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(n),a=r[0],s=r[1],[a,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],_=w[1],E=function(){var e=null!=v?v:k;return p({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){E&&b(E)}),[E]),{selectedValue:g,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),_(e)}),[y,_,f]),tabValues:f}}var x=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function j(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;r=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;r=null!=(s=o[i])?s:o[o.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(j,Object.assign({},e,n)),(0,b.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,x.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>d,O2:()=>o,SQ:()=>c});r(67294);var t=r(74866),a=r(85162),s=r(95665),i=r.n(s),l=r(85893);function o(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,l.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,l.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,t=(r.children,r.url),a=r.start,s=r.end,i=r.fname;if(e.type===d)return d({url:t,start:a,end:s,language:n,fname:i});return e}(e,r)})),1==n.length?(0,l.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,l.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,l.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,r=e.start,t=e.end,a=e.language,s=e.fname,o=n+"#";return r&&t&&(o+="L"+r+"-L"+t+"#"),(0,l.jsx)(i(),{language:a,fname:s,children:o})}}}]);
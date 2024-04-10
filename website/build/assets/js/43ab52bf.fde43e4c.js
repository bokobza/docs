"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4163],{47047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(85893),s=a(11151);const l={sidebar_position:2},c="Callbacks",o={id:"sdk/rust/cross-contract/callbacks",title:"Callbacks",description:"NEAR Protocol is a sharded, proof-of-stake blockchain that behaves differently than proof-of-work blockchains. When interacting with a native Rust (compiled to Wasm) smart contract, cross-contract calls are asynchronous. Callbacks are used to either get the result of a cross-contract call or tell if a cross-contract call has succeeded or failed.",source:"@site/../docs/sdk/rust/cross-contract/callbacks.md",sourceDirName:"sdk/rust/cross-contract",slug:"/sdk/rust/cross-contract/callbacks",permalink:"/sdk/rust/cross-contract/callbacks",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/cross-contract/callbacks.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1706096802e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Serialization Protocols",permalink:"/sdk/rust/contract-interface/serialization-interface"},next:{title:"Promises: Introduction",permalink:"/sdk/rust/promises/intro"}},r={},i=[{value:"Calculator example",id:"calculator-example",level:2},{value:"Allowlist example",id:"allowlist-example",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"callbacks",children:"Callbacks"}),"\n",(0,n.jsx)(t.p,{children:"NEAR Protocol is a sharded, proof-of-stake blockchain that behaves differently than proof-of-work blockchains. When interacting with a native Rust (compiled to Wasm) smart contract, cross-contract calls are asynchronous. Callbacks are used to either get the result of a cross-contract call or tell if a cross-contract call has succeeded or failed."}),"\n",(0,n.jsxs)(t.p,{children:["There are two techniques to write cross-contract calls: ",(0,n.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/high-level/src/lib.rs",children:"high-level"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/low-level/src/lib.rs",children:"low-level"}),'. This document will mostly focus on the high-level approach. There are two examples in the Rust SDK repository that demonstrate these, as linked above. Note that these examples use cross-contract calls "to itself." We\'ll show two examples demonstrating the high-level approach.']}),"\n",(0,n.jsx)(t.h2,{id:"calculator-example",children:"Calculator example"}),"\n",(0,n.jsxs)(t.p,{children:["There is a helper macro that allows you to make cross-contract calls with the syntax ",(0,n.jsx)(t.code,{children:"#[ext_contract(...)]"}),". It takes a Rust Trait and converts it to a module with static methods. Each of these static methods takes positional arguments defined by the Trait, then the ",(0,n.jsx)(t.code,{children:"receiver_id"}),", the attached deposit and the amount of gas and returns a new ",(0,n.jsx)(t.code,{children:"Promise"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["If the function returns the promise, then it will delegate the return value and status of transaction execution, but if you return a unit type (",(0,n.jsx)(t.code,{children:"()"}),", ",(0,n.jsx)(t.code,{children:"void"}),", ",(0,n.jsx)(t.code,{children:"nothing"}),"), then the ",(0,n.jsx)(t.code,{children:"Promise"})," result will not influence the transaction status."]})}),"\n",(0,n.jsx)(t.p,{children:"For example, let's define a calculator contract Trait:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[ext_contract(ext_calculator)]\ntrait Calculator {\n    fn mult(&self, a: U64, b: U64) -> U128;\n\n    fn sum(&self, a: U128, b: U128) -> U128;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"It's equivalent to the following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'mod ext_calculator {\n    pub fn mult(a: U64, b: U64, receiver_id: &AccountId, deposit: Balance, gas: Gas) -> Promise {\n        Promise::new(receiver_id.clone())\n            .function_call(\n                b"mult",\n                json!({ "a": a, "b": b }).to_string().as_bytes(),\n                deposit,\n                gas,\n            )\n    }\n\n    pub fn sum(a: U128, b: U128, receiver_id: &AccountId, deposit: Balance, gas: Gas) -> Promise {\n        // ...\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Let's assume the calculator is deployed on ",(0,n.jsx)(t.code,{children:"calc.near"}),", we can use the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    pub fn sum_a_b(&mut self, a: U128, b: U128) -> Promise {\n        let calculator_account_id: AccountId = "calc.near".parse().unwrap();\n        // Call the method `sum` on the calculator contract.\n        // Any unused GAS will be attached since the default GAS weight is 1.\n        // Attached deposit is defaulted to 0.\n        ext_calculator::ext(calculator_account_id)\n            .sum(a, b)\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"allowlist-example",children:"Allowlist example"}),"\n",(0,n.jsx)(t.p,{children:"Next we'll look at a simple cross-contract call that is made to an allowlist smart contract, returning whether an account is in the list or not."}),"\n",(0,n.jsxs)(t.p,{children:["The common pattern with cross-contract calls is to call a method on an external smart contract, use ",(0,n.jsx)(t.code,{children:".then"})," syntax to specify a callback, and then retrieve the result or status of the promise. The callback will typically live inside the same, calling smart contract. There's a special macro used for the callback function, which is ",(0,n.jsx)(t.a,{href:"https://docs.rs/near-sdk-core/latest/near_sdk_core/struct.AttrSigInfo.html#structfield.is_private",children:"#[private]"}),". We'll see this pattern in the example below."]}),"\n",(0,n.jsxs)(t.p,{children:["The following example demonstrates two common approaches to callbacks using the high-level cross-contract approach. When writing high-level cross-contract calls, special ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/rust-by-example/trait.html",children:"traits"})," are set up as interfaces for the smart contract being called."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[ext_contract(ext_allowlist)]\npub trait ExtAllowlist {\n    fn is_allowlisted(staking_pool_account_id: AccountId) -> bool;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After creating the trait, we'll show two simple functions that will make a cross-contract call to an allowlist smart contract, asking if the account ",(0,n.jsx)(t.code,{children:"mike.testnet"})," is allowlisted. These methods will both return ",(0,n.jsx)(t.code,{children:"true"})," using different approaches. First we'll look at the methods, then we'll look at the differences in callbacks. Note that for simplicity in this example, the values are hardcoded."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'pub const XCC_GAS: Gas = Gas(20_000_000_000_000);\nfn get_allowlist_contract() -> AccountId {\n    "allowlist.demo.testnet".parse().unwrap()\n}\nfn get_account_to_check() -> AccountId {\n    "mike.testnet".parse().unwrap()\n}\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn xcc_use_promise_result() -> Promise {\n        // Call the method `is_allowlisted` on the allowlisted contract. Static GAS is only attached to the callback.\n        // Any unused GAS will be split between the function call and the callback since both have a default unused GAS weight of 1\n        // Attached deposit is defaulted to 0 for both the function call and the callback.\n        ext_allowlist::ext(get_allowlist_contract())\n            .is_allowlisted(get_account_to_check())\n            .then(\n                Self::ext(env::current_account_id())\n                .with_static_gas(XCC_GAS)\n                .callback_promise_result()\n            )\n    }\n\n    pub fn xcc_use_arg_macro(&mut self) -> Promise {\n        // Call the method `is_allowlisted` on the allowlisted contract. Attach static GAS equal to XCC_GAS only for the callback.\n        // Any unused GAS will be split between the function call and the callback since both have a default unused GAS weight of 1\n        // Attached deposit is defaulted to 0 for both the function call and the callback.\n        ext_allowlist::ext(get_allowlist_contract())\n            .is_allowlisted(get_account_to_check())\n            .then(\n                Self::ext(env::current_account_id())\n                    .with_static_gas(XCC_GAS)\n                    .callback_arg_macro()\n            )\n    }\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The syntax begins with ",(0,n.jsx)(t.code,{children:"ext_allowlist::ext()"})," showing that we're using the trait to call the method on the account passed into ",(0,n.jsx)(t.code,{children:"ext()"}),". We then use ",(0,n.jsx)(t.code,{children:"with_static_gas()"})," to specify a base amount of GAS to attach to the call. We then call the method ",(0,n.jsx)(t.code,{children:"is_allow_listed()"})," and pass in the parameters we'd like to attach."]}),"\n",(0,n.jsx)(t.p,{children:"There are a couple things to note when doing these function calls:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["You can attach a deposit of \u24c3, in yocto\u24c3 to the call by specifying the ",(0,n.jsx)(t.code,{children:".with_attached_deposit()"})," method but it is defaulted to 0 (1 \u24c3 = 1000000000000000000000000 yocto\u24c3, or 1^24 yocto\u24c3)."]}),"\n",(0,n.jsxs)(t.li,{children:["You can attach a static amount of GAS by specifying the ",(0,n.jsx)(t.code,{children:".with_static_gas()"})," method but it is defaulted to 0."]}),"\n",(0,n.jsxs)(t.li,{children:["You can attach an unused GAS weight by specifying the ",(0,n.jsx)(t.code,{children:".with_unused_gas_weight()"})," method but it is defaulted to 1. The unused GAS will be split amongst all the functions in the current execution depending on their weights. If there is only 1 function, any weight above 1 will result in all the unused GAS being attached to that function. If you specify a weight of 0, however, the unused GAS will ",(0,n.jsx)(t.strong,{children:"not"})," be attached to that function. If you have two functions, one with a weight of 3, and one with a weight of 1, the first function will get ",(0,n.jsx)(t.code,{children:"3/4"})," of the unused GAS and the other function will get ",(0,n.jsx)(t.code,{children:"1/4"})," of the unused GAS."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The two methods in the snippet above are very similar, except they will call separate callbacks in the smart contract, ",(0,n.jsx)(t.code,{children:"callback_promise_result"})," and ",(0,n.jsx)(t.code,{children:"callback_arg_macro"}),". These two callbacks show how a value can be obtained."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'#[private]\npub fn callback_arg_macro(#[callback_unwrap] val: bool) -> bool {\n    val\n}\n\n#[private]\npub fn callback_promise_result() -> bool {\n    assert_eq!(env::promise_results_count(), 1, "ERR_TOO_MANY_RESULTS");\n    match env::promise_result(0) {\n        PromiseResult::NotReady => unreachable!(),\n        PromiseResult::Successful(val) => {\n            if let Ok(is_allowlisted) = near_sdk::serde_json::from_slice::<bool>(&val) {\n                is_allowlisted\n            } else {\n                env::panic_str("ERR_WRONG_VAL_RECEIVED")\n            }\n        },\n        PromiseResult::Failed => env::panic_str("ERR_CALL_FAILED"),\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The first method uses a macro on the argument to cast the value into what's desired. In this approach, if the value is unable to be casted, it will panic. If you'd like to gracefully handle the error, you can either use the first approach, or use the ",(0,n.jsx)(t.code,{children:"#[callback_result]"})," macro instead. An example of this can be seen below."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"#[private]\npub fn handle_callbacks(\n    // New pattern, will gracefully handle failed callback results\n    #[callback_result] b: Result<u8, near_sdk::PromiseError>,\n) {\n    if b.is_err() {\n        // ...\n    }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The second method gets the value from the promise result and is essentially the expanded version of the ",(0,n.jsx)(t.code,{children:"#[callback_result]"})," macro."]}),"\n",(0,n.jsxs)(t.p,{children:["And that's it! Understanding how to make a cross-contract call and receive a result is an important part of developing smart contracts on NEAR. Two interesting references for using cross-contract calls can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/FT",children:"fungible token"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/NFT",children:"non-fungible token"})," examples."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>c});var n=a(67294);const s={},l=n.createContext(s);function c(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);
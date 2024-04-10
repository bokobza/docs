"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8438],{24862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var s=t(85893),i=t(11151),o=t(67294),c=t(93293),a=t(91262);function r(e){var n=e.children,i=e.id,r=void 0===i?1:i;e.height;return(0,s.jsx)(a.Z,{fallback:(0,s.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(x){}var i=t(58613),a=i.Widget,l=i.useInitNear,d=(0,o.useState)(e),h=d[0],u=(d[1],l().initNear),p=(0,c.O)().selector;return(0,o.useEffect)((function(){u&&p&&u({networkId:"testnet",selector:p})}),[u,p]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"code_iframe",children:(0,s.jsx)("div",{className:"bootstrap-scope",children:(0,s.jsx)("div",{className:"vm-widget",children:(0,s.jsx)(a,{code:h},r)})})})})}})}const l={id:"gas",title:"Gas (Execution Fees)"},d=void 0,h={id:"concepts/protocol/gas",title:"Gas (Execution Fees)",description:"On every transaction the NEAR network charges a tiny fee known as gas. This fee is a simple mechanism that allows us to:",source:"@site/../docs/1.concepts/protocol/gas.md",sourceDirName:"1.concepts/protocol",slug:"/concepts/protocol/gas",permalink:"/concepts/protocol/gas",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/protocol/gas.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"gas",title:"Gas (Execution Fees)"},sidebar:"concepts",previous:{title:"Anatomy of a Transaction",permalink:"/concepts/protocol/transaction-anatomy"},next:{title:"Lifecycle of a Transaction",permalink:"/concepts/protocol/transaction-execution"}},u={},p=[{value:"Understanding Gas Fees",id:"understanding-gas-fees",level:2},{value:"Gas Units",id:"gas-units",level:3},{value:"Gas Price",id:"gas-price",level:3},{value:"Cost for Common Actions",id:"cost-for-common-actions",level:3},{value:"How Do I Buy Gas?",id:"how-do-i-buy-gas",level:2},{value:"Gas as a Developer Incentive",id:"gas-as-a-developer-incentive",level:2},{value:"Estimating Costs for a Call",id:"estimating-costs-for-a-call",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["On every transaction the NEAR network charges a tiny fee known as ",(0,s.jsx)(n.strong,{children:"gas"}),". This fee is a simple mechanism that allows us to:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prevent"})," bad actors from ",(0,s.jsx)(n.strong,{children:"spamming"})," the network with useless transactions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Burn"})," a minuscule fraction of the ",(0,s.jsx)(n.strong,{children:"token supply"})," on each transaction"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Incentivize developers"})," by giving contracts 30% of the gas they burn while executing"]}),"\n",(0,s.jsxs)(n.li,{children:["Implement a ",(0,s.jsx)(n.strong,{children:"wall time"})," by capping transactions to ",(0,s.jsx)(n.code,{children:"300Tgas"})," (~",(0,s.jsx)(n.code,{children:"300ms"})," of compute time)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Gas in NEAR is computed on ",(0,s.jsx)(n.a,{href:"#gas-units--gas-price",children:(0,s.jsx)(n.strong,{children:"gas units"})})," and charged using $NEAR tokens based on the network's ",(0,s.jsx)(n.a,{href:"#gas-units--gas-price",children:(0,s.jsx)(n.strong,{children:"gas price"})}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Did you know?",type:"tip",children:(0,s.jsxs)(n.p,{children:["In NEAR, attaching extra gas to a transaction does ",(0,s.jsx)(n.strong,{children:"not"})," make it faster. Actions cost a fixed amount of gas, and any extra gas attached is simply sent back to the user"]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"understanding-gas-fees",children:"Understanding Gas Fees"}),"\n",(0,s.jsxs)(n.p,{children:["For every transaction, users get charged a small $NEAR fee which has to be paid ",(0,s.jsx)(n.strong,{children:"upfront"}),". This fee is calculated using deterministic ",(0,s.jsx)(n.strong,{children:"gas units"}),", and transformed into a cost in $NEAR using the network's ",(0,s.jsx)(n.strong,{children:"gas price"}),"."]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"gas-units",children:"Gas Units"}),"\n",(0,s.jsxs)(n.p,{children:["Every action in NEAR costs a fixed amount of ",(0,s.jsx)(n.strong,{children:"gas units"}),", meaning that the same operation will always cost the ",(0,s.jsx)(n.strong,{children:"same amount of gas units"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Gas units were engineered in such a way that they can be translated into compute resources, where ",(0,s.jsx)(n.code,{children:"1Tgas"})," gets you approx. ",(0,s.jsx)(n.code,{children:"1ms"})," of compute time."]}),"\n",(0,s.jsxs)(n.p,{children:["Transactions can use a maximum of ",(0,s.jsx)(n.code,{children:"300Tgas"}),", meaning they should be processed in less than ",(0,s.jsx)(n.code,{children:"300ms"}),", allowing the network to produce a new block approximately ",(0,s.jsx)(n.strong,{children:"every second"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Gas units encapsulate not only compute/CPU time but also bandwidth/network time and storage/IO time"})}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"gas-price",children:"Gas Price"}),"\n",(0,s.jsxs)(n.p,{children:["To determine the actual $NEAR fee, the cost of all actions in the transaction are multiplied by a ",(0,s.jsx)(n.strong,{children:"gas price"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The gas price is ",(0,s.jsx)(n.strong,{children:"recalculated each block"})," based on the network's demand and floors at ",(0,s.jsx)(n.code,{children:"1Tgas = 0.0001\u24c3"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the previous block is ",(0,s.jsx)(n.strong,{children:"more than half full"})," the price goes up by 1%, otherwise it goes down by 1% (until it reaches the floor)."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:" What is the gas price now? "}),(0,s.jsxs)(n.p,{children:["You can query how much a gas unit costs in ",(0,s.jsx)(n.code,{children:"yoctoNEAR"})," (1\u24c3 = ",(0,s.jsx)(n.code,{children:"1e24"})," yocto) through the ",(0,s.jsx)(n.a,{href:"/api/rpc/gas#gas-price",children:(0,s.jsx)(n.code,{children:"RPC"})}),". To convert in ",(0,s.jsx)(n.code,{children:"Tgas"})," per ",(0,s.jsx)(n.code,{children:"NEAR"})," simply divide by ",(0,s.jsx)(n.code,{children:"1e12"}),"."]}),(0,s.jsx)(r,{height:"40px",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const query = fetch('https://rpc.near.org', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    jsonrpc: '2.0',\n    id: 'dontcare',\n    method: 'gas_price',\n    params: [null]\n  })\n})\n\nconst yocto = query.body.result.gas_price\nreturn `Right now, 1 Tgas costs ${Number(yocto) / 1e12}\u24c3`\n"})})})]}),"\n",(0,s.jsx)("hr",{class:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"cost-for-common-actions",children:"Cost for Common Actions"}),"\n",(0,s.jsxs)(n.p,{children:["Knowing that actions have a fixed cost in gas units, we can calculate the cost of common operations at the minimum gas price of ",(0,s.jsx)(n.code,{children:"1Tgas = 0.0001\u24c3"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Action"}),(0,s.jsx)(n.th,{children:"TGas"}),(0,s.jsx)(n.th,{children:"Fee (\u24c3)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Create Account"}),(0,s.jsx)(n.td,{children:"0.42"}),(0,s.jsx)(n.td,{children:"0.000042"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Transfer NEAR"}),(0,s.jsx)(n.td,{children:"0.45"}),(0,s.jsx)(n.td,{children:"0.000045"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Add Full Access Key"}),(0,s.jsx)(n.td,{children:"0.42"}),(0,s.jsx)(n.td,{children:"0.000042"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Delete Key"}),(0,s.jsx)(n.td,{children:"0.41"}),(0,s.jsx)(n.td,{children:"0.000041"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function Call*"}),(0,s.jsx)(n.td,{children:"\u2264 300"}),(0,s.jsx)(n.td,{children:"\u2264 0.03"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Deploying a ",(0,s.jsx)(n.code,{children:"16"}),"kb contract"]}),(0,s.jsx)(n.td,{children:"2.65"}),(0,s.jsx)(n.td,{children:"0.000265"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Deploying a ",(0,s.jsx)(n.code,{children:"X"}),"kb contract**"]}),(0,s.jsxs)(n.td,{children:["0.58 + 0.13",(0,s.jsx)(n.code,{children:"X"})]}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note that the fee is in $NEAR, to obtain the cost in dollars multiply by the current price of $NEAR"})}),"\n",(0,s.jsx)(n.admonition,{title:"Function Calls*",type:"tip",children:(0,s.jsx)(n.p,{children:"The cost of calling a function will depend on how complex the function is, but will be consistent across function calls. Learn more bellow."})}),"\n",(0,s.jsx)(n.admonition,{title:"Deploying a Contract**",type:"tip",children:(0,s.jsxs)(n.p,{children:["Note that this covers the cost of uploading and writing bytes to storage, but does ",(0,s.jsx)(n.strong,{children:"not"})," cover the cost of ",(0,s.jsx)(n.a,{href:"/concepts/protocol/smartcontract#contracts-storage",children:"holding these bytes in storage"})]})}),"\n",(0,s.jsxs)(t,{className:"info",children:[(0,s.jsx)("summary",{children:"Where do these numbers come from?"}),(0,s.jsxs)(n.p,{children:["NEAR is ",(0,s.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/master/core/primitives/res/runtime_configs/parameters.yaml",children:"configured"})," with base costs. An example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"  transfer_cost: {\n    send_sir:     115123062500,\n    send_not_sir: 115123062500,\n    execution:    115123062500\n  },\n  deploy_contract_cost: 184765750000,\n  deploy_contract_cost_per_byte: 64572944\n"})}),(0,s.jsx)(n.p,{children:'The "sir" here stands for "sender is receiver". Yes, these are all identical, but that could change in the future.'}),(0,s.jsxs)(n.p,{children:["When you make a request to transfer funds, NEAR immediately deducts the appropriate ",(0,s.jsx)(n.code,{children:"send"})," amount from your account. Then it creates a ",(0,s.jsxs)(n.a,{href:"/concepts/protocol/transaction-execution",children:[(0,s.jsx)(n.em,{children:"receipt"}),", an internal book-keeping mechanism"]}),". Creating a receipt has its own associated costs:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"  action_receipt_creation_config: {\n    send_sir:     108059500000,\n    send_not_sir: 108059500000,\n    execution:    108059500000\n  }\n"})}),(0,s.jsxs)(n.p,{children:["You can query this value by using the ",(0,s.jsx)(n.a,{href:"/api/rpc/setup#protocol-config",children:(0,s.jsx)(n.code,{children:"protocol_config"})})," RPC endpoint and search for ",(0,s.jsx)(n.code,{children:"action_receipt_creation_config"}),"."]}),(0,s.jsx)(n.p,{children:"The appropriate amount for creating this receipt is also immediately deducted from your account."}),(0,s.jsxs)(n.p,{children:['The "transfer" action won\'t be finalized until the next block. At this point, the ',(0,s.jsx)(n.code,{children:"execution"})," amount for each of these actions will be deducted from your account (something subtle: the gas units on this next block could be multiplied by a gas price that's up to 1% different, since gas price is recalculated on each block). Adding it all up to find the total transaction fee:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    (transfer_cost.send_not_sir  + action_receipt_creation_config.send_not_sir ) * gas_price_at_block_1 +\n    (transfer_cost.execution + action_receipt_creation_config.execution) * gas_price_at_block_2\n"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"how-do-i-buy-gas",children:"How Do I Buy Gas?"}),"\n",(0,s.jsxs)(n.p,{children:["You don't buy gas, instead, the gas fee is automatically removed from your account's balance when the transaction ",(0,s.jsx)(n.a,{href:"/concepts/protocol/transaction-execution#block-1-the-transaction-arrives",children:"is first proccesed"})," based on the action's gas cost and the network's gas price."]}),"\n",(0,s.jsxs)(n.p,{children:["The only exception to this rule is when you make a function call to a contract. In this case, you need to define how many gas units to use, up to a maximum value of ",(0,s.jsx)(n.code,{children:"300Tgas"}),". This amount will be converted to $NEAR using the network's gas price and deducted from your account's balance."]}),"\n",(0,s.jsxs)(n.p,{children:["Since many transactions will take more ",(0,s.jsx)(n.a,{href:"/concepts/protocol/transaction-execution",children:"than 1 block to execute"}),", and the gas price is recalculated on each block and could go up, you will be charged a pessimistic estimate of $NEAR (see details bellow)."]}),"\n",(0,s.jsxs)(n.p,{children:["If the transaction ends up using less gas than the amount deducted, the difference will simply be ",(0,s.jsx)(n.strong,{children:"refunded to your account"}),"."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:" Pessimistic Estimate "}),(0,s.jsx)(n.p,{children:"While actions have a fixed cost in gas units, the gas price might change block to block. Since transactions can take more than 1 block to execute, the gas price might go up during the transaction's execution."}),(0,s.jsx)(n.p,{children:"To avoid the need to recalculate the gas price for each block, the network will charge you upfront a pessimistic estimate of the gas fee."}),(0,s.jsxs)(n.p,{children:["Lets take as an example ",(0,s.jsx)(n.a,{href:"https://testnet.nearblocks.io/txns/JD8Bg4u8kaYeaSsGBqkvhSDCEPgXhtwJRBBPKicCEPMs",children:"this transaction calling a contract method"}),". The transaction was submitted with 10Tgas attached."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"10Tgas would cost 0.001\u24c3 at the price when the transaction was submitted"}),"\n",(0,s.jsxs)(n.li,{children:["The transaction used:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["2.4Tgas to convert the ",(0,s.jsx)(n.a,{href:"/concepts/protocol/transaction-execution#block-1-the-transaction-arrives",children:"transaction into a receipt"}),": 0.00024\u24c3"]}),"\n",(0,s.jsx)(n.li,{children:"3.2Tgas to execute the function in the contract: 0.00032\u24c3"}),"\n",(0,s.jsx)(n.li,{children:"Total: 5.6Tgas or 0.00056\u24c3"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"In the end, the user was returned  0.00104\u24c3"}),"\n"]}),(0,s.jsxs)(n.p,{children:["Since the system returned ",(0,s.jsx)(n.code,{children:"0.00104\u24c3"}),", and the transaction expended ",(0,s.jsx)(n.code,{children:"0.00056\u24c3"}),", the user was charged upfront ",(0,s.jsx)(n.code,{children:"0.0016\u24c3"}),", this is 60% more than what the user expected to pay (0.001\u24c3)."]}),(0,s.jsxs)(n.p,{children:["This 60% up comes from assuming that the price of gas will go up by 1% on each block, and the transaction will take 50 blocks to execute (",(0,s.jsx)(n.code,{children:"1.01**50 ~ 1.64"}),")."]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["In other chains paying a higher gas price to get your transaction processed faster. In NEAR, ",(0,s.jsx)(n.strong,{children:"gas costs are deterministic"}),", and you ",(0,s.jsx)(n.strong,{children:"can't pay extra"}),". Any extra gas attached to a transaction is simply sent back to the user."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"gas-as-a-developer-incentive",children:"Gas as a Developer Incentive"}),"\n",(0,s.jsx)(n.p,{children:"In NEAR, 30% of the gas fees burn while executing a contract go to the contract's accounts. This is a powerful incentive for developers to create and maintain useful contracts."}),"\n",(0,s.jsxs)(n.p,{children:["For example, in ",(0,s.jsx)(n.a,{href:"https://testnet.nearblocks.io/txns/JD8Bg4u8kaYeaSsGBqkvhSDCEPgXhtwJRBBPKicCEPMs",children:"this transaction"})," the user calls a function in the ",(0,s.jsx)(n.code,{children:"guestbook.near-examples.testnet"})," contract."]}),"\n",(0,s.jsx)(n.p,{children:"Executing the function call burned a total of ~0.00032\u24c3, from which 30% goes to the contract's account. This means that the contract's account received 0.000096\u24c3."}),"\n",(0,s.jsx)(n.p,{children:"Notice that the fee comes from the gas burned during the function execution, and not from the total gas used."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"estimating-costs-for-a-call",children:"Estimating Costs for a Call"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["This section will soon be moved from here to the ",(0,s.jsx)(n.a,{href:"/build/smart-contracts/anatomy/environment",children:"build documentation"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"If you developing a smart contract, you might want to estimate how much gas a function call will consume. This is useful to estimate limits for your function and avoid running into out-of-gas errors."}),"\n",(0,s.jsxs)(n.p,{children:["One of the most accurate ways to estimate gas costs is by running your function in ",(0,s.jsx)(n.code,{children:"testnet"}),". To know exactly how much gas a specific part of your function uses, you can use the ",(0,s.jsx)(n.code,{children:"used_gas"})," method from our SDK."]}),"\n",(0,s.jsxs)(n.p,{children:["Another option is to use ",(0,s.jsx)(n.code,{children:"Sandbox Testing"})," (available in ",(0,s.jsx)(n.a,{href:"https://github.com/near/workspaces-rs/tree/main/examples/src",children:"Rust"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/near/workspaces-js",children:"JavaScript"}),"), which simulates the NEAR network. There you can access the gas burnt after each function call."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, you can obtain gas cost estimates for a given function call using ",(0,s.jsx)(n.code,{children:"api.gasbuddy.tech"}),". This API is experimental and may be removed in the future. One can obtain a gas cost estimate for a given function call by sending a POST request to ",(0,s.jsx)(n.code,{children:"https://api.gasbuddy.tech/profile"})," with the following JSON body:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "contract_id": "<your-contract-account-id>",\n  "method": "<your-contract-method-name>",\n  "args": {\n    "arg1": "value1",\n    "arg2": "value2"\n  }\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var s=t(67294);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
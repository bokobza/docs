"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1469],{92791:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=o(85893),r=o(11151);const a={},i=void 0,c={id:"build/primitives/dao/smart-contract/vote-for-proposal",title:"vote-for-proposal",description:"",source:"@site/../docs/2.build/5.primitives/dao/smart-contract/vote-for-proposal.md",sourceDirName:"2.build/5.primitives/dao/smart-contract",slug:"/build/primitives/dao/smart-contract/vote-for-proposal",permalink:"/build/primitives/dao/smart-contract/vote-for-proposal",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/smart-contract/vote-for-proposal.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},s={},l=[];function p(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:'// Set of possible action to take\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub enum Action {\n  // Action to add proposal. Used internally.\n  AddProposal,\n  // Action to remove given proposal. Used for immediate deletion in special cases.\n  RemoveProposal,\n  // Vote to approve given proposal or bounty.\n  VoteApprove,\n  // Vote to reject given proposal or bounty.\n  VoteReject,\n  // Vote to remove given proposal or bounty (because it\'s spam).\n  VoteRemove,\n  // Finalize proposal, called when it\'s expired to return the funds\n  // (or in the future can be used for early proposal closure).\n  Finalize,\n  // Move a proposal to the hub to shift into another DAO.\n  MoveToHub,\n}\n\n// Validator interface, for cross-contract calls\n#[ext_contract(ext_dao_contract)]\ntrait ExternalDaoContract {\n  fn act_proposal(&mut self, id: u64, action: Action, memo: Option<String>) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  #[payable]\n  pub fn act_proposal(&mut self, id: u64, action: Action, memo: Option<String>) -> Promise {\n    let promise = ext_dao_contract::ext(self.dao_contract.clone())\n      .with_attached_deposit(env::attached_deposit())\n      .with_static_gas(Gas(10*TGAS))\n      .act_proposal(id, action, memo);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .external_common_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_common_callback(&self, #[callback_result] call_result: Result<(), PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract")\n    }\n  }\n}\n'})})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>i});var n=o(67294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6242],{7570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(85893),r=n(11151),u=n(74866),i=n(85162);const s={id:"state-change",sidebar_position:9,sidebar_label:"StateChange"},c="StateChange Structure",o={id:"build/data-infrastructure/lake-data-structures/state-change",title:"StateChange Structure",description:"Definition",source:"@site/../docs/2.build/6.data-infrastructure/lake-data-structures/state_change.mdx",sourceDirName:"2.build/6.data-infrastructure/lake-data-structures",slug:"/build/data-infrastructure/lake-data-structures/state-change",permalink:"/build/data-infrastructure/lake-data-structures/state-change",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-data-structures/state_change.mdx",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,sidebarPosition:9,frontMatter:{id:"state-change",sidebar_position:9,sidebar_label:"StateChange"},sidebar:"build",previous:{title:"ExecutionOutcome",permalink:"/build/data-infrastructure/lake-data-structures/execution-outcome"}},l={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>StateChangeWithCauseView</code>",id:"statechangewithcauseview",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"statechange-structure",children:[(0,a.jsx)(t.code,{children:"StateChange"})," Structure"]}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsxs)(t.p,{children:["This entitiy from ",(0,a.jsx)(t.code,{children:"nearcore"})," describes how account's state has changed and the reason"]}),"\n",(0,a.jsx)(t.h2,{id:"statechangewithcauseview",children:(0,a.jsx)(t.code,{children:"StateChangeWithCauseView"})}),"\n",(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(i.Z,{value:"rust",label:"Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:'pub struct StateChangeWithCauseView {\n    pub cause: StateChangeCauseView,\n    #[serde(flatten)]\n    pub value: StateChangeValueView,\n}\n\npub enum StateChangeCauseView {\n    NotWritableToDisk,\n    InitialState,\n    TransactionProcessing { tx_hash: CryptoHash },\n    ActionReceiptProcessingStarted { receipt_hash: CryptoHash },\n    ActionReceiptGasReward { receipt_hash: CryptoHash },\n    ReceiptProcessing { receipt_hash: CryptoHash },\n    PostponedReceipt { receipt_hash: CryptoHash },\n    UpdatedDelayedReceipts,\n    ValidatorAccountsUpdate,\n    Migration,\n    Resharding,\n}\n\npub enum StateChangeValueView {\n    AccountUpdate {\n        account_id: AccountId,\n        #[serde(flatten)]\n        account: AccountView,\n    },\n    AccountDeletion {\n        account_id: AccountId,\n    },\n    AccessKeyUpdate {\n        account_id: AccountId,\n        public_key: PublicKey,\n        access_key: AccessKeyView,\n    },\n    AccessKeyDeletion {\n        account_id: AccountId,\n        public_key: PublicKey,\n    },\n    DataUpdate {\n        account_id: AccountId,\n        #[serde(rename = "key_base64", with = "base64_format")]\n        key: StoreKey,\n        #[serde(rename = "value_base64", with = "base64_format")]\n        value: StoreValue,\n    },\n    DataDeletion {\n        account_id: AccountId,\n        #[serde(rename = "key_base64", with = "base64_format")]\n        key: StoreKey,\n    },\n    ContractCodeUpdate {\n        account_id: AccountId,\n        #[serde(rename = "code_base64", with = "base64_format")]\n        code: Vec<u8>,\n    },\n    ContractCodeDeletion {\n        account_id: AccountId,\n    },\n}\n'})})}),(0,a.jsx)(i.Z,{value:"typescript",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",metastring:"links=1",children:"export type StateChange = {\n  cause: {\n    receiptHash: string;\n    type: string;\n  };\n  change: {\n    accountId: string;\n    keyBase64: string;\n    valueBase64: string;\n  },\n  type: string;\n};\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var u=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(67294),r=n(36905),u=n(12466),i=n(16550),s=n(20469),c=n(91980),o=n(67392),l=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,u=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,c._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(u.location.search);t.set(s,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[s,u])]}function b(e){var t,n,r,u,i=e.defaultValue,c=e.queryString,o=void 0!==c&&c,d=e.groupId,b=h(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:b})})),g=v[0],m=v[1],y=f({queryString:o,groupId:d}),w=y[0],x=y[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,l.Nk)(t),r=n[0],u=n[1],[r,(0,a.useCallback)((function(e){t&&u.set(e)}),[t,u])]),_=C[0],k=C[1],S=function(){var e=null!=w?w:_;return p({value:e,tabValues:b})?e:null}();return(0,s.Z)((function(){S&&m(S)}),[S]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);m(e),x(e),k(e)}),[x,k,b]),tabValues:b}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function y(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],o=(0,u.o5)().blockElementScrollPositionUntilNextRender,l=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==a&&(o(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;n=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var u,i=c.indexOf(e.currentTarget)-1;n=null!=(u=c[i])?u:c[c.length-1]}null==(t=n)||t.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,u=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:l},u,{className:(0,r.Z)("tabs__item",g.tabItem,null==u?void 0:u.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,r=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=u.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function x(e){var t=b(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(y,Object.assign({},e,t)),(0,m.jsx)(w,Object.assign({},e,t))]})}function C(e){var t=(0,v.Z)();return(0,m.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const r={},u=a.createContext(r);function i(e){const t=a.useContext(u);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(u.Provider,{value:t},e.children)}}}]);
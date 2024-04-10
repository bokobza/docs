"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8501],{17374:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(85893),a=t(11151),u=t(74866),i=t(85162);const s={sidebar_position:3,sidebar_label:"Chunk"},l="Chunk Structure",c={id:"build/data-infrastructure/lake-data-structures/chunk",title:"Chunk Structure",description:"Definition",source:"@site/../docs/2.build/6.data-infrastructure/lake-data-structures/chunk.mdx",sourceDirName:"2.build/6.data-infrastructure/lake-data-structures",slug:"/build/data-infrastructure/lake-data-structures/chunk",permalink:"/ko/build/data-infrastructure/lake-data-structures/chunk",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-data-structures/chunk.mdx",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Chunk"},sidebar:"build",previous:{title:"Block",permalink:"/ko/build/data-infrastructure/lake-data-structures/block"},next:{title:"Shard",permalink:"/ko/build/data-infrastructure/lake-data-structures/shard"}},o={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>IndexerChunkView</code>",id:"indexerchunkview",level:2},{value:"<code>ChunkHeaderView</code>",id:"chunkheaderview",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"chunk-structure",children:[(0,n.jsx)(r.code,{children:"Chunk"})," Structure"]}),"\n",(0,n.jsx)(r.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Chunk"})," of a ",(0,n.jsx)(r.a,{href:"/ko/build/data-infrastructure/lake-data-structures/block",children:(0,n.jsx)(r.code,{children:"Block"})})," is a part of a ",(0,n.jsx)(r.a,{href:"/ko/build/data-infrastructure/lake-data-structures/block",children:(0,n.jsx)(r.code,{children:"Block"})})," from a ",(0,n.jsx)(r.a,{href:"/ko/build/data-infrastructure/lake-data-structures/shard",children:"Shard"}),". The collection of Chunks of the Block forms the NEAR Protocol ",(0,n.jsx)(r.a,{href:"/ko/build/data-infrastructure/lake-data-structures/block",children:(0,n.jsx)(r.code,{children:"Block"})})]}),"\n",(0,n.jsx)(r.p,{children:"Chunk contains all the structures that make the Block:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/ko/build/data-infrastructure/lake-data-structures/transaction",children:"Transactions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/ko/build/data-infrastructure/lake-data-structures/receipt",children:"Receipts"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#chunkheaderview",children:"ChunkHeader"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"indexerchunkview",children:(0,n.jsx)(r.code,{children:"IndexerChunkView"})}),"\n",(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(i.Z,{value:"rust",label:"Rust",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",metastring:"links=1",children:"pub struct ChunkView {\n    pub author: AccountId,\n    pub header: ChunkHeaderView,\n    pub transactions: Vec<IndexerTransactionWithOutcome>,\n    pub receipts: Vec<ReceiptView>,\n}\n"})})}),(0,n.jsx)(i.Z,{value:"typescript",label:"TypeScript",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"links=1",children:"export interface Chunk {\n  author: string;\n  header: ChunkHeader;\n  transactions: IndexerTransactionWithOutcome[];\n  receipts: Receipt[],\n}\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"chunkheaderview",children:(0,n.jsx)(r.code,{children:"ChunkHeaderView"})}),"\n",(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(i.Z,{value:"rust",label:"value",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",metastring:"links=1",children:'pub struct ChunkHeaderView {\n    pub chunk_hash: CryptoHash,\n    pub prev_block_hash: CryptoHash,\n    pub outcome_root: CryptoHash,\n    pub prev_state_root: StateRoot,\n    pub encoded_merkle_root: CryptoHash,\n    pub encoded_length: u64,\n    pub height_created: BlockHeight,\n    pub height_included: BlockHeight,\n    pub shard_id: ShardId,\n    pub gas_used: Gas,\n    pub gas_limit: Gas,\n    /// TODO(2271): deprecated.\n    #[serde(with = "u128_dec_format")]\n    pub rent_paid: Balance,\n    /// TODO(2271): deprecated.\n    #[serde(with = "u128_dec_format")]\n    pub validator_reward: Balance,\n    #[serde(with = "u128_dec_format")]\n    pub balance_burnt: Balance,\n    pub outgoing_receipts_root: CryptoHash,\n    pub tx_root: CryptoHash,\n    pub validator_proposals: Vec<ValidatorStakeView>,\n    pub signature: Signature,\n}\n'})})}),(0,n.jsx)(i.Z,{value:"typescript",value:"TypeScript",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:"links=1",children:"export interface ChunkHeader {\n  balanceBurnt: number;\n  chunkHash: string;\n  encodedLength: number;\n  encodedMerkleRoot: string;\n  gasLimit: number;\n  gasUsed: number;\n  heightCreated: number;\n  heightIncluded: number;\n  outcomeRoot: string;\n  outgoingReceiptsRoot: string;\n  prevBlockHash: string;\n  prevStateRoot: string;\n  rentPaid: string;\n  shardId: number;\n  signature: string;\n  txRoot: string;\n  validatorProposals: ValidatorProposal[];\n  validatorReward: string;\n};\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>i});t(67294);var n=t(36905);const a={tabItem:"tabItem_Ymn6"};var u=t(85893);function i(e){var r=e.children,t=e.hidden,i=e.className;return(0,u.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(67294),a=t(36905),u=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),o=t(50012);function d(e){var r,t;return null!=(r=null==(t=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?r:[]}function h(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(t);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function b(e){var r=e.queryString,t=void 0!==r&&r,a=e.groupId,u=(0,i.k6)(),s=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((function(e){if(s){var r=new URLSearchParams(u.location.search);r.set(s,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[s,u])]}function f(e){var r,t,a,u,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),v=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),k=v[0],m=v[1],g=b({queryString:c,groupId:d}),x=g[0],j=g[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,o.Nk)(r),a=t[0],u=t[1],[a,(0,n.useCallback)((function(e){r&&u.set(e)}),[r,u])]),_=w[0],C=w[1],y=function(){var e=null!=x?x:_;return p({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){y&&m(y)}),[y]),{selectedValue:k,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);m(e),j(e),C(e)}),[j,C,f]),tabValues:f}}var v=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function g(e){var r=e.className,t=e.block,n=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],c=(0,u.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var r=e.currentTarget,t=l.indexOf(r),a=s[t].value;a!==n&&(c(r),i(a))},d=function(e){var r,t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var n,a=l.indexOf(e.currentTarget)+1;t=null!=(n=l[a])?n:l[0];break;case"ArrowLeft":var u,i=l.indexOf(e.currentTarget)-1;t=null!=(u=l[i])?u:l[l.length-1]}null==(r=t)||r.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:s.map((function(e){var r=e.value,t=e.label,u=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:function(e){return l.push(e)},onKeyDown:d,onClick:o},u,{className:(0,a.Z)("tabs__item",k.tabItem,null==u?void 0:u.className,{"tabs__item--active":n===r}),children:null!=t?t:r}),r)}))})}function x(e){var r=e.lazy,t=e.children,a=e.selectedValue,u=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){var i=u.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:u.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function j(e){var r=f(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",k.tabList),children:[(0,m.jsx)(g,Object.assign({},e,r)),(0,m.jsx)(x,Object.assign({},e,r))]})}function w(e){var r=(0,v.Z)();return(0,m.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>i});var n=t(67294);const a={},u=n.createContext(a);function i(e){const r=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(u.Provider,{value:r},e.children)}}}]);
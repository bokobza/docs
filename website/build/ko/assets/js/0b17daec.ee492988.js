"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2497],{2226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var r=t(85893),a=t(11151),i=t(74866),o=t(85162);const u={},s=void 0,l={id:"build/primitives/nft/bos/mint",title:"mint",description:"In order to use nft_mint method of the x.paras.near contract you have to be a creator of a particular token series.",source:"@site/../docs/2.build/5.primitives/nft/bos/mint.md",sourceDirName:"2.build/5.primitives/nft/bos",slug:"/build/primitives/nft/bos/mint",permalink:"/ko/build/primitives/nft/bos/mint",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/nft/bos/mint.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},d=[];function f(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(i.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsx)(o.Z,{value:"NFT Primitive",label:"Reference",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const tokenData = Near.call(\n  "nft.primitives.near",\n  "nft_mint",\n  {\n    token_id: "1",\n    receiver_id: "bob.near", \n    token_metadata: {\n      title: "NFT Primitive Token",\n      description: "Awesome NFT Primitive Token",\n      media: "string", // URL to associated media, preferably to decentralized, content-addressed storage\n    }\n  },\n  undefined,\n  10000000000000000000000, // Depends on your NFT metadata\n);\n'})})}),(0,r.jsxs)(o.Z,{value:"Paras",label:"Paras",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const tokenData = Near.call(\n  "x.paras.near",\n  "nft_mint",\n  {\n    token_series_id: "490641",\n    receiver_id: "bob.near",\n  },\n  undefined,\n  10000000000000000000000 // Depends on your NFT metadata\n);\n'})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In order to use ",(0,r.jsx)(n.code,{children:"nft_mint"})," method of the ",(0,r.jsx)(n.code,{children:"x.paras.near"})," contract you have to be a creator of a particular token series."]})})]}),(0,r.jsxs)(o.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const tokenData = Near.call(\n  "thomasettorreiv.mintbase1.near",\n  "nft_batch_mint",\n  {\n    num_to_mint: 1,\n    owner_id: "bob.near",\n    metadata: {},\n  },\n  undefined,\n  10000000000000000000000\n);\n'})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In order to use ",(0,r.jsx)(n.code,{children:"nft_batch_mint"})," method of Mintbase store contract your account have to be a in the contract minters list."]})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),i=t(12466),o=t(16550),u=t(20469),s=t(91980),l=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),u=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s._X)(u),(0,r.useCallback)((function(e){if(u){var n=new URLSearchParams(i.location.search);n.set(u,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[u,i])]}function v(e){var n,t,a,i,o=e.defaultValue,s=e.queryString,l=void 0!==s&&s,d=e.groupId,v=f(e),p=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:v})})),h=p[0],g=p[1],x=b({queryString:l,groupId:d}),j=x[0],y=x[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),w=k[0],_=k[1],N=function(){var e=null!=j?j:w;return m({value:e,tabValues:v})?e:null}();return(0,u.Z)((function(){N&&g(N)}),[N]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),_(e)}),[y,_,v]),tabValues:v}}var p=t(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,u=e.tabValues,s=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=s.indexOf(n),a=u[t].value;a!==r&&(l(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;t=null!=(i=s[o])?i:s[s.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:u.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function k(e){var n=(0,p.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>o});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
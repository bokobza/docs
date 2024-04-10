"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6230],{35454:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(85893),a=r(11151),l=r(74866),i=r(85162);const s={},u=void 0,o={id:"build/primitives/nft/bos/list-for-sale",title:"list-for-sale",description:"The method nftapprove will call nfton_approve in marketplace.paras.near.",source:"@site/../docs/2.build/5.primitives/nft/bos/list-for-sale.md",sourceDirName:"2.build/5.primitives/nft/bos",slug:"/build/primitives/nft/bos/list-for-sale",permalink:"/vi/build/primitives/nft/bos/list-for-sale",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/nft/bos/list-for-sale.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{}},c={},d=[];function f(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(l.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,t.jsxs)(i.Z,{value:"Paras",label:"Paras",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Near.call(\n  "marketplace.paras.near",\n  "storage_deposit",\n  {\n    receiver_id: "bob.near"\n  },\n  undefined,\n  9390000000000000000\n);\n\nNear.call(\n  "nft.primitives.near",\n  "nft_approve",\n  {\n    token_id: "1e95238d266e5497d735eb30",\n    account_id: "marketplace.paras.near",\n    msg: {\n      price: "200000000000000000000000",\n      market_type: "sale",\n      ft_token_id: "near"\n    }\n  }\n);\n'})}),(0,t.jsxs)(n.p,{children:["The method ",(0,t.jsx)(n.code,{children:"nft_approve"})," will call ",(0,t.jsx)(n.code,{children:"nft_on_approve"})," in ",(0,t.jsx)(n.code,{children:"marketplace.paras.near"}),"."]})]}),(0,t.jsxs)(i.Z,{value:"Mintbase",label:"Mintbase",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'Near.call(\n  "simple.market.mintbase1.near",\n  "deposit_storage",\n  {\n    autotransfer: true\n  },\n  undefined,\n  9390000000000000000\n);\n\nNear.call(\n  "nft.primitives.near",\n  "nft_approve",\n  {\n    token_id: "3c46b76cbd48e65f2fc88473",\n    account_id: "simple.market.mintbase1.near",\n    msg: {\n      price: "200000000000000000000000"\n    }\n  }\n);\n'})}),(0,t.jsxs)(n.p,{children:["The method ",(0,t.jsx)(n.code,{children:"nft_approve"})," will call ",(0,t.jsx)(n.code,{children:"nft_on_approve"})," in ",(0,t.jsx)(n.code,{children:"simple.market.mintbase1.near"}),"."]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),a=r(36905),l=r(12466),i=r(16550),s=r(20469),u=r(91980),o=r(67392),c=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function f(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,l=(0,i.k6)(),s=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,u._X)(s),(0,t.useCallback)((function(e){if(s){var n=new URLSearchParams(l.location.search);n.set(s,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[s,l])]}function b(e){var n,r,a,l,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,d=e.groupId,b=f(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:b})})),h=m[0],g=m[1],j=v({queryString:o,groupId:d}),x=j[0],k=j[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),a=r[0],l=r[1],[a,(0,t.useCallback)((function(e){n&&l.set(e)}),[n,l])]),_=y[0],w=y[1],I=function(){var e=null!=x?x:_;return p({value:e,tabValues:b})?e:null}();return(0,s.Z)((function(){I&&g(I)}),[I]),{selectedValue:h,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),w(e)}),[k,w,b]),tabValues:b}}var m=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function j(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,s=e.tabValues,u=[],o=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=u.indexOf(n),a=s[r].value;a!==t&&(o(n),i(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=u.indexOf(e.currentTarget)+1;r=null!=(t=u[a])?t:u[0];break;case"ArrowLeft":var l,i=u.indexOf(e.currentTarget)-1;r=null!=(l=u[i])?l:u[u.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((function(e){var n=e.value,r=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},l,{className:(0,a.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function x(e){var n=e.lazy,r=e.children,a=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=l.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function k(e){var n=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(j,Object.assign({},e,n)),(0,g.jsx)(x,Object.assign({},e,n))]})}function y(e){var n=(0,m.Z)();return(0,g.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var t=r(67294);const a={},l=t.createContext(a);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
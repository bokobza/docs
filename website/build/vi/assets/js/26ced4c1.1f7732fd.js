"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9500],{200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(85893),a=t(11151);t(77229),t(2154),t(74866),t(85162);const l={id:"integrate-components",title:"Integrating Components"},s=void 0,i={id:"build/web3-apps/integrate-components",title:"Integrating Components",description:"To integrate Components to your frontend, you will leverage two tools:",source:"@site/../docs/2.build/4.web3-apps/integrate-components.md",sourceDirName:"2.build/4.web3-apps",slug:"/build/web3-apps/integrate-components",permalink:"/vi/build/web3-apps/integrate-components",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/4.web3-apps/integrate-components.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"integrate-components",title:"Integrating Components"},sidebar:"build",previous:{title:"Integrating Contracts",permalink:"/vi/build/web3-apps/integrate-contracts"},next:{title:"Authenticate NEAR Users",permalink:"/vi/build/web3-apps/backend/"}},o={},c=[{value:"Adding the VM &amp; Wallet Selector",id:"adding-the-vm--wallet-selector",level:2},{value:"Setup the VM",id:"setup-the-vm",level:2},{value:"Setup the Wallet Selector",id:"setup-the-wallet-selector",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To integrate ",(0,r.jsx)(n.a,{href:"/vi/build/near-components/what-is",children:"Components"})," to your frontend, you will leverage two tools:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Wallet Selector"}),": Enables the user to select their preferred NEAR wallet in your dApp."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NEAR VM"}),": A package that can retrieve the component's code from the blockchain and execute it in the browser."]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:"Using those tools you will implement the following flow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Setup"})," the VM."]}),"\n",(0,r.jsxs)(n.li,{children:["Render components using the ",(0,r.jsx)(n.code,{children:"Widget"})," component in the VM."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Setup"})," a wallet selector so users can interact with the Menu."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"adding-the-vm--wallet-selector",children:"Adding the VM & Wallet Selector"}),"\n",(0,r.jsxs)(n.p,{children:["To use the ",(0,r.jsx)(n.code,{children:"VM"})," and the ",(0,r.jsx)(n.code,{children:"wallet-selector"}),", you must add them to your project first."]}),"\n",(0,r.jsxs)(n.p,{children:["The wallet selector has multiple wallet packages to select from. ",(0,r.jsx)(n.a,{href:"https://github.com/near/wallet-selector#installation-and-usage",children:"Check their website"})," for more information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install \\\n  @near-wallet-selector/core \\\n  @near-wallet-selector/my-near-wallet \\\n  @near-wallet-selector/modal-ui\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, manually add the ",(0,r.jsx)(n.code,{children:"VM"})," to your ",(0,r.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'"dependencies": {\n  ...\n  "near-social-vm": "github:NearSocial/VM#2.5.5"\n  ...\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Check the latest released version for the VM ",(0,r.jsx)(n.a,{href:"https://github.com/NearSocial/VM/releases",children:"here"})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"setup-the-vm",children:"Setup the VM"}),"\n",(0,r.jsxs)(n.p,{children:["To render components, you need to import the ",(0,r.jsx)(n.code,{children:"useInitNear"})," hook from the ",(0,r.jsx)(n.code,{children:"near-social-vm"})," package, as well as the ",(0,r.jsx)(n.code,{children:"Widget"})," component."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { useInitNear, Widget } from 'near-social-vm';\nimport { useEffect } from 'react';\n\nexport default function Component({ src }) {\n  const { initNear } = useInitNear();\n\n  useEffect(() => {\n    initNear && initNear({ networkId: 'testnet', selector: null });\n  }, [initNear]);\n\n  return <Widget src={src} />;\n}\n\nreturn <Component src=\"influencer.testnet/widget/Greeter\" props={{name: \"Anna\", amount: 2}} />\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Notice that the VM is inherently linked to ",(0,r.jsx)(n.code,{children:"React"}),", so you will need to use a reactive framework to take full advantage of the VM."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"setup-the-wallet-selector",children:"Setup the Wallet Selector"}),"\n",(0,r.jsx)(n.p,{children:"While the VM allows you to render components, you need to set up a wallet selector to allow users to interact with the components."}),"\n",(0,r.jsxs)(n.p,{children:["To instantiate a ",(0,r.jsx)(n.code,{children:"Wallet Selector"}),", simply import all the wallets you want your users to have access to, and the setup method from the ",(0,r.jsx)(n.code,{children:"near-wallet-selector"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import '@near-wallet-selector/modal-ui/styles.css';\nimport { setupModal } from '@near-wallet-selector/modal-ui';\nimport { setupWalletSelector } from '@near-wallet-selector/core';\nimport { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';\n\nconst selector = setupWalletSelector({\n  network: 'testnet,\n  modules: [setupMyNearWallet()],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then use it during the call to ",(0,r.jsx)(n.code,{children:"initNear"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"  useEffect(() => {\n    initNear && initNear({ networkId: 'testnet', selector: selector });\n  }, [initNear]);\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To learn more about the wallet selector and how it can be used, please see the ",(0,r.jsx)(n.a,{href:"/vi/build/web3-apps/integrate-contracts",children:"integrating NEAR to your WebApp tutorial"})]})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),l=t(12466),s=t(16550),i=t(20469),o=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(l.location.search);n.set(i,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[i,l])]}function f(e){var n,t,a,l,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:f})})),v=g[0],b=g[1],j=m({queryString:c,groupId:d}),x=j[0],w=j[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),N=y[0],k=y[1],V=function(){var e=null!=x?x:N;return p({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){V&&b(V)}),[V]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),w(e),k(e)}),[w,k,f]),tabValues:f}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,i=e.tabValues,o=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var l,s=o.indexOf(e.currentTarget)-1;t=null!=(l=o[s])?l:o[o.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},l,{className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=l.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(j,Object.assign({},e,n)),(0,b.jsx)(x,Object.assign({},e,n))]})}function y(e){var n=(0,g.Z)();return(0,b.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>u,O2:()=>o,SQ:()=>c});t(67294);var r=t(74866),a=t(85162),l=t(95665),s=t.n(l),i=t(85893);function o(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,l=t.end,s=t.fname;if(e.type===u)return u({url:r,start:a,end:l,language:n,fname:s});return e}(e,t)})),1==n.length?(0,i.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,t=e.start,r=e.end,a=e.language,l=e.fname,o=n+"#";return t&&r&&(o+="L"+t+"-L"+r+"#"),(0,i.jsx)(s(),{language:a,fname:l,children:o})}},2154:(e,n,t)=>{t.d(n,{W:()=>i});var r=t(67294),a=t(93293),l=t(91262),s=t(85893);function i(e){var n=e.children,i=e.id,o=void 0===i?1:i,c=e.height,u=void 0===c?"160px":c;return(0,s.jsx)(l.Z,{fallback:(0,s.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(v){}var l=t(58613),i=l.Widget,c=l.useInitNear,d=t(2302).ZP,h=(0,r.useState)(e),p=h[0],m=h[1],f=c().initNear,g=(0,a.O)().selector;return(0,r.useEffect)((function(){f&&g&&f({networkId:"testnet",selector:g})}),[f,g]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"monaco",children:(0,s.jsx)(d,{height:u,value:p,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return m(e)}})}),(0,s.jsx)("div",{className:"code_iframe",children:(0,s.jsx)("div",{className:"bootstrap-scope",children:(0,s.jsx)("div",{className:"vm-widget",children:(0,s.jsx)(i,{code:p},o)})})}),n[1]]})}})}}}]);
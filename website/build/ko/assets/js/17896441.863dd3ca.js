"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{78945:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(67294),s=n(10833),i=n(4077),r=n(85893),l=a.createContext(null);function o(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:n,children:t})}function d(){var e=(0,a.useContext)(l);if(null===e)throw new i.i6("DocProvider");return e}function c(){var e,t=d(),n=t.metadata,a=t.frontMatter,i=t.assets;return(0,r.jsx)(s.d,{title:n.title,description:n.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=n(36905),m=n(87524),v=n(95999),h=n(32244);function b(e){var t=e.previous,n=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(h.Z,Object.assign({},t,{subLabel:(0,r.jsx)(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,r.jsx)(h.Z,Object.assign({},n,{subLabel:(0,r.jsx)(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function x(){var e=d().metadata;return(0,r.jsx)(b,{previous:e.previous,next:e.next})}var p=n(52263),f=n(33692),g=n(80143),j=n(35281),L=n(60373),C=n(74477);var N={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,r.jsx)(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,r.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){var t=N[e.versionMetadata.banner];return(0,r.jsx)(t,Object.assign({},e))}function Z(e){var t=e.versionLabel,n=e.to,a=e.onClick;return(0,r.jsx)(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(f.Z,{to:n,onClick:a,children:(0,r.jsx)(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){var t,n=e.className,a=e.versionMetadata,s=(0,p.Z)().siteConfig.title,i=(0,g.gA)({failfast:!0}).pluginId,l=(0,L.J)(i).savePreferredVersionName,o=(0,g.Jo)(i),d=o.latestDocSuggestion,c=o.latestVersionSuggestion,m=null!=d?d:(t=c).docs.find((function(e){return e.id===t.mainDocId}));return(0,r.jsxs)("div",{className:(0,u.Z)(n,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(k,{siteTitle:s,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(Z,{versionLabel:c.label,to:m.path,onClick:function(){return l(c.name)}})})]})}function T(e){var t=e.className,n=(0,C.E)();return n.banner?(0,r.jsx)(_,{className:t,versionMetadata:n}):null}function H(e){var t=e.className,n=(0,C.E)();return n.badge?(0,r.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function U(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return(0,r.jsx)(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,r.jsx)("b",{children:(0,r.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function y(e){var t=e.lastUpdatedBy;return(0,r.jsx)(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,r.jsx)("b",{children:t})},children:" by {user}"})}function A(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,a=e.lastUpdatedBy;return(0,r.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,r.jsx)(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,r.jsx)(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:a?(0,r.jsx)(y,{lastUpdatedBy:a}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var w=n(84881),M=n(86233);const I={lastUpdated:"lastUpdated_vwxv"};function O(e){return(0,r.jsx)("div",{className:(0,u.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(M.Z,Object.assign({},e))})})}function B(e){var t=e.editUrl,n=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return(0,r.jsxs)("div",{className:(0,u.Z)(j.k.docs.docFooterEditMetaRow,"row"),children:[(0,r.jsx)("div",{className:"col",children:t&&(0,r.jsx)(w.Z,{editUrl:t})}),(0,r.jsx)("div",{className:(0,u.Z)("col",I.lastUpdated),children:(n||a)&&(0,r.jsx)(A,{lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a})})]})}function E(){var e=d().metadata,t=e.editUrl,n=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,s=e.lastUpdatedBy,i=e.tags,l=i.length>0,o=!!(t||n||s);return l||o?(0,r.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,r.jsx)(O,{tags:i}),o&&(0,r.jsx)(B,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a})]}):null}var S=n(86043),V=n(93743),P=n(63366);const D={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var R=["collapsed"];function F(e){var t=e.collapsed,n=(0,P.Z)(e,R);return(0,r.jsx)("button",Object.assign({type:"button"},n,{className:(0,u.Z)("clean-btn",D.tocCollapsibleButton,!t&&D.tocCollapsibleButtonExpanded,n.className),children:(0,r.jsx)(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const z={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){var t=e.toc,n=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,S.u)({initialState:!0}),l=i.collapsed,o=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.Z)(z.tocCollapsible,!l&&z.tocCollapsibleExpanded,n),children:[(0,r.jsx)(F,{collapsed:l,onClick:o}),(0,r.jsx)(S.z,{lazy:!0,className:z.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(V.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const G={tocMobile:"tocMobile_ITEo"};function J(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(q,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,G.tocMobile)})}var Y=n(39407);function K(){var e=d(),t=e.toc,n=e.frontMatter;return(0,r.jsx)(Y.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var Q=n(92503),W=n(10700);function X(e){var t,n,a,s,i=e.children,l=(t=d(),n=t.metadata,a=t.frontMatter,s=t.contentTitle,a.hide_title||void 0!==s?null:n.title);return(0,r.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(Q.Z,{as:"h1",children:l})}),(0,r.jsx)(W.Z,{children:i})]})}var $=n(2488),ee=n(48596),te=n(44996);function ne(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){var e=(0,te.Z)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(f.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(ne,{className:ae.breadcrumbHomeIcon})})})}const ie={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,r.jsx)(f.Z,{className:a,href:n,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:t})}):(0,r.jsx)("span",{className:a,children:t})}function le(e){var t=e.children,n=e.active,a=e.index,s=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function oe(){var e=(0,$.s1)(),t=(0,ee.Ns)();return e?(0,r.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,r.jsx)(se,{}),e.map((function(t,n){var a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,r.jsx)(le,{active:a,index:n,addMicrodata:!!s,children:(0,r.jsx)(re,{href:s,isLast:a,children:t.label})},n)}))]})}):null}var de=n(22212);const ce={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ue(e){var t,n,a,s,i,l,o=e.children,c=(t=d(),n=t.frontMatter,a=t.toc,s=(0,m.i)(),i=n.hide_table_of_contents,l=!i&&a.length>0,{hidden:i,mobile:l?(0,r.jsx)(J,{}):void 0,desktop:!l||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(K,{})}),v=d().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.Z)("col",!c.hidden&&ce.docItemCol),children:[v&&(0,r.jsx)(de.Z,{}),(0,r.jsx)(T,{}),(0,r.jsxs)("div",{className:ce.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(oe,{}),(0,r.jsx)(H,{}),c.mobile,(0,r.jsx)(X,{children:o}),(0,r.jsx)(E,{})]}),(0,r.jsx)(x,{})]})]}),c.desktop&&(0,r.jsx)("div",{className:"col col--3",children:c.desktop})]})}function me(e){var t="docs-doc-id-"+e.content.metadata.id,n=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(s.FG,{className:t,children:[(0,r.jsx)(c,{}),(0,r.jsx)(ue,{children:(0,r.jsx)(n,{})})]})})}},39407:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(63366),s=(n(67294),n(36905)),i=n(93743);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(85893),o=["className"],d="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function u(e){var t=e.className,n=(0,a.Z)(e,o);return(0,l.jsx)("div",{className:(0,s.Z)(r.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(i.Z,Object.assign({},n,{linkClassName:d,linkActiveClassName:c}))})}},93743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(63366),s=n(67294),i=n(86668),r=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var s=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,a.Z)(e,r);n>=0?t[n].children.push(i):s.push(i)})),s}function o(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function c(e,t){var n,a,s=t.anchorTopOffset,i=e.find((function(e){return d(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,s.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,s.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,s.useRef)(void 0),n=u();(0,s.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],s=t;s<=n;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:n.current}),d=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var v=n(33692),h=n(85893);function b(e){var t=e.toc,n=e.className,a=e.linkClassName,s=e.isChild;return t.length?(0,h.jsx)("ul",{className:s?void 0:n,children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)(v.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(b,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)}))}):null}const x=s.memo(b);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function f(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,c=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,f=e.maxHeadingLevel,g=(0,a.Z)(e,p),j=(0,i.L)(),L=null!=b?b:j.tableOfContents.minHeadingLevel,C=null!=f?f:j.tableOfContents.maxHeadingLevel,N=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,s.useMemo)((function(){return o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:L,maxHeadingLevel:C});return m((0,s.useMemo)((function(){if(c&&v)return{linkClassName:c,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:C}}),[c,v,L,C])),(0,h.jsx)(x,Object.assign({toc:N,className:r,linkClassName:c},g))}},22212:(e,t,n)=>{n.d(t,{Z:()=>v});n(67294);var a=n(36905),s=n(95999),i=n(35742),r=n(85893);function l(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var c=n(35281),u=n(59047);function m(e){var t=e.className;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(t,c.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function v(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(m,Object.assign({},e))]})}}}]);
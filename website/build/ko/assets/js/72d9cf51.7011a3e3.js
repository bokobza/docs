"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1104],{85582:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(85893),s=r(11151),a=r(77229);const l={id:"transfers",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc804\uc1a1",sidebar_label:"FT \uc804\uc1a1"},i=void 0,c={id:"tutorials/fts/transfers",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc804\uc1a1",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud575\uc2ec \ud45c\uc900\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6c1\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\ud560 \uc218 \uc788\ub294 \ub85c\uc9c1\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \ucc98\uc74c \ud574\ubcf4\ub294 \uacbd\uc6b0 \uc774 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uace0 4.storage \ube0c\ub79c\uce58\ub97c \ud655\uc778\ud558\uc138\uc694.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/fts/5.transfers.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/transfers",permalink:"/ko/tutorials/fts/transfers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/5.transfers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,sidebarPosition:5,frontMatter:{id:"transfers",title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc804\uc1a1",sidebar_label:"FT \uc804\uc1a1"},sidebar:"tutorials",previous:{title:"\uacc4\uc815 \ub4f1\ub85d",permalink:"/ko/tutorials/fts/registering-accounts"},next:{title:"\ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uc5d0 FT \ucd94\uac00\ud558\uae30",permalink:"/ko/tutorials/fts/marketplace"}},o={},d=[{value:"\uc18c\uac1c",id:"introduction",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815",id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",level:2},{value:"\uc804\uc1a1 \ud568\uc218",id:"transfer-function",level:3},{value:"\ub0b4\ubd80 \ud5ec\ud37c \ud568\uc218",id:"\ub0b4\ubd80-\ud5ec\ud37c-\ud568\uc218",level:3},{value:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218",id:"transfer-call-function",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"redeploying-contract",level:2},{value:"\ud558\uc704 \uacc4\uc815(sub-account) \uc0dd\uc131",id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131",level:3},{value:"\ucd08\uae30\ud654",id:"initialization",level:3},{value:"\uc804\uc1a1 \ud568\uc218 \ud14c\uc2a4\ud2b8",id:"\uc804\uc1a1-\ud568\uc218-\ud14c\uc2a4\ud2b8",level:3},{value:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218 \ud14c\uc2a4\ud2b8",id:"\uc804\uc1a1-\ud638\ucd9c-\ud568\uc218-\ud14c\uc2a4\ud2b8",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"\ud575\uc2ec \ud45c\uc900"}),"\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6c1\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uace0 \uc218\uc2e0\ud560 \uc218 \uc788\ub294 \ub85c\uc9c1\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \ucc98\uc74c \ud574\ubcf4\ub294 \uacbd\uc6b0 ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/ft-tutorial",children:"\uc774 \ub808\ud37c\uc9c0\ud1a0\ub9ac"}),"\ub97c \ubcf5\uc81c\ud558\uace0 ",(0,t.jsx)(n.code,{children:"4.storage"})," \ube0c\ub79c\uce58\ub97c \ud655\uc778\ud558\uc138\uc694."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 ",(0,t.jsx)(n.em,{children:"Core"})," \ud29c\ud1a0\ub9ac\uc5bc\uc758 \uc644\uc131\ub41c \ucf54\ub4dc\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74, ",(0,t.jsx)(n.code,{children:"5.transfers"})," \ube0c\ub79c\uce58\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n:::"]}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"\uc18c\uac1c"}),"\n",(0,t.jsx)(n.p,{children:"\uc9c0\uae08\uae4c\uc9c0 \uc18c\uc720\uc790\uac00 \ucd1d \ud1a0\ud070 \uacf5\uae09\ub7c9\uc744 \ubc1c\ud589\ud558\uace0, \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(FT) \uc790\uccb4\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\ub294 \uac04\ub2e8\ud55c FT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c \uacc4\uc815\uc744 \ub4f1\ub85d\ud558\uace0 \uc774\ubca4\ud2b8\ub97c \ub0b4\ubcf4\ub0b4\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \uc624\ub298\uc740 \uc0ac\uc6a9\uc790\uac00 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uace0 \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub2e8\uc21c \uc804\uc1a1\uc744 \uc218\ud589\ud558\ub294 \ub85c\uc9c1\uc740 \uc774\ud574\ud558\uae30 \ub9e4\uc6b0 \uc27d\uc2b5\ub2c8\ub2e4. Benji\uac00 Mike\uc5d0\uac8c 100 \uac1c\uc758 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub824\uace0 \ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc218\ud589\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Benji\uac00 \ucd5c\uc18c 100\uac1c\uc758 \ud1a0\ud070\uc744 \uc18c\uc720\ud558\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"Benji\uac00 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"Mike\uac00 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub4f1\ub85d\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"Benji\uc758 \uacc4\uc815\uc5d0\uc11c \ud1a0\ud070 100\uac1c\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"Mike\uc758 \uacc4\uc815\uc5d0 100\uac1c\uc758 \ud1a0\ud070\uc744 \ub123\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uc2dc\uc810\uc5d0\uc11c, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud544\uc694\ud55c \uc218\uc815\uc744 \ud560 \uc900\ube44\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",children:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"src/ft_core.rs"})," \ud30c\uc77c\uc5d0\uc11c \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h3,{id:"transfer-function",children:"\uc804\uc1a1 \ud568\uc218"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ft_transfer"})," \ub85c\uc9c1\uc744 \uad6c\ud604\ud558\ub294 \uac83\uc73c\ub85c \uc2dc\uc791\ud569\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 ",(0,t.jsx)(n.code,{children:'"Happy Birthday Mike!"'}),"\uc640 \uac19\uc740 ",(0,t.jsx)(n.code,{children:"memo"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\uc815\ub41c ",(0,t.jsx)(n.code,{children:"amount"}),"\ub97c ",(0,t.jsx)(n.code,{children:"receiver_id"}),"\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(a.Ey,{language:"rust",start:"60",end:"72",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,t.jsx)(n.p,{children:"There are a couple things to notice here."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["We've introduced a new function called ",(0,t.jsx)(n.code,{children:"assert_one_yocto()"}),". \uc774 \uba54\uc11c\ub4dc\ub294 \uc0ac\uc6a9\uc790\uac00 \ud638\ucd9c\uc5d0 \uc815\ud655\ud788 \ud558\ub098\uc758 yoctoNEAR\ub97c \uc5f0\uacb0\ud588\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \ud568\uc218\uc5d0 \uc785\uae08\uc774 \ud544\uc694\ud55c \uacbd\uc6b0, \ud574\ub2f9 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub824\uba74 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub294 \ud558\ub098\uc758 yoctoNEAR \ubcf4\uc99d\uae08 \uc694\uad6c \uc0ac\ud56d\uc744 \ucd94\uac00\ud568\uc73c\ub85c\uc368, \ubcf8\uc9c8\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub85c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub3c4\ub85d \uac15\uc81c\ud569\ub2c8\ub2e4. \uc804\uc1a1 \ud568\uc218\ub294 \uc7a0\uc7ac\uc801\uc73c\ub85c \ub9e4\uc6b0 \uadc0\uc911\ud55c \uc790\uc0b0\uc744 \uc804\uc1a1\ud558\ubbc0\ub85c, \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uc0ac\ub78c\uc774 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub97c \uac00\uc9c0\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"internal_transfer"})," \uba54\uc11c\ub4dc\ub97c \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 NFT\ub97c \uc804\uc1a1\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \ub85c\uc9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\ub0b4\ubd80-\ud5ec\ud37c-\ud568\uc218",children:"\ub0b4\ubd80 \ud5ec\ud37c \ud568\uc218"}),"\n",(0,t.jsxs)(n.p,{children:["Let's quickly move over to the ",(0,t.jsx)(n.code,{children:"ft-contract/src/internal.rs"})," file so that you can implement the ",(0,t.jsx)(n.code,{children:"internal_transfer"})," method which is the core of this tutorial. This function will take the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"sender_id"}),": \ud1a0\ud070 \uc804\uc1a1\uc744 \uc2dc\ub3c4\ud558\ub294 \uacc4\uc815\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"receiver_id"}),": \ud1a0\ud070\uc744 \ubc1b\ub294 \uacc4\uc815\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"amount"}),": \uc804\uc1a1\ub418\ub294 FT \uac1c\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"memo"}),": \uc120\ud0dd\uc801\uc73c\ub85c \ud3ec\ud568\ud560 \uc218 \uc788\ub294 \uba54\ubaa8\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The first thing you'll want to do is make sure the sender isn't sending tokens to themselves and that they're sending a positive number. After that, you'll want to withdraw the tokens from the sender's balance and deposit them into the receiver's balance. You've already written the logic to deposit FTs by using the ",(0,t.jsx)(n.code,{children:"internal_deposit"})," function."]}),"\n",(0,t.jsxs)(n.p,{children:["Let's use similar logic to implement ",(0,t.jsx)(n.code,{children:"internal_withdraw"}),":"]}),"\n",(0,t.jsx)(a.Ey,{language:"rust",start:"29",end:"40",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \uacbd\uc6b0 \ucee8\ud2b8\ub799\ud2b8\ub294 \uacc4\uc815\uc758 \uc794\uace0\ub97c \uac00\uc838\uc624\uace0 ",(0,t.jsx)(n.code,{children:"internal_unwrap_balance_of"})," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \ub4f1\ub85d\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc0ac\uc6a9\uc790\uc758 \uc794\uace0\uc5d0\uc11c \uae08\uc561\uc744 \ube7c\uace0 \ub9f5\uc5d0 \ub2e4\uc2dc \uc0bd\uc785\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"internal_deposit"}),"\uacfc ",(0,t.jsx)(n.code,{children:"internal_withdraw"})," \ud568\uc218\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud558\uba74, ",(0,t.jsx)(n.code,{children:"internal_transfer"})," \ud568\uc218\uc758 \ud575\uc2ec\uc774 \uc644\uc131\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\ub2f9\uc2e0\uc774 \ud574\uc57c \ud560 \uc77c\uc774 \ud558\ub098 \ub354 \uc788\uc2b5\ub2c8\ub2e4. \ud1a0\ud070\uc744 \uc804\uc1a1\ud560 \ub54c ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"\uc774\ubca4\ud2b8"})," \ud45c\uc900\uc5d0 \ub530\ub77c \ub85c\uadf8\ub97c \ub0b4\ubcf4\ub0b4\uc57c \ud55c\ub2e4\ub294 \uac83\uc744 \uae30\uc5b5\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(a.Ey,{language:"rust",start:"42",end:"67",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs"}),"\n",(0,t.jsx)(n.p,{children:"\uc774\uac83\uc73c\ub85c \uac04\ub2e8\ud558\uac8c \uc804\uc1a1 \ucf00\uc774\uc2a4\uac00 \uc644\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \uc774\uc81c \ub4f1\ub85d\ub41c \uc0ac\uc6a9\uc790 \uac04\uc5d0 FT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"}),"\n",(0,t.jsx)(n.h3,{id:"transfer-call-function",children:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \uc139\uc158\uc5d0\uc11c\ub294 \uc0c8 \ud568\uc218 ",(0,t.jsx)(n.code,{children:"ft_transfer_call"}),"\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 FT\uac00 \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ub418\uace0, \ub3d9\uc77c\ud55c \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub3c4 \ud638\ucd9c\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:'\ub2e4\uc74c \uc2dc\ub098\ub9ac\uc624\ub97c \uace0\ub824\ud574 \ubd05\uc2dc\ub2e4. \uacc4\uc815\uc740 \uc11c\ube44\uc2a4 \uc218\ud589\uc744 \uc704\ud574 FT\ub97c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub85c \uc804\uc1a1\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uc804\ud1b5\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc740 \uc11c\ube44\uc2a4\ub97c \uc218\ud589\ud55c \ub2e4\uc74c \ub450 \uac1c\uc758 \uac1c\ubcc4 \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \ud1a0\ud070\uc744 \uc694\uccad\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub2e8\uc77c \ud2b8\ub79c\uc7ad\uc158\uc5d0 "\uc804\uc1a1 \ubc0f \ud638\ucd9c" \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \ub3c4\uc785\ud558\uba74 \ud504\ub85c\uc138\uc2a4\uac00 \ud06c\uac8c \uac1c\uc120\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'}),"\n",(0,t.jsx)(a.Ey,{language:"rust",start:"74",end:"104",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \ud568\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\ud638\ucd9c\uc790\uac00 \ubcf4\uc548\uc744 \uc704\ud574 \uc815\ud655\ud788 1 yocto\ub97c \ucca8\ubd80\ud588\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.li,{children:["\ubc29\uae08 \uc791\uc131\ud55c ",(0,t.jsx)(n.code,{children:"internal_transfer"})," \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud1a0\ud070\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receiver_id"}),"\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"ft_on_transfer"})," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 Promise\ub97c \ub9cc\ub4ed\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["Promise \uc2e4\ud589\uc774 \ub05d\ub098\uba74 ",(0,t.jsx)(n.code,{children:"ft_resolve_transfer"})," \ud568\uc218\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub294 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc744 \ucc98\ub9ac\ud560 \ub54c \ub9e4\uc6b0 \uc77c\ubc18\uc801\uc778 \uc6cc\ud06c\ud50c\ub85c\uc6b0\uc785\ub2c8\ub2e4. \uba3c\uc800 \ud638\ucd9c\uc744 \uc2dc\uc791\ud558\uace0 \uc2e4\ud589\uc774 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9bd\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc57d\uc18d\uc758 \uacb0\uacfc\ub97c \ud574\uacb0\ud558\ub294 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uace0, \uadf8\uc5d0 \ub530\ub77c \uc870\uce58\ub97c \ucde8\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../../2.develop/contracts/crosscontract.md",children:"\uc5ec\uae30"}),"\uc5d0\uc11c \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.\n:::"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ft_on_transfer"}),"\ub97c \ud638\ucd9c\ud558\uba74, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc6d0\ub798 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ud658\ubd88\ud574\uc57c \ud558\ub294 \ud1a0\ud070 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub294 \uba87 \uac00\uc9c0 \uc774\uc720\ub85c \uc911\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\uc218\uc2e0\uc790\uc5d0\uac8c \ub108\ubb34 \ub9ce\uc740 FT\ub97c \ubcf4\ub0b4\uc11c, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ucd08\uacfc\ubd84\uc744 \ud658\ubd88\ud558\ub824\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\ub85c\uc9c1 \ud328\ub2c9\uc774 \ubc1c\uc0dd\ud558\uba74, \ubaa8\ub4e0 \ud1a0\ud070\uc744 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ub2e4\uc2dc \ud658\ubd88\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \ub85c\uc9c1\uc740 \ubaa8\ub450 ",(0,t.jsx)(n.code,{children:"ft_resolve_transfer"})," \ud568\uc218\uc5d0\uc11c \ubc1c\uc0dd\ud569\ub2c8\ub2e4"]}),"\n",(0,t.jsx)(a.Ey,{language:"rust",start:"174",end:"221",url:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs"}),"\n",(0,t.jsxs)(n.p,{children:["\uac00\uc7a5 \uba3c\uc800 \ud560 \uc77c\uc740 Promise\uc758 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc2e4\ud328\ud55c \uacbd\uc6b0 \ubc1c\uc2e0\uc790\uc5d0\uac8c \uc804\uccb4 \ud1a0\ud070\uc744 \ud658\ubd88\ud569\ub2c8\ub2e4. Promise\uac00 \uc131\uacf5\ud558\uba74, ",(0,t.jsx)(n.code,{children:"ft_on_transfer"}),"\uc5d0\uc11c \ubc18\ud658\ub41c \uac12\uc744 \uae30\uc900\uc73c\ub85c \ubc1c\uc2e0\uc790\uc5d0\uac8c \ud658\ubd88\ud560 \ud1a0\ud070\uc758 \uc591\uc744 \ucd94\ucd9c\ud569\ub2c8\ub2e4. \ud658\ubd88\uc5d0 \ud544\uc694\ud55c \uae08\uc561\uc774 \ud655\ubcf4\ub418\uba74 \uc774\uc804\uc5d0 \uc791\uc131\ud55c ",(0,t.jsx)(n.code,{children:"internal_transfer"})," \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e4\uc81c \ud658\ubd88 \ub85c\uc9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uadf8\ub7f0 \ub2e4\uc74c \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ub41c \uc21c \ud1a0\ud070 \uc591\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ubcf4\ub0b8 \uc0ac\ub78c\uc774 100\uac1c\uc758 \ud1a0\ud070\uc744 \uc804\uc1a1\ud588\uc9c0\ub9cc 20\uac1c\uac00 \ud658\ubd88\ub41c \uacbd\uc6b0 \uc774 \ud568\uc218\ub294 80\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uba74, \uc774\uc81c \uc0ac\uc6a9\uc790\uac00 FT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\ub3c4\ub85d \ud544\uc694\ud55c \ub85c\uc9c1\uc744 \uc131\uacf5\uc801\uc73c\ub85c \ucd94\uac00\ud55c \uac83\uc785\ub2c8\ub2e4. \uc774\uc81c \ubc30\ud3ec\ud558\uace0 \uba87 \uac00\uc9c0 \ud14c\uc2a4\ud2b8\ub97c \uc218\ud589\ud560 \uc2dc\uac04\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"redeploying-contract",children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,t.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \uc0c8\ub85c\uc6b4 \ud558\uc704 \uacc4\uc815\uc744 \uc0dd\uc131\ud574 \ubd05\uc2dc\ub2e4. \uc774\ub7ec\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc740 \ucd94\uac00\uc801\uc774\uba70, \uc0c1\ud0dc\uac00 \uae68\uc9c0\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc2a4\ud1a0\ub9ac\uc9c0 \uc139\uc158\uc5d0 \ubc30\ud3ec\ud55c \ucee8\ud2b8\ub799\ud2b8\uc5d0\ub3c4 \ud328\uce58 \uc218\uc815\uc744 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 NFT Zero to Hero \ud29c\ud1a0\ub9ac\uc5bc\uc758 ",(0,t.jsx)(n.a,{href:"/tutorials/nfts/upgrade-contract",children:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc"})," \uc139\uc158\uc744 \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,t.jsx)(n.h3,{id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131",children:"\ud558\uc704 \uacc4\uc815(sub-account) \uc0dd\uc131"}),"\n",(0,t.jsxs)(n.p,{children:["\ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec \ucd08\uae30 \uc794\uc561\uc774 25 NEAR\uc778 \ud558\uc704 \uacc4\uc815 ",(0,t.jsx)(n.code,{children:"transfer"}),"\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near create-account transfer.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 25\n"})}),"\n",(0,t.jsx)(n.p,{children:"\ub2e4\uc74c\uc73c\ub85c \uac1c\ubc1c\uc744 \uc27d\uac8c \ud558\uae30 \uc704\ud574 \ud658\uacbd \ubcc0\uc218\ub97c \ub0b4\ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export TRANSFER_FT_CONTRACT_ID=transfer.$FT_CONTRACT_ID\n"})}),"\n",(0,t.jsx)(n.p,{children:"\ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\uc640 \uac19\uc774 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd 1.skeleton && ./build.sh && cd .. && near deploy --wasmFile out/contract.wasm --accountId $TRANSFER_FT_CONTRACT_ID\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc644\ub8cc\ud558\uc9c0 \uc54a\uc558\uace0 \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ub530\ub77c\ud558\ub294 \uacbd\uc6b0, ",(0,t.jsx)(n.code,{children:"near login"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0 CLI\ub85c \ub85c\uadf8\uc778\ud558\uba74 \ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,t.jsx)(n.code,{children:"export TRANSFER_FT_CONTRACT_ID=YOUR_ACCOUNT_ID_HERE"}),"\ub85c \ud658\uacbd \ubcc0\uc218\ub97c \ub0b4\ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",(0,t.jsx)(n.code,{children:"5.transfers"})," \ud3f4\ub354\ub85c \uc774\ub3d9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"1.skeleton"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ube4c\ub4dc\ud558\ub294 \ub300\uc2e0, ",(0,t.jsx)(n.code,{children:"5.transfers"})," \ud3f4\ub354\ub85c \uc774\ub3d9\ud558\uc5ec ",(0,t.jsx)(n.code,{children:"./build.sh"}),"\ub97c \uc2e4\ud589\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ube4c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n:::"]}),"\n",(0,t.jsx)(n.h3,{id:"initialization",children:"\ucd08\uae30\ud654"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\uc81c \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uc5c8\uc73c\ubbc0\ub85c \uc774\ub97c \ucd08\uae30\ud654\ud558\uace0 \ucd1d \uacf5\uae09\ub7c9\uc744 \uc0dd\uc131\ud560 \ucc28\ub840\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ud55c \ubc88 \ucd08\uae30 \uacf5\uae09\ub7c9\uc744 1000",(0,t.jsx)(n.code,{children:"gtNEAR"}),"\ub85c \ub9cc\ub4e4\uc5b4 \ubd05\uc2dc\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID new_default_meta \'{"owner_id": "\'$TRANSFER_FT_CONTRACT_ID\'", "total_supply": "1000000000000000000000000000"}\' --accountId $TRANSFER_FT_CONTRACT_ID\n'})}),"\n",(0,t.jsx)(n.p,{children:"\ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec FT\ub97c \uc18c\uc720\ud558\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\uc804\uc1a1-\ud568\uc218-\ud14c\uc2a4\ud2b8",children:"\uc804\uc1a1 \ud568\uc218 \ud14c\uc2a4\ud2b8"}),"\n",(0,t.jsxs)(n.p,{children:["Let's test the transfer function by transferring 1 ",(0,t.jsx)(n.code,{children:"gtNEAR"})," from the owner account to the account ",(0,t.jsx)(n.code,{children:"benjiman.testnet"})]}),"\n",(0,t.jsxs)(n.p,{children:["FT\ub294 \uacc4\uc815 ",(0,t.jsx)(n.code,{children:"benjiman.testnet"}),"\uc5d0\uc11c \ub2f9\uc2e0\uc5d0\uac8c \ub2e4\uc2dc \uc804\uc1a1\ud558\uc9c0 \uc54a\ub294 \ud55c \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. FT\ub97c \uc783\uc5b4\ubc84\ub9ac\uace0 \uc2f6\uc9c0 \uc54a\ub2e4\uba74, \uc0c8 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0 \ub300\uc2e0 \ud574\ub2f9 \uacc4\uc815\uc73c\ub85c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\uc138\uc694.\n:::"]}),"\n",(0,t.jsxs)(n.p,{children:["\uba3c\uc800 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec ",(0,t.jsx)(n.code,{children:"benjiman.testnet"})," \uacc4\uc815\uc744 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "benjiman.testnet"}\' --accountId $TRANSFER_FT_CONTRACT_ID --amount 0.01\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uacc4\uc815\uc774 \ub4f1\ub85d\ub418\uba74 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud558\uc5ec FT\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c ",(0,t.jsx)(n.code,{children:"--depositYocto"})," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc815\ud655\ud788 1 yoctoNEAR\ub97c \ucca8\ubd80\ud558\uace0 \uc788\ub2e4\ub294 \uc810\uc5d0 \uc8fc\uc758\ud558\uc138\uc694."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer \'{"receiver_id": "benjiman.testnet", "amount": "1000000000000000000000000", "memo": "Go Team :)"}\' --accountId $TRANSFER_FT_CONTRACT_ID --depositYocto 1\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\ucf58\uc194\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"FtTransferEvent"}),"\uac00 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ucd1d \uacf5\uae09\ub7c9\uc744 \ud655\uc778\ud558\uba74 \uc5ec\uc804\ud788 1000 ",(0,t.jsx)(n.code,{children:"gtNEAR"}),"\uc774\uc9c0\ub9cc, Benji\uc758 \uc794\uc561\uacfc \uc18c\uc720\uc790\uc758 \uc794\uc561\uc744 \ubaa8\ub450 \ud655\uc778\ud558\uba74 \uc804\uc1a1\uc774 \ubc18\uc601\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "benjiman.testnet"}\'\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_total_supply\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\uc804\uc1a1-\ud638\ucd9c-\ud568\uc218-\ud14c\uc2a4\ud2b8",children:"\uc804\uc1a1 \ud638\ucd9c \ud568\uc218 \ud14c\uc2a4\ud2b8"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ft_transfer"})," \ud568\uc218\ub97c \ud14c\uc2a4\ud2b8\ud588\uc73c\ubbc0\ub85c, \uc774\uc81c ",(0,t.jsx)(n.code,{children:"ft_transfer_call"})," \ud568\uc218\ub97c \ud14c\uc2a4\ud2b8\ud560 \ucc28\ub840\uc785\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"ft_on_transfer"})," \ud568\uc218\ub97c \uad6c\ud604\ud558\uc9c0 ",(0,t.jsx)(n.strong,{children:"\uc54a\uc740"})," \uc218\uc2e0\uc790\uc5d0\uac8c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub824\uace0 \ud558\uba74, \ucee8\ud2b8\ub799\ud2b8\uac00 \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ub418\uace0, FT\uac00 \ud658\ubd88\ub429\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c \uc774 \uae30\ub2a5\uc744 \ud14c\uc2a4\ud2b8\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ub984\uc5d0\uc11c \uc54c \uc218 \uc788\ub4ef\uc774, \ucee8\ud2b8\ub799\ud2b8\uac00 \uc5c6\ub294 ",(0,t.jsx)(n.code,{children:"no-contract.testnet"})," \uacc4\uc815\uc73c\ub85c FT\ub97c \uc774\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc218\uc2e0\uc790\ub294 ",(0,t.jsx)(n.code,{children:"ft_on_transfer"})," \ud568\uc218\ub97c \uad6c\ud604\ud558\uc9c0 \uc54a\uc73c\uba70, \ud2b8\ub79c\uc7ad\uc158\uc774 \uc644\ub8cc\ub41c \ud6c4 FT\ub294 \ub2f9\uc2e0\uc758 \uac83\uc73c\ub85c \uc720\uc9c0\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uadf8\uc804\uc5d0 \uba3c\uc800 \uacc4\uc815\uc744 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "no-contract.testnet"}\' --accountId $TRANSFER_FT_CONTRACT_ID --amount 0.01\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer_call \'{"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}\' --accountId $TRANSFER_FT_CONTRACT_ID --depositYocto 1 --gas 200000000000000\n'})}),"\n",(0,t.jsx)(n.p,{children:"\ucd9c\ub825 \uc751\ub2f5\uc740 \ub2e4\uc74c\uacfc \uac19\uc544\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'Scheduling a call: transfer.dev-1660680326316-91393402417293.ft_transfer_call({"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}) with attached 0.000000000000000000000001 NEAR\nDoing account.functionCall()\nReceipts: AJ3yWv7tSiZRLtoTkyTgfdzmQP1dpjX9DxJDiD33uwTZ, EKtpDFoJWNnbyxJ7SriAFQYX8XV9ZTzwmCF2qhSaYMAc, 21UzDZ791pWZRKAHv8WaRKN8mqDVrz8zewLWGTNZTckh\n    Log [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"transfer.dev-1660680326316-91393402417293","new_owner_id":"no-contract.testnet","amount":"1000000000000000000000000"}]}\nReceipt: 5N2WV8picxwUNC5TYa3A3v4qGquQAhkU6P81tgRt1UFN\n    Failure [transfer.dev-1660680326316-91393402417293]: Error: Cannot find contract code for account no-contract.testnet\nReceipt: AdT1bSZNCu9ACq7m6ynb12GgSb3zBenfzvvzRwfYPBmg\n    Log [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"no-contract.testnet","new_owner_id":"transfer.dev-1660680326316-91393402417293","amount":"1000000000000000000000000","memo":"Refund"}]}\nTransaction Id 2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\n\'0\'\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\ud1a0\ud070\uc758 \ucd08\uae30 \uc804\uc1a1\uacfc \ud658\ubd88\uc744 \uc704\ud574 \uc0dd\uc131\ub41c \uc804\uc1a1 \uc774\ubca4\ud2b8\uac00 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub610\ud55c \ubaa8\ub4e0 \ud1a0\ud070\uc774 \ud658\ubd88\ub418\uc5c8\uc73c\ubbc0\ub85c, \ubcf4\ub0b8 \uc0ac\ub78c\uc774 \uc804\uccb4 0 \uac1c\uc758 \ud1a0\ud070\uc744 \ubc1b\ub294 \uc0ac\ub78c\uc5d0\uac8c \uc804\uc1a1\ud588\uae30 \ub54c\ubb38\uc5d0, \ud568\uc218\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"0"}),"\uc774 \ubc18\ud658\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"no-contract.testnet"}),"\uc758 \uc794\uace0\ub97c \ucffc\ub9ac\ud558\uba74 \uc5ec\uc804\ud788 0\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "no-contract.testnet"}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"\ub9cc\uc138! \uc774 \uc2dc\uc810\uc5d0\uc11c FT \ucee8\ud2b8\ub799\ud2b8\uac00 \uc644\uc804\ud788 \uc644\ub8cc\ub418\uace0 \ubaa8\ub4e0 \uae30\ub2a5\uc774 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \uac00\uc11c \uc2e4\ud5d8\ud574\ubcf4\uc138\uc694! \uc138\uc0c1\uc740 \ub2f9\uc2e0\uc758 \uac83\uc785\ub2c8\ub2e4. \uc78a\uc9c0 \ub9d0\uace0 \ud654\uc774\ud305\ud558\uc138\uc694!"}),"\n",(0,t.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 FT\ub97c \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \ucd94\uac00\ud558\uc5ec FT \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc7a5\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4. \ubb38\uc81c\ub97c \ub354 \uc791\uace0 \uc774\ud574\ud558\uae30 \uc26c\uc6b4 \ud558\uc704 \uc791\uc5c5\uc73c\ub85c ",(0,t.jsx)(n.a,{href:"#introduction",children:"\ubd84\ub958\ud558\uace0"}),", \ud574\ub2f9 \uc815\ubcf4\ub97c \uac00\uc838\uc640 ",(0,t.jsx)(n.a,{href:"#transfer-function",children:"FT \uc804\uc1a1"})," \ubc0f ",(0,t.jsx)(n.a,{href:"#transfer-call-function",children:"FT \uc804\uc1a1 \ud638\ucd9c"})," \ud568\uc218\ub97c \ubaa8\ub450 \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ub2e4\ub978 ",(0,t.jsx)(n.a,{href:"#redeploying-contract",children:"\ucee8\ud2b8\ub799\ud2b8"}),"\ub97c \ubc30\ud3ec \ud558\uace0 \uc804\uc1a1 \uae30\ub2a5\uc744 ",(0,t.jsx)(n.a,{href:"#testing-changes",children:"\ud14c\uc2a4\ud2b8"}),"\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/tutorials/fts/marketplace",children:"\ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc"}),"\uc5d0\uc11c\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\uc5ec NFT\ub97c \uad6c\ub9e4\ud558\ub294 \ub370\uc5d0 \uc788\uc5b4 NFT \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4\uac00 \uc791\ub3d9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>g});var t=r(67294),s=r(36905),a=r(12466),l=r(16550),i=r(20469),c=r(91980),o=r(67392),d=r(50012);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,a=(0,l.k6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:s});return[(0,c._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(a.location.search);n.set(i,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[i,a])]}function j(e){var n,r,s,a,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,u=e.groupId,j=h(e),p=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:l,tabValues:j})})),_=p[0],m=p[1],T=x({queryString:o,groupId:u}),v=T[0],b=T[1],g=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(n),s=r[0],a=r[1],[s,(0,t.useCallback)((function(e){n&&a.set(e)}),[n,a])]),N=g[0],R=g[1],F=function(){var e=null!=v?v:N;return f({value:e,tabValues:j})?e:null}();return(0,i.Z)((function(){F&&m(F)}),[F]),{selectedValue:_,selectValue:(0,t.useCallback)((function(e){if(!f({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);m(e),b(e),R(e)}),[b,R,j]),tabValues:j}}var p=r(72389);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function T(e){var n=e.className,r=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,c=[],o=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=c.indexOf(n),s=i[r].value;s!==t&&(o(n),l(s))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,s=c.indexOf(e.currentTarget)+1;r=null!=(t=c[s])?t:c[0];break;case"ArrowLeft":var a,l=c.indexOf(e.currentTarget)-1;r=null!=(a=c[l])?a:c[c.length-1]}null==(n=r)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,a=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},a,{className:(0,s.Z)("tabs__item",_.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,s=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=a.find((function(e){return e.props.value===s}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function b(e){var n=j(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",_.tabList),children:[(0,m.jsx)(T,Object.assign({},e,n)),(0,m.jsx)(v,Object.assign({},e,n))]})}function g(e){var n=(0,p.Z)();return(0,m.jsx)(b,Object.assign({},e,{children:u(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>d,O2:()=>c,SQ:()=>o});r(67294);var t=r(74866),s=r(85162),a=r(95665),l=r.n(a),i=r(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,t=(r.children,r.url),s=r.start,a=r.end,l=r.fname;if(e.type===d)return d({url:t,start:s,end:a,language:n,fname:l});return e}(e,r)})),1==n.length?(0,i.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,r=e.start,t=e.end,s=e.language,a=e.fname,c=n+"#";return r&&t&&(c+="L"+r+"-L"+t+"#"),(0,i.jsx)(l(),{language:s,fname:a,children:c})}}}]);
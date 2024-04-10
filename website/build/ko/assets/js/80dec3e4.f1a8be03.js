"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7631],{8398:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>I,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(85893),a=r(11151),i=r(77229);const s=r.p+"assets/images/boop-base64-encode-57f1146336e8a4514a80fb207a64c1e3.gif",o={sidebar_position:6,sidebar_label:"Base64 \ub9e4\uac1c\ubcc0\uc218, \ub9c8\ubb34\ub9ac",title:"\uc0c8 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \uc0dd\uc131 \uc2dc Base64 \uc778\ucf54\ub529\ub41c \uc778\uc790 \uc0ac\uc6a9"},l="\ucd5c\uc885 \uc218\uc815",c={id:"tutorials/crosswords/intermediate/base64vecu8",title:"\uc0c8 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \uc0dd\uc131 \uc2dc Base64 \uc778\ucf54\ub529\ub41c \uc778\uc790 \uc0ac\uc6a9",description:"new_puzzle \uba54\uc11c\ub4dc\ub97c \uc57d\uac04 \uc218\uc815\ud558\uace0, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131\uc790\uac00 base64\ub85c \uc778\ucf54\ub529\ub41c \uc778\uc790\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/base64vecu8",permalink:"/ko/tutorials/crosswords/intermediate/base64vecu8",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/05-base64vecu8.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809e3,sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Base64 \ub9e4\uac1c\ubcc0\uc218, \ub9c8\ubb34\ub9ac",title:"\uc0c8 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \uc0dd\uc131 \uc2dc Base64 \uc778\ucf54\ub529\ub41c \uc778\uc790 \uc0ac\uc6a9"},sidebar:"tutorials",previous:{title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \ub4f1",permalink:"/ko/tutorials/crosswords/intermediate/cross-contract-calls"},next:{title:"Posts Indexer",permalink:"/ko/tutorials/near-components/indexer-tutorials/posts-indexer"}},u={},d=[{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\ucd5c\uc885-\uc218\uc815",children:"\ucd5c\uc885 \uc218\uc815"}),"\n","\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"new_puzzle"})," \uba54\uc11c\ub4dc\ub97c \uc57d\uac04 \uc218\uc815\ud558\uace0, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131\uc790\uac00 base64\ub85c \uc778\ucf54\ub529\ub41c \uc778\uc790\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\uc804 \ucc55\ud130\uc5d0\uc11c \uc6b0\ub9ac\ub294 \ubaa8\ub4e0 \ub2e8\uc11c\uc5d0 \ub300\ud55c \ub9e4\uac1c \ubcc0\uc218\ub97c \uc81c\uacf5\ud558\ub294 ",(0,t.jsx)(n.code,{children:"new_puzzle"}),"\uc744 \ud638\ucd9c\ud558\ub294 \uc0c1\ub2f9\ud788 \uae34 NEAR CLI \uba85\ub839\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. CLI\uc5d0 \uc774\ub7ec\ud55c \uae34 \ub9e4\uac1c\ubcc0\uc218\uac00 \uc788\uc73c\uba74 \ubc88\uac70\ub85c\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc791\uc740\ub530\uc634\ud45c\ub098 \ud070\ub530\uc634\ud45c\ub97c \uc774\uc2a4\ucf00\uc774\ud504\ud574\uc57c \ud558\ub294 \ubb38\uc81c\uac00 \uc788\uc744 \uc218 \uc788\uc73c\uba70 \uac01 \uc6b4\uc601 \uccb4\uc81c\ub294 \ud130\ubbf8\ub110 \ub610\ub294 \uba85\ub839 \ud504\ub86c\ud504\ud2b8\uc5d0\uc11c \ub2e4\ub978 \ud615\uc2dd\uc744 \uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc6b0\ub9ac\ub294 \ubaa8\ub4e0 \uc778\uc218\ub97c base64\ub85c \uc778\ucf54\ub529\ub41c \ubb38\uc790\uc5f4\ub85c \ubcf4\ub0bc \uac83\uc774\uba70, \uc774\ub97c \uc880 \ub354 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4 \uac83\uc785\ub2c8\ub2e4. \uc774\ub97c \uc704\ud574 ",(0,t.jsxs)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/json_types/struct.Base64VecU8.html",children:["SDK\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"Base64VecU8"})]}),"\ub97c \uc0ac\uc6a9\ud560 \uac83\uc785\ub2c8\ub2e4"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:[(0,t.jsx)(n.code,{children:"Base64VecU8"}),"\ub294 \ubc14\uc774\ub108\ub9ac \ud398\uc774\ub85c\ub4dc\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \ud558\uace0 \uc788\ub294 \uac83\uc740 \uc774\uce58\uc5d0 \ub9de\uc9c0\ub9cc, ",(0,t.jsx)(n.code,{children:"Base64VecU8"})," \ubc14\uc774\ub108\ub9ac \ub9e4\uac1c\ubcc0\uc218\ub97c \ubcf4\ub0bc \ub54c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub9c8\ub3c4 \ub354 \uc77c\ubc18\uc801\uc774\ub77c\ub294 \uc810\uc740 \uc8fc\ubaa9\ud560 \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsxs)(n.p,{children:["\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)(n.a,{href:"/sdk/rust/contract-interface/serialization-interface#base64vecu8",children:"\uc5ec\uae30"}),"\ub97c \ucc38\uc870\ud558\uc138\uc694. :::"]}),(0,t.jsx)(n.p,{children:"\uba3c\uc800 \uc608\uc0c1\ub418\ub294 \uc778\uc790\uc5d0 \ub300\ud55c \uad6c\uc870\uccb4\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."}),(0,t.jsx)(i.Ey,{language:"rust",start:"111",end:"117",url:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs"}),(0,t.jsxs)(n.p,{children:["Then we modify our ",(0,t.jsx)(n.code,{children:"new_puzzle"})," method like so:"]}),(0,t.jsx)(i.Ey,{language:"rust",start:"290",end:"297",url:"https://github.com/near-examples/crossword-tutorial-chapter-3/blob/ec07e1e48285d31089b7e8cec9e9cf32a7e90c35/contract/src/lib.rs"}),(0,t.jsxs)(n.p,{children:["\uc6b0\ub9ac\ub294 \uc6d0\ud558\ub294 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ub798 \uc778\uc218\ub97c \uac00\uc838\uc640 base64\ub85c \uc778\ucf54\ub529\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9ce\uc740 \uc628\ub77c\uc778 \ub3c4\uad6c, \ud130\ubbf8\ub110 \uba85\ub839 \ubc0f ",(0,t.jsx)(n.a,{href:"https://boop.okat.best",children:"Boop"}),"\uacfc \uac19\uc740 \uc624\ud508 \uc18c\uc2a4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(n.p,{children:"\uc6b0\ub9ac\ub294 \ub2e4\uc74c\uc744 \ubcf5\uc0ac\ud560 \uac83\uc785\ub2c8\ub2e4:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "answer_pk": "ed25519:7PkKPmVUXcupA5oU8d6TbgyMwzFe8tPV6eV1KGwgo9xg",\n  "dimensions": {\n   "x": 11,\n   "y": 10\n  },\n  "answers": [\n   {\n     "num": 1,\n     "start": {\n       "x": 0,\n       "y": 1\n     },\n     "direction": "Across",\n     "length": 12,\n     "clue": "NEAR transactions are more ______ instead of atomic."\n   },\n   {\n     "num": 2,\n     "start": {\n       "x": 6,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 7,\n     "clue": "In a smart contract, when performing an Action, you use this in Rust."\n   },\n   {\n     "num": 3,\n     "start": {\n       "x": 9,\n       "y": 0\n     },\n     "direction": "Down",\n     "length": 6,\n     "clue": "In docs.rs when you search for the near-sdk crate, these items a considered a what: collections, env, json_types."\n   },\n   {\n     "num": 4,\n     "start": {\n       "x": 1,\n       "y": 1\n     },\n     "direction": "Down",\n     "length": 10,\n     "clue": "A series of words that can deterministically generate a private key."\n   },\n   {\n     "num": 5,\n     "start": {\n       "x": 1,\n       "y": 3\n     },\n     "direction": "Across",\n     "length": 3,\n     "clue": "When doing high-level cross-contract calls, we import this that ends in _contract. When calling ourselves in a callback, it is convention to call it THIS_self."\n   },\n   {\n     "num": 6,\n     "start": {\n       "x": 0,\n       "y": 8\n     },\n     "direction": "Across",\n     "length": 8,\n     "clue": "Use this to determine the execution outcome of a cross-contract call or Action."\n   },\n   {\n     "num": 7,\n     "start": {\n       "x": 4,\n       "y": 6\n     },\n     "direction": "Across",\n     "length": 4,\n     "clue": "You chain this syntax onto a promise in order to schedule a callback afterward."\n   }\n  ]\n}\n'})}),(0,t.jsx)(n.p,{children:"\uadf8\ub9ac\uace0 \uc774\ub97c base64\ub85c \uc778\ucf54\ub529\ud569\ub2c8\ub2e4."}),(0,t.jsx)("figure",{children:(0,t.jsx)("img",{src:s,alt:"Boop \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c base64\ub97c \uc778\ucf54\ub529\ud558\ub294 \ub9e4\uac1c \ubcc0\uc218\uc758 \uc560\ub2c8\uba54\uc774\uc158 gif",width:"600"})}),(0,t.jsx)("br",{}),(0,t.jsx)(n.p,{children:"\uc774\uc81c \uc774\uc804\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc0c8\ub85c\uc6b4 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uace0 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'./build.sh\n\nexport NEAR_ACCT=crossword.friend.testnet\nexport PARENT_ACCT=friend.testnet\nnear delete $NEAR_ACCT $PARENT_ACCT\nnear create-account $NEAR_ACCT --masterAccount $PARENT_ACCT\nnear deploy $NEAR_ACCT --wasmFile res/crossword_tutorial_chapter_3.wasm --initFunction new --initArgs \'{"owner_id": "\'$NEAR_ACCT\'", "creator_account": "testnet"}\'\nnear call $NEAR_ACCT new_puzzle \'{\n  "args": "ewogICJhbnN3ZXJfcGsiOiAiZWQyNTUxOTo3UGtLUG1WVVhjdXBBNW9VOGQ2VGJneU13ekZlOHRQVjZlVjFLR3dnbzl4ZyIsCiAgImRpbWVuc2lvbnMiOiB7CiAgICJ4IjogMTEsCiAgICJ5IjogMTAKICB9LAogICJhbnN3ZXJzIjogWwogICB7CiAgICAgIm51bSI6IDEsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAwLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkFjcm9zcyIsCiAgICAgImxlbmd0aCI6IDEyLAogICAgICJjbHVlIjogIk5FQVIgdHJhbnNhY3Rpb25zIGFyZSBtb3JlIF9fX19fXyBpbnN0ZWFkIG9mIGF0b21pYy4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogMiwKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDYsCiAgICAgICAieSI6IDAKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiRG93biIsCiAgICAgImxlbmd0aCI6IDcsCiAgICAgImNsdWUiOiAiSW4gYSBzbWFydCBjb250cmFjdCwgd2hlbiBwZXJmb3JtaW5nIGFuIEFjdGlvbiwgeW91IHVzZSB0aGlzIGluIFJ1c3QuIgogICB9LAogICB7CiAgICAgIm51bSI6IDMsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiA5LAogICAgICAgInkiOiAwCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiA2LAogICAgICJjbHVlIjogIkluIGRvY3MucnMgd2hlbiB5b3Ugc2VhcmNoIGZvciB0aGUgbmVhci1zZGsgY3JhdGUsIHRoZXNlIGl0ZW1zIGEgY29uc2lkZXJlZCBhIHdoYXQ6IGNvbGxlY3Rpb25zLCBlbnYsIGpzb25fdHlwZXMuIgogICB9LAogICB7CiAgICAgIm51bSI6IDQsCiAgICAgInN0YXJ0IjogewogICAgICAgIngiOiAxLAogICAgICAgInkiOiAxCiAgICAgfSwKICAgICAiZGlyZWN0aW9uIjogIkRvd24iLAogICAgICJsZW5ndGgiOiAxMCwKICAgICAiY2x1ZSI6ICJBIHNlcmllcyBvZiB3b3JkcyB0aGF0IGNhbiBkZXRlcm1pbmlzdGljYWxseSBnZW5lcmF0ZSBhIHByaXZhdGUga2V5LiIKICAgfSwKICAgewogICAgICJudW0iOiA1LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMSwKICAgICAgICJ5IjogMwogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiAzLAogICAgICJjbHVlIjogIldoZW4gZG9pbmcgaGlnaC1sZXZlbCBjcm9zcy1jb250cmFjdCBjYWxscywgd2UgaW1wb3J0IHRoaXMgdGhhdCBlbmRzIGluIF9jb250cmFjdC4gV2hlbiBjYWxsaW5nIG91cnNlbHZlcyBpbiBhIGNhbGxiYWNrLCBpdCBpcyBjb252ZW50aW9uIHRvIGNhbGwgaXQgVEhJU19zZWxmLiIKICAgfSwKICAgewogICAgICJudW0iOiA2LAogICAgICJzdGFydCI6IHsKICAgICAgICJ4IjogMCwKICAgICAgICJ5IjogOAogICAgIH0sCiAgICAgImRpcmVjdGlvbiI6ICJBY3Jvc3MiLAogICAgICJsZW5ndGgiOiA4LAogICAgICJjbHVlIjogIlVzZSB0aGlzIHRvIGRldGVybWluZSB0aGUgZXhlY3V0aW9uIG91dGNvbWUgb2YgYSBjcm9zcy1jb250cmFjdCBjYWxsIG9yIEFjdGlvbi4iCiAgIH0sCiAgIHsKICAgICAibnVtIjogNywKICAgICAic3RhcnQiOiB7CiAgICAgICAieCI6IDQsCiAgICAgICAieSI6IDYKICAgICB9LAogICAgICJkaXJlY3Rpb24iOiAiQWNyb3NzIiwKICAgICAibGVuZ3RoIjogNCwKICAgICAiY2x1ZSI6ICJZb3UgY2hhaW4gdGhpcyBzeW50YXggb250byBhIHByb21pc2UgaW4gb3JkZXIgdG8gc2NoZWR1bGUgYSBjYWxsYmFjayBhZnRlcndhcmQuIgogICB9CiAgXQp9"\n}\' --accountId $NEAR_ACCT\n'})}),(0,t.jsxs)(n.p,{children:["\ud504\ub85c\uc81d\ud2b8 \ub8e8\ud2b8(",(0,t.jsx)(n.code,{children:"contract"})," \ub514\ub809\ud1a0\ub9ac\uac00 \uc544\ub2d8)\ub85c \ub3cc\uc544\uac00\uc11c \uc571\uc744 \uc2e4\ud589\ud558\uace0, \uc0c8\ub85c\uc6b4 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,t.jsx)(n.p,{children:"CONTRACT_NAME=crossword.friend.testnet npm run start"}),(0,t.jsx)(n.h2,{id:"\ub9c8\ubb34\ub9ac",children:"\ub9c8\ubb34\ub9ac"}),(0,t.jsx)(n.p,{children:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross-contract call) \ubc0f \ucf5c\ubc31\uacfc \ub85c\uc9c1\uc774 \uc5b4\ub514\ub85c \uac00\uc57c \ud558\ub294\uc9c0 \uc774\ud574\ud558\uba74 NEAR\uc5d0\uc11c \uac70\uc758 \ubaa8\ub4e0 \uac83\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,t.jsxs)(n.p,{children:["\uacf5\uac1c \ud0a4\ub97c \uae30\ubc18\uc73c\ub85c \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uad8c\ud55c\uc744 \ud655\uc778\ud558\ub294 \uc774 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc740 \uc57d\uac04 \ud2b9\uc774\ud569\ub2c8\ub2e4. \uc6d0\ub798\ub77c\uba74, \ud5c8\uc6a9\ub41c \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uceec\ub809\uc158 \ub610\ub294 \ub9e4\ud551\uc774 \uc788\uac70\ub098, \uc124\uc815\ud55c ",(0,t.jsx)(n.code,{children:"owner_id"})," \ud544\ub4dc\ub97c \ud65c\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4. NEAR\uc758 \uacc4\uc815 \ubc0f \uc561\uc138\uc2a4 \ud0a4 \uc2dc\uc2a4\ud15c\uc740 \ub9e4\uc6b0 \uac15\ub825\ud558\uba70, \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc774 \uc2ed\uc790\ub9d0 \ud480\uc774\ub97c \ud1b5\ud55c \uc6d0\ud65c\ud55c \uc628\ubcf4\ub529\uacfc \uac19\uc774 \uac00\ub2a5\ud55c \uac83\uc758 \ud55c\uacc4\ub97c \ud655\uc7a5\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\uae30\ub97c \ubc14\ub78d\ub2c8\ub2e4."]}),(0,t.jsx)(n.p,{children:"\ub2e4\uc2dc \ub9d0\ud558\uc9c0\ub9cc \uc774 \ucc55\ud130\uc758 \ucd5c\uc885 \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-3",children:"https://github.com/near-examples/crossword-tutorial-chapter-3"})}),(0,t.jsx)(n.p,{children:"\uc990\uac70\uc6b4 \ud574\ud0b9 \ub418\uc138\uc694!"})]})]})}function I(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>v});var t=r(67294),a=r(36905),i=r(12466),s=r(16550),o=r(20469),l=r(91980),c=r(67392),u=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function g(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function I(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function C(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function A(e){var n,r,a,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,A=g(e),h=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!I({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:A})})),b=h[0],p=h[1],m=C({queryString:c,groupId:d}),f=m[0],j=m[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),x=v[0],w=v[1],y=function(){var e=null!=f?f:x;return I({value:e,tabValues:A})?e:null}();return(0,o.Z)((function(){y&&p(y)}),[y]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!I({value:e,tabValues:A}))throw new Error("Can't select invalid tab value="+e);p(e),j(e),w(e)}),[j,w,A]),tabValues:A}}var h=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=r(85893);function m(e){var n=e.className,r=e.block,t=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),s(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;r=null!=(i=l[s])?i:l[l.length-1]}null==(n=r)||n.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,p.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function f(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function j(e){var n=A(e);return(0,p.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,p.jsx)(m,Object.assign({},e,n)),(0,p.jsx)(f,Object.assign({},e,n))]})}function v(e){var n=(0,h.Z)();return(0,p.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>u,O2:()=>l,SQ:()=>c});r(67294);var t=r(74866),a=r(85162),i=r(95665),s=r.n(i),o=r(85893);function l(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,o.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,o.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,t=(r.children,r.url),a=r.start,i=r.end,s=r.fname;if(e.type===u)return u({url:t,start:a,end:i,language:n,fname:s});return e}(e,r)})),1==n.length?(0,o.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,o.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,o.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,r=e.start,t=e.end,a=e.language,i=e.fname,l=n+"#";return r&&t&&(l+="L"+r+"-L"+t+"#"),(0,o.jsx)(s(),{language:a,fname:i,children:l})}}}]);
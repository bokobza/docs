"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7036],{70034:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(85893),t=r(11151);const i={sidebar_label:"Python tutorial"},s="NEAR Lake indexer basic tutorial",o={id:"build/data-infrastructure/lake-framework/building-indexers/python-lake-indexer",title:"NEAR Lake indexer basic tutorial",description:"frolvanya/near-lake-raw-printer: source code for the tutorial on how to create an indexer that prints block height and number of shards",source:"@site/../docs/2.build/6.data-infrastructure/lake-framework/building-indexers/python-lake-indexer.md",sourceDirName:"2.build/6.data-infrastructure/lake-framework/building-indexers",slug:"/build/data-infrastructure/lake-framework/building-indexers/python-lake-indexer",permalink:"/ko/build/data-infrastructure/lake-framework/building-indexers/python-lake-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-framework/building-indexers/python-lake-indexer.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{sidebar_label:"Python tutorial"},sidebar:"build",previous:{title:"JS basic tutorial",permalink:"/ko/build/data-infrastructure/lake-framework/building-indexers/js-lake-indexer"},next:{title:"NFT Indexer",permalink:"/ko/build/data-infrastructure/lake-framework/building-indexers/nft-indexer"}},l={},c=[{value:"Create a project",id:"create-a-project",level:2},{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Import <code>near-lake-framework</code>",id:"import-near-lake-framework",level:2},{value:"Create a config",id:"create-a-config",level:2},{value:"Starting the stream",id:"starting-the-stream",level:2},{value:"All together",id:"all-together",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"near-lake-indexer-basic-tutorial",children:"NEAR Lake indexer basic tutorial"}),"\n",(0,a.jsx)(n.admonition,{title:"Source code for the tutorial",type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/frolvanya/near-lake-raw-printer",children:(0,a.jsx)(n.code,{children:"frolvanya/near-lake-raw-printer"})}),": source code for the tutorial on how to create an indexer that prints block height and number of shards"]})}),"\n",(0,a.jsxs)(n.p,{children:["Recently we have ",(0,a.jsx)(n.a,{href:"https://pypi.org/project/near-lake-framework/",children:"published a Python version of the NEAR Lake Framework"})," on pypi.org"]}),"\n",(0,a.jsx)(n.p,{children:"We want to empower you with a basic tutorial on how to use the Python Package. Let's get started!"}),"\n",(0,a.jsx)(n.h2,{id:"create-a-project",children:"Create a project"}),"\n",(0,a.jsx)(n.p,{children:"Create an indexer project:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir near-lake-raw-printer && cd near-lake-raw-printer\ntouch main.py\n"})}),"\n",(0,a.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"near-lake-framework"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip3 install near-lake-framework\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"import-near-lake-framework",children:["Import ",(0,a.jsx)(n.code,{children:"near-lake-framework"})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"main.py"})," file let's import the necessary dependencies:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"from near_lake_framework import near_primitives, LakeConfig, streamer\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We've imported the main function ",(0,a.jsx)(n.code,{children:"streamer"})," which will be called to actually run the indexer, ",(0,a.jsx)(n.code,{children:"near_primitives"})," and ",(0,a.jsx)(n.code,{children:"LakeConfig"})," type we need to contruct."]}),"\n",(0,a.jsx)(n.h2,{id:"create-a-config",children:"Create a config"}),"\n",(0,a.jsxs)(n.p,{children:["Add the instantiation of ",(0,a.jsx)(n.code,{children:"LakeConfig"})," below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'config = LakeConfig.mainnet()\nconfig.start_block_height = 69030747\nconfig.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\nconfig.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Just a few words on the config, function ",(0,a.jsx)(n.code,{children:"mainnet()"})," has set ",(0,a.jsx)(n.code,{children:"s3_bucket_name"}),", ",(0,a.jsx)(n.code,{children:"s3_region_name"})," for mainnet.\nYou can go to ",(0,a.jsx)(n.a,{href:"https://nearblocks.io",children:"NEAR Explorer"})," and get ",(0,a.jsx)(n.strong,{children:"the most recent"})," block height to set ",(0,a.jsx)(n.code,{children:"config.start_block_height"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"starting-the-stream",children:"Starting the stream"}),"\n",(0,a.jsxs)(n.p,{children:["Let's call ",(0,a.jsx)(n.code,{children:"streamer"})," function with the ",(0,a.jsx)(n.code,{children:"config"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'stream_handle, streamer_messages_queue = streamer(config)\nwhile True:\n    streamer_message = await streamer_messages_queue.get()\n    print(f"Block #{streamer_message.block.header.height} Shards: {len(streamer_message.shards)}")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["And an actual start of our indexer in the end of the ",(0,a.jsx)(n.code,{children:"main.py"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"loop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n"})}),"\n",(0,a.jsx)(n.h2,{id:"all-together",children:"All together"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'import asyncio\nimport os\n\nfrom near_lake_framework import LakeConfig, streamer, near_primitives\n\nasync def main():    \n    config = LakeConfig.mainnet()\n    config.start_block_height = 69030747\n    config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\n    config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n\n    stream_handle, streamer_messages_queue = streamer(config)\n    while True:\n        streamer_message = await streamer_messages_queue.get()\n        print(f"Block #{streamer_message.block.header.height} Shards: {len(streamer_message.shards)}")\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n'})}),"\n",(0,a.jsxs)(n.p,{children:["That's it. Now we run ",(0,a.jsx)(n.code,{children:"main.py"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 main.py\n"})}),"\n",(0,a.jsx)(n.p,{children:"You should see something like the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Received 400 blocks from S3\nBlock #69030747 Shards: 4\nBlock #69030748 Shards: 4\nBlock #69030749 Shards: 4\nBlock #69030750 Shards: 4\nBlock #69030751 Shards: 4\nBlock #69030752 Shards: 4\nBlock #69030753 Shards: 4\nBlock #69030754 Shards: 4\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can stop the indexer by pressing CTRL+C"}),"\n",(0,a.jsx)(n.admonition,{title:"Credentials",type:"danger",children:(0,a.jsxs)(n.p,{children:["To be able to access the data from ",(0,a.jsx)(n.a,{href:"/tools/realtime#near-lake-indexer",children:"NEAR Lake"})," you need to provide credentials. Please, see the ",(0,a.jsx)(n.a,{href:"/ko/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Credentials"})," article"]})}),"\n",(0,a.jsxs)(n.p,{children:["You can find the ",(0,a.jsx)(n.a,{href:"https://github.com/frolvanya/near-lake-raw-printer",children:"source code for this tutorial on the GitHub"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var a=r(67294);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
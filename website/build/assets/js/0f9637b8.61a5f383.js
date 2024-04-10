"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8023],{42907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(85893),i=t(11151);const a={sidebar_label:"NFT indexer for Python"},s="Building an NFT indexer for Python",o={id:"build/data-infrastructure/lake-framework/building-indexers/python-nft-indexer",title:"Building an NFT indexer for Python",description:"frolvanya/near-lake-nft-indexer: source code for this tutorial",source:"@site/../docs/2.build/6.data-infrastructure/lake-framework/building-indexers/python-nft-indexer.md",sourceDirName:"2.build/6.data-infrastructure/lake-framework/building-indexers",slug:"/build/data-infrastructure/lake-framework/building-indexers/python-nft-indexer",permalink:"/build/data-infrastructure/lake-framework/building-indexers/python-nft-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-framework/building-indexers/python-nft-indexer.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{sidebar_label:"NFT indexer for Python"},sidebar:"build",previous:{title:"NFT Indexer",permalink:"/build/data-infrastructure/lake-framework/building-indexers/nft-indexer"},next:{title:"Running Lake Indexer",permalink:"/build/data-infrastructure/lake-framework/running-near-lake/run-lake-indexer"}},c={},d=[{value:"The Goal",id:"the-goal",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Set up NEAR Lake Framework",id:"set-up-near-lake-framework",level:2},{value:"Events and where to catch them",id:"events-and-where-to-catch-them",level:2},{value:"Catching only the data we need",id:"catching-only-the-data-we-need",level:2},{value:"Almost done",id:"almost-done",level:2},{value:"Crafting links to Paras and Mintbase for NFTs minted there",id:"crafting-links-to-paras-and-mintbase-for-nfts-minted-there",level:2},{value:"Paras token URL",id:"paras-token-url",level:3},{value:"Mintbase token URL",id:"mintbase-token-url",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"building-an-nft-indexer-for-python",children:"Building an NFT indexer for Python"}),"\n",(0,r.jsx)(n.admonition,{title:"Source code for the tutorial",type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/frolvanya/near-lake-nft-indexer",children:(0,r.jsx)(n.code,{children:"frolvanya/near-lake-nft-indexer"})}),": source code for this tutorial"]})}),"\n",(0,r.jsx)(n.h2,{id:"the-goal",children:"The Goal"}),"\n",(0,r.jsxs)(n.p,{children:["This tutorial ends with a working NFT indexer built on top ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-lake-framework",children:"NEAR Lake Framework for Python"}),". The indexer is watching for ",(0,r.jsx)(n.code,{children:"nft_mint"})," ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," and prints some relevant data:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"receipt_id"})," of the ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"})," where the mint has happened"]}),"\n",(0,r.jsx)(n.li,{children:"Marketplace"}),"\n",(0,r.jsx)(n.li,{children:"NFT owner account name"}),"\n",(0,r.jsx)(n.li,{children:"Links to the NFTs on the marketplaces"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The final source code is available on the GitHub ",(0,r.jsx)(n.a,{href:"https://github.com/frolvanya/near-lake-nft-indexer",children:(0,r.jsx)(n.code,{children:"frolvanya/near-lake-nft-indexer"})})]}),"\n",(0,r.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsxs)(n.p,{children:["NEAR Protocol had introduced a nice feature ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"}),". The Events allow a contract developer to add standardized logs to the ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:(0,r.jsx)(n.code,{children:"ExecutionOutcomes"})})," thus allowing themselves or other developers to read those logs in more convenient manner via API or indexers."]}),"\n",(0,r.jsxs)(n.p,{children:["The Events have a field ",(0,r.jsx)(n.code,{children:"standard"})," which aligns with NEPs. In this tutorial we'll be talking about ",(0,r.jsx)(n.a,{href:"https://github.com/near/NEPs/discussions/171",children:"NEP-171 Non-Fungible Token standard"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'In this tutorial our goal is to show you how you can "listen" to the Events contracts emit and how you can benefit from them.'}),"\n",(0,r.jsxs)(n.p,{children:["As the example we will be building an indexer that watches all the NFTs minted following the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NEP-171 Events"})," standard, assuming we're collectors who don't want to miss a thing. Our indexer should notice every single NFT minted and give us a basic set of data like: in what Receipt it was minted, and show us the link to a marketplace (we'll cover ",(0,r.jsx)(n.a,{href:"https://paras.id",children:"Paras"})," and ",(0,r.jsx)(n.a,{href:"https://mintbase.io",children:"Mintbase"})," in our example)."]}),"\n",(0,r.jsxs)(n.p,{children:["We will use Python version of ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-lake-framework",children:"NEAR Lake Framework"})," in this tutorial. Though the concept is the same for Rust, but we want to show more people that it's not that complex to build your own indexer."]}),"\n",(0,r.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,r.jsx)(n.admonition,{title:"Credentials",type:"danger",children:(0,r.jsxs)(n.p,{children:["Please, ensure you've the credentials set up as described on the ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Credentials"})," page. Otherwise you won't be able to get the code working."]})}),"\n",(0,r.jsx)(n.p,{children:"Let's create our project folder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir lake-nft-indexer && cd lake-nft-indexer\ntouch main.py\n"})}),"\n",(0,r.jsx)(n.h2,{id:"set-up-near-lake-framework",children:"Set up NEAR Lake Framework"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"main.py"})," let's import ",(0,r.jsx)(n.code,{children:"stream"})," function and ",(0,r.jsx)(n.code,{children:"near_primitives"})," from ",(0,r.jsx)(n.code,{children:"near-lake-framework"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"from near_lake_framework import near_primitives, LakeConfig, streamer\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the main function"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'async def main():\n    print("Starting NFT indexer")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Add the instantiation of ",(0,r.jsx)(n.code,{children:"LakeConfig"})," below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'config = LakeConfig.mainnet()\nconfig.start_block_height = 69030747\nconfig.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\nconfig.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Just a few words on the config, function ",(0,r.jsx)(n.code,{children:"mainnet()"})," has set ",(0,r.jsx)(n.code,{children:"s3_bucket_name"}),", ",(0,r.jsx)(n.code,{children:"s3_region_name"})," for mainnet.\nYou can go to ",(0,r.jsx)(n.a,{href:"https://nearblocks.io",children:"NEAR Explorer"})," and get ",(0,r.jsx)(n.strong,{children:"the most recent"})," block height to set ",(0,r.jsx)(n.code,{children:"config.start_block_height"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's call ",(0,r.jsx)(n.code,{children:"streamer"})," function with the ",(0,r.jsx)(n.code,{children:"config"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"stream_handle, streamer_messages_queue = streamer(config)\nwhile True:\n    streamer_message = await streamer_messages_queue.get()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And an actual start of our indexer in the end of the ",(0,r.jsx)(n.code,{children:"main.py"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"loop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The final ",(0,r.jsx)(n.code,{children:"main.py"})," at this moment should look like the following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'from near_lake_framework import LakeConfig, streamer, near_primitives\nasync def main():\n    print("Starting NFT indexer")\n    \n    config = LakeConfig.mainnet()\n    config.start_block_height = 69030747\n    config.aws_access_key_id = os.getenv("AWS_ACCESS_KEY_ID")\n    config.aws_secret_key = os.getenv("AWS_SECRET_ACCESS_KEY")\n\n    stream_handle, streamer_messages_queue = streamer(config)\n    while True:\n        streamer_message = await streamer_messages_queue.get()\n\nloop = asyncio.get_event_loop()\nloop.run_until_complete(main())\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now we need to create a callback function that we'll be called to handle ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/toc",children:(0,r.jsx)(n.code,{children:"StreamerMessage"})})," our indexer receives."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    pass\n"})}),"\n",(0,r.jsx)(n.h2,{id:"events-and-where-to-catch-them",children:"Events and where to catch them"}),"\n",(0,r.jsxs)(n.p,{children:["First of all let's find out where we can catch the Events. We hope you are familiar with how the ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/flow/near-data-flow",children:"Data Flow in NEAR Blockchain"}),", but let's revise our knowledge:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mint an NFT is an action in an NFT contract (doesn't matter which one)"}),"\n",(0,r.jsxs)(n.li,{children:["Actions are located in a ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/receipt",children:"Receipt"})]}),"\n",(0,r.jsxs)(n.li,{children:["A result of the Receipt execution is ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/execution-outcome",children:"ExecutionOutcome"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ExecutionOutcome"}),' in turn, catches the logs a contract "prints"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})," built on top of the logs"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This leads us to the realization that we can watch only for ExecutionOutcomes and ignore everything else ",(0,r.jsx)(n.code,{children:"StreamerMessage"})," brings us."]}),"\n",(0,r.jsx)(n.h2,{id:"catching-only-the-data-we-need",children:"Catching only the data we need"}),"\n",(0,r.jsxs)(n.p,{children:["Inside the callback function ",(0,r.jsx)(n.code,{children:"handle_streamer_message"})," we've prepared in the ",(0,r.jsx)(n.a,{href:"#preparation",children:"Preparation"})," section let's start filtering the data we need:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                pass\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We have iterated through the logs of all ExecutionOutcomes of ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-data-structures/shard",children:"Shards"})," (in our case we don't care on which Shard did the mint happen)"]}),"\n",(0,r.jsxs)(n.p,{children:["Now we want to deal only with those ExecutionOutcomes that contain logs of Events format. Such logs start with ",(0,r.jsx)(n.code,{children:"EVENT_JSON:"})," according to the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat#events",children:"Events docs"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                if not log.startswith("EVENT_JSON:"):\n                    continue\n                try:\n                    parsed_log = json.loads(log[len("EVENT_JSON:") :])\n                except json.JSONDecodeError:\n                    print(\n                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nError during parsing logs from JSON string to dict"\n                    )\n                    continue\n'})}),"\n",(0,r.jsx)(n.p,{children:"Let us explain what we are doing here:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"We are walking through the logs in ExecutionOutcomes"}),"\n",(0,r.jsx)(n.li,{children:"We are filtering ExecutionOutcomes that contain logs of Events format"}),"\n",(0,r.jsxs)(n.li,{children:["In order to collect the Events we are iterating through the ExecutionOutcome's logs trying to parse Event using ",(0,r.jsx)(n.code,{children:"json.loads"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The goal for our indexer is to return the useful data about a minted NFT that follows NEP-171 standard. We need to drop irrelevant standard Events:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'    if (\n        parsed_log.get("standard") != "nep171"\n        or parsed_log.get("event") != "nft_mint"\n    ):\n        continue\n'})}),"\n",(0,r.jsx)(n.h2,{id:"almost-done",children:"Almost done"}),"\n",(0,r.jsx)(n.p,{children:"So far we have collected everything we need corresponding to our requirements."}),"\n",(0,r.jsxs)(n.p,{children:["The final look of the ",(0,r.jsx)(n.code,{children:"handle_streamer_message"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'async def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                if not log.startswith("EVENT_JSON:"):\n                    continue\n                try:\n                    parsed_log = json.loads(log[len("EVENT_JSON:") :])\n                except json.JSONDecodeError:\n                    print(\n                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nError during parsing logs from JSON string to dict"\n                    )\n                    continue\n\n                if (\n                    parsed_log.get("standard") != "nep171"\n                    or parsed_log.get("event") != "nft_mint"\n                ):\n                    continue\n\n                print(parsed_log)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now let's call ",(0,r.jsx)(n.code,{children:"handle_streamer_message"})," inside the loop in ",(0,r.jsx)(n.code,{children:"main"})," function"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"await handle_streamer_message(streamer_message)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And if we run our indexer we will be catching ",(0,r.jsx)(n.code,{children:"nft_mint"})," event and print logs in the terminal."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 main.py\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Having troubles running the indexer? Please, check you haven't skipped the ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Credentials"})," part :)"]})}),"\n",(0,r.jsxs)(n.p,{children:["Not so fast! Remember we were talking about having the links to the marketplaces to see the minted tokens? We're gonna extend our data with links whenever possible. At least we're gonna show you how to deal with the NFTs minted on ",(0,r.jsx)(n.a,{href:"https://paras.id",children:"Paras"})," and ",(0,r.jsx)(n.a,{href:"https://mintbase.io",children:"Mintbase"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"crafting-links-to-paras-and-mintbase-for-nfts-minted-there",children:"Crafting links to Paras and Mintbase for NFTs minted there"}),"\n",(0,r.jsx)(n.p,{children:"At this moment we have an access to logs that follows NEP-171 standard. We definitely know that all the data we have at this moment are relevant for us, and we want to extend it with the links to that minted NFTs at least for those marketplaces we know."}),"\n",(0,r.jsx)(n.p,{children:"We know and love Paras and Mintbase."}),"\n",(0,r.jsx)(n.h3,{id:"paras-token-url",children:"Paras token URL"}),"\n",(0,r.jsx)(n.p,{children:"We did the research for you and here's how the URL to token on Paras is crafting:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://paras.id/token/[1]::[2]/[3]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[1] - Paras contract address (",(0,r.jsx)(n.code,{children:"x.paras.near"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["[2] - First part of the ",(0,r.jsx)(n.code,{children:"token_id"})," (",(0,r.jsx)(n.code,{children:'parsed_log["data"]'})," for Paras is an array of objects with ",(0,r.jsx)(n.code,{children:"token_ids"})," key in it. Those IDs represented by numbers with column ",(0,r.jsx)(n.code,{children:":"})," between them)"]}),"\n",(0,r.jsxs)(n.li,{children:["[3] - ",(0,r.jsx)(n.code,{children:"token_id"})," itself"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://paras.id/token/x.paras.near::387427/387427:373\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mintbase-token-url",children:"Mintbase token URL"}),"\n",(0,r.jsx)(n.p,{children:"And again we did the research for you:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://www.mintbase.io/thing/[1]:[2]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Where:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[1] - ",(0,r.jsx)(n.code,{children:"meta_id"})," (",(0,r.jsx)(n.code,{children:'parsed_log["data"]'})," for Mintbase is an array of stringified JSON that contains ",(0,r.jsx)(n.code,{children:"meta_id"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"[2] - Store contract account address (basically Receipt's receiver ID)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"https://www.mintbase.io/thing/70eES-icwSw9iPIkUluMHOV055pKTTgQgTiXtwy3Xus:vnartistsdao.mintbase1.near\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's start crafting the links:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'def format_paras_nfts(data, receipt_execution_outcome):\n    links = []\n\n    for data_element in data:\n        for token_id in data_element.get("token_ids", []):\n            first_part_of_token_id = token_id.split(":")[0]\n            links.append(\n                f"https://paras.id/token/{receipt_execution_outcome.receipt.receiver_id}::{first_part_of_token_id}/{token_id}"\n            )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n\ndef format_mintbase_nfts(data, receipt_execution_outcome):\n    links = []\n    for data_block in data:\n        try:\n            memo = json.loads(data_block.get("memo"))\n        except json.JSONDecodeError:\n            print(\n                f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nMemo: `{memo}`\\nError during parsing Mintbase memo from JSON string to dict"\n            )\n            return\n\n        meta_id = memo.get("meta_id")\n        links.append(\n            f"https://www.mintbase.io/thing/{meta_id}:{receipt_execution_outcome.receipt.receiver_id}"\n        )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We're going to print the receipt_id, so you would be able to search for it on ",(0,r.jsx)(n.a,{href:"https://nearblocks.io",children:"NEAR Explorer"}),", marketplace name and the list of links to the NFTs along with the owner account name."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'if receipt_execution_outcome.receipt.receiver_id.endswith(\n    ".paras.near"\n):\n    output = {\n        "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n        "marketplace": "Paras",\n        "nfts": format_paras_nfts(\n            parsed_log["data"], receipt_execution_outcome\n        ),\n    }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["A few words about what is going on here. If the Receipt's receiver account name ends with ",(0,r.jsx)(n.code,{children:".paras.near"})," (e.g. ",(0,r.jsx)(n.code,{children:"x.paras.near"}),") we assume it's from Paras marketplace, so we are changing the corresponding variable."]}),"\n",(0,r.jsxs)(n.p,{children:["Mintbase turn, we hope ",(0,r.jsx)(n.a,{href:"https://twitter.com/nategeier",children:"Nate"})," and his team have ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/migrating-to-near-lake-framework",children:"migrated to NEAR Lake Framework"}),' already, saying "Hi!" and crafting the link:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'    elif re.search(\n        ".mintbase\\d+.near", receipt_execution_outcome.receipt.receiver_id\n    ):\n        output = {\n            "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n            "marketplace": "Mintbase",\n            "nfts": format_mintbase_nfts(\n                parsed_log["data"], receipt_execution_outcome\n            ),\n        }\n    else:\n        continue\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Almost the same story as with Paras, but a little bit more complex. The nature of Mintbase marketplace is that it's not a single marketplace! Every Mintbase user has their own store and a separate contract. And it looks like those contract addresses follow the same principle they end with ",(0,r.jsx)(n.code,{children:".mintbaseN.near"})," where ",(0,r.jsx)(n.code,{children:"N"})," is number (e.g. ",(0,r.jsx)(n.code,{children:"nate.mintbase1.near"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"After we have defined that the ExecutionOutcome receiver is from Mintbase we are doing the same stuff as with Paras:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Setting the ",(0,r.jsx)(n.code,{children:"marketplace"})," variable to Mintbase"]}),"\n",(0,r.jsx)(n.li,{children:"Collecting the list of NFTs with owner and crafted links"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"And make it print the output to the terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:"print(json.dumps(output, indent=4))\n"})}),"\n",(0,r.jsx)(n.p,{children:"All together:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"title=main.py",children:'def format_paras_nfts(data, receipt_execution_outcome):\n    links = []\n\n    for data_element in data:\n        for token_id in data_element.get("token_ids", []):\n            first_part_of_token_id = token_id.split(":")[0]\n            links.append(\n                f"https://paras.id/token/{receipt_execution_outcome.receipt.receiver_id}::{first_part_of_token_id}/{token_id}"\n            )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n\n\ndef format_mintbase_nfts(data, receipt_execution_outcome):\n    links = []\n    for data_block in data:\n        try:\n            memo = json.loads(data_block.get("memo"))\n        except json.JSONDecodeError:\n            print(\n                f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nMemo: `{memo}`\\nError during parsing Mintbase memo from JSON string to dict"\n            )\n            return\n\n        meta_id = memo.get("meta_id")\n        links.append(\n            f"https://www.mintbase.io/thing/{meta_id}:{receipt_execution_outcome.receipt.receiver_id}"\n        )\n\n    return {"owner": data[0].get("owner_id"), "links": links}\n\n\nasync def handle_streamer_message(streamer_message: near_primitives.StreamerMessage):\n    for shard in streamer_message.shards:\n        for receipt_execution_outcome in shard.receipt_execution_outcomes:\n            for log in receipt_execution_outcome.execution_outcome.outcome.logs:\n                if not log.startswith("EVENT_JSON:"):\n                    continue\n                try:\n                    parsed_log = json.loads(log[len("EVENT_JSON:") :])\n                except json.JSONDecodeError:\n                    print(\n                        f"Receipt ID: `{receipt_execution_outcome.receipt.receipt_id}`\\nError during parsing logs from JSON string to dict"\n                    )\n                    continue\n\n                if (\n                    parsed_log.get("standard") != "nep171"\n                    or parsed_log.get("event") != "nft_mint"\n                ):\n                    continue\n\n                if receipt_execution_outcome.receipt.receiver_id.endswith(\n                    ".paras.near"\n                ):\n                    output = {\n                        "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n                        "marketplace": "Paras",\n                        "nfts": format_paras_nfts(\n                            parsed_log["data"], receipt_execution_outcome\n                        ),\n                    }\n                elif re.search(\n                    ".mintbase\\d+.near", receipt_execution_outcome.receipt.receiver_id\n                ):\n                    output = {\n                        "receipt_id": receipt_execution_outcome.receipt.receipt_id,\n                        "marketplace": "Mintbase",\n                        "nfts": format_mintbase_nfts(\n                            parsed_log["data"], receipt_execution_outcome\n                        ),\n                    }\n                else:\n                    continue\n\n                print(json.dumps(output, indent=4))\n'})}),"\n",(0,r.jsx)(n.p,{children:"And not that's it. Run the indexer to watch for NFT minting and never miss a thing."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 main.py\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Having troubles running the indexer? Please, check you haven't skipped the ",(0,r.jsx)(n.a,{href:"/build/data-infrastructure/lake-framework/running-near-lake/credentials",children:"Credentials"})," part :)"]})}),"\n",(0,r.jsx)(n.p,{children:"Example output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "receipt_id": "8rMK8rxb3WmFcSfM3ahFoeeoBF92pad3tpsqKoSWurr2",\n    "marketplace": "Mintbase",\n    "nfts": {\n        "owner": "vn-artists-dao.near",\n        "links": [\n            "https://www.mintbase.io/thing/aqdCBHB9_2XZY7pwXRRu5rGDeLQl7Q8KgNud1wKgnGo:vnartistsdao.mintbase1.near"\n        ]\n    }\n}\n{\n    "receipt_id": "ArRh94Fe1LKF9yPrAdzrMozWoxMVQbEW2Z2Zf4fsSsce",\n    "marketplace": "Paras",\n    "nfts": {\n        "owner": "eeaeb516e0945893ac01eaf547f499abdbd344831c5fcbefa1a5c0a9f303cc5c",\n        "links": [\n            "https://paras.id/token/x.paras.near::432714/432714:1"\n        ]\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"What a ride, yeah? Let's sum up what we have done:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You've learnt about ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"})]}),"\n",(0,r.jsx)(n.li,{children:"Now you understand how to follow for the Events"}),"\n",(0,r.jsx)(n.li,{children:"Knowing the fact that as a contract developer you can use Events and emit your own events, now you know how to create an indexer that follows those Events"}),"\n",(0,r.jsxs)(n.li,{children:["We've had a closer look at NFT minting process, you can experiment further and find out how to follow ",(0,r.jsx)(n.code,{children:"nft_transfer"})," Events"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The material from this tutorial can be extrapolated for literally any event that follows the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events format"})]}),"\n",(0,r.jsx)(n.p,{children:"Not mentioning you have a dedicated indexer to find out about the newest NFTs minted out there and to be the earliest bird to collect them."}),"\n",(0,r.jsx)(n.p,{children:"Let's go hunt doo, doo, doo \ud83e\udd88"}),"\n",(0,r.jsx)(n.admonition,{title:"Source code for the tutorial",type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-nft-indexer",children:(0,r.jsx)(n.code,{children:"near-examples/near-lake-nft-indexer"})}),": source code for this tutorial"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
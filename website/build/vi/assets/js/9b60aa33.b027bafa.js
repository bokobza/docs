"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[822],{59583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(85893),r=t(11151);const o={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},a=void 0,d={id:"integrations/errors/introduction",title:"Introduction",description:"did you know?",source:"@site/../docs/6.integrations/errors/introduction.md",sourceDirName:"6.integrations/errors",slug:"/integrations/errors/introduction",permalink:"/vi/integrations/errors/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/errors/introduction.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction"},sidebar:"exchanges",previous:{title:"Implicit Accounts",permalink:"/vi/integrations/implicit-accounts"},next:{title:"Source Code Survey",permalink:"/vi/integrations/errors/error-implementation"}},s={},c=[{value:"The life of a transaction:",id:"the-life-of-a-transaction",level:2},{value:"NEAR Platform Errors",id:"near-platform-errors",level:2},{value:"RuntimeError and subtypes",id:"runtimeerror-and-subtypes",level:3},{value:"TxExecutionError and subtypes",id:"txexecutionerror-and-subtypes",level:3},{value:"VMerror and subtypes",id:"vmerror-and-subtypes",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("blockquote",{className:"info",children:[(0,i.jsx)("strong",{children:"did you know?"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/concepts/welcome",children:"NEAR Platform overview"})," clarifies much of the language in this section."]})]}),"\n",(0,i.jsx)(n.h2,{id:"the-life-of-a-transaction",children:"The life of a transaction:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A client creates a transaction, computes the transaction hash and signs this hash to get a signed transaction. Now this signed transaction can be sent to a node."}),"\n",(0,i.jsxs)(n.li,{children:["The RPC interface receives the transaction and routes it to the correct physical node using ",(0,i.jsx)(n.code,{children:"signer_id"}),".  Since the ",(0,i.jsx)(n.code,{children:"signer_id"})," must be a NEAR Account ID which lives on a single shard, the account is mapped to a shard which is followed by at least one validator running at least one machine with an IP address."]}),"\n",(0,i.jsxs)(n.li,{children:["When a node receives a new signed transaction, it validates the transaction for signer, receiver, account balance, cost overflow, signature, etc. (",(0,i.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Scenarios/FinancialTransaction.html#transaction-to-receipt",children:"see here"}),") and gossips it to all peers following the same shard. If a transaction has an invalid signature or would be invalid on the latest state, it is rejected quickly and returns an error to the original RPC call."]}),"\n",(0,i.jsx)(n.li,{children:"Valid transactions are added to the transaction pool (every validating node has its own independent copy of a transaction pool). The transaction pool maintains transactions that are not yet discarded and not yet included into the chain."}),"\n",(0,i.jsxs)(n.li,{children:["A pool iterator is used to pick transactions from the pool one at a time, ordered from the smallest nonce to largest, until the pool is drained or some chunk limit is reached (max number of transactions per chunk or max gas burnt per chunk to process transactions).  Please refer to articles on the ",(0,i.jsx)(n.a,{href:"https://nomicon.io/ChainSpec/Transactions.html?highlight=pool#pool-iterator",children:"pool iterator"})," and ",(0,i.jsx)(n.a,{href:"/concepts/protocol/gas",children:"gas"})," for more details."]}),"\n",(0,i.jsx)(n.li,{children:"To accommodate the distributed nature of a sharded blockchain, all transactions are subsequently returned to a segmented transaction pool having 3 distinct layers: accepted transactions (which will be processed on the next chunk), pending transactions (which exceeded the limits of the current chunk and will be included in a later round of processing) and invalid transactions (which will be rejected at the next available opportunity)."}),"\n",(0,i.jsx)(n.li,{children:"Before producing a chunk, transactions are ordered and validated again. This is done to produce chunks with only valid transactions across a distributed system."}),"\n",(0,i.jsx)(n.li,{children:"While a transaction is being processed on to a chunk, any errors raised by the application of its actions are also returned via RPC."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"near-platform-errors",children:"NEAR Platform Errors"}),"\n",(0,i.jsxs)(n.p,{children:["Errors raised by the NEAR platform are implemented in the following locations in ",(0,i.jsx)(n.code,{children:"nearcore"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/master/core/primitives/src/errors.rs",children:"nearcore/core/primitives/src/errors.rs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/near/nearcore/blob/master/runtime/near-vm-errors/src/lib.rs",children:"nearcore/runtime/near-vm-errors/src/lib.rs"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This page includes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RuntimeError and subtypes"}),": errors raised when a transaction is first received by the destination node and again before it's processed and applied to a chunk"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TxExecutionError and subtypes"}),": errors raised while a transaction and its component action(s) are being validated and applied to a chunk"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VMerror and subtypes"}),": errors raised during the execution of a Wasm contract by the NEAR VM"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"runtimeerror-and-subtypes",children:"RuntimeError and subtypes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"RuntimeError                                              Error returned from `Runtime::apply  \n  StorageError                                            Unexpected error which is typically related to the node storage corruption.account\n  BalanceMismatchError                                    An error happens if `check_balance` fails, which is likely an indication of an invalid state\n  InvalidTxError                                          An error happened during TX verification and account charging\n    InvalidAccessKeyError                                 Describes the error for validating access key\n    ActionsValidationError                                Describes the error for validating a list of actions    \n      TotalPrepaidGasExceeded                             The total prepaid gas (for all given actions) exceeded the limit.\n      TotalNumberOfActionsExceeded                        The number of actions exceeded the given limit.\n      AddKeyMethodNamesNumberOfBytesExceeded              The total number of bytes of the method names exceeded the limit in a Add Key action.\n      AddKeyMethodNameLengthExceeded                      The length of some method name exceeded the limit in a Add Key action.\n      IntegerOverflow                                     Integer overflow during a compute.\n      InvalidAccountId                                    Invalid account ID.\n      ContractSizeExceeded                                The size of the contract code exceeded the limit in a DeployContract action.\n      FunctionCallMethodNameLengthExceeded                The length of the method name exceeded the limit in a Function Call action.\n      FunctionCallArgumentsLengthExceeded                 The length of the arguments exceeded the limit in a Function Call action.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"txexecutionerror-and-subtypes",children:"TxExecutionError and subtypes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"TxExecutionError                                          Error returned in the ExecutionOutcome in case of failure\n  InvalidTxError                                          An error happened during Transaction execution\n    InvalidAccessKeyError                                 Describes the error for validating access key\n    ActionsValidationError                                Describes the error for validating a list of actions\n      TotalPrepaidGasExceeded                             The total prepaid gas (for all given actions) exceeded the limit.\n      TotalNumberOfActionsExceeded                        The number of actions exceeded the given limit.\n      AddKeyMethodNamesNumberOfBytesExceeded              The total number of bytes of the method names exceeded the limit in a Add Key action.\n      AddKeyMethodNameLengthExceeded                      The length of some method name exceeded the limit in a Add Key action.\n      IntegerOverflow                                     Integer overflow during a compute.\n      InvalidAccountId                                    Invalid account ID.\n      ContractSizeExceeded                                The size of the contract code exceeded the limit in a DeployContract action.\n      FunctionCallMethodNameLengthExceeded                The length of the method name exceeded the limit in a Function Call action.\n      FunctionCallArgumentsLengthExceeded                 The length of the arguments exceeded the limit in a Function Call action.\n  ActionError                                             An error happened during Acton execution\n    ActionErrorKind                                       The kind of ActionError happened\n      RuntimeCallError \n      ReceiptValidationError                              Describes the error for validating a receipt\n        ActionsValidationError                            Describes the error for validating a list of actions    \n          TotalPrepaidGasExceeded                         The total prepaid gas (for all given actions) exceeded the limit.\n          TotalNumberOfActionsExceeded                    The number of actions exceeded the given limit.\n          AddKeyMethodNamesNumberOfBytesExceeded          The total number of bytes of the method names exceeded the limit in a Add Key action.\n          AddKeyMethodNameLengthExceeded                  The length of some method name exceeded the limit in a Add Key action.\n          IntegerOverflow                                 Integer overflow during a compute.\n          InvalidAccountId                                Invalid account ID.\n          ContractSizeExceeded                            The size of the contract code exceeded the limit in a DeployContract action.\n          FunctionCallMethodNameLengthExceeded            The length of the method name exceeded the limit in a Function Call action.\n          FunctionCallArgumentsLengthExceeded             The length of the arguments exceeded the limit in a Function Call action.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"vmerror-and-subtypes",children:"VMerror and subtypes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"VMerror                                                   An error that occurs in the NEAR virtual machine\n  ExternalError                                           Serialized external error from External trait implementation\n  InconsistentStateError                                  An error that is caused by an operation on an inconsistent state (ie. an integer overflow by using a value from the given context\n    IntegerOverflow                                       Math operation with a value from the state resulted in a integer overflow\n  FunctionCallError \n    LinkError \n    WasmTrap \n    MethodResolveError \n      MethodEmptyName \n      MethodUTF8Error \n      MethodNotFound \n      MethodInvalidSignature \n    HostError \n      BadUTF16                                            String encoding is bad UTF-16 sequence\n      BadUTF8                                             String encoding is bad UTF-8 sequence\n      GasExceeded                                         Exceeded the prepaid ga\n      GasLimitExceeded                                    Exceeded the maximum amount of gas allowed to burn per contract\n      BalanceExceeded                                     Exceeded the account balance\n      EmptyMethodName                                     Tried to call an empty method nam\n      GuestPanic                                          Smart contract panicked\n      IntegerOverflow                                     IntegerOverflow happened during a contract execution\n      InvalidPromiseIndex                                 `promise_idx` does not correspond to existing promises\n      CannotAppendActionToJointPromise                    Actions can only be appended to non-joint promise.\n      CannotReturnJointPromise                            Returning joint promise is currently prohibited\n      InvalidPromiseResultIndex                           Accessed invalid promise result index\n      InvalidRegisterId                                   Accessed invalid register id\n      IteratorWasInvalidated                              Iterator `iterator_index` was invalidated after its creation by performing a mutable operation on trie\n      MemoryAccessViolation                               Accessed memory outside the bounds\n      InvalidReceiptIndex                                 VM Logic returned an invalid receipt index\n      InvalidIteratorIndex                                Iterator index `iterator_index` does not exist\n      InvalidAccountId                                    VM Logic returned an invalid account id\n      InvalidMethodName                                   VM Logic returned an invalid method name\n      InvalidPublicKey                                    VM Logic provided an invalid public key\n      ProhibitedInView                                    `method_name` is not allowed in view calls\n      NumberOfLogsExceeded                                The total number of logs will exceed the limit.\n      KeyLengthExceeded                                   The storage key length exceeded the limit.\n      ValueLengthExceeded                                 The storage value length exceeded the limit.\n      TotalLogLengthExceeded                              The total log length exceeded the limit.\n      NumberPromisesExceeded                              The maximum number of promises within a FunctionCall exceeded the limit.\n      NumberInputDataDependenciesExceeded                 The maximum number of input data dependencies exceeded the limit.\n      ReturnedValueLengthExceeded                         The returned value length exceeded the limit.\n      ContractSizeExceeded                                The contract size for DeployContract action exceeded the limit.\n    CompilationError \n      CodeDoesNotExist \n      WasmerCompileError \n      PrepareError                                        Error that can occur while preparing or executing Wasm smart-contract\n        Serialization                                     Error happened while serializing the module\n        Deserialization                                   Error happened while deserializing the module\n        InternalMemoryDeclared                            Internal memory declaration has been found in the module\n        GasInstrumentation                                Gas instrumentation failed.  This most likely indicates the module isn't valid\n        StackHeightInstrumentation                        Stack instrumentation failed.  This  most likely indicates the module isn't valid\n        Instantiate                                       Error happened during instantiation.  This might indicate that `start` function trapped, or module isn't instantiable and/or unlinkable\n        Memory                                            Error creating memory\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Got a question?",type:"tip",children:(0,i.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{533:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dapp-store-contract-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dapp-store-contract-registration"}},[e._v("#")]),e._v(" dApp Store Contract Registration")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("This guide explains how to register your smart contract in the Planq dApp store, and start earning income every time a user interacts with your smart contract.")]),e._v(" "),t("p",[e._v("The Planq dApp store is a revenue-per-transaction model, which allows developers to get paid for deploying their decentralized application (dApps) on Planq. Developers generate revenue every time a user interacts with their dApp in the dApp store, providing them a steady income. Users can discover new applications in the dApp store and pay for the transaction fees that finance the dApp's revenue. This value-reward exchange of dApp services for transaction fees is implemented by the "),t("RouterLink",{attrs:{to:"/x/revenue/spec/01_concepts.html"}},[e._v("x/revenue module")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("Address of a deployed smart contract.")]),e._v(" "),t("li",[e._v("Capability to sign transactions with the address that deployed the contract. If your smart contract was deployed by a contract using a "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Factory_method_pattern",target:"_blank",rel:"noopener noreferrer"}},[e._v("factory pattern"),t("OutboundLink")],1),e._v(", then the signing capaility is required for the address that deployed the factory.")]),e._v(" "),t("li",[e._v("The nonce of the contract deployment transaction. You can query the nonce, e.g. using the "),t("code",[e._v("eth_getTransactionByHash")]),e._v(" JSON-RPC endpoint.")]),e._v(" "),t("li",[e._v("Withdrawer address, in case you wish to receive your earnings at a specified address.")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[t("strong",[e._v("IMPORTANT")]),e._v(": If your contract is part of a development project, please ensure that the deployer of the contract (or the factory that deploys the contract) is an account that is owned by that project. This avoids the situation of a malicious individual/employee deployer (including former contributors) who leaves your project and could later change the withdrawal address unilaterally.")])]),e._v(" "),t("h2",{attrs:{id:"register-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-contract"}},[e._v("#")]),e._v(" Register Contract")]),e._v(" "),t("p",[e._v("To add your contract in the Planq dApp Store, you need to register a "),t("code",[e._v("revenue")]),e._v(" for that contract. The "),t("code",[e._v("revenue")]),e._v(" includes the details for receiving a cut of the transaction fees, which users pay for interacting with your smart contract. Every time a user submits a transaction to your registered smart contract, a part of the transaction fees (50% by default) is transferred to the withdrawer address specified in the "),t("code",[e._v("revenue")]),e._v(". If the withdrawer is not specified, the transaction fees are sent to the contract deployer.")]),e._v(" "),t("p",[e._v("You can register a contract by signing a transaction with the address that originally deployed the contract. You can use the following CLI command, where")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("$NONCE")]),e._v(" is the nonce of transaction that deployed the contract (e.g. "),t("code",[e._v("0")]),e._v("),")]),e._v(" "),t("li",[t("code",[e._v("$CONTRACT")]),e._v(" is the hex address of the deployed contract (e.g "),t("code",[e._v("0x5f6659B6F712c729c46786bA9562eC50907c67CF")]),e._v(") and")]),e._v(" "),t("li",[e._v("(optional) "),t("code",[e._v("$WITHDRAWER")]),e._v(" is the bech32 address of the address to receive the transaction fees (e.g. "),t("code",[e._v("plq1keyy3teyq7t7kuxgeek3v65n0j27k20v2ugysf")]),e._v("):")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBSZWdpc3RlciBhIHJldmVudWUgZm9yIHlvdXIgY29udHJhY3QKcGxhbnFkIHR4IHJldmVudWUgcmVnaXN0ZXIgJENPTlRSQUNUICROT05DRSAkV0lUSERSQVdFUiBcCi0tZnJvbT1kZXYwIFwgIyBjb250cmFjdCBkZXBsb3llciBrZXkKLS1nYXM9NzAwMDAwIC0tZ2FzLXByaWNlcz0xMDAwMGFwbGFucSBcICMgY2FuIHZhcnkgZGVwZW5kaW5nIG9uIHRoZSBuZXR3b3JrCg=="}}),e._v(" "),t("p",[e._v("After your transaction is submitted successfully, you can query your "),t("code",[e._v("revenue")]),e._v(" with :")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDaGVjayByZXZlbnVlcwpwbGFucWQgcSByZXZlbnVlIGNvbnRyYWN0ICRDT05UUkFDVAo="}}),e._v(" "),t("p",[e._v("Congrats ☄️☄️☄️ Now that you've registered a revenue for your contract, it is part of the Planq dApp store and you will receive a cut of the transaction fees every time a user interacts with your contract. If you wondering how large your cut is, have a look at the "),t("RouterLink",{attrs:{to:"/x/revenue/spec/07_parameters.html#developer-shares-amount"}},[e._v("revenue parameter "),t("code",[e._v("DeveloperShares")])]),e._v(", which is controlled through governance. You can query the parameters using our "),t("a",{attrs:{href:"https://api.evmos.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI documentation"),t("OutboundLink")],1),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"deployed-factory-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployed-factory-pattern"}},[e._v("#")]),e._v(" Deployed Factory Pattern")]),e._v(" "),t("p",[e._v("You can also register a contract which has been deployed by a smart contract instead of an "),t("a",{attrs:{href:"https://docs.planq.network/modules/evm/01_concepts.html#accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("EOA"),t("OutboundLink")],1),e._v(". In this case, you need to provide a sequence of nonces that proves the trace from an original deployer who deployed the factory to the contract that is being registered.")]),e._v(" "),t("p",[t("strong",[e._v("Example")]),e._v(" "),t("code",[e._v("DeployerEOA")]),e._v(" -> "),t("code",[e._v("FactoryA")]),e._v(" -> "),t("code",[e._v("FactoryB")]),e._v("-> "),t("code",[e._v("MyContract")]),e._v(": "),t("code",[e._v("DeployerEOA")]),e._v(" deploys a "),t("code",[e._v("FactoryA")]),e._v(" smart contract with nonce "),t("code",[e._v("5")]),e._v(". Then, "),t("code",[e._v("DeployerEOA")]),e._v(" sends a transaction to "),t("code",[e._v("FactoryA")]),e._v(" through which a "),t("code",[e._v("FactoryB")]),e._v(" smart contract is created. If we assume "),t("code",[e._v("FactoryB")]),e._v(" is the second contract created by "),t("code",[e._v("FactoryA")]),e._v(", then "),t("code",[e._v("FactoryA")]),e._v("'s nonce is "),t("code",[e._v("2")]),e._v(". Then, "),t("code",[e._v("DeployerEOA")]),e._v(" sends a transaction to the "),t("code",[e._v("FactoryB")]),e._v(" contract, through which "),t("code",[e._v("MyContract")]),e._v(" is created. If this is the first contract created by FactoryB - the nonce is "),t("code",[e._v("1")]),e._v(". To be able to verify that "),t("code",[e._v("DeployerEOA")]),e._v(" can register "),t("code",[e._v("MyContract")]),e._v(", we need to provide the following nonces: "),t("code",[e._v("[5, 2, 1]")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"update-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-contract"}},[e._v("#")]),e._v(" Update Contract")]),e._v(" "),t("p",[e._v("Registered contracts can also be updated. To update the withdrawer address of your "),t("code",[e._v("revenue")]),e._v(", use the following CLI command:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBVcGRhdGUgd2l0aGRyYXdlciBmb3IgeW91ciBjb250cmFjdApwbGFucWQgdHggcmV2ZW51ZSB1cGRhdGUgJENPTlRSQUNUICRXSVRIRFJBV0VSIFwKLS1nYXM9NzAwMDAwIC0tZ2FzLXByaWNlcz0xMDAwMGFwbGFucSBcCi0tZnJvbT1tbQo="}}),e._v(" "),t("p",[e._v("If the specified withdrawer is the same address as the deployer, then the revenue is updated with an empty withdrawer address, so that all transaction fees are sent to the deployer address.")]),e._v(" "),t("h2",{attrs:{id:"cancel-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cancel-contract"}},[e._v("#")]),e._v(" Cancel Contract")]),e._v(" "),t("p",[e._v("Revenues can also be canceled. In order to stop receiving transaction fees for interaction with your contract, use the following CLI command:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBDYW5jZWwgcmV2ZW51ZSBmb3IgeW91ciBjb250cmFjdApwbGFucWQgdHggcmV2ZW51ZSBjYW5jZWwgJENPTlRSQUNUIFwKLS1nYXM9NzAwMDAwIC0tZ2FzLXByaWNlcz0xMDAwMGFwbGFucSBcCi0tZnJvbT1tbQo="}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);
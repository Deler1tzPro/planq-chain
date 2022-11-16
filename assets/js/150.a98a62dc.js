(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{590:function(e,t,s){"use strict";s.r(t);var a=s(1),d=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[e._v("#")]),e._v(" Accounts")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("This document describes the in-built accounts system of Planq.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("a",{attrs:{href:"https://docs.cosmos.network/main/basics/accounts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Accounts"),t("OutboundLink")],1)]),e._v(" "),t("li",{attrs:{prereq:""}},[t("a",{attrs:{href:"https://ethereum.org/en/whitepaper/#ethereum-accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum Accounts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"planq-accounts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planq-accounts"}},[e._v("#")]),e._v(" Planq Accounts")]),e._v(" "),t("p",[e._v("Planq defines its own custom "),t("code",[e._v("Account")]),e._v(" type that uses Ethereum's ECDSA secp256k1 curve for keys. This\nsatisfies the "),t("a",{attrs:{href:"https://github.com/ethereum/EIPs/issues/84",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP84"),t("OutboundLink")],1),e._v(" for full "),t("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP44"),t("OutboundLink")],1),e._v(" paths.\nThe root HD path for Planq-based accounts is "),t("code",[e._v("m/44'/60'/0'/0")]),e._v(".")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXRoQWNjb3VudCBpbXBsZW1lbnRzIHRoZSBhdXRodHlwZXMuQWNjb3VudEkgaW50ZXJmYWNlIGFuZCBlbWJlZHMgYW4KLy8gYXV0aHR5cGVzLkJhc2VBY2NvdW50IHR5cGUuIEl0IGlzIGNvbXBhdGlibGUgd2l0aCB0aGUgYXV0aCBBY2NvdW50S2VlcGVyLgp0eXBlIEV0aEFjY291bnQgc3RydWN0IHsKCSp0eXBlcy5CYXNlQWNjb3VudCBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMSxvcHQsbmFtZT1iYXNlX2FjY291bnQsanNvbj1iYXNlQWNjb3VudCxwcm90bzMsZW1iZWRkZWQ9YmFzZV9hY2NvdW50JnF1b3Q7IGpzb246JnF1b3Q7YmFzZV9hY2NvdW50LG9taXRlbXB0eSZxdW90OyB5YW1sOiZxdW90O2Jhc2VfYWNjb3VudCZxdW90O2AKCUNvZGVIYXNoICAgICAgICAgICBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDIsb3B0LG5hbWU9Y29kZV9oYXNoLGpzb249Y29kZUhhc2gscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7Y29kZV9oYXNoLG9taXRlbXB0eSZxdW90OyB5YW1sOiZxdW90O2NvZGVfaGFzaCZxdW90O2AKfQ=="}})],1),e._v(" "),t("h2",{attrs:{id:"addresses-and-public-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addresses-and-public-keys"}},[e._v("#")]),e._v(" Addresses and Public Keys")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP-0173"),t("OutboundLink")],1),e._v(" defines a new format for segregated witness output addresses that contains a human-readable part that identifies the Bech32 usage. Planq uses the following HRP (human readable prefix) as the base HRP:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Network")]),e._v(" "),t("th",[e._v("Mainnet")]),e._v(" "),t("th",[e._v("Testnet")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Planq")]),e._v(" "),t("td",[t("code",[e._v("plq")])]),e._v(" "),t("td",[t("code",[e._v("plq")])])])])]),e._v(" "),t("p",[e._v("There are 3 main types of HRP for the "),t("code",[e._v("Addresses")]),e._v("/"),t("code",[e._v("PubKeys")]),e._v(" available by default on Planq:")]),e._v(" "),t("ul",[t("li",[e._v("Addresses and Keys for "),t("strong",[e._v("accounts")]),e._v(", which identify users (e.g. the sender of a "),t("code",[e._v("message")]),e._v("). They are derived using the "),t("strong",[t("code",[e._v("eth_secp256k1")])]),e._v(" curve.")]),e._v(" "),t("li",[e._v("Addresses and Keys for "),t("strong",[e._v("validator operators")]),e._v(", which identify the operators of validators. They are derived using the "),t("strong",[t("code",[e._v("eth_secp256k1")])]),e._v(" curve.")]),e._v(" "),t("li",[e._v("Addresses and Keys for "),t("strong",[e._v("consensus nodes")]),e._v(", which identify the validator nodes participating in consensus. They are derived using the "),t("strong",[t("code",[e._v("ed25519")])]),e._v(" curve.")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th"),e._v(" "),t("th",[e._v("Address bech32 Prefix")]),e._v(" "),t("th",[e._v("Pubkey bech32 Prefix")]),e._v(" "),t("th",[e._v("Curve")]),e._v(" "),t("th",[e._v("Address byte length")]),e._v(" "),t("th",[e._v("Pubkey byte length")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Accounts")]),e._v(" "),t("td",[t("code",[e._v("plq")])]),e._v(" "),t("td",[t("code",[e._v("plqpub")])]),e._v(" "),t("td",[t("code",[e._v("eth_secp256k1")])]),e._v(" "),t("td",[t("code",[e._v("20")])]),e._v(" "),t("td",[t("code",[e._v("33")]),e._v(" (compressed)")])]),e._v(" "),t("tr",[t("td",[e._v("Validator Operator")]),e._v(" "),t("td",[t("code",[e._v("plqvaloper")])]),e._v(" "),t("td",[t("code",[e._v("plqvaloperpub")])]),e._v(" "),t("td",[t("code",[e._v("eth_secp256k1")])]),e._v(" "),t("td",[t("code",[e._v("20")])]),e._v(" "),t("td",[t("code",[e._v("33")]),e._v(" (compressed)")])]),e._v(" "),t("tr",[t("td",[e._v("Consensus Nodes")]),e._v(" "),t("td",[t("code",[e._v("plqvalcons")])]),e._v(" "),t("td",[t("code",[e._v("plqvalconspub")])]),e._v(" "),t("td",[t("code",[e._v("ed25519")])]),e._v(" "),t("td",[t("code",[e._v("20")])]),e._v(" "),t("td",[t("code",[e._v("32")])])])])]),e._v(" "),t("h2",{attrs:{id:"address-formats-for-clients"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#address-formats-for-clients"}},[e._v("#")]),e._v(" Address formats for clients")]),e._v(" "),t("p",[t("code",[e._v("EthAccount")]),e._v(" can be represented in both "),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/Bech32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bech32"),t("OutboundLink")],1),e._v(" ("),t("code",[e._v("plq1...")]),e._v(") and hex ("),t("code",[e._v("0x...")]),e._v(") formats for Ethereum's Web3 tooling compatibility.")]),e._v(" "),t("p",[e._v("The Bech32 format is the default format for Cosmos-SDK queries and transactions through CLI and REST\nclients. The hex format on the other hand, is the Ethereum "),t("code",[e._v("common.Address")]),e._v(" representation of a\nCosmos "),t("code",[e._v("sdk.AccAddress")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Address (Bech32)")]),e._v(": "),t("code",[e._v("plq1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw")])]),e._v(" "),t("li",[t("strong",[e._v("Address ("),t("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-55",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP55"),t("OutboundLink")],1),e._v(" Hex)")]),e._v(": "),t("code",[e._v("0x91defC7fE5603DFA8CC9B655cF5772459BF10c6f")])]),e._v(" "),t("li",[t("strong",[e._v("Compressed Public Key")]),e._v(": "),t("code",[e._v('{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AsV5oddeB+hkByIJo/4lZiVUgXTzNfBPKC73cZ4K1YD2"}')])])]),e._v(" "),t("h3",{attrs:{id:"address-conversion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#address-conversion"}},[e._v("#")]),e._v(" Address conversion")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("planqd debug addr <address>")]),e._v(" can be used to convert an address between hex and bech32 formats. For example:")]),e._v(" "),t("p",[e._v(":::: tabs\n::: tab Bech32")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGRlYnVnIGFkZHIgcGxxMXozdDU1bTBsOWgwZXVwdXozZHA1dDVjeXB5djY3NGpqN216Mmp3CiAgQWRkcmVzczogWzIwIDg3IDc0IDEwOSAyNTUgNDUgMjIzIDE1OCA3IDEzMCAxMzkgNjcgNjkgMjExIDQgOSAyNSAxNzUgODYgODJdCiAgQWRkcmVzcyAoaGV4KTogMTQ1NzRBNkRGRjJEREY5RTA3ODI4QjQzNDVEMzA0MDkxOUFGNTY1MgogIEJlY2gzMiBBY2M6IHBscTF6M3Q1NW0wbDloMGV1cHV6M2RwNXQ1Y3lweXY2NzRqajdtejJqdwogIEJlY2gzMiBWYWw6IHBscXZhbG9wZXIxejN0NTVtMGw5aDBldXB1ejNkcDV0NWN5cHl2Njc0ampuNGQ2bm4K"}}),e._v(" "),t("p",[e._v(":::\n::: tab Hex")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGRlYnVnIGFkZHIgMTQ1NzRBNkRGRjJEREY5RTA3ODI4QjQzNDVEMzA0MDkxOUFGNTY1MgogIEFkZHJlc3M6IFsyMCA4NyA3NCAxMDkgMjU1IDQ1IDIyMyAxNTggNyAxMzAgMTM5IDY3IDY5IDIxMSA0IDkgMjUgMTc1IDg2IDgyXQogIEFkZHJlc3MgKGhleCk6IDE0NTc0QTZERkYyRERGOUUwNzgyOEI0MzQ1RDMwNDA5MTlBRjU2NTIKICBCZWNoMzIgQWNjOiBwbHExejN0NTVtMGw5aDBldXB1ejNkcDV0NWN5cHl2Njc0amo3bXoyancKICBCZWNoMzIgVmFsOiBwbHF2YWxvcGVyMXozdDU1bTBsOWgwZXVwdXozZHA1dDVjeXB5djY3NGpqbjRkNm5uCg=="}}),e._v(" "),t("p",[e._v(":::\n::::")]),e._v(" "),t("h3",{attrs:{id:"key-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-output"}},[e._v("#")]),e._v(" Key output")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("The Cosmos SDK Keyring output (i.e "),t("code",[e._v("planqd keys")]),e._v(") only supports addresses and public keys in Bech32 format.")])]),e._v(" "),t("p",[e._v("We can use the "),t("code",[e._v("keys show")]),e._v(" command of "),t("code",[e._v("planqd")]),e._v(" with the flag "),t("code",[e._v("--bech <type> (acc|val|cons)")]),e._v(" to\nobtain the addresses and keys as mentioned above,")]),e._v(" "),t("p",[e._v(":::: tabs\n::: tab Account")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgc2hvdyBkZXYwIC0tYmVjaCBhY2MKLSBuYW1lOiBkZXYwCiAgdHlwZTogbG9jYWwKICBhZGRyZXNzOiBwbHExejN0NTVtMGw5aDBldXB1ejNkcDV0NWN5cHl2Njc0amo3bXoyancKICBwdWJrZXk6ICd7JnF1b3Q7QHR5cGUmcXVvdDs6JnF1b3Q7L2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleSZxdW90OywmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7QXNWNW9kZGVCK2hrQnlJSm8vNGxaaVZVZ1hUek5mQlBLQzczY1o0SzFZRDImcXVvdDt9JwogIG1uZW1vbmljOiAmcXVvdDsmcXVvdDsK"}}),e._v(" "),t("p",[e._v(":::\n::: tab Validator")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgc2hvdyBkZXYwIC0tYmVjaCB2YWwKLSBuYW1lOiBkZXYwCiAgdHlwZTogbG9jYWwKICBhZGRyZXNzOiBwbHF2YWxvcGVyMXozdDU1bTBsOWgwZXVwdXozZHA1dDVjeXB5djY3NGpqbjRkNm5uCiAgcHVia2V5OiAneyZxdW90O0B0eXBlJnF1b3Q7OiZxdW90Oy9ldGhlcm1pbnQuY3J5cHRvLnYxLmV0aHNlY3AyNTZrMS5QdWJLZXkmcXVvdDssJnF1b3Q7a2V5JnF1b3Q7OiZxdW90O0FzVjVvZGRlQitoa0J5SUpvLzRsWmlWVWdYVHpOZkJQS0M3M2NaNEsxWUQyJnF1b3Q7fScKICBtbmVtb25pYzogJnF1b3Q7JnF1b3Q7Cg=="}}),e._v(" "),t("p",[e._v(":::\n::: tab Consensus")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgc2hvdyBkZXYwIC0tYmVjaCBjb25zCi0gbmFtZTogZGV2MAogIHR5cGU6IGxvY2FsCiAgYWRkcmVzczogcGxxdmFsY29uczFybGxxYTVkOTduNnp5amh5NmNuc2NjN3p1MzB6am4zZjd3eWoybgogIHB1YmtleTogJ3smcXVvdDtAdHlwZSZxdW90OzomcXVvdDsvZXRoZXJtaW50LmNyeXB0by52MS5ldGhzZWNwMjU2azEuUHViS2V5JnF1b3Q7LCZxdW90O2tleSZxdW90OzomcXVvdDtBL2ZWTGdJcWlMeWtGUXh1bTk2SmtTT29UZW1yWEQwdEZhRlExQjBjcEIyYyZxdW90O30nCiAgbW5lbW9uaWM6ICZxdW90OyZxdW90Owo="}}),e._v(" "),t("p",[e._v(":::\n::::")]),e._v(" "),t("h2",{attrs:{id:"querying-an-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querying-an-account"}},[e._v("#")]),e._v(" Querying an Account")]),e._v(" "),t("p",[e._v("You can query an account address using the CLI, gRPC or")]),e._v(" "),t("h3",{attrs:{id:"command-line-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface"}},[e._v("#")]),e._v(" Command Line Interface")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBOT1RFOiB0aGUgLS1vdXRwdXQgKC1vKSBmbGFnIHdpbGwgZGVmaW5lIHRoZSBvdXRwdXQgZm9ybWF0IGluIEpTT04gb3IgWUFNTCAodGV4dCkKcGxhbnFkIHEgYXV0aCBhY2NvdW50ICQocGxhbnFkIGtleXMgc2hvdyBkZXYwIC1hKSAtbyB0ZXh0CnwKICAnQHR5cGUnOiAvZXRoZXJtaW50LnR5cGVzLnYxLkV0aEFjY291bnQKICBiYXNlX2FjY291bnQ6CiAgICBhY2NvdW50X251bWJlcjogJnF1b3Q7MCZxdW90OwogICAgYWRkcmVzczogcGxxMXozdDU1bTBsOWgwZXVwdXozZHA1dDVjeXB5djY3NGpqN216Mmp3CiAgICBwdWJfa2V5OgogICAgICAnQHR5cGUnOiAvZXRoZXJtaW50LmNyeXB0by52MS5ldGhzZWNwMjU2azEuUHViS2V5CiAgICAgIGtleTogQXNWNW9kZGVCK2hrQnlJSm8vNGxaaVZVZ1hUek5mQlBLQzczY1o0SzFZRDIKICAgIHNlcXVlbmNlOiAmcXVvdDsxJnF1b3Q7CiAgY29kZV9oYXNoOiAweGM1ZDI0NjAxODZmNzIzM2M5MjdlN2RiMmRjYzcwM2MwZTUwMGI2NTNjYTgyMjczYjdiZmFkODA0NWQ4NWE0NzAK"}}),e._v(" "),t("h3",{attrs:{id:"cosmos-grpc-and-rest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-grpc-and-rest"}},[e._v("#")]),e._v(" Cosmos gRPC and REST")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:" bash",base64:"IyBHRVQgL2Nvc21vcy9hdXRoL3YxYmV0YTEvYWNjb3VudHMve2FkZHJlc3N9CmN1cmwgLVggR0VUICZxdW90O2h0dHA6Ly9sb2NhbGhvc3Q6MTAzMzcvY29zbW9zL2F1dGgvdjFiZXRhMS9hY2NvdW50cy9wbHExNGF1MzIyazltdW5rbXg1d3JjaHo5cTMwanVmNXdqZ3oyY2Zxa3UmcXVvdDsgLUggJnF1b3Q7YWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7Cg=="}}),e._v(" "),t("h3",{attrs:{id:"json-rpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc"}},[e._v("#")]),e._v(" JSON-RPC")]),e._v(" "),t("p",[e._v("To retrieve the Ethereum hex address using Web3, use the JSON-RPC "),t("RouterLink",{attrs:{to:"/developers/json-rpc/endpoints.html#eth-accounts"}},[t("code",[e._v("eth_accounts")])]),e._v(" or "),t("RouterLink",{attrs:{to:"/developers/json-rpc/endpoints.html#personal-listAccounts"}},[t("code",[e._v("personal_listAccounts")])]),e._v(" endpoints:")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBxdWVyeSBhZ2FpbnN0IGEgbG9jYWwgbm9kZQpjdXJsIC1YIFBPU1QgLS1kYXRhICd7JnF1b3Q7anNvbnJwYyZxdW90OzomcXVvdDsyLjAmcXVvdDssJnF1b3Q7bWV0aG9kJnF1b3Q7OiZxdW90O2V0aF9hY2NvdW50cyZxdW90OywmcXVvdDtwYXJhbXMmcXVvdDs6W10sJnF1b3Q7aWQmcXVvdDs6MX0nIC1IICZxdW90O0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbiZxdW90OyBodHRwOi8vbG9jYWxob3N0Ojg1NDUKCmN1cmwgLVggUE9TVCAtLWRhdGEgJ3smcXVvdDtqc29ucnBjJnF1b3Q7OiZxdW90OzIuMCZxdW90OywmcXVvdDttZXRob2QmcXVvdDs6JnF1b3Q7cGVyc29uYWxfbGlzdEFjY291bnRzJnF1b3Q7LCZxdW90O3BhcmFtcyZxdW90OzpbXSwmcXVvdDtpZCZxdW90OzoxfScgLUggJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IGh0dHA6Ly9sb2NhbGhvc3Q6ODU0NQo="}})],1)}),[],!1,null,null,null);t.default=d.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{518:function(t,e,g){"use strict";g.r(e);var s=g(1),d=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"planq-clients"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#planq-clients"}},[t._v("#")]),t._v(" Planq Clients")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v("Learn about all the available services for clients")]),t._v(" "),e("p",[t._v("The Planq supports different clients in order to support Cosmos and Ethereum transactions\nand queries:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default Port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("Cosmos "),e("a",{attrs:{href:"#cosmos-grpc"}},[t._v("gRPC")])])]),t._v(" "),e("td",[t._v("Query or send Planq transactions using gRPC")]),t._v(" "),e("td",[e("code",[t._v("9090")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Cosmos REST ("),e("a",{attrs:{href:"#cosmos-grpc-gateway"}},[t._v("gRPC-Gateway")]),t._v(")")])]),t._v(" "),e("td",[t._v("Query or send Planq transactions using an HTTP RESTful API")]),t._v(" "),e("td",[e("code",[t._v("9091")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Ethereum "),e("a",{attrs:{href:"#ethereum-json-rpc"}},[t._v("JSON-RPC")])])]),t._v(" "),e("td",[t._v("Query Ethereum-formatted transactions and blocks or send Ethereum txs using JSON-RPC")]),t._v(" "),e("td",[e("code",[t._v("8545")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Ethereum "),e("a",{attrs:{href:"#ethereum-websocket"}},[t._v("Websocket")])])]),t._v(" "),e("td",[t._v("Subscribe to Ethereum logs and events emitted in smart contracts.")]),t._v(" "),e("td",[e("code",[t._v("8586")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Tendermint "),e("a",{attrs:{href:"#tendermint-rpc"}},[t._v("RPC")])])]),t._v(" "),e("td",[t._v("Subscribe to Ethereum logs and events emitted in smart contracts.")]),t._v(" "),e("td",[e("code",[t._v("26657")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Tendermint "),e("a",{attrs:{href:"#tendermint-websocket"}},[t._v("Websocket")])])]),t._v(" "),e("td",[t._v("Query transactions, blocks, consensus state, broadcast transactions, etc.")]),t._v(" "),e("td",[e("code",[t._v("26657")])])]),t._v(" "),e("tr",[e("td",[e("strong",[t._v("Command Line Interface ("),e("a",{attrs:{href:"#cli"}},[t._v("CLI")]),t._v(")")])]),t._v(" "),e("td",[t._v("Query or send Planq transactions using your Terminal or Console.")]),t._v(" "),e("td",[t._v("N/A")])])])]),t._v(" "),e("h2",{attrs:{id:"cosmos-grpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-grpc"}},[t._v("#")]),t._v(" Cosmos gRPC")]),t._v(" "),e("p",[t._v("Planq exposes gRPC endpoints for all the integrated Cosmos SDK modules. This makes it easier for\nwallets and block explorers to interact with the Proof-of-Stake logic and native Cosmos transactions and queries.")]),t._v(" "),e("h3",{attrs:{id:"cosmos-grpc-gateway-http-rest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-grpc-gateway-http-rest"}},[t._v("#")]),t._v(" Cosmos gRPC-Gateway (HTTP REST)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://grpc-ecosystem.github.io/grpc-gateway/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC-Gateway"),e("OutboundLink")],1),t._v(" reads a gRPC service definition and\ngenerates a reverse-proxy server which translates RESTful JSON API into gRPC. With gRPC-Gateway,\nusers can use REST to interact with the Cosmos gRPC service.")]),t._v(" "),e("p",[t._v("See the list of supported gRPC-Gateway API endpoints for the Planq testnet "),e("a",{attrs:{href:"https://api.evmos.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"ethereum-json-rpc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-json-rpc"}},[t._v("#")]),t._v(" Ethereum JSON-RPC")]),t._v(" "),e("p",[t._v("Planq supports most of the standard "),e("RouterLink",{attrs:{to:"/developers/json-rpc/server.html"}},[t._v("JSON-RPC APIs")]),t._v(" to connect with existing Ethereum-compatible web3 tooling.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("Check out the list of supported JSON-RPC API "),e("RouterLink",{attrs:{to:"/developers/json-rpc/endpoints.html"}},[t._v("endpoints")]),t._v(" and "),e("RouterLink",{attrs:{to:"/developers/json-rpc/namespaces.html"}},[t._v("namespaces")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"ethereum-websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-websocket"}},[t._v("#")]),t._v(" Ethereum Websocket")]),t._v(" "),e("p",[t._v("Then, start a websocket subscription with "),e("a",{attrs:{href:"https://github.com/hashrocket/ws",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("ws")]),e("OutboundLink")],1)]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBjb25uZWN0IHRvIHRlbmRlcm1pbnQgd2Vic29ja2V0IGF0IHBvcnQgODU0NiBhcyBkZWZpbmVkIGFib3ZlCndzIHdzOi8vbG9jYWxob3N0Ojg1NDYvCgojIHN1YnNjcmliZSB0byBuZXcgRXRoZXJldW0tZm9ybWF0dGVkIGJsb2NrIEhlYWRlcnMKJmd0OyB7JnF1b3Q7aWQmcXVvdDs6IDEsICZxdW90O21ldGhvZCZxdW90OzogJnF1b3Q7ZXRoX3N1YnNjcmliZSZxdW90OywgJnF1b3Q7cGFyYW1zJnF1b3Q7OiBbJnF1b3Q7bmV3SGVhZHMmcXVvdDssIHt9XX0KJmx0OyB7JnF1b3Q7anNvbnJwYyZxdW90OzomcXVvdDsyLjAmcXVvdDssJnF1b3Q7cmVzdWx0JnF1b3Q7OiZxdW90OzB4NDRlMDEwY2IyYzMxNjFlOWMwMjIwN2ZmMTcyMTY2ZWYmcXVvdDssJnF1b3Q7aWQmcXVvdDs6MX0K"}}),t._v(" "),e("h2",{attrs:{id:"tendermint-websocket"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-websocket"}},[t._v("#")]),t._v(" Tendermint Websocket")]),t._v(" "),e("p",[t._v("Tendermint Core provides a Websocket connection to subscribe or unsubscribe to Tendermint ABCI events.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("For more info about how to subscribe to events, please refer to the official "),e("a",{attrs:{href:"https://docs.tendermint.com/v0.34/tendermint-core/subscription.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint documentation"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDtzdWJzY3JpYmUmcXVvdDssCiAgICAmcXVvdDtpZCZxdW90OzogJnF1b3Q7MCZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDt0bS5ldmVudD0nJmx0O2V2ZW50X3ZhbHVlJmd0OycgQU5EIGV2ZW50VHlwZS5ldmVudEF0dHJpYnV0ZT0nJmx0O2F0dHJpYnV0ZV92YWx1ZSZndDsnJnF1b3Q7CiAgICB9Cn0K"}}),t._v(" "),e("h3",{attrs:{id:"list-of-tendermint-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#list-of-tendermint-events"}},[t._v("#")]),t._v(" List of Tendermint Events")]),t._v(" "),e("p",[t._v("The main events you can subscribe to are:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("NewBlock")]),t._v(": Contains "),e("code",[t._v("events")]),t._v(" triggered during "),e("code",[t._v("BeginBlock")]),t._v(" and "),e("code",[t._v("EndBlock")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("Tx")]),t._v(": Contains "),e("code",[t._v("events")]),t._v(" triggered during "),e("code",[t._v("DeliverTx")]),t._v(" (i.e. transaction processing).")]),t._v(" "),e("li",[e("code",[t._v("ValidatorSetUpdates")]),t._v(": Contains validator set updates for the block.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("👉 The list of events types and values for each Cosmos SDK module can be found in the "),e("RouterLink",{attrs:{to:"/modules/"}},[t._v("Modules Specification")]),t._v(" section.\nCheck the "),e("code",[t._v("Events")]),t._v(" page to obtain the event list of each supported module on Planq.")],1)]),t._v(" "),e("p",[t._v("List of all Tendermint event keys:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Event Type")]),t._v(" "),e("th",[t._v("Categories")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Subscribe to a specific event")]),t._v(" "),e("td",[e("code",[t._v('"tm.event"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("Subscribe to a specific transaction")]),t._v(" "),e("td",[e("code",[t._v('"tx.hash"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("Subscribe to transactions at a specific block height")]),t._v(" "),e("td",[e("code",[t._v('"tx.height"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("Index "),e("code",[t._v("BeginBlock")]),t._v(" and "),e("code",[t._v("Endblock")]),t._v(" events")]),t._v(" "),e("td",[e("code",[t._v('"block.height"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("Subscribe to ABCI "),e("code",[t._v("BeginBlock")]),t._v(" events")]),t._v(" "),e("td",[e("code",[t._v('"begin_block"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("Subscribe to ABCI "),e("code",[t._v("EndBlock")]),t._v(" events")]),t._v(" "),e("td",[e("code",[t._v('"end_block"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])])])]),t._v(" "),e("p",[t._v("Below is a list of values that you can use to subscribe for the "),e("code",[t._v("tm.event")]),t._v(" type:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",[t._v("Event Value")]),t._v(" "),e("th",[t._v("Categories")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("New block")]),t._v(" "),e("td",[e("code",[t._v('"NewBlock"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("New block header")]),t._v(" "),e("td",[e("code",[t._v('"NewBlockHeader"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("New Byzantine Evidence")]),t._v(" "),e("td",[e("code",[t._v('"NewEvidence"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("New transaction")]),t._v(" "),e("td",[e("code",[t._v('"Tx"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("Validator set updated")]),t._v(" "),e("td",[e("code",[t._v('"ValidatorSetUpdates"')])]),t._v(" "),e("td",[e("code",[t._v("block")])])]),t._v(" "),e("tr",[e("td",[t._v("Block sync status")]),t._v(" "),e("td",[e("code",[t._v('"BlockSyncStatus"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("lock")]),t._v(" "),e("td",[e("code",[t._v('"Lock"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("New consensus round")]),t._v(" "),e("td",[e("code",[t._v('"NewRound"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("Polka")]),t._v(" "),e("td",[e("code",[t._v('"Polka"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("Relock")]),t._v(" "),e("td",[e("code",[t._v('"Relock"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("State sync status")]),t._v(" "),e("td",[e("code",[t._v('"StateSyncStatus"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("Timeout propose")]),t._v(" "),e("td",[e("code",[t._v('"TimeoutPropose"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("Timeout wait")]),t._v(" "),e("td",[e("code",[t._v('"TimeoutWait"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("Unlock")]),t._v(" "),e("td",[e("code",[t._v('"Unlock"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("Block is valid")]),t._v(" "),e("td",[e("code",[t._v('"ValidBlock"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])]),t._v(" "),e("tr",[e("td",[t._v("Consensus vote")]),t._v(" "),e("td",[e("code",[t._v('"Vote"')])]),t._v(" "),e("td",[e("code",[t._v("consensus")])])])])]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"d3Mgd3M6Ly9sb2NhbGhvc3Q6MjY2NTcvd2Vic29ja2V0CiZndDsgeyAmcXVvdDtqc29ucnBjJnF1b3Q7OiAmcXVvdDsyLjAmcXVvdDssICZxdW90O21ldGhvZCZxdW90OzogJnF1b3Q7c3Vic2NyaWJlJnF1b3Q7LCAmcXVvdDtwYXJhbXMmcXVvdDs6IFsmcXVvdDt0bS5ldmVudD0nVmFsaWRhdG9yU2V0VXBkYXRlcycmcXVvdDtdLCAmcXVvdDtpZCZxdW90OzogMSB9Cg=="}}),t._v(" "),e("p",[t._v("Example response:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDtxdWVyeSZxdW90OzogJnF1b3Q7dG0uZXZlbnQ9J1ZhbGlkYXRvclNldFVwZGF0ZXMnJnF1b3Q7LAogICAgICAgICZxdW90O2RhdGEmcXVvdDs6IHsKICAgICAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7dGVuZGVybWludC9ldmVudC9WYWxpZGF0b3JTZXRVcGRhdGVzJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogewogICAgICAgICAgICAgICZxdW90O3ZhbGlkYXRvcl91cGRhdGVzJnF1b3Q7OiBbCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6ICZxdW90OzA5RUFEMDIyRkQyNURFM0EwMkU2NEIwRkU5NjEwQjE0MTcxODNFRTQmcXVvdDssCiAgICAgICAgICAgICAgICAgICZxdW90O3B1Yl9rZXkmcXVvdDs6IHsKICAgICAgICAgICAgICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDt0ZW5kZXJtaW50L1B1YktleUVkMjU1MTkmcXVvdDssCiAgICAgICAgICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90O3d3MHo0V2FaMFhnK1lJMTB3NDN3VFdiQm1NM2RwVnphNG1tU1FZc2QwY2s9JnF1b3Q7CiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICZxdW90O3ZvdGluZ19wb3dlciZxdW90OzogJnF1b3Q7MTAmcXVvdDssCiAgICAgICAgICAgICAgICAgICZxdW90O3Byb3Bvc2VyX3ByaW9yaXR5JnF1b3Q7OiAmcXVvdDswJnF1b3Q7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgXQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQp9Cg=="}}),t._v(" "),e("h2",{attrs:{id:"cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),e("p",[t._v("Users can use the "),e("code",[t._v(t._s(t.$themeConfig.project.binary))]),t._v(" binary to interact directly with an Planq node\nthough the CLI.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("👉 To use the CLI, you will need to provide a Tendermint RPC address for the "),e("code",[t._v("--node")]),t._v(" flag.\nLook for a publicly available addresses for testnet and mainnet in the "),e("RouterLink",{attrs:{to:"/developers/connect.html"}},[t._v("Quick Connect")]),t._v(" page.")],1)]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Transactions")]),t._v(": "),e("code",[t._v(t._s(t.$themeConfig.project.binary)+" tx")])]),t._v(" "),e("p",[t._v("The list of available commands, as of "),e("code",[t._v("v1.0.0")]),t._v(", are:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"QXZhaWxhYmxlIENvbW1hbmRzOgogIGF1dGh6ICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbiB0cmFuc2FjdGlvbnMgc3ViY29tbWFuZHMKICBiYW5rICAgICAgICAgICAgICAgIEJhbmsgdHJhbnNhY3Rpb24gc3ViY29tbWFuZHMKICBicm9hZGNhc3QgICAgICAgICAgIEJyb2FkY2FzdCB0cmFuc2FjdGlvbnMgZ2VuZXJhdGVkIG9mZmxpbmUKICBjcmlzaXMgICAgICAgICAgICAgIENyaXNpcyB0cmFuc2FjdGlvbnMgc3ViY29tbWFuZHMKICBkZWNvZGUgICAgICAgICAgICAgIERlY29kZSBhIGJpbmFyeSBlbmNvZGVkIHRyYW5zYWN0aW9uIHN0cmluZwogIGRpc3RyaWJ1dGlvbiAgICAgICAgRGlzdHJpYnV0aW9uIHRyYW5zYWN0aW9ucyBzdWJjb21tYW5kcwogIGVuY29kZSAgICAgICAgICAgICAgRW5jb2RlIHRyYW5zYWN0aW9ucyBnZW5lcmF0ZWQgb2ZmbGluZQogIGVyYzIwICAgICAgICAgICAgICAgZXJjMjAgc3ViY29tbWFuZHMKICBldmlkZW5jZSAgICAgICAgICAgIEV2aWRlbmNlIHRyYW5zYWN0aW9uIHN1YmNvbW1hbmRzCiAgZXZtICAgICAgICAgICAgICAgICBldm0gdHJhbnNhY3Rpb25zIHN1YmNvbW1hbmRzCiAgZmVlZ3JhbnQgICAgICAgICAgICBGZWVncmFudCB0cmFuc2FjdGlvbnMgc3ViY29tbWFuZHMKICBnb3YgICAgICAgICAgICAgICAgIEdvdmVybmFuY2UgdHJhbnNhY3Rpb25zIHN1YmNvbW1hbmRzCiAgaWJjICAgICAgICAgICAgICAgICBJQkMgdHJhbnNhY3Rpb24gc3ViY29tbWFuZHMKICBpYmMtdHJhbnNmZXIgICAgICAgIElCQyBmdW5naWJsZSB0b2tlbiB0cmFuc2ZlciB0cmFuc2FjdGlvbiBzdWJjb21tYW5kcwogIG11bHRpc2lnbiAgICAgICAgICAgR2VuZXJhdGUgbXVsdGlzaWcgc2lnbmF0dXJlcyBmb3IgdHJhbnNhY3Rpb25zIGdlbmVyYXRlZCBvZmZsaW5lCiAgbXVsdGlzaWduLWJhdGNoICAgICBBc3NlbWJsZSBtdWx0aXNpZyB0cmFuc2FjdGlvbnMgaW4gYmF0Y2ggZnJvbSBiYXRjaCBzaWduYXR1cmVzCiAgc2lnbiAgICAgICAgICAgICAgICBTaWduIGEgdHJhbnNhY3Rpb24gZ2VuZXJhdGVkIG9mZmxpbmUKICBzaWduLWJhdGNoICAgICAgICAgIFNpZ24gdHJhbnNhY3Rpb24gYmF0Y2ggZmlsZXMKICBzbGFzaGluZyAgICAgICAgICAgIFNsYXNoaW5nIHRyYW5zYWN0aW9uIHN1YmNvbW1hbmRzCiAgc3Rha2luZyAgICAgICAgICAgICBTdGFraW5nIHRyYW5zYWN0aW9uIHN1YmNvbW1hbmRzCiAgdmFsaWRhdGUtc2lnbmF0dXJlcyB2YWxpZGF0ZSB0cmFuc2FjdGlvbnMgc2lnbmF0dXJlcwogIHZlc3RpbmcgICAgICAgICAgICAgVmVzdGluZyB0cmFuc2FjdGlvbiBzdWJjb21tYW5kcwo="}})],1),t._v(" "),e("li",[e("p",[e("strong",[t._v("Queries")]),t._v(": "),e("code",[t._v(t._s(t.$themeConfig.project.binary)+" query")])]),t._v(" "),e("p",[t._v("The list of available commands, as of "),e("code",[t._v("v3.0.0")]),t._v(", are:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"QXZhaWxhYmxlIENvbW1hbmRzOgogIGFjY291bnQgICAgICAgICAgICAgICAgICBRdWVyeSBmb3IgYWNjb3VudCBieSBhZGRyZXNzCiAgYXV0aCAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgYXV0aCBtb2R1bGUKICBhdXRoeiAgICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBhdXRoeiBtb2R1bGUKICBiYW5rICAgICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBiYW5rIG1vZHVsZQogIGJsb2NrICAgICAgICAgICAgICAgICAgICBHZXQgdmVyaWZpZWQgZGF0YSBmb3IgYSB0aGUgYmxvY2sgYXQgZ2l2ZW4gaGVpZ2h0CiAgY2xhaW1zICAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgY2xhaW1zIG1vZHVsZQogIGRpc3RyaWJ1dGlvbiAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIGRpc3RyaWJ1dGlvbiBtb2R1bGUKICBlcG9jaHMgICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBlcG9jaHMgbW9kdWxlCiAgZXJjMjAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgZXJjMjAgbW9kdWxlCiAgZXZpZGVuY2UgICAgICAgICAgICAgICAgIFF1ZXJ5IGZvciBldmlkZW5jZSBieSBoYXNoIG9yIGZvciBhbGwgKHBhZ2luYXRlZCkgc3VibWl0dGVkIGV2aWRlbmNlCiAgZXZtICAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgZXZtIG1vZHVsZQogIGZlZWdyYW50ICAgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIGZlZWdyYW50IG1vZHVsZQogIGZlZW1hcmtldCAgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIGZlZSBtYXJrZXQgbW9kdWxlCiAgZ292ICAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgZ292ZXJuYW5jZSBtb2R1bGUKICBpYmMgICAgICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBJQkMgbW9kdWxlCiAgaWJjLXRyYW5zZmVyICAgICAgICAgICAgIElCQyBmdW5naWJsZSB0b2tlbiB0cmFuc2ZlciBxdWVyeSBzdWJjb21tYW5kcwogIGluY2VudGl2ZXMgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIGluY2VudGl2ZXMgbW9kdWxlCiAgaW5mbGF0aW9uICAgICAgICAgICAgICAgIFF1ZXJ5aW5nIGNvbW1hbmRzIGZvciB0aGUgaW5mbGF0aW9uIG1vZHVsZQogIHBhcmFtcyAgICAgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIHBhcmFtcyBtb2R1bGUKICByZWNvdmVyeSAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSByZWNvdmVyeSBtb2R1bGUKICBzbGFzaGluZyAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBzbGFzaGluZyBtb2R1bGUKICBzdGFraW5nICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSBzdGFraW5nIG1vZHVsZQogIHRlbmRlcm1pbnQtdmFsaWRhdG9yLXNldCBHZXQgdGhlIGZ1bGwgdGVuZGVybWludCB2YWxpZGF0b3Igc2V0IGF0IGdpdmVuIGhlaWdodAogIHR4ICAgICAgICAgICAgICAgICAgICAgICBRdWVyeSBmb3IgYSB0cmFuc2FjdGlvbiBieSBoYXNoLCAmcXVvdDsmbHQ7YWRkciZndDsvJmx0O3NlcSZndDsmcXVvdDsgY29tYmluYXRpb24gb3IgY29tbWEtc2VwYXJhdGVkIHNpZ25hdHVyZXMgaW4gYSBjb21taXR0ZWQgYmxvY2sKICB0eHMgICAgICAgICAgICAgICAgICAgICAgUXVlcnkgZm9yIHBhZ2luYXRlZCB0cmFuc2FjdGlvbnMgdGhhdCBtYXRjaCBhIHNldCBvZiBldmVudHMKICB1cGdyYWRlICAgICAgICAgICAgICAgICAgUXVlcnlpbmcgY29tbWFuZHMgZm9yIHRoZSB1cGdyYWRlIG1vZHVsZQogIHZlc3RpbmcgICAgICAgICAgICAgICAgICBRdWVyeWluZyBjb21tYW5kcyBmb3IgdGhlIHZlc3RpbmcgbW9kdWxlCg=="}})],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("strong",[t._v("Note:")]),t._v(" When querying Ethereum transactions versus Cosmos transactions, the transaction hashes are different.\nWhen querying Ethereum transactions, users need to use event query.\nHere's an example with the CLI:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoyNjY1Ny90eF9zZWFyY2g/cXVlcnk9ZXRoZXJldW1fdHguZXRoZXJldW1UeEhhc2glM0QweDhkNDM0NjQ4OTFmYWM2YzExM2U4MDllMTRkZmYxYTNlNjA4ZWFlMTI0ZDYyOTc5OWU0MmNhMGUzNjU2MmQ5ZDcmYW1wO3Byb3ZlPWZhbHNlJmFtcDtwYWdlPTEmYW1wO3Blcl9wYWdlPTMwJmFtcDtvcmRlcl9ieT1hc2MmcXVvdDsgLUggJnF1b3Q7YWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7ICAK"}})],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);
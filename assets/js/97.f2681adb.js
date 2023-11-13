(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{538:function(t,e,a){"use strict";a.r(e);var o=a(1),s=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"multi-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-node"}},[t._v("#")]),t._v(" Multi Node")]),t._v(" "),e("h2",{attrs:{id:"pre-requisite-readings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[t._v("#")]),t._v(" Pre-requisite Readings")]),t._v(" "),e("ul",[e("li",{attrs:{prereq:""}},[e("a",{attrs:{href:"https://docs.ignite.com/guide/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Ignite CLI"),e("OutboundLink")],1)]),t._v(" "),e("li",{attrs:{prereq:""}},[e("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker"),e("OutboundLink")],1)]),t._v(" "),e("li",{attrs:{prereq:""}},[e("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install docker-compose"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"automated-localnet-with-ignite-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automated-localnet-with-ignite-cli"}},[t._v("#")]),t._v(" Automated Localnet with Ignite CLI")]),t._v(" "),e("p",[t._v("Once you have installed "),e("code",[t._v("ignite")]),t._v(", just run the localnet by using")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aWduaXRlIGNoYWluIHNlcnZlIAo="}}),t._v(" "),e("p",[t._v("Detailed instructions can be found in the "),e("a",{attrs:{href:"https://docs.ignite.com/kb/serve.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ignite CLI documentation"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"automated-localnet-with-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automated-localnet-with-docker"}},[t._v("#")]),t._v(" Automated Localnet with Docker")]),t._v(" "),e("h3",{attrs:{id:"build-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-start"}},[t._v("#")]),t._v(" Build & Start")]),t._v(" "),e("p",[t._v("To build start a 4 node testnet run:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),t._v(" "),e("p",[t._v("This command creates a 4-node network using the "),e("code",[t._v("planqdnode")]),t._v(" Docker image.\nThe ports for each node are found in this table:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Node ID")]),t._v(" "),e("th",[t._v("P2P Port")]),t._v(" "),e("th",[t._v("Tendermint RPC Port")]),t._v(" "),e("th",[t._v("REST/ Ethereum JSON-RPC Port")]),t._v(" "),e("th",[t._v("WebSocket Port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("planqnode0")])]),t._v(" "),e("td",[e("code",[t._v("26656")])]),t._v(" "),e("td",[e("code",[t._v("26657")])]),t._v(" "),e("td",[e("code",[t._v("8545")])]),t._v(" "),e("td",[e("code",[t._v("8546")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("planqnode1")])]),t._v(" "),e("td",[e("code",[t._v("26659")])]),t._v(" "),e("td",[e("code",[t._v("26660")])]),t._v(" "),e("td",[e("code",[t._v("8547")])]),t._v(" "),e("td",[e("code",[t._v("8548")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("planqnode2")])]),t._v(" "),e("td",[e("code",[t._v("26661")])]),t._v(" "),e("td",[e("code",[t._v("26662")])]),t._v(" "),e("td",[e("code",[t._v("8549")])]),t._v(" "),e("td",[e("code",[t._v("8550")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("planqnode3")])]),t._v(" "),e("td",[e("code",[t._v("26663")])]),t._v(" "),e("td",[e("code",[t._v("26664")])]),t._v(" "),e("td",[e("code",[t._v("8551")])]),t._v(" "),e("td",[e("code",[t._v("8552")])])])])]),t._v(" "),e("p",[t._v("To update the binary, just rebuild it and restart the nodes")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),t._v(" "),e("p",[t._v("The command above  command will run containers in the background using Docker compose. You will see the network being created:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li4uCkNyZWF0aW5nIG5ldHdvcmsgJnF1b3Q7cGxhbnFfbG9jYWxuZXQmcXVvdDsgd2l0aCBkcml2ZXIgJnF1b3Q7YnJpZGdlJnF1b3Q7CkNyZWF0aW5nIHBsYW5xZG5vZGUwIC4uLiBkb25lCkNyZWF0aW5nIHBsYW5xZG5vZGUyIC4uLiBkb25lCkNyZWF0aW5nIHBsYW5xZG5vZGUxIC4uLiBkb25lCkNyZWF0aW5nIHBsYW5xZG5vZGUzIC4uLiBkb25lCg=="}}),t._v(" "),e("h3",{attrs:{id:"stop-localnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-localnet"}},[t._v("#")]),t._v(" Stop Localnet")]),t._v(" "),e("p",[t._v("Once you are done, execute:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBsb2NhbG5ldC1zdG9wCg=="}}),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("make localnet-start")]),t._v(" creates files for a 4-node testnet in "),e("code",[t._v("./build")]),t._v(" by\ncalling the "),e("code",[t._v("planqd testnet")]),t._v(" command. This outputs a handful of files in the\n"),e("code",[t._v("./build")]),t._v(" directory:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dHJlZSAtTCAzIGJ1aWxkLwoKYnVpbGQvCuKUnOKUgOKUgCBwbGFucWQK4pSc4pSA4pSAIHBsYW5xZArilJzilIDilIAgZ2VudHhzCuKUgsKgwqAg4pSc4pSA4pSAIG5vZGUwLmpzb24K4pSCwqDCoCDilJzilIDilIAgbm9kZTEuanNvbgrilILCoMKgIOKUnOKUgOKUgCBub2RlMi5qc29uCuKUgsKgwqAg4pSU4pSA4pSAIG5vZGUzLmpzb24K4pSc4pSA4pSAIG5vZGUwCuKUgsKgwqAg4pSc4pSA4pSAIHBsYW5xZArilILCoMKgIOKUgsKgwqAg4pSc4pSA4pSAIGtleV9zZWVkLmpzb24K4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCBrZXlyaW5nLXRlc3QtY29zbW9zCuKUgsKgwqAg4pSU4pSA4pSAIHBsYW5xZArilILCoMKgICAgICDilJzilIDilIAgY29uZmlnCuKUgsKgwqAgICAgIOKUnOKUgOKUgCBkYXRhCuKUgsKgwqAgICAgIOKUlOKUgOKUgCBwbGFucWQubG9nCuKUnOKUgOKUgCBub2RlMQrilILCoMKgIOKUnOKUgOKUgCBwbGFucWQK4pSCwqDCoCDilILCoMKgIOKUnOKUgOKUgCBrZXlfc2VlZC5qc29uCuKUgsKgwqAg4pSCwqDCoCDilJTilIDilIAga2V5cmluZy10ZXN0LWNvc21vcwrilILCoMKgIOKUlOKUgOKUgCBwbGFucWQK4pSCwqDCoCAgICAg4pSc4pSA4pSAIGNvbmZpZwrilILCoMKgICAgICDilJzilIDilIAgZGF0YQrilILCoMKgICAgICDilJTilIDilIAgcGxhbnFkLmxvZwrilJzilIDilIAgbm9kZTIK4pSCwqDCoCDilJzilIDilIAgcGxhbnFkCuKUgsKgwqAg4pSCwqDCoCDilJzilIDilIAga2V5X3NlZWQuanNvbgrilILCoMKgIOKUgsKgwqAg4pSU4pSA4pSAIGtleXJpbmctdGVzdC1jb3Ntb3MK4pSCwqDCoCDilJTilIDilIAgcGxhbnFkCuKUgsKgwqAgICAgIOKUnOKUgOKUgCBjb25maWcK4pSCwqDCoCAgICAg4pSc4pSA4pSAIGRhdGEK4pSCwqDCoCAgICAg4pSU4pSA4pSAIHBsYW5xZC5sb2cK4pSU4pSA4pSAIG5vZGUzCiAgICDilJzilIDilIAgcGxhbnFkCiAgICDilILCoMKgIOKUnOKUgOKUgCBrZXlfc2VlZC5qc29uCiAgICDilILCoMKgIOKUlOKUgOKUgCBrZXlyaW5nLXRlc3QtY29zbW9zCiAgICDilJTilIDilIAgcGxhbnFkCiAgICAgICAg4pSc4pSA4pSAIGNvbmZpZwogICAgICAgIOKUnOKUgOKUgCBkYXRhCiAgICAgICAg4pSU4pSA4pSAIHBsYW5xZC5sb2cK"}}),t._v(" "),e("p",[t._v("Each "),e("code",[t._v("./build/nodeN")]),t._v(" directory is mounted to the "),e("code",[t._v("/planqd")]),t._v(" directory in each container.")]),t._v(" "),e("h3",{attrs:{id:"logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),e("p",[t._v("In order to see the logs of a particular node you can use the following command:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBub2RlIDA6IGRhZW1vbiBsb2dzCmRvY2tlciBleGVjIHBsYW5xZG5vZGUwIHRhaWwgcGxhbnFkLmxvZwoKIyBub2RlIDA6IFJFU1QgJmFtcDsgUlBDIGxvZ3MKZG9ja2VyIGV4ZWMgcGxhbnFkbm9kZTAgdGFpbCBwbGFucWQubG9nCg=="}}),t._v(" "),e("p",[t._v("The logs for the daemon will look like:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"SVsyMDIwLTA3LTI5fDE3OjMzOjUyLjQ1Ml0gc3RhcnRpbmcgQUJDSSB3aXRoIFRlbmRlcm1pbnQgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4KRVsyMDIwLTA3LTI5fDE3OjMzOjUzLjM5NF0gQ2FuJ3QgYWRkIHBlZXIncyBhZGRyZXNzIHRvIGFkZHJib29rICAgICAgICAgbW9kdWxlPXAycCBlcnI9JnF1b3Q7Q2Fubm90IGFkZCBub24tcm91dGFibGUgYWRkcmVzcyAyNzJhMjQ3YjgzNzY1M2NmMDY4ZDM5ZWZkNGM0MDdmZmJkOWEwZTZmQDE5Mi4xNjguMTAuNToyNjY1NiZxdW90OwpFWzIwMjAtMDctMjl8MTc6MzM6NTMuMzk0XSBDYW4ndCBhZGQgcGVlcidzIGFkZHJlc3MgdG8gYWRkcmJvb2sgICAgICAgICBtb2R1bGU9cDJwIGVycj0mcXVvdDtDYW5ub3QgYWRkIG5vbi1yb3V0YWJsZSBhZGRyZXNzIDNlMDVkMzYzN2I3ZWJmNGZjMDk0OGJiZWYwMWI1NGQ2NzBhYTgxMGFAMTkyLjE2OC4xMC40OjI2NjU2JnF1b3Q7CkVbMjAyMC0wNy0yOXwxNzozMzo1My4zOTRdIENhbid0IGFkZCBwZWVyJ3MgYWRkcmVzcyB0byBhZGRyYm9vayAgICAgICAgIG1vZHVsZT1wMnAgZXJyPSZxdW90O0Nhbm5vdCBhZGQgbm9uLXJvdXRhYmxlIGFkZHJlc3MgNjg5Zjg2MDZlZGUwYjI2YWQ1Yjc5YWUyNDRjMTRjYzY3YWI0ZWZlN0AxOTIuMTY4LjEwLjM6MjY2NTYmcXVvdDsKSVsyMDIwLTA3LTI5fDE3OjMzOjU4LjgyOF0gRXhlY3V0ZWQgYmxvY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD04OCB2YWxpZFR4cz0wIGludmFsaWRUeHM9MApJWzIwMjAtMDctMjl8MTc6MzM6NTguODMwXSBDb21taXR0ZWQgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTg4IHR4cz0wIGFwcEhhc2g9OTBDQzVGQTUzQ0Y4QjVFQzQ5NjUzQTE0REEyMDg4OEFEODFDOTJGQ0Y2NDZGMDRENTAxNDUzRkQ4OUZDQzc5MQpJWzIwMjAtMDctMjl8MTc6MzQ6MDQuMDMyXSBFeGVjdXRlZCBibG9jayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTg5IHZhbGlkVHhzPTAgaW52YWxpZFR4cz0wCklbMjAyMC0wNy0yOXwxNzozNDowNC4wMzRdIENvbW1pdHRlZCBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9ODkgdHhzPTAgYXBwSGFzaD0wQjU0QzREQjFBMERBQ0IxRUVEQ0Q2NjJCMjIxQzA0OEM4MjZEMzA5RkQyQTJGMzFGRjI2QkFFOEQyRDdEOEQ3CklbMjAyMC0wNy0yOXwxNzozNDowOS4zODFdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9OTAgdmFsaWRUeHM9MCBpbnZhbGlkVHhzPTAKSVsyMDIwLTA3LTI5fDE3OjM0OjA5LjM4M10gQ29tbWl0dGVkIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD05MCB0eHM9MCBhcHBIYXNoPTc1RkQxRUU4MzRGMDY2OUQ1RTcxN0M4MTJGMzZCMjFENUYyMEIzQ0NCQjQ1RThCOEQ0MTVDQjlDNDUxM0RFNTEKSVsyMDIwLTA3LTI5fDE3OjM0OjE0LjcwMF0gRXhlY3V0ZWQgYmxvY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD05MSB2YWxpZFR4cz0wIGludmFsaWRUeHM9MAo="}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("You can disregard the "),e("code",[t._v("Can't add peer's address to addrbook")]),t._v(" warning. As long as the blocks are\nbeing produced and the app hashes are the same for each node, there should not be any issues.")])]),t._v(" "),e("p",[t._v("Whereas the logs for the REST & RPC server would look like:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"SVsyMDIwLTA3LTMwfDA5OjM5OjE3LjQ4OF0gU3RhcnRpbmcgYXBwbGljYXRpb24gUkVTVCBzZXJ2aWNlIChjaGFpbi1pZDogJnF1b3Q7NzMwNTY2MTYxNDkzMzE2OTc5MiZxdW90OykuLi4gbW9kdWxlPXJlc3Qtc2VydmVyCklbMjAyMC0wNy0zMHwwOTozOToxNy40ODhdIFN0YXJ0aW5nIFJQQyBIVFRQIHNlcnZlciBvbiAxMjcuMC4wLjE6ODU0NSAgIG1vZHVsZT1yZXN0LXNlcnZlcgouLi4K"}}),t._v(" "),e("h4",{attrs:{id:"follow-logs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#follow-logs"}},[t._v("#")]),t._v(" Follow Logs")]),t._v(" "),e("p",[t._v("You can also watch logs as they are produced via Docker with the "),e("code",[t._v("--follow")]),t._v(" ("),e("code",[t._v("-f")]),t._v(") flag, for\nexample:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZG9ja2VyIGxvZ3MgLWYgcGxhbnFkbm9kZTAK"}}),t._v(" "),e("h3",{attrs:{id:"interact-with-the-localnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interact-with-the-localnet"}},[t._v("#")]),t._v(" Interact with the Localnet")]),t._v(" "),e("h4",{attrs:{id:"ethereum-json-rpc-websocket-ports"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-json-rpc-websocket-ports"}},[t._v("#")]),t._v(" Ethereum JSON-RPC & Websocket Ports")]),t._v(" "),e("p",[t._v("To interact with the testnet via WebSockets or RPC/API, you will send your request to the corresponding ports:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("EVM JSON-RPC")]),t._v(" "),e("th",[t._v("Eth Websocket")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("8545")])]),t._v(" "),e("td",[e("code",[t._v("8546")])])])])]),t._v(" "),e("p",[t._v("You can send a curl command such as:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBQT1NUIC0tZGF0YSAneyZxdW90O2pzb25ycGMmcXVvdDs6JnF1b3Q7Mi4wJnF1b3Q7LCZxdW90O21ldGhvZCZxdW90OzomcXVvdDtldGhfYWNjb3VudHMmcXVvdDssJnF1b3Q7cGFyYW1zJnF1b3Q7OltdLCZxdW90O2lkJnF1b3Q7OjF9JyAtSCAmcXVvdDtDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsgMTkyLjE2Mi4xMC4xOjg1NDUK"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("The IP address will be the public IP of the docker container.")])]),t._v(" "),e("p",[t._v("Additional instructions on how to interact with the WebSocket can be found on the "),e("RouterLink",{attrs:{to:"/developers/json-rpc/events.html#ethereum-websocket"}},[t._v("events documentation")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"keys-accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keys-accounts"}},[t._v("#")]),t._v(" Keys & Accounts")]),t._v(" "),e("p",[t._v("To interact with "),e("code",[t._v("planqd")]),t._v(" and start querying state or creating txs, you use the\n"),e("code",[t._v("planqd")]),t._v(" directory of any given node as your "),e("code",[t._v("home")]),t._v(", for example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgbGlzdCAtLWhvbWUgLi9idWlsZC9ub2RlMC9wbGFucWQK"}}),t._v(" "),e("p",[t._v("Now that accounts exists, you may create new accounts and send those accounts\nfunds!")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("strong",[t._v("Note")]),t._v(": Each node's seed is located at "),e("code",[t._v("./build/nodeN/planqd/key_seed.json")]),t._v(" and can be restored to the CLI using the "),e("code",[t._v("planqd keys add --restore")]),t._v(" command")])]),t._v(" "),e("h3",{attrs:{id:"special-binaries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#special-binaries"}},[t._v("#")]),t._v(" Special Binaries")]),t._v(" "),e("p",[t._v("If you have multiple binaries with different names, you can specify which one to run with the BINARY environment variable. The path of the binary is relative to the attached volume. For example:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBSdW4gd2l0aCBjdXN0b20gYmluYXJ5CkJJTkFSWT1wbGFucSBtYWtlIGxvY2FsbmV0LXN0YXJ0Cg=="}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);
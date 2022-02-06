(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{630:function(Z,l,c){"use strict";c.r(l);var g=c(0),d=Object(g.a)({},(function(){var Z=this,l=Z.$createElement,c=Z._self._c||l;return c("ContentSlotsDistributor",{attrs:{"slot-key":Z.$parent.slotKey}},[c("h1",{attrs:{id:"gas-and-fees"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#gas-and-fees"}},[Z._v("#")]),Z._v(" Gas and Fees")]),Z._v(" "),c("p",{attrs:{synopsis:""}},[Z._v("Learn about the differences between "),c("code",[Z._v("Gas")]),Z._v(" and "),c("code",[Z._v("Fees")]),Z._v(" in Ethereum and Cosmos.")]),Z._v(" "),c("h2",{attrs:{id:"pre-requisite-readings"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[Z._v("#")]),Z._v(" Pre-requisite Readings")]),Z._v(" "),c("ul",[c("li",{attrs:{prereq:""}},[c("a",{attrs:{href:"https://docs.cosmos.network/master/basics/gas-fees.html",target:"_blank",rel:"noopener noreferrer"}},[Z._v("Cosmos SDK Gas"),c("OutboundLink")],1)]),Z._v(" "),c("li",{attrs:{prereq:""}},[c("a",{attrs:{href:"https://ethereum.org/en/developers/docs/gas/",target:"_blank",rel:"noopener noreferrer"}},[Z._v("Ethereum Gas"),c("OutboundLink")],1)])]),Z._v(" "),c("p",[Z._v("The concept of Gas represents the amount of computational effort required to execute specific operations on the state machine.")]),Z._v(" "),c("p",[Z._v("Gas was created on Ethereum to disallow the EVM (Ethereum Virtual Machine) from running infinite\nloops by allocating a small amount of monetary value into the system. A unit of gas, usually in a\nform as a fraction of the native coin, is consumed for every operation on the EVM and requires a\nuser to pay for these operations. These operations consist in state transitions such as sending a\ntransaction or calling a contract.")]),Z._v(" "),c("p",[Z._v("Exactly like Ethereum, Cosmos utilizes the concept of gas and this is how Cosmos tracks the resource\nusage of operations during execution. Operations on Cosmos are represented as read or writes done to the chain's store.")]),Z._v(" "),c("p",[Z._v("In Cosmos, a fee is calculated and charged to the user during a message execution. This fee is\ncalculated from the sum of all gas consumed in an message execution:")]),Z._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZmVlID0gZ2FzICogZ2FzIHByaWNlCg=="}}),Z._v(" "),c("p",[Z._v("In both networks, gas is used to make sure that operations do not require an excess amount of\ncomputational power to complete and as a way to deter bad-acting users from spamming the network.")]),Z._v(" "),c("h2",{attrs:{id:"cosmos-sdk-gas"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-gas"}},[Z._v("#")]),Z._v(" Cosmos SDK "),c("code",[Z._v("Gas")])]),Z._v(" "),c("p",[Z._v("In the Cosmos SDK, gas is tracked in the main "),c("code",[Z._v("GasMeter")]),Z._v(" and the "),c("code",[Z._v("BlockGasMeter")]),Z._v(":")]),Z._v(" "),c("ul",[c("li",[c("code",[Z._v("GasMeter")]),Z._v(": keeps track of the gas consumed during executions that lead to state transitions. It is reset on every transaction execution.")]),Z._v(" "),c("li",[c("code",[Z._v("BlockGasMeter")]),Z._v(": keeps track of the gas consumed in a block and enforces that the gas does not go over a predefined limit. This limit is defined in the Tendermint consensus parameters and can be changed via governance parameter change proposals.")])]),Z._v(" "),c("p",[Z._v("More information regarding gas in Cosmos SDK can be found "),c("a",{attrs:{href:"https://docs.cosmos.network/master/basics/gas-fees.html",target:"_blank",rel:"noopener noreferrer"}},[Z._v("here"),c("OutboundLink")],1),Z._v(".")]),Z._v(" "),c("h2",{attrs:{id:"matching-evm-gas-consumption"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#matching-evm-gas-consumption"}},[Z._v("#")]),Z._v(" Matching EVM Gas consumption")]),Z._v(" "),c("p",[Z._v("Planq is an EVM-compatible chain that supports Ethereum Web3 tooling. For this reason, gas\nconsumption must be equitable with other EVMs, most importantly Ethereum.")]),Z._v(" "),c("p",[Z._v("The main difference between EVM and Cosmos state transitions, is that the EVM uses a "),c("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/master/params/protocol_params.go",target:"_blank",rel:"noopener noreferrer"}},[Z._v("gas table"),c("OutboundLink")],1),Z._v(" for each OPCODE, whereas Cosmos uses a "),c("code",[Z._v("GasConfig")]),Z._v(" that charges gas for each CRUD operation by setting a flat and per-byte cost for accessing the database.")]),Z._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2FzQ29uZmlnIGRlZmluZXMgZ2FzIGNvc3QgZm9yIGVhY2ggb3BlcmF0aW9uIG9uIEtWU3RvcmVzCnR5cGUgR2FzQ29uZmlnIHN0cnVjdCB7CglIYXNDb3N0ICAgICAgICAgIEdhcwoJRGVsZXRlQ29zdCAgICAgICBHYXMKCVJlYWRDb3N0RmxhdCAgICAgR2FzCglSZWFkQ29zdFBlckJ5dGUgIEdhcwoJV3JpdGVDb3N0RmxhdCAgICBHYXMKCVdyaXRlQ29zdFBlckJ5dGUgR2FzCglJdGVyTmV4dENvc3RGbGF0IEdhcwp9"}})],1),Z._v(" "),c("p",[Z._v("In order to match the the gas consumed by the EVM, the gas consumption logic from the SDK is ignored, and instead the gas consumed is calculated by subtracting the state transition leftover gas plus refund from the gas limit defined on the message.")]),Z._v(" "),c("p",[Z._v("To ignore the SDK gas consumption, we reset the transaction "),c("code",[Z._v("GasMeter")]),Z._v(" count to 0 and manually set it to the "),c("code",[Z._v("gasUsed")]),Z._v(" value computed by the EVM module at the end of the execution.")]),Z._v(" "),c("p",[c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBrZWVwZXIKCmltcG9ydCAoCgkmcXVvdDttYXRoL2JpZyZxdW90OwoJJnF1b3Q7b3MmcXVvdDsKCSZxdW90O3RpbWUmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL3BhbGFudGlyL3N0YWNrdHJhY2UmcXVvdDsKCXRtdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvdHlwZXMmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3RlbGVtZXRyeSZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwoJYXV0aHR5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9hdXRoL3R5cGVzJnF1b3Q7CglzdGFraW5ndHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L3N0YWtpbmcvdHlwZXMmcXVvdDsKCglldGhlcm1pbnQgJnF1b3Q7Z2l0aHViLmNvbS90aGFyc2lzL2V0aGVybWludC90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS90aGFyc2lzL2V0aGVybWludC94L2V2bS90eXBlcyZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vZXRoZXJldW0vZ28tZXRoZXJldW0vY29tbW9uJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2V0aGVyZXVtL2dvLWV0aGVyZXVtL2NvcmUmcXVvdDsKCWV0aHR5cGVzICZxdW90O2dpdGh1Yi5jb20vZXRoZXJldW0vZ28tZXRoZXJldW0vY29yZS90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9ldGhlcmV1bS9nby1ldGhlcmV1bS9jb3JlL3ZtJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2V0aGVyZXVtL2dvLWV0aGVyZXVtL3BhcmFtcyZxdW90OwopCgovLyBOZXdFVk0gZ2VuZXJhdGVzIGEgZ28tZXRoZXJldW0gVk0gZnJvbSB0aGUgcHJvdmlkZWQgTWVzc2FnZSBmaWVsZHMgYW5kIHRoZSBjaGFpbiBwYXJhbWV0ZXJzCi8vIChDaGFpbkNvbmZpZyBhbmQgbW9kdWxlIFBhcmFtcykuIEl0IGFkZGl0aW9uYWxseSBzZXRzIHRoZSB2YWxpZGF0b3Igb3BlcmF0b3IgYWRkcmVzcyBhcyB0aGUKLy8gY29pbmJhc2UgYWRkcmVzcyB0byBtYWtlIGl0IGF2YWlsYWJsZSBmb3IgdGhlIENPSU5CQVNFIG9wY29kZSwgZXZlbiB0aG91Z2ggdGhlcmUgaXMgbm8KLy8gYmVuZWZpY2lhcnkgb2YgdGhlIGNvaW5iYXNlIHRyYW5zYWN0aW9uIChzaW5jZSB3ZSdyZSBub3QgbWluaW5nKS4KZnVuYyAoayAqS2VlcGVyKSBOZXdFVk0obXNnIGNvcmUuTWVzc2FnZSwgY29uZmlnICpwYXJhbXMuQ2hhaW5Db25maWcsIHBhcmFtcyB0eXBlcy5QYXJhbXMsIGNvaW5iYXNlIGNvbW1vbi5BZGRyZXNzKSAqdm0uRVZNIHsKCWJsb2NrQ3R4IDo9IHZtLkJsb2NrQ29udGV4dHsKCQlDYW5UcmFuc2ZlcjogY29yZS5DYW5UcmFuc2ZlciwKCQlUcmFuc2ZlcjogICAgY29yZS5UcmFuc2ZlciwKCQlHZXRIYXNoOiAgICAgay5HZXRIYXNoRm4oKSwKCQlDb2luYmFzZTogICAgY29pbmJhc2UsCgkJR2FzTGltaXQ6ICAgIGV0aGVybWludC5CbG9ja0dhc0xpbWl0KGsuY3R4KSwKCQlCbG9ja051bWJlcjogYmlnLk5ld0ludChrLmN0eC5CbG9ja0hlaWdodCgpKSwKCQlUaW1lOiAgICAgICAgYmlnLk5ld0ludChrLmN0eC5CbG9ja0hlYWRlcigpLlRpbWUuVW5peCgpKSwKCQlEaWZmaWN1bHR5OiAgYmlnLk5ld0ludCgwKSwgLy8gdW51c2VkLiBPbmx5IHJlcXVpcmVkIGluIFBvVyBjb250ZXh0Cgl9CgoJdHhDdHggOj0gY29yZS5OZXdFVk1UeENvbnRleHQobXNnKQoJdm1Db25maWcgOj0gay5WTUNvbmZpZyhwYXJhbXMpCgoJcmV0dXJuIHZtLk5ld0VWTShibG9ja0N0eCwgdHhDdHgsIGssIGNvbmZpZywgdm1Db25maWcpCn0KCi8vIFZNQ29uZmlnIGNyZWF0ZXMgYW4gRVZNIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZGVidWcgc2V0dGluZyBhbmQgdGhlIGV4dHJhIEVJUHMgZW5hYmxlZCBvbiB0aGUKLy8gbW9kdWxlIHBhcmFtZXRlcnMuIFRoZSBjb25maWcgZ2VuZXJhdGVkIHVzZXMgdGhlIGRlZmF1bHQgSnVtcFRhYmxlIGZyb20gdGhlIEVWTS4KZnVuYyAoayBLZWVwZXIpIFZNQ29uZmlnKHBhcmFtcyB0eXBlcy5QYXJhbXMpIHZtLkNvbmZpZyB7CglyZXR1cm4gdm0uQ29uZmlnewoJCURlYnVnOiAgICAgICBrLmRlYnVnLAoJCVRyYWNlcjogICAgICB2bS5OZXdKU09OTG9nZ2VyKCZhbXA7dm0uTG9nQ29uZmlne0RlYnVnOiBrLmRlYnVnfSwgb3MuU3RkZXJyKSwgLy8gVE9ETzogY29uc2lkZXIgdXNpbmcgdGhlIFN0cnVjdCBMb2dnZXIgdG9vCgkJTm9SZWN1cnNpb246IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGRpc2FibGluZyByZWN1cnNpb24gdGhvdWdoIHBhcmFtcwoJCUV4dHJhRWlwczogICBwYXJhbXMuRUlQcygpLAoJfQp9CgovLyBHZXRIYXNoRm4gaW1wbGVtZW50cyB2bS5HZXRIYXNoRnVuYyBmb3IgRXRoZXJtaW50LiBJdCBoYW5kbGVzIDMgY2FzZXM6Ci8vICAxLiBUaGUgcmVxdWVzdGVkIGhlaWdodCBtYXRjaGVzIHRoZSBjdXJyZW50IGhlaWdodCBmcm9tIGNvbnRleHQgKGFuZCB0aHVzIHNhbWUgZXBvY2ggbnVtYmVyKQovLyAgMi4gVGhlIHJlcXVlc3RlZCBoZWlnaHQgaXMgZnJvbSBhbiBwcmV2aW91cyBoZWlnaHQgZnJvbSB0aGUgc2FtZSBjaGFpbiBlcG9jaAovLyAgMy4gVGhlIHJlcXVlc3RlZCBoZWlnaHQgaXMgZnJvbSBhIGhlaWdodCBncmVhdGVyIHRoYW4gdGhlIGxhdGVzdCBvbmUKZnVuYyAoayBLZWVwZXIpIEdldEhhc2hGbigpIHZtLkdldEhhc2hGdW5jIHsKCXJldHVybiBmdW5jKGhlaWdodCB1aW50NjQpIGNvbW1vbi5IYXNoIHsKCQloIDo9IGludDY0KGhlaWdodCkKCQlzd2l0Y2ggewoJCWNhc2Ugay5jdHguQmxvY2tIZWlnaHQoKSA9PSBoOgoJCQkvLyBDYXNlIDE6IFRoZSByZXF1ZXN0ZWQgaGVpZ2h0IG1hdGNoZXMgdGhlIG9uZSBmcm9tIHRoZSBjb250ZXh0IHNvIHdlIGNhbiByZXRyaWV2ZSB0aGUgaGVhZGVyCgkJCS8vIGhhc2ggZGlyZWN0bHkgZnJvbSB0aGUgY29udGV4dC4KCQkJLy8gTm90ZTogVGhlIGhlYWRlckhhc2ggaXMgb25seSBzZXQgYXQgYmVnaW4gYmxvY2ssIGl0IHdpbGwgYmUgbmlsIGluIGNhc2Ugb2YgYSBxdWVyeSBjb250ZXh0CgkJCWhlYWRlckhhc2ggOj0gay5jdHguSGVhZGVySGFzaCgpCgkJCWlmIGxlbihoZWFkZXJIYXNoKSAhPSAwIHsKCQkJCXJldHVybiBjb21tb24uQnl0ZXNUb0hhc2goaGVhZGVySGFzaCkKCQkJfQoKCQkJLy8gb25seSByZWNvbXB1dGUgdGhlIGhhc2ggaWYgbm90IHNldCAoZWc6IGNoZWNrVHhTdGF0ZSkKCQkJY29udGV4dEJsb2NrSGVhZGVyIDo9IGsuY3R4LkJsb2NrSGVhZGVyKCkKCQkJaGVhZGVyLCBlcnIgOj0gdG10eXBlcy5IZWFkZXJGcm9tUHJvdG8oJmFtcDtjb250ZXh0QmxvY2tIZWFkZXIpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJay5Mb2dnZXIoay5jdHgpLkVycm9yKCZxdW90O2ZhaWxlZCB0byBjYXN0IHRlbmRlcm1pbnQgaGVhZGVyIGZyb20gcHJvdG8mcXVvdDssICZxdW90O2Vycm9yJnF1b3Q7LCBlcnIpCgkJCQlyZXR1cm4gY29tbW9uLkhhc2h7fQoJCQl9CgoJCQloZWFkZXJIYXNoID0gaGVhZGVyLkhhc2goKQoJCQlyZXR1cm4gY29tbW9uLkJ5dGVzVG9IYXNoKGhlYWRlckhhc2gpCgoJCWNhc2Ugay5jdHguQmxvY2tIZWlnaHQoKSAmZ3Q7IGg6CgkJCS8vIENhc2UgMjogaWYgdGhlIGNoYWluIGlzIG5vdCB0aGUgY3VycmVudCBoZWlnaHQgd2UgbmVlZCB0byByZXRyaWV2ZSB0aGUgaGFzaCBmcm9tIHRoZSBzdG9yZSBmb3IgdGhlCgkJCS8vIGN1cnJlbnQgY2hhaW4gZXBvY2guIFRoaXMgb25seSBhcHBsaWVzIGlmIHRoZSBjdXJyZW50IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gdGhlIHJlcXVlc3RlZCBoZWlnaHQuCgkJCWhpc3RJbmZvLCBmb3VuZCA6PSBrLnN0YWtpbmdLZWVwZXIuR2V0SGlzdG9yaWNhbEluZm8oay5jdHgsIGgpCgkJCWlmICFmb3VuZCB7CgkJCQlrLkxvZ2dlcihrLmN0eCkuRGVidWcoJnF1b3Q7aGlzdG9yaWNhbCBpbmZvIG5vdCBmb3VuZCZxdW90OywgJnF1b3Q7aGVpZ2h0JnF1b3Q7LCBoKQoJCQkJcmV0dXJuIGNvbW1vbi5IYXNoe30KCQkJfQoKCQkJaGVhZGVyLCBlcnIgOj0gdG10eXBlcy5IZWFkZXJGcm9tUHJvdG8oJmFtcDtoaXN0SW5mby5IZWFkZXIpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJay5Mb2dnZXIoay5jdHgpLkVycm9yKCZxdW90O2ZhaWxlZCB0byBjYXN0IHRlbmRlcm1pbnQgaGVhZGVyIGZyb20gcHJvdG8mcXVvdDssICZxdW90O2Vycm9yJnF1b3Q7LCBlcnIpCgkJCQlyZXR1cm4gY29tbW9uLkhhc2h7fQoJCQl9CgoJCQlyZXR1cm4gY29tbW9uLkJ5dGVzVG9IYXNoKGhlYWRlci5IYXNoKCkpCgkJZGVmYXVsdDoKCQkJLy8gQ2FzZSAzOiBoZWlnaHRzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBvbmUgcmV0dXJucyBhbiBlbXB0eSBoYXNoLgoJCQlyZXR1cm4gY29tbW9uLkhhc2h7fQoJCX0KCX0KfQoKLy8gQXBwbHlUcmFuc2FjdGlvbiBydW5zIGFuZCBhdHRlbXB0cyB0byBwZXJmb3JtIGEgc3RhdGUgdHJhbnNpdGlvbiB3aXRoIHRoZSBnaXZlbiB0cmFuc2FjdGlvbiAoaS5lIE1lc3NhZ2UpLCB0aGF0IHdpbGwKLy8gb25seSBiZSBwZXJzaXN0ZWQgKGNvbW1pdHRlZCkgdG8gdGhlIHVuZGVybHlpbmcgS1ZTdG9yZSBpZiB0aGUgdHJhbnNhY3Rpb24gZG9lcyBub3QgZmFpbC4KLy8KLy8gR2FzIHRyYWNraW5nCi8vCi8vIEV0aGVyZXVtIGNvbnN1bWVzIGdhcyBhY2NvcmRpbmcgdG8gdGhlIEVWTSBvcGNvZGVzIGluc3RlYWQgb2YgZ2VuZXJhbCByZWFkcyBhbmQgd3JpdGVzIHRvIHN0b3JlLiBCZWNhdXNlIG9mIHRoaXMsIHRoZQovLyBzdGF0ZSB0cmFuc2l0aW9uIG5lZWRzIHRvIGlnbm9yZSB0aGUgU0RLIGdhcyBjb25zdW1wdGlvbiBtZWNoYW5pc20gZGVmaW5lZCBieSB0aGUgR2FzS1ZTdG9yZSBhbmQgaW5zdGVhZCBjb25zdW1lIHRoZQovLyBhbW91bnQgb2YgZ2FzIHVzZWQgYnkgdGhlIFZNIGV4ZWN1dGlvbi4gVGhlIGFtb3VudCBvZiBnYXMgdXNlZCBpcyB0cmFja2VkIGJ5IHRoZSBFVk0gYW5kIHJldHVybmVkIGluIHRoZSBleGVjdXRpb24KLy8gcmVzdWx0LgovLwovLyBQcmlvciB0byB0aGUgZXhlY3V0aW9uLCB0aGUgc3RhcnRpbmcgdHggZ2FzIG1ldGVyIGlzIHNhdmVkIGFuZCByZXBsYWNlZCB3aXRoIGFuIGluZmluaXRlIGdhcyBtZXRlciBpbiBhIG5ldyBjb250ZXh0Ci8vIGluIG9yZGVyIHRvIGlnbm9yZSB0aGUgU0RLIGdhcyBjb25zdW1wdGlvbiBjb25maWcgdmFsdWVzIChyZWFkLCB3cml0ZSwgaGFzLCBkZWxldGUpLgovLyBBZnRlciB0aGUgZXhlY3V0aW9uLCB0aGUgZ2FzIHVzZWQgZnJvbSB0aGUgbWVzc2FnZSBleGVjdXRpb24gd2lsbCBiZSBhZGRlZCB0byB0aGUgc3RhcnRpbmcgZ2FzIGNvbnN1bWVkLCB0YWtpbmcgaW50bwovLyBjb25zaWRlcmF0aW9uIHRoZSBhbW91bnQgb2YgZ2FzIHJldHVybmVkLiBGaW5hbGx5LCB0aGUgY29udGV4dCBpcyB1cGRhdGVkIHdpdGggdGhlIEVWTSBnYXMgY29uc3VtZWQgdmFsdWUgcHJpb3IgdG8KLy8gcmV0dXJuaW5nLgovLwovLyBGb3IgcmVsZXZhbnQgZGlzY3Vzc2lvbiBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9kaXNjdXNzaW9ucy85MDcyCmZ1bmMgKGsgKktlZXBlcikgQXBwbHlUcmFuc2FjdGlvbih0eCAqZXRodHlwZXMuVHJhbnNhY3Rpb24pICgqdHlwZXMuTXNnRXRoZXJldW1UeFJlc3BvbnNlLCBlcnJvcikgewoJZGVmZXIgdGVsZW1ldHJ5Lk1vZHVsZU1lYXN1cmVTaW5jZSh0eXBlcy5Nb2R1bGVOYW1lLCB0aW1lLk5vdygpLCB0eXBlcy5NZXRyaWNLZXlUcmFuc2l0aW9uREIpCgoJcGFyYW1zIDo9IGsuR2V0UGFyYW1zKGsuY3R4KQoJZXRoQ2ZnIDo9IHBhcmFtcy5DaGFpbkNvbmZpZy5FdGhlcmV1bUNvbmZpZyhrLmVpcDE1NUNoYWluSUQpCgoJLy8gZ2V0IHRoZSBsYXRlc3Qgc2lnbmVyIGFjY29yZGluZyB0byB0aGUgY2hhaW4gcnVsZXMgZnJvbSB0aGUgY29uZmlnCglzaWduZXIgOj0gZXRodHlwZXMuTWFrZVNpZ25lcihldGhDZmcsIGJpZy5OZXdJbnQoay5jdHguQmxvY2tIZWlnaHQoKSkpCgoJbXNnLCBlcnIgOj0gdHguQXNNZXNzYWdlKHNpZ25lcikKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIHN0YWNrdHJhY2UuUHJvcGFnYXRlKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIHJldHVybiBldGhlcmV1bSB0cmFuc2FjdGlvbiBhcyBjb3JlIG1lc3NhZ2UmcXVvdDspCgl9CgoJLy8gd2UgdXNlIGEgY2FjaGVkIGNvbnRleHQgdG8gYXZvaWQgbW9kaWZ5aW5nIHRvIHN0YXRlIGluIGNhc2UgRVZNIG1zZyBpcyByZXZlcnRlZAoJY29tbWl0IDo9IGsuQmVnaW5DYWNoZWRDb250ZXh0KCkKCgkvLyBnZXQgdGhlIGNvaW5iYXNlIGFkZHJlc3MgZnJvbSB0aGUgYmxvY2sgcHJvcG9zZXIKCWNvaW5iYXNlLCBlcnIgOj0gay5HZXRDb2luYmFzZUFkZHJlc3MoKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgc3RhY2t0cmFjZS5Qcm9wYWdhdGUoZXJyLCAmcXVvdDtmYWlsZWQgdG8gb2J0YWluIGNvaW5iYXNlIGFkZHJlc3MmcXVvdDspCgl9CgoJLy8gY3JlYXRlIGFuIGV0aGVyZXVtIEVWTSBpbnN0YW5jZSBhbmQgcnVuIHRoZSBtZXNzYWdlCglldm0gOj0gay5OZXdFVk0obXNnLCBldGhDZmcsIHBhcmFtcywgY29pbmJhc2UpCgoJdHhIYXNoIDo9IHR4Lkhhc2goKQoKCS8vIHNldCB0aGUgdHJhbnNhY3Rpb24gaGFzaCBhbmQgaW5kZXggdG8gdGhlIGltcGVybWFuZW50ICh0cmFuc2llbnQpIGJsb2NrIHN0YXRlIHNvIHRoYXQgaXQncyBhbHNvCgkvLyBhdmFpbGFibGUgb24gdGhlIFN0YXRlREIgZnVuY3Rpb25zIChlZzogQWRkTG9nKQoJay5TZXRUeEhhc2hUcmFuc2llbnQodHhIYXNoKQoJay5JbmNyZWFzZVR4SW5kZXhUcmFuc2llbnQoKQoKCS8vIHBhc3MgZmFsc2UgdG8gZXhlY3V0ZSBpbiByZWFsIG1vZGUsIHdoaWNoIGRvIGFjdHVhbCBnYXMgcmVmdW5kaW5nCglyZXMsIGVyciA6PSBrLkFwcGx5TWVzc2FnZShldm0sIG1zZywgZXRoQ2ZnLCBmYWxzZSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIHN0YWNrdHJhY2UuUHJvcGFnYXRlKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIGFwcGx5IGV0aGVyZXVtIGNvcmUgbWVzc2FnZSZxdW90OykKCX0KCglyZXMuSGFzaCA9IHR4SGFzaC5IZXgoKQoJbG9ncyA6PSBrLkdldFR4TG9ncyh0eEhhc2gpCgoJLy8gQ29tbWl0IGFuZCBzd2l0Y2ggdG8gY29tbWl0dGVkIGNvbnRleHQKCWlmICFyZXMuRmFpbGVkKCkgewoJCWNvbW1pdCgpCgl9CgoJay5FbmRDYWNoZWRDb250ZXh0KCkKCgkvLyBMb2dzIG5lZWRzIHRvIGJlIGlnbm9yZWQgd2hlbiB0eCBpcyByZXZlcnRlZAoJLy8gU2V0IHRoZSBsb2cgYW5kIGJsb29tIGZpbHRlciBvbmx5IHdoZW4gdGhlIHR4IGlzIE5PVCBSRVZFUlRFRAoJaWYgIXJlcy5GYWlsZWQoKSB7CgkJcmVzLkxvZ3MgPSB0eXBlcy5OZXdMb2dzRnJvbUV0aChsb2dzKQoJCS8vIFVwZGF0ZSBibG9jayBibG9vbSBmaWx0ZXIgaW4gdGhlIG9yaWdpbmFsIGNvbnRleHQgYmVjYXVzZSBibG9ja2Jsb29tIGlzIHNldCBpbiBFbmRCbG9jawoJCWJsb29tIDo9IGsuR2V0QmxvY2tCbG9vbVRyYW5zaWVudCgpCgkJYmxvb20uT3IoYmxvb20sIGJpZy5OZXdJbnQoMCkuU2V0Qnl0ZXMoZXRodHlwZXMuTG9nc0Jsb29tKGxvZ3MpKSkKCQlrLlNldEJsb2NrQmxvb21UcmFuc2llbnQoYmxvb20pCgl9CgoJLy8gdXBkYXRlIHRoZSBnYXMgdXNlZCBhZnRlciByZWZ1bmQKCWsucmVzZXRHYXNNZXRlckFuZENvbnN1bWVHYXMocmVzLkdhc1VzZWQpCglyZXR1cm4gcmVzLCBuaWwKfQoKLy8gR2FzIGNvbnN1bXB0aW9uIG5vdGVzICh3cml0ZSBkb2MgZnJvbSB0aGlzKQoKLy8gZ2FzID0gcmVtYWluaW5nIGdhcyA9IGxpbWl0IC0gY29uc3VtZWQKCi8vIEdhcyBjb25zdW1wdGlvbiBpbiBldGhlcmV1bToKLy8gMC4gQnV5IGdhcyAtJmd0OyBkZWR1Y3QgZ2FzTGltaXQgKiBnYXNQcmljZSBmcm9tIHVzZXIgYWNjb3VudAovLyAJCTAuMSBsZWZ0b3ZlciBnYXMgPSBnYXMgbGltaXQKLy8gMS4gY29uc3VtZSBpbnRyaW5zaWMgZ2FzCi8vICAgMS4xIGxlZnRvdmVyIGdhcyA9IGxlZnRvdmVyIGdhcyAtIGludHJpbnNpYyBnYXMKLy8gMi4gRXhlYyB2bSBmdW5jdGlvbnMgYnkgcGFzc2luZyB0aGUgZ2FzIChpLmUgcmVtYWluaW5nIGdhcykKLy8gICAyLjEgZmluYWwgbGVmdG92ZXIgZ2FzIHJldHVybmVkIGFmdGVyIHNwZW5kaW5nIGdhcyBmcm9tIHRoZSBvcGNvZGVzIGp1bXAgdGFibGVzCi8vIDMuIFJlZnVuZCBhbW91bnQgPSAgbWF4KGdhc0NvbnN1bWVkIC8gMiwgZ2FzIHJlZnVuZCksIHdoZXJlIGdhcyByZWZ1bmQgaXMgYSBsb2NhbCB2YXJpYWJsZQoKLy8gVE9ETzogKEBmZWRla3VuemUpIGN1cnJlbnRseSB3ZSBjb25zdW1lIHRoZSBlbnRpcmUgZ2FzIGxpbWl0IGluIHRoZSBhbnRlIGhhbmRsZXIsIHNvIGlmIGEgdHJhbnNhY3Rpb24gZmFpbHMKLy8gdGhlIGFtb3VudCBzcGVudCB3aWxsIGJlIGdyYXRlciB0aGFuIHRoZSBnYXMgc3BlbnQgaW4gYW4gRXRoZXJldW0gdHggKGkuZSBoZXJlIHRoZSBsZWZ0b3ZlciBnYXMgd29uJ3QgYmUgcmVmdW5kZWQpLgoKLy8gQXBwbHlNZXNzYWdlIGNvbXB1dGVzIHRoZSBuZXcgc3RhdGUgYnkgYXBwbHlpbmcgdGhlIGdpdmVuIG1lc3NhZ2UgYWdhaW5zdCB0aGUgZXhpc3Rpbmcgc3RhdGUuCi8vIElmIHRoZSBtZXNzYWdlIGZhaWxzLCB0aGUgVk0gZXhlY3V0aW9uIGVycm9yIHdpdGggdGhlIHJlYXNvbiB3aWxsIGJlIHJldHVybmVkIHRvIHRoZSBjbGllbnQKLy8gYW5kIHRoZSB0cmFuc2FjdGlvbiB3b24ndCBiZSBjb21taXR0ZWQgdG8gdGhlIHN0b3JlLgovLwovLyBSZXZlcnRlZCBzdGF0ZQovLwovLyBUaGUgdHJhbnNhY3Rpb24gaXMgbmV2ZXIgJnF1b3Q7cmV2ZXJ0ZWQmcXVvdDsgc2luY2UgdGhlcmUgaXMgbm8gc25hcHNob3QgKyByb2xsYmFjayBwZXJmb3JtZWQgb24gdGhlIFN0YXRlREIuCi8vIE9ubHkgc3VjY2Vzc2Z1bCB0cmFuc2FjdGlvbnMgYXJlIHdyaXR0ZW4gdG8gdGhlIHN0b3JlIGR1cmluZyBEZWxpdmVyVHggbW9kZS4KLy8KLy8gUHJlY2hlY2tzIGFuZCBQcmVwcm9jZXNzaW5nCi8vCi8vIEFsbCByZWxldmFudCBzdGF0ZSB0cmFuc2l0aW9uIHByZWNoZWNrcyBmb3IgdGhlIE1zZ0V0aGVyZXVtVHggYXJlIHBlcmZvcm1lZCBvbiB0aGUgQW50ZUhhbmRsZXIsCi8vIHByaW9yIHRvIHJ1bm5pbmcgdGhlIHRyYW5zYWN0aW9uIGFnYWluc3QgdGhlIHN0YXRlLiBUaGUgcHJlY2hlY2tzIHJ1biBhcmUgdGhlIGZvbGxvd2luZzoKLy8KLy8gMS4gdGhlIG5vbmNlIG9mIHRoZSBtZXNzYWdlIGNhbGxlciBpcyBjb3JyZWN0Ci8vIDIuIGNhbGxlciBoYXMgZW5vdWdoIGJhbGFuY2UgdG8gY292ZXIgdHJhbnNhY3Rpb24gZmVlKGdhc2xpbWl0ICogZ2FzcHJpY2UpCi8vIDMuIHRoZSBhbW91bnQgb2YgZ2FzIHJlcXVpcmVkIGlzIGF2YWlsYWJsZSBpbiB0aGUgYmxvY2sKLy8gNC4gdGhlIHB1cmNoYXNlZCBnYXMgaXMgZW5vdWdoIHRvIGNvdmVyIGludHJpbnNpYyB1c2FnZQovLyA1LiB0aGVyZSBpcyBubyBvdmVyZmxvdyB3aGVuIGNhbGN1bGF0aW5nIGludHJpbnNpYyBnYXMKLy8gNi4gY2FsbGVyIGhhcyBlbm91Z2ggYmFsYW5jZSB0byBjb3ZlciBhc3NldCB0cmFuc2ZlciBmb3IgKip0b3Btb3N0KiogY2FsbAovLwovLyBUaGUgcHJlcHJvY2Vzc2luZyBzdGVwcyBwZXJmb3JtZWQgYnkgdGhlIEFudGVIYW5kbGVyIGFyZToKLy8KLy8gMS4gc2V0IHVwIHRoZSBpbml0aWFsIGFjY2VzcyBsaXN0IChpZmYgZm9yayAmZ3Q7IEJlcmxpbikKLy8KLy8gUXVlcnkgbW9kZQovLwovLyBUaGUgZ1JQQyBxdWVyeSBlbmRwb2ludCBmcm9tICdldGhfY2FsbCcgY2FsbHMgdGhpcyBtZXRob2QgaW4gcXVlcnkgbW9kZSwgYW5kIHNpbmNlIHRoZSBxdWVyeSBoYW5kbGVyIGRvbid0IGNhbGwgQW50ZUhhbmRsZXIsCi8vIHNvIHdlIGRvbid0IGRvIHJlYWwgZ2FzIHJlZnVuZCBpbiB0aGF0IGNhc2UuCmZ1bmMgKGsgKktlZXBlcikgQXBwbHlNZXNzYWdlKGV2bSAqdm0uRVZNLCBtc2cgY29yZS5NZXNzYWdlLCBjZmcgKnBhcmFtcy5DaGFpbkNvbmZpZywgcXVlcnkgYm9vbCkgKCp0eXBlcy5Nc2dFdGhlcmV1bVR4UmVzcG9uc2UsIGVycm9yKSB7Cgl2YXIgKAoJCXJldCAgIFtdYnl0ZSAvLyByZXR1cm4gYnl0ZXMgZnJvbSBldm0gZXhlY3V0aW9uCgkJdm1FcnIgZXJyb3IgIC8vIHZtIGVycm9ycyBkbyBub3QgZWZmZWN0IGNvbnNlbnN1cyBhbmQgYXJlIHRoZXJlZm9yZSBub3QgYXNzaWduZWQgdG8gZXJyCgkpCgoJc2VuZGVyIDo9IHZtLkFjY291bnRSZWYobXNnLkZyb20oKSkKCWNvbnRyYWN0Q3JlYXRpb24gOj0gbXNnLlRvKCkgPT0gbmlsCgoJaW50cmluc2ljR2FzLCBlcnIgOj0gay5HZXRFdGhJbnRyaW5zaWNHYXMobXNnLCBjZmcsIGNvbnRyYWN0Q3JlYXRpb24pCglpZiBlcnIgIT0gbmlsIHsKCQkvLyBzaG91bGQgaGF2ZSBhbHJlYWR5IGJlZW4gY2hlY2tlZCBvbiBBbnRlIEhhbmRsZXIKCQlyZXR1cm4gbmlsLCBzdGFja3RyYWNlLlByb3BhZ2F0ZShlcnIsICZxdW90O2ludHJpbnNpYyBnYXMgZmFpbGVkJnF1b3Q7KQoJfQoJLy8gU2hvdWxkIGNoZWNrIGFnYWluIGV2ZW4gaWYgaXQgaXMgY2hlY2tlZCBvbiBBbnRlIEhhbmRsZXIsIGJlY2F1c2UgZXRoX2NhbGwgZG9uJ3QgZ28gdGhyb3VnaCBBbnRlIEhhbmRsZXIuCglpZiBtc2cuR2FzKCkgJmx0OyBpbnRyaW5zaWNHYXMgewoJCS8vIGV0aF9lc3RpbWF0ZUdhcyB3aWxsIGNoZWNrIGZvciB0aGlzIGV4YWN0IGVycm9yCgkJcmV0dXJuIG5pbCwgc3RhY2t0cmFjZS5Qcm9wYWdhdGUoY29yZS5FcnJJbnRyaW5zaWNHYXMsICZxdW90O2FwcGx5IG1lc3NhZ2UmcXVvdDspCgl9CglsZWZ0b3ZlckdhcyA6PSBtc2cuR2FzKCkgLSBpbnRyaW5zaWNHYXMKCglpZiBjb250cmFjdENyZWF0aW9uIHsKCQlyZXQsIF8sIGxlZnRvdmVyR2FzLCB2bUVyciA9IGV2bS5DcmVhdGUoc2VuZGVyLCBtc2cuRGF0YSgpLCBsZWZ0b3ZlckdhcywgbXNnLlZhbHVlKCkpCgl9IGVsc2UgewoJCXJldCwgbGVmdG92ZXJHYXMsIHZtRXJyID0gZXZtLkNhbGwoc2VuZGVyLCAqbXNnLlRvKCksIG1zZy5EYXRhKCksIGxlZnRvdmVyR2FzLCBtc2cuVmFsdWUoKSkKCX0KCglpZiBxdWVyeSB7CgkJLy8gZ1JQQyBxdWVyeSBoYW5kbGVycyBkb24ndCBnbyB0aHJvdWdoIHRoZSBBbnRlSGFuZGxlciB0byBkZWR1Y3QgdGhlIGdhcyBmZWUgZnJvbSB0aGUgc2VuZGVyIG9yIGhhdmUgYWNjZXNzIGhpc3RvcmljYWwgc3RhdGUuCgkJLy8gV2UgZG9uJ3QgcmVmdW5kIGdhcyB0byB0aGUgc2VuZGVyLgoJCS8vIEZvciBtb3JlIGluZm8sIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL3RoYXJzaXMvZXRoZXJtaW50L2lzc3Vlcy8yMjkgYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9pc3N1ZXMvOTYzNgoJCWxlZnRvdmVyR2FzICs9IGsuR2FzVG9SZWZ1bmQobXNnLkdhcygpIC0gbGVmdG92ZXJHYXMpCgl9IGVsc2UgewoJCS8vIHJlZnVuZCBnYXMgcHJpb3IgdG8gaGFuZGxpbmcgdGhlIHZtIGVycm9yIGluIG9yZGVyIHRvIG1hdGNoIHRoZSBFdGhlcmV1bSBnYXMgY29uc3VtcHRpb24gaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBTREsgb25lLgoJCWxlZnRvdmVyR2FzLCBlcnIgPSBrLlJlZnVuZEdhcyhtc2csIGxlZnRvdmVyR2FzKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzdGFja3RyYWNlLlByb3BhZ2F0ZShlcnIsICZxdW90O2ZhaWxlZCB0byByZWZ1bmQgZ2FzIGxlZnRvdmVyIGdhcyB0byBzZW5kZXIgJXMmcXVvdDssIG1zZy5Gcm9tKCkpCgkJfQoJfQoKCS8vIEVWTSBleGVjdXRpb24gZXJyb3IgbmVlZHMgdG8gYmUgYXZhaWxhYmxlIGZvciB0aGUgSlNPTi1SUEMgY2xpZW50Cgl2YXIgdm1FcnJvciBzdHJpbmcKCWlmIHZtRXJyICE9IG5pbCB7CgkJdm1FcnJvciA9IHZtRXJyLkVycm9yKCkKCX0KCglnYXNVc2VkIDo9IG1zZy5HYXMoKSAtIGxlZnRvdmVyR2FzCglyZXR1cm4gJmFtcDt0eXBlcy5Nc2dFdGhlcmV1bVR4UmVzcG9uc2V7CgkJR2FzVXNlZDogZ2FzVXNlZCwKCQlWbUVycm9yOiB2bUVycm9yLAoJCVJldDogICAgIHJldCwKCX0sIG5pbAp9CgovLyBHZXRFdGhJbnRyaW5zaWNHYXMgcmV0dXJucyB0aGUgaW50cmluc2ljIGdhcyBjb3N0IGZvciB0aGUgdHJhbnNhY3Rpb24KZnVuYyAoayAqS2VlcGVyKSBHZXRFdGhJbnRyaW5zaWNHYXMobXNnIGNvcmUuTWVzc2FnZSwgY2ZnICpwYXJhbXMuQ2hhaW5Db25maWcsIGlzQ29udHJhY3RDcmVhdGlvbiBib29sKSAodWludDY0LCBlcnJvcikgewoJaGVpZ2h0IDo9IGJpZy5OZXdJbnQoay5jdHguQmxvY2tIZWlnaHQoKSkKCWhvbWVzdGVhZCA6PSBjZmcuSXNIb21lc3RlYWQoaGVpZ2h0KQoJaXN0YW5idWwgOj0gY2ZnLklzSXN0YW5idWwoaGVpZ2h0KQoKCXJldHVybiBjb3JlLkludHJpbnNpY0dhcyhtc2cuRGF0YSgpLCBtc2cuQWNjZXNzTGlzdCgpLCBpc0NvbnRyYWN0Q3JlYXRpb24sIGhvbWVzdGVhZCwgaXN0YW5idWwpCn0KCi8vIEdhc1RvUmVmdW5kIGNhbGN1bGF0ZXMgdGhlIGFtb3VudCBvZiBnYXMgdGhlIHN0YXRlIG1hY2hpbmUgc2hvdWxkIHJlZnVuZCB0byB0aGUgc2VuZGVyLiBJdCBpcwovLyBjYXBwZWQgYnkgaGFsZiBvZiB0aGUgZ2FzIGNvbnN1bWVkLgpmdW5jIChrICpLZWVwZXIpIEdhc1RvUmVmdW5kKGdhc0NvbnN1bWVkIHVpbnQ2NCkgdWludDY0IHsKCS8vIEFwcGx5IHJlZnVuZCBjb3VudGVyLCBjYXBwZWQgdG8gaGFsZiBvZiB0aGUgdXNlZCBnYXMuCglyZWZ1bmQgOj0gZ2FzQ29uc3VtZWQgLyAyCglhdmFpbGFibGVSZWZ1bmQgOj0gay5HZXRSZWZ1bmQoKQoJaWYgcmVmdW5kICZndDsgYXZhaWxhYmxlUmVmdW5kIHsKCQlyZXR1cm4gYXZhaWxhYmxlUmVmdW5kCgl9CglyZXR1cm4gcmVmdW5kCn0KCi8vIFJlZnVuZEdhcyB0cmFuc2ZlcnMgdGhlIGxlZnRvdmVyIGdhcyB0byB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLCBjYXBlZCB0byBoYWxmIG9mIHRoZSB0b3RhbCBnYXMKLy8gY29uc3VtZWQgaW4gdGhlIHRyYW5zYWN0aW9uLiBBZGRpdGlvbmFsbHksIHRoZSBmdW5jdGlvbiBzZXRzIHRoZSB0b3RhbCBnYXMgY29uc3VtZWQgdG8gdGhlIHZhbHVlCi8vIHJldHVybmVkIGJ5IHRoZSBFVk0gZXhlY3V0aW9uLCB0aHVzIGlnbm9yaW5nIHRoZSBwcmV2aW91cyBpbnRyaW5zaWMgZ2FzIGNvbnN1bWVkIGR1cmluZyBpbiB0aGUKLy8gQW50ZUhhbmRsZXIuCmZ1bmMgKGsgKktlZXBlcikgUmVmdW5kR2FzKG1zZyBjb3JlLk1lc3NhZ2UsIGxlZnRvdmVyR2FzIHVpbnQ2NCkgKHVpbnQ2NCwgZXJyb3IpIHsKCS8vIHNhZmV0eSBjaGVjazogbGVmdG92ZXIgZ2FzIGFmdGVyIGV4ZWN1dGlvbiBzaG91bGQgbmV2ZXIgZXhjZWVkIHRoZSBnYXMgbGltaXQgZGVmaW5lZCBvbiB0aGUgbWVzc2FnZQoJaWYgbGVmdG92ZXJHYXMgJmd0OyBtc2cuR2FzKCkgewoJCXJldHVybiBsZWZ0b3Zlckdhcywgc3RhY2t0cmFjZS5Qcm9wYWdhdGUoCgkJCXNka2Vycm9ycy5XcmFwZih0eXBlcy5FcnJJbmNvbnNpc3RlbnRHYXMsICZxdW90O2xlZnRvdmVyIGdhcyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIGdhcyBsaW1pdCAoJWQgJmd0OyAlZCkmcXVvdDssIGxlZnRvdmVyR2FzLCBtc2cuR2FzKCkpLAoJCQkmcXVvdDtmYWlsZWQgdG8gdXBkYXRlIGdhcyBjb25zdW1lZCBhZnRlciByZWZ1bmQgb2YgbGVmdG92ZXIgZ2FzJnF1b3Q7LAoJCSkKCX0KCglnYXNDb25zdW1lZCA6PSBtc2cuR2FzKCkgLSBsZWZ0b3ZlckdhcwoKCS8vIGNhbGN1bGF0ZSBhdmFpbGFibGUgZ2FzIHRvIHJlZnVuZCBhbmQgYWRkIGl0IHRvIHRoZSBsZWZ0b3ZlciBnYXMgYW1vdW50CglyZWZ1bmQgOj0gay5HYXNUb1JlZnVuZChnYXNDb25zdW1lZCkKCWxlZnRvdmVyR2FzICs9IHJlZnVuZAoKCS8vIHNhZmV0eSBjaGVjazogbGVmdG92ZXIgZ2FzIGFmdGVyIHJlZnVuZCBzaG91bGQgbmV2ZXIgZXhjZWVkIHRoZSBnYXMgbGltaXQgZGVmaW5lZCBvbiB0aGUgbWVzc2FnZQoJaWYgbGVmdG92ZXJHYXMgJmd0OyBtc2cuR2FzKCkgewoJCXJldHVybiBsZWZ0b3Zlckdhcywgc3RhY2t0cmFjZS5Qcm9wYWdhdGUoCgkJCXNka2Vycm9ycy5XcmFwZih0eXBlcy5FcnJJbmNvbnNpc3RlbnRHYXMsICZxdW90O2xlZnRvdmVyIGdhcyBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIGdhcyBsaW1pdCAoJWQgJmd0OyAlZCkmcXVvdDssIGxlZnRvdmVyR2FzLCBtc2cuR2FzKCkpLAoJCQkmcXVvdDtmYWlsZWQgdG8gdXBkYXRlIGdhcyBjb25zdW1lZCBhZnRlciByZWZ1bmQgb2YgJWQgZ2FzJnF1b3Q7LCByZWZ1bmQsCgkJKQoJfQoKCS8vIFJldHVybiBFVk0gdG9rZW5zIGZvciByZW1haW5pbmcgZ2FzLCBleGNoYW5nZWQgYXQgdGhlIG9yaWdpbmFsIHJhdGUuCglyZW1haW5pbmcgOj0gbmV3KGJpZy5JbnQpLk11bChuZXcoYmlnLkludCkuU2V0VWludDY0KGxlZnRvdmVyR2FzKSwgbXNnLkdhc1ByaWNlKCkpCgoJc3dpdGNoIHJlbWFpbmluZy5TaWduKCkgewoJY2FzZSAtMToKCQkvLyBuZWdhdGl2ZSByZWZ1bmQgZXJyb3JzCgkJcmV0dXJuIGxlZnRvdmVyR2FzLCBzZGtlcnJvcnMuV3JhcGYodHlwZXMuRXJySW52YWxpZFJlZnVuZCwgJnF1b3Q7cmVmdW5kZWQgYW1vdW50IHZhbHVlIGNhbm5vdCBiZSBuZWdhdGl2ZSAlZCZxdW90OywgcmVtYWluaW5nLkludDY0KCkpCgljYXNlIDE6CgkJLy8gcG9zaXRpdmUgYW1vdW50IHJlZnVuZAoJCXBhcmFtcyA6PSBrLkdldFBhcmFtcyhrLmN0eCkKCQlyZWZ1bmRlZENvaW5zIDo9IHNkay5Db2luc3tzZGsuTmV3Q29pbihwYXJhbXMuRXZtRGVub20sIHNkay5OZXdJbnRGcm9tQmlnSW50KHJlbWFpbmluZykpfQoKCQkvLyByZWZ1bmQgdG8gc2VuZGVyIGZyb20gdGhlIGZlZSBjb2xsZWN0b3IgbW9kdWxlIGFjY291bnQsIHdoaWNoIGlzIHRoZSBlc2Nyb3cgYWNjb3VudCBpbiBjaGFyZ2Ugb2YgY29sbGVjdGluZyB0eCBmZWVzCgoJCWVyciA6PSBrLmJhbmtLZWVwZXIuU2VuZENvaW5zRnJvbU1vZHVsZVRvQWNjb3VudChrLmN0eCwgYXV0aHR5cGVzLkZlZUNvbGxlY3Rvck5hbWUsIG1zZy5Gcm9tKCkuQnl0ZXMoKSwgcmVmdW5kZWRDb2lucykKCQlpZiBlcnIgIT0gbmlsIHsKCQkJZXJyID0gc2RrZXJyb3JzLldyYXBmKHNka2Vycm9ycy5FcnJJbnN1ZmZpY2llbnRGdW5kcywgJnF1b3Q7ZmVlIGNvbGxlY3RvciBhY2NvdW50IGZhaWxlZCB0byByZWZ1bmQgZmVlczogJXMmcXVvdDssIGVyci5FcnJvcigpKQoJCQlyZXR1cm4gbGVmdG92ZXJHYXMsIHN0YWNrdHJhY2UuUHJvcGFnYXRlKGVyciwgJnF1b3Q7ZmFpbGVkIHRvIHJlZnVuZCAlZCBsZWZ0b3ZlciBnYXMgKCVzKSZxdW90OywgbGVmdG92ZXJHYXMsIHJlZnVuZGVkQ29pbnMuU3RyaW5nKCkpCgkJfQoJZGVmYXVsdDoKCQkvLyBubyByZWZ1bmQsIGNvbnN1bWUgZ2FzIGFuZCB1cGRhdGUgdGhlIHR4IGdhcyBtZXRlcgoJfQoKCXJldHVybiBsZWZ0b3ZlckdhcywgbmlsCn0KCi8vIHJlc2V0R2FzTWV0ZXJBbmRDb25zdW1lR2FzIHJlc2V0IGZpcnN0IHRoZSBnYXMgbWV0ZXIgY29uc3VtZWQgdmFsdWUgdG8gemVybyBhbmQgc2V0IGl0IGJhY2sgdG8gdGhlIG5ldyB2YWx1ZQovLyAnZ2FzVXNlZCcKZnVuYyAoayAqS2VlcGVyKSByZXNldEdhc01ldGVyQW5kQ29uc3VtZUdhcyhnYXNVc2VkIHVpbnQ2NCkgewoJLy8gcmVzZXQgdGhlIGdhcyBjb3VudAoJay5jdHguR2FzTWV0ZXIoKS5SZWZ1bmRHYXMoay5jdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpLCAmcXVvdDtyZXNldCB0aGUgZ2FzIGNvdW50JnF1b3Q7KQoJay5jdHguR2FzTWV0ZXIoKS5Db25zdW1lR2FzKGdhc1VzZWQsICZxdW90O2FwcGx5IGV2bSB0cmFuc2FjdGlvbiZxdW90OykKfQoKLy8gR2V0Q29pbmJhc2VBZGRyZXNzIHJldHVybnMgdGhlIGJsb2NrIHByb3Bvc2VyJ3MgdmFsaWRhdG9yIG9wZXJhdG9yIGFkZHJlc3MuCmZ1bmMgKGsgS2VlcGVyKSBHZXRDb2luYmFzZUFkZHJlc3MoKSAoY29tbW9uLkFkZHJlc3MsIGVycm9yKSB7Cgljb25zQWRkciA6PSBzZGsuQ29uc0FkZHJlc3Moay5jdHguQmxvY2tIZWFkZXIoKS5Qcm9wb3NlckFkZHJlc3MpCgl2YWxpZGF0b3IsIGZvdW5kIDo9IGsuc3Rha2luZ0tlZXBlci5HZXRWYWxpZGF0b3JCeUNvbnNBZGRyKGsuY3R4LCBjb25zQWRkcikKCWlmICFmb3VuZCB7CgkJcmV0dXJuIGNvbW1vbi5BZGRyZXNze30sIHN0YWNrdHJhY2UuUHJvcGFnYXRlKAoJCQlzZGtlcnJvcnMuV3JhcChzdGFraW5ndHlwZXMuRXJyTm9WYWxpZGF0b3JGb3VuZCwgY29uc0FkZHIuU3RyaW5nKCkpLAoJCQkmcXVvdDtmYWlsZWQgdG8gcmV0cmlldmUgdmFsaWRhdG9yIGZyb20gYmxvY2sgcHJvcG9zZXIgYWRkcmVzcyZxdW90OywKCQkpCgl9CgoJY29pbmJhc2UgOj0gY29tbW9uLkJ5dGVzVG9BZGRyZXNzKHZhbGlkYXRvci5HZXRPcGVyYXRvcigpKQoJcmV0dXJuIGNvaW5iYXNlLCBuaWwKfQo="}})],1),Z._v(" "),c("h3",{attrs:{id:"antehandler"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#antehandler"}},[Z._v("#")]),Z._v(" "),c("code",[Z._v("AnteHandler")])]),Z._v(" "),c("p",[Z._v("The Cosmos SDK "),c("a",{attrs:{href:"https://docs.cosmos.network/master/basics/gas-fees.html#antehandler",target:"_blank",rel:"noopener noreferrer"}},[c("code",[Z._v("AnteHandler")]),c("OutboundLink")],1),Z._v("\nperforms basic checks prior to transaction execution. These checks are usually signature\nverification, transaction field validation, transaction fees, etc.")]),Z._v(" "),c("p",[Z._v("Regarding gas consumption and fees, the "),c("code",[Z._v("AnteHandler")]),Z._v(" checks that the user has enough balance to\ncover for the tx cost (amount plus fees) as well as checking that the gas limit defined in the\nmessage is greater or equal than the computed intrinsic gas for the message.")]),Z._v(" "),c("h2",{attrs:{id:"gas-refunds"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#gas-refunds"}},[Z._v("#")]),Z._v(" Gas Refunds")]),Z._v(" "),c("p",[Z._v("In the EVM, gas can be specified prior to execution. The totality of the gas specified is consumed at the beginning of the execution (during the "),c("code",[Z._v("AnteHandler")]),Z._v(" step) and the remaining gas is refunded back to\nthe user if any gas is left over after the execution. Additionally the EVM can also define gas to be refunded back to the user but those will be capped to a fraction of the used gas depending on the fork/version being used.")]),Z._v(" "),c("h2",{attrs:{id:"_0-fee-transactions"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_0-fee-transactions"}},[Z._v("#")]),Z._v(" 0 Fee Transactions")]),Z._v(" "),c("p",[Z._v("In Cosmos, a minimum gas price is not enforced by the "),c("code",[Z._v("AnteHandler")]),Z._v(" as the "),c("code",[Z._v("min-gas-prices")]),Z._v(" is\nchecked against the local node/validator. In other words, the minimum fees accepted are determined\nby the validators of the network, and each validator can specify a different minimum value for their fees.\nThis potentially allows end users to submit 0 fee transactions if there is at least one single\nvalidator that is willing to include transactions with "),c("code",[Z._v("0")]),Z._v(" gas price in their blocks proposed.")]),Z._v(" "),c("p",[Z._v("For this same reason, in Planq it is possible to send transactions with "),c("code",[Z._v("0")]),Z._v(" fees for transaction\ntypes other than the ones defined by the "),c("code",[Z._v("evm")]),Z._v(" module. EVM module transactions cannot have "),c("code",[Z._v("0")]),Z._v(" fees\nas gas is required inherently by the EVM. This check is done by the EVM transactions stateless validation\n(i.e "),c("code",[Z._v("ValidateBasic")]),Z._v(") function as well as on the custom "),c("code",[Z._v("AnteHandler")]),Z._v(" defined by Planq.")]),Z._v(" "),c("h2",{attrs:{id:"gas-estimation"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#gas-estimation"}},[Z._v("#")]),Z._v(" Gas estimation")]),Z._v(" "),c("p",[Z._v("Ethereum provides a JSON-RPC endpoint "),c("code",[Z._v("eth_estimateGas")]),Z._v(" to help users set up a correct gas limit in their transactions.")]),Z._v(" "),c("p",[Z._v("Unfortunately, we cannot make use of the SDK "),c("code",[Z._v("tx simulation")]),Z._v(" for gas estimation because the pre-check in the Ante Handlers would require a valid signature, and the sender balance to be enough to pay for the gas. But in Ethereum, this endpoint can be called without specifying any sender address.")]),Z._v(" "),c("p",[Z._v("For that reason, a specific query API "),c("code",[Z._v("EstimateGas")]),Z._v(" is implemented in Planq. It will apply the transaction against the current block/state and perform a binary search in order to find the optimal gas value to return to the user (the same transaction will be applied over and over until we find the minimum gas needed before it fails). The reason we need to use a binary search is that the gas required for the\ntransaction might be higher than the value returned by the EVM after applying the transaction, so we need to try until we find the optimal value.")]),Z._v(" "),c("p",[Z._v("A cache context will be used during the whole execution to avoid changes be persisted in the state.")]),Z._v(" "),c("p",[Z._v("+++\nhttps://github.com/planq-network/planq/blob/098da6d0cc0e0c4cefbddf632df1057383973e4a/x/evm/keeper/grpc_query.go#L392")]),Z._v(" "),c("h2",{attrs:{hide:"",id:"next"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[Z._v("#")]),Z._v(" Next")]),Z._v(" "),c("p",{attrs:{hide:""}},[Z._v("Learn about the different types of "),c("RouterLink",{attrs:{to:"/basics/tokens.html"}},[Z._v("tokens")]),Z._v(" available")],1)],1)}),[],!1,null,null,null);l.default=d.exports}}]);
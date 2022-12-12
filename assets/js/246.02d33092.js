(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{696:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"state-sync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-sync"}},[t._v("#")]),t._v(" State Sync")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v("Learn about Tendermint Core state sync and support offered by the Cosmos SDK.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("strong",[t._v("Note")]),t._v(": Only curious about how to sync a node with the network? Skip to "),e("a",{attrs:{href:"#state-syncing-a-node"}},[t._v("this section")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"tendermint-core-state-sync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-core-state-sync"}},[t._v("#")]),t._v(" Tendermint Core State Sync")]),t._v(" "),e("p",[t._v("State sync allows a new node to join a network by fetching a snapshot of the network state at a recent height, instead of fetching and replaying all historical blocks. Since application state is smaller than the combination of all blocks, and restoring state is faster than replaying blocks, this reduces the time to sync with the network from days to minutes.")]),t._v(" "),e("p",[t._v("This section of the document provides a brief overview of the Tendermint state sync protocol, and how to sync a node. For more details, refer to the "),e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/apps.html#state-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABCI Application Guide"),e("OutboundLink")],1),t._v(" and the "),e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABCI Reference Documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"state-sync-snapshots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-sync-snapshots"}},[t._v("#")]),t._v(" State Sync Snapshots")]),t._v(" "),e("p",[t._v("A guiding principle when designing Tendermint state sync was to give applications as much flexibility as possible. Therefore, Tendermint does not care what snapshots contain, how they are taken, or how they are restored. It is only concerned with discovering existing snapshots in the network, fetching them, and passing them to applications via ABCI. Tendermint uses light client verification to check the final app hash of a restored application against the chain app hash, but any further verification must be done by the application itself during restoration.")]),t._v(" "),e("p",[t._v("Snapshots consist of binary chunks in an arbitrary format. Chunks cannot be larger than 16 MB, but otherwise there are no restrictions. "),e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#snapshot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snapshot metadata"),e("OutboundLink")],1),t._v(", exchanged via ABCI and P2P, contains the following fields:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("height")]),t._v(" ("),e("code",[t._v("uint64")]),t._v("): height at which the snapshot was taken")]),t._v(" "),e("li",[e("code",[t._v("format")]),t._v(" ("),e("code",[t._v("uint32")]),t._v("): arbitrary application-specific format identifier (eg. version)")]),t._v(" "),e("li",[e("code",[t._v("chunks")]),t._v(" ("),e("code",[t._v("uint32")]),t._v("): number of binary chunks in the snapshot")]),t._v(" "),e("li",[e("code",[t._v("hash")]),t._v(" ("),e("code",[t._v("bytes")]),t._v("): arbitrary snapshot hash for comparing snapshots across nodes")]),t._v(" "),e("li",[e("code",[t._v("metadata")]),t._v(" ("),e("code",[t._v("bytes")]),t._v("): arbitrary binary snapshot metadata for use by applications")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("format")]),t._v(" field allows applications to change their snapshot format in a backwards-compatible manner, by providing snapshots in multiple formats, and choosing which formats to accept during restoration. This is useful when, for example, changing serialization or compression formats: as nodes may be able to provide snapshots to peers running older verions, or make use of old snapshots when starting up with a newer version.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("hash")]),t._v(" field contains an arbitrary snapshot hash. Snapshots that have identical "),e("code",[t._v("metadata")]),t._v(" fields (including "),e("code",[t._v("hash")]),t._v(") across nodes are considered identical, and "),e("code",[t._v("chunks")]),t._v(" will be fetched from any of these nodes. The "),e("code",[t._v("hash")]),t._v(" cannot be trusted, and is not verified by Tendermint itself, which guards against inadvertent nondeterminism in snapshot generation. The "),e("code",[t._v("hash")]),t._v(" may be verified by the application instead.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("metadata")]),t._v(" field can contain any arbitrary metadata needed by the application. For example, the application may want to include chunk checksums to discard damaged "),e("code",[t._v("chunks")]),t._v(", or "),e("a",{attrs:{href:"https://ethereum.org/en/developers/tutorials/merkle-proofs-for-offline-data-integrity/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Merkle proofs"),e("OutboundLink")],1),t._v(" to verify each chunk individually against the chain app hash. In "),e("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf"),e("OutboundLink")],1),t._v("-encoded form, snapshot "),e("code",[t._v("metadata")]),t._v(" messages cannot exceed 4 MB.")]),t._v(" "),e("h3",{attrs:{id:"taking-serving-snapshots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taking-serving-snapshots"}},[t._v("#")]),t._v(" Taking, Serving Snapshots")]),t._v(" "),e("p",[t._v("To enable state sync, some nodes in the network must take and serve snapshots. When a peer is attempting to state sync, an existing Tendermint node will call the following ABCI methods on the application to provide snapshot data to this peer:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#listsnapshots",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("ListSnapshots")]),e("OutboundLink")],1),t._v(": returns a list of available snapshots, with metadata")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#loadsnapshotchunk",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("LoadSnapshotChunk")]),e("OutboundLink")],1),t._v(": returns binary chunk data")])]),t._v(" "),e("p",[t._v("Snapshots should typically be generated at regular intervals rather than on-demand: this improves state sync performance, since snapshot generation can be slow, and avoids a denial-of-service vector where an adversary floods a node with such requests. Older snapshots can usually be removed, but it may be useful to keep at least the two most recent to avoid deleting the previous snapshot while a node is restoring it.")]),t._v(" "),e("p",[t._v("It is entirely up to the application to decide how to take snapshots, but it should strive to satisfy the following guarantees:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Asynchronous")]),t._v(": snapshotting should not halt block processing, and it should therefore happen asynchronously, eg. in a separate thread")]),t._v(" "),e("li",[e("strong",[t._v("Consistent")]),t._v(": snapshots should be taken at isolated heights, and should not be affected by concurrent writes, eg. due to block processing in the main thread")]),t._v(" "),e("li",[e("strong",[t._v("Deterministic")]),t._v(": snapshot "),e("code",[t._v("chunks")]),t._v(" and "),e("code",[t._v("metadata")]),t._v(" should be identical (at the byte level) across all nodes for a given "),e("code",[t._v("height")]),t._v(" and "),e("code",[t._v("format")]),t._v(", to ensure good availability of "),e("code",[t._v("chunks")])])]),t._v(" "),e("p",[t._v("As an example, this can be implemented as follows:")]),t._v(" "),e("ol",[e("li",[t._v("Use a data store that supports transactions with snapshot isolation, such as RocksDB or BadgerDB.")]),t._v(" "),e("li",[t._v("Start a read-only database transaction in the main thread after committing a block.")]),t._v(" "),e("li",[t._v("Pass the database transaction handle into a newly spawned thread.")]),t._v(" "),e("li",[t._v("Iterate over all data items in a deterministic order (eg. sorted by key)")]),t._v(" "),e("li",[t._v("Serialize data items (eg. using "),e("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf"),e("OutboundLink")],1),t._v("), and write them to a byte stream.")]),t._v(" "),e("li",[t._v("Hash the byte stream, and split it into fixed-size chunks (eg. of 10 MB)")]),t._v(" "),e("li",[t._v("Store the chunks in the file system as separate files.")]),t._v(" "),e("li",[t._v("Write the snapshot metadata to a database or file, including the byte stream hash.")]),t._v(" "),e("li",[t._v("Close the database transaction and exit the thread.")])]),t._v(" "),e("p",[t._v("Applications may want to take additional steps as well, such as compressing the data, checksumming chunks, generating proofs for incremental verification, and removing old snapshots.")]),t._v(" "),e("h3",{attrs:{id:"restoring-snapshots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restoring-snapshots"}},[t._v("#")]),t._v(" Restoring Snapshots")]),t._v(" "),e("p",[t._v("When Tendermint starts, it will check whether the local node has any state (ie. whether "),e("code",[t._v("LastBlockHeight == 0")]),t._v("), and if it doesn't, it will begin discovering snapshots via the P2P network. These snapshots will be provided to the local application via the following ABCI calls:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#offersnapshot",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("OfferSnapshot(snapshot, apphash)")]),e("OutboundLink")],1),t._v(": offers a discovered snapshot to the application")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#applysnapshotchunk",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("ApplySnapshotChunk(index, chunk, sender)")]),e("OutboundLink")],1),t._v(": applies a snapshot chunk")])]),t._v(" "),e("p",[t._v("Discovered snapshots are offered to the application and it can respond by accepting the snapshot, rejecting it, rejecting the format, rejecting the senders, aborting state sync, and so on.")]),t._v(" "),e("p",[t._v("Once a snapshot is accepted, Tendermint will fetch chunks from across available peers, and apply them sequentially to the application, which can choose to accept the chunk, refetch it, reject the snapshot, reject the sender, abort state sync, and so on.")]),t._v(" "),e("p",[t._v("Once all chunks have been applied, Tendermint will call the "),e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/abci.html#info",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("Info")]),t._v(" ABCI method"),e("OutboundLink")],1),t._v(" on the application, and check that the app hash and height correspond to the trusted values from the chain. It will then switch to fast sync to fetch any remaining blocks (if enabled), before finally joining normal consensus operation.")]),t._v(" "),e("p",[t._v("How snapshots are actually restored is entirely up to the application, but will generally be the inverse of how they are generated. Note, however, that Tendermint only verifies snapshots after all chunks have been restored, and does not reject any P2P peers on its own. As long as the trusted hash and application code are correct, it is not possible for an adversary to cause a state synced node to have incorrect state when joining consensus, but it is up to the application to counteract state sync denial-of-service (eg. by implementing incremental verification, rejecting invalid peers).")]),t._v(" "),e("p",[t._v("Note that state synced nodes will have a truncated block history starting at the height of the restored snapshot, and there is currently no "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4629",target:"_blank",rel:"noopener noreferrer"}},[t._v("backfill of all block data"),e("OutboundLink")],1),t._v(". Networks should consider broader implications of this, and may want to ensure at least a few archive nodes retain a complete block history, for both auditability and backup.")]),t._v(" "),e("h2",{attrs:{id:"cosmos-sdk-state-sync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-state-sync"}},[t._v("#")]),t._v(" Cosmos SDK State Sync")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos SDK"),e("OutboundLink")],1),t._v(" v0.40+ includes automatic support for state sync, so application developers only need to enable it to take advantage. They will not need to implement the state sync protocol described in the "),e("a",{attrs:{href:"#tendermint-core-state-sync"}},[t._v("above section on Tendermint")]),t._v(" themselves.")]),t._v(" "),e("h3",{attrs:{id:"state-sync-snapshots-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-sync-snapshots-2"}},[t._v("#")]),t._v(" State Sync Snapshots")]),t._v(" "),e("p",[t._v("Tendermint Core handles most of the grunt work of discovering, exchanging, and verifying state data for state sync, but the application must take snapshots of its state at regular intervals, and make these available to Tendermint via ABCI calls, and be able to restore these when syncing a new node.")]),t._v(" "),e("p",[t._v("The Cosmos SDK stores application state in a data store called "),e("a",{attrs:{href:"https://github.com/cosmos/iavl",target:"_blank",rel:"noopener noreferrer"}},[t._v("IAVL"),e("OutboundLink")],1),t._v(", and each module can set up its own IAVL stores. At regular height intervals (which are configurable), the Cosmos SDK will export the contents of each store at that height, "),e("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Protobuf"),e("OutboundLink")],1),t._v("-encode and compress it, and save it to a snapshot store in the local filesystem. Since IAVL keeps historical versions of data, these snapshots can be generated simultaneously with new blocks being executed. These snapshots will then be fetched by Tendermint via ABCI when a new node is state syncing.")]),t._v(" "),e("p",[t._v("Note that only IAVL stores that are managed by the Cosmos SDK can be snapshotted. If the application stores additional data in external data stores, there is currently no mechanism to include these in state sync snapshots, so the application therefore cannot make use of automatic state sync via the SDK. However, it is free to implement the state sync protocol itself as described in the "),e("a",{attrs:{href:"https://docs.tendermint.com/master/spec/abci/apps.html#state-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("ABCI Documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("When a new node is state synced, Tendermint will fetch a snapshot from peers in the network and provide it to the local (empty) application, which will import it into its IAVL stores. Tendermint then verifies the application's app hash against the main blockchain using light client verification, and proceeds to execute blocks as usual. Note that a state synced node will only restore the application state for the height the snapshot was taken at, and will not contain historical data nor historical blocks.")]),t._v(" "),e("h3",{attrs:{id:"enabling-state-sync-snapshots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-state-sync-snapshots"}},[t._v("#")]),t._v(" Enabling State Sync Snapshots")]),t._v(" "),e("p",[t._v("To enable state sync snapshots, an application using the CosmosSDK "),e("code",[t._v("BaseApp")]),t._v(" needs to set up a snapshot store (with a database and filesystem directory) and configure the snapshotting interval and the number of historical snapshots to keep. A minimal exmaple of this follows:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c25hcHNob3REaXIgOj0gZmlsZXBhdGguSm9pbigKICBjYXN0LlRvU3RyaW5nKGFwcE9wdHMuR2V0KGZsYWdzLkZsYWdIb21lKSksICZxdW90O2RhdGEmcXVvdDssICZxdW90O3NuYXBzaG90cyZxdW90OykKc25hcHNob3REQiwgZXJyIDo9IHNkay5OZXdMZXZlbERCKCZxdW90O21ldGFkYXRhJnF1b3Q7LCBzbmFwc2hvdERpcikKaWYgZXJyICE9IG5pbCB7CiAgcGFuaWMoZXJyKQp9CnNuYXBzaG90U3RvcmUsIGVyciA6PSBzbmFwc2hvdHMuTmV3U3RvcmUoc25hcHNob3REQiwgc25hcHNob3REaXIpCmlmIGVyciAhPSBuaWwgewogIHBhbmljKGVycikKfQphcHAgOj0gYmFzZWFwcC5OZXdCYXNlQXBwKAogICZxdW90O2FwcCZxdW90OywgbG9nZ2VyLCBkYiwgdHhEZWNvZGVyLAogIGJhc2VhcHAuU2V0U25hcHNob3RTdG9yZShzbmFwc2hvdFN0b3JlKSwKICBiYXNlYXBwLlNldFNuYXBzaG90SW50ZXJ2YWwoY2FzdC5Ub1VpbnQ2NChhcHBPcHRzLkdldCgKICAgIHNlcnZlci5GbGFnU3RhdGVTeW5jU25hcHNob3RJbnRlcnZhbCkpKSwKICBiYXNlYXBwLlNldFNuYXBzaG90S2VlcFJlY2VudChjYXN0LlRvVWludDMyKGFwcE9wdHMuR2V0KAogICAgc2VydmVyLkZsYWdTdGF0ZVN5bmNTbmFwc2hvdEtlZXBSZWNlbnQpKSksCikK"}}),t._v(" "),e("p",[t._v("When starting the application with the appropriate flags, (eg. "),e("code",[t._v("--state-sync.snapshot-interval 1000 --state-sync.snapshot-keep-recent 2")]),t._v(") it should generate snapshots and output log messages:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Q3JlYXRpbmcgc3RhdGUgc25hcHNob3QgICAgbW9kdWxlPW1haW4gaGVpZ2h0PTMwMDAKQ29tcGxldGVkIHN0YXRlIHNuYXBzaG90ICAgbW9kdWxlPW1haW4gaGVpZ2h0PTMwMDAgZm9ybWF0PTEK"}}),t._v(" "),e("p",[t._v("Note that the snapshot interval must currently be a multiple of the "),e("code",[t._v("pruning-keep-every")]),t._v(" (defaults to 100), to prevent heights from being pruned while taking snapshots. It's also usually a good idea to keep at least 2 recent snapshots, such that the previous snapshot isn't removed while a node is attempting to state sync using it.")]),t._v(" "),e("h2",{attrs:{id:"state-syncing-a-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state-syncing-a-node"}},[t._v("#")]),t._v(" State Syncing a Node")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("Looking for snapshots or archive nodes to sync your node with? Check out "),e("RouterLink",{attrs:{to:"/validators/snapshots_archives.html"}},[t._v("this page")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("Once a few nodes in a network have taken state sync snapshots, new nodes can join the network using state sync. To do this, the node should first be configured as usual, and the following pieces of information must be obtained for light client verification:")]),t._v(" "),e("ul",[e("li",[t._v("Two available RPC servers (at least)")]),t._v(" "),e("li",[t._v("Trusted height")]),t._v(" "),e("li",[t._v("Block ID hash of trusted height")])]),t._v(" "),e("p",[t._v("The trusted hash must be obtained from a trusted source (eg. a block explorer), but the RPC servers do not need to be trusted. Tendermint will use the hash to obtain trusted app hashes from the blockchain in order to verify restored application snapshots. The app hash and corresponding height are the only pieces of information that can be trusted when restoring snapshots. Everything else can be forged by adversaries.")]),t._v(" "),e("p",[t._v("In this guide we use Ubuntu 20.04")]),t._v(" "),e("h3",{attrs:{id:"prepare-system"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prepare-system"}},[t._v("#")]),t._v(" Prepare system")]),t._v(" "),e("p",[t._v("Update system")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBhcHQgdXBkYXRlIC15Cg=="}}),t._v(" "),e("p",[t._v("Upgrade system")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBhcHQgdXBncmFkZSAteQo="}}),t._v(" "),e("p",[t._v("Install dependencies")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBhcHQtZ2V0IGluc3RhbGwgY2EtY2VydGlmaWNhdGVzIGN1cmwgZ251cGcgbHNiLXJlbGVhc2UgbWFrZSBnY2MgZ2l0IGpxIHdnZXQgLXkK"}}),t._v(" "),e("p",[t._v("Install Go")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"d2dldCAtcSAtTyAtIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jYW5oYS9nb2xhbmctdG9vbHMtaW5zdGFsbC1zY3JpcHQvbWFzdGVyL2dvaW5zdGFsbC5zaCB8IGJhc2gKc291cmNlIH4vLmJhc2hyYwo="}}),t._v(" "),e("p",[t._v("Set the node name")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bW9uaWtlcj0mcXVvdDtOT0RFX05BTUUmcXVvdDsK"}}),t._v(" "),e("h2",{attrs:{id:"use-commands-below-for-testnet-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-commands-below-for-testnet-setup"}},[t._v("#")]),t._v(" Use commands below for Testnet setup")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U05BUF9SUEMxPSZxdW90O2h0dHA6Ly9iZC1ldm1vcy10ZXN0bmV0LXN0YXRlLXN5bmMtbm9kZS0wMS5iZG5vZGVzLm5ldDoyNjY1NyZxdW90OwpTTkFQX1JQQz0mcXVvdDtodHRwOi8vYmQtZXZtb3MtdGVzdG5ldC1zdGF0ZS1zeW5jLW5vZGUtMDIuYmRub2Rlcy5uZXQ6MjY2NTcmcXVvdDsKQ0hBSU5fSUQ9JnF1b3Q7cGxhbnFfNzAwMC0xJnF1b3Q7ClBFRVI9JnF1b3Q7M2E2YjIyZTE1NjlkOWY4NWU5ZTk3ZDFkMjA0YTFjNDU3ZDg2MDkyNkBiZC1ldm1vcy10ZXN0bmV0LXNlZWQtbm9kZS0wMS5iZG5vZGVzLm5ldDoyNjY1NiZxdW90Owp3Z2V0IC1PICRIT01FL2dlbmVzaXMuanNvbiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcGxhbnEtbmV0d29yay9uZXR3b3Jrcy9tYWluL3Rlc3RuZXQvL3BsYW5xXzcwMDAtMS9nZW5lc2lzLmpzb24gCg=="}}),t._v(" "),e("h2",{attrs:{id:"use-commands-below-for-mainnet-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-commands-below-for-mainnet-setup"}},[t._v("#")]),t._v(" Use commands below for Mainnet setup")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U05BUF9SUEMxPSZxdW90O2h0dHA6Ly9iZC1ldm1vcy1tYWlubmV0LXN0YXRlLXN5bmMtdXMtMDEuYmRub2Rlcy5uZXQ6MjY2NTcmcXVvdDsKU05BUF9SUEM9JnF1b3Q7aHR0cDovL2JkLWV2bW9zLW1haW5uZXQtc3RhdGUtc3luYy1ldS0wMS5iZG5vZGVzLm5ldDoyNjY1NyZxdW90OwpDSEFJTl9JRD0mcXVvdDtwbGFucV83MDcwLTImcXVvdDsKUEVFUj0mcXVvdDs5NjU1N2UyNmFhYmYzYjIzZThmZjUyODJkMDMxOTY4OTJhNzc3NmZjQGJkLWV2bW9zLW1haW5uZXQtc3RhdGUtc3luYy11cy0wMS5iZG5vZGVzLm5ldCxkZWM1ODdkNTVmZjM4ODI3ZWJjNjMxMmNlZGRhNjA4NWM1OTY4M2I2QGJkLWV2bW9zLW1haW5uZXQtc3RhdGUtc3luYy1ldS0wMS5iZG5vZGVzLm5ldCZxdW90Owp3Z2V0IC1PICRIT01FL2dlbmVzaXMuanNvbiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcGxhbnEtbmV0d29yay9uZXR3b3Jrcy9tYWluL21haW5uZXQvZ2VuZXNpcy5qc29uIAo="}}),t._v(" "),e("h3",{attrs:{id:"install-planqd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-planqd"}},[t._v("#")]),t._v(" Install planqd")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9wbGFucS1uZXR3b3JrL3BsYW5xLmdpdCAmYW1wOyZhbXA7IFwgCmNkIHBsYW5xICZhbXA7JmFtcDsgXCAKbWFrZSBpbnN0YWxsCg=="}}),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("Node init")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGluaXQgJG1vbmlrZXIgLS1jaGFpbi1pZCAkQ0hBSU5fSUQK"}}),t._v(" "),e("p",[t._v("Move genesis file to .planqd/config folder")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bXYgJEhPTUUvZ2VuZXNpcy5qc29uIH4vLnBsYW5xZC9jb25maWcvCg=="}}),t._v(" "),e("p",[t._v("Reset the node")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIHRlbmRlcm1pbnQgdW5zYWZlLXJlc2V0LWFsbCAtLWhvbWUgJEhPTUUvLnBsYW5xZAo="}}),t._v(" "),e("p",[t._v('Change config files (set the node name, add persistent peers, set indexer = "null")')]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2VkIC1pIC1lICZxdW90O3MlXm1vbmlrZXIgKj0uKiVtb25pa2VyID0gXCZxdW90OyRtb25pa2VyXCZxdW90OyU7ICZxdW90OyAkSE9NRS8ucGxhbnFkL2NvbmZpZy9jb25maWcudG9tbApzZWQgLWkgLWUgJnF1b3Q7cyVeaW5kZXhlciAqPS4qJWluZGV4ZXIgPSBcJnF1b3Q7bnVsbFwmcXVvdDslOyAmcXVvdDsgJEhPTUUvLnBsYW5xZC9jb25maWcvY29uZmlnLnRvbWwKc2VkIC1pIC1lICZxdW90O3MlXnBlcnNpc3RlbnRfcGVlcnMgKj0uKiVwZXJzaXN0ZW50X3BlZXJzID0gXCZxdW90OyRQRUVSXCZxdW90OyU7ICZxdW90OyAkSE9NRS8ucGxhbnFkL2NvbmZpZy9jb25maWcudG9tbAo="}}),t._v(" "),e("p",[t._v("Set the variables for start from snapshot")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"TEFURVNUX0hFSUdIVD0kKGN1cmwgLXMgJFNOQVBfUlBDL2Jsb2NrIHwganEgLXIgLnJlc3VsdC5ibG9jay5oZWFkZXIuaGVpZ2h0KTsgXApCTE9DS19IRUlHSFQ9JCgoTEFURVNUX0hFSUdIVCAtIDIwMDApKTsgXApUUlVTVF9IQVNIPSQoY3VybCAtcyAmcXVvdDskU05BUF9SUEMvYmxvY2s/aGVpZ2h0PSRCTE9DS19IRUlHSFQmcXVvdDsgfCBqcSAtciAucmVzdWx0LmJsb2NrX2lkLmhhc2gpCg=="}}),t._v(" "),e("p",[t._v("Check")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyAkTEFURVNUX0hFSUdIVCAkQkxPQ0tfSEVJR0hUICRUUlVTVF9IQVNICg=="}}),t._v(" "),e("p",[t._v("Output example (numbers will be different):")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Mzc2MDgwIDM3NDA4MCBGMEM3OEZENEFFNERCNUU3NkEyOTgyMDZBRTNDNjAyRkYzMDY2OEM1MjFENzUzQkI3QzQzNTc3MUFFQTQ3MTg5Cg=="}}),t._v(" "),e("p",[t._v("If output is OK do next")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2VkIC1pLmJhayAtRSAmcXVvdDtzfF4oZW5hYmxlW1s6c3BhY2U6XV0rPVtbOnNwYWNlOl1dKykuKiR8XDF0cnVlfCA7IFwKCnN8XihycGNfc2VydmVyc1tbOnNwYWNlOl1dKz1bWzpzcGFjZTpdXSspLiokfFwxXCZxdW90OyRTTkFQX1JQQywkU05BUF9SUEMxXCZxdW90O3wgOyBcCgpzfF4odHJ1c3RfaGVpZ2h0W1s6c3BhY2U6XV0rPVtbOnNwYWNlOl1dKykuKiR8XDEkQkxPQ0tfSEVJR0hUfCA7IFwKCnN8Xih0cnVzdF9oYXNoW1s6c3BhY2U6XV0rPVtbOnNwYWNlOl1dKykuKiR8XDFcJnF1b3Q7JFRSVVNUX0hBU0hcJnF1b3Q7fCA7IFwKCnN8XihzZWVkc1tbOnNwYWNlOl1dKz1bWzpzcGFjZTpdXSspLiokfFwxXCZxdW90O1wmcXVvdDt8JnF1b3Q7IH4vLnBsYW5xZC9jb25maWcvY29uZmlnLnRvbWwK"}}),t._v(" "),e("h3",{attrs:{id:"create-planqd-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-planqd-service"}},[t._v("#")]),t._v(" Create planqd service")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyAmcXVvdDtbVW5pdF0KRGVzY3JpcHRpb249UGxhbnFkIE5vZGUKQWZ0ZXI9bmV0d29yay50YXJnZXQKIwpbU2VydmljZV0KVXNlcj0kVVNFUgpUeXBlPXNpbXBsZQpFeGVjU3RhcnQ9JCh3aGljaCBwbGFucWQpIHN0YXJ0ClJlc3RhcnQ9b24tZmFpbHVyZQpMaW1pdE5PRklMRT02NTUzNQojCltJbnN0YWxsXQpXYW50ZWRCeT1tdWx0aS11c2VyLnRhcmdldCZxdW90OyAmZ3Q7ICRIT01FL3BsYW5xZC5zZXJ2aWNlOyBzdWRvIG12ICRIT01FL3BsYW5xZC5zZXJ2aWNlIC9ldGMvc3lzdGVtZC9zeXN0ZW0vCg=="}}),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBzeXN0ZW1jdGwgZW5hYmxlIHBsYW5xZC5zZXJ2aWNlICZhbXA7JmFtcDsgc3VkbyBzeXN0ZW1jdGwgZGFlbW9uLXJlbG9hZAo="}}),t._v(" "),e("h3",{attrs:{id:"run-planqd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-planqd"}},[t._v("#")]),t._v(" Run planqd")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3l0ZW1jdGwgc3RhcnQgcGxhbnFkCg=="}}),t._v(" "),e("h3",{attrs:{id:"check-logs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-logs"}},[t._v("#")]),t._v(" Check logs")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"am91cm5hbGN0bCAtdSBwbGFucWQgLWYK"}}),t._v(" "),e("p",[t._v("When the node is started it will then attempt to find a state sync snapshot in the network, and restore it:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"U3RhcnRlZCBub2RlICAgICAgICAgICAgICAgICAgIG1vZHVsZT1tYWluIG5vZGVJbmZvPSZxdW90Oy4uLiZxdW90OwpEaXNjb3ZlcmluZyBzbmFwc2hvdHMgZm9yIDIwcwpEaXNjb3ZlcmVkIG5ldyBzbmFwc2hvdCAgICAgICAgaGVpZ2h0PTMwMDAgZm9ybWF0PTEgaGFzaD0wRjE0QTQ3MwpEaXNjb3ZlcmVkIG5ldyBzbmFwc2hvdCAgICAgICAgaGVpZ2h0PTIwMDAgZm9ybWF0PTEgaGFzaD1DNjIwOUFGNwpPZmZlcmluZyBzbmFwc2hvdCB0byBBQkNJIGFwcCAgaGVpZ2h0PTMwMDAgZm9ybWF0PTEgaGFzaD0wRjE0QTQ3MwpTbmFwc2hvdCBhY2NlcHRlZCwgcmVzdG9yaW5nICAgaGVpZ2h0PTMwMDAgZm9ybWF0PTEgaGFzaD0wRjE0QTQ3MwpGZXRjaGluZyBzbmFwc2hvdCBjaHVuayAgICAgICAgaGVpZ2h0PTMwMDAgZm9ybWF0PTEgY2h1bms9MCB0b3RhbD0zCkZldGNoaW5nIHNuYXBzaG90IGNodW5rICAgICAgICBoZWlnaHQ9MzAwMCBmb3JtYXQ9MSBjaHVuaz0xIHRvdGFsPTMKRmV0Y2hpbmcgc25hcHNob3QgY2h1bmsgICAgICAgIGhlaWdodD0zMDAwIGZvcm1hdD0xIGNodW5rPTIgdG90YWw9MwpBcHBsaWVkIHNuYXBzaG90IGNodW5rICAgICAgICAgaGVpZ2h0PTMwMDAgZm9ybWF0PTEgY2h1bms9MCB0b3RhbD0zCkFwcGxpZWQgc25hcHNob3QgY2h1bmsgICAgICAgICBoZWlnaHQ9MzAwMCBmb3JtYXQ9MSBjaHVuaz0xIHRvdGFsPTMKQXBwbGllZCBzbmFwc2hvdCBjaHVuayAgICAgICAgIGhlaWdodD0zMDAwIGZvcm1hdD0xIGNodW5rPTIgdG90YWw9MwpWZXJpZmllZCBBQkNJIGFwcCAgICAgICAgICAgICAgaGVpZ2h0PTMwMDAgYXBwSGFzaD1GN0Q2NkJDOQpTbmFwc2hvdCByZXN0b3JlZCAgICAgICAgICAgICAgaGVpZ2h0PTMwMDAgZm9ybWF0PTEgaGFzaD0wRjE0QTQ3MwpFeGVjdXRlZCBibG9jayAgICAgICAgICAgICAgICAgaGVpZ2h0PTMwMDEgdmFsaWRUeHM9MTYgaW52YWxpZFR4cz0wCkNvbW1pdHRlZCBzdGF0ZSAgICAgICAgICAgICAgICBoZWlnaHQ9MzAwMSB0eHM9MTYgYXBwSGFzaD0wRkRCQjBENUYKRXhlY3V0ZWQgYmxvY2sgICAgICAgICAgICAgICAgIGhlaWdodD0zMDAyIHZhbGlkVHhzPTI1IGludmFsaWRUeHM9MApDb21taXR0ZWQgc3RhdGUgICAgICAgICAgICAgICAgaGVpZ2h0PTMwMDIgdHhzPTI1IGFwcEhhc2g9NDBEMTJFNEIzCg=="}}),t._v(" "),e("p",[t._v("The node is now state synced, having joined the network in seconds")]),t._v(" "),e("h3",{attrs:{id:"use-this-command-to-switch-off-your-state-sync-mode-after-node-fully-synced-to-avoid-problems-in-future-node-restarts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-this-command-to-switch-off-your-state-sync-mode-after-node-fully-synced-to-avoid-problems-in-future-node-restarts"}},[t._v("#")]),t._v(" Use this command to switch off your State Sync mode, after node fully synced to avoid problems in future node restarts!")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2VkIC1pLmJhayAtRSAmcXVvdDtzfF4oZW5hYmxlW1s6c3BhY2U6XV0rPVtbOnNwYWNlOl1dKykuKiR8XDFmYWxzZXwmcXVvdDsgJEhPTUUvLnBsYW5xZC9jb25maWcvY29uZmlnLnRvbWwK"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("strong",[t._v("Note")]),t._v(": Information included in this document is sourced from "),e("a",{attrs:{href:"https://medium.com/@erikgrinaker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Erik Grinaker"),e("OutboundLink")],1),t._v(", specifically his state sync guides for "),e("a",{attrs:{href:"https://medium.com/tendermint/tendermint-core-state-sync-for-developers-70a96ba3ee35",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint Core"),e("OutboundLink")],1),t._v(" and the "),e("a",{attrs:{href:"https://medium.com/cosmos-blockchain/cosmos-sdk-state-sync-guide-99e4cf43be2f",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos SDK"),e("OutboundLink")],1),t._v(".")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);
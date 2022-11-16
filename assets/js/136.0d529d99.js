(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{575:function(t,e,l){"use strict";l.r(e);var a=l(1),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"telemetry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[t._v("#")]),t._v(" Telemetry")]),t._v(" "),e("p",{attrs:{synopsis:""}},[t._v("Gather relevant insights about the Planq application and modules with custom metrics and telemetry.")]),t._v(" "),e("p",[t._v("To understand how to use the metrics below, please refer to the "),e("a",{attrs:{href:"https://docs.cosmos.network/main/core/telemetry.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos SDK telemetry documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"supported-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-metrics"}},[t._v("#")]),t._v(" Supported Metrics")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Metric")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Unit")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("feemarket_base_fee")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Amount of base fee per EIP-1559 block")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("feemarket_block_gas")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Amount of gas used in an EIP-1559 block")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("feesplit_distribute_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Amount of fees distributed to registered smart contracts")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("recovery_ibc_on_recv_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of recoveries using the ibc "),e("code",[t._v("onRecvPacket")]),t._v(" callback")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("recovery")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("recovery_ibc_on_recv_token_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of tokens recovered using the ibc "),e("code",[t._v("onRecvPacket")]),t._v(" callback")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_convert_coin_amount_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of converted coins using a "),e("code",[t._v("ConvertCoin")]),t._v(" msg")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_convert_coin_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of txs with a "),e("code",[t._v("ConvertCoin")]),t._v(" msg")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("tx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_convert_erc20_amount_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of converted erc20 using a "),e("code",[t._v("ConvertERC20")]),t._v(" msg")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_convert_erc20_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of txs with a "),e("code",[t._v("ConvertERC20")]),t._v(" msg")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("tx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_ethereum_tx_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of txs processed via the EVM")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("tx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_ethereum_tx_gas_used_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of gas used by an etheruem tx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_ethereum_tx_gas_limit_per_gas_used")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratio of gas limit to gas used for a etheruem tx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ratio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("gauge")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_ethereum_tx_incentives_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of txs with an incentivized contract processed via the EVM")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("tx")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("tx_msg_ethereum_tx_incentives_gas_used_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of gas used by txs with an incentivized contract processed via the EVM")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("incentives_distribute_participant_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total number of participants who received rewards")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("participant")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("incentives_distribute_reward_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of rewards that are distributed to all incentives' participants")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("inflation_allocate_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of tokens allocated through inflation")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("inflation_allocate_staking_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of tokens allocated through inflation to staking")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("inflation_allocate_incentives_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of tokens allocated through inflation to incentives")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("inflation_allocate_community_pool_total")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Total amount of tokens allocated through inflation to community pool")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("token")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("counter")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);
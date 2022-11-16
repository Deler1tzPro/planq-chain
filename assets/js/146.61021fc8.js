(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{587:function(e,t,o){"use strict";o.r(t);var i=o(1),r=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"proposal-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal-process"}},[e._v("#")]),e._v(" Proposal Process")]),e._v(" "),t("h2",{attrs:{id:"deposit-period"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deposit-period"}},[e._v("#")]),e._v(" Deposit Period")]),e._v(" "),t("p",[e._v("The deposit period lasts either 3 days or until the proposal deposit totals 192 PLANQ, whichever happens first.")]),e._v(" "),t("h3",{attrs:{id:"deposits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deposits"}},[e._v("#")]),e._v(" Deposits")]),e._v(" "),t("p",[e._v("Deposit amounts are at risk of being burned. Prior to a governance proposal entering the voting period (ie. for the proposal to be voted upon), there must be at least a minimum number of PLANQ deposited (192). Anyone may contribute to this deposit. Deposits of passed and failed proposals are returned to the contributors.")]),e._v(" "),t("p",[e._v("In the past, different people have considered contributions amounts differently. There is some consensus that this should be a personal choice. There is also some consensus that this can be an opportunity for supporters to signal their support by adding to the deposit amount, so a proposer may choose to leave contribution room (ie. a deposit below 192 PLANQ) so that others may participate. It is important to remember that any contributed PLANQ are at risk of being burned.")]),e._v(" "),t("h3",{attrs:{id:"burned-deposits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#burned-deposits"}},[e._v("#")]),e._v(" Burned deposits")]),e._v(" "),t("p",[e._v("Deposits are burned when proposals:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Expire")]),e._v(" - deposits will be burned if the deposit period ends before reaching the minimum deposit (192 PLANQ)")]),e._v(" "),t("li",[t("strong",[e._v("Fail to reach quorum")]),e._v(" - deposits will be burned for proposals that do not reach quorum ie. 33.4% of all staked PLANQ must vote")]),e._v(" "),t("li",[t("strong",[e._v("Are vetoed")]),e._v(" - deposits for proposals with 33.4% of voting power backing the "),t("code",[e._v("NoWithVeto")]),e._v(" option are also burned")])]),e._v(" "),t("h2",{attrs:{id:"voting-period"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voting-period"}},[e._v("#")]),e._v(" Voting Period")]),e._v(" "),t("p",[e._v("The voting period is currently a fixed 5-day period. During the voting period, participants may select a vote of either "),t("code",[e._v("Yes")]),e._v(", "),t("code",[e._v("No")]),e._v(", "),t("code",[e._v("Abstain")]),e._v(", or "),t("code",[e._v("NoWithVeto")]),e._v(". Voters may change their vote at any time before the voting period ends.")]),e._v(" "),t("h2",{attrs:{id:"what-do-the-voting-options-mean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-do-the-voting-options-mean"}},[e._v("#")]),e._v(" What do the voting options mean?")]),e._v(" "),t("ol",[t("li",[t("strong",[t("code",[e._v("Abstain")])]),e._v(": indicates that the voter is impartial to the outcome of the proposal.")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("Yes")])]),e._v(": indicates approval of the proposal in its current form.")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("No")])]),e._v(": indicates disapproval of the proposal in its current form.")]),e._v(" "),t("li",[t("strong",[t("code",[e._v("NoWithVeto")])]),e._v(": indicates stronger opposition to the proposal than simply voting "),t("code",[e._v("No")]),e._v(". If the number of "),t("code",[e._v("NoWithVeto")]),e._v(" votes is greater than a third of total votes excluding "),t("code",[e._v("Abstain")]),e._v(" votes, the proposal is rejected and the deposits are "),t("a",{attrs:{href:"#burned-deposits"}},[e._v("burned")]),e._v(".")])]),e._v(" "),t("p",[e._v("As accepted by the community in "),t("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 6"),t("OutboundLink")],1),e._v(", voters are expected to vote "),t("code",[e._v("NoWithVeto")]),e._v(" if a proposal leads to undesirable outcomes for the community. It states “if a proposal seems to be spam or is deemed to have caused a negative externality to Cosmos community, voters should vote "),t("code",[e._v("NoWithVeto")]),e._v(".”")]),e._v(" "),t("p",[e._v("Voting "),t("code",[e._v("NoWithVeto")]),e._v(" provides a mechanism for a minority group representing a "),t("em",[e._v("third")]),e._v(" of the participating voting power to reject a proposal that would otherwise pass. This makes explicit an aspect of the consensus protocol: it works as long as only up to "),t("a",{attrs:{href:"https://docs.tendermint.com/v0.35/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("a third of nodes fail"),t("OutboundLink")],1),e._v(". In other words, greater than a third of validators are always in a position to cause a proposal to fail outside the formalized governance process and the network's norms, such as by censoring transactions. The purpose of internalizing this aspect of the consensus protocol into the governance process is to discourage validators from relying on collusion and censorship tactics to influence voting outcomes.")]),e._v(" "),t("h2",{attrs:{id:"what-determines-whether-or-not-a-governance-proposal-passes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-determines-whether-or-not-a-governance-proposal-passes"}},[e._v("#")]),e._v(" What determines whether or not a governance proposal passes?")]),e._v(" "),t("p",[e._v("There are four criteria:")]),e._v(" "),t("ol",[t("li",[e._v("A minimum deposit of 192 PLANQ is required for the proposal to enter the voting period\n"),t("ul",[t("li",[e._v("anyone may contribute to this deposit")]),e._v(" "),t("li",[e._v("the deposit must be reached within 3 days (this is the deposit period)")])])]),e._v(" "),t("li",[e._v("A minimum of 33.4% of the network's voting power (quorum) is required to participate to make the proposal valid")]),e._v(" "),t("li",[e._v("A simple majority (greater than 50%) of the participating voting power must back the "),t("code",[e._v("Yes")]),e._v(" vote during the 5-day voting period")]),e._v(" "),t("li",[e._v("Less than 33.4% of participating voting power votes "),t("code",[e._v("NoWithVeto")])])]),e._v(" "),t("p",[e._v("Currently, the criteria for submitting and passing/failing all proposal types is the same.")]),e._v(" "),t("h3",{attrs:{id:"how-is-voting-tallied"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-is-voting-tallied"}},[e._v("#")]),e._v(" How is voting tallied?")]),e._v(" "),t("p",[e._v("Voting power is determined by stake weight at the end of the 5-day voting period and is proportional to the number of total PLANQ participating in the vote. Only bonded PLANQ count towards the voting power for a governance proposal. Liquid PLANQ will not count toward a vote or quorum.")]),e._v(" "),t("p",[e._v("Inactive validators can cast a vote, but their voting power (including the backing of their delegators) will not count toward the vote if they are not in the active set when the voting period ends. That means that if I delegate to a validator that is either jailed, tombstoned, or ranked lower than 150 in stake-backing at the time that the voting period ends, my stake-weight will not count in the vote.")]),e._v(" "),t("p",[e._v("Though a simple majority "),t("code",[e._v("Yes")]),e._v(" vote (ie. 50% of participating voting power) is required for a governance proposal vote to pass, a "),t("code",[e._v("NoWithVeto")]),e._v(" vote of 33.4% of participating voting power or greater can override this outcome and cause the proposal to fail. This enables a minority group representing greater than 1/3 of voting power to fail a proposal that would otherwise pass.")]),e._v(" "),t("h3",{attrs:{id:"how-is-quorum-determined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-is-quorum-determined"}},[e._v("#")]),e._v(" How is quorum determined?")]),e._v(" "),t("p",[e._v("Voting power, whether backing a vote of "),t("code",[e._v("Yes")]),e._v(", "),t("code",[e._v("Abstain")]),e._v(", "),t("code",[e._v("No")]),e._v(", or "),t("code",[e._v("NoWithVeto")]),e._v(", counts toward quorum. Quorum is required for the outcome of a governance proposal vote to be considered valid and for deposit contributors to recover their deposit amounts. If the proposal vote does not reach quorum (ie. less than 33.4% of the network's voting power is participating) within 5 days, any deposit amounts will be burned and the proposal outcome will not be considered to be valid.")])])}),[],!1,null,null,null);t.default=r.exports}}]);
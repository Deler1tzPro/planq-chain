(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{656:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[e._v("#")]),e._v(" "),t("code",[e._v("upgrade")])]),e._v(" "),t("h2",{attrs:{id:"abstract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),t("p",[t("code",[e._v("x/upgrade")]),e._v(" is an implementation of a Cosmos SDK module that facilitates smoothly\nupgrading a live Cosmos chain to a new (breaking) software version. It accomplishes this by\nproviding a "),t("code",[e._v("BeginBlocker")]),e._v(" hook that prevents the blockchain state machine from\nproceeding once a pre-defined upgrade block height has been reached.")]),e._v(" "),t("p",[e._v("The module does not prescribe anything regarding how governance decides to do an\nupgrade, but just the mechanism for coordinating the upgrade safely. Without software\nsupport for upgrades, upgrading a live chain is risky because all of the validators\nneed to pause their state machines at exactly the same point in the process. If\nthis is not done correctly, there can be state inconsistencies which are hard to\nrecover from.")]),e._v(" "),t("ol",[t("li",[t("strong",[t("RouterLink",{attrs:{to:"/modules/upgrade/01_concepts.html"}},[e._v("Concepts")])],1)]),e._v(" "),t("li",[t("strong",[t("RouterLink",{attrs:{to:"/modules/upgrade/02_state.html"}},[e._v("State")])],1)]),e._v(" "),t("li",[t("strong",[t("RouterLink",{attrs:{to:"/modules/upgrade/03_events.html"}},[e._v("Events")])],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);
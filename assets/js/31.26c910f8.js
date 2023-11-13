(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{458:function(e,t,a){e.exports=a.p+"assets/img/kms_tm_ledger_01.c82fa13e.jpg"},459:function(e,t,a){e.exports=a.p+"assets/img/kms_tm_ledger_02.66681d16.jpg"},686:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tendermint-kms-ledger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-kms-ledger"}},[e._v("#")]),e._v(" Tendermint KMS + Ledger")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Set up Tendermint KMS with the Tendermint Ledger app")]),e._v(" "),t("h2",{attrs:{id:"pre-requisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-requisites")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("a",{attrs:{href:"https://shop.ledger.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ledger device"),t("OutboundLink")],1)]),e._v(" "),t("li",{attrs:{prereq:""}},[t("a",{attrs:{href:"https://www.ledger.com/ledger-live",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Ledger Live"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"checklist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checklist"}},[e._v("#")]),e._v(" Checklist")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("🚧  The following instructions are a brief walkthrough and not a comprehensive guideline. You should consider and research more about the "),t("RouterLink",{attrs:{to:"/validators/security/security.html"}},[e._v("security implications")]),e._v(" of activating an external KMS.")],1)]),e._v(" "),t("ul",[t("li",[e._v("✅ Ledger "),t("a",{attrs:{href:"https://shop.ledger.com/pages/ledger-nano-x",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nano X"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://shop.ledger.com/products/ledger-nano-s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nano S"),t("OutboundLink")],1),e._v(" device (compare "),t("a",{attrs:{href:"https://shop.ledger.com/pages/hardware-wallets-comparison",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("li",[e._v("✅ "),t("a",{attrs:{href:"https://www.ledger.com/ledger-live",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ledger Live"),t("OutboundLink")],1),e._v(" installed")]),e._v(" "),t("li",[e._v("✅ Tendermint app installed (only in "),t("code",[e._v("Developer Mode")]),e._v(")")]),e._v(" "),t("li",[e._v("✅ Latest Versions (Firmware and Tendermint app)")])]),e._v(" "),t("h2",{attrs:{id:"tendermint-validator-app-for-ledger-devices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-validator-app-for-ledger-devices"}},[e._v("#")]),e._v(" Tendermint Validator app (for Ledger devices)")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[e._v("🚨"),t("strong",[e._v("IMPORTANT")]),e._v(": KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use under "),t("strong",[e._v("your own risk")])])]),e._v(" "),t("p",[e._v("You should be able to find the Tendermint app in Ledger Live.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("You will need to enable "),t("code",[e._v("Developer Mode")]),e._v(" in Ledger Live "),t("code",[e._v("Settings")]),e._v(" in order to find the app.")])]),e._v(" "),t("h2",{attrs:{id:"kms-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kms-configuration"}},[e._v("#")]),e._v(" KMS configuration")]),e._v(" "),t("p",[e._v("In this section, we will configure a KMS to use a Ledger device running the Tendermint Validator App.")]),e._v(" "),t("h3",{attrs:{id:"config-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[e._v("#")]),e._v(" Config file")]),e._v(" "),t("p",[e._v("You can find other configuration examples "),t("a",{attrs:{href:"https://github.com/iqlusioninc/tmkms/blob/master/tmkms.toml.example",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Create a "),t("code",[e._v("~/.tmkms/tmkms.toml")]),e._v(" file with the following content (use an adequate "),t("code",[e._v("chain_id")]),e._v(")")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBFeGFtcGxlIEtNUyBjb25maWd1cmF0aW9uIGZpbGUKW1t2YWxpZGF0b3JdXQphZGRyID0gJnF1b3Q7dGNwOi8vbG9jYWxob3N0OjI2NjU4JnF1b3Q7ICAgICAgICAgICAgICAgICAgIyBvciAmcXVvdDt1bml4Oi8vL3BhdGgvdG8vc29ja2V0JnF1b3Q7CmNoYWluX2lkID0gJnF1b3Q7cGxhbnFfNzA3MC0yJnF1b3Q7CnJlY29ubmVjdCA9IHRydWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgdHJ1ZSBpcyB0aGUgZGVmYXVsdApzZWNyZXRfa2V5ID0gJnF1b3Q7fi8udG1rbXMvc2VjcmV0X2Nvbm5lY3Rpb24ua2V5JnF1b3Q7CgpbW3Byb3ZpZGVycy5sZWRnZXJdXQpjaGFpbl9pZHMgPSBbJnF1b3Q7cGxhbnFfNzA3MC0yJnF1b3Q7XQo="}})],1),e._v(" "),t("li",[t("p",[e._v("Edit "),t("code",[e._v("addr")]),e._v(" to point to your "),t("code",[e._v("planqd")]),e._v(" instance.")])]),e._v(" "),t("li",[t("p",[e._v("Adjust "),t("code",[e._v("chain-id")]),e._v(" to match your "),t("code",[e._v(".planqd/config/config.toml")]),e._v(" settings.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("provider.ledger")]),e._v(" has not additional parameters at the moment, however, it is important that you keep that header to enable the feature.")])])]),e._v(" "),t("p",[t("em",[e._v("Plug your Ledger device and open the Tendermint validator app.")])]),e._v(" "),t("h3",{attrs:{id:"generate-secret-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-secret-key"}},[e._v("#")]),e._v(" Generate secret key")]),e._v(" "),t("p",[e._v("Now you need to generate a "),t("code",[e._v("secret_key")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dG1rbXMga2V5Z2VuIH4vLnRta21zL3NlY3JldF9jb25uZWN0aW9uLmtleQo="}}),e._v(" "),t("h3",{attrs:{id:"retrieve-validator-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-validator-key"}},[e._v("#")]),e._v(" Retrieve validator key")]),e._v(" "),t("p",[e._v("The last step is to retrieve the validator key that you will use in "),t("code",[e._v("planqd")]),e._v(".")]),e._v(" "),t("p",[e._v("Start the KMS:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dG1rbXMgc3RhcnQgLWMgfi8udG1rbXMvdG1rbXMudG9tbAo="}}),e._v(" "),t("p",[e._v("The output should look similar to:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"MDc6Mjg6MjQgW0lORk9dIHRta21zIDAuMTEuMCBzdGFydGluZyB1cC4uLgowNzoyODoyNCBbSU5GT10gW2tleXJpbmc6bGVkZ2VyOmxlZGdlcl0gYWRkZWQgdmFsaWRhdG9yIGtleSBwbHF2YWxjb25zcHViMXpjamR1ZXBxeTUzbTM5cHJncDlkejNuejk2a2FhdjNlbDVlMHRoOGx0d2NmOGNwYXZxZHZweGdyNXNsc2Q2d3o2ZgowNzoyODoyNCBbSU5GT10gS01TIG5vZGUgSUQ6IDFCQzEyMzE0RTJFMUMyOTAxNUI2NjAxN0EzOTdGMTcwQzZFQ0RFNEEK"}}),e._v(" "),t("p",[e._v("The KMS may complain that it cannot connect to "),t("code",[e._v("planqd")]),e._v(". That is fine, we will fix it in the next section.\nThis output indicates the validator key linked to this particular device is: "),t("code",[e._v("plqvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f")]),e._v("\nTake note of the validator pubkey that appears in your screen. "),t("em",[e._v("We will use it in the next section.")])]),e._v(" "),t("h2",{attrs:{id:"planq-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planq-configuration"}},[e._v("#")]),e._v(" Planq configuration")]),e._v(" "),t("p",[e._v("You need to enable KMS access by editing "),t("code",[e._v(".planqd/config/config.toml")]),e._v(". In this file, modify "),t("code",[e._v("priv_validator_laddr")]),e._v(" to create a listening address/port or a unix socket in "),t("code",[e._v("planqd")]),e._v(".")]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"Li4uCiMgVENQIG9yIFVOSVggc29ja2V0IGFkZHJlc3MgZm9yIFRlbmRlcm1pbnQgdG8gbGlzdGVuIG9uIGZvcgojIGNvbm5lY3Rpb25zIGZyb20gYW4gZXh0ZXJuYWwgUHJpdlZhbGlkYXRvciBwcm9jZXNzCnByaXZfdmFsaWRhdG9yX2xhZGRyID0gJnF1b3Q7dGNwOi8vMTI3LjAuMC4xOjI2NjU4JnF1b3Q7Ci4uLgo="}}),e._v(" "),t("p",[e._v("Let's assume that you have set up your validator account and called it "),t("code",[e._v("kmsval")]),e._v(". You can tell planqd the key that we've got in the previous section.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGdlbnR4IC0tbmFtZSBrbXN2YWwgLS1wdWJrZXkgJmx0O3B1Yl9rZXkmZ3Q7Cg=="}}),e._v(" "),t("p",[e._v("Now start "),t("code",[e._v("planqd")]),e._v(". You should see that the KMS connects and receives a signature request.")]),e._v(" "),t("p",[e._v("Once the Ledger device receives the first message, it will ask for confirmation that the values are adequate.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(458),alt:'Tendermint Ledger app "Init Validation"'}})]),e._v(" "),t("p",[e._v("Click the right button, if the height and round are correct.")]),e._v(" "),t("p",[e._v("After that, you will see that the KMS will start forwarding all signature requests to the Ledger app:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(459),alt:'Tendermint Ledger app "Proposal"'}})]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("The word "),t("code",[e._v("TEST")]),e._v(" in the second picture, second line appears because they were taken on a pre-release version.\nOnce the app as been released in Ledger's app store, this word should NOT appear.")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{520:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"updating-the-docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-docs"}},[e._v("#")]),e._v(" Updating the docs")]),e._v(" "),t("p",[e._v("If you want to open a PR on the Cosmos SDK to update the documentation, please follow the guidelines in the "),t("a",{attrs:{href:"https://github.com/planq-network/planq/tree/main/CONTRIBUTING.md#updating-documentation",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("CONTRIBUTING.md")]),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"translating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#translating"}},[e._v("#")]),e._v(" Translating")]),e._v(" "),t("ul",[t("li",[e._v("Docs translations live in a "),t("code",[e._v("docs/country-code/")]),e._v(" folder, where "),t("code",[e._v("country-code")]),e._v(" stands for the country code of the language used ("),t("code",[e._v("cn")]),e._v(" for Chinese, "),t("code",[e._v("kr")]),e._v(" for Korea, "),t("code",[e._v("fr")]),e._v(" for France, ...).")]),e._v(" "),t("li",[e._v("Always translate content living on "),t("code",[e._v("main")]),e._v(".")]),e._v(" "),t("li",[e._v("Only content under "),t("code",[e._v("/docs/intro/")]),e._v(", "),t("code",[e._v("/docs/basics/")]),e._v(", "),t("code",[e._v("/docs/core/")]),e._v(", "),t("code",[e._v("/docs/building-modules/")]),e._v(" and "),t("code",[e._v("docs/interfaces")]),e._v(" needs to be translated, as well as "),t("code",[e._v("docs/README.md")]),e._v(". It is also nice (but not mandatory) to translate "),t("code",[e._v("/docs/spec/")]),e._v(".")]),e._v(" "),t("li",[e._v("Specify the release/tag of the translation in the README of your translation folder. Update the release/tag each time you update the translation.")])]),e._v(" "),t("h2",{attrs:{id:"docs-build-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs-build-workflow"}},[e._v("#")]),e._v(" Docs Build Workflow")]),e._v(" "),t("p",[e._v("The documentation for Planq is hosted at "),t("a",{attrs:{href:"https://docs.planq.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs.planq.network"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("built from the files in this ("),t("code",[e._v("/docs")]),e._v(") directory for\n"),t("a",{attrs:{href:"https://github.com/planq-network/planq/tree/main/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"how-it-works"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How It Works")]),e._v(" "),t("p",[e._v("There is a CircleCI job listening for changes in the "),t("code",[e._v("/docs")]),e._v(" directory, on\nthe "),t("code",[e._v("main")]),e._v(" branch. Any updates to files in this directory\non that branch will automatically trigger a website deployment. Under the hood,\nthe private website repository has a "),t("code",[e._v("make build-docs")]),e._v(" target consumed by a CircleCI job in that repo.")]),e._v(" "),t("h2",{attrs:{id:"readme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[e._v("#")]),e._v(" README")]),e._v(" "),t("p",[e._v("The "),t("RouterLink",{attrs:{to:"/"}},[e._v("README.md")]),e._v(" is also the landing page for the documentation\non the website. During the Jenkins build, the current commit is added to the bottom\nof the README.")],1),e._v(" "),t("h2",{attrs:{id:"config-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-js"}},[e._v("#")]),e._v(" Config.js")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"./.vuepress/config.js"}},[e._v("config.js")]),e._v(" generates the sidebar and Table of Contents\non the website docs. Note the use of relative links and the omission of\nfile extensions. Additional features are available to improve the look\nof the sidebar.")]),e._v(" "),t("h2",{attrs:{id:"links"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),t("p",[t("strong",[e._v("NOTE:")]),e._v(" Strongly consider the existing links - both within this directory\nand to the website docs - when moving or deleting files.")]),e._v(" "),t("p",[e._v("Relative links should be used nearly everywhere, having discovered and weighed the following:")]),e._v(" "),t("h3",{attrs:{id:"relative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relative"}},[e._v("#")]),e._v(" Relative")]),e._v(" "),t("p",[e._v("Where is the other file, relative to the current one?")]),e._v(" "),t("ul",[t("li",[e._v("works both on GitHub and for the VuePress build")]),e._v(" "),t("li",[e._v("confusing / annoying to have things like: "),t("code",[e._v("../../../../myfile.md")])]),e._v(" "),t("li",[e._v("requires more updates when files are re-shuffled")])]),e._v(" "),t("h3",{attrs:{id:"absolute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#absolute"}},[e._v("#")]),e._v(" Absolute")]),e._v(" "),t("p",[e._v("Where is the other file, given the root of the repo?")]),e._v(" "),t("ul",[t("li",[e._v("works on GitHub, doesn't work for the VuePress build")]),e._v(" "),t("li",[e._v("this is much nicer: "),t("code",[e._v("/docs/hereitis/myfile.md")])]),e._v(" "),t("li",[e._v("if you move that file around, the links inside it are preserved (but not to it, of course)")])]),e._v(" "),t("h3",{attrs:{id:"full"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full"}},[e._v("#")]),e._v(" Full")]),e._v(" "),t("p",[e._v("The full GitHub URL to a file or directory. Used occasionally when it makes sense\nto send users to the GitHub.")]),e._v(" "),t("h2",{attrs:{id:"building-locally"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-locally"}},[e._v("#")]),e._v(" Building Locally")]),e._v(" "),t("p",[e._v("Make sure you are in the "),t("code",[e._v("docs")]),e._v(" directory and run the following commands:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gLXJmIG5vZGVfbW9kdWxlcwo="}}),e._v(" "),t("p",[e._v("This command will remove old version of the visual theme and required packages. This step is optional.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"eWFybiBpbnN0YWxsCg=="}}),e._v(" "),t("p",[e._v("Install the theme and all dependencies.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"eWFybiBydW4gc2VydmUK"}}),e._v(" "),t("p",[e._v("Run "),t("code",[e._v("pre")]),e._v(" and "),t("code",[e._v("post")]),e._v(" hooks and start a hot-reloading web-server. See output of this command for the URL (it is often "),t("a",{attrs:{href:"https://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://localhost:8080"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("To build documentation as a static website run "),t("code",[e._v("yarn run build")]),e._v(". You will find the website in "),t("code",[e._v(".vuepress/dist")]),e._v(" directory.")]),e._v(" "),t("h2",{attrs:{id:"search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[e._v("#")]),e._v(" Search")]),e._v(" "),t("p",[e._v("We are using "),t("a",{attrs:{href:"https://www.algolia.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Algolia"),t("OutboundLink")],1),e._v(" to power full-text search. This uses a public API search-only key in the "),t("code",[e._v("config.js")]),e._v(" as well as a "),t("a",{attrs:{href:"https://github.com/algolia/docsearch-configs/blob/master/configs/cosmos-sdk.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos_network.json"),t("OutboundLink")],1),e._v(" configuration file that we can update with PRs.")]),e._v(" "),t("h3",{attrs:{id:"update-and-build-the-rpc-docs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-and-build-the-rpc-docs"}},[e._v("#")]),e._v(" Update and Build the RPC docs")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Execute the following command at the root directory to install the swagger-ui generate tool.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSB0b29scwo="}})],1),e._v(" "),t("li",[t("p",[e._v("Edit API docs")]),e._v(" "),t("ol",[t("li",[e._v("Directly Edit API docs manually: "),t("code",[e._v("client/lcd/swagger-ui/swagger.yaml")]),e._v(".")]),e._v(" "),t("li",[e._v("Edit API docs within the "),t("a",{attrs:{href:"https://editor.swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger Editor"),t("OutboundLink")],1),e._v(". Please refer to this "),t("a",{attrs:{href:"https://swagger.io/docs/specification/2-0/basic-structure/",target:"_blank",rel:"noopener noreferrer"}},[e._v("document"),t("OutboundLink")],1),e._v(" for the correct structure in "),t("code",[e._v(".yaml")]),e._v(".")])])]),e._v(" "),t("li",[t("p",[e._v("Download "),t("code",[e._v("swagger.yaml")]),e._v(" and replace the old "),t("code",[e._v("swagger.yaml")]),e._v(" under fold "),t("code",[e._v("client/lcd/swagger-ui")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Compile planqd")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBpbnN0YWxsCg=="}})],1)])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
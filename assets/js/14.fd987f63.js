(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{412:function(t,i,e){},463:function(t,i,e){"use strict";e(412)},484:function(t,i,e){"use strict";e.r(i);var s=e(12),a={data:function(){return{tocShow:!1}},computed:{breadcrumbs(){let t=this.$page.path.split("/").filter(t=>""!==t).map((t,i,e)=>"/"+e.slice(0,i+1).join("/")).map(t=>/\.html$/.test(t)?t:t+"/");return t=t.map(t=>{const i=Object(s.find)(this.$site.pages,i=>i.regularPath===t),e={title:Object(s.last)(t.split("/").filter(t=>""!==t)),path:""};return i||e}),t}},methods:{click(t){this.tocShow=!this.tocShow,window.innerWidth<832&&this.$emit("visible",!0)}}},n=(e(463),e(1)),c=Object(n.a)(a,(function(){var t=this,i=t._self._c;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"crumbs"},[i("router-link",{staticClass:"crumbs__item",attrs:{to:"/"}},[t._v(t._s(t.$site.title||"Home"))]),t._l(t.breadcrumbs,(function(e){return e.title?i("router-link",{staticClass:"crumbs__item",attrs:{to:e.path}},[t._v(t._s(e.title))]):t._e()}))],2),i("div",{staticClass:"menu"},[i("div",{staticClass:"menu__item",style:{visibility:t.$page.headers&&t.$page.headers.length>0?"visible":"hidden"}},[i("svg",{staticClass:"menu__item__icon",class:["menu__item__icon__active__"+t.tocShow],attrs:{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.click}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.25 2C0.25 1.58579 0.585786 1.25 1 1.25H6C6.41421 1.25 6.75 1.58579 6.75 2C6.75 2.41421 6.41421 2.75 6 2.75H1C0.585786 2.75 0.25 2.41421 0.25 2ZM17.53 22.7803L16.9997 22.25L17.53 22.7803L17.5301 22.7802L17.5305 22.7798L17.5322 22.7781L17.5388 22.7715L17.5647 22.7456L17.6647 22.6456L18.0367 22.2737L19.2978 21.0126L22.53 17.7803C22.8229 17.4874 22.8229 17.0126 22.53 16.7197C22.2371 16.4268 21.7622 16.4268 21.4693 16.7197L18.2371 19.9519L17.7497 20.4393V8.5C17.7497 6.34186 17.0721 4.51182 15.7802 3.21983C14.4882 1.92783 12.6581 1.25031 10.5 1.25031C10.0858 1.25031 9.75 1.5861 9.75 2.00031C9.75 2.41453 10.0858 2.75031 10.5 2.75031C12.3419 2.75031 13.7617 3.32264 14.7195 4.28049C15.6773 5.23834 16.2497 6.65814 16.2497 8.5L16.2497 20.4393L12.53 16.7197C12.2371 16.4268 11.7622 16.4268 11.4693 16.7197C11.1764 17.0126 11.1764 17.4874 11.4693 17.7803L16.4693 22.7803L16.9997 23.3107L17.53 22.7803ZM1 6.25C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75H10C10.4142 7.75 10.75 7.41421 10.75 7C10.75 6.58579 10.4142 6.25 10 6.25H1ZM0.25 12C0.25 11.5858 0.585786 11.25 1 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75H1C0.585786 12.75 0.25 12.4142 0.25 12ZM1 16.25C0.585786 16.25 0.25 16.5858 0.25 17C0.25 17.4142 0.585786 17.75 1 17.75H8C8.41421 17.75 8.75 17.4142 8.75 17C8.75 16.5858 8.41421 16.25 8 16.25H1Z"}})]),i("transition",{attrs:{name:"fade"}},[t.tocShow?i("div",{staticClass:"menu__item__modal"},[i("tm-toc-menu",{on:{toc:function(i){t.tocShow=!1}}})],1):t._e()])],1)])])])}),[],!1,null,"48fb2d7a",null);i.default=c.exports}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic/attachment"],{"0f79":function(t,e,n){"use strict";n.r(e);var a=n("7b0b"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},"47ed":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={quiPage:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page/qui-page")]).then(n.bind(null,"716f"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,1!==t.page?t.i18n.t("profile.previousPage"):null),a=t.page!==t.totalPage?t.i18n.t("profile.nextPage"):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:a}})},c=[]},"634e":function(t,e,n){},"7b0b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{src:"",page:1,totalPage:1}},onLoad:function(){this.preview()},methods:{preview:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this.$store.getters["session/get"]("attachment");this.$store.dispatch("jv/get",["attachments/".concat(n._jv.id).concat(n.url.slice(n.url.indexOf("?"),n.url.length),"&page=").concat(e),{}]).then((function(e){e&&e._jv&&(t.src=e._jv.image,t.totalPage=parseInt(e._jv["X-Total-Page"],10))})).catch((function(t){console.log(t)}))},previewPic:function(){t.previewImage({current:this.page,urls:this.src,indicator:"default"})},clickPreviousPage:function(){this.page-=1,this.preview(this.page)},clickNextPage:function(){this.page+=1,this.preview(this.page)}}};e.default=n}).call(this,n("543d")["default"])},9252:function(t,e,n){"use strict";n.r(e);var a=n("47ed"),i=n("0f79");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("9d7a");var o,u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"ed269ad8",null,!1,a["a"],o);e["default"]=r.exports},"9d7a":function(t,e,n){"use strict";var a=n("634e"),i=n.n(a);i.a},c890:function(t,e,n){"use strict";(function(t){n("1583");a(n("66fd"));var e=a(n("9252"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["c890","common/runtime","common/vendor"]]]);
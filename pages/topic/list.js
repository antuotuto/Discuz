(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/topic/list"],{"37ff":function(t,n,o){"use strict";o.r(n);var e=o("3b09"),i=o("ddd3");for(var c in i)"default"!==c&&function(t){o.d(n,t,(function(){return i[t]}))}(c);o("686e");var r,u=o("f0c5"),a=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"81e66ee6",null,!1,e["a"],r);n["default"]=a.exports},"3b09":function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return c})),o.d(n,"a",(function(){return e}));var e={quiPage:function(){return Promise.all([o.e("common/vendor"),o.e("components/qui-page/qui-page")]).then(o.bind(null,"716f"))},quiIcon:function(){return o.e("components/qui-icon/qui-icon").then(o.bind(null,"708e"))},quiUparse:function(){return Promise.all([o.e("common/vendor"),o.e("components/qui-uparse/qui-uparse")]).then(o.bind(null,"edca"))},quiImage:function(){return o.e("components/qui-image/qui-image").then(o.bind(null,"f70e"))},quiLoadMore:function(){return o.e("components/qui-load-more/qui-load-more").then(o.bind(null,"9799"))}},i=function(){var t=this,n=t.$createElement,o=(t._self._c,t.i18n.t("topic.searchTopic")),e=t.i18n.t("topic.topicList"),i=t.i18n.t("core.sort"),c=t.i18n.t("topic.hot"),r=t.i18n.t("topic.contents"),u=t.i18n.t("topic.hot"),a=t.i18n.t("core.content"),s=t.__map(t.topicData,(function(n,o){var e=t.__get_orig(n),i=n.view_count>1e4?Number(n.view_count/1e4):null,c=n.view_count>1e4?t.i18n.t("core.thousand"):null,r=n.thread_count>1e3?Number(n.thread_count/1e3):null;return{$orig:e,m0:i,g6:c,m1:r}}));t.$mp.data=Object.assign({},{$root:{g0:o,g1:e,g2:i,g3:c,g4:r,g5:u,g7:a,l0:s}})},c=[]},"686e":function(t,n,o){"use strict";var e=o("7e5c"),i=o.n(e);i.a},"7e5c":function(t,n,o){},"89ea":function(t,n,o){"use strict";(function(t){o("1583");e(o("66fd"));var n=e(o("37ff"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},b979:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=null,e=1,i={data:function(){return{dropDownShow:!1,topicData:[],meta:{},contentText:{contentdown:this.i18n.t("topic.noMoreData")},keyword:"",sort:"recommended",scrollTop:0,types:1}},methods:{toggleDropDown:function(){this.dropDownShow=!this.dropDownShow},searchInput:function(){var t=this;this.keyword?this.types="":this.types=1,clearTimeout(o),o=setTimeout((function(){t.topics()}),300)},switchSort:function(t){e=1,this.sort=t,this.topics()},topics:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,e={include:"user,lastThread,lastThread.firstPost,lastThread.firstPost.images","page[number]":n,"page[limit]":o,sort:this.sort};return this.keyword&&(e["filter[content]"]=this.keyword),this.$store.dispatch("jv/get",["topics",{params:e}]).then((function(o){t.meta=o._jv.json.links,t.topicData=n>1?t.topicData.concat(o):o,t.meta.next?t.contentText.contentdown=t.i18n.t("core.loadMore"):t.meta.last&&t.meta.first?t.contentText.contentdown=t.i18n.t("core.noMoreData"):t.contentText.contentdown=t.i18n.t("core.available")}))}},onLoad:function(){this.topics()},onPullDownRefresh:function(){var n=this;n.topicData=[],setTimeout((function(){n.topics(),t.stopPullDownRefresh()}),1e3)},onReachBottom:function(){(this.meta.next||this.meta.prev)&&this.topics(e+=1)},onPageScroll:function(t){this.scrollTop=t.scrollTop},onUnload:function(){e=1}};n.default=i}).call(this,o("543d")["default"])},ddd3:function(t,n,o){"use strict";o.r(n);var e=o("b979"),i=o.n(e);for(var c in e)"default"!==c&&function(t){o.d(n,t,(function(){return e[t]}))}(c);n["default"]=i.a}},[["89ea","common/runtime","common/vendor"]]]);
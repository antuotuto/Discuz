(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/favorite"],{"50f8":function(t,e,n){"use strict";var i=n("5aac"),o=n.n(i);o.a},"5aac":function(t,e,n){},"64b6":function(t,e,n){"use strict";n.r(e);var i=n("66df"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"66df":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("c798"),o=r(n("04de"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return d(t)||c(t)||s(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function d(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f=function(){n.e("components/uni-popup/uni-popup-dialog").then(function(){return resolve(n("389f"))}.bind(null,n)).catch(n.oe)},p={components:{uniPopupDialog:f},mixins:o.default,props:{userId:{type:String,default:""}},data:function(){return{loadingType:"",data:[],query:{},totalData:0,pageSize:20,pageNum:1,currentItem:"",editThreadId:"",nowThreadId:""}},mounted:function(){this.loadlikes()},onLoad:function(){wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]})},onShow:function(){this.uploadItem()},onShareAppMessage:function(t){if("button"===t.from){var e=this.$store.getters["jv/get"]("/threads/".concat(this.nowThreadId));return{title:1===e.type?e.title:e.firstPost.summaryText,path:"/topic/index?id=".concat(this.nowThreadId)}}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},methods:{toTopic:function(t){this.editThreadId=t},handleClickShare:function(t){this.nowThreadId=t},loadlikes:function(){var t=this;this.loadingType="loading";var e={include:["user","firstPost","user.groups","lastThreePosts","lastThreePosts.user","firstPost.likedUsers","rewardedUsers","lastThreePosts.replyUser","firstPost.images","firstPost.postGoods","category","threadVideo","threadAudio","question","question.beUser","question.beUser.groups"],"filter[isApproved]":1,"page[number]":this.pageNum,"page[limit]":this.pageSize};i.status.run((function(){return t.$store.dispatch("jv/get",["favorites",{params:e}])})).then((function(e){e._jv&&(t.totalData=e._jv.json.meta.threadCount,delete e._jv),t.loadingType=e.length===t.pageSize?"more":"nomore",t.data=[].concat(a(t.data),a(e))}))},handleCancel:function(){this.$refs.popTips.close()},handleOk:function(){var t=this;this.$refs.popTips.close();var e=this.currentItem,n={_jv:{type:"threads",id:e.id},isFavorite:!0!==e.isFavorite};this.$store.dispatch("jv/patch",n).then((function(){t.totalData-=1,t.data.splice(e.index,1)}))},itemDelete:function(t,e,n){var i={id:t,isFavorite:e,index:n};this.currentItem=i,this.$refs.popTips.open()},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.loadlikes())},uploadItem:function(){var t=this;if(this.editThreadId){var e=this.$store.getters["jv/get"]("threads/".concat(this.editThreadId));this.data.forEach((function(n,i){n._jv.id===t.editThreadId&&(t.editThreadId="",t.$set(t.data,i,e))}))}}}};e.default=p},b862:function(t,e,n){"use strict";(function(t){n("1583");i(n("66fd"));var e=i(n("cd5c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cc2a:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={quiPage:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page/qui-page")]).then(n.bind(null,"716f"))},quiCellItem:function(){return n.e("components/qui-cell-item/qui-cell-item").then(n.bind(null,"328d"))},quiThreadItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-thread-item/qui-thread-item")]).then(n.bind(null,"1723"))},quiIcon:function(){return n.e("components/qui-icon/qui-icon").then(n.bind(null,"708e"))},quiLoadMore:function(){return n.e("components/qui-load-more/qui-load-more").then(n.bind(null,"9799"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"a5b1"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.i18n.t("profile.item")),i=t.i18n.t("profile.collection"),o=t.i18n.t("core.deleteFavoriteSure");t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:o}})},r=[]},cd5c:function(t,e,n){"use strict";n.r(e);var i=n("cc2a"),o=n("64b6");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("50f8");var a,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"270f7be2",null,!1,i["a"],a);e["default"]=s.exports}},[["b862","common/runtime","common/vendor"]]]);
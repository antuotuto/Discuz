(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index"],{"27b0":function(e,t,i){"use strict";var n=i("4770"),o=i.n(n);o.a},"3ff8":function(e,t,i){"use strict";(function(e){i("1583");n(i("66fd"));var t=n(i("ce7d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},4770:function(e,t,i){},c7ad:function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={quiPage:function(){return Promise.all([i.e("common/vendor"),i.e("components/qui-page/qui-page")]).then(i.bind(null,"716f"))},quiFooter:function(){return i.e("components/qui-footer/qui-footer").then(i.bind(null,"18e4"))},quiPageHome:function(){return Promise.all([i.e("common/vendor"),i.e("components/qui-page-home/qui-page-home")]).then(i.bind(null,"79ef"))},quiPageFind:function(){return i.e("components/qui-page-find/qui-page-find").then(i.bind(null,"58b6"))},quiPageNotice:function(){return Promise.all([i.e("common/vendor"),i.e("components/qui-page-notice/qui-page-notice")]).then(i.bind(null,"4100"))},quiPageMy:function(){return Promise.all([i.e("common/vendor"),i.e("components/qui-page-my/qui-page-my")]).then(i.bind(null,"9dd1"))},uniPopup:function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"a5b1"))},quiAuth:function(){return Promise.all([i.e("common/vendor"),i.e("components/qui-auth/qui-auth")]).then(i.bind(null,"7a31"))}},o=function(){var e=this,t=e.$createElement,i=(e._self._c,e.detectionModel());e.$mp.data=Object.assign({},{$root:{m0:i}})},r=[]},cb5f:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("04de")),o=a(i("72b9")),r=i("2f62"),s=a(i("281b")),u=a(i("13a0"));function a(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){h(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d={mixins:[n.default,o.default,s.default,u.default],data:function(){return{nowThreadId:0,showHome:!1,tagId:0,categoryId:"",currentTab:"home",footerBarHeight:50}},computed:c(c({},(0,r.mapState)({forumError:function(e){return e.forum.error},footerIndex:function(e){return e.footerTab.footerIndex?parseInt(e.footerTab.footerIndex,10):0}})),{},{loading:function(){return this.forumError.loading},show_index:{get:function(){var e=this.$store.state.footerTab.footerIndex;return e},set:function(t){if(this.forums.set_site){var i=["".concat(this.forums.set_site.site_name," - ").concat(this.forums.set_site.site_title),this.i18n.t("home.find"),this.i18n.t("notice.notice"),this.i18n.t("profile.mine")];e.setNavigationBarTitle({title:i[t]})}}}}),mounted:function(){var t,i,n,o,r,s;this.footerBarHeight!==((null===(t=this.$refs["footer-bar"])||void 0===t||null===(i=t.$el)||void 0===i||null===(n=i.firstChild)||void 0===n?void 0:n.offsetHeight)||50)&&(this.footerBarHeight=(null===(o=this.$refs["footer-bar"])||void 0===o||null===(r=o.$el)||void 0===r||null===(s=r.firstChild)||void 0===s?void 0:s.offsetHeight)||50,this.footerBarHeight=this.footerBarHeight?this.footerBarHeight:50);!this.$store.getters["session/get"]("isLogin")&&this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(e.setStorageSync("isSend",!0),e.setStorageSync("register",1),this.$refs.auth.open())},onLoad:function(t){var i=this;this.categoryId=t.categoryId,wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),this.loading||this.showHome||this.handlePageLoaded(),e.$on("notiRead",(function(){i.getUserInfo(!0)}))},onPullDownRefresh:function(){0===this.show_index&&(this.$refs.home.threads=[],this.$refs.home.isResetList=!0,this.$refs.home.pageNum=1,this.$refs.home.loadThreadsSticky(),this.$refs.home.loadThreads()),1===this.show_index&&(this.$refs.quinotice.dialogList=[],this.$refs.quinotice.pageNum=1,this.$refs.quinotice.ontrueGetList()),2===this.show_index&&this.$refs.quimy.refreshNum(),setTimeout((function(){e.stopPullDownRefresh()}),0)},onPageScroll:function(e){this.$refs.home.scroll(e)},onReachBottom:function(){this.$refs.home.pullDown()},onShareAppMessage:function(e){if("button"===e.from&&"top"!==e.target.id){var t=this.$store.getters["jv/get"]("/threads/".concat(this.nowThreadId));return{title:1===t.type?t.title:t.firstPost.summaryText,path:"/topic/index?id=".concat(this.nowThreadId)}}return{title:this.forums.set_site.site_name}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},onShow:function(){var t=this;if(this.$refs.quiPage&&this.$store.dispatch("session/setAuth",this.$refs.quiPage.$refs.auth),(this.$store.getters["session/get"]("isLogin")||!(["quifind","quinotice","quimy"].indexOf(this.currentTab)>=0))&&("quinotice"===this.currentTab&&this.$refs[this.currentTab]&&this.$nextTick((function(){t.$refs[t.currentTab].getUnreadNoticeNum()})),"quimy"===this.currentTab&&this.$refs[this.currentTab]&&this.$nextTick((function(){t.$refs[t.currentTab].refreshNum()})),this.forums.set_site)){var i=["".concat(this.forums.set_site.site_name," - ").concat(this.forums.set_site.site_title),this.i18n.t("home.find"),this.i18n.t("notice.notice"),this.i18n.t("profile.mine")];e.setNavigationBarTitle({title:i[this.show_index]})}},methods:c(c({},(0,r.mapMutations)({setFooterIndex:"footerTab/SET_FOOTERINDEX"})),{},{restoreScrollPosition:function(){var e,t=window.sessionStorage.getItem("virtual_scroll_top");t&&(null===(e=this.$refs.home)||void 0===e?void 0:e.setScrollerTop)&&this.$refs.home.setScrollerTop(t)},close:function(){this.$refs.auth.close()},login:function(){this.$refs.auth.close()},cut_index:function(t,i,n){var o=["home","quifind","quinotice","quimy"];e.setStorage({key:"page",data:"/pages/home/index"}),1===i&&this.setFooterIndex(1),0===i&&this.setFooterIndex(0),this.currentTab=o[i],!this.$store.getters["session/get"]("isLogin")&&["home","quinotice","quimy"].indexOf(this.currentTab)>=0&&this.mpLoginMode(),this.show_index=i,-1===n.indexOf(i)&&(this.$refs[this.currentTab].ontrueGetList(),n.push(i))},handleClickShare:function(e){this.nowThreadId=e},handlePageLoaded:function(){this.showHome=!0}}),onUnload:function(){e.$off("notiRead")}};t.default=d}).call(this,i("543d")["default"])},ce7d:function(e,t,i){"use strict";i.r(t);var n=i("c7ad"),o=i("dadf");for(var r in o)"default"!==r&&function(e){i.d(t,e,(function(){return o[e]}))}(r);i("27b0");var s,u=i("f0c5"),a=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"151fd752",null,!1,n["a"],s);t["default"]=a.exports},dadf:function(e,t,i){"use strict";i.r(t);var n=i("cb5f"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a}},[["3ff8","common/runtime","common/vendor"]]]);
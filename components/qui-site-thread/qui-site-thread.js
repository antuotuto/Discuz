(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-site-thread/qui-site-thread"],{"06ad":function(e,t,n){"use strict";var r=n("6746"),i=n.n(r);i.a},1568:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={quiHeader:function(){return n.e("components/qui-header/qui-header").then(n.bind(null,"9b58"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"a5b1"))},quiShare:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-share/qui-share")]).then(n.bind(null,"1ee9"))},quiAvatar:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-avatar/qui-avatar")]).then(n.bind(null,"b6d9"))},quiThreadItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-thread-item/qui-thread-item")]).then(n.bind(null,"1723"))},quiToast:function(){return n.e("components/qui-toast/qui-toast").then(n.bind(null,"91e7"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.i18n.t("home.theme")),r=e.$u.light(),i=e.i18n.t("site.circleintroduction"),o={username:e.forums.set_site&&e.forums.set_site.site_author?e.forums.set_site.site_author.username:"",avatarUrl:e.forums.set_site&&e.forums.set_site.site_author?e.forums.set_site.site_author.avatar:""},a=e.i18n.t("site.circlemaster"),s=e.i18n.t("site.createdDays",{num:e.setDays(e.forums.set_site&&e.forums.set_site.site_install)}),u=e.data.length>0?e.i18n.t("site.partialcontentpreview"):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:r,g2:i,a0:o,g3:a,g4:s,g5:u}})},o=[]},2090:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("04de")),i=n("2f62");function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return f(e)||c(e)||u(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function f(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={mixins:[r.default],props:{shareUrl:{type:String,default:""}},data:function(){return{shareBtn:"icon-share1",shareShow:!1,isWeixin:"",data:[],pageSize:10,pageNum:1}},computed:p({},(0,i.mapState)({footerIndex:function(e){return e.footerTab.footerIndex}})),watch:{shareUrl:{handler:function(e){this.shareUrl=e},deep:!0,immediate:!0}},mounted:function(){wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),this.getThemeList()},methods:p(p({},(0,i.mapMutations)({setFooterIndex:"footerTab/SET_FOOTERINDEX"})),{},{logoClick:function(){var t=this.shareUrl;-1!==t.indexOf("partner-invite")&&(this.setFooterIndex(parseInt(0,10)),e.redirectTo({url:"/pages/home/index"}))},openTips:function(){this.$refs.toast.show({message:this.i18n.t("site.jointosee")})},open:function(){this.$refs.popupHead.open()},closeShare:function(){this.shareShow=!1},cancel:function(){this.$refs.popupHead.close()},getThemeList:function(){var e=this;this.loadingType="loading";var t={include:["user","user.groups","firstPost","firstPost.images","firstPost.postGoods","category","threadVideo","threadAudio"],"filter[isDeleted]":"no","filter[isApproved]":1,"filter[isSite]":"yes","page[number]":this.pageNum,"page[limit]":this.pageSize};this.$store.dispatch("jv/get",["threads",{params:t}]).then((function(t){t._jv&&delete t._jv,e.loadingType=t.length===e.pageSize?"more":"nomore",e.data=[].concat(a(e.data),a(t))}))},setDays:function(e){if(e){var t=new Date(e.replace(/-/g,"/")),n=new Date,r=n.getTime()-t.getTime(),i=parseInt(r/864e5,10);return i}}})};t.default=m}).call(this,n("543d")["default"])},6746:function(e,t,n){},"6beb9":function(e,t,n){"use strict";n.r(t);var r=n("2090"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"82f6":function(e,t,n){"use strict";n.r(t);var r=n("1568"),i=n("6beb9");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("06ad");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"de5858fe",null,!1,r["a"],a);t["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-site-thread/qui-site-thread-create-component',
    {
        'components/qui-site-thread/qui-site-thread-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("82f6"))
        })
    },
    [['components/qui-site-thread/qui-site-thread-create-component']]
]);

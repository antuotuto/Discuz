(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/invite"],{"36f8":function(t,e,n){"use strict";n.r(e);var i=n("8e25"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"8e25":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("d93c"),r=o(n("04de"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return l(t)||c(t)||u(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function l(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f=function(){n.e("components/qui-invite/index").then(function(){return resolve(n("3d61"))}.bind(null,n)).catch(n.oe)},p={components:{quiInvite:f},mixins:[r.default],data:function(){return{current:0,total:0,tabList:[{id:1,title:this.i18n.t("manage.nouse"),status:1},{id:2,title:this.i18n.t("manage.used"),status:2},{id:3,title:this.i18n.t("manage.overdue"),status:3},{id:4,title:this.i18n.t("manage.invalid"),status:0}],role:"",status:1,bottomData:[{text:this.i18n.t("home.wxShare"),icon:"icon-wx-friends",name:"wx"}],navbarHeight:0,isWeixin:"",inviteList:[],loadingType:"more",pageNum:1,pageSize:20}},onLoad:function(){this.getInviteList(1),this.getGroupList(),wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]})},onShareAppMessage:function(t){return t.from,{title:this.forums.set_site.site_name,path:"/pages/site/partner-invite?code=".concat(this.code)}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},computed:{currentLoginId:function(){var t=this.$store.getters["session/get"]("userId");return parseInt(t,10)},allInviteList:function(){var t=[],e=this.$store.getters["jv/get"]("groups"),n=Object.keys(this.inviteList),r=Object.keys(e);if(this.inviteList&&n.length>0)for(var o=0;o<n.length;o+=1){var s=this.inviteList[n[o]],a=(0,i.timestamp2day)(s.endtime);if(1===s.status?s.time=this.i18n.t("manage.remainDay",{day:a}):s.time=this.i18n.t("manage.remain0Day"),r&&r.length>0)for(var u=0;u<r.length;u+=1){var c=e[r[u]];s.group_id.toString()===c._jv.id.toString()&&(s.title=c.name)}t.push(s)}return t},groupList:function(){for(var t=this.$store.getters["jv/get"]("groups"),e=[],n=Object.keys(t),i=0;i<n.length;i+=1)e.push(t[n[i]]);return e},userInfos:function(){return this.$store.getters["jv/get"]("users/".concat(this.currentLoginId))}},methods:{getInviteList:function(t){var e=this,n={"filter[status]":t,"page[number]":this.pageNum,"page[limit]":this.pageSize};this.$store.commit("jv/clearRecords",{_jv:{type:"invite"}}),this.$store.dispatch("jv/get",["invite",{params:n}]).then((function(t){t&&t._jv&&t._jv.json&&t._jv.json.data&&(e.total=t._jv.json.meta.total,e.inviteList=[].concat(s(e.inviteList),s(t)),e.loadingType=t.length===e.pageSize?"more":"nomore")}))},getGroupList:function(){var t={"filter[type]":"invite"};this.$store.commit("jv/clearRecords",{_jv:{type:"groups"}}),this.$store.dispatch("jv/get",["groups",{params:t}])},onClickItem:function(t){t.currentIndex!==this.current&&(this.current=t.currentIndex,this.status=this.tabList[t.currentIndex].status,this.pageNum=1,this.inviteList=[],this.getInviteList(this.tabList[t.currentIndex].status))},generate:function(){this.$refs.popup.open()},generateUrl:function(t){var e=this,n={_jv:{type:"invite"},type:"invite",group_id:parseInt(t._jv.id,10)},i={_jv:{type:"userInviteCode"}};this.userInfos&&this.userInfos.groups.length>0&&this.forums.other.can_create_invite?this.$store.dispatch("jv/post",n).then((function(t){t&&(e.$refs.popup.close(),e.inviteList=[],e.pageNum=1,e.getInviteList(1))})).catch((function(t){console.log(t)})):this.$store.dispatch("jv/post",i).then((function(t){t&&(e.$refs.popup.close(),e.inviteList=[],e.pageNum=1,e.getInviteList(1))})).catch((function(t){console.log(t)}))},setInvalid:function(e){var n=this;this.$store.dispatch("jv/delete","invite/".concat(e)).then((function(e){e&&(n.inviteList=[],n.pageNum=1,n.getInviteList(n.status),t.showToast({title:n.i18n.t("manage.invalidLink"),duration:2e3}))}))},share:function(t){this.code=t,this.$refs.popupShare.open()},cancelShare:function(){this.$refs.popupShare.close()},cancelModify:function(){this.$refs.popup.close()},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getInviteList(this.status))}}};e.default=p}).call(this,n("543d")["default"])},a73a:function(t,e,n){},b40d:function(t,e,n){"use strict";(function(t){n("1583");i(n("66fd"));var e=i(n("b7f0"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},b7f0:function(t,e,n){"use strict";n.r(e);var i=n("e920"),r=n("36f8");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("c947");var s,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"34a74d8e",null,!1,i["a"],s);e["default"]=u.exports},c947:function(t,e,n){"use strict";var i=n("a73a"),r=n.n(i);r.a},e920:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={quiPage:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page/qui-page")]).then(n.bind(null,"716f"))},quiTabs:function(){return n.e("components/qui-tabs/qui-tabs").then(n.bind(null,"4976"))},quiLoadMore:function(){return n.e("components/qui-load-more/qui-load-more").then(n.bind(null,"9799"))},quiNoData:function(){return n.e("components/qui-no-data/qui-no-data").then(n.bind(null,"bcb0"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"a5b1"))},quiIcon:function(){return n.e("components/qui-icon/qui-icon").then(n.bind(null,"708e"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,0!==t.current||t.allInviteList&&t.allInviteList.length>0?null:t.i18n.t("manage.noContent")),i=1!==t.current||t.allInviteList&&t.allInviteList.length>0?null:t.i18n.t("manage.noContent"),r=2!==t.current||t.allInviteList&&t.allInviteList.length>0?null:t.i18n.t("manage.noContent"),o=3!==t.current||t.allInviteList&&t.allInviteList.length>0?null:t.i18n.t("manage.noContent"),s=0===t.current?t.i18n.t("manage.generateInvitationUrl"):null,a=t.i18n.t("home.cancel"),u=t.i18n.t("home.cancel");t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:r,g3:o,g4:s,g5:a,g6:u}})},o=[]}},[["b40d","common/runtime","common/vendor"]]]);
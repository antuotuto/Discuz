(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/member"],{"30f5":function(e,t,n){"use strict";n.r(t);var r=n("47a2"),a=n("5a76");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("6457");var s,o=n("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"53bb6192",null,!1,r["a"],s);t["default"]=u.exports},4419:function(e,t,n){},"47a2":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var r={quiPage:function(){return Promise.all([n.e("common/vendor"),n.e("components/qui-page/qui-page")]).then(n.bind(null,"716f"))},quiIcon:function(){return n.e("components/qui-icon/qui-icon").then(n.bind(null,"708e"))},quiAvatarCell:function(){return n.e("components/qui-avatar-cell/qui-avatar-cell").then(n.bind(null,"659a"))},quiLoadMore:function(){return n.e("components/qui-load-more/qui-load-more").then(n.bind(null,"9799"))},quiButton:function(){return n.e("components/qui-button/qui-button").then(n.bind(null,"5a7a"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"a5b1"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.i18n.t("manage.searchMembers")),r=e.searchText?e.i18n.t("search.cancel"):null,a=e.__map(e.userListShow,(function(t,n){var r=e.__get_orig(t),a=e.handleGroups(t),i=1==t.status?e.i18n.t("manage.disable"):null,s=1!=t.status?e.i18n.t("manage.normal"):null,o=JSON.stringify(t),u=e.checkAvatar.findIndex((function(e){return e.id===t.id}));return{$orig:r,m0:a,g2:i,g3:s,g4:o,g5:u}})),i=Boolean(e.checkAvatar.length<1),s=Boolean(e.checkAvatar.length<1),o=e.checkAvatar.length<1?e.i18n.t("manage.notSelected"):null,u=e.checkAvatar.length<1?null:e.i18n.t("manage.selected"),c=e.forums.other&&e.forums.other.can_edit_user_status?e.i18n.t("manage.disable"):null,h=e.forums.other&&e.forums.other.can_edit_user_status?e.i18n.t("manage.clearDisable"):null,l=e.i18n.t("home.cancel");e.$mp.data=Object.assign({},{$root:{g0:n,g1:r,l0:a,m1:i,m2:s,g6:o,g7:u,g8:c,g9:h,g10:l}})},i=[]},"5a76":function(e,t,n){"use strict";n.r(t);var r=n("5f6c"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"5f6c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2ef0"),a=i(n("04de"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return h(e)||c(e)||u(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function h(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f={mixins:[a.default],data:function(){return{searchText:"",loadingType:"more",searchLoadingType:"more",pageSize:20,pageNum:1,searchPageNum:1,userList:[],searchUserList:[],isSearch:!1,groupList:[],checkAvatar:[]}},onLoad:function(){this.searchUser(),this.getGroupList(),e.setNavigationBarTitle({title:this.i18n.t("manage.manageMembers")})},computed:{currentLoginId:function(){var e=this.$store.getters["session/get"]("userId");return parseInt(e,10)},userListShow:function(){return this.isSearch?this.searchUserList:this.userList},loadingTypeShow:function(){return this.isSearch?this.searchLoadingType:this.loadingType}},methods:{searchInput:(0,r.debounce)((function(e){e&&e.target&&(this.isSearch=!0,this.searchPageNum=1,this.searchUserList=[],this.searchUser(e.target.value))}),800),cancelSearch:function(){this.isSearch=!1,this.searchText=""},handleGroups:function(e){var t=[];return e.groups&&e.groups.length>0&&(t=e.groups.filter((function(e){return e.isDisplay}))),t.length>0?t[0].name:""},getGroupList:function(){var e=this;this.groupList=[],this.forums.other&&!this.forums.other.can_edit_user_group||this.$store.dispatch("jv/get","groups").then((function(t){if(t._jv){delete t._jv;for(var n=0;n<t.length;n+=1)(1===e.currentLoginId&&"1"===t[n]._jv.id||"1"!==t[n]._jv.id&&"7"!==t[n]._jv.id)&&e.groupList.push(t[n])}}))},searchUser:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.searchText=t;var n={include:"groups","page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[username]":"*".concat(this.searchText,"*")};""===this.searchText?this.$store.dispatch("jv/get",["users",{params:n}]).then((function(t){t&&t._jv&&(delete t._jv,e.isSearch?e.searchUserList=[].concat(s(e.searchUserList),s(t)):e.userList=[].concat(s(e.userList),s(t)),e.loadingType=t.length===e.pageSize?"more":"nomore")})):(n["page[number]"]=this.searchPageNum,this.$store.dispatch("jv/get",["users",{params:n}]).then((function(t){t&&t._jv&&(delete t._jv,e.searchUserList=[].concat(s(e.searchUserList),s(t)),e.searchLoadingType=t.length===e.pageSize?"more":"nomore")})))},pullDown:function(){"more"===this.loadingTypeShow&&(this.isSearch?this.searchPageNum+=1:this.pageNum+=1,this.searchUser(this.searchText))},modifyGroupName:function(e,t){var n=this,r=[];if(this.checkAvatar&&this.checkAvatar.length>0)for(var a=0;a<this.checkAvatar.length;a+=1)t?r.push({attributes:{id:this.checkAvatar[a].id,status:1===t?1:0}}):r.push({attributes:{id:this.checkAvatar[a].id,groupId:parseInt(e._jv.id,10)}});var i=[{_jv:{type:"users"}},{data:{data:r}}];this.$store.dispatch("jv/patch",i).then((function(e){e&&(n.getGroupList(),n.pageNum=1,n.getList(),n.$refs.popup.close())}))},getList:function(){var e=this;this.searchText="",this.isSearch=!1;var t={include:"groups","page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[username]":"*".concat(this.searchText,"*")};this.$store.dispatch("jv/get",["users",{params:t}]).then((function(t){t&&t._jv&&(delete t._jv,e.userList=t,e.checkAvatar.splice(0,e.checkAvatar.length),e.loadingType=t.length===e.pageSize?"more":"nomore")}))},changeCheck:function(e){var t=this;this.checkAvatar=[],e.detail.value.forEach((function(e){t.checkAvatar.push(JSON.parse(e))}))},getCheckMember:function(){this.$refs.popup.open()},cancel:function(){this.$refs.popup.close()}}};t.default=f}).call(this,n("543d")["default"])},6457:function(e,t,n){"use strict";var r=n("4419"),a=n.n(r);a.a},"6ed8":function(e,t,n){"use strict";(function(e){n("1583");r(n("66fd"));var t=r(n("30f5"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["6ed8","common/runtime","common/vendor"]]]);
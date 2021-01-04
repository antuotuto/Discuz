(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/followers"],{"07d1":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o("c798"),n=l(o("13a0")),i=o("9416");function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return c(e)||f(e)||a(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"===typeof e)return d(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var g={mixins:[n.default],props:{userId:{type:String,default:""}},data:function(){return{loadingType:"",followerList:[],pageSize:20,pageNum:1,currentLoginId:this.$store.getters["session/get"]("userId")}},mounted:function(){this.getFollowerList()},methods:{pullDownRefresh:function(){this.pageNum=1,this.followerList=[],this.getFollowerList("pullDownRefresh")},handleGroups:function(e){var t=[];return e.groups&&e.groups.length>0&&(t=e.groups.filter((function(e){return e.isDisplay}))),t.length>0?t[0].name:""},getFollowerList:function(t){var o=this;this.loadingType="loading";var n={include:["fromUser","fromUser.groups"],"filter[type]":2,"page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[user_id]":this.userId};r.status.run((function(){return o.$store.dispatch("jv/get",["follow",{params:n}])})).then((function(r){r._jv&&delete r._jv,o.loadingType=r.length===o.pageSize?"more":"nomore",o.followerList="change"===t?r:[].concat(u(o.followerList),u(r)),t&&"pullDownRefresh"===t&&e.stopPullDownRefresh()}))},toProfile:function(t){e.navigateTo({url:"/pages/profile/index?userId=".concat(t)})},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getFollowerList())},addFollow:function(t,o){var n=this;if(this.$store.getters["session/get"]("isLogin")||(e.setStorage({key:"page",data:(0,i.getCurUrl)()}),this.mpLoginMode()),0===t.follow){var l={_jv:{type:"follow"},type:"user_follow",to_user_id:t.id};r.status.run((function(){return n.$store.dispatch("jv/post",l)})).then((function(e){n.userId===n.currentLoginId&&n.$emit("changeFollow",{userId:n.userId});var t=n.followerList[o];t.fromUser.follow=1===e.is_mutual?2:1,n.$set(n.followerList,o,t)}))}else this.deleteFollow(t,o)},deleteFollow:function(t,o){var r=this;this.$store.getters["session/get"]("isLogin")||(e.setStorage({key:"page",data:(0,i.getCurUrl)()}),this.mpLoginMode()),this.$store.dispatch("jv/delete","follow/".concat(t.id,"/1")).then((function(){r.userId===r.currentLoginId&&r.$emit("changeFollow",{userId:r.userId});var e=r.followerList[o];e.fromUser.follow=0,r.$set(r.followerList,o,e)}))}}};t.default=g}).call(this,o("543d")["default"])},1028:function(e,t,o){},1560:function(e,t,o){"use strict";o.r(t);var r=o("4ccb"),n=o("d5a7");for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);o("cf7c");var l,u=o("f0c5"),s=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],l);t["default"]=s.exports},"4ccb":function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return r}));var r={quiAvatar:function(){return Promise.all([o.e("common/vendor"),o.e("components/qui-avatar/qui-avatar")]).then(o.bind(null,"b6d9"))},quiCellItem:function(){return o.e("components/qui-cell-item/qui-cell-item").then(o.bind(null,"328d"))},quiIcon:function(){return o.e("components/qui-icon/qui-icon").then(o.bind(null,"708e"))},quiLoadMore:function(){return o.e("components/qui-load-more/qui-load-more").then(o.bind(null,"9799"))}},n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.followerList.length>0?e.__map(e.followerList,(function(t,o){var r=e.__get_orig(t),n=e.handleGroups(t.fromUser),i=(t.fromUser&&t.fromUser.id)!=e.currentLoginId&&0==(t.fromUser&&t.fromUser.follow)?e.i18n.t("profile.following"):null,l=(t.fromUser&&t.fromUser.id)!=e.currentLoginId&&0!=(t.fromUser&&t.fromUser.follow)&&1==(t.fromUser&&t.fromUser.follow)?e.i18n.t("profile.followed"):null,u=(t.fromUser&&t.fromUser.id)!=e.currentLoginId&&0!=(t.fromUser&&t.fromUser.follow)&&1!=(t.fromUser&&t.fromUser.follow)?e.i18n.t("profile.mutualfollow"):null;return{$orig:r,m0:n,g0:i,g1:l,g2:u}})):null);e.$mp.data=Object.assign({},{$root:{l0:o}})},i=[]},cf7c:function(e,t,o){"use strict";var r=o("1028"),n=o.n(r);n.a},d5a7:function(e,t,o){"use strict";o.r(t);var r=o("07d1"),n=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t["default"]=n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/profile/followers-create-component',
    {
        'pages/profile/followers-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1560"))
        })
    },
    [['pages/profile/followers-create-component']]
]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"186d":function(e,t,r){},"345f":function(e,t,r){"use strict";r.r(t);var n=r("699e");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("b16e");var o,i,c,u,s=r("f0c5"),f=Object(s["a"])(n["default"],o,i,!1,null,null,null,!1,c,u);t["default"]=f.exports},"699e":function(e,t,r){"use strict";r.r(t);var n=r("dacf"),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"732b":function(e,t,r){"use strict";(function(e,t){r("1583");var n=f(r("66fd")),a=f(r("345f")),o=r("addd"),i=f(r("38e1")),c=f(r("c9e6")),u=f(r("f9b7")),s=r("eb2d");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=r("e5a6").default;Promise.allSettled=Promise.allSettled||h,n.default.config.productionTip=!1,a.default.mpType="app",n.default.prototype.$localeUse=o.localeUse,n.default.prototype.i18n=o.i18n;var g=e.getStorageSync("theme")||s.THEME_DEFAULT,b={guid:c.default,currentTheme:g,light:function(){return s.THEME_DEFAULT},dark:function(){return s.THEME_DARK},host:function(){return s.DISCUZ_REQUEST_HOST},event:new n.default};n.default.prototype.$u=b,n.default.mixin(u.default);var v=new n.default(p(p({i18n:o.i18n,store:i.default},a.default),{},{data:function(){return{siteInfoStat:"",evalscripts:[],JSLOADED:[]}},created:function(){},methods:{}}));t(v).$mount()}).call(this,r("543d")["default"],r("543d")["createApp"])},b16e:function(e,t,r){"use strict";var n=r("186d"),a=r.n(n);a.a},dacf:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("a34a"));r("4d2c");var a=r("eb2d"),o=i(r("66fd"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){f(o,n,a,i,c,"next",e)}function c(e){f(o,n,a,i,c,"throw",e)}i(void 0)}))}}var p=[],l=["pages/site/partner-invite","pages/user/login","pages/user/register","pages/user/phone-login-register"],h={data:function(){return{statisticsCode:""}},globalData:{themeChanged:function(t){o.default.prototype.$u.currentTheme=t,p.forEach((function(e){e(t)})),e.setStorage({key:"theme",data:t})},watchThemeChange:function(e){p.indexOf(e)<0&&p.push(e)},unWatchThemeChange:function(e){var t=p.indexOf(e);t>-1&&p.splice(t,1)}},onLaunch:function(){var t=this;return d(n.default.mark((function r(){var o;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=function(){var r=d(n.default.mark((function r(){var o,i,c,u,s,f,d;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);case 2:if(o=r.sent,i=t.$store.getters["session/get"]("userId"),c={},!i){r.next=11;break}return u={include:"groups,wechat"},r.next=9,t.$store.dispatch("jv/get",["users/".concat(i),{params:u}]);case 9:c=r.sent,e.setStorageSync(a.STORGE_GET_USER_TIME,(new Date).getTime());case 11:if(t.statisticsCode=o.set_site.site_stat,e.$emit("stat",{statisticsCode:t.statisticsCode}),s={},f=getCurrentPages(),f.length>0&&(s=f[f.length-1]),o.set_site.site_mode!==a.SITE_PAY){r.next=33;break}if(d=e.getSystemInfoSync(),"ios"!==d.platform){r.next=21;break}return t.$store.dispatch("forum/setError",{loading:!1,code:"dataerro"}),r.abrupt("return");case 21:if(!(f.length>0)){r.next=32;break}if(s=f[f.length-1],"pages/user/pc-login"!==s.route){r.next=26;break}return e.redirectTo({url:s.__page__.fullPath}),r.abrupt("return");case 26:if("pages/user/pc-relation"!==s.route){r.next=29;break}return e.redirectTo({url:s.__page__.fullPath}),r.abrupt("return");case 29:c.paid||"pages/site/info"===s.route||-1!==l.indexOf(s.route)||e.redirectTo({url:"/pages/site/info"}),r.next=33;break;case 32:c.paid||e.redirectTo({url:"/pages/site/info"});case 33:t.$store.state.forum.error.code||t.$store.dispatch("forum/setError",{loading:!1});case 34:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),r.prev=1,r.next=4,o();case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),r.t0&&r.t0.data&&r.t0.data.errors&&("access_denied"===r.t0.data.errors[0].code?t.$store.dispatch("session/logout").then(o):t.$store.dispatch("forum/setError",u({loading:!1},r.t0.data.errors[0])));case 9:case"end":return r.stop()}}),r,null,[[1,6]])})))()},onShow:function(e){if(this.captchaTicketExpire||(this.captchaTicketExpire={}),1038===e.scene&&"wx5a3a7366fd07e119"===e.referrerInfo.appId){var t=e.referrerInfo.extraData;if(t&&0===t.ret){var r=t.ticket;this.captchaTicketExpire[r]||(this.captchaTicketExpire[r]=!0,this.$u.event.$emit("captchaResult",t))}else this.$u.event.$emit("closeChaReault",t)}},onHide:function(){},onPageNotFound:function(t){var r="/pages/common/error";if(/^\/thread\/\d+$/i.test(t.path)){var n=t.path.match(/^\/thread\/(\d+)$/i);r="/topic/index?id=".concat(n[1])}else if(/^\/user\/\d+$/i.test(t.path)){var a=t.path.match(/^\/user\/(\d+)$/i);r="/pages/profile/index?userId=".concat(a[1])}else if("/site/partner-invite"===t.path&&t.query.code)r="/pages/site/partner-invite?code=".concat(t.query.code);else if(/^\/category\/\d+$/i.test(t.path)){var o=t.path.match(/^\/category\/(\d+)$/i);r="/?categoryId=".concat(o[1])}else if(/^\/topic\/\d+$/i.test(t.path)){var i=t.path.match(/^\/topic\/(\d+)$/i);r="/pages/topic/content?id=".concat(i[1])}e.redirectTo({url:r})}};t.default=h}).call(this,r("543d")["default"])}},[["732b","common/runtime","common/vendor"]]]);
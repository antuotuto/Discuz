(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-person-list/qui-person-list"],{"10b3":function(t,n,e){},"47b3":function(t,n,e){"use strict";e.r(n);var i=e("d30c"),r=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=r.a},"68f2d":function(t,n,e){"use strict";e.r(n);var i=e("989f"),r=e("47b3");for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);e("f1d7");var u,s=e("f0c5"),a=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"5cf47b24",null,!1,i["a"],u);n["default"]=a.exports},"989f":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var i={quiAvatar:function(){return Promise.all([e.e("common/vendor"),e.e("components/qui-avatar/qui-avatar")]).then(e.bind(null,"b6d9"))},quiIcon:function(){return e.e("components/qui-icon/qui-icon").then(e.bind(null,"708e"))}},r=function(){var t=this,n=t.$createElement;t._self._c},o=[]},d30c:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{type:{default:"类型",type:String},personNum:{default:"0",type:[Number,String]},limitCount:{default:"10",type:[Number,String]},personList:{default:function(){return[]},type:Array},btnShow:{default:!0,type:Boolean},btnBg:{default:"#fa5151",type:String},listBg:{default:"--color(--qui-BG-2)",type:String},btnIconShow:{default:!0,type:Boolean},btnIconName:{default:"",type:String},btnText:{default:"按钮",type:String},btnTextColor:{default:"#ffffff",type:String}},data:function(){return{personRes:[],foldStatus:!1,transform:""}},computed:{t:function(){return this.i18n.t("topic")}},watch:{personList:{handler:function(t){t.map((function(t){var n=t;return n.showAvatar=!0,n})),this.personRes=this.limitArray(t,this.limitCount)},deep:!0,immediate:!0}},created:function(){console.log("这是组件created"),this.$forceUpdate()},methods:{limitArray:function(t,n){var e=[];return Object.values(t).forEach((function(t,i){i>=n||e.push(t)})),e},foldClick:function(){this.foldStatus=!this.foldStatus,console.log(this.foldStatus),this.foldStatus?(this.transform="rotate(180deg)",console.log(this.transform,"旋转"),this.personRes=this.limitArray(this.personList,this.personNum)):(this.transform="",console.log(this.transform,"回复"),this.personRes=this.limitArray(this.personList,this.limitCount))},personJump:function(t){this.$emit("personJump",t)},btnClick:function(t){this.$emit("btnClick",t)},imageError:function(t){var n=t;return n.showAvatar=!1,n}}};n.default=i},f1d7:function(t,n,e){"use strict";var i=e("10b3"),r=e.n(i);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-person-list/qui-person-list-create-component',
    {
        'components/qui-person-list/qui-person-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("68f2d"))
        })
    },
    [['components/qui-person-list/qui-person-list-create-component']]
]);

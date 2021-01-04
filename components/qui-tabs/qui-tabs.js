(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-tabs/qui-tabs"],{1743:function(t,n,e){},4976:function(t,n,e){"use strict";e.r(n);var r=e("c85d"),u=e("f52c");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("e061");var a,i=e("f0c5"),f=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=f.exports},bf1a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"QuiTabs",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},brief:{type:Boolean,default:!1},activeColor:{type:String,default:"#1878F3"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{onClick:function(t){this.currentIndex=t,this.$emit("clickItem",{currentIndex:t})}}};n.default=r},c85d:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},e061:function(t,n,e){"use strict";var r=e("1743"),u=e.n(r);u.a},f52c:function(t,n,e){"use strict";e.r(n);var r=e("bf1a"),u=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-tabs/qui-tabs-create-component',
    {
        'components/qui-tabs/qui-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4976"))
        })
    },
    [['components/qui-tabs/qui-tabs-create-component']]
]);

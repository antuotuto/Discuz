(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-icon/qui-icon"],{"3a8d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"QuiIcon",props:{name:{type:[String,Boolean],default:""},size:{type:[Number,String],default:28},color:{type:String,default:""},dot:{type:Boolean,default:!1},badge:{type:[Number,String],default:""}},computed:{cssClass:function(){var t=this.name;return"qui-icon ".concat(t)},dotClass:function(){var t=this.badge,n="qui-info";return t.toString()?n:"".concat(n," qui-info--dot")}},methods:{handleClick:function(t){this.$emit("click",t)}}};n.default=u},"4a31":function(t,n,e){"use strict";var u=e("bf26"),a=e.n(u);a.a},"708e":function(t,n,e){"use strict";e.r(n);var u=e("c3b5"),a=e("bfc9");for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);e("4a31");var i,o=e("f0c5"),r=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"3d44283a",null,!1,u["a"],i);n["default"]=r.exports},bf26:function(t,n,e){},bfc9:function(t,n,e){"use strict";e.r(n);var u=e("3a8d"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);n["default"]=a.a},c3b5:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-icon/qui-icon-create-component',
    {
        'components/qui-icon/qui-icon-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("708e"))
        })
    },
    [['components/qui-icon/qui-icon-create-component']]
]);

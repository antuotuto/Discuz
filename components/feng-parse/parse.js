(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/feng-parse/parse"],{"0a27":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("8dd5"));function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){n.e("components/feng-parse/components/wxParseTemplate0").then(function(){return resolve(n("5ecc"))}.bind(null,n)).catch(n.oe)},s={name:"wxParse",props:{userSelect:{type:String,default:"text"},imgOptions:{type:[Object,Boolean],default:function(){return{loop:!1,indicator:"number",longPressActions:!1}}},loading:{type:Boolean,default:!1},className:{type:String,default:""},content:{type:String,default:""},contentParse:{type:Object,default:null},noData:{type:String,default:""},startHandler:{type:Function,default:function(){return function(t){t.attr.class=null,t.attr.style=null}}},endHandler:{type:Function,default:function(){return function(t){t=t}}},charsHandler:{type:Function,default:function(){return function(t){t=t}}},imageProp:{type:Object,default:function(){return{mode:"aspectFit",padding:0,lazyLoad:!1,domain:""}}}},components:{wxParseTemplate:r},data:function(){return{nodes:[],imageUrls:[],wxParseWidth:{value:0}}},computed:{},mounted:function(){this.setHtml()},methods:{setHtml:function(){var t=this;this.getWidth().then((function(e){t.wxParseWidth.value=e}));var e=this.contentParse,n=this.content,a=this.noData,r=this.imageProp,s=this.startHandler,o=this.endHandler,u=this.charsHandler;if(e)this.imageUrls=e.imageUrls,this.nodes=e.nodes;else{var l=n||a,c={start:s,end:o,chars:u},f=(0,i.default)(l,c,r,this);this.imageUrls=f.imageUrls,this.nodes=[],f.nodes.forEach((function(e){e.node&&t.nodes.push(e)}))}},getWidth:function(){var e=this;return new Promise((function(n,i){t.createSelectorQuery().in(e).select(".wxParse").fields({size:!0,scrollOffset:!0},(function(t){n(t.width)})).exec()}))},navigate:function(t,e,n){console.log(t,n),this.$emit("navigate",t,e)},preview:function(e,n){this.imageUrls.length&&"boolean"!==typeof this.imgOptions&&t.previewImage({current:e,urls:this.imageUrls,loop:this.imgOptions.loop,indicator:this.imgOptions.indicator,longPressActions:this.imgOptions.longPressActions}),this.$emit("preview",e,n)},removeImageUrl:function(t){var e=this.imageUrls;e.splice(e.indexOf(t),1)}},provide:function(){return{parseWidth:this.wxParseWidth,parseSelect:this.userSelect}},watch:{content:function(t){this.setHtml()}}};e.default=s}).call(this,n("543d")["default"])},4298:function(t,e,n){"use strict";n.r(e);var i=n("6b01"),a=n("fa9e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var s,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=u.exports},"6b01":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},fa9e:function(t,e,n){"use strict";n.r(e);var i=n("0a27"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/feng-parse/parse-create-component',
    {
        'components/feng-parse/parse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4298"))
        })
    },
    [['components/feng-parse/parse-create-component']]
]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qui-video/qui-video"],{"29f71":function(t,e,n){},"42ef":function(t,e,n){"use strict";n.r(e);var i=n("9738"),o=n("63d1");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("d87c");var a,d=n("f0c5"),r=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"bba11d1a",null,!1,i["a"],a);e["default"]=r.exports},"5667a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{src:{type:String,default:""},poster:{type:String,default:""},videoId:{type:String,default:""}},data:function(){return{videoContext:null,loading:!1,duration:""}},watch:{src:{handler:function(t){this.rsc=t},deep:!0,immediate:!0}},created:function(){this.videoContext=t.createVideoContext("myVideo".concat(this.$props.videoId),this)},destroyed:function(){this.videoContext&&(this.videoContext=null)},methods:{fullscreenPlay:function(){this.videoContext.play(),this.videoContext.requestFullScreen()},playVideo:function(){},fullscreenchange:function(t){t.detail.fullScreen||this.videoContext.pause()},loadedmetadata:function(t){this.duration||(this.duration=t.detail.duration)}}};e.default=n}).call(this,n("543d")["default"])},"63d1":function(t,e,n){"use strict";n.r(e);var i=n("5667a"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},9738:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},d87c:function(t,e,n){"use strict";var i=n("29f71"),o=n.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qui-video/qui-video-create-component',
    {
        'components/qui-video/qui-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("42ef"))
        })
    },
    [['components/qui-video/qui-video-create-component']]
]);

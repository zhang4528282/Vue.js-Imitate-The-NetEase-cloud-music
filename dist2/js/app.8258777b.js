(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={app:0},a={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d20f91a":"b714a6e9","chunk-6f99d587":"89d844d9","chunk-753d878c":"9cc5eda2","chunk-56547eb5":"ca78c95e","chunk-d55beefe":"2120d187"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-6f99d587":1,"chunk-56547eb5":1,"chunk-d55beefe":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d20f91a":"31d6cfe0","chunk-6f99d587":"0a017ee0","chunk-753d878c":"31d6cfe0","chunk-56547eb5":"55b4a456","chunk-d55beefe":"c43db38d"}[t]+".css",a=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[t],d.parentNode.removeChild(d),n(o)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){i[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ffc":function(t,e,n){},"315b":function(t,e,n){},3224:function(t,e,n){"use strict";var r=n("315b"),i=n.n(r);i.a},"4ee2":function(t,e,n){},"4f66":function(t,e,n){"use strict";var r=n("b466"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"key",(function(){return x})),n.d(r,"key1",(function(){return O}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("cd56"),{}),u=c,s=(n("4f66"),n("2877")),l=Object(s["a"])(u,a,o,!1,null,"40f24166",null),f=l.exports,d=(n("d3b7"),n("8c4f")),h=function(){return n.e("chunk-2d20f91a").then(n.bind(null,"b3d7"))},p=function(){return Promise.all([n.e("chunk-753d878c"),n.e("chunk-56547eb5")]).then(n.bind(null,"d344"))},v=function(){return Promise.resolve().then(n.bind(null,"cd56"))},m=function(){return n.e("chunk-6f99d587").then(n.bind(null,"aa65"))},b=function(){return Promise.all([n.e("chunk-753d878c"),n.e("chunk-d55beefe")]).then(n.bind(null,"1273"))};i["a"].use(d["a"]);var k=[{path:"/",redirect:"/find"},{path:"/find",component:v,children:[{path:"/find",component:p},{path:"/song",name:"song",component:b},{path:"/home",component:h}]},{path:"/detail/:id",component:m}],y=new d["a"]({mode:"history",routes:k}),g=y,T=d["a"].prototype.push;d["a"].prototype.push=function(t){return T.call(this,t).catch((function(t){return t}))};var _=n("caf9"),w=n("2f62"),C=n("842e"),x=function(t){return t.key},O=function(t){return t.key1},E=n("ade3"),j="SET_KEY",P=Object(E["a"])({},j,(function(t,e){t.key=e.key,t.key1=e.key1})),S=P,$={key:0,key1:2},A=$;i["a"].use(w["a"]);var L=new w["a"].Store({actions:C,getters:r,state:A,mutations:S});n("4ee2"),n("ed2c");i["a"].config.productionTip=!1,i["a"].use(_["a"],{loading:n("bc5e")}),new i["a"]({render:function(t){return t(f)},router:g,store:L}).$mount("#app")},"842e":function(t,e){},"8da0":function(t,e,n){},b466:function(t,e,n){},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.d578f3ae.png"},c29e:function(t,e,n){},cd56:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.isPath?t._e():n("main-tab-bar",{staticClass:"tab-bar"}),n("keep-alive",[n("router-view")],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("tab-bar",[n("div",{staticClass:"nav-left"},[n("i",{staticClass:"iconcaidan iconfont"})]),n("div",{staticClass:"nav-center"},[n("tab-bar-item",{attrs:{path:"/home",activeColor:"pink"}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])]),n("tab-bar-item",{attrs:{path:"/find",activeColor:"black"},nativeOn:{click:function(e){return t.tip(e)}}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("发现")])])],1),n("div",{staticClass:"nav-right"},[n("router-link",{staticClass:"iconserch iconfont",attrs:{to:"/search"}})],1)]),n("top-tip",{ref:"tip"},[n("span",{staticClass:"tips"},[t._v(t._s(t.tips))])])],1)},o=[],c=n("5530"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar",components:{},data:function(){return{}}},f=l,d=(n("ea95"),n("2877")),h=Object(d["a"])(f,u,s,!1,null,"f09101d8",null),p=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemCilck}},[n("div",{class:{changeFont:t.isActive,font:t.isActive}},[t._t("item-text")],2),n("div",{staticClass:"cover",class:{active:t.isLeave,bgc:t.isTouch},on:{touchstart:t.touch,touchend:t.touchEnd}})])},m=[],b={props:{path:String,activeColor:{typr:String,default:"12px"}},data:function(){return{isTouch:!1,isLeave:!1}},computed:{isActive:function(){return this.$route.path==this.path},activeStyle:function(){return this.isActive?{fontSize:this.activeColor}:{}}},methods:{itemCilck:function(){this.$router.push(this.path)},touch:function(){this.isTouch=!0,this.isLeave=!1},touchEnd:function(){this.isLeave=!0,this.isTouch=!1}}},k=b,y=(n("3224"),Object(d["a"])(k,v,m,!1,null,"397cdc96",null)),g=y.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"tip-show",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isTip,expression:"isTip"}],staticClass:"tip"},[t._t("default")],2)])},_=[],w=null,C={name:"",data:function(){return{isTip:!1}},methods:{showTip:function(){var t=this;this.isTip=!0,w&&clearTimeout(w),w=setTimeout((function(){t.hideTip()}),3e3)},hideTip:function(){this.isTip=!1}}},x=C,O=(n("da0a"),Object(d["a"])(x,T,_,!1,null,"7484cb46",null)),E=O.exports,j=n("2f62"),P={data:function(){return{tips:"为你推荐更多有趣的内容",key:{key:0,key1:2}}},components:{TabBar:p,TabBarItem:g,TopTip:E},mounted:function(){var t=this;setTimeout((function(){t.$refs.tip.showTip()}),500)},methods:Object(c["a"])({tip:function(){this.$refs.tip.showTip(),++this.key.key,++this.key.key1,console.log(this.key1),this.setKey(this.key)}},Object(j["c"])({setKey:"SET_KEY"}))},S=P,$=(n("e104"),Object(d["a"])(S,a,o,!1,null,"1caf028b",null)),A=$.exports,L={data:function(){return{isPath:!1}},components:{MainTabBar:A},activated:function(){console.log("kk")},mounted:function(){console.log("ll")},watch:{$route:function(t,e){this.isPath="/song"==t.path,console.log("/song"==t.path)}},methods:{}},B=L,N=Object(d["a"])(B,r,i,!1,null,null,null);e["default"]=N.exports},da0a:function(t,e,n){"use strict";var r=n("2ffc"),i=n.n(r);i.a},e104:function(t,e,n){"use strict";var r=n("c29e"),i=n.n(r);i.a},ea95:function(t,e,n){"use strict";var r=n("8da0"),i=n.n(r);i.a},ed2c:function(t,e,n){}});
//# sourceMappingURL=app.8258777b.js.map
(function(t){function e(e){for(var a,r,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-241af32c":"a59715fd","chunk-5a53a4a0":"4a886a10","chunk-e9fba2e4":"25d5e01b","chunk-250b206e":"00044258","chunk-2d20f91a":"b714a6e9"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-5a53a4a0":1,"chunk-e9fba2e4":1,"chunk-250b206e":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-241af32c":"31d6cfe0","chunk-5a53a4a0":"9b48288f","chunk-e9fba2e4":"02b20e6b","chunk-250b206e":"6d244a31","chunk-2d20f91a":"31d6cfe0"}[t]+".css",i=u.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===a||l===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],h.parentNode.removeChild(h),n(o)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}i[t]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2ffc":function(t,e,n){},"315b":function(t,e,n){},3224:function(t,e,n){"use strict";var a=n("315b"),r=n.n(a);r.a},"4ee2":function(t,e,n){},"4f66":function(t,e,n){"use strict";var a=n("b466"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"key",(function(){return x})),n.d(a,"key1",(function(){return O}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("cd56"),{}),u=c,s=(n("4f66"),n("2877")),l=Object(s["a"])(u,i,o,!1,null,"40f24166",null),f=l.exports,h=(n("d3b7"),n("8c4f")),d=function(){return n.e("chunk-2d20f91a").then(n.bind(null,"b3d7"))},p=function(){return Promise.all([n.e("chunk-241af32c"),n.e("chunk-e9fba2e4")]).then(n.bind(null,"d344"))},v=function(){return Promise.resolve().then(n.bind(null,"cd56"))},m=function(){return n.e("chunk-250b206e").then(n.bind(null,"aa65"))},b=function(){return Promise.all([n.e("chunk-241af32c"),n.e("chunk-5a53a4a0")]).then(n.bind(null,"1273"))};r["a"].use(h["a"]);var k=[{path:"/",redirect:"/find"},{path:"/find",component:v,children:[{path:"/find",component:p},{path:"/song",name:"song",component:b},{path:"/home",component:d}]},{path:"/detail/:id",component:m}],y=new h["a"]({mode:"history",routes:k}),g=y,T=h["a"].prototype.push;h["a"].prototype.push=function(t){return T.call(this,t).catch((function(t){return t}))};var _=n("caf9"),w=n("2f62"),C=n("842e"),x=function(t){return t.key},O=function(t){return t.key1},E=n("ade3"),j="SET_KEY",P=Object(E["a"])({},j,(function(t,e){t.key=e.key,t.key1=e.key1})),S=P,$={key:0,key1:2},A=$;r["a"].use(w["a"]);var L=new w["a"].Store({actions:C,getters:a,state:A,mutations:S});n("4ee2"),n("ed2c");r["a"].config.productionTip=!1,r["a"].use(_["a"],{loading:n("bc5e")}),new r["a"]({render:function(t){return t(f)},router:g,store:L}).$mount("#app")},"842e":function(t,e){},"8da0":function(t,e,n){},b466:function(t,e,n){},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.d578f3ae.png"},c29e:function(t,e,n){},cd56:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[t.isPath?t._e():n("main-tab-bar",{staticClass:"tab-bar"}),n("keep-alive",[n("router-view")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("tab-bar",[n("div",{staticClass:"nav-left"},[n("i",{staticClass:"iconcaidan iconfont"})]),n("div",{staticClass:"nav-center"},[n("tab-bar-item",{attrs:{path:"/home",activeColor:"pink"}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])]),n("tab-bar-item",{attrs:{path:"/find",activeColor:"black"},nativeOn:{click:function(e){return t.tip(e)}}},[n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("发现")])])],1),n("div",{staticClass:"nav-right"},[n("router-link",{staticClass:"iconserch iconfont",attrs:{to:"/search"}})],1)]),n("top-tip",{ref:"tip"},[n("span",{staticClass:"tips"},[t._v(t._s(t.tips))])])],1)},o=[],c=n("5530"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar",components:{},data:function(){return{}}},f=l,h=(n("ea95"),n("2877")),d=Object(h["a"])(f,u,s,!1,null,"f09101d8",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemCilck}},[n("div",{class:{changeFont:t.isActive,font:t.isActive}},[t._t("item-text")],2),n("div",{staticClass:"cover",class:{active:t.isLeave,bgc:t.isTouch},on:{touchstart:t.touch,touchend:t.touchEnd}})])},m=[],b={props:{path:String,activeColor:{typr:String,default:"12px"}},data:function(){return{isTouch:!1,isLeave:!1}},computed:{isActive:function(){return this.$route.path==this.path},activeStyle:function(){return this.isActive?{fontSize:this.activeColor}:{}}},methods:{itemCilck:function(){this.$router.push(this.path)},touch:function(){this.isTouch=!0,this.isLeave=!1},touchEnd:function(){this.isLeave=!0,this.isTouch=!1}}},k=b,y=(n("3224"),Object(h["a"])(k,v,m,!1,null,"397cdc96",null)),g=y.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"tip-show",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isTip,expression:"isTip"}],staticClass:"tip"},[t._t("default")],2)])},_=[],w=null,C={name:"",data:function(){return{isTip:!1}},methods:{showTip:function(){var t=this;this.isTip=!0,w&&clearTimeout(w),w=setTimeout((function(){t.hideTip()}),3e3)},hideTip:function(){this.isTip=!1}}},x=C,O=(n("da0a"),Object(h["a"])(x,T,_,!1,null,"7484cb46",null)),E=O.exports,j=n("2f62"),P={data:function(){return{tips:"为你推荐更多有趣的内容",key:{key:0,key1:2}}},components:{TabBar:p,TabBarItem:g,TopTip:E},mounted:function(){var t=this;setTimeout((function(){t.$refs.tip.showTip()}),500)},methods:Object(c["a"])({tip:function(){this.$refs.tip.showTip(),++this.key.key,++this.key.key1,console.log(this.key1),this.setKey(this.key)}},Object(j["c"])({setKey:"SET_KEY"}))},S=P,$=(n("e104"),Object(h["a"])(S,i,o,!1,null,"1caf028b",null)),A=$.exports,L={data:function(){return{isPath:!1}},components:{MainTabBar:A},activated:function(){console.log("kk")},mounted:function(){console.log("ll")},watch:{$route:function(t,e){this.isPath="/song"==t.path,console.log("/song"==t.path)}},methods:{}},B=L,N=Object(h["a"])(B,a,r,!1,null,null,null);e["default"]=N.exports},da0a:function(t,e,n){"use strict";var a=n("2ffc"),r=n.n(a);r.a},e104:function(t,e,n){"use strict";var a=n("c29e"),r=n.n(a);r.a},ea95:function(t,e,n){"use strict";var a=n("8da0"),r=n.n(a);r.a},ed2c:function(t,e,n){}});
//# sourceMappingURL=app.37dd4980.js.map
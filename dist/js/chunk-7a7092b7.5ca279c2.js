(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a7092b7"],{"10f9":function(t,s,a){"use strict";var e=a("6578"),n=a.n(e);n.a},5899:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,s,a){var e=a("1d80"),n=a("5899"),i="["+n+"]",r=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(s){var a=String(e(s));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},5912:function(t,s,a){},6578:function(t,s,a){},7156:function(t,s,a){var e=a("861d"),n=a("d2bb");t.exports=function(t,s,a){var i,r;return n&&"function"==typeof(i=s.constructor)&&i!==a&&e(r=i.prototype)&&r!==a.prototype&&n(t,r),t}},"86ab":function(t,s,a){"use strict";var e=a("5912"),n=a.n(e);n.a},a9e3:function(t,s,a){"use strict";var e=a("83ab"),n=a("da84"),i=a("94ca"),r=a("6eeb"),c=a("5135"),o=a("c6b6"),l=a("7156"),u=a("c04e"),p=a("d039"),v=a("7c73"),d=a("241c").f,f=a("06cf").f,m=a("9bf2").f,_=a("58a8").trim,b="Number",g=n[b],C=g.prototype,y=o(v(C))==b,N=function(t){var s,a,e,n,i,r,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=_(l),s=l.charCodeAt(0),43===s||45===s){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(l.charCodeAt(1)){case 66:case 98:e=2,n=49;break;case 79:case 111:e=8,n=55;break;default:return+l}for(i=l.slice(2),r=i.length,c=0;c<r;c++)if(o=i.charCodeAt(c),o<48||o>n)return NaN;return parseInt(i,e)}return+l};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var I,h=function(t){var s=arguments.length<1?0:t,a=this;return a instanceof h&&(y?p((function(){C.valueOf.call(a)})):o(a)!=b)?l(new g(N(s)),a,h):N(s)},k=e?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)c(g,I=k[E])&&!c(h,I)&&m(h,I,f(g,I));h.prototype=C,C.constructor=h,r(n,b,h)}},aa65:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"content",style:{background:t.background}},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[a("gbnav",[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.title))]),a("span",{staticClass:"description"},[t._v("编辑推荐:"+t._s(t.description))])]),a("div",{staticClass:"right"},[a("span",[a("i",{staticClass:"iconserch iconfont"})]),a("span",[a("i",{staticClass:"iconcaidan1 iconfont"})])])])],1),a("div",{staticClass:"title-content"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],attrs:{alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(t.name)+" "),t.touImg?a("div",{staticClass:"tou"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.touImg,expression:"touImg"}],attrs:{alt:""}}),t.nickname?a("span",[t._v(t._s(t.nickname)+">")]):t._e(),a("div",{staticClass:"description description1"},[t._v(" "+t._s(t.description)+" ")])]):t._e()])]),a("div",{staticClass:"downlond"},[a("div",{staticClass:"comments"},[t._v("评论 "),a("span",[t._v(t._s(t.comment))])]),a("div",{staticClass:"comments"},[t._v("分享 "),a("span",[t._v(t._s(t.share))])]),a("div",{staticClass:"comments"},[t._v("下载")]),a("div",{staticClass:"comments"},[t._v("多选")])])])]),a("div",{staticClass:"play-list"},[a("div",{staticClass:"play-title"},[a("i",[t._v("播放")]),a("span",[t._v("播放全部")]),t.many?a("span",{staticClass:"total"},[t._v("(共"+t._s(t.many)+"首)")]):t._e(),t.subscribedCount?a("span",{staticClass:"star"},[t._v("+收藏("+t._s(t.subscribedCount)+")")]):t._e()])])])},n=[],i=(a("a9e3"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav"},[a("i",{staticClass:"iconback iconfont",on:{click:t.backClick}}),t._t("default")],2)}),r=[],c={methods:{backClick:function(){this.$router.back()}}},o=c,l=(a("86ab"),a("2877")),u=Object(l["a"])(o,i,r,!1,null,null,null),p=u.exports,v={props:{songDetailId:{type:Number},imgUrl:{type:String},title:{type:String},name:{type:String},background:{type:String},description:{type:String},touImg:{type:String},nickname:{type:String,default:function(){return"网易云"}},many:{type:Number},subscribedCount:{type:Number},comment:{type:Number},share:{type:Number}},components:{Gbnav:p}},d=v,f=(a("10f9"),Object(l["a"])(d,e,n,!1,null,"3aa4d2e2",null));s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-7a7092b7.5ca279c2.js.map
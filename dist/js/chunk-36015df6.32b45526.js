(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36015df6"],{"10f9":function(t,n,a){"use strict";var e=a("6578"),i=a.n(e);i.a},1273:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("transition",{attrs:{name:"slide"}},[a("div",[a("find-song-detail",{attrs:{songDetailId:t.songDetailId,imgUrl:t.songDetail.coverImgUrl,title:t.title,name:t.songDetail.name,background:t.background,description:t.songDetail.description,touImg:t.songDetail.creator?t.songDetail.creator.avatarUrl:t.songDetail.album?t.songDetail.album.artist.picUrl:"",nickname:t.songDetail.creator?t.songDetail.creator.nickname:t.songDetail.album?t.songDetail.album.artist.name:"",many:t.songDetail.trackCount?t.songDetail.trackCount:t.songDetail.album?t.songDetail.album.size:0,subscribedCount:t.songDetail.subscribedCount,comment:t.songDetail.commentCount,share:t.songDetail.shareCount}}),t._l(t.songDetail.tracks,(function(n,e){return t.isSq?a("music-list",{key:e,attrs:{maxbr:t.isSq[e],num:e+1,songName:n.name,arName:n.ar,alName:n.al.name,alia:n.alia,songId:n.id}}):t._e()}))],2)])},i=[],s=(a("d81d"),a("2909")),r=(a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0"),a("06c5"));function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(r["a"])(t))){var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e,i,s=!0,o=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return s=t.done,t},e:function(t){o=!0,i=t},f:function(){try{s||null==e["return"]||e["return"]()}finally{if(o)throw i}}}}var c=a("aa65"),l=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("div",{staticClass:"list-item"},[a("span",{staticClass:"num"},[t._v(t._s(t.num))]),a("div",{staticClass:"song-detail"},[a("div",{staticClass:"song-name"},[t._v(t._s(t.songName)+" "),t.alia.length?a("span",[t._v("("+t._s(t.alia)+")")]):t._e()]),t._l(t.arName,(function(n){return a("div",{staticClass:"creator"},[t.maxbr?a("span",{staticClass:"maxbr"},[t._v("SQ")]):t._e(),t._v(t._s(n.name)+" - "+t._s(t.alName))])}))],2),t._m(0)])])},u=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"more"},[a("i",{staticClass:"iconcaidan1 iconfont"})])}],m=(a("a9e3"),{data:{maxbr:[0]},props:{num:{type:Number},songName:{type:String},arName:{type:Array},alName:{type:String},maxbr:{type:Boolean},songID:{type:Number},alia:{type:String}},created:function(){},activated:function(){this.isSQ()},methods:{}}),d=m,g=(a("87eb"),a("2877")),v=Object(g["a"])(d,l,u,!1,null,"c9da9190",null),f=v.exports,b=a("2b9f"),p=(a("2f62"),a("aaf6")),_=a.n(p),h={data:function(){return{songDetailId:0,songDetail:[],songPeivileges:[],title:"",background:"",img:a("cf05"),isSq:{},i:[]}},activated:function(){var t=this,n=this.$route.params.songDetailId;this.songDetailId=n,n&&(this.title="歌单",Object(b["d"])(this.songDetailId).then((function(n){var a=n.data;if(200===a.code){t.songDetail=a.playlist,t.songPeivileges=a.privileges,t._isSQ();var e=_()(t.songDetail.coverImgUrl,{ignore:["rgb(255,255,255)","rgb(0,0,0)"]});e.then((function(n){t.background=n[0].color}))}})).catch((function(t){console.log(t)})))},components:{FindSongDetail:c["default"],MusicList:f},methods:{_isSQ:function(){var t,n,a=[],e=o(this.songPeivileges);try{for(e.s();!(n=e.n()).done;){var i=n.value;a.push(i.maxbr)}}catch(r){e.e(r)}finally{e.f()}this.isSq=a.map((function(t){return t>5e5})),(t=console).log.apply(t,Object(s["a"])(this.isSq))}}},y=h,C=(a("b841"),Object(g["a"])(y,e,i,!1,null,"07316dc0",null));n["default"]=C.exports},"41b4":function(t,n,a){},5912:function(t,n,a){},6578:function(t,n,a){},"86ab":function(t,n,a){"use strict";var e=a("5912"),i=a.n(e);i.a},"87eb":function(t,n,a){"use strict";var e=a("b2aa"),i=a.n(e);i.a},aa65:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"content",style:{background:t.background}},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[a("gbnav",[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.title))]),a("span",{staticClass:"description"},[t._v("编辑推荐:"+t._s(t.description))])]),a("div",{staticClass:"right"},[a("span",[a("i",{staticClass:"iconserch iconfont"})]),a("span",[a("i",{staticClass:"iconcaidan1 iconfont"})])])])],1),a("div",{staticClass:"title-content"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],attrs:{alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(t.name)+" "),t.touImg?a("div",{staticClass:"tou"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.touImg,expression:"touImg"}],attrs:{alt:""}}),t.nickname?a("span",[t._v(t._s(t.nickname)+">")]):t._e(),a("div",{staticClass:"description description1"},[t._v(" "+t._s(t.description)+" ")])]):t._e()])]),a("div",{staticClass:"downlond"},[a("div",{staticClass:"comments"},[t._v("评论 "),a("span",[t._v(t._s(t.comment))])]),a("div",{staticClass:"comments"},[t._v("分享 "),a("span",[t._v(t._s(t.share))])]),a("div",{staticClass:"comments"},[t._v("下载")]),a("div",{staticClass:"comments"},[t._v("多选")])])])]),a("div",{staticClass:"play-list"},[a("div",{staticClass:"play-title"},[a("i",[t._v("播放")]),a("span",[t._v("播放全部")]),t.many?a("span",{staticClass:"total"},[t._v("(共"+t._s(t.many)+"首)")]):t._e(),t.subscribedCount?a("span",{staticClass:"star"},[t._v("+收藏("+t._s(t.subscribedCount)+")")]):t._e()])])])},i=[],s=(a("a9e3"),function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"nav"},[a("i",{staticClass:"iconback iconfont",on:{click:t.backClick}}),t._t("default")],2)}),r=[],o={methods:{backClick:function(){this.$router.back()}}},c=o,l=(a("86ab"),a("2877")),u=Object(l["a"])(c,s,r,!1,null,null,null),m=u.exports,d={props:{songDetailId:{type:Number},imgUrl:{type:String},title:{type:String},name:{type:String},background:{type:String},description:{type:String},touImg:{type:String},nickname:{type:String,default:function(){return"网易云"}},many:{type:Number},subscribedCount:{type:Number},comment:{type:Number},share:{type:Number}},components:{Gbnav:m}},g=d,v=(a("10f9"),Object(l["a"])(g,e,i,!1,null,"3aa4d2e2",null));n["default"]=v.exports},aaf6:function(t,n,a){!function(n,a){t.exports=a()}(0,(function(){var t=function(t,n){void 0===n&&(n=1);var a=new Image;return t.startsWith("data")||(a.crossOrigin="Anonymous"),new Promise((function(e,i){a.onload=function(){var t=a.width*n,i=a.height*n,s=function(t,n){var a=document.createElement("canvas");return a.setAttribute("width",t),a.setAttribute("height",n),a.getContext("2d")}(t,i);s.drawImage(a,0,0,t,i);var r=s.getImageData(0,0,t,i);e(r.data)};var s=function(){return i(new Error("An error occurred attempting to load image"))};a.onerror=s,a.onabort=s,a.src=t}))},n={ignore:[],scale:1};return function(a,e){void 0===e&&(e=n);try{var i=(e=Object.assign({},n,e)).ignore,s=e.scale;return(s>1||s<=0)&&console.warn("You set scale to "+s+", which isn't between 0-1. This is either pointless (> 1) or a no-op (≤ 0)"),Promise.resolve(t(a,s)).then((function(t){return function(t,n){for(var a={},e=0;e<t.length;e+=4){var i=t[e+3];if(0!==i){var s=Array.from(t.subarray(e,e+3));if(-1===s.indexOf(void 0)){var r=i&&255!==i?"rgba("+s.concat([i]).join(",")+")":"rgb("+s.join(",")+")";-1===n.indexOf(r)&&(a[r]?a[r].count++:a[r]={color:r,count:1})}}}return Object.values(a).sort((function(t,n){return n.count-t.count}))}(t,i)}))}catch(t){return Promise.reject(t)}}}))},b2aa:function(t,n,a){},b841:function(t,n,a){"use strict";var e=a("41b4"),i=a.n(e);i.a},cf05:function(t,n,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d81d:function(t,n,a){"use strict";var e=a("23e7"),i=a("b727").map,s=a("1dde"),r=a("ae40"),o=s("map"),c=r("map");e({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-36015df6.32b45526.js.map
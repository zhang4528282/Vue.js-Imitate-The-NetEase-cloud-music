(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b915c822"],{"00a5":function(t,e,n){"use strict";var i=n("2563"),s=n.n(i);s.a},"14d1":function(t,e,n){},"21ca":function(t,e,n){"use strict";var i=n("e034"),s=n.n(i);s.a},"232f":function(t,e,n){},2563:function(t,e,n){},"35b2":function(t,e,n){"use strict";var i=n("c307"),s=n.n(i);s.a},"498b":function(t,e,n){},6053:function(t,e,n){},"6bd5":function(t,e,n){"use strict";var i=n("76df"),s=n.n(i);s.a},"76df":function(t,e,n){},"79bd":function(t,e,n){"use strict";var i=n("498b"),s=n.n(i);s.a},9455:function(t,e,n){"use strict";var i=n("232f"),s=n.n(i);s.a},"9f9b":function(t,e,n){"use strict";var i=n("14d1"),s=n.n(i);s.a},b14c:function(t,e,n){"use strict";var i=n("c3d7"),s=n.n(i);s.a},c307:function(t,e,n){},c3d7:function(t,e,n){},d344:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"find"}},[n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[n("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{height:"5rem"}}),n("find-swiper",{attrs:{banners:t.banners},on:{loadImg:t.swiperImgLoad}}),n("find-nav"),n("recommend-songs",{key:t.key}),n("new-c-d",{key:t.key1})],1)],1)},s=[],a=n("6b75");function o(t){if(Array.isArray(t))return Object(a["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function r(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var c=n("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||r(t)||Object(c["a"])(t)||l()}var d=n("5530"),m=n("bc3a"),h=n.n(m);function f(t,e,n){var i=h.a.create({baseURL:"http://59.110.124.156:3000",timeout:5e3});return i(t)}function p(t){return f({url:"/personalized",params:{limit:t}})}var v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==Object.keys(t.banners).length?n("swiper",{staticClass:"find-swiper"},t._l(t.banners,(function(e){return n("swiper-item",{staticClass:"find-swiper-item"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:e.pic,alt:""},on:{load:t.loadImg}}),n("span",{staticClass:"title",style:{backgroundColor:e.titleColor}},[t._v(t._s(e.typeTitle))])])])})),1):t._e()},g=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},y=[],b=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),3e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}},destroyed:function(){clearTimeout(this.playTimer)}}),C=b,_=(n("9455"),n("2877")),x=Object(_["a"])(C,w,y,!1,null,"08624ad1",null),I=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},T=[],k={name:"Slide"},D=k,N=(n("b14c"),Object(_["a"])(D,S,T,!1,null,"4935a4a7",null)),j=N.exports,$={components:{Swiper:I,SwiperItem:j,isLoad:!1},props:{banners:{type:Array,default:function(){return[]}}},methods:{loadImg:function(){this.isLoad||(this.$emit("loadImg"),this.isLoad=!0)}}},O=$,E=(n("9f9b"),Object(_["a"])(O,v,g,!1,null,"c7b6bdd2",null)),W=E.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"find-icon"},t._l(t.findIcon,(function(e){return n("find-icon",{attrs:{icon:e}},["iconrili1"===e.url?n("span",{staticClass:"today"},[t._v(t._s(t.data))]):t._e()])})),1)},L=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon"},[n("div",{staticClass:"icon-item"},[n("i",{staticClass:"iconfont",class:t.icon.url}),t._t("default")],2),n("span",{staticClass:"icon-text"},[t._v(t._s(t.icon.text))])])},R=[],M={props:{icon:{type:[Object,Array],default:function(){return[{}]}}}},X=M,A=(n("35b2"),Object(_["a"])(X,P,R,!1,null,"3d970b46",null)),q=A.exports,F={data:function(){return{findIcon:[{text:"每日推荐",url:"iconrili1"},{text:"歌单",url:"icongedan"},{text:"排行榜",url:"iconpaihangbang"},{text:"电台",url:"iconyule_yinlediantai"}],data:null}},components:{FindIcon:q},mounted:function(){this.getToday()},methods:{getToday:function(){var t=new Date;this.data=t.getDate()}}},z=F,B=(n("21ca"),Object(_["a"])(z,U,L,!1,null,"08213655",null)),J=B.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-songs"},[t._m(0),n("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),n("div",{staticClass:"recommends-content"},t._l(t.recommendsongs,(function(t){return n("recommend-songs-item",{attrs:{picUrl:t.picUrl,name:t.name,playCount:t.playCount,songDetailId:t.id}})})),1)],1)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"recommend"},[t._v("推荐歌单")]),n("div",{staticClass:"square"},[t._v("歌单广场")])])}],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-item",on:{click:function(e){return t.SongDetail(t.idx)}}},[n("div",{staticClass:"item-content"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.picUrl,expression:"picUrl"}],attrs:{alt:""}}),n("span",{staticClass:"song-text"},[t._v(t._s(t.name))]),t.playCount?n("span",{staticClass:"play-number"},[n("i",{staticClass:"iconbofang icon"}),t._v(" "+t._s(t._f("setPlayCount")(t.playCount)))]):t._e()])])},Q=[],V={data:function(){return{}},props:{picUrl:{type:String},name:{typr:String},playCount:{type:Number},songDetailId:{type:Number},idx:{type:String},newSongDeatilId:{type:Number}},filters:{setPlayCount:function(t){return t?(t>1e4&&(t=Math.floor(t/1e4)+"万"),t):""}},methods:{SongDetail:function(t){if(!t){if(this.songDetailId)return void this.$router.push({name:"song",params:{songDetailId:this.songDetailId}});if(this.newSongDeatilId)return void this.$router.push({name:"song",params:{newSongDeatilId:this.newSongDeatilId}})}}}},Y=V,Z=(n("f6a2"),Object(_["a"])(Y,H,Q,!1,null,"3ee92278",null)),tt=Z.exports,et=n("1bac");n("fb6a");function nt(t,e){var n,i,s=t.slice(0),a=t.length,o=a-e;while(a-- >=o)i=Math.floor(a*Math.random()),n=s[i],s[i]=s[a],s[a]=n;return s.slice(o)}var it={data:function(){return{limit:10,recommendsongs:[],loading:!0}},components:{RecommendSongsItem:tt,PageLoading:et["a"]},created:function(){var t=this;p(this.limit).then((function(e){t.recommendsongs=nt(e.data.result,6),t.loading=!1,console.log(t.recommendsongs)}))}},st=it,at=(n("6bd5"),Object(_["a"])(st,K,G,!1,null,"4bed2d84",null)),ot=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-cd"},[n("div",{staticClass:"cd-title"},[n("div",{staticClass:"cd-left"},[n("span",{class:{active:"newsong"===t.cur},on:{click:function(e){t.cur="newsong"}}},[t._v("新碟")]),n("i",[t._v("|")]),n("span",{class:{active:"newcd"===t.cur},on:{click:function(e){t.cur="newcd"}}},[t._v("新歌")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"newsong"===t.cur,expression:"cur ==='newsong'"}],staticClass:"cd-square"},[t._v("更多新碟")]),n("div",{directives:[{name:"show",rawName:"v-show",value:"newcd"===t.cur,expression:"cur ==='newcd'"}],staticClass:"cd-square"},[t._v("新歌推荐")])]),n("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[n("div",{directives:[{name:"show",rawName:"v-show",value:"newsong"===t.cur,expression:"cur ==='newsong'"}],staticClass:"newsong"},t._l(t.newCDs,(function(t,e){return n("recommend-songs-item",{key:e,attrs:{picUrl:t.picUrl,name:t.name,playCount:0,newSongDeatilId:t.id}})})),1),n("div",{directives:[{name:"show",rawName:"v-show",value:"newcd"===t.cur,expression:"cur ==='newcd'"}],staticClass:"newsong"},t._l(t.newSongs,(function(t,e){return n("recommend-songs-item",{key:e,attrs:{picUrl:t.album.blurPicUrl,name:t.album.name,playCount:0}})})),1)])],1)},ct=[],lt=n("1ae0"),ut={data:function(){return{cur:"newsong",limit:10,newCDs:[],type:[0,7,96,8,16],type1:0,newSongs:[],loading:!0}},components:{RecommendSongsItem:tt,PageLoading:et["a"]},created:function(){var t=this;lt["a"].getNewCDs(this.limit).then((function(e){200===e.data.code&&(t.newCDs=nt(e.data.albums,3),t.loading=!1)})),this.type1=nt(this.type,1),console.log(this.type1[0]),lt["a"].getNewSongs(this.type1[0]).then((function(e){var n;(console.log(e),200===e.data.code)&&((n=t.newSongs).push.apply(n,u(e.data.data)),t.newSongs=nt(t.newSongs,3),t.loading=!1,console.log(t.newSongs))}))}},dt=ut,mt=(n("00a5"),Object(_["a"])(dt,rt,ct,!1,null,"e052a836",null)),ht=mt.exports,ft=n("2f62"),pt=n("5d17"),vt={name:"Find",data:function(){return{type:0,banners:[],loading:!0,menuKey:1,menuTree:[]}},computed:Object(d["a"])({},Object(ft["b"])(["key","key1"])),components:{FindSwiper:W,FindNav:J,RecommendSongs:ot,PageLoading:et["a"],NewCD:ht,Scroll:pt["a"]},created:function(){var t=this;this.type=1,lt["a"].getSwiper(this.type).then((function(e){var n;(n=t.banners).push.apply(n,u(e.data.banners)),t.loading=!1,console.log(e.data.banners)}))},activated:function(){console.log(this.$refs.scroll.scroll),this.$refs.scroll.refresh()},methods:{contentScroll:function(){},swiperImgLoad:function(){this.$refs.scroll.refresh(),console.log("kk")},itclick:function(){console.log(this.key1)}},watch:{menuTree:function(){}}},gt=vt,wt=(n("79bd"),Object(_["a"])(gt,i,s,!1,null,"7d75dcb4",null));e["default"]=wt.exports},e034:function(t,e,n){},f6a2:function(t,e,n){"use strict";var i=n("6053"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-b915c822.e2104b02.js.map
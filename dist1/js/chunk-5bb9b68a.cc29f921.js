(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb9b68a"],{"166a":function(t,s,e){"use strict";var n=e("200c"),a=e.n(n);a.a},"200c":function(t,s,e){},2493:function(t,s,e){"use strict";var n=e("9ac3"),a=e.n(n);a.a},"686b":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"charts"},[e("gbnav",{staticClass:"iconfont",attrs:{flag:!0}},[e("span",[t._v("排行榜")])]),e("page-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{height:"5rem"}}),e("scroll",{ref:"scroll",staticClass:"content",class:{height5:t.isPlayList},attrs:{"probe-type":3},on:{scroll:t.contentscroll}},[e("div",{staticClass:"recommend-songs"},[e("div",{staticClass:"title"},[e("div",{staticClass:"recommend"},[t._v("官方榜")])]),e("div",{staticClass:"recommends-content recommend-charts"},t._l(t.authoritySongs,(function(s,n){return e("chart-top",{key:n,staticClass:"text",attrs:{picUrl:s.coverImgUrl,name:s.name,updataTime:s.updateFrequency,tracks:s.tracks,songDetailId:s.id}},[t._v("> ")])})),1)]),e("div",{staticClass:"recommend-songs"},[e("div",{staticClass:"title"},[e("div",{staticClass:"recommend"},[t._v("推荐榜")])]),e("div",{staticClass:"recommends-content"},t._l(t.recommendsongs,(function(t,s){return e("recommend-songs-item",{key:s,staticClass:"text",attrs:{picUrl:t.coverImgUrl,name:t.name,updataTime:t.updateFrequency,songDetailId:t.id}})})),1)]),e("div",{staticClass:"recommend-songs"},[e("div",{staticClass:"title"},[e("div",{staticClass:"recommend"},[t._v("全球榜")])]),e("div",{staticClass:"recommends-content"},t._l(t.globalSongs,(function(t,s){return e("recommend-songs-item",{key:s,staticClass:"text",attrs:{picUrl:t.coverImgUrl,name:t.name,updataTime:t.updateFrequency,songDetailId:t.id}})})),1)])])],1)},a=[],o=(e("a434"),e("5530")),i=e("01fb"),c=e("0759"),l=e("1ae0"),r=e("1bac"),d=e("5d17"),m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"recommend-item",on:{click:function(s){return t.SongDetail(t.idx)}}},[e("div",{staticClass:"item-content"},[e("div",{staticClass:"box-shadow"}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.picUrl,expression:"picUrl"}],attrs:{alt:""}}),e("div",{staticClass:"box-shadow1"}),e("i",[t._v(t._s(t.num))]),e("div",{staticClass:"song-text"},t._l(t.tracks,(function(s,n){return e("span",[t._v(" "+t._s(n+1+s.first+"-"+s.second))])})),0),t.updataTime?e("span",{staticClass:"updata-time"},[t._v(" "+t._s(t.updataTime))]):t._e()])])},g=[],u=(e("a9e3"),{data:function(){return{}},props:{picUrl:{type:String},name:{typr:String},updataTime:{type:String},songDetailId:{type:Number},idx:{type:String},newSongDeatilId:{type:Number},isSong:{type:Boolean},tracks:{type:Array},num:{type:Number}},filters:{setPlayCount:function(t){return t?(t>1e4&&(t=Math.floor(t/1e4)+"万"),t):""}},methods:{SongDetail:function(t){if(!t){if(this.songDetailId)return this.$router.push({name:"songsdetail",params:{songDetailId:this.songDetailId}}),void console.log(this.tracks);this.isSong&&this.$emit("startPlay")}}}}),p=u,v=(e("166a"),e("2877")),f=Object(v["a"])(p,m,g,!1,null,"5cf36918",null),h=f.exports,y=e("2f62"),b={data:function(){return{authoritySongs:[],recommendsongs:[],loading:!0,globalSongs:[]}},computed:Object(o["a"])({},Object(y["c"])({playList:"PLAY_LIST"}),{isPlayList:function(){return!!this.playList.length}}),components:{Gbnav:i["a"],RecommendSongsItem:c["a"],PageLoading:r["a"],ChartTop:h,Scroll:d["a"]},created:function(){this._getTopListInfo()},methods:{_getTopListInfo:function(){var t=this;l["a"].getTopList().then((function(s){var e=s.data;console.log(s),200===e.code&&(t.recommendsongs=e.list.splice(4,6),console.log(t.recommendsongs),t.recommendsongs.splice(4,1,e.list[17]),console.log(t.recommendsongs),t.globalSongs=e.list.splice(6,6),t.globalSongs.splice(1,1,e.list[6]),t.globalSongs.splice(5,1,e.list[7]),console.log(t.globalSongs),t.authoritySongs=e.list.splice(0,4),console.log(t.authoritySongs),t.loading=!1)}))},_getIdxInfo:function(){l["a"].getTopList().then((function(t){t.data;console.log(t)}))},contentscroll:function(){}}},C=b,_=(e("2493"),Object(v["a"])(C,n,a,!1,null,"44ac4fb6",null));s["default"]=_.exports},"9ac3":function(t,s,e){}}]);
//# sourceMappingURL=chunk-5bb9b68a.cc29f921.js.map
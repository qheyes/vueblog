(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26f85c1e"],{"848f":function(t,i,e){"use strict";var n=e("b52c"),a=e.n(n);a.a},ac25:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"atc-info radius-1"},[e("Bread",{attrs:{title:"文章详情"}}),e("div",{staticClass:"info-tit"},[e("h1",{domProps:{textContent:t._s(t.item.title)}}),e("ul",{staticClass:"d-flex border-bottom"},[e("li",[e("i",{staticClass:"iconfont icon-zuozhe"}),e("span",[t._v(t._s(t.item.author.username))])]),e("li",[e("i",{staticClass:"iconfont icon-guanzhu"}),e("span",[t._v(t._s(t.item.clicks))])]),e("li",t._l(t.item.categories,(function(i){return e("div",{key:i._id,staticClass:"d-flex"},[e("i",{staticClass:"iconfont icon-biaoqian"}),e("span",[t._v(t._s(i.name))])])})),0),e("li",[e("i",{staticClass:"iconfont icon-piaoliusanicon-shijian"}),e("span",[t._v(t._s(t._f("date")(t.item.createdAt)))])])])]),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"body text-grey",staticStyle:{"line-height":"2"},domProps:{innerHTML:t._s(t.item.body)}})],1)},a=[],s=(e("96cf"),e("3b8d")),c={props:["id"],data:function(){return{item:{author:{username:""}}}},methods:{fetchItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var i,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=this.$route.params.id,t.next=3,this.$http.get("articles/".concat(i));case 3:e=t.sent,this.item=e.data;case 5:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()},activated:function(){var t=this.$loading;this.fetchItem(),t.close()}},r=c,o=(e("848f"),e("2877")),u=Object(o["a"])(r,n,a,!1,null,null,null);i["default"]=u.exports},b52c:function(t,i,e){}}]);
//# sourceMappingURL=chunk-26f85c1e.b9fc9df9.js.map
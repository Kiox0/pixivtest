(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a818c710"],{"0956":function(e,t,c){"use strict";c("b2c8")},"134f":function(e,t,c){e.exports=c.p+"img/down.e6522255.svg"},"25c7":function(e,t,c){e.exports=c.p+"img/推荐.7054ae47.svg"},2644:function(e,t,c){},"3b04":function(e,t,c){"use strict";var o=c("7a23"),r=c("dd0a"),n=c.n(r),a={class:"box"},s={class:"leftImg"},i={style:{float:"right"}};function u(e,t,c,r,u,l){return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",s,[Object(o["renderSlot"])(e.$slots,"img")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(c.text),1)]),null!=c.pushSrc?(Object(o["openBlock"])(),Object(o["createBlock"])("img",{key:0,onClick:t[1]||(t[1]=function(){return l.next_&&l.next_.apply(l,arguments)}),src:n.a,style:{float:"right"}})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",i,[Object(o["renderSlot"])(e.$slots,"text")])])])}var l={name:"navInfo",props:{leftImgSrc:String,text:String,pushSrc:String},data:function(){return{}},mounted:function(){},methods:{next_:function(){this.$router.push(this.pushSrc)}}};c("dede");l.render=u;t["a"]=l},"639a":function(e,t,c){"use strict";c("bdbd")},a11e:function(e,t,c){e.exports=c.p+"img/back.0e6ba73c.svg"},b2c8:function(e,t,c){},bdbd:function(e,t,c){},c313:function(e,t,c){"use strict";var o=c("7a23"),r=c("a11e"),n=c.n(r),a=Object(o["withScopeId"])("data-v-83ff62a2");Object(o["pushScopeId"])("data-v-83ff62a2");var s={class:"navback"},i={style:{height:"30px","margin-top":"20px","margin-left":"10px"}};Object(o["popScopeId"])();var u=a((function(e,t,c,r,a,u){return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("img",{style:{height:"30px"},onClick:t[1]||(t[1]=function(){return u.goBack&&u.goBack.apply(u,arguments)}),src:n.a,alt:""})])])])})),l={name:"top_back",data:function(){return{}},mounted:function(){},methods:{goBack:function(){this.$router.go(-1)}}};c("0956");l.render=u,l.__scopeId="data-v-83ff62a2";t["a"]=l},dc02:function(e,t,c){"use strict";c.r(t);c("b0c0"),c("d3b7"),c("25f0");var o=c("7a23"),r=c("f88b"),n=c.n(r),a=c("134f"),s=c.n(a),i=c("25c7"),u=c.n(i),l=Object(o["withScopeId"])("data-v-0e56b904");Object(o["pushScopeId"])("data-v-0e56b904");var d={class:"topImage"},b={style:{position:"relative"}},m={class:"userData"},p={class:"userName"},f={key:0,class:"textColor"},j=Object(o["createVNode"])("img",{style:{width:"20px"},src:n.a,alt:""},null,-1),O={class:"textColor"},g={id:"userComment",class:"Comment"},v=Object(o["createVNode"])("div",null,"查看更多",-1),h=Object(o["createVNode"])("img",{src:s.a,alt:""},null,-1),x=Object(o["createVNode"])("img",{src:u.a},null,-1),N={slot:"text"};Object(o["popScopeId"])();var k=l((function(e,t,c,r,n,a){var s=Object(o["resolveComponent"])("topback"),i=Object(o["resolveComponent"])("navInfo"),u=Object(o["resolveComponent"])("masonry");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(s),Object(o["createVNode"])("div",d,[Object(o["createVNode"])("img",{src:n.userUrl,alt:""},null,8,["src"])]),Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",m,[Object(o["createVNode"])("img",{class:"userimg",src:n.userUrl,alt:""},null,8,["src"]),Object(o["createVNode"])("div",p,Object(o["toDisplayString"])(n.userName),1),null!=n.userTwitter?(Object(o["openBlock"])(),Object(o["createBlock"])("div",f,[j,Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(n.userTwitter),1)])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",O,Object(o["toDisplayString"])(n.userFollow+"关注  "+n.userMyPixiv+"好P友"),1)])]),Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",{ref:"CommentText"},Object(o["toDisplayString"])(n.userComment),513)]),a.CB_?(Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:0,onClick:t[1]||(t[1]=function(){return a.clickCB&&a.clickCB.apply(a,arguments)}),style:{display:n.cb_falg?"none":""},class:"Commentbut"},[v,h],4)):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(i,{pushSrc:"/home",text:"其他画作"},{img:l((function(){return[x]})),text:l((function(){return[Object(o["createVNode"])("div",N,Object(o["toDisplayString"])(n.userIllusts)+"件作品",1)]})),_:1}),Object(o["createVNode"])(u,{vue_name:e.$options.name,type_:"member_illust",mode_:n.userid.toString(),no_page:!1},null,8,["vue_name","mode_"])])})),y=(c("5319"),c("ac1f"),c("c313")),V=c("3b04"),_=c("dd75"),C=c("5411"),S={name:"users",components:{topback:y["a"],masonry:_["a"],navInfo:V["a"]},data:function(){return{cb_falg:!1,userid:0,userdata:{},userUrl:"",userName:"",userFollow:0,userMyPixiv:0,userComment:"",userWebpage:"",userTwitter:"",textH:0,userIllusts:0}},computed:{CB_:function(){var e=!1;return this.textH>180&&(e=!0),e}},created:function(){var e=this;console.log(this.$store.state.refresh),this.userid=this.$route.params.id,Object(C["a"])("member",this.userid,0,!1).then((function(t){e.userdata=t,e.userUrl=t.user.profile_image_urls.medium.replace("i.pximg.net","i.pixiv.cat"),e.userFollow=t.profile.total_follow_users,e.userMyPixiv=t.profile.total_mypixiv_users,e.userName=t.user.name,e.userComment=t.user.comment,e.userWebpage=t.profile.webpage,e.userTwitter=t.profile.twitter_url,e.userIllusts=t.profile.total_illusts,console.log(e.userdata),setTimeout((function(){e.textH=e.$refs.CommentText.offsetHeight}),200)}))},mounted:function(){},methods:{clickCB:function(){document.getElementById("userComment").style.overflow="unset",document.getElementById("userComment").style.height="auto",this.cb_falg=!0}}};c("639a");S.render=k,S.__scopeId="data-v-0e56b904";t["default"]=S},dd0a:function(e,t,c){e.exports=c.p+"img/next.7eda2a83.svg"},dede:function(e,t,c){"use strict";c("2644")},f88b:function(e,t,c){e.exports=c.p+"img/twitter.bd461fd2.svg"}}]);
//# sourceMappingURL=chunk-a818c710.c25537e5.js.map
webpackJsonp([1],{"/wAz":function(t,e){},0:function(t,e){},"17kY":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAIAAAAI7H7bAAAFKElEQVR4nO3dQW4bSRAAQdHw/7+sPfvSWLST5Roq4ipQHBFM9KFUM6/v7+8v4O/8+tcXAJ9ASBAQEgSEBAEhQUBIEBASBIQEgd+Hn71er7HryB0GzfnfNfled+6ucPJV+53/dcGJBAEhQUBIEBASBIQEASFBQEgQEBIETgPZgyV7tXcDviXTyTufOgl99Dfqy4kECSFBQEgQEBIEhAQBIUFASBAQEgQuB7IHk/und/ZPJ/d/hpMe8Wk4kSAgJAgICQJCgoCQICAkCAgJAkKCQD+Q3e9uHpePBfNd13xfmP/PiQQBIUFASBAQEgSEBAEhQUBIEBASBH7iQHb/M2SX3Jd4/yrxHk4kCAgJAkKCgJAgICQICAkCQoKAkCDQD2T3b1xOzjQnnzyb/11LHkq7/xv15USChJAgICQICAkCQoKAkCAgJAgICQKXA9lH705O7p/m77XkVblHf6O+nEiQEBIEhAQBIUFASBAQEgSEBAEhQeD1iPXD1uS66P5J6MH+K9zDiQQBIUFASBAQEgSEBAEhQUBIEBASBB4wkM3np/llTM5q7yyZCy/5DN/xaTiRICAkCAgJAkKCgJAgICQICAkCQoLAaSC7ZJP0zqeOcQ/uLn7/B3Vn+HvoRIKAkCAgJAgICQJCgoCQICAkCAgJApfPkL2zZIo3OQldsjz76KlrPmh+x1a4EwkCQoKAkCAgJAgICQJCgoCQICAkCPQD2f17tfky5p27i3/0AnJuz1NunUgQEBIEhAQBIUFASBAQEgSEBAEhQeA0kF1yT93JEeTkMub+meZ+e5ZnnUgQEBIEhAQBIUFASBAQEgSEBAEhQeBjnyG7RD6r3b9KvOQuzcOzWicSBIQEASFBQEgQEBIEhAQBIUFASBC4HMjuvwXukkHznR84q51kQxaWEhIEhAQBIUFASBAQEgSEBAEhQeA0kO3fbMeq46M9ela7ZI7/jk/DiQQBIUFASBAQEgSEBAEhQUBIEBASBPqB7JJlzDtLJoYHS5ZMl9jz8TqRICAkCAgJAkKCgJAgICQICAkCQoLA78PP9j/ydcllHEzOoJcsBXuGLHBJSBAQEgSEBAEhQUBIEBASBIQEgdNA9mD/3XHvfOrF38n/5Mnn8A7/O4ETCQJCgoCQICAkCAgJAkKCgJAgICQIXA5k83lc/qqD/ZukB0bhf/8L81d9OZEgISQICAkCQoKAkCAgJAgICQJCgsDlQPZOPllbMlq98/Sd0Nb+74ZbFsPbCQkCQoKAkCAgJAgICQJCgoCQIPDaP6rLffCTTFuTf3J+GXdsyMK/JCQICAkCQoKAkCAgJAgICQJCgsBpQ/bR+6eHydqSJ5keTN58eNLkQ2mHOZEgICQICAkCQoKAkCAgJAgICQJCgsDoM2Rzd+POJRuXP3DldnJ5dnio7USCgJAgICQICAkCQoKAkCAgJAgICQL9M2SHn93Z/sJ8VPfo2yPfWTLvHuZEgoCQICAkCAgJAkKCgJAgICQICAkC/UD20ZYMSSc9emt1z121nUgQEBIEhAQBIUFASBAQEgSEBAEhQcBA9g+Tt/Zdspo6OdN8+tT1wIkEASFBQEgQEBIEhAQBIUFASBAQEgT6gez+ndDckjsMDz81dcN73XnHB+VEgoCQICAkCAgJAkKCgJAgICQICAkClwPZRywtXth/y+LJmeaSJ+pOur4MJxIEhAQBIUFASBAQEgSEBAEhQUBIEHgtGYTBozmRICAkCAgJAkKCgJAgICQICAkCQoKAkCDwH+5iLUU2TSqWAAAAAElFTkSuQmCC"},"21Jw":function(t,e){},"3wwv":function(t,e){},"4W6u":function(t,e){},Bzy4:function(t,e){},"C+kd":function(t,e){},ETNL:function(t,e){},FW5l:function(t,e){},GI30:function(t,e){},"I6/U":function(t,e){},MRod:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),n=s("Zrlr"),i=s.n(n),r=s("wxAW"),o=s.n(r),c=new(function(){function t(){i()(this,t),this.formatDate=this.formatDate.bind(this)}return o()(t,[{key:"formatDate",value:function(t){var e=new Date(t),s=(new Date).getTime()-e.getTime();return s<0?"":s/1e3<60?"刚刚":s/6e4<60?parseInt(s/6e4,10)+"分钟前":s/36e5<24?parseInt(s/36e5,10)+"小时前":s/864e5<31?parseInt(s/864e5,10)+"天前":s/2592e6<12?parseInt(s/2592e6,10)+"月前":parseInt(s/31536e6,10)+"年前"}},{key:"localItem",value:function(t,e){return 1===arguments.length?localStorage.getItem(t):localStorage.setItem(t,e)}},{key:"removeLocalItem",value:function(t){return t?localStorage.removeItem(t):localStorage.removeItem()}},{key:"switchTabs",value:function(t){switch(t){case"ask":return"问答";case"share":return"分享";case"job":return"招聘";case"good":return"精华";case"dev":return"测试";default:return}}}]),t}()),l={data:function(){return{activeIndex:"topics"}},props:{isLogin:Boolean},methods:{loginOut:function(){var t=this;this.$confirm("你确定要退出吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.dispatch("setUserInfo",{}),c.removeLocalItem("userKey"),t.$message({type:"success",message:"该用户已退出!"})}).catch(function(){t.$message({type:"info",message:"取消操作！"})})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-wrap"},[s("div",{staticClass:"header-logo",on:{click:function(e){t.$router.push("/")}}},[s("img",{attrs:{src:"https://cnodejs.org/public/images/cnodejs_light.svg"}})]),t._v(" "),s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal",router:!0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#fff"}},[s("el-menu-item",{attrs:{index:"/topics"}},[t._v("首页")]),t._v(" "),s("el-menu-item",{attrs:{index:"/messages"}},[t._v("消息")]),t._v(" "),t.isLogin?s("el-menu-item",{attrs:{index:"/"},on:{click:t.loginOut}},[t._v("退出")]):s("el-menu-item",{attrs:{index:"/login"}},[t._v("登陆")])],1)],1)},staticRenderFns:[]};var d=s("VU/8")(l,u,!1,function(t){s("FW5l")},"data-v-33493187",null).exports,p={name:"Top",data:function(){return{isShow:!1}},mounted:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;t.isShow=e>300}},methods:{toTop:function(){var t=setInterval(function(){var e=document.body.scrollTop||document.documentElement.scrollTop,s=e/4;0!=document.body.scrollTop?document.body.scrollTop-=s:document.documentElement.scrollTop-=s,0==e&&clearInterval(t)},30)}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],staticClass:"toTop",on:{click:this.toTop}},[e("i",{staticClass:"el-icon-caret-top"})])])},staticRenderFns:[]};var f=s("VU/8")(p,m,!1,function(t){s("Ndln")},"data-v-1632dab0",null).exports,v=(s("sfy8"),{name:"App",components:{"v-header":d,"v-top":f},computed:{userInfo:function(){return this.$store.state.userInfo}}}),h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",{attrs:{id:"header"}},[e("v-header",{attrs:{isLogin:this.userInfo.success}})],1),this._v(" "),e("router-view",{attrs:{id:"wrap"}})],1),this._v(" "),e("v-top")],1)},staticRenderFns:[]};var g=s("VU/8")(v,h,!1,function(t){s("Bzy4")},null,null).exports,_=s("/ocq"),C={name:"AsideUser",props:{userInfo:{type:Object,required:!0,default:function(){return{avatar_url:"",loginname:""}}},title:{type:String,default:"登陆用户"},isMe:{type:Boolean,default:!1}},methods:{toLogin:function(){this.$router.push("/login")}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aside-info"},[t.isMe?s("div",{staticClass:"overflowH"},[t.userInfo.success?s("div",{staticClass:"overflowH"},[s("header",{staticClass:"aside-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),s("el-row",{staticClass:"marTB10",attrs:{align:"middle",type:"flex"}},[s("img",{staticClass:"aside-info-img",attrs:{src:t.userInfo.avatar_url,title:t.userInfo.loginname}}),t._v(" "),s("router-link",{staticClass:"aside-info-title",attrs:{to:"/mine",title:t.userInfo.loginname}},[t._v("\n            "+t._s(t.userInfo.loginname)+"\n          ")])],1)],1):s("div",{staticClass:"overflowH"},[s("header",{staticClass:"aside-title"},[t._v("\n          Vue for cnode社区\n        ")]),t._v(" "),s("el-row",{staticClass:"marTB10",attrs:{justify:"center",align:"middle",type:"flex"}},[s("el-button",{attrs:{size:"small",type:"primary"},nativeOn:{click:function(e){return t.toLogin(e)}}},[t._v("\n              点击登陆\n            ")])],1)],1)]):s("div",{staticClass:"overflowH"},[s("header",{staticClass:"aside-title"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),s("el-row",{staticClass:"marTB10",attrs:{align:"middle",type:"flex"}},[s("img",{staticClass:"aside-info-img",attrs:{src:t.userInfo.avatar_url,title:t.userInfo.loginname}}),t._v(" "),s("router-link",{staticClass:"aside-info-title",attrs:{to:"/user/"+t.userInfo.loginname,title:t.userInfo.loginname}},[t._v("\n            "+t._s(t.userInfo.loginname)+"\n          ")])],1)],1)])},staticRenderFns:[]};var k=s("VU/8")(C,A,!1,function(t){s("nwS4")},"data-v-8e49c6a0",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aside-qr"},[e("header",{staticClass:"aside-title"},[this._v("\n    React for cnode 移动端\n  ")]),this._v(" "),e("el-row",{staticClass:"marTB10",attrs:{align:"middle",justify:"center",type:"flex"}},[e("img",{staticClass:"aside-qr-img",attrs:{src:s("17kY")}})])],1)},staticRenderFns:[]};var b=s("VU/8")({name:"AsideQR"},I,!1,function(t){s("3wwv")},"data-v-9cac059e",null).exports,y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aside-create"},[e("header",{staticClass:"aside-title"},[this._v("\n    新建话题\n  ")]),this._v(" "),e("el-row",{staticClass:"marTB10",attrs:{align:"middle",justify:"center",type:"flex"}},[e("el-button",{attrs:{type:"primary"},on:{click:this.toCreate}},[this._v("点击创建")])],1)],1)},staticRenderFns:[]};var Q={name:"Topics",data:function(){return{navbar:[{name:"全部",isActive:!0,tab:""},{name:"精华",isActive:!1,tab:"good"},{name:"分享",isActive:!1,tab:"share"},{name:"问答",isActive:!1,tab:"ask"},{name:"招聘",isActive:!1,tab:"job"},{name:"测试",isActive:!1,tab:"dev"}],data:[],tab:"",page:1}},created:function(){this.getTopics({})},methods:{changTopic:function(t){for(var e=this.navbar.length,s=0;s<e;s++)this.navbar[s].isActive=!1;this.navbar[t].isActive=!0,this.tab=this.navbar[t].tab,this.getTopics({tab:this.tab})},getTopics:function(t){var e=this;this.$api.getTopics(t).then(function(t){return JSON.parse(t)}).then(function(t){e.data=t.data})},formatDate:function(t){return c.formatDate(t)},switchTabs:function(t){return c.switchTabs(t)},handleCurrentChange:function(t){this.getTopics({tab:this.tab,page:t})}},computed:{userInfo:function(){return this.$store.state.userInfo}},components:{"v-aside-user":k,"v-aside-qr":b,"v-aside-create":s("VU/8")({name:"AsideCreate",computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{toCreate:function(){var t=this;this.userInfo.success?this.$router.push("/create"):this.$confirm("该操作需要用户登陆, 是否跳转登陆页?","提示",{confirmButtonText:"跳转",cancelButtonText:"取消",type:"warning"}).then(function(){t.$router.push("/login")}).catch(function(e){t.$message({type:"warning",message:"已取消跳转  ╮(╯﹏╰）╭"})})}}},y,!1,function(t){s("jtPi")},"data-v-637024c7",null).exports}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-main",{staticClass:"topics"},[s("ul",{staticClass:"topics-navbar"},t._l(t.navbar,function(e,a){return s("li",{key:a,class:{active:e.isActive},on:{click:function(e){t.changTopic(a)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),t._v(" "),s("ul",{staticClass:"topics-list"},t._l(t.data,function(e){return s("li",{key:e.id,staticClass:"topics-list-li"},[s("img",{staticClass:"topics-avatar",attrs:{src:e.author.avatar_url,title:e.author.loginname}}),t._v(" "),e.top?s("span",{staticClass:"topics-tabs topics-tabs-top"},[t._v("\n            置顶\n          ")]):s("span",{staticClass:"topics-tabs"},[t._v("\n            "+t._s(t.switchTabs(e.tab))+"\n          ")]),t._v(" "),s("div",{staticClass:"topics-list-content"},[s("router-link",{staticClass:"topics-title",attrs:{to:"/topics/"+e.id,title:e.title}},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),s("div",{staticClass:"topics-list-wrap"},[s("p",{staticClass:"topics-count"},[s("span",{attrs:{title:"回复数"}},[t._v(t._s(e.reply_count))]),t._v("\n                /\n                "),s("span",{attrs:{title:"点击数"}},[t._v(t._s(e.visit_count))])]),t._v(" "),s("span",{staticClass:"topics-time",attrs:{title:"最近回复时间"}},[t._v("\n                "+t._s(t.formatDate(e.last_reply_at))+"\n              ")])])],1)])})),t._v(" "),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{"current-page":t.page,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.page=e}}})],1)]),t._v(" "),s("el-aside",{staticClass:"hidden-sm-and-down",attrs:{width:"200px"}},[s("v-aside-user",{attrs:{isMe:!0,userInfo:t.userInfo}}),t._v(" "),s("v-aside-create"),t._v(" "),s("v-aside-qr")],1)],1)},staticRenderFns:[]};var E=s("VU/8")(Q,w,!1,function(t){s("21Jw")},"data-v-43509656",null).exports,B=s("mvHQ"),S=s.n(B),T=s("Dd8w"),U=s.n(T),J={name:"Login",data:function(){return{accessKey:"8f7f8189-47d2-42f1-a10f-52f9a9dcfbee"}},methods:{loginIn:function(){var t=this;this.$api.checkKey({accesstoken:""+this.accessKey}).then(function(e){var s=U()({},JSON.parse(e),{accesstoken:t.accessKey});t.$store.dispatch("setUserInfo",s),c.localItem("userKey",S()(s)),t.$message({type:"success",message:"恭喜你，登陆成功！"}),t.$router.push("/")}).catch(function(e){t.$message({type:"error",message:""+e})})},cleanInput:function(){this.accessKey=""}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-main",{staticClass:"login"},[s("section",{staticClass:"content content-hashead"},[s("el-row",[s("el-input",{attrs:{placeholder:"请输入Access Token"},model:{value:t.accessKey,callback:function(e){t.accessKey=e},expression:"accessKey"}})],1),t._v(" "),s("el-row",[s("el-button",{attrs:{type:"primary"},on:{click:t.loginIn}},[t._v("登陆")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:t.cleanInput}},[t._v("取消")])],1)],1)])},staticRenderFns:[]};var x=s("VU/8")(J,$,!1,function(t){s("MRod")},"data-v-ed7d347c",null).exports,D={name:"Article",data:function(){return{data:{},isSuccess:!0}},created:function(){var t=this.$store.state.userInfo;t.success?this.getArticle(this.$route.params.id,{accesstoken:t.accesstoken}):this.getArticle(this.$route.params.id,{})},components:{"v-aside-user":k,"v-aside-qr":b},computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{getArticle:function(t,e){var s=this,a=this.$loading({lock:!0,text:"正在加载...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$api.getArticle(t,e).then(function(t){return JSON.parse(t)}).then(function(t){s.isSuccess=!0,s.data=t.data,a.close()}).catch(function(t){s.isSuccess=!1,a.close()})},formatDate:function(t){return c.formatDate(t)},switchTabs:function(t){return c.switchTabs(t)},replyUps:function(t){var e=this,s=this.$store.state.userInfo,a=s.success,n=this.data.replies[t];if(a){if(n.author.loginname==s.loginname)return void this.$message.error("不能给自己点赞~！");this.$api.replyUps(n.id,{accesstoken:this.$store.state.userInfo.accesstoken}).then(function(t){return JSON.parse(t)}).then(function(t){if("up"===t.action)n.ups.push(s.id);else{var e=n.ups.forEach(function(t,e){if(t==s.id)return e});n.ups.splice(e,1)}n.is_uped=!n.is_uped}).catch(function(t){console.log(t)})}else this.$confirm("该操作需要用户登陆, 是否跳转登陆页?","提示",{confirmButtonText:"跳转",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push("/login")}).catch(function(t){e.$message({type:"warning",message:"已取消跳转  ╮(╯﹏╰）╭"})})},goBack:function(){this.$router.back()}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[t.isSuccess?[s("el-main",{staticClass:"article"},[s("header",{staticClass:"artilce-header"},[s("h1",[s("span",{staticClass:"article-tab"},[t._v(t._s(t.switchTabs(t.data.tab)))]),t._v(t._s(t.data.title))]),t._v(" "),s("p",[s("span",[t._v("创建时间："+t._s(t.formatDate(t.data.create_at)))]),t._v(" "),s("span",[t._v("最后回复时间："+t._s(t.formatDate(t.data.last_reply_at)))]),t._v(" "),s("span",[t._v("回复数/点击数："+t._s(t.data.reply_count)+"/"+t._s(t.data.visit_count))])])]),t._v(" "),s("article",{staticClass:"markdown-body article-content",domProps:{innerHTML:t._s(t.data.content)}}),t._v(" "),s("section",{staticClass:"article-replies-count"},[s("span",[t._v(t._s(t.data.reply_count))]),t._v("条评论")]),t._v(" "),s("section",{staticClass:"article-replies"},t._l(t.data.replies,function(e,a){return s("div",{key:e.id,staticClass:"article-replies-item"},[s("header",{staticClass:"article-replies-header"},[s("div",{staticClass:"article-replies-headerL"},[s("img",{staticClass:"reply-avatar",attrs:{src:e.author.avatar_url,alt:e.author.loginname,title:e.author.loginname}}),t._v(" "),s("router-link",{staticClass:"reply-loginname",attrs:{id:"reply.id",to:"/user/"+e.author.loginname}},[t._v("\n                "+t._s(e.author.loginname)+"\n              ")]),t._v(" "),s("span",{staticClass:"reply-floor"},[t._v(t._s(a+1)+"楼")])],1),t._v(" "),s("div",{staticClass:"article-replies-headerR"},[s("span",{class:[0==e.ups.length?"hide":""]},[s("i",{class:[e.is_uped?"iconfont icon-praise_fill":"iconfont icon-praise"],attrs:{title:"点赞"},on:{click:function(e){t.replyUps(a)}}}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.ups.length,expression:"reply.ups.length!=0"}],staticClass:"reply-praise"},[t._v("\n                  "+t._s(e.ups.length)+"\n                ")])]),t._v(" "),s("span",[s("i",{directives:[{name:"show",rawName:"v-show",value:t.userInfo.success,expression:"userInfo.success"}],staticClass:"iconfont icon-brush",attrs:{title:"评论"}})])])]),t._v(" "),s("article",{staticClass:"markdown-body article-content",domProps:{innerHTML:t._s(e.content)}})])})),t._v(" "),s("section",[s("form",{attrs:{action:""}})])]),t._v(" "),s("el-aside",{staticClass:"hidden-sm-and-down",attrs:{width:"200px"}},[s("v-aside-user",{attrs:{title:"作者",userInfo:t.data.author}}),t._v(" "),s("v-aside-qr")],1)]:[s("el-main",{staticClass:"article"},[s("p",{staticClass:"article-err"},[t._v("\n        该文章不存在或已被删除。点击\n        "),s("a",{attrs:{href:"javascript:void(0)"},on:{click:t.goBack}},[t._v("跳转")]),t._v("\n        返回。\n      ")])])]],2)},staticRenderFns:[]};var O=s("VU/8")(D,F,!1,function(t){s("loM/")},"data-v-09f22f2e",null).exports,L={name:"User",data:function(){return{user:{}}},created:function(){"/mine"==this.$route.path?this.getUser(this.userInfo.loginname,{}):this.$route.params.loginname?this.getUser(this.$route.params.loginname,{}):this.$router.push("/err")},computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{getUser:function(t,e){var s=this;this.$api.getUser(t,e).then(function(t){return JSON.parse(t)}).then(function(t){s.user=t.data})},formatDate:function(t){return c.formatDate(t)},toUser:function(t){this.$router.push("/user/"+t),this.getUser(t,{})}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-main",{staticClass:"user"},[s("el-row",[s("el-col",{attrs:{span:12}},[t._v("头像:")]),t._v(" "),s("el-col",{attrs:{span:12}},[s("img",{staticClass:"user-avatar",attrs:{src:t.user.avatar_url,title:t.user.loginname}})])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[t._v("用户名:")]),t._v(" "),s("el-col",{attrs:{span:12}},[t._v(t._s(t.user.loginname))])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[t._v("github用户名:")]),t._v(" "),s("el-col",{attrs:{span:12}},[t._v(t._s(t.user.githubUsername))])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[t._v("创建时间至今:")]),t._v(" "),s("el-col",{attrs:{span:12}},[t._v(t._s(t.formatDate(t.user.create_at)))])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[t._v("当前积分:")]),t._v(" "),s("el-col",{attrs:{span:12}},[t._v(t._s(t.user.score))])],1),t._v(" "),s("el-row",{staticClass:"bg-gray"},[s("el-col",{attrs:{span:1}},[s("i",{staticClass:"el-icon-edit"})]),t._v(" "),s("el-col",[t._v("创建的主题")])],1),t._v(" "),s("el-row",{staticClass:"user-list"},[s("el-col",{staticClass:"topics-list",attrs:{tag:"ul",span:24}},t._l(t.user.recent_topics,function(e){return s("li",{key:e.id,staticClass:"topics-list-li"},[s("img",{staticClass:"topics-avatar",attrs:{src:e.author.avatar_url,title:e.author.loginname},on:{click:function(s){t.toUser(e.author.loginname)}}}),t._v(" "),s("div",{staticClass:"topics-list-content"},[s("router-link",{staticClass:"topics-title",attrs:{to:"/topics/"+e.id,title:e.title}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),s("div",{staticClass:"topics-list-wrap"},[s("span",{staticClass:"topics-time"},[t._v(t._s(t.formatDate(e.last_reply_at)))])])],1)])}))],1),t._v(" "),s("el-row",{staticClass:"bg-gray"},[s("el-col",{attrs:{span:1}},[s("i",{staticClass:"el-icon-edit"})]),t._v(" "),s("el-col",[t._v("参与的主题")])],1),t._v(" "),s("el-row",{staticClass:"user-list"},[s("el-col",{staticClass:"topics-list",attrs:{tag:"ul",span:24}},t._l(t.user.recent_replies,function(e){return s("li",{key:e.id,staticClass:"topics-list-li"},[s("img",{staticClass:"topics-avatar",attrs:{src:e.author.avatar_url,title:e.author.loginname},on:{click:function(s){t.toUser(e.author.loginname)}}}),t._v(" "),s("div",{staticClass:"topics-list-content"},[s("router-link",{staticClass:"topics-title",attrs:{to:"/topics/"+e.id,title:e.title}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),s("div",{staticClass:"topics-list-wrap"},[s("span",{staticClass:"topics-time"},[t._v(t._s(t.formatDate(e.last_reply_at)))])])],1)])}))],1)],1)],1)},staticRenderFns:[]};var H=s("VU/8")(L,R,!1,function(t){s("I6/U")},"data-v-53769fea",null).exports,M={name:"Messages",data:function(){return{msgs:{hasnot_read_messages:[],has_read_messages:[]}}},created:function(){this.getMsg()},computed:{userInfo:function(){return this.$store.state.userInfo}},components:{"v-aside-user":k,"v-aside-qr":b},methods:{getMsg:function(){var t=this;this.$api.getMsg({accesstoken:this.userInfo.accesstoken,mdrender:"false"}).then(function(t){return JSON.parse(t)}).then(function(e){t.msgs=e.data})},formatDate:function(t){return c.formatDate(t)},markOne:function(t){this.$api.msgMarkOne(t,{accesstoken:this.userInfo.accesstoken})}}},K={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-main",{staticClass:"messages"},[s("section",{staticClass:"messages-wrap"},[s("header",{staticClass:"messages-header"},[t._v("\n        未读消息\n      ")]),t._v(" "),t.msgs.hasnot_read_messages.length>0?s("ul",{staticClass:"topics-list"},t._l(t.msgs.hasnot_read_messages,function(e){return s("li",{key:e.id,staticClass:"topics-list-li"},[s("router-link",{staticClass:"topics-avatar",attrs:{tag:"img",to:"/user/"+e.author.loginname,src:e.author.avatar_url,title:e.author.loginname}}),t._v(" "),s("div",{staticClass:"topics-list-content"},[s("router-link",{staticClass:"topics-title",attrs:{to:"/topics/"+e.topic.id+"#"+e.id,title:e.topic.title},on:{click:function(s){t.markOne(e.id)}}},[t._v("\n                "+t._s(e.topic.title)+"\n              ")]),t._v(" "),s("div",{staticClass:"topics-list-wrap"},[s("p",{staticClass:"topics-reply"},[t._v("\n                  "+t._s(e.author.loginname)+"\n                  ：\n                  "+t._s(e.reply.content)+"\n                ")]),t._v(" "),s("span",{staticClass:"topics-time",attrs:{title:"回复时间"}},[t._v("\n                  "+t._s(t.formatDate(e.reply.create_at))+"\n                ")])])],1)],1)})):s("p",{staticClass:"msgs-null"},[t._v("没有消息")])]),t._v(" "),s("section",{staticClass:"messages-wrap"},[s("header",{staticClass:"messages-header"},[t._v("\n        已读消息\n      ")]),t._v(" "),t.msgs.has_read_messages.length>0?s("ul",{staticClass:"topics-list"},t._l(t.msgs.has_read_messages,function(e){return s("li",{key:e.id,staticClass:"topics-list-li"},[s("router-link",{staticClass:"topics-avatar",attrs:{tag:"img",to:"/user/"+e.author.loginname,src:e.author.avatar_url,title:e.author.loginname}}),t._v(" "),s("div",{staticClass:"topics-list-content",on:{click:function(s){t.markOne(e.id)}}},[s("router-link",{staticClass:"topics-title",attrs:{to:"/topics/"+e.topic.id+"#"+e.id,title:e.topic.title}},[t._v("\n                "+t._s(e.topic.title)+"\n              ")]),t._v(" "),s("div",{staticClass:"topics-list-wrap"},[s("p",{staticClass:"topics-reply"},[t._v("\n                  "+t._s(e.author.loginname)+"\n                  ：\n                  "+t._s(e.reply.content)+"\n                ")]),t._v(" "),s("span",{staticClass:"topics-time",attrs:{title:"回复时间"}},[t._v("\n                  "+t._s(t.formatDate(e.reply.create_at))+"\n                ")])])],1)],1)})):s("p",{staticClass:"msgs-null"},[t._v("没有消息")])])]),t._v(" "),s("el-aside",{staticClass:"hidden-sm-and-down",attrs:{width:"200px"}},[s("v-aside-user",{attrs:{userInfo:t.userInfo}}),t._v(" "),s("v-aside-qr")],1)],1)},staticRenderFns:[]};var P=s("VU/8")(M,K,!1,function(t){s("jRDc")},"data-v-084e28b8",null).exports,z=s("5x2J"),q=s.n(z),N=s("EFqf"),j=s.n(N),V={name:"markdown-editor",props:{value:String,previewClass:String,autoinit:{type:Boolean,default:function(){return!0}},highlight:{type:Boolean,default:function(){return!1}},sanitize:{type:Boolean,default:function(){return!1}},configs:{type:Object,default:function(){return{}}}},mounted:function(){this.autoinit&&this.initialize()},activated:function(){var t=this.simplemde;t&&((t.isSideBySideActive()||t.isPreviewActive())&&t.toggleFullScreen())},methods:{initialize:function(){var t=Object.assign({element:this.$el.firstElementChild,initialValue:this.value,renderingConfig:{}},this.configs);t.initialValue&&this.$emit("input",t.initialValue),this.highlight&&(t.renderingConfig.codeSyntaxHighlighting=!0),j.a.setOptions({sanitize:this.sanitize}),this.simplemde=new q.a(t);var e=this.previewClass||"";this.addPreviewClass(e),this.bindingEvents()},bindingEvents:function(){var t=this;this.simplemde.codemirror.on("change",function(){t.$emit("input",t.simplemde.value())})},addPreviewClass:function(t){var e=this.simplemde.codemirror.getWrapperElement(),s=document.createElement("div");e.nextSibling.className+=" "+t,s.className="editor-preview "+t,e.appendChild(s)}},destroyed:function(){this.simplemde=null},watch:{value:function(t){t!==this.simplemde.value()&&this.simplemde.value(t)}}},Z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"markdown-editor"},[e("textarea")])}]};var W={name:"Create",data:function(){return{form:{title:"",tab:"",content:""},configs:{status:!1,spellChecker:!1},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:10,message:"长度在 10 个字符以上",trigger:"blur"}],tab:[{required:!0,message:"请输入选择板块",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]}}},components:{"v-aside-user":k,"v-aside-qr":b,markdownEditor:s("VU/8")(V,Z,!1,function(t){s("4W6u")},null,null).exports},computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message("格式错误，请重试！"),!1;e.$api.createTopics(U()({accesstoken:e.userInfo.accesstoken},e.form)).catch(function(t){console.log(t)})})},resetForm:function(t){this.$refs[t].resetFields()}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"create"},[s("el-main",{staticClass:"create-wrap"},[s("el-form",{ref:"formCreate",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"选择版块",prop:"tab"}},[s("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.tab,callback:function(e){t.$set(t.form,"tab",e)},expression:"form.tab"}},[s("el-option",{attrs:{label:"分享",value:"share"}}),t._v(" "),s("el-option",{attrs:{label:"问答",value:"ask"}}),t._v(" "),s("el-option",{attrs:{label:"招聘",value:"job"}}),t._v(" "),s("el-option",{attrs:{label:"测试",value:"dev"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"标题",prop:"title"}},[s("el-input",{attrs:{placeholder:"字数10字以上"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"内容",prop:"content"}},[s("markdown-editor",{attrs:{sanitize:!1,configs:t.configs,"preview-class":"markdown-body",autoinit:!0},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("formCreate")}}},[t._v("创建")]),t._v(" "),s("el-button",{on:{click:function(e){t.resetForm("formCreate")}}},[t._v("重置")])],1)],1)],1),t._v(" "),s("el-aside",{staticClass:"hidden-sm-and-down",attrs:{width:"200px"}},[s("v-aside-user",{attrs:{userInfo:t.userInfo}}),t._v(" "),s("v-aside-qr")],1)],1)},staticRenderFns:[]};var G=s("VU/8")(W,X,!1,function(t){s("C+kd"),s("f8Ll")},"data-v-a74b8372",null).exports;a.default.use(_.a);var Y=new _.a({routes:[{path:"/",redirect:"topics"},{path:"/login",name:"Login",component:x},{path:"/topics",name:"Topics",component:E},{path:"/topics/:id",name:"Article",component:O},{path:"/user",name:"Mine",component:H,alias:"/mine"},{path:"/user/:loginname",name:"User",component:H},{path:"/messages",name:"Messages",component:P},{path:"/create",name:"Create",component:G}]}),tt=s("NYxO");a.default.use(tt.a);var et=new tt.a.Store({state:{userInfo:{success:!1}},getters:{getUserInfo:function(t){return t.userInfo}},mutations:{setUserInfo:function(t,e){t.userInfo=e}},actions:{setUserInfo:function(t,e){(0,t.commit)("setUserInfo",e)}}}),st=s("zL8q"),at=s.n(st),nt=s("HSQo"),it=s.n(nt),rt=s("//Fk"),ot=s.n(rt),ct=s("mtWM"),lt=s.n(ct),ut={method:"post",baseURL:"https://cnodejs.org/api/v1",headers:{"Content-Type":"application/json;charset=UTF-8"},data:{},timeout:1e4,withCredentials:!1,responseType:"json"},dt=s("mw3O"),pt=s.n(dt);function mt(t){return new ot.a(function(e,s){var a=lt.a.create({baseURL:ut.baseURL,headers:{},transformResponse:[function(t){}]});a.interceptors.request.use(function(t){return"post"!==t.method.toLocaleLowerCase()&&"put"!==t.method.toLocaleLowerCase()&&"delete"!==t.method.toLocaleLowerCase()||(t.data=pt.a.stringify(t.data)),t},function(t){console.log("request:",t),"ECONNABORTED"===t.code&&-1!==t.message.indexOf("timeout")&&console.log("根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案");var e=t.response;if(console.log(e),e){var s=e.status;router.push({path:"/error/"+s})}return ot.a.reject(t)}),a.interceptors.response.use(function(t){var e=void 0;return(e=void 0==t.data?t.request.responseText:t.data).code,e},function(t){if(t&&t.response)switch(t.response.status){case 400:t.message="请求错误";break;case 401:t.message="用户错误";break;case 403:t.message="拒绝访问";break;case 404:t.message="请求地址出错: "+t.response.config.url;break;case 408:t.message="请求超时";break;case 500:t.message="服务器内部错误";break;case 501:t.message="服务未实现";break;case 502:t.message="网关错误";break;case 503:t.message="服务不可用";break;case 504:t.message="网关超时";break;case 505:t.message="HTTP版本不受支持"}return console.error(t),ot.a.reject(t)}),a(t).then(function(t){return e(t),!1}).catch(function(t){s(t)})})}var ft={getTopics:function(t){return mt({url:"/topics",method:"get",params:t})},getArticle:function(t,e){return mt({url:"/topic/"+t,method:"get",params:e})},getUser:function(t,e){return mt({url:"/user/"+t,method:"get",params:e})},checkKey:function(t){return mt({url:"/accesstoken",method:"post",params:t})},replyUps:function(t,e){return mt({url:"/reply/"+t+"/ups",method:"post",params:e})},topicReply:function(t,e){return mt({url:"/topic/"+t+"/replies",method:"post",params:e})},getMsg:function(t){return mt({url:"/messages",method:"get",params:t})},msgMarkOne:function(t,e){return mt({url:"/message/mark_one/"+t,method:"post",params:e})},createTopics:function(t){return mt({url:"/topics",method:"post",params:t})}},vt=function t(e){t.installed||(t.installed=!0,it()(e.prototype,{$api:{get:function(){return ft}}}))};s("GI30"),s("/wAz"),s("ETNL"),s("Qbok");a.default.config.productionTip=!1,a.default.use(at.a,{size:"small",zIndex:3e3}),a.default.use(vt),c.localItem("userKey")&&et.dispatch("setUserInfo",JSON.parse(c.localItem("userKey"))),new a.default({el:"#app",router:Y,store:et,render:function(t){return t(g)}})},Ndln:function(t,e){},Qbok:function(t,e){},f8Ll:function(t,e){},jRDc:function(t,e){},jtPi:function(t,e){},"loM/":function(t,e){},nwS4:function(t,e){},sfy8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d6a23d25d7d239f88a65.js.map
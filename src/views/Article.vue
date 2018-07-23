<template>
  <el-container>
    <template v-if="isSuccess">
      <!-- main -->
      <el-main class="article">
        <!-- header -->
        <header class="artilce-header">
          <h1><span class="article-tab">{{switchTabs(data.tab)}}</span>{{data.title}}</h1>
          <p>
            <span>创建时间：{{formatDate(data.create_at)}}</span>
            <span>最后回复时间：{{formatDate(data.last_reply_at)}}</span>
            <span>回复数/点击数：{{data.reply_count}}/{{data.visit_count}}</span>
          </p>
        </header>
        <!-- end header -->
        <!-- content -->
        <article class="markdown-body article-content" v-html="data.content"></article>
        <!-- end content -->
        <section class="article-replies-count"><span>{{data.reply_count}}</span>条评论</section>
        <!-- reply -->
        <!-- 跳转锚点 -->
        <!-- <a href="58a51e77c41c94fd36911fdb" v-show="false"></a> -->
        <!-- end 跳转锚点 -->
        <section class="article-replies">
          <div class="article-replies-item" v-for="(reply,reply_index) in data.replies" :key="reply.id">
            <header class="article-replies-header">
              <div class="article-replies-headerL">
                <img
                  class="reply-avatar"
                  :src="reply.author.avatar_url"
                  :alt="reply.author.loginname"
                  :title="reply.author.loginname"
                >
                <router-link
                  id="reply.id"
                  class="reply-loginname"
                  :to="'/user/'+reply.author.loginname">
                  {{reply.author.loginname}}
                </router-link>
                <span class="reply-floor">{{reply_index+1}}楼</span>
                <span class="reply-floor">{{formatDate(reply.create_at)}}</span>
              </div>
              <div class="article-replies-headerR">
                <span :class="[reply.ups.length==0 ? 'hide' : '']">
                  <i
                    title="点赞"
                    :class="[reply.is_uped ? 'iconfont icon-praise_fill' : 'iconfont icon-praise']"
                    @click="replyUps(reply_index)">
                  </i>
                  <span
                    v-show="reply.ups.length!=0"
                    class="reply-praise">
                    {{reply.ups.length}}
                  </span>
                </span>
                <span>
                  <i
                    v-show="userInfo.success"
                    class="iconfont icon-brush"
                    title="评论"
                    @click="showMarkdownEdit(reply)"
                    ></i>
                </span>
              </div>
            </header>
            <article class="markdown-body article-content" v-html="reply.content"></article>
            <section
              class="article-markdown"
              v-show="reply.showEdit">
              <markdown-editor
                v-model="reply.replyVal"
                :sanitize="false"
                :configs="configs"
                preview-class="markdown-body"
                :autoinit="true">
              </markdown-editor>
              <el-row type="flex" justify="end">
                <el-button type="primary" @click="createReply(reply,true)">回复</el-button>
                <el-button @click="reply.showEdit=!reply.showEdit">取消</el-button>
              </el-row>
            </section>

          </div>
        </section>
        <!-- end reply -->
        <!-- toreplies -->
        <section class="article-markdown">
          <markdown-editor
            v-model="replyVal"
            :sanitize="false"
            :configs="configs"
            preview-class="markdown-body"
            :autoinit="true">
          </markdown-editor>
          <el-row type="flex" justify="center">
            <el-button type="primary" @click="createReply">回复</el-button>
            <el-button @click="replyVal=''">重置</el-button>
          </el-row>
        </section>
      </el-main>
      <!-- end main -->
      <!-- aside -->
      <el-aside class="hidden-sm-and-down"  width="200px">
        <v-aside-user title="作者" :userInfo="data.author"></v-aside-user>
        <v-aside-qr></v-aside-qr>
      </el-aside>
      <!-- end aside -->
    </template>
    <template v-else>
      <el-main class="article">
        <p class="article-err">
          该文章不存在或已被删除。点击
          <a href="javascript:void(0)" @click="goBack">跳转</a>
          返回。
        </p>
      </el-main>
      </template>
  </el-container>
</template>


<script>
import AsideUser from '@/components/AsideUser'
import AsideQR from '@/components/AsideQR'
import Tool from "@/utils"
import markdownEditor from 'vue-simplemde/src/markdown-editor'

export default{
  name:'Article',
  data(){
    return{
      data:{},
      isSuccess:true,
      configs: {
        status: false, // 禁用底部状态栏
        spellChecker: false // 禁用拼写检查
      },
      replyVal:'',
    }
  },
  created() {
    let userInfo = this.$store.state.userInfo;
    if(userInfo.success){
      this.getArticle(this.$route.params.id,{accesstoken:userInfo.accesstoken})
    }else{
      this.getArticle(this.$route.params.id,{})
    }
  },
  components:{
    'v-aside-user':AsideUser,
    'v-aside-qr':AsideQR,
    markdownEditor,
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  methods:{
    // 获取文章数据
    getArticle(id,obj){
      const loading = this.$loading({
          lock: true,
          text: '正在加载...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
      this.$api.getArticle(id,obj)
      .then(res => {return JSON.parse(res)})
      .then(res => {
        this.isSuccess = true;
        // 设置评论框是否显隐的属性，默认隐藏
        res.data.replies.map((el)=>{
          el.showEdit = false;
          el.replyVal = '';
        })
        this.data = res.data;
        loading.close();
      })
      .catch(err =>{
        this.isSuccess = false;
        loading.close();
      })
    },
    // 时间格式化
    formatDate(time){
      return Tool.formatDate(time)
    },
    // 文章类型识别
    switchTabs(tab){
      return Tool.switchTabs(tab)
    },
    // 点赞
    replyUps(reply_index){
      // 登陆用户信息
      let loginUser = this.userInfo;
      // 是否登陆成功
      let loginBool = loginUser.success;
      // 当前评论数据
      let repliy = this.data.replies[reply_index];
      // 判断是否登陆
      if(loginBool){
        // 判断是否是用户本人
        if(repliy.author.loginname == loginUser.loginname){
          this.$message.error('不能给自己点赞~！');
          return
        }
        // 非用户本人时，发送请求
        this.$api.replyUps(repliy.id,{accesstoken:this.$store.state.userInfo.accesstoken})
        .then(res => {return JSON.parse(res)})
        .then(res => {
          // 返回值的状态 action = up/down
          if(res.action==="up"){
            repliy.ups.push(loginUser.id)
          }else{
            let index =repliy.ups.forEach((upsid,index)=> {
              if(upsid == loginUser.id){
                return index;
              }
            });
            repliy.ups.splice(index,1);
          }
          repliy.is_uped = !repliy.is_uped;
          // this.getArticle(this.$route.params.id,{accesstoken:this.$store.state.userInfo.accesstoken})
        })
        .catch(err =>{
          console.log(err)
        })
      }else{
        this.$confirm('该操作需要用户登陆, 是否跳转登陆页?', '提示', {
          confirmButtonText: '跳转',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login')
        }).catch((err) => {
          this.$message({
            type: 'warning',
            message: `已取消跳转  ╮(╯﹏╰）╭`
          });
        });
      }
    },
    // 返回上一级
    goBack(){
      this.$router.back();
    },
    // 显隐当前对话框
    showMarkdownEdit(info){
      // 判断是否登陆
      if(this.userInfo.success){
        info.replyVal = `@${info.author.loginname} `;
        info.showEdit =! info.showEdit;
      }else{
        this.$confirm('该操作需要用户登陆, 是否跳转登陆页?', '提示', {
          confirmButtonText: '跳转',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login')
        }).catch((err) => {
          this.$message({
            type: 'warning',
            message: `已取消跳转  ╮(╯﹏╰）╭`
          });
        });
      }

    },
    // 新建评论
    createReply(reply,flag=false){
      let accesstoken = this.userInfo.accesstoken;
      let topic_id = this.$route.params.id;
      let content = flag ? reply.replyVal: this.replyVal;
      console.log(content)
      if(content==''){
        this.$message('不能为空！');
        return false
      }

      this.$api.topicReply(topic_id,{
        accesstoken,
        content: flag ? reply.replyVal: this.replyVal,
        reply_id: flag ? reply.id : null,
      })
      .then(res => {return JSON.parse(res)})
      .then(res => {
        // console.log(res)
        this.getArticle(this.$route.params.id,{accesstoken:this.userInfo.accesstoken})
      })
      .catch(err =>{
        console.log(err)
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.article{
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  .article-err{
    padding: 10px;
    a{
      color: #40bdf7;
    }
  }
  .artilce-header{
    padding: 0 15px;
    text-align: center;
    overflow: hidden;
    h1{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      .article-tab{
        margin: 0 5px;
        background: #91e456;
        color: #fff;
        padding: 5px 8px;
        border-radius: 5px;
        font-size: 12px;
      }
    }
    p{
      color: #999;
      font-size: 14px;
      span{
        padding: 0 10px;
      }
    }
  }
  .article-content{
    padding: 10px;
  }
  .article-replies-count{
    // background: #e9eef3;
    // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-bottom: 1px solid #ebeef5;
    padding: 5px;
    color: #999;
    font-size: 15px;
    span{
      padding: 0 5px;
      color: #ff5b05;
    }
  }
  .article-replies{
    .article-replies-item{
      padding: 5px;
      border-bottom: 1px solid #ebeef5;
      // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      .article-replies-header{
        display: flex;
        .article-replies-headerL{
          flex: 1;
          display: flex;
          align-items: center;
          .reply-avatar{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            padding: 0 10px;
          }
          .reply-loginname{
            color: #40bdf7;
            text-decoration: none;
            line-height: 40px;
          }
          .reply-floor{
            color: #999;
            padding-left: 5px;
            font-size: 14px;
            line-height: 40px;
          }
        }
        .article-replies-headerR{
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:hover{
            span{
              visibility: visible;
            }
          }
          .hide{
            visibility: hidden;
          }
          span{
            display: flex;
            align-items: center;
            .iconfont{
              font-size: 21px;
              color: #999;
              padding-left: 6px;
              transition: color 0.5s ease;
              &:hover{
                color: #333;
              }
            }
            .reply-praise{
              position: relative;
              top: 2px;
              color: #999;
            }
          }
        }
      }
    }
  }
  .article-markdown{
    padding-top: 10px;
    // background: #e8edf2;
    .el-row{
      margin: 5px 0;
    }
  }
  .article-markdown-r{
    background: #fff;
  }
}
</style>


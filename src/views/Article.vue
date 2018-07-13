<template>
  <el-container>
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
      <section class="article-replies">
        <div class="article-replies-item" v-for="reply in data.replies" :key="reply.id">
          <header class="article-replies-header">
            <img
              class="reply-avatar"
              :src="reply.author.avatar_url"
              :alt="reply.author.loginname"
              :title="reply.author.loginname">
            <router-link
              class="reply-loginname"
              :to="'/user/'+reply.author.loginname">
              {{reply.author.loginname}}
            </router-link>
          </header>
          <article class="markdown-body article-content" v-html="data.content">

          </article>
        </div>
      </section>
      <!-- end reply -->
    </el-main>
    <!-- end main -->
    <!-- aside -->
    <el-aside class="hidden-xs-only"  width="200px">
      <v-aside-user title="作者" :userInfo="data.author"></v-aside-user>
      <v-aside-qr></v-aside-qr>
    </el-aside>
    <!-- end aside -->
  </el-container>
</template>

<script>
import AsideUser from '@/components/AsideUser'
import AsideQR from '@/components/AsideQR'
import Tool from "@/utils"

export default{
  name:'Article',
  data(){
    return{
      data:{}
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
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  methods:{
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
        this.data = res.data;
        console.log(this.data);
        loading.close();
      })
    },
    formatDate(time){
      return Tool.formatDate(time)
    },
    switchTabs(tab){
      return Tool.switchTabs(tab)
    },
  }
}
</script>

<style lang="scss" scoped>
.article{
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
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
        }
      }
    }


  }
}
</style>


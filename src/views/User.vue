<template>
  <el-container>
    <el-main class="user">
      <el-row>
        <el-col :span="8">头像:</el-col>
        <el-col :span="16">
          <img
            class="user-avatar"
            :src="user.avatar_url"
            :title="user.loginname" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">用户名:</el-col>
        <el-col :span="16">{{user.loginname}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">github用户名:</el-col>
        <el-col :span="16">{{user.githubUsername}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">创建时间至今:</el-col>
        <el-col :span="16">{{formatDate(user.create_at)}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">当前积分:</el-col>
        <el-col :span="16">{{user.score}}</el-col>
      </el-row>
      <el-row class="bg-gray">
        <el-col :span="1"><i class='el-icon-edit'></i></el-col>
        <el-col >创建的主题</el-col>
      </el-row>
      <el-row class="user-list">
        <el-col tag="ul" :span="24" class="topics-list">
            <li
              class="topics-list-li"
              v-for="item in user.recent_topics"
              :key="item.id">
                <img
                  @click="toUser(item.author.loginname)"
                  class="topics-avatar"
                  :src="item.author.avatar_url"
                  :title="item.author.loginname">
                <div class="topics-list-content">
                  <router-link
                    class="topics-title"
                    :to="'/topics/'+item.id"
                    :title="item.title">
                    {{item.title}}
                  </router-link>
                  <div class="topics-list-wrap">
                    <span class="topics-time">{{formatDate(item.last_reply_at)}}</span>
                  </div>
                </div>
            </li>
        </el-col>
      </el-row>
      <el-row class="bg-gray">
        <el-col :span="1"><i class='el-icon-edit'></i></el-col>
        <el-col >参与的主题</el-col>
      </el-row>
      <el-row class="user-list">
        <el-col tag="ul" :span="24" class="topics-list">
            <li
              class="topics-list-li"
              v-for="item in user.recent_replies"
              :key="item.id">
                <img
                  @click="toUser(item.author.loginname)"
                  class="topics-avatar"
                  :src="item.author.avatar_url"
                  :title="item.author.loginname">
                <div class="topics-list-content">
                  <router-link
                    class="topics-title"
                    :to="'/topics/'+item.id"
                    :title="item.title">
                    {{item.title}}
                  </router-link>
                  <div class="topics-list-wrap">
                    <span class="topics-time">{{formatDate(item.last_reply_at)}}</span>
                  </div>
                </div>
            </li>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Tool from "@/utils"

export default{
  name:'User',
  data(){
    return{
      user:{}
    }
  },
  created() {
    if(this.$route.path=='/mine'){
      this.getUser(this.userInfo.loginname,{});
    }else if(this.$route.params.loginname){
      this.getUser(this.$route.params.loginname,{});
    }else{
      this.$router.push('/err');
    }
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  methods:{
    getUser(loginname,obj){
      this.$api.getUser(loginname,obj)
      .then(res => {return JSON.parse(res)})
      .then(res => {
        this.user = res.data;
        console.log(this.user)
      })
    },
    formatDate(time){
      return Tool.formatDate(time)
    },
    toUser(loginname){
      this.$router.push(`/user/${loginname}`);
      this.getUser(loginname,{});
    }
  }
}
</script>

<style lang="scss" scoped>
  .user{
    background: #fff;
    .user-avatar{
      width: 48px;
      height: 48px;
    }
    .el-row{
      display: flex;
      align-items: center;
      padding: 10px;
      &.bg-gray{
        background: #e9eef3;
      }
      .el-col:nth-child(1){
        text-align: right;
        padding-right: 10px;
        font-weight: bold;
      }
      &.user-list{
        padding: 0px;
        .topics-list{
          overflow: hidden;
          margin: 0px;
          list-style: none;
          padding: 0;
          .topics-list-li{
            overflow: hidden;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding: 4px 10px;
            background-color: #fff;
            transition: background-color 0.3s;
            &:hover{
              background: #f2f2f2;
            }
            &:last-child{
              border-bottom: none;
            }
            .topics-avatar{
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
            .topics-list-content{
              flex: 1;
              display: flex;
              flex-direction: column;
              font-size: 14px;
              .topics-title{
                margin: 0;
                padding: 8px 2px;
                text-decoration: none;
                color: #333;
                text-align: left;
                padding: 0 10px;
                font-weight: normal;
                color: #40bdf7;
                &:active{
                  color: #999;
                }
              }
              .topics-list-wrap{
                font-size: 12px;
                color: #777;
                .topics-time{
                  float: right;
                  font-weight: normal;
                }
              }
            }
          }
        }
      }
    }
  }


</style>

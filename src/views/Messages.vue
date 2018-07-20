<template>
  <el-container>
    <el-main class="messages">
      <section class="messages-wrap">
        <header class="messages-header">
          未读消息
        </header>
        <ul v-if="msgs.hasnot_read_messages.length>0" class="topics-list">
          <li
            class="topics-list-li"
            v-for="item in msgs.hasnot_read_messages"
            :key="item.id">
              <router-link
                tag="img"
                :to="'/user/'+item.author.loginname"
                class="topics-avatar"
                :src="item.author.avatar_url"
                :title="item.author.loginname"
               />
              <div class="topics-list-content">
                <router-link
                  @click="markOne(item.id)"
                  class="topics-title"
                  :to="'/topics/'+item.topic.id +'#'+ item.id"
                  :title="item.topic.title">
                  {{item.topic.title}}
                </router-link>
                <div class="topics-list-wrap">
                  <p class="topics-reply">
                    {{item.author.loginname}}
                    ：
                    {{item.reply.content}}
                  </p>
                  <span
                    class="topics-time"
                    title="回复时间">
                    {{formatDate(item.reply.create_at)}}
                  </span>
                </div>
              </div>
          </li>
        </ul>
        <p v-else class="msgs-null">没有消息</p>
      </section>
      <section class="messages-wrap">
        <header class="messages-header">
          已读消息
        </header>
        <ul v-if=" msgs.has_read_messages.length>0" class="topics-list">
          <li
            class="topics-list-li"
            v-for="item in msgs.has_read_messages"
            :key="item.id">
              <router-link
                tag="img"
                :to="'/user/'+item.author.loginname"
                class="topics-avatar"
                :src="item.author.avatar_url"
                :title="item.author.loginname"
               />
              <div
                class="topics-list-content"
                @click="markOne(item.id)">
                <router-link
                  class="topics-title"
                  :to="'/topics/'+item.topic.id +'#'+ item.id"
                  :title="item.topic.title">
                  {{item.topic.title}}
                </router-link>
                <div class="topics-list-wrap">
                  <p class="topics-reply">
                    {{item.author.loginname}}
                    ：
                    {{item.reply.content}}
                  </p>
                  <span
                    class="topics-time"
                    title="回复时间">
                    {{formatDate(item.reply.create_at)}}
                  </span>
                </div>
              </div>
          </li>
        </ul>
        <p v-else class="msgs-null">没有消息</p>
      </section>
    </el-main>
    <el-aside class="hidden-sm-and-down"  width="200px">
      <v-aside-user :userInfo="userInfo"></v-aside-user>
      <v-aside-qr></v-aside-qr>
    </el-aside>
  </el-container>
</template>

<script>
import AsideUser from '@/components/AsideUser'
import AsideQR from '@/components/AsideQR'
import Tool from "@/utils"

export default{
  name:'Messages',
  data(){
    return{
      msgs:{
        hasnot_read_messages:[],
        has_read_messages:[],
      }
    }
  },
  created() {
    this.getMsg();
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  components:{
    'v-aside-user':AsideUser,
    'v-aside-qr':AsideQR,
  },
  methods:{
    getMsg(){
      this.$api.getMsg({accesstoken:this.userInfo.accesstoken,mdrender:'false'})
      .then(res => {return JSON.parse(res)})
      .then(res => {
        this.msgs = res.data;
      })
    },
    formatDate(time){
      return Tool.formatDate(time)
    },
    markOne(msg_id){
      // console.log(msg_id)
      this.$api.msgMarkOne(msg_id,{accesstoken:this.userInfo.accesstoken})
      // .then(res => {return JSON.parse(res)})
      // .then(res => {
      //   //res
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.messages{

  .messages-wrap{
    overflow: hidden;
    background: #fff;
    padding: 0px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin-bottom: 20px;
    .messages-header{
      line-height: 35px;
      color: #999;
      background: #f6f6f6;
      font-size: 14px;
      overflow: hidden;
      list-style: none;
      padding: 0 10px;
    }
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
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .topics-tabs{
          margin: 0 10px;
          background: rgb(145, 228, 86);
          color: #fff;
          padding: 2px 5px;
          border-radius: 5px;
          font-size: 12px;
        }
        .topics-tabs-top{
          background: rgb(255, 91, 5);
        }
        .topics-list-content{
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          overflow: hidden;
          .topics-title{
            margin: 0;
            padding: 8px 2px;
            text-decoration: none;
            color: #333;
            &:active{
              color: #999;
            }
          }
          .topics-list-wrap{
            font-size: 12px;
            color: #777;
            .topics-reply{
              float: left;
              margin: 0;
              width: 88%;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .topics-time{
              float: right;
            }
          }
        }
      }
    }
    .msgs-null{
      margin: 10px;
      color: #999;
    }
  }

}


</style>

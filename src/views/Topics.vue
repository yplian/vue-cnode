<template>
<el-container>
  <!-- main -->
  <el-main class="topics">
    <ul class="topics-navbar">
      <li v-for="(navItme,index) in navbar"
        :key="index"
        :class="{active:navItme.isActive}"
        @click="changTopic(index)">
        {{navItme.name}}
      </li>
    </ul>
    <ul class="topics-list">
      <li
        class="topics-list-li"
        v-for="item in data"
        :key="item.id">
          <img
            class="topics-avatar"
            :src="item.author.avatar_url"
            :title="item.author.loginname">
          <span v-if="item.top" class="topics-tabs topics-tabs-top">
            置顶
          </span>
          <span v-else class="topics-tabs">
            {{switchTabs(item.tab)}}
          </span>
          <div class="topics-list-content">
            <router-link
              class="topics-title"
              :to="'/topics/'+item.id"
              :title="item.title">
              {{item.title}}
            </router-link>
            <div class="topics-list-wrap">
              <p class="topics-count">
                <span title="回复数">{{item.reply_count}}</span>
                /
                <span title="点击数">{{item.visit_count}}</span>
              </p>
              <span class="topics-time">{{formatDate(item.create_at)}}</span>
            </div>
          </div>
      </li>
    </ul>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="page"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </el-main>
  <!-- aside -->
  <el-aside class="hidden-xs-only"  width="200px">
    <v-aside-user :isMe="true" :userInfo="userInfo"></v-aside-user>
    <v-aside-qr></v-aside-qr>
  </el-aside>
</el-container>

</template>

<script>
import AsideUser from '@/components/AsideUser'
import AsideQR from '@/components/AsideQR'
import Tool from "@/utils"

export default {
  name: 'Topics',
  data () {
    return {
      navbar: [
        {name:'全部',isActive: true, tab:''},
        {name:'精华',isActive: false, tab:'good'},
        {name:'分享',isActive: false, tab:'share'},
        {name:'问答',isActive: false, tab:'ask'},
        {name:'招聘',isActive: false, tab:'job'},
        {name:'测试',isActive: false, tab:'dev'},
      ],
      data:[],
      tab:'',
      page:1
    }
  },
  created() {
    this.getTopics({})
  },
  methods:{
    changTopic(index){
      let len = this.navbar.length;
      for(let i = 0; i < len; i++) {
        this.navbar[i].isActive = false;
      }
      this.navbar[index].isActive = true;
      this.tab = this.navbar[index].tab;
      this.getTopics({tab:this.tab})
    },
    getTopics(obj){
      this.$api.getTopics(obj)
      .then(res => {return JSON.parse(res)})
      .then(res => {
        this.data = res.data;
      })
    },
    formatDate(time){
      return Tool.formatDate(time)
    },
    switchTabs(tab){
      return Tool.switchTabs(tab)
    },
    handleCurrentChange(val) {
      this.getTopics({tab:this.tab,page:val})
      // console.log(`当前页: ${val}`);
    }
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
}
</script>

<style lang="scss" scoped>
.topics{
  width: 100%;
  padding: 0;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  .topics-navbar{
    margin: 0;
    line-height: 35px;
    color: #999;
    background: #f6f6f6;
    font-size: 14px;
    overflow: hidden;
    list-style: none;
    padding: 0;
    li{
      padding: 2px 12px;
      float: left;
      color: #333;
      cursor: pointer;
      &:hover{
        color: #5bc0de;
      }
    }
    .active{
      background: #5bc0de;
      color: #fff;
      &:hover{
        color: #fff;
      }
    }
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
          .topics-count{
            float: left;
            margin: 0;
          }
          .topics-time{
            float: right;
          }
        }
      }
    }
  }
  .pagination{
    margin: 10px 0px;
    text-align: center;
  }
}
</style>


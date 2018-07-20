<template>
  <div class="aside-info">
    <!-- 用户本人 -->
    <div
      class="overflowH"
      v-if="isMe">
      <!-- 用户已登陆 -->
      <div class="overflowH" v-if="userInfo.success">
        <header class="aside-title">
          {{title}}
        </header>
        <el-row
          class="marTB10"
          align="middle"
          type="flex" >
            <img
              class="aside-info-img"
              :src="userInfo.avatar_url"
              :title="userInfo.loginname">
            <router-link
              class="aside-info-title"
              to="/mine"
              :title="userInfo.loginname">
              {{userInfo.loginname}}
            </router-link>
        </el-row>
      </div>
      <!-- 用户未登陆 -->
      <div
        class="overflowH"
        v-else>
          <header class="aside-title">
            Vue for cnode社区
          </header>
          <el-row
            class="marTB10"
            justify="center"
            align="middle"
            type="flex" >
              <el-button
                @click.native="toLogin"
                size="small"
                type="primary">
                点击登陆
              </el-button>
          </el-row>
      </div>
    </div>
    <!-- 不是用户本人 -->
    <div
      class="overflowH"
      v-else>
        <header class="aside-title">
          {{title}}
        </header>
        <el-row
          class="marTB10"
          align="middle"
          type="flex" >
            <img
              class="aside-info-img"
              :src="userInfo.avatar_url"
              :title="userInfo.loginname">
            <router-link
              class="aside-info-title"
              :to="'/user/'+userInfo.loginname"
              :title="userInfo.loginname">
              {{userInfo.loginname}}
            </router-link>
        </el-row>
    </div>
  </div>
</template>

<script>

  export default{
    name:'AsideUser',
    props:{
      // 用户信息
      'userInfo':{
        type: Object,
        required: true,
        default(){
          return {avatar_url:'',loginname:''}
        }
      },
      // 子标题
      'title':{
        type: String,
        default:'登陆用户',
      },
      // 是否是用户本人
      'isMe':{
        type: Boolean,
        default: false,
      },
    },
    methods:{
      toLogin(){
        this.$router.push('/login');
      }
    }
  }
</script>

<style lang="scss" scoped>

.aside-title{
  padding: 0 10px;
  line-height: 35px;
  color: #999;
  background: #f6f6f6;
  font-size: 14px;
}
.aside-info{
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  background: #fff;
  .user-info-true{
    align-self: auto;
  }
}
.aside-info-img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  margin-left: 15px;
}
.aside-info-title{
  font-size: 16px;
  color: rgb(64, 189, 247);
  text-decoration: none;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 120px;
}
</style>

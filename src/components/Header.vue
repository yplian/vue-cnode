<template>
<div class="header-wrap">
  <!-- logo -->
  <div @click="$router.push('/')" class="header-logo"><img src="https://cnodejs.org/public/images/cnodejs_light.svg" ></div>
  <!-- nav -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#fff">
    <el-menu-item index="/topics" >首页</el-menu-item>
    <el-menu-item index="/messages">消息</el-menu-item>
    <!-- <el-menu-item index="/hello" >关于</el-menu-item> -->
    <el-menu-item @click="loginOut" v-if="isLogin" index="/">退出</el-menu-item>
    <el-menu-item v-else index="/login">登陆</el-menu-item>
  </el-menu>
</div>
</template>

<script>
import Tools from '@/utils'

  export default {
    data() {
      return {
        activeIndex: 'topics' //当前选中项，选中状态样式已取消
      };
    },
    props:{
      // 通过vuex判断用户登陆状态
      isLogin:Boolean
    },
    methods: {
      // 判断是否退出登陆状态同时格式化localStorage及vuex
      loginOut(){
        this.$confirm('你确定要退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('setUserInfo', {});
          Tools.removeLocalItem('userKey');
          this.$message({
            type: 'success',
            message: '该用户已退出!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作！'
          });
        });
        // return false;
      }
    },
    // watch:{
    //   isLogin(newVal, oldVal){
    //     newVal != oldVal ? this.activeIndex='topics' : null
    //   }
    // }
  }
</script>

<style lang="scss" scoped>
.header-wrap{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header-logo{
    width: 120px;
    padding: 3px 20px;
    height: 34px;
    line-height: 34px;
    color: #ccc;
    font-weight: 700;
  }
}
.is-active{
  border-bottom: none !important;
}
.el-menu--horizontal > .el-menu-item{
  border-bottom: none !important;
}
</style>

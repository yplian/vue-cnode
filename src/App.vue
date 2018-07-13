<template>
  <div id="app">
    <!-- container -->
    <el-container>
      <!-- header -->
      <el-header id="header">
        <v-header :isLogin="userInfo.success"></v-header>
      </el-header>
      <!--end header -->

      <!-- wrap -->
      <router-view id="wrap" />
      <!-- end wrap -->

    </el-container>
    <!-- end container -->

    <v-top />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Top from '@/components/Top'
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'App',
  components:{
    'v-header': Header,
    'v-top': Top,
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body > .el-container {
  margin-bottom: 40px;
}
#header,#footer{
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
#header{
  margin-bottom: 20px;
}
#wrap{
  background-color: #E9EEF3;
}
#wrap > .el-main{
  color: #333;
  margin: 0 10px;
  padding: 0;
}
#wrap > .el-aside{
  margin: 0 10px;
  box-sizing: content-box;
}
</style>

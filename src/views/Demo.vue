<template>
  <el-container>
    <el-main></el-main>
    <el-aside class="hidden-sm-and-down"  width="200px">
      <v-aside-user :userInfo="userInfo"></v-aside-user>
      <v-aside-qr></v-aside-qr>
    </el-aside>
  </el-container>
</template>

<script>
import AsideUser from '@/components/AsideUser'
import AsideQR from '@/components/AsideQR'
// import Tool from "@/utils"

export default{
  name:'Demo',
  data(){
    return{

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

</style>

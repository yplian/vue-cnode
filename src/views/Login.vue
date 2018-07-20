<template>
  <el-main class="login">
    <section class="content content-hashead">
      <el-row>
        <el-input v-model="accessKey" placeholder="请输入Access Token"></el-input>
      </el-row>
      <el-row>
        <el-button @click="loginIn" type="primary">登陆</el-button>
        <el-button @click="cleanInput" type="danger">取消</el-button>
      </el-row>
    </section>
  </el-main>
</template>

<script>

import Tool from "@/utils"

export default {
  name: 'Login',
  data(){
    return{
      accessKey:'8f7f8189-47d2-42f1-a10f-52f9a9dcfbee',
    }
  },
  methods:{
    loginIn() {
      this.$api.checkKey({accesstoken : `${this.accessKey}`})
      .then(res => {
        let userKey = {...JSON.parse(res),"accesstoken":this.accessKey};
        this.$store.dispatch('setUserInfo', userKey);
        Tool.localItem('userKey',JSON.stringify(userKey));
        this.$message({
          type: 'success',
          message: '恭喜你，登陆成功！',
        });
        this.$router.push('/')
      })
      .catch(err => {
        this.$message({
          type: 'error',
          message: `${err}`,
        });
       })
    },
    cleanInput(){
      this.accessKey = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  margin-top: 50px;
}

.el-row{
  text-align: center;
  line-height: 70px;
  .el-input{
    width: 60%;
  }
}

</style>


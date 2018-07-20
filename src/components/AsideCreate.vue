<template>
  <div class="aside-create">
    <header class="aside-title">
      新建话题
    </header>
    <el-row
      class="marTB10"
      align="middle"
      justify="center"
      type="flex" >
        <el-button
          @click="toCreate"
          type="primary">点击创建</el-button>
    </el-row>

  </div>
</template>

<script>
  export default{
    name:'AsideCreate',
    computed:{
      userInfo(){
        return this.$store.state.userInfo
      }
    },
    methods:{
      toCreate(){
        if(this.userInfo.success){
          this.$router.push('/create');
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
    }
  }
</script>

<style lang="scss" scoped>
.aside-create{
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-bottom: 20px;
  .aside-title{
    padding: 0 10px;
    line-height: 35px;
    color: #999;
    background: #f6f6f6;
    font-size: 14px;
  }
}
</style>

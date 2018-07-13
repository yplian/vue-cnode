<template>
  <div class="aside-qr">

    <header class="aside-title">
      React for cnode 移动端
    </header>
    <el-row
      class="marTB10"
      align="middle"
      justify="center"
      type="flex" >
        <img class="aside-qr-img" src="../assets/QR.png">
    </el-row>

  </div>
</template>

<script>
  export default{
    name:'AsideQR',
  }
</script>

<style lang="scss" scoped>
.aside-qr{
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  .aside-title{
    padding: 0 10px;
    line-height: 35px;
    color: #999;
    background: #f6f6f6;
    font-size: 14px;
  }
  .aside-qr-img{
    width: 150px;
    height: 150px;
  }
}
</style>

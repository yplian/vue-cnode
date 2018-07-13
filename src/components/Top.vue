<template>
  <transition name="fade">
    <div v-show="isShow" class="toTop" @click="toTop">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>

  export default{
    name:'Top',
    data(){
      return{
        isShow: true
      }
    },
    mounted() {
      window.onscroll =() => {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if(top > 300){
          this.isShow = true;
        }else{
          this.isShow = false;
        }
      }
    },
    methods:{
      toTop(){
        let scrollToptimer = setInterval(function () {
          let top = document.body.scrollTop || document.documentElement.scrollTop;
          let speed = top / 4;
          if (document.body.scrollTop!=0) {
              document.body.scrollTop -= speed;
          }else {
              document.documentElement.scrollTop -= speed;
          }
          if (top == 0) {
              clearInterval(scrollToptimer);
          }
        }, 30);
        // document.documentElement.scrollTop = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toTop{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #5bc0de;
    color: #fff;
    position: fixed;
    z-index: 2010;
    bottom: 5%;
    right: 5%;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
  }
  .fade-enter ,.fade-leave-to{
    opacity: 0;
    transform: translateY(-20px);
  }
  .fade-enter-active,.fade-leave-active{
    transition: all .5s ease;
  }

</style>

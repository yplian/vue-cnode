<template>
  <el-container class="create">
    <!--  -->
    <el-main class="create-wrap">
      <el-form ref="formCreate" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="选择版块" prop="tab">
          <el-select v-model="form.tab" placeholder="请选择活动区域">
            <el-option label="分享" value="share"></el-option>
            <el-option label="问答" value="ask"></el-option>
            <el-option label="招聘" value="job"></el-option>
            <el-option label="测试" value="dev"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="字数10字以上"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <!-- <el-input type="textarea" v-model="form.content"></el-input> -->
          <markdown-editor
            v-model="form.content"
            :sanitize="false"
            :configs="configs"
            preview-class="markdown-body"
            :autoinit="true">
          </markdown-editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formCreate')">创建</el-button>
          <el-button @click="resetForm('formCreate')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-main>
    <!--  -->
    <el-aside class="hidden-sm-and-down"  width="200px">
      <v-aside-user :userInfo="userInfo"></v-aside-user>
      <v-aside-qr></v-aside-qr>
    </el-aside>
  </el-container>
</template>

<script>
import AsideUser from '@/components/AsideUser'
import AsideQR from '@/components/AsideQR'
import markdownEditor from 'vue-simplemde/src/markdown-editor'
import axios from 'axios'

export default{
  name:'Create',
  data(){
    return{
      form: {
        title: '',
        tab: '',
        content: '',
      },
      configs: {
        status: false, // 禁用底部状态栏
        spellChecker: false // 禁用拼写检查
      },
      rules:{
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 10,  message: '长度在 10 个字符以上', trigger: 'blur' }
        ],
        tab: [
          { required: true, message: '请输入选择板块', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
      }
    }
  },
  components:{
    'v-aside-user':AsideUser,
    'v-aside-qr':AsideQR,
    markdownEditor
  },
  computed:{
    userInfo(){
      return this.$store.state.userInfo
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log({
            accesstoken:this.userInfo.accesstoken,
            ...this.form
          })
          // axios.post('https://cnodejs.org/api/v1/topics', {
          //   accesstoken:this.userInfo.accesstoken,
          //   title: this.form.title,
          //   tab: this.form.tab,
          //   content: this.form.content,
          // })
          // .then(function (response) {
          //   console.log(response);
          // })
          // .catch(function (error) {
          //   console.log(error);
          // });
          this.$api.createTopics({
            accesstoken:this.userInfo.accesstoken,
            ...this.form
          })
          .then(res => {return JSON.parse(res)})
          .then(res => {
            this.$router.push(`/topics/${res.data.topic_id}`);
            console.log(res.success,res.topic_id)
          })
          .catch(err=>{
            console.log(err)
          })
        } else {
          this.$message('格式错误，请重试！');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style>
@import 'simplemde-theme-base/dist/simplemde-theme-base.min.css';
</style>

<style lang="scss" scoped>
.create{
  .create-wrap{
    background: #fff;
    .el-form{
      padding: 10px;
    }
  }
}
</style>

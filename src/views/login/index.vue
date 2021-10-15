<template>
  <div class="tab">
      <h2>LOGIN</h2>
    <form action=""></form>
    <el-form ref="form" :model="form" label-width="50px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="login">登录</el-button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods:{
      login(){
           this.$router.push('/snake')
      }

  }
};
</script>

<style scoped>
.tab {
  width: 400px;
  height: 300px;
  background-color: rgb(220, 226, 213);
  margin: auto;
  padding: 20px;
}
</style>

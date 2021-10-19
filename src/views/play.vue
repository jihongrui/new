<template>
  <div class="box">
    <el-form ref="form" :model="form" :rules="rules1" label-width="220px">
      <el-form-item label="Contact name" prop="name">
        <el-input :model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Phone number1" prop="num1">
        <el-input :model="form.num1"></el-input>
      </el-form-item>
      <el-form-item label="Phone number2" prop="num2">
        <el-input :model="form.num2"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input :model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Forwarder company name" prop="companyName">
        <el-input :model="form.companyName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox :model="checked">Set as default address</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Edit Forwarder</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        num1: "",
        num2: "",
        email: "",
        companyName: "",
      },
      checked: true,
      rules1: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3到5个字符", trigger: "blur" },
        ],
        num1: [{ required: true, message: "请输入电话", trigger: "blur" }],

        email: [{ required: true, message: "请输入邮件", trigger: "blur" }],
        companyName: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
        ],
      },


    };
  },
 
  
};
</script>
<style scoped>
.box {
  width: 500px;
  height: 800px;
  margin: auto;
}
.el-upload_text {
  padding: 40px;
}
.wrap {
  padding: 500px;
}
</style>

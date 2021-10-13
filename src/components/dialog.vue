<template>
  <el-dialog
    :title="id == null ? '新增' : '编辑'"
    :visible="true"
    width="width"
    @close="$emit('on-close')">
    <el-form
      ref="dialogForm"
      :model="dialogForm"
      :rules="rules"
      label-width="120px">
      <el-form-item label="sku编码" prop="code" >
        <el-input v-model="dialogForm.code" :disabled="id != null" type="text"  />
      </el-form-item>
      <el-form-item label="sku名称" prop="name">
        <el-input v-model="dialogForm.name" type="text" />
      </el-form-item>
      <el-form-item label="医疗注册编码" prop="registrationCode">
        <el-input v-model="dialogForm.registrationCode" type="text" />
      </el-form-item>
      <el-form-item label="产品名称" prop="productName">
        <el-input v-model="dialogForm.productName" type="text" />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="$emit('on-close')">取 消</el-button>
      <el-button type="primary" @click="onSubmit('dialogForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    test: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      dialogForm: {
        name: "",
        code: "",
        registrationCode: "",
        productName: "",
      },
    };
  },
  watch: {
    "id": function(val) {console.log(val)},
  },
  created(id) {
    this.dialogForm = Object.assign({}, this.test);
    console.log(this.test)
    if (id) {
      this.rules = {
        code: [{ required: true, message: "sku编码错误", trigger: "blur" }],
        registrationCode: [
          { required: true, message: "请输入医疗注册编码", trigger: "blur" },
        ],
      };
    } else {
      this.rules = {
        registrationCode: [
          { required: true, message: "请输入医疗注册编码", trigger: "blur" },
        ],
      };

    }
  },
  
  //取消
  methods: {
    //确认按钮
    onSubmit() {
      this.$refs["dialogForm"].validate((valid) => {
        if (valid) {
          this.showDialog = false;
          this.$emit("on-close");
          this.$emit("on-submit", this.dialogForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

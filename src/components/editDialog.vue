<template>
  <el-dialog
    :title="id == null ? '新增' : '编辑'"
    :visible="true"
    width="width"
    @close="$emit('on-close')"
  >
    <!-- :title='编辑申请活动' -->
    <el-form
      ref="dialogForm"
      :model="dialogForm"
      :rules="rules"
      label-width="80px"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input
          v-model="dialogForm.name"
          placeholder="请输入活动名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="dialogForm.region"  placeholder="请输入活动区域">
          <el-option label="北京" value="1"></el-option>
          <el-option label="天津" value="2"></el-option>
          <el-option label="上海" value="3"></el-option>
          <el-option label="廊坊" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" prop="time">
        <el-select v-model="dialogForm.time" placeholder="请输入活动时间">
          <el-option label="周五" value="1"></el-option>
          <el-option label="周六" value="2"></el-option>
          <el-option label="周日" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动人数" prop="count">
        <el-select v-model="dialogForm.count" placeholder="请输入活动人数">
          <el-option label="5人" value="1"></el-option>
          <el-option label="10人" value="2"></el-option>
          <el-option label="15人" value="3"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="$emit('on-close')">取 消</el-button>
      <!-- 设置触发更新的方法 -->
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
    title: String,
    test1: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    this.rules = {
      name: [
        {
          required: true,
          message: "请输入活动名称",
          trigger: "blur",
        },
      ],
      region: [
        {
          required: true,
          message: "请选择活动区域",
          trigger: "change",
        },
      ],
      time: [
        {
          required: true,
          message: "请选择活动时间",
          trigger: "change",
        },
      ],
      count: [
        {
          required: true,
          message: "请选择活动人数",
          trigger: "change",
        },
      ],
    };
    return {
      dialogFormVisible: false,
      dialogForm: {
        id: "",
        name: "",
        region: "",
        time: "",
        count: "",
      },
    
      flag: true,
      //是定义的一个全局变量，当保存的时候自动获取修改的那一行的索引，从而将修改后的数据更新到表格中。
      //0 null undefined NaN  ''
    };
  },
  //重置对象
  created() {
    //回显数据
    this.dialogForm = Object.assign({}, this.test1);
    this.dialogForm.test1 = this.test1;
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

      // console.log(this.dialogForm);
    },
  },
};
</script>
<style scoped></style>

<template>
  <div class="box">
    <el-button type="primary" @click="add">新增</el-button>
    <el-button @click="upPage">返回</el-button>
    <el-button type="primary">删除</el-button>
    <el-form label-width="80px">
      <el-form-item label="爱好" v-for="(item, index) in formArr" :key="index">
        <el-input v-model="item.model"> </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formArr: [{ model: "111" }],
    };
  },

  methods: {
    upPage() {
      this.$router.go(-1);
    },
    add() {
      this.formArr.push({ model: "" });
    },
  },
};
</script>

<style scope>
.box {
  width: 500px;
  margin: auto;
}
</style>

<template>
  <div class="menu">
    <el-row :gutter="24">
      <el-col :span="8">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item index="1">博客</el-menu-item>
          <el-menu-item index="2">专栏课程</el-menu-item>
          <el-menu-item index="3">下载</el-menu-item>
          <el-menu-item index="4">问答</el-menu-item>
          <el-menu-item index="5">插件</el-menu-item>
          <el-menu-item index="6">认证</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入"></el-input>
      </el-col>
      <el-col :span="8">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item index="7">会员中心</el-menu-item>
          <el-menu-item index="8">收藏</el-menu-item>
          <el-menu-item index="9">动态</el-menu-item>
          <el-submenu index="10">
            <template slot="title">消息</template>
            <el-menu-item index="10-1">评论</el-menu-item>
            <el-menu-item index="10-1">点赞</el-menu-item>
            <el-menu-item index="10-1">关注</el-menu-item>
            <el-menu-item index="10-1">系统通知</el-menu-item>
            <el-menu-item index="10-1">消息设置</el-menu-item>
          </el-submenu>
          <el-menu-item index="11">创作</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      input: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>

</style>

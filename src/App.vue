<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/todolist">记事本</router-link>|
      <router-link to="/table">表格新增</router-link>|
      <router-link to="/slideshow">轮播图</router-link>|
      <router-link to="/play">表单验证</router-link>|
      <router-link to="/list">弹窗</router-link>|
      <router-link to="/descriptions">描述列表</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

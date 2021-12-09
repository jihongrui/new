<template>
  <div class="content">
    <h2>TODOLIST</h2>
    <input
      v-model="input"
      placeholder="请输入今日待办项"
      @keyup.enter="add()"
      class="input"
    />
    <section>
      <ul class="list">
        <li v-for="(item, index) in list" :key="item">
          <div class="left-item">
            <span>{{ index + 1 }}.</span>{{ item }}
          </div>

          <div class="right-item">
            <el-button @click="del(index)">删除</el-button>
          </div>
        </li>
      </ul>
    </section>
    <footer v-show="list.length != 0">
      <div v-show="list.length != 0">
        <p>{{ this.list.length }}个待完成的事件</p>
      </div>
      <div>
        <el-button @click="clear" >全部清除</el-button> 
      </div>
     
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      list: ["看书", "听音乐", "打篮球", "玩手机"],
    };
  },
  methods: {
    add() {
      console.log(1111);
      this.list.push(this.input);
      this.input = "";
    },
    del(index) {
      this.list.splice(index, 1);
    },
    clear(){
      this.list.splice(0,this.list.length)

    }
  },
};
</script>
<style scoped>
/* 换一种思路 */
.content {
  width: 500px;
  margin: 0 auto;
  background: rgb(176, 190, 161);
  padding: 10px;
}
input {
  width: 350px;
  margin: 10px 20px;
  height: 30px;
  border-radius: 10px;
  list-style: none;
}
.list {
  list-style: none;
}

ul li {
  width: 400px;
  background: rgb(231, 233, 235);
  height: 45px;
  margin: 5px;
  padding: 2px;
  position: relative;
}
.left-item {
  position: absolute;
  left: 5px;
}
.right-item {
  position: absolute;
  right: 5px;
}
footer {
  width: 250px;
  height: 70px;
  display: flex;
  margin: 0 auto;
}

</style>

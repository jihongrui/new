<template>
  <div class="box">
    <div>
      <h1>记事本</h1>
      <input
        v-model="text"
        placeholder="请输入今日待办项"
        @keyup.enter="add"
        class="head-todo"
      />
    </div>

    <section>
      <ul class="todo-list">
        <li v-for="(item, index) in list" :key="item" class="list" >
            <div class="text">
              <span>{{ index + 1 }}{{'.'}}</span
              >{{ item }}
            </div>
            <button type="text" class="del" @click="del(index)">
              删除
            </button>
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="list.length != 0">
      <span class="todo-count" v-show="list.length != 0"
        ><Strong>{{ this.list.length }}</Strong
        >个待完成的事件
      </span>
      <button class="clear-completed" @click="clear" v-if="list.length != 0">
        Clear
      </button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["打游戏", "学习", "打篮球", "玩手机"],
      text: "",
    };
  },
  methods: {
    add: function() {
      this.list.push(this.text);
      this.text = "";
      localStorage
    },
    del: function(index) {
      this.list.splice(index, 1);
    },
    clear: function() {
      this.list.splice(0, this.list.length);
    },
  },
};
</script>
<style scoped>
.box {
  width: 800px;
  background-color: rgb(223, 221, 221);
  margin: auto;
}
h1 {
  color: rgb(114, 36, 36);
}

input {
  width: 400px;
  background-color: #fff;
  border: none;
  outline: medium;
  margin: auto;
  height: 40px;
  border-radius: 2px;
  box-shadow: 0px 0px 3px gray;
}
input::placeholder {
  color: rgb(180, 185, 189);
}
.todo-list {
  width: 400px;
  margin: auto;
  padding: 0px;
  list-style: none;
}
.todo-list li {
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 4px gray;
}
.list {
  position: relative;
}
.text {
  position: absolute;
  left: 3px;
  top: 8px;
}
.del {
  position: absolute;
  right: 2px;
  top: 8px;
}
/* 怎么把删除按钮靠右 */
</style>

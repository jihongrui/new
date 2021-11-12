<template>
  <div class="can">
    <h1 class="grade"></h1>
    <div class="grid">
      <div class="snake" v-for="(item, index) in snake" :key="`snake${index}`" :style="locationCompute(item.x, item.y)"></div>
      <div class="food" v-for="(item, index) in foods" :key="`food${index}`" :style="locationCompute(item.x, item.y)"></div>
    </div>
    <el-button type="primary" @click="active()">开始游戏</el-button>
    <el-button @click="stopGame()" type="warning">暂停游戏</el-button>
    <el-button @click="reStart()" type="danger">重新开始</el-button>
  </div>
</template>
<script>
export default {
  // Grid 50*50的格子 
  data() {
    return {
      foods: [],
      direction: 3,
      timer: null,
      snake: [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
      ], //(x, y) 组成蛇的每一块儿的位置
      xStep: 1,
      yStep: 1,
    };
  },
  created() {
    // 随机生成3个食物
    this.foods = this.generateFoods(3);
  },
  mounted() {

    window.addEventListener("keyup", (event) => {
      // event.key = ArrowUp 上
      switch (event.key) {
        case "ArrowUp":
          this.direction = 0;
          break;
        case "ArrowDown":
          this.direction = 1;
          break;
        case "ArrowLeft":
          this.direction = 2;
          break;
        case "ArrowRight":
          this.direction = 3;
          break;
        default:
          break;
      }
      this.snakeMove();
    });
  },
  methods: {


    // 暂停游戏
    stopGame() {
      clearInterval(this.timer);
      this.timer = null;
    },
    // 重新开始
    reStart() {
      this.snake = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
      ]; //(x, y) 组成蛇的每一块儿的位置
      this.foods = this.generateFoods(3);
      this.direction = 3;
      this.active();
    },
    //
    isEat() {
      let head = this.snake[this.snake.length - 1];
      let isEat = false;
      // 消除吃掉的
      this.foods = this.foods.filter((food) => {
        if (head.x === food.x && head.y === food.y) {
          console.log("aaaaa", head);
          isEat = true;
          this.eat(); // 加长蛇身
          return false;
        }
        return true;
      });
      // 添加一个新食物，使食物总量保持不变
      if (isEat) {
        this.foods.push(...this.generateFoods(1));
      }
    },
    // 吃食物
    eat() {
      let tail = this.snake[0];
      let xStep = 0,
        yStep = 0;
      if (this.direction === 0) {
        yStep = -1;
      } else if (this.direction === 1) {
        yStep = 1;
      } else if (this.direction === 2) {
        xStep = -1;
      } else if (this.direction === 3) {
        xStep = 1;
      }
      this.snake.unshift({ x: tail.x - xStep, y: tail.y - yStep });
    },
    // 让蛇不断地动起来
    active() {
      this.timer = setInterval(() => {
        this.snakeMove();
      }, 500);
    },

    // 随机生成食物
    generateFoods(total) {
      const foods = [];
      for (let i = 0; i < total; i++) {
        const foodX = Math.floor(Math.random() * 50);
        const foodY = Math.floor(Math.random() * 50);
        foods.push({ x: foodX, y: foodY });
      }
      return foods;
    },
    // 位置计算
    locationCompute(x, y) {
      return {
        left: x * 10 + "px",
        top: y * 10 + "px",
      };
    },
    //蛇开始动
    move(xStep, yStep) {
      let head = this.snake[this.snake.length - 1];
      if (0 <= head.x && 0 <= head.y && head.x < 49 && head.y < 49) {
        this.snake.push({ x: head.x + xStep, y: head.y + yStep });
        this.snake.shift();
      } else {
        clearInterval(this.timer);
        this.timer = null;
        alert("蛇越界了！");
      }
    },
    // 改变方向
    changeDirection(direction) {
      this.direction = direction;
      this.snakeMove();
    },
    // 让蛇动起来
    snakeMove() {
      switch (this.direction) {
        case 0: // 上
          this.move(0, -1);
          break;
        case 1: // 下
          this.move(0, 1);
          break;
        case 2: // 左
          this.move(-1, 0);
          break;
        case 3: // 右
          this.move(1, 0);
          break;
        default:
          break;
      }
      this.isEat();
    },
  },
};
</script>
<style scope>
.grid {
  background-color: #ddd;
  width: 500px;
  height: 500px;
  position: relative;
  margin: 20px auto;
}
.grid .snake {
  background-color: #000;
  position: absolute;
  border: 1px solid #ccc;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
}

.grid .food {
  background-color: red;
  position: absolute;
  border: 1px solid #ccc;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
}
</style>

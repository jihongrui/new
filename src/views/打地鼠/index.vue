<template>
  <div class="game-interface">
    <div class="game-background">
      <div class="canvas">
        <!-- <div
          class="hole"
          v-for="(item, index) in hole"
          :key="`hole${index}`"
          :style="location(item.x, item.y)"
        ></div> -->
        <div
          class="hamster"
          v-for="(item, index) in hamsters"
          :key="`hamster${index}`"
          :style="location(item.x, item.y)"
          @click="clickHamster(index)"
        ></div>
      </div>
    </div>
    <div class="game-introduction">
      <p>分数</p>
      <el-button type="primary" @click="begin">开始</el-button>
      <el-button type="primary" @click="pause">暂停</el-button>
      <el-button type="primary">继续</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hamster: [],
      setNum: 6, //地洞的总数
      timer: null,
      show: false,
      // hole: [
      //   { x: 0, y: 0 },
      //   { x: 1, y: 0 },
      //   { x: 2, y: 0 },
      //   { x: 0, y: 1 },
      //   { x: 1, y: 1 },
      //   { x: 2, y: 1 },
      // ],
    };
  },
  created() {
    // 随机生成3个地鼠
    this.hamsters = this.generateHamster(3);
  },
  methods: {
    begin() {
      // this.hole = [
      //   { x: 0, y: 0 },
      //   { x: 1, y: 0 },
      //   { x: 2, y: 0 },
      //   { x: 0, y: 1 },
      //   { x: 1, y: 1 },
      //   { x: 2, y: 1 },
      // ];

      this.timer = setInterval(() => {
        console.log(1111);
        this.hamsters = this.generateHamster(3);
      }, 300);
    },
    pause() {
      clearInterval(this.timer);
      this.timer = null;
    },
    location(x, y) {
      return {
        left: x * 145 + "px",
        top: y * 125 + "px",
      };
    },
    generateHamster(num) {
      const hamsters = [];
      for (let i = 0; i < num; i++) {
        const hamsterX = Math.floor(Math.random() * 3);
        const hamsterY = Math.floor(Math.random() * 2);
        hamsters.push({ x: hamsterX, y: hamsterY });
      }
      return hamsters;
    },
    clickHamster() {
      this.background = "~@/img/灰太狼隐藏.png";
    },
    
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.game-interface {
  width: 800px;
  margin: 10px auto;
  display: flex;
  position: relative;
}
.game-background {
  width: 600px;
  height: 500px;
  background: url("~@/img/地鼠背景图.jpg") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
}
.pan {
  position: absolute;
  width: 60px;
  height: 60px;
  //让鼠标在锅中心，
  margin-left: -30px;
  margin-top: -30px;
  //可以在锅图片上加border，看看没有设置margin时的效果

  top: 0;
  left: 0;
  cursor: none;
  z-index: 100;
}
.canvas {
  width: 397px;
  height: 250px;
  margin: 191px auto 0px;
  position: relative;
}
// .hole {
//   position: absolute;
//   border: 1px solid rgb(11, 14, 13);
//   box-sizing: border-box;
//   width: 145px;
//   height: 125px;
// }

.hamster {
  width: 145px;
  height: 125px;
  position: absolute;
  box-sizing: border-box;
  background: url("~@/img/灰太狼.png") no-repeat;
  border: 1px solid rgb(11, 14, 13);
}

.hide {
  width: 145px;
  height: 125px;
  position: absolute;
  box-sizing: border-box;
  background: url("~@/img/灰太狼隐藏.png") no-repeat;
}

.game-introduction {
  padding: 15px;
}
</style>

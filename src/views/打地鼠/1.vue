<template>
  <div class="game-interface">
    <div class="game-background" @mousemove="move">
      <img src="@/img/平底锅.png" alt="" class="pan" />
      <div class="canvas">
        <div
          class="hole"
          v-for="(item, index) in holes"
          :key="index"
          :style="hamster"
          @click="clickHamster">
          {{ index }}
        </div>
      </div>
    </div>
    <div class="game-introduction">
      <h3>分数{{ score }}</h3>
      <el-button type="primary" @click="begin">开始</el-button>
      <el-button type="primary" @click="pause">暂停</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      holes: 6, //地洞的总数
      timer: null,
      hamster: {
        status: 0, //出现
      },
      imgs: ['灰太狼.png','灰太狼隐藏.png'], //存储灰太狼
      index: 0,
      clickNum: 0, //击中次数
      score: 0, //分数
      isHit:false,//是否击打
      holesCoordinates: [
        {
          x: 96,
          y: 197,
        },
        {
          x: 255,
          y: 197,
        },
        {
          x: 414,
          y: 197,
        },
        {
          x: 96,
          y: 320,
        },
        {
          x: 255,
          y: 230,
        },
        {
          x: 414,
          y: 320,
        },
      ], //洞口坐标
    };
  },
  created() {},
  //  1:鼠标按下ground,鼠标锤子改变，鼠标弹起锤子恢复
  //     2:创建洞穴
  //     3:创建老鼠
  //     4:老鼠出现
  //     5:老鼠消失 -> 1: 不敲打自己消失 2: 敲打盒子消失
  methods: {
    begin() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.hamster = this.makeImg(3);
      }, 2000);
    },
    clickHamster() {
      //点击到就改变状态，并更改图片
      this.clickNum++;
      this.score *= 10;
      this.status = 1;
    },
    //创建灰太狼
    makeImg(num = 3) {
      
      for (let i = 0; i < num; i++) {
        this.index = Math.floor(Math.random() * this.holes);
        //向灰太狼数组里面添加灰太狼
        //向洞穴里面添加灰太狼
    
      }
    },
    disappear() {

    },
    move() {
      var pan = document.querySelector(".pan");
      var e = e || window.event;
      pan.style.left = e.clientX-360 + "px";
      pan.style.top = e.clientY-70  + "px";
    },
    pause() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style lang="less">
*{
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
  width: 476px;
  height: 246px;
  margin: 181px auto 0px;
  position: relative;
}
.hole {
  width: 100px;
  height: 100px;
  margin: 10px 27px;
  padding: 1px;
  float: left;
  // background: url("~@/img/灰太狼.png") no-repeat;
  border: 1px solid red;
}
img {
  width: 100px;
  height: 100px;
}
.game-introduction {
  padding: 10px;
}
</style>

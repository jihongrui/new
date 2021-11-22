<template>
  <div>
    <div class="box">
      <div class="canvas">
        <div class="hamster" v-show="show">
          
         
        </div>
      </div>
    </div>
    <el-button type="primary" @click="begin">开始</el-button>
    <el-button type="primary" @click="pause">暂停</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hamsters: 6, //地鼠的总数
      setNum: 6, //地洞的总数
      timer: null,
      show: false,
    };
  },
  created() {
    // 随机生成3个地鼠
    // this.hamsters = this.generateHamster(5);
  },
  methods: {
    
    begin() {
      // this.hamsters = this.generateHamster(5);
      this.timer = setInterval(() => {
        this.show = !this.show;
        console.log(this.show);
      }, 300);
    },
    pause() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
};
</script>

<style scoped>
.box {
  width: 600px;
  height: 500px;
  margin: 10px auto;
  background: url("~@/img/地鼠背景图.jpg") no-repeat;
  background-size: 100% 100%;
  /* background: chartreuse; */
  overflow: hidden;
}
.canvas {
  width: 600px;
  height: 300px;
  margin: 200px auto 0px;
  border: 1px solid red;
  position: relative;
}

.img,
.img2,
.img3,
.img4,
.img5,
.img6 {
  width: 108px;
  height: 101px;
  position: absolute;
  background: url("~@/img/灰太狼.png") repeat;
}
.img {
  left: 94px;
  top: 10px;
}
.img2 {
  left: 246px;
  top: 10px;
}
.img3 {
  left: 410px;
  top: 10px;
}
.img4 {
  left: 94px;
  top: 128px;
}
.img5 {
  left: 246px;
  top: 128px;
}
.img6 {
  left: 410px;
  top: 128px;
}
.hiddenImg {
  width: 108px;
  height: 101px;
  position: absolute;
  left: 94px;
  top: 204px;
  background: url("~@/img/灰太狼隐藏.png") no-repeat;
}
</style>

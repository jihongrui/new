<template>
  <!-- 点击“<”则图片会向左翻页，点击“>”则图片向右翻页，如果目前是第一页，则“<”会隐藏，如果当前页是最后一页，则“>”会隐藏 -->
  <div class="box">
    <div class="wrap">
      <h2 class="v-title">校区环境</h2>

      <!-- 左箭头 -->
      <a href="javascript:void(0)" @click="prev" v-show="index != 0">
        <img src="../img/R-C.png" alt="上一页" class="prev" />
      </a>
      <!-- 图片 -->
      <img v-bind:src="imgArr[index].src" alt="图片" />
      <!-- 右箭头 -->
      <a
        href="javascript:void(0)"
        @click="next"
        v-if="index < imgArr.length - 1"
      >
        <img src="../img/l.png" alt="下一页" class="next" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "change",
  data() {
    return {
      index: 0,
      imgArr: [
        {
          src: require("../img/01.jpg"),
        },
        {
          src: require("../img/02.jpg"),
        },
        {
          src: require("../img/03.jpg"),
        },
        {
          src: require("../img/04.jpg"),
        },
        {
          src: require("../img/05.jpg"),
        },
      ],
    };
  },
  methods: {
    prev: function() {
      this.index--;
    },
    next: function() {
      this.index++;
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.wrap {
  background-color: #fff;
  width: 500px;
  position: relative;
  margin: auto;
}
img {
  width: 400px;
  height: 400px;
}
.prev {
  width: 45px;
  height: 100px;
  background-color: rgb(189, 189, 185);
  position: absolute;
  vertical-align: middle;
  top: 150px;
  left: 0px;
}

.next {
  width: 45px;
  height: 100px;
  background-color: rgb(189, 189, 185);
  position: absolute;
  vertical-align: middle;
  top: 150px;
  right: 0px;
}
</style>

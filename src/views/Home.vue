<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 计数器功能区域 -->
    <div class="input-num">
      <el-button @click="sub">-</el-button>
      <span>{{num}}</span>
      <el-button @click='add'>+</el-button>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      num:1
    }
    
  },
  methods:{
    sub:function(){
      if(this.num>0){
        this.num--;
      }else{
        alert("不能再减了，已经是最小值")
      }
    },
    add:function(){
      if(this.num<10){
        this.num++;
      }else{
        alert("不能再加了，已经是最大值")
      }
    }
  }
}
</script>
<style scoped>
 .input-num{
   margin:20px auto;
 }
</style>

<template>
  <div class="box">
<el-descriptions title="用户信息" >
      <el-descriptions-item label="用户名">hknk</el-descriptions-item>
      <el-descriptions-item label="手机号">18246562321</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
       <el-descriptions-item label="联系地址">
           江苏省
           </el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>    
    </el-descriptions>
  </div>
</template>
<script>


export default ({
 data(){
     return{

     }
 }
});
</script>
<style scoped>
.box{
    width: 800px;
    height: 300px;
    margin: auto;
}
</style>

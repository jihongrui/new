<template>
  <div>
    <div class="box">
      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名">{{ name }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ phone }}</el-descriptions-item>
        <el-descriptions-item label="居住地">{{ where }}</el-descriptions-item>
        <el-descriptions-item label="状态">
          {{ status }}
        </el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">{{ age }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="box">
      <el-descriptions title="商品信息" direction="vertical" :column="5" border>
     
        <el-descriptions-item label="订单号"
          >{{ orderNum }}
        </el-descriptions-item>
        <el-descriptions-item label="sku">{{ sku }}</el-descriptions-item>
        <el-descriptions-item label="产品">{{ product }}</el-descriptions-item>
        <el-descriptions-item label="颜色">{{ color }}</el-descriptions-item>
        <el-descriptions-item label="规格">{{ size }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="box">
      <el-descriptions title="线下支付信息"  >
        <el-descriptions-item label="支付类型">{{paymentType}}</el-descriptions-item>
        <el-descriptions-item label="全款">{{full}}</el-descriptions-item>
        <el-descriptions-item label="支付状态">{{payStatus}}</el-descriptions-item>
        <el-descriptions-item label="订单金额">{{money}}</el-descriptions-item>
       <div>
         <div>附件:</div>
         <template >

         </template>
         <!-- <div >附件:</div>
         <template v-if="showAttachments(detail.attachments)">
           <el-image
             v-for="fileItem in detail.attachments"
             :key="fileItem"
             :src="fileImg(fileItem)"
             @click="imgPreviewItem"></el-image>

         </template> -->
       </div>

      </el-descriptions>

    </div>
    <el-button type="primary" @click="gotoLick()">确认</el-button>
    <el-button>返回</el-button>
    <el-button type="danger">驳回</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "shdka",
      phone: "1825896473",
      where: "河北省",
      status: "进行中",
      age: "2020级",
      orderNum: "45678",
      sku: "MADSH1234",
      product: "校服",
      color: "blue",
      size: "L",
      paymentType:'线下支付',
      full:'是的',
      payStatus:'已支付',
      money:'200元'
    };
  },
  methods: {
    gotoLick() {
      this.$router.push("/new");
    },
  
   
  },
};
</script>
<style scoped>
.box {
  width: 800px;
  height: 150px;
  margin: 20px auto;
  border: 1px solid rgb(122, 120, 120);
  padding: 20px;
  border-radius: 20px;
}
</style>

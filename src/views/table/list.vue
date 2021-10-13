<template>
  <div>
    <el-button type="primary" @click="modify()" class="v-add">新增</el-button>
    <div>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="code" label="sku编码" width="width">
        </el-table-column>
        <el-table-column prop="name" label="sku名称" width="width">
        </el-table-column>
        <el-table-column
          prop="registrationCode"
          label="医疗注册编码"
          width="width"
        >
        </el-table-column>
        <el-table-column prop="productName" label="产品名称" width="width">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="modify(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Dialog
      ref="dialog"
      v-if="showDialog"
      :id="id"
      :test="test"
      @on-close="onClose"
      @on-submit="onSubmit">
    </Dialog>
  </div>
</template>
<script>
import Dialog from "@/components/dialog";
export default {
  //注册组件
  components: { Dialog },
  data() {
    return {
      loading: false,
      id: '1',
      test:'',
      showDialog: false,
      tableData: [
        {
          code: "123456",
          name: "手套",
          registrationCode: "201293",
          productName: "蓝色手套",
        },
        {
          code: "madhsicb",
          name: "挂耳平面口罩",
          registrationCode: "302089",
          productName: "三层口罩",
        },
      ],
    };
  },
  methods: {
    // getTableList() {
    //   this.loading = true;
    //   ({
    //     ...this.form,
    //   }
    //     .then((res) => {
    //       //判断是否取到值
    //       if (res.code == 0) {
    //         this.tableData = res?.data?.records ?? [];
    //       } else {
    //         this.tableData = [];
    //         this.$message.error(res.message || "获取数据失败");
    //       }
    //     })
    //     .finally(() => (this.loading = false)));
    // },
    //关闭弹框
    onClose() {
      this.showDialog = false;
    },
    //修改 编辑的时候肯定是有id的，新增的时候是没有的
    modify(row) {
       if (row) {
        this.test = row;
        
      } else {
        this.id = null;
        this.test = {};
      }
      this.showDialog = true;
    },
    //提交
    onSubmit(dialogForm) {
      // console.log(dialogForm);
      //新增
      if (this.id == null) {
        this.tableData.push({
          code: dialogForm.code,
          name: dialogForm.name,
          registrationCode: dialogForm.registrationCode,
          productName: dialogForm.productName,
        });
      }
      //修改页面
      else {
        // this.tableData[this.id].code=dialogForm.code;
        // this.tableData[this.id].name=dialogForm.name;
        Object.assign(this.tableData[this.id], dialogForm.code,dialogForm);
      }
      this.showDialog = false;
    },
  },
};
</script>
<style scoped>
.v-add {
  margin: 20px;
}
</style>

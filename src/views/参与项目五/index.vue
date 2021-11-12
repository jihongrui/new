<template>
  <div>
    <div>
      <span>销售主体列表</span>
      <el-button type="primary">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="salesSubjectName"
        label="销售主体名称"
        width="width">
      </el-table-column>
      <el-table-column
        prop="salesSubjectAddress"
        label="销售主体详细地址"
        width="width">
      </el-table-column>
      <el-table-column
        header-align="center"
        align="center"
        prop="prop"
        label="操作">
        <template v-slot="{ row }">
          <el-button type="text" @click="edit(row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <edit :show="showEdit" :id="id" @close="onClose"></edit>
  </div>
</template>
<script>
export default {
  data() {
    return {
        id:'',
      tableData: [
        {
          salesSubjectName: "shdsh",
          salesSubjectAddress: "sdsfd",
        },
      ],
      showEdit:false,
    }

  },
  created(){
      this.getList();
  },
  methods:{
  
  }
};
</script>

<template>
  <div>
    <a-form :form="form" :model="form" :label-col="{ span: 10 }" layout="inline">
      <a-row>
        <a-col :span="7">
          <a-form-item label="客户账号" props="userName">
            <a-input
              v-model="form.userName"
              maxlength="100"
              placeholder="请输入"
              type="text"
            />
          </a-form-item>
          <a-form-item label="客户层级" props="distance">
            <a-select v-model="form.distance">
              <a-select-option value="">全部</a-select-option>
              <a-select-option value="1">一级客户</a-select-option>
              <a-select-option value="2">二级客户</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <a-col :span="10">
          <a-button type="primary">查询</a-button>
          <a-button>重置</a-button>
        </a-col>
      </a-row>
    </a-form>
    <a-table
      bordered
      :columns="columns"
      :data-source="tableData"
      :pagination="pagination"
      :loading="loading"
    >
      <template slot="operation" slot-scope="">
        
         </template>
    </a-table>
  </div>
</template>
<script>
import columns from "./columns.js";
export default {
  data() {
    this.columns = columns;
    return {
      loading: false,
      form: {
        userName: "",
        distance: "",
      },
      tableData: [
        {
          distance: "一级客户",
          useName: "14528798",
          name: "ahhh",
          isLyncus: "是",
        },
      ],
      pagination: {
        pageSize: 10,
        pageNo: 1,
        total: 0,
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped></style>

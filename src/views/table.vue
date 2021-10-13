<template>
  <div class="v-box">
    <div class="v-header">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="活动名称" prop="name">
              <el-select
                v-model="form.name"
                placeholder="请输入活动名称"
                clearable
              >
                <el-option
                  v-for="(item, index) in dict.names"
                  :value="item.value"
                  :label="item.label"
                  :key="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动区域" prop="region">
              <el-select
                v-model="form.region"
                placeholder="请输入活动区域"
                clearable
              >
                <el-option
                  v-for="(item, index) in dict.regions"
                  :value="item.value"
                  :label="item.label"
                  :key="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="活动时间" prop="time">
              <el-select
                v-model="form.time"
                placeholder="请输入活动时间"
                clearable
              >
                <el-option
                  v-for="(item, index) in dict.times"
                  :value="item.value"
                  :label="item.label"
                  :key="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="活动人数" prop="count">
              <el-select
                v-model="form.count"
                placeholder="请输入活动人数"
                clearable
              >
                <el-option
                  v-for="(item, index) in dict.counts"
                  :value="item.value"
                  :label="item.label"
                  :key="index"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <el-form-item>
              <el-button type="primary" @click="onSearch">搜索</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item>
              <el-button type="primary" @click="reset">重置</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item>
              <el-button type="primary" @click="edit()">新增</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <editDialog
      ref="editDialog"
      v-if="showDialog"
      :id="id"
      :test1="test"
      @on-close="onClose"
      @on-submit="onSubmit"
    />
    <div>
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="index" width="60"> </el-table-column>
        <el-table-column prop="name" label="活动名称" width="width">
        </el-table-column>
        <el-table-column prop="region" label="活动区域" width="width">
        </el-table-column>
        <el-table-column prop="time" label="活动时间" width="width">
        </el-table-column>
        <el-table-column prop="count" label="活动人数" width="width">
        </el-table-column>
        <el-table-column prop="operation" label="操作" width="width">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button type="text" @click="del(id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
//导入组件
import editDialog from "@/components/editDialog";
import { dict } from "./columns";
import { times, regions, counts } from "./columns";
export default {
  //注册组件
  components: {
    editDialog,
  },
  data() {
    this.initialData = [
      {
        name: "爬山",
        region: "北京",
        time: "周六",
        count: "10人",
      },
      {
        name: "漂流",
        region: "天津",
        time: "周日",
        count: "5人",
      },
      {
        name: "过山车",
        region: "廊坊",
        time: "周日",
        count: "5人",
      },
      {
        name: "激流勇进",
        region: "衡水",
        time: "周日",
        count: "5人",
      },
      {
        name: "做手工",
        region: "沧州",
        time: "周日",
        count: "5人",
      },
    ];

    return {
      form: {
        id: "",
        region: "",
        name: "",
        time: "",
        count: "",
      },
      id: "1",
      showDialog: false,
      tableData: [...this.initialData],
      // tableData:[],
      test: {},
    };
  },
  computed: {
    dict() {
      return dict;
    },
    times() {
      return times;
    },
    regions() {
      return regions;
    },
    counts() {
      return counts;
    },
  },
  methods: {
    //搜索按钮
    onSearch() {
      // console.log(this.form);
      if (this.form.name) {
        this.tableData = this.initialData.filter(
          (item) =>
            item.name ===
            this.dict.names.find((item) => item.value == this.form.name).label
        );
      }
      if (this.form.region) {
        this.tableData = this.initialData.filter((item) => {
          const target = this.dict.regions.find(
            (item) => item.value == this.form.region
          ).label;
          return item.region === target;
        });
      }
      if (this.form.time) {
        this.tableData = this.initialData.filter(
          (item) =>
            item.time ===
            this.dict.times.find((item) => item.value == this.form.time).label
        );
      }
      if (this.form.count) {
        this.tableData = this.initialData.filter(
          (item) =>
            item.count ===
            this.dict.counts.find((item) => item.value == this.form.count).label
        );
      } else {
        alert("没有查询到对应信息");
      }
      //获取到活动名称的内容
      //用拿到的内容跟下面表格中的内容相比较
      //如果相同则渲染出当前这条数据到页面
    },
    //重置 不是将表单重置为空，而是重置为初始值
    reset() {
      this.$refs.form.resetFields();
      this.tableData = [...this.initialData];
    },

    //关闭弹框
    onClose() {
      this.showDialog = false;
    },
    //编辑 编辑的时候肯定是有id的，新增的时候是没有的
    edit(index, row) {
      //index,row
      //需要知道编辑的哪条数据 id
      //点击编辑弹出弹框并回显数据
      //  console.log(row)当前行的数据
      if (row) {
        this.test = row;
        this.id = index;
      } else {
        this.id = null;
        this.test = {};
      }
      this.showDialog = true;
      //监听获取已经修改的值然后再赋值到当前行
      //编辑后进行赋值显示在table表格
    },
    onSubmit(dialogForm) {
      console.log(this.id);
      // console.log(dialogForm);
      //把后面对象的值复制到第一个对象
      if (this.id == null) {
        this.tableData.push({
          name: dialogForm.name,
          region: regions[dialogForm.region],
          time: times[dialogForm.time],
          count: counts[dialogForm.count],
        });
        console.log(dialogForm);
        console.log("table====>", this.tableData);
      } else {
        Object.assign(this.tableData[this.id], dialogForm);
      }

      //  this.tableData[this.id] = Object.assign({}, this.dialogForm);
      // console.log(this.id);

      this.showDialog = false;
    },
    //删除此行数据
    //删除方法del(index，id)，index是为了删除当前数组的第index条数据，从而渲染出删除数据后的正确数组，id是为了传递给后端进行数据库的删除操作
    del(id) {
      this.$confirm("删除本条信息记录后不再显示", "你确定要删除本条信息吗？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.tableData.splice(id, 1);
        //index代表删除行的索引
        //row代表的是对象数组
      });
    },
  },
};
</script>
<style scoped>
.v-box {
  margin: 20px;
}
.v-header {
  margin: 20px 0px;
}
</style>

export default [
  {
    title: "序号",
    type: "index",
  },
  {
    title: "客户层级",
    dataIndex: "distance",
  },

  {
    title: "客户账号",
    dataIndex: "useName",
    scopedSlots: { customRender: "useName" },
  },
  {
    title: "客户昵称",
    dataIndex: "name",
  },
  {
    title: "是否领客",
    dataIndex: "isLyncus",
    scopedSlots: { customRender: "isLyncus" },
  },
];

<template>
  <el-dialog
    title="任务模板管理"
    v-model="showTemplateManagement"
    :before-close="handClosed"
    width="80%"
  >
    <div>
      <el-row :align="'bottom'" type="flex" :gutter="20">
        <el-col :span="5">
          <el-input v-model="issueId" placeholder="请输入任务ID"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="addOrUpdateHandle()">
            增加模板
            </el-button>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table :data="tableData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      showTemplateManagement: false,
      issueId: "",
      tableData: [
        {
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
        {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District',
        },
      ]
    };
  },
  methods: {
    show() {
      this.showTemplateManagement = true;
    },
    searchTemplates() {
   
    },
  },
  mounted() {
    this.searchTemplates();
  },
};
</script>
<style>

</style>
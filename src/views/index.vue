<template>
  <div class="issueView">
    <el-row :align="'bottom'" type="flex" :gutter="20">
      <el-col :span="5">
        <el-input v-model="name" placeholder="请输入搜索关键字..."></el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" icon="Search" circle />
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addOrUpdateHandle()">
          创建任务
         </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="templateManagement()">
          模板管理
        </el-button>
      </el-col>
      
    </el-row>
    
    <div>
      <el-table :data="tableData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </div>

    <add-issue v-if="addOrUpdateVisible" ref="addIssue" />
    <issue-template v-if="templateManagementVisible" ref="templateManagement" />
  </div>
</template>

<script>
import AddIssue from "./addIssue.vue";
import IssueTemplate from './issueTemplate.vue'

export default {
  components: {
    AddIssue,
    IssueTemplate,
  },
  data() {
    return {
      addOrUpdateVisible: false,
      templateManagementVisible: false,
      name: "",
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
    addOrUpdateHandle() {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addIssue.add();
      });
    },
    templateManagement() {
      this.templateManagementVisible = true;
      this.$nextTick(() => {
        this.$refs.templateManagement.show();
      });
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 10px;
}
.issueView {
  margin: 20px;
}
</style>
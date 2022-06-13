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
        <el-button type="success" @click="addOrUpdateHandle()">
          创建任务
         </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="templateManagement()">
          模板管理
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="baseConfig()">
          基础配置
        </el-button>
      </el-col>
      <el-col :span="2">
       <el-button @click="getData">测试获取数据</el-button>
      </el-col>
    </el-row>
    
    <div>
      <el-table :data="tableData">
        <el-table-column property="id" label="Id" width="250" />
        <el-table-column property="role_name" label="RoleName" width="250" />
        <el-table-column property="status" label="Status" />
      </el-table>
    </div>

    <add-issue v-if="addOrUpdateVisible" ref="addIssue" />
    <issue-template v-if="templateManagementVisible" ref="templateManagement" />
    <base-config v-if="baseConfigVisible" ref="baseConfig" />
  </div>
</template>

<script>
import AddIssue from "./addIssue.vue";
import IssueTemplate from './issueTemplate.vue'
import BaseConfig from './baseConfig.vue'
import {
  authRoleList
} from '../api/test'

export default {
  components: {
    AddIssue,
    IssueTemplate,
    BaseConfig
  },
  data() {
    return {
       query: {
        role_name: '',
        status: '',
        page: 1,
        limit: 20
      },
      tableData: [],
      total: 0,
      addOrUpdateVisible: false,
      templateManagementVisible: false,
      baseConfigVisible: false,
      name: ""
    };
  },
  methods: {
     getData(){
      authRoleList(this.query)
        .then(response => {
          console.log(response)
          this.loading = false
          this.tableData = response.data.list || []
          this.total = response.data.total || 0
        })
        .catch(() => {
          this.loading = false
          this.list = []
          this.total = 0
        })
    },
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
    baseConfig() {
      this.baseConfigVisible = true;
      this.$nextTick(() => {
        this.$refs.baseConfig.show();
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
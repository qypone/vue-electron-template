<template>
  <el-dialog
    title="基础配置管理"
    v-model="isShow"
    :before-close="handClosed"
    width="40%"
  >
  <div>
    <el-form :model="form" label-width="80px" class="formClass">
      <el-form-item label="域名">
        <el-input v-model="form.domainName" placeholder="例如 http://jira.qypone.com" />
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="contactTest">连接测试</el-button>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      form: {
        domainName: "",
        account: "",
        password: ""
      }
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    searchBaseConfig() {
      console.log('searchBaseConfig...');
    },
    onSubmit() {
      console.log('submit...');
    },
    contactTest() {
      console.log('contact Test...');
    },
  },
  mounted() {
    this.searchBaseConfig();
  },
};
</script>
<style>
.formClass {
  
}
</style>
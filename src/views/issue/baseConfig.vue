<template>
  <el-dialog
    title="基础配置管理"
    v-model="isShow"
    :before-close="handClosed"
    width="35%"
  >
  <div>
    <el-form :model="form" label-width="80px">
      <el-form-item label="域名">
        <el-input v-model="form.domainName" placeholder="例如 http://jira.qypone.com" />
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password" show-password />
        <el-tag class="my-eltag" type="danger">仅可保存一个配置,保存后会覆盖之前的配置</el-tag>
      </el-form-item>
      <el-form-item>
        <el-button class="contactTest-btn" type="primary" @click="contactTest">连接测试</el-button>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-dialog>
</template>

<script>
import {saveBaseConfig, getBaseConfig} from '../../api/issueDb';
import {get} from '../../utils/request';

export default {
  data() {
    return {
      isShow: false,
      form: {
        domainName: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    getBaseConfig() {
      console.log('getBaseConfig...');
      getBaseConfig()
        .then(response => {
          this.form = response.data;
        })
        .catch(() => {
          this.$message.error('获取基础配置失败')
        })
    },
    onSubmit() {
      console.log('submit...');
      saveBaseConfig(this.form)
        .then(response => {
          if (response.code) {
            this.$message.error(response.message)
            return false
          }
          this.$message.success('操作成功');
          this.isShow = false;
        })
    },
    contactTest() {
      console.log('contact Test...');
      //https://your-domain.atlassian.net/rest/api/2/serverInfo
      let url = this.form.domainName + '/rest/api/2/serverInfo';
      console.log(url)
      get(url, null);
    },
  },
  mounted() {
    this.getBaseConfig();
  },
};
</script>
<style>
.my-eltag {
  margin-top: 5px;
}
.contactTest-btn {
  margin-left: 15%;
}
</style>
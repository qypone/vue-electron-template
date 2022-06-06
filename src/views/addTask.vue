<template>
  <el-dialog
    title="创建任务"
    v-model="dialogVisible"
    :before-close="handClosed"
    fullscreen=true
  >
    <div>
      <el-button type="primary" round @click="addLine">添加一行</el-button>
      <el-button type="success" round @click="save">提交</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="createError"
      >
        <el-table-column prop="summary" label="标题" align="center" style="width: 20%">
          <template #default="scope">
            <el-input
              v-model="scope.row.summary"
              placeholder="标题"
              @keyup="descKeyUp(scope.$index)"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="templateNo" label="模板" align="center" type="“selection“" style="width: 20%">
          <template #default="scope">
            <el-select
              v-model="scope.row.templateNo"
              filterable
              @change="selectTemplet(scope.row.templateNo, scope.$index)"
              placeholder="请选择"
            >
              <el-option
                v-for="item in templates"
                :key="item.id"
                :label="item.templateName"
                :value="item.id"
              >
                {{ item.templateName }}
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="desc" label="描述" align="center" style="width: 35%">
          <template #default="scope">
            <el-input v-model="scope.row.desc" placeholder="issue description"> </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="point" label="点数" align="center" style="width: 10%">
          <template #default="scope">
            <el-input
              v-model="scope.row.point"
              placeholder="10"
              @keyup="inputChange(scope.$index)"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="sprint" label="sprint" align="center"  style="width: 15%">
          <template #default="scope">
            <el-input v-model="scope.row.sprint" placeholder="sprint id"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="assignee" label="分配人" align="center"  style="width: 15%">
          <template #default="scope">
            <el-input
              v-model="scope.row.assignee"
              placeholder="jira id"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="bookbuytime" style="margin-right: 20px" label="操作">
          <template #default="scope">
            <el-button
              v-if="!scope.row.editing"
              size="mini"
              type="danger"
              icon="Delete" 
              @click="handleDelete(scope.$index, scope.row)"
            >
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          summary: "",
          templateNo: "",
          desc: "任务描述：",
          duedate: "",
          point: "0",
          lix: "",
          sprint: "",
          assignee: "",
          epiclink: "",
          uclink: "",
        },
      ],
      templates: [],
    };
  },
  methods: {
    addLine() {
      var tablelength = this.tableData.length;
      if (tablelength === 0) {
        var newValue = {
          summary: "",
          templateNo: "",
          desc: "任务描述：",
          duedate: "",
          affectsversion: "",
          point: "0",
          lix: "",
          sprint: "",
          assignee: "",
          epiclink: "",
          uclink: "",
        };
        this.tableData.push(newValue);
      } else {
        //添加行数
        var datas = this.tableData[tablelength - 1];
        var newValue = {
          templateNo: datas.templateNo,
          desc: datas.desc,
          point: datas.point,
          sprint: datas.sprint,
          assignee: datas.assignee
        };
        //添加新的行数
        this.tableData.push(newValue);
      }
    },
    handleDelete(index) {
      //删除行数
      this.tableData.splice(index, 1);
    },
    save() {
      if (this.tableData.length === 0) {
        alert("请输入内容！");
      }
      // saveOrUpdate(this.tableData).then((data) => {
      //   if (data.success) {
      //     this.$alert("任务全部创建成功", "成功", {
      //       callback: (action) => {},
      //     });
      //     this.dialogVisible = false;
      //   } else {
      //     var errorDatas = new Array();
      //     if (data.issueDtos.length === this.tableData.length) {
      //       this.$alert("全部创建失败！", "失败", {
      //         callback: (action) => {},
      //       });
      //     } else {
      //       this.$alert("部分创建失败！", "失败", {
      //         callback: (action) => {},
      //       });
      //     }
      //     data.issueDtos.forEach((issueDtos) => {
      //       var newValue = {
      //         summary: issueDtos.summary,
      //         desc: issueDtos.desc,
      //         duedate: issueDtos.duedate,
      //         affectsversion: issueDtos.affectsversion,
      //         point: issueDtos.point,
      //         lix: issueDtos.lix,
      //         sprint: issueDtos.sprint,
      //         assignee: issueDtos.assignee,
      //         epiclink: issueDtos.epiclink,
      //       };
      //       errorDatas.push(newValue);
      //     });
      //     this.tableData = errorDatas;
      //   }
      // });
    },
    add() {
      this.dialogVisible = true;
    },
    // initJiraIssueTemplates() {
    //   getJiraIssueTemplate().then((data) => {
    //     if (data.error != null) {
    //       console.log("请求错误" + data);
    //     }
    //     data.jiraIssueTemplates.forEach((template) => {
    //       var newTemplate = {
    //         id: template.id,
    //         templateName: template.templateName,
    //         lix: template.lix,
    //         assign: template.assign,
    //         sprint: template.sprint,
    //         epiclink: template.epic,
    //         issueVersion: template.issueVersion,
    //         dueDate: template.dueDate,
    //       };
    //       this.templates.push(newTemplate);
    //     });
    //   });
    // },
    selectTemplet(id, row) {
      var newTemplate;
      this.templates.forEach((template) => {
        if (template.id === id) {
          newTemplate = template;
        }
      });
      this.tableData[row].templateNo = newTemplate.id;
      this.tableData[row].lix = newTemplate.lix;
      this.tableData[row].assignee = newTemplate.assign;
      this.tableData[row].sprint = newTemplate.sprint;
      this.tableData[row].epiclink = newTemplate.epiclink;
      this.tableData[row].affectsversion = newTemplate.issueVersion;
      this.tableData[row].duedate = newTemplate.dueDate;
    },
    descKeyUp(row) {
      this.tableData[row].desc = "任务描述：" + this.tableData[row].summary;
    },
    inputChange(index) {
      let that = this;
      //只能输入数字
      this.tableData[index].point = this.tableData[index].point.replace(
        /[^\d]/g,
        ""
      );
    },
  },
  mounted() {
    // this.initJiraIssueTemplates();
  },
};
</script>
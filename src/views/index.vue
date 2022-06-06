<template>
  <div class="taskView">
    <el-row :align="'bottom'" type="flex" :gutter="20">
      <el-col :span="5">
        <el-input v-model="name" placeholder="请输入内容"></el-input>
      </el-col>

      <el-col :span="2">
        <!-- <el-button type="primary" icon="el-icon-plus" @click="handleSearch">添加</el-button> -->
        <el-button
          type="primary"
          icon="el-icon-plus"
          @click="addOrUpdateHandle()"
          >新增</el-button
        >
      </el-col>
    </el-row>

    <add-task v-if="addOrUpdateVisible" ref="addTask" />
  </div>
</template>

<script>
import AddTask from "./addTask.vue";
export default {
  components: {
    AddTask,
  },
  data() {
    return {
      addOrUpdateVisible: false,
      name: "",
    };
  },
  methods: {
    addOrUpdateHandle() {
      this.addOrUpdateVisible = true;
      this.$nextTick(() => {
        this.$refs.addTask.add();
      });
    },
  },
};
</script>
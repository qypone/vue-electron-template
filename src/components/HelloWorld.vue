<script setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
export default {
  components: { ElButton },
}
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <el-button>I am ElButton</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

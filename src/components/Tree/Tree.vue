<template>
  <div class="border-2 rounded-lg overflow-hidden">
    <TreeNode
      v-for="(item, index) in props.data"
      :key="'file' + index"
      :info="item"
      @addFolder="addFolder"
    ></TreeNode>
  </div>
</template>
<script setup>
import TreeNode from './TreeNode.vue'
const props = defineProps(['data'])
const model = defineModel()

//We can also implement add folder and add file feature
function addFolder(newFileJson) {
  model.value[0].children.push(newFileJson)
}
</script>

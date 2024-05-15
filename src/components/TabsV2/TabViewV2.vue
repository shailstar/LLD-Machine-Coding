<template>
  <div class="flex gap-2">
    <div
      v-for="(header, index) in tabHeaders"
      :key="'tabHeader' + index"
      class="border-2 flex gap-2 p-2 rounded-t-xl hover:bg-slate-400 active:bg-slate-700"
      :class="{
        'bg-slate-400': activeTabIndex === header.index,
        'bg-slate-300': activeTabIndex !== header.index
      }"
    >
      <button @click="handleTab(header.index)">{{ header.label }}</button>
    </div>
  </div>

  <slot></slot>
</template>
<script setup>
import { provide, ref, computed } from 'vue'

const tabHeaders = ref([])
const activeTabIndex = ref('')

function handleTab(index) {
  activeTabIndex.value = index
}

provide('addTab', (header) => {
  activeTabIndex.value = header.index
  tabHeaders.value.push(header)
})

provide('activeTabIndex', activeTabIndex)
</script>

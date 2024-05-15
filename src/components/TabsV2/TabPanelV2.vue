<template>
  <div v-if="isActive" class="border-x-2 border-b-2 flex gap-2 p-2 rounded-b-xl bg-slate-300">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, inject, onBeforeMount, computed } from 'vue'

const addTab = inject('addTab')
const activeTabIndex = inject('activeTabIndex')
const props = defineProps(['label'])
const index = ref('')

onBeforeMount(() => {
  index.value = props.label
  addTab({
    label: props.label,
    index: props.label
  })
})

let isActive = computed(() => {
  return activeTabIndex.value === index.value
})
</script>

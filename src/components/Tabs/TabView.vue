<template>
  <div class="flex gap-2">
    <div
      v-for="(header, index) in tabPanelHeaders"
      :key="'tabHeader' + index"
      class="border-2 flex gap-2 p-2 rounded-t-xl hover:bg-slate-400 active:bg-slate-700"
      :class="{ 'bg-slate-400': activeIndex === index, 'bg-slate-300': activeIndex !== index }"
    >
      <button @click="handleTabChange(index)"><component :is="header"></component></button>
    </div>
  </div>
  <div>
    <div
      v-for="(content, index) in filteredtabPanelContents"
      :key="'tabConent' + index"
      class="border-x-2 border-b-2 flex gap-2 p-2 rounded-b-xl bg-slate-300"
    >
      <div><component :is="content"></component></div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

let activeIndex = ref(0)
let slots = defineSlots()

//tab header in props
let tabs = slots.default().map((tab) => tab)

// slots.default is a component
// tabPanel.children.header is a component (it include render function, <component :is=""> can render it)
let tabPanelHeaders = tabs.map((tabPanel) => tabPanel.children.header)
let tabPanelContents = tabs.map((tabPanel) => tabPanel.children.default)

console.log('tabPanelContents', tabPanelContents)

let filteredtabPanelContents = computed(() => {
  return tabPanelContents.filter((_, index) => {
    return activeIndex.value === index
  })
})

function handleTabChange(index) {
  activeIndex.value = index
}

//@Todo
/*
1. Accessilibty
2. Prgrammtically Controlled
3. If Header is sent in props. You need to handle that c
*/
</script>

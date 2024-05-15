<template>
  <div class="flex flex-col gap-1 relative" data-name="dropdown">
    <!--Input for dropdown icon etc-->
    <div class="w-full flex items-center">
      <input
        type="text"
        :value="selectedItem.label"
        placeholder="Select Value"
        class="border-l-2 border-b-2 border-t-2 p-2 rounded-l-lg w-full bg-slate-300"
        disabled
      />
      <button
        v-if="selectedItem.label"
        class="border-b-2 border-t-2 p-2 bg-slate-300"
        @click="clearSelection"
      >
        <XmarkCircle />
      </button>
      <button class="border-r-2 border-b-2 border-t-2 rounded-r-lg p-2" @click="handleList">
        <NavArrowDown />
      </button>
    </div>
    <div
      v-if="showList"
      class="absolute w-full bg-slate-50 top-12 border-2 rounded-lg max-h-80 overflow-y-auto"
    >
      <div
        v-for="(item, index) in list"
        :key="'item' + index"
        class="p-2 border-b-2 last:border-b-0 hover:bg-slate-400 focus:bg-slate-50 active:bg-slate-700"
        :class="{ 'bg-slate-700': selectedItem.value === item.value }"
        @click="() => handleSelectValue(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { NavArrowDown, XmarkCircle } from '@iconoir/vue'
import { list } from '../../store/listData'
import { ref } from 'vue'

const showList = ref(false)
const selectedItem = ref({})

function hideList() {
  showList.value = false
}

function handleSelectValue(value) {
  selectedItem.value = value
}

function handleList() {
  showList.value = !showList.value
}

function clearSelection() {
  selectedItem.value = {}
}

// @Todo
//1. When Click outside close the list
//2. Virtualization
//3. Propery Interface for props and v-model
//4. Accessibility
//5. Theme customization
//6. Template for customizing optionLabel
//7. Search
//8. Disable
//9. Error Label
//10. Suggestion
</script>

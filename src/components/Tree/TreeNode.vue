<template>
  <div>
    <div
      @click="toggleFolder"
      class="text-xl bold p-2 flex gap-2 justify-between"
      :class="{
        'bg-slate-300': isFolder(props.info.type),
        'bg-yellow-300': isFile(props.info.type)
      }"
    >
      <div class="flex gap-2 items-center">
        <Movie v-if="isFile(props.info.type)" />
        <Folder v-if="isFolder(props.info.type)" />
        {{ props.info.name }}
      </div>
      <div class="flex gap-2">
        <button
          v-if="isFolder(props.info.type)"
          class="bg-sky-700 flex items-center gap-2 p-1 rounded-md"
          @click="addFolder"
        >
          <PlusSquare />Folder
        </button>
        <button
          v-if="isFolder(props.info.type)"
          class="bg-sky-700 flex items-center gap-2 p-1 rounded-md"
          @click="addFile"
        >
          <PlusSquare />File
        </button>
      </div>
    </div>
    <div
      v-if="props.info.children && props.info.children.length > 0 && showSubFolder"
      class="ml-10"
    >
      <Tree :data="props.info.children" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Tree from './Tree.vue'
import { Iconoir, Check, Folder, Movie, PlusSquare } from '@iconoir/vue'
const props = defineProps(['info'])
const emit = defineEmits(['addFolder'])

const showSubFolder = ref(false)

function isFile(type) {
  return type === 'file'
}

function isFolder(type) {
  return type === 'folder'
}

function addFolder(){
    emit('addFolder', {
        name: 'newFolder1',
        children: []
    })
}

function addFile(){
    
}

function toggleFolder() {
  showSubFolder.value = !showSubFolder.value
}
</script>

<template>
  {{ isActive }}
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>
<script setup>
const props = defineProps(['isActive'])

console.log(props)
</script>

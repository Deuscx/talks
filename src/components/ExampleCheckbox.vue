<template>
    <el-checkbox v-model="checked1" label="Label" size="large" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElCheckbox } from 'element-plus'
const checked1 = ref(true)
</script>

<style scoped>
</style>

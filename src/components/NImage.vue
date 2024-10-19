<template>
    <NImage :src="src" />
</template>

<script setup lang="ts">
import { NImage } from 'naive-ui'
defineProps<{
    src: string
}>()
</script>

<style scoped>

</style>

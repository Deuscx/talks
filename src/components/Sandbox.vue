<template>
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450"
        :src="src" allowfullscreen></iframe>
</template>

<script setup lang="ts">

defineProps<{
    src: string
}>()


</script>

<style scoped></style>
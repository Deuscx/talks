<template>
    <button class="i-carbon-sun dark:i-carbon-moon" @click="toggleDark()"/>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

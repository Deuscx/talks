<template>
    <div class="flex items-center">
        <div v-for="(charater, index) of word" class="flex items-center" :key="index"
            :class="[{ 'text-red': deleted.includes(index), 'text-cyan': added.includes(index) }]">
            <div :class="[{ 'decoration-line-through': deleted.includes(index) }]">{{ charater }}</div>
            <div v-if="index !== word.length - 1" class="i-carbon-arrow-right"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    deleted?: Array<number>,
    added?: Array<number>,
    word: string,
}>(), {
    deleted: [],
    added: [],
    word: '',
})


</script>

<style scoped></style>
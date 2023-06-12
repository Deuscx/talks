<template>
    <div class="flex">
        <div v-for="(charater, index) of word" :key="index"
            :class="[{ 'text-red': deleted.includes(index + startIndex), 'text-cyan': added.includes(index + startIndex) }]">
            <div :class="[{ 'decoration-line-through': deleted.includes(index + startIndex) }]">{{ charater }}</div>
            <div class="text-gray">{{ index + startIndex }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    deleted?: Array<number>,
    added?: Array<number>,
    word: string,
    startIndex?: number
}>(), {
    deleted: [],
    added: [],
    word: '',
    startIndex: 0
})


</script>

<style scoped></style>
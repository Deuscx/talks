<template>
    <div class="flex">
        <div v-for="(charater, index) of word" :key="index"
            :class="[{ 'text-red': deleted.includes(index), 'text-cyan': added.includes(index) }]">
            <div :class="[{ 'decoration-line-through': deleted.includes(index) }]">{{ charater }}</div>
            <div class="text-gray">{{ index }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{
    deleted?: Array<number>,
    added?: Array<number>,
    word: string
}>(), {
    deleted: [],
    added: [],
    word: ''
})


</script>

<style scoped></style>
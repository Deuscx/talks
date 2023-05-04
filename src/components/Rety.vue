<template>
    <div class="grid grid-cols-2">
        <textarea ref="editor"></textarea>
        <div>
            <div v-for="action, index of actions" :key="index">
                {{ action }}
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import Recorder from 'rety';
import { ref, reactive, onMounted } from 'vue'

const editor = ref(null)
const actions = reactive([])
onMounted(() => {
    let recorder = new Recorder(editor.value);
    recorder.start();

    recorder.addEventListener("actionschange", evt => {
        // recorder.actions has been updated
        // evt.detail contains the new (or in some cases changed) action
        actions.push(evt.detail.action)
    });
})
</script>

<style scoped></style>
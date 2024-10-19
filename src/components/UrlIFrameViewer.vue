<script setup lang="ts">
import { ref } from 'vue'
import { NModal } from 'naive-ui'

interface UrlItem {
  title: string
  url: string
}

interface Props {
  urls: UrlItem[]
}

 defineProps<Props>()

const selectedUrl = ref('')
const showModal = ref(false)

function openModal(url: string) {
  selectedUrl.value = url
  showModal.value = true
}


</script>

<template>
  <div class="h-full">
    <ul class="space-y-2 p-4">
      <li
        v-for="item in urls"
        :key="item.url"
        class="cursor-pointer rounded p-2"
      >
        <div @click="openModal(item.url)">
          {{ item.title }}
        </div>
      </li>
    </ul>

    <NModal v-model:show="showModal" preset="card" style="width: 80vw; height: 80vh;">
      <iframe
        v-if="selectedUrl"
        :src="selectedUrl"
        class="h-full w-full "
        title="URL Content"
      ></iframe>
    </NModal>
  </div>
</template>

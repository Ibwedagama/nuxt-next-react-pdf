<template>
  <main class="h-screen overflow-hidden grid grid-cols-2">
    <iframe
      src="http://localhost:3000"
      frameborder="0"
      class="w-full h-full"
      ref="reactAppIframe"
    />
    <div class="w-full bg-gray-200 p-8">
      <div class="flex flex-col mb-4">
        <label for="textinput" class="mb-2 font-bold"> Masukkan Teks di sini </label>
        <textarea id="textinput" type="text" class="p-2 border" v-model="text" rows="5" />
      </div>

      <button class="px-4 py-2 rounded-md bg-white" @click="resetData">Reset Data</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import debounce from 'lodash.debounce'

const text = ref('')
const reactAppIframe = ref<HTMLIFrameElement>()

function resetData() {
  text.value = ''
}

function sendMessage() {
  const iframeWindow = reactAppIframe?.value?.contentWindow

  if (iframeWindow) {
    iframeWindow.postMessage(
      {
        source: 'nuxt-container',
        data: {
          text: text.value
        }
      },
      'http://localhost:3000'
    )
  }
}

/**
 * Watch for text changes and wait 1s to send the data
 */
watch(text, debounce(sendMessage, 1000))
</script>

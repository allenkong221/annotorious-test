<template>
  <div class="flex flex-col">
    <video
      autoplay
      controls
      muted
      ref="videoRef"
      id="testvideo"
      class="h-full w-full"
    ></video>
    <!-- <my-button @click="enabled = !enabled">{{
      enabled ? 'stop' : 'start'
    }}</my-button> -->
  </div>
</template>

<script setup lang="ts">
import { useUserMedia, useDevicesList } from '@vueuse/core'

const currentCamera = computed(() => cameras.value[0]?.deviceId)
const { videoInputs: cameras } = useDevicesList({
  requestPermissions: true,
})

const videoRef = ref<HTMLVideoElement>()

// setTimeout(() => {
//   enabled.value = true
//   console.log(stream.value)
// }, 2000)
// watchEffect(async () => {
//   if (videoRef.value && stream.value) {
//     console.log(stream.value)
//     enabled.value = true
//     videoRef.value.srcObject = stream.value!
//     console.log(isSupported)
//   }
// })
watch(
  () => currentCamera.value,
  async (val) => {
    console.log(currentCamera.value)
    const { stream, enabled, start } = useUserMedia({})
    enabled.value = true
    try {
      console.log(enabled.value)
      const test = await start()
      console.log(test)
    } catch (err) {
      console.log(err)
    }

    setTimeout(() => {
      console.log(stream.value)
    }, 3000)
    // videoRef.value.srcObject = stream.value
  }
)
onMounted(() => {})
</script>

<style scoped></style>

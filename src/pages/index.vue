<template>
  <div
    class="relative flex flex-col items-center justify-center h-full bg-gray1"
  >
    <login-card @submit="handleEmailLogin" />
    <transition name="fade" mode="in-out">
      <div
        v-if="showLoader"
        class="absolute top-0 left-0 w-full h-full bg-gray1"
      ></div>
    </transition>
  </div>
</template>
<route lang="yaml">
meta:
  layout: auth
</route>

<script setup lang="ts">
// import { googleLogin } from '~/composables/firebase/auth'
import { useToast } from 'vue-toastification'
import { useAuth } from '~/composables/firebase/auth'
// const clickOutside = resolveDirective('')
const toast = useToast()
const showLoader = ref(false)
const { emailLogin } = useAuth()
const handleEmailLogin = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  showLoader.value = true
  setTimeout(() => {
    router.push({
      path: '/templates',
    })
  }, 200)
}

const router = useRouter()
// const handleGoogleLogin = async () => {
//   await googleLogin()
//   console.log('pushing')
//   router.push({
//     path: '/templates',
//   })
// }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

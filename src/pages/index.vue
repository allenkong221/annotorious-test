<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div
      class="
        border-1 border-purple-500
        flex
        justify-center
        items-center
        w-30
        h-30
        rounded-full
        mb-4
      "
    >
      <i-mdi-user class="text-purple-500 text-5xl" />
    </div>
    <div class="flex flex-col text-gray-500 mb-4">
      <label for="email">Email</label>
      <input
        name="email"
        class="border-1 p-2 border-gray-500 w-75"
        v-model="signInEmail"
      />
    </div>
    <div class="flex flex-col text-gray-500 mb-4">
      <label for="password">Password</label>
      <input
        name="password"
        v-model="signInPassword"
        class="border-1 p-2 border-gray-500 w-75"
      />
    </div>
    <my-button @click="handleEmailLogin">Login</my-button>
    <span>or</span>
    <my-button @click="handleGoogleLogin">
      <div class="flex items-center">
        <i-mdi-google class="mr-2" />Sign In With Google
      </div>
    </my-button>
  </div>
</template>

<script setup lang="ts">
import { googleLogin } from '~/composables/firebase/auth'

const signInEmail = ref()
const signInPassword = ref()

const handleEmailLogin = async () => {
  // const login = await emailLogin(signInEmail.value, signInPassword.value)
  // console.log(login)
  router.push({
    path: '/templates',
  })
}

const router = useRouter()
const handleGoogleLogin = async () => {
  await googleLogin()
  console.log('pushing')
  router.push({
    path: '/templates',
  })
}
</script>

<style scoped></style>

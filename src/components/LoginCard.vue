<template>
  <div
    class="
      rounded-lg
      border-2 border-secondary
      bg-yellow
      flex flex-col
      p-6
      min-w-36/100
      box-shadow
    "
  >
    <span class="text-secondary ml-auto text-p"
      >I want to <span class="font-bold">sign up!</span></span
    >
    <div class="flex flex-col px-10">
      <img :src="logo" class="w-32 mx-auto mt-8" />
      <h1 class="text-secondary text-h1 font-bold text-center mb-8">Tolstoy</h1>
      <form @submit.prevent="handleLogin" class="flex flex-col">
        <login-input label="E-mail" v-model="userEmail" class="mb-6 text-p" />
        <login-input
          label="Password"
          type="password"
          v-model="userPassword"
          class="mb-2 text-p"
        />
        <small class="text-small ml-auto">Forgot password?</small>
        <my-button
          submit
          type="secondary"
          class="mx-auto px-20 mt-16 mb-10 text-h3"
          >Login</my-button
        >
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '~/assets/logo.png'
const userEmail = ref('')
const userPassword = ref('')

const emits = defineEmits(['submit'])
const handleLogin = () => {
  emits('submit', { email: userEmail.value, password: userPassword.value })
}
</script>

<style scoped>
.box-shadow {
  box-shadow: 2px 6px 12px #00000029;
}
</style>

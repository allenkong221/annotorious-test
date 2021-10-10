<template>
  <div class="flex flex-col items-center justify-center h-full bg-gray1">
    <login-card @submit="handleEmailLogin" />
  </div>
</template>
<route lang="yaml">
meta:
  layout: auth
</route>

<script setup lang="ts">
// import { googleLogin } from '~/composables/firebase/auth'

const handleEmailLogin = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  // const login = await emailLogin(signInEmail.value, signInPassword.value)
  // console.log(login)
  console.log(email, password)
  router.push({
    path: '/templates',
  })
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

<style scoped></style>

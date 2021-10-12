<template>
  <div cass="flex flex-col">
    <div class="flex items-center justify-between">
      <div class="flex items-center mb-8">
        <i-fe-layer class="text-h1 text-secondary mr-2" />
        <h1 class="text-h1 font-extrabold">Templates</h1>
      </div>
      <my-button type="secondary" disabled class="my-auto"
        >Upload File</my-button
      >
    </div>
    <p class="text-p">
      Create a new template or use an existing template to extract data from
      your documents.
    </p>
    <div class="flex mt-8">
      <template-card @click="router.push('/templates/new')">
        <span class="text-h4 font-bold text-secondary"> + New Template </span>
      </template-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>

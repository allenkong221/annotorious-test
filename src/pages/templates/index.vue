<template>
  <div cass="flex flex-col">
    <div class="flex items-center justify-between">
      <h1 class="text-h1 font-extrabold mb-8">Templates</h1>
      <my-button type="secondary" disabled class="my-auto"
        >Upload File</my-button
      >
    </div>
    <p>On this page, you can do 2 things:</p>
    <p>
      1. Create a new template to tell us what fields to extract from a document
      or
    </p>
    <p>
      2. Click on an existing template (if one exists below) and upload your
      files.
    </p>
    <div class="flex mt-8">
      <template-card>
        <span class="text-h4 font-bold text-secondary"> + New Template </span>
      </template-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const search = ref('')
</script>

<style scoped></style>

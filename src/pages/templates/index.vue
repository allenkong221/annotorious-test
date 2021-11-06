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
      <template-card @click="showNewTemplateModal = true">
        <div
          class="
            flex flex-col
            justify-center
            items-center
            w-full
            h-full
            group
            hover:bg-secondary
            transition
          "
        >
          <div class="flex items-center mb-2">
            <i-radix-icons-cursor-arrow
              class="
                text-secondary text-p
                mr-1
                group-hover:text-white
                transition
              "
            />
            <span
              class="
                text-p text-gray3
                uppercase
                group-hover:text-white
                transition
              "
              >Click Here</span
            >
          </div>
          <span class="text-h3 font-semibold text-center">
            <span class="text-error group-hover:text-white transition"
              >Create
            </span>
            <span class="text-black group-hover:text-white transition">a </span>
            <span class="text-primary group-hover:text-white transition"
              >new
            </span>
            <span class="text-secondary group-hover:text-white transition"
              >template</span
            >
          </span>
        </div>
      </template-card>
    </div>
    <new-template-modal />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { to } from 'await-to-js'
import { useTemplates } from '~/composables/templates'

//@ts-ignore
const { showNewTemplateModal } = useTemplates()
onMounted(async () => {
  const [err, res] = await to(axios.post('/api/get_filenames'))
  if (err) {
    console.error(err)
    return
  }
  console.log(res.data)
})
</script>

<style scoped></style>

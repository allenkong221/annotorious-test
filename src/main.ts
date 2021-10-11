import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

// @ts-ignore: globEager is a Vite-only feature
const plugins = import.meta.globEager('./plugins/*.js')
export const app = createApp(App)

const options: PluginOptions = {
  timeout: 4000,
}
app.use(Toast, options)
// Router setup (vue-router)
app.use(router)

// Store setup (pinia)
const pinia = createPinia()

// Set here which stores should be persisted
const storesToPersist: string[] = []

// Handling recovery of persisted data
if (localStorage.getItem('piniaState')) {
  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem('piniaState') || '{}'
  )
  for (const store of storesToPersist) {
    if (dataFromLocalStorage[store]) {
      pinia.state.value = {
        ...pinia.state.value,
        [store]: {
          ...dataFromLocalStorage[store],
        },
      }
    }
  }
}
app.use(pinia)
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
// Apply plugin
for (const plugin in plugins) {
  app.use(plugins[plugin].default)
}
// Mounting the app
app.mount('#app')

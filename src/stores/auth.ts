import { promiseTimeout } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ProcessedTemplate } from '~/types/customTypes'
export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      loading: false,
      templates: <ProcessedTemplate[]>[],
    }
  },
  getters: {
    /**
     * Checks if the user is logged in
     * @param state - Store state
     * @returns True if user is logged in
     */
    isLoggedIn(state) {
      return state.token !== ''
    },
  },
  actions: {
    /**
     * Logs the user in (just generates a random uuid and sets it as the token after 1s)
     */
    async login() {
      this.loading = true
      await promiseTimeout(1000)
      this.loading = false
      this.token = uuidv4()
    },
    /**
     * Logs the user out (clears the token)
     */
    logout() {
      this.token = ''
    },
    loadUserTemplates() {
      // TODO - Unmock this?
      this.templates = [
        {
          image:
            'https://www.pud-ri.org/wp-content9999/uploads/2020/07/Sample-electric-Bill.jpg',
          user: '123',
          annotations: [
            {
              name: 'date',
              id: '#a7079111-6b3d-4146-9067-10349e77bc76',
              left: 1217,
              top: 42,
              width: 188,
              height: 52,
            },
            {
              name: 'balance',
              id: '#9363bc87-f7d9-4d77-976a-b0e50912b3c4',
              left: 1267,
              top: 349,
              width: 111,
              height: 59,
            },
            {
              name: 'code',
              id: '#fdfe9ac2-0092-452d-a68f-73562112f921',
              left: 800,
              top: 1809,
              width: 653,
              height: 59,
            },
          ],
        },
      ]
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))

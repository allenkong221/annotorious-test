import { ref } from 'vue'
const showLoader = ref(false)
export const useLoader = () => {
  return {
    showLoader,
  }
}

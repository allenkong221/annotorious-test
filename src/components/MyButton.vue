<template>
  <button
    ref="buttonRef"
    class="
      px-4
      py-2
      relative
      overflow-hidden
      transition
      text-p
      font-bold
      duration-200
      rounded-md
      focus:outline-none
    "
    :class="{
      [`bg-${type}`]: !outlined,
      'bg-yellow': type === 'primary' && outlined,
      [`text-${type}`]: outlined,
      [`border-${type}`]: outlined,
      'border-2': outlined,
      'text-white': !outlined,
      'opacity-38': disabled,
      [`hover:bg-${type}`]: outlined,
      [`hover:text-white`]: outlined,
    }"
    :disabled="disabled"
    @click="handleClick"
    :type="submit ? 'submit' : 'button'"
  >
    <slot name="default"></slot>
    <span
      v-if="showRipple"
      class="ripple"
      :class="{
        primary: type === 'primary',
        secondary: type === 'secondary',
        outlined: !!outlined,
      }"
      :style="{
        width: `${rippleSize}px`,
        height: `${rippleSize}px`,
        top: `${rippleTop}px`,
        left: `${rippleLeft}px`,
      }"
    ></span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
    validation: (val: string) => {
      return ['primary', 'secondary'].includes(val)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  submit: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['click'])
// Creating ripple effect
const showRipple = ref(false)
const buttonRef = ref<HTMLButtonElement>()
const handleClick = (event: MouseEvent) => {
  createRipple(event)
  emits('click')
}
const rippleSize = ref(0)
const rippleTop = ref(0)
const rippleLeft = ref(0)
const createRipple = async (event: MouseEvent) => {
  console.log('rippling')
  if (buttonRef.value) {
    showRipple.value = false
    await nextTick()
    const diameter = Math.max(
      buttonRef.value.clientWidth,
      buttonRef.value.clientHeight
    )
    const radius = diameter / 2
    rippleSize.value = diameter
    rippleLeft.value = event.clientX - (buttonRef.value.offsetLeft + radius)
    rippleTop.value = event.clientY - (buttonRef.value.offsetTop + radius)
    showRipple.value = true
  }
}
</script>

<style scoped>
span.ripple {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  transform: scale(0);
  animation: ripple 400ms linear;
}
span.ripple.primary {
  background-color: #fcd191b0;
}
span.ripple.secondary {
  background-color: #a59dff6b;
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.s {
  color: #867bf7;
  background: #f7b655;
}
</style>

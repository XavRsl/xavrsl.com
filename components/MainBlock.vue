<template>
  <div class="space-y-1 relative">
    <h3 class="text-xl font-serif my-3">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<script setup lang="ts">
import { reactive } from "vue";

interface ButtonProps {
  primary?: boolean;
}

const buttonProps = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
});

const { primary } = reactive(buttonProps);
</script>

<template>
  <button class="btn" :class="{ primary }">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
}
.btn.primary {
  background: hsl(239, 100%, 27%);
  color: #fff;
}
</style>

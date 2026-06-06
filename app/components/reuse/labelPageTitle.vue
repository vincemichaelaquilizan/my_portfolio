<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <p class="label-tag">{{ label }}</p>
</template>

<style lang="scss" scoped>
.label-tag {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  font-family: var(--font-body);
  font-size: clamp(0.8rem, 1.5vw, 1.1rem);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.04em;
  text-align: center;
  max-width: 600px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

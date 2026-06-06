<script setup lang="ts">
defineProps<{
  label:   string
  level:   'beginner' | 'intermediate' | 'advanced'
  percent: number
}>()
</script>

<template>
  <div class="progress">
    <div class="progress__header">
      <span class="progress__label">{{ label }}</span>
      <span class="progress__level" :class="`progress__level--${level}`">{{ level }}</span>
    </div>
    <div class="progress__track">
      <div
        class="progress__fill"
        :class="`progress__fill--${level}`"
        :style="{ width: percent + '%' }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress {
  width: 100%;
  margin-bottom: 18px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  &__label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  &__level {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 2px 10px;
    border-radius: 999px;

    &--beginner     { background: rgba(76, 175, 80, 0.12); color: #2e7d32; }
    &--intermediate { background: rgba(255, 152, 0, 0.12); color: #e65100; }
    &--advanced     { background: rgba(232, 184, 75, 0.15); color: #8b6a00; }
  }

  &__track {
    width: 100%;
    height: 8px;
    background: rgba(0,0,0,0.07);
    border-radius: 999px;
    overflow: hidden;
  }

  &__fill {
    height: 100%;
    border-radius: 999px;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);

    &--beginner     { background: #4caf50; }
    &--intermediate { background: #ff9800; }
    &--advanced     { background: linear-gradient(90deg, var(--color-accent), #c49a2a); }
  }
}

@media (max-width: 600px) {
  .progress__label { font-size: 0.82rem; }
  .progress__level { font-size: 0.66rem; }
}
</style>

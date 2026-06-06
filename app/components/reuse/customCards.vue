<script setup lang="ts">
defineProps<{
  project: {
    id: number
    title: string
    description: string
    image: string
    url: string
    tags: string[]
    category: string
  }
}>()
</script>

<template>
  <article class="card">
    <div class="card__image-wrap">
      <img :src="project.image" :alt="project.title" class="card__image" loading="lazy" />
      <div class="card__overlay">
        <a :href="project.url" target="_blank" rel="noopener noreferrer" class="card__cta">
          View Project ↗
        </a>
      </div>
    </div>

    <div class="card__body">
      <span class="card__category">{{ project.category }}</span>
      <h3 class="card__title">{{ project.title }}</h3>
      <p class="card__desc">{{ project.description }}</p>
      <div class="card__tags">
        <span v-for="tag in project.tags" :key="tag" class="card__tag">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-card);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
    border-color: rgba(232, 184, 75, 0.25);

    .card__overlay { opacity: 1; }
    .card__image   { transform: scale(1.05); }
  }
}

// ─── Image ────────────────────────────────────
.card__image-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 52, 96, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card__cta {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-white);
  border: 2px solid var(--color-accent);
  padding: 10px 24px;
  border-radius: 999px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--color-accent);
    color: var(--color-text-primary);
  }
}

// ─── Body ────────────────────────────────────
.card__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card__category {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent);
}

.card__title {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-white);
}

.card__desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.card__tag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(232, 184, 75, 0.1);
  color: rgba(232, 184, 75, 0.8);
  border: 1px solid rgba(232, 184, 75, 0.2);
}
</style>

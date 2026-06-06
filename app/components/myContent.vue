<script setup lang="ts">
import { ref, computed } from 'vue'
import ComicBorder from './reuse/comicBorder.vue'
import CustomCards from './reuse/customCards.vue'
import { SHOWCASE } from '../content.config.js'

const activeCategory = ref('All')

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? SHOWCASE.projects
    : SHOWCASE.projects.filter(p => p.category === activeCategory.value)
)
</script>

<template>
  <section id="showcase" class="showcase bg-showcase">
    <ComicBorder />

    <div class="section-container showcase__inner">
      <!-- Header -->
      <div class="showcase__header">
        <span class="accent-tag">My Work</span>
        <h2 class="section-title section-title--light">Showcase</h2>
        <p class="showcase__sub">A collection of projects I've built and shipped.</p>
      </div>

      <!-- Category filter -->
      <div class="showcase__filters">
        <button
          v-for="cat in SHOWCASE.categories"
          :key="cat"
          class="showcase__filter-btn"
          :class="{ 'showcase__filter-btn--active': activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="showcase__grid">
        <CustomCards
          v-for="project in filtered"
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- Empty state -->
      <div v-if="filtered.length === 0" class="showcase__empty">
        <p>No projects in this category yet. Check back soon!</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// ─── Section ─────────────────────────────────
.showcase {
  position: relative;
  width: 100%;
  padding: var(--section-pad) 0;
  overflow: hidden;
}

.showcase__inner {
  position: relative;
  z-index: 2;
}

// ─── Header ──────────────────────────────────
.showcase__header {
  text-align: center;
  margin-bottom: 40px;
}

.showcase__sub {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
}

// ─── Filter pills ─────────────────────────────
.showcase__filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 48px;
}

.showcase__filter-btn {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 8px 22px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  &--active {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-text-primary);
  }
}

// ─── Grid ────────────────────────────────────
.showcase__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

// ─── Empty state ─────────────────────────────
.showcase__empty {
  text-align: center;
  padding: 80px 0;
  color: rgba(255,255,255,0.4);
  font-size: 1rem;
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 640px) {
  .showcase__grid {
    grid-template-columns: 1fr;
  }
}
</style>

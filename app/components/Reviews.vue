<script setup lang="ts">
import { REVIEWS } from '../content.config.js'

const getInitials = (name: string) => {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
}
</script>

<template>
  <section id="reviews" class="reviews bg-reviews">
    <div class="section-container">
      <div class="reviews__header">
        <span class="accent-tag">Testimonials</span>
        <h2 class="section-title section-title--light">What People Say</h2>
        <p class="reviews__sub">Feedback from clients and collaborators.</p>
      </div>

      <!-- Empty state -->
      <div v-if="REVIEWS.length === 0" class="reviews__empty">
        <div class="reviews__empty-card">
          <span class="reviews__empty-quote">"</span>
          <p class="reviews__empty-text">No reviews yet.</p>
          <span class="reviews__empty-hint">
            Add testimonials in <code>content.config.js → REVIEWS</code>
          </span>
        </div>
      </div>

      <!-- Reviews grid -->
      <div v-else class="reviews__grid">
        <article
          v-for="review in REVIEWS"
          :key="review.id"
          class="reviews__card"
        >
          <!-- Stars -->
          <div class="reviews__stars">
            <span
              v-for="i in 5"
              :key="i"
              class="reviews__star"
              :class="{ 'reviews__star--filled': i <= review.rating }"
            >★</span>
          </div>

          <!-- Quote text -->
          <blockquote class="reviews__quote">"{{ review.text }}"</blockquote>

          <!-- Author -->
          <div class="reviews__author">
            <div class="reviews__avatar">
              <img
                v-if="review.avatar"
                :src="review.avatar"
                :alt="review.name"
              />
              <span v-else class="reviews__initials">
                {{ getInitials(review.name) }}
              </span>
            </div>
            <div class="reviews__author-info">
              <p class="reviews__name">{{ review.name }}</p>
              <p class="reviews__role">{{ review.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// ─── Section ─────────────────────────────────
.reviews {
  width: 100%;
  padding: var(--section-pad) 0;
}

// ─── Header ──────────────────────────────────
.reviews__header {
  text-align: center;
  margin-bottom: 52px;
}

.reviews__sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.4);
  margin-top: 8px;
}

// ─── Grid ────────────────────────────────────
.reviews__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

// ─── Card ────────────────────────────────────
.reviews__card {
  padding: 32px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  }
}

// ─── Stars ───────────────────────────────────
.reviews__stars { display: flex; gap: 3px; }

.reviews__star {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.15);
  transition: color 0.2s;

  &--filled { color: var(--color-accent); }
}

// ─── Quote ───────────────────────────────────
.reviews__quote {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.72);
  font-style: italic;
  flex: 1;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: -6px;
    font-size: 4rem;
    font-family: var(--font-script);
    color: rgba(232,184,75,0.2);
    line-height: 1;
  }
}

// ─── Author ──────────────────────────────────
.reviews__author {
  display: flex;
  align-items: center;
  gap: 14px;
  border-top: 1px solid rgba(255,255,255,0.07);
  padding-top: 20px;
}

.reviews__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-accent), #0f3460);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.reviews__initials {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
}

.reviews__name {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--color-white);
}

.reviews__role {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.45);
  margin-top: 2px;
}

// ─── Empty state ─────────────────────────────
.reviews__empty {
  display: flex;
  justify-content: center;
}

.reviews__empty-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 64px 48px;
  background: rgba(255,255,255,0.04);
  border: 2px dashed rgba(255,255,255,0.1);
  border-radius: var(--radius-card);
  text-align: center;
  max-width: 480px;
  width: 100%;
}

.reviews__empty-quote {
  font-family: var(--font-script);
  font-size: 6rem;
  line-height: 0.8;
  color: rgba(232,184,75,0.2);
}

.reviews__empty-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
}

.reviews__empty-hint {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.3);

  code {
    font-family: monospace;
    background: rgba(255,255,255,0.06);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    color: var(--color-accent);
  }
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 640px) {
  .reviews__grid { grid-template-columns: 1fr; }
}
</style>

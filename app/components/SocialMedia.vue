<script setup lang="ts">
import { SOCIAL, NAV } from '../content.config.js'
</script>

<template>
  <section id="social" class="social bg-social">
    <div class="section-container">
      <div class="social__header">
        <span class="accent-tag">Let's Connect</span>
        <h2 class="section-title section-title--light">Find Me Online</h2>
        <p class="social__sub">
          I'm always open to new opportunities, collaborations, or just a chat.
        </p>
      </div>

      <!-- Social cards -->
      <div class="social__grid">
        <a
          v-for="link in SOCIAL"
          :key="link.platform"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social__card"
        >
          <div class="social__icon" v-html="link.icon"></div>
          <div class="social__info">
            <p class="social__platform">{{ link.platform }}</p>
            <p class="social__username">{{ link.username }}</p>
          </div>
          <span class="social__arrow">↗</span>
        </a>
      </div>

      <!-- Footer note -->
      <p class="social__footer">
        © {{ new Date().getFullYear() }} {{ NAV.name }}. Built with Nuxt & SCSS.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// ─── Section ─────────────────────────────────
.social {
  width: 100%;
  padding: var(--section-pad) 0 clamp(60px, 10vw, 140px);
}

// ─── Header ──────────────────────────────────
.social__header {
  text-align: center;
  margin-bottom: 52px;
}

.social__sub {
  font-size: 1rem;
  color: rgba(255,255,255,0.45);
  margin-top: 10px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

// ─── Grid ────────────────────────────────────
.social__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

// ─── Card ────────────────────────────────────
.social__card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius-card);
  transition: transform 0.25s, background 0.25s, border-color 0.25s;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.09);
    border-color: rgba(232,184,75,0.3);

    .social__arrow { color: var(--color-accent); transform: translate(2px, -2px); }
  }
}

// ─── Icon ────────────────────────────────────
.social__icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.08);
  border-radius: 12px;
  flex-shrink: 0;
  color: var(--color-white);

  :deep(svg) {
    width: 22px;
    height: 22px;
  }
}

// ─── Info ────────────────────────────────────
.social__info {
  flex: 1;
  min-width: 0;
}

.social__platform {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.45);
}

.social__username {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-white);
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// ─── Arrow ───────────────────────────────────
.social__arrow {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.3);
  flex-shrink: 0;
  transition: color 0.2s, transform 0.2s;
}

// ─── Footer ──────────────────────────────────
.social__footer {
  text-align: center;
  margin-top: 64px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.25);
  letter-spacing: 0.05em;
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 600px) {
  .social__grid {
    grid-template-columns: 1fr;
  }
}
</style>

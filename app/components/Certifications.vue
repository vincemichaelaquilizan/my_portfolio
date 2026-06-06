<script setup lang="ts">
import { CERTIFICATIONS } from '../content.config.js'
</script>

<template>
  <section id="certifications" class="certs bg-certs">
    <div class="section-container">
      <div class="certs__header">
        <span class="accent-tag">Credentials</span>
        <h2 class="section-title">Certifications</h2>
        <p class="certs__sub">Courses and credentials I've earned along the way.</p>
      </div>

      <!-- Empty state -->
      <div v-if="CERTIFICATIONS.length === 0" class="certs__empty">
        <div class="certs__empty-card">
          <span class="certs__empty-icon">🏅</span>
          <p>No certifications added yet.</p>
          <span>Edit <code>content.config.js → CERTIFICATIONS</code> to add yours.</span>
        </div>
      </div>

      <!-- Grid -->
      <div v-else class="certs__grid">
        <article
          v-for="cert in CERTIFICATIONS"
          :key="cert.id"
          class="certs__card"
        >
          <div class="certs__icon">{{ cert.icon }}</div>
          <div class="certs__info">
            <h3 class="certs__title">{{ cert.title }}</h3>
            <p class="certs__issuer">{{ cert.issuer }}</p>
            <p class="certs__date">{{ cert.date }}</p>
          </div>
          <a
            v-if="cert.credentialUrl"
            :href="cert.credentialUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="certs__link"
          >
            View ↗
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// ─── Section ─────────────────────────────────
.certs {
  width: 100%;
  padding: var(--section-pad) 0;
}

// ─── Header ──────────────────────────────────
.certs__header {
  text-align: center;
  margin-bottom: 52px;
}

.certs__sub {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-top: 8px;
}

// ─── Grid ────────────────────────────────────
.certs__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

// ─── Card ────────────────────────────────────
.certs__card {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 24px;
  background: var(--color-white);
  border-radius: var(--radius-card);
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: var(--shadow-card);
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lift);
    border-color: rgba(232,184,75,0.3);
  }
}

.certs__icon {
  font-size: 2.4rem;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(232,184,75,0.1);
  border-radius: 16px;
}

.certs__info {
  flex: 1;
  min-width: 0;
}

.certs__title {
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.certs__issuer {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-top: 2px;
}

.certs__date {
  font-size: 0.78rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-top: 2px;
}

.certs__link {
  flex-shrink: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-accent);
  border: 1px solid rgba(232,184,75,0.4);
  padding: 6px 14px;
  border-radius: 999px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--color-accent);
    color: var(--color-text-primary);
  }
}

// ─── Empty state ─────────────────────────────
.certs__empty {
  display: flex;
  justify-content: center;
}

.certs__empty-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 40px;
  background: var(--color-white);
  border-radius: var(--radius-card);
  border: 2px dashed rgba(0,0,0,0.1);
  text-align: center;
  max-width: 480px;
  width: 100%;

  p {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  span {
    font-size: 0.85rem;
    color: var(--color-text-muted);

    code {
      font-family: monospace;
      background: rgba(0,0,0,0.05);
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
    }
  }
}

.certs__empty-icon {
  font-size: 3rem;
  opacity: 0.3;
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 640px) {
  .certs__grid {
    grid-template-columns: 1fr;
  }
}
</style>

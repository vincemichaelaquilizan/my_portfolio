<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ComicBorder from './reuse/comicBorder.vue'
import { ABOUT } from '../content.config.js'

// Animate progress bars on mount
const animated = ref(false)
onMounted(() => {
  const obs = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { animated.value = true; obs.disconnect() }
  }, { threshold: 0.2 })
  const el = document.querySelector('#about')
  if (el) obs.observe(el)
})
</script>

<template>
  <section id="about" class="about bg-about">
    <img class="about__city" src="/image/image.png" alt="" aria-hidden="true" />
    <ComicBorder />

    <div class="about__panel cornered">
      <div class="section-container">

        <!-- ── Header ── -->
        <span class="accent-tag">About Me</span>
        <h2 class="section-title about__heading">
          {{ ABOUT.greeting }} I'm <br /><em>Vince.</em>
        </h2>

        <!-- ── Intro row ── -->
        <div class="about__intro">
          <div class="about__bio">
            <p>{{ ABOUT.bio }}</p>
            <div class="about__contact-list">
              <div class="about__contact-item">
                <span class="about__contact-icon">✉</span>
                <a :href="`mailto:${ABOUT.email}`">{{ ABOUT.email }}</a>
              </div>
              <div class="about__contact-item">
                <span class="about__contact-icon">📍</span>
                <span>{{ ABOUT.location }}</span>
              </div>
            </div>
          </div>

          <div class="about__profile-wrap">
            <div class="about__profile-ring">
              <img class="about__profile-img" :src="ABOUT.profileImage" alt="Profile photo" />
            </div>
            <!-- Floating badges -->
            <div class="about__badge about__badge--tl">
              <span class="about__badge-num">3+</span>
              <span class="about__badge-txt">Years Coding</span>
            </div>
            <div class="about__badge about__badge--br">
              <span class="about__badge-num">10+</span>
              <span class="about__badge-txt">Projects</span>
            </div>
          </div>
        </div>

        <hr class="about__divider" />

        <!-- ── Grid ── -->
        <div class="about__grid">

          <!-- Left: Education + Skills -->
          <div class="about__education">
            <h3 class="about__sub-title">Education</h3>
            <div v-for="edu in ABOUT.education" :key="edu.school" class="about__edu-item">
              <div class="about__edu-dot"></div>
              <div>
                <p class="about__edu-school">{{ edu.school }}</p>
                <p class="about__edu-degree">{{ edu.degree }}</p>
                <p class="about__edu-year">{{ edu.year }}</p>
              </div>
            </div>

            <hr class="about__divider about__divider--sm" />

            <h3 class="about__sub-title">Tech Stack</h3>
            <ul class="about__skill-tags">
              <li v-for="skill in ABOUT.skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>

          <!-- Center: Specializations -->
          <div class="about__specializations">
            <h3 class="about__sub-title">Specialized In</h3>
            <div class="about__spec-grid">
              <div v-for="spec in ABOUT.specializations" :key="spec.label" class="about__spec-card">
                <div class="about__spec-glow"></div>
                <span class="about__spec-icon">{{ spec.icon }}</span>
                <span class="about__spec-label">{{ spec.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Proficiency bars -->
          <div class="about__tech">
            <h3 class="about__sub-title">Tech Proficiency</h3>
            <div
              v-for="(skill, i) in ABOUT.techSkills"
              :key="skill.name"
              class="bar-item"
              :style="`--delay: ${i * 120}ms`"
            >
              <div class="bar-item__header">
                <span class="bar-item__label">{{ skill.name }}</span>
                <div class="bar-item__meta">
                  <span class="bar-item__badge" :class="`bar-item__badge--${skill.level}`">{{ skill.level }}</span>
                  <span class="bar-item__pct">{{ skill.percent }}%</span>
                </div>
              </div>
              <div class="bar-item__track">
                <div
                  class="bar-item__fill"
                  :class="`bar-item__fill--${skill.level}`"
                  :style="{ width: animated ? skill.percent + '%' : '0%' }"
                ></div>
                <!-- Glow pulse dot at end of bar -->
                <div
                  class="bar-item__dot"
                  :class="`bar-item__dot--${skill.level}`"
                  :style="{ left: animated ? skill.percent + '%' : '0%' }"
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <ComicBorder />
</template>

<style lang="scss" scoped>
// ─── Section ──────────────────────────────────
.about {
  position: relative;
  width: 100%;
  padding: clamp(40px, 6vw, 80px) 0 clamp(60px, 8vw, 100px);
  overflow: hidden;
}

.about__city {
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.08;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 0;
  transform: perspective(600px) rotateX(18deg) scaleX(1.1);
  transform-origin: bottom center;
  mask-image: linear-gradient(to top, rgba(0,0,0,.5), transparent);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,.5), transparent);
}

.about__panel {
  position: relative;
  z-index: 2;
  width: min(92vw, 1150px);
  margin: 0 auto;
  background: var(--color-panel);
  border-radius: var(--radius-lg);
  padding: clamp(40px, 6vw, 80px);
  box-shadow: var(--shadow-lift);
}

.about__heading {
  font-size: clamp(2.4rem, 6vw, 4.5rem);
  line-height: 1.05;
  color: var(--color-text-primary);
  margin-bottom: 32px;
  margin-top: 20px;

  em {
    font-family: var(--font-script);
    font-style: normal;
    color: var(--color-accent);
  }
}

// ─── Intro ────────────────────────────────────
.about__intro {
  display: flex;
  gap: clamp(20px, 4vw, 60px);
  align-items: flex-start;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.about__bio {
  flex: 1;
  min-width: 260px;

  p {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    line-height: 2;
    color: var(--color-text-muted);
    white-space: pre-line;
  }
}

.about__contact-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about__contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--color-text-primary);

  a {
    color: var(--color-accent);
    transition: opacity 0.2s;
    &:hover { opacity: 0.75; }
  }
}

.about__contact-icon {
  width: 28px;
  text-align: center;
  font-size: 1.1rem;
}

// ─── Profile image + badges ───────────────────
.about__profile-wrap {
  flex-shrink: 0;
  position: relative;
}

.about__profile-ring {
  width: clamp(180px, 22vw, 280px);
  height: clamp(180px, 22vw, 280px);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(135deg, var(--color-accent), #0f3460);
  padding: 5px;
  animation: morph 8s ease-in-out infinite;
}

.about__profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 18%;
  border-radius: inherit;
}

// floating stat badges
.about__badge {
  position: absolute;
  background: #fff;
  border: 1.5px solid rgba(232,184,75,0.35);
  border-radius: 14px;
  padding: 8px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
  animation: badgeFloat 4s ease-in-out infinite;

  &--tl { top: -10px; left: -20px; animation-delay: 0s; }
  &--br { bottom: -10px; right: -20px; animation-delay: 2s; }
}

.about__badge-num {
  font-family: var(--font-title);
  font-size: 1.2rem;
  color: var(--color-accent);
  line-height: 1;
}

.about__badge-txt {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

// ─── Divider ─────────────────────────────────
.about__divider {
  border: none;
  border-top: 1px solid rgba(0,0,0,0.1);
  margin: 32px 0;
  &--sm { margin: 20px 0; }
}

// ─── Grid ────────────────────────────────────
.about__grid {
  display: grid;
  grid-template-columns: 2fr 1.4fr 1.6fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}

.about__sub-title {
  font-family: var(--font-script);
  font-size: 1.4rem;
  color: var(--color-text-primary);
  margin-bottom: 20px;
}

// ─── Education timeline ───────────────────────
.about__edu-item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-start;
}

.about__edu-dot {
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent);
  margin-top: 5px;
  box-shadow: 0 0 0 3px rgba(232,184,75,0.2);
}

.about__edu-school {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-text-primary);
}

.about__edu-degree {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  margin-top: 2px;
}

.about__edu-year {
  font-size: 0.8rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-top: 2px;
}

// ─── Skill tags ───────────────────────────────
.about__skill-tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  li {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: rgba(232,184,75,0.1);
    color: #7a5c00;
    border: 1px solid rgba(232,184,75,0.3);
    padding: 4px 11px;
    border-radius: 999px;
    transition: background 0.2s, transform 0.2s;
    cursor: default;

    &:hover {
      background: rgba(232,184,75,0.22);
      transform: translateY(-2px);
    }
  }
}

// ─── Spec cards ───────────────────────────────
.about__spec-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.about__spec-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 12px;
  background: var(--color-bg-light);
  border-radius: 20px;
  border: 1px solid rgba(232,184,75,0.15);
  text-align: center;
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(232,184,75,0.2);
    border-color: rgba(232,184,75,0.5);

    .about__spec-glow { opacity: 1; }
  }
}

.about__spec-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at 50% 0%, rgba(232,184,75,0.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.about__spec-icon {
  font-size: 2.2rem;
  line-height: 1;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
}

.about__spec-label {
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

// ─── Progress bars (improved) ─────────────────
.bar-item {
  width: 100%;
  margin-bottom: 22px;
}

.bar-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.bar-item__label {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 0.02em;
}

.bar-item__meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bar-item__badge {
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 2px 9px;
  border-radius: 999px;

  &--beginner     { background: rgba(76,175,80,0.12);  color: #2e7d32; }
  &--intermediate { background: rgba(255,152,0,0.12);  color: #c45e00; }
  &--advanced     { background: rgba(232,184,75,0.18); color: #7a5c00; }
}

.bar-item__pct {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-text-muted);
  min-width: 34px;
  text-align: right;
}

.bar-item__track {
  position: relative;
  width: 100%;
  height: 10px;
  background: rgba(0,0,0,0.06);
  border-radius: 999px;
  overflow: visible;
}

.bar-item__fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.9s calc(var(--delay, 0ms)) cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &--beginner     { background: linear-gradient(90deg, #66bb6a, #43a047); }
  &--intermediate { background: linear-gradient(90deg, #ffa726, #ef6c00); }
  &--advanced     {
    background: linear-gradient(90deg, var(--color-accent), #c49a2a);
    box-shadow: 0 0 12px rgba(232,184,75,0.4);
  }
}

// glowing dot at tip of bar
.bar-item__dot {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #fff;
  transition: left 0.9s calc(var(--delay, 0ms)) cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.07);

  &--beginner     { background: #43a047; }
  &--intermediate { background: #ef6c00; }
  &--advanced     {
    background: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(232,184,75,0.25), 0 0 10px rgba(232,184,75,0.5);
  }
}

// ─── Keyframes ────────────────────────────────
@keyframes morph {
  0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  50%       { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
}

@keyframes badgeFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 900px) {
  .about__grid { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .about__panel { width: 94vw; padding: 32px 24px; }
  .about__intro { flex-direction: column-reverse; align-items: center; }
  .about__profile-ring { width: 200px; height: 200px; }
  .about__badge--tl { top: -10px; left: 10px; }
  .about__badge--br { bottom: -10px; right: 10px; }
}
</style>

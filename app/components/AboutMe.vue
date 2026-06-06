<script setup lang="ts">
import { ref } from 'vue'
import ComicBorder from './reuse/comicBorder.vue'
import ProgressBar from './reuse/progressBar.vue'
import { ABOUT } from '../content.config.js'
</script>

<template>
  <section id="about" class="about bg-about">
    <!-- City background overlay -->
    <img class="about__city" src="/image/image.png" alt="" aria-hidden="true" />

    <ComicBorder />
    <div class="about__panel cornered">
      <!-- ── Intro ── -->
      <div class="section-container">
        <span class="accent-tag">About Me</span>
        <h2 class="section-title about__heading">
          {{ ABOUT.greeting }} I'm <br />
          <em>Vince.</em>
        </h2>

        <div class="about__intro">
          <!-- Bio text -->
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

          <!-- Profile image -->
          <div class="about__profile-wrap">
            <div class="about__profile-ring">
              <img class="about__profile-img" :src="ABOUT.profileImage" alt="Profile photo" />
            </div>
          </div>
        </div>

        <hr class="about__divider" />

        <!-- ── Skills grid ── -->
        <div class="about__grid">
          <!-- Left: Education + skill tags -->
          <div class="about__education">
            <h3 class="about__sub-title">Education</h3>
            <div v-for="edu in ABOUT.education" :key="edu.school" class="about__edu-item">
              <p class="about__edu-school">{{ edu.school }}</p>
              <p class="about__edu-degree">{{ edu.degree }}</p>
              <p class="about__edu-year">{{ edu.year }}</p>
            </div>

            <hr class="about__divider about__divider--sm" />

            <h3 class="about__sub-title">Skills</h3>
            <ul class="about__skill-tags">
              <li v-for="skill in ABOUT.skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>

          <!-- Center: Specialization icons -->
          <div class="about__specializations">
            <h3 class="about__sub-title">Specialized In</h3>
            <div class="about__spec-grid">
              <div v-for="spec in ABOUT.specializations" :key="spec.label" class="about__spec-card">
                <span class="about__spec-icon">{{ spec.icon }}</span>
                <span class="about__spec-label">{{ spec.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Progress bars -->
          <div class="about__tech">
            <h3 class="about__sub-title">Tech Proficiency</h3>
            <ProgressBar
              v-for="skill in ABOUT.techSkills"
              :key="skill.name"
              :label="skill.name"
              :level="skill.level"
              :percent="skill.percent"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <ComicBorder />
</template>

<style lang="scss" scoped>
// ─── Section wrapper ──────────────────────────
.about {
  position: relative;
  width: 100%;
  padding: clamp(40px, 6vw, 80px) 0 clamp(60px, 8vw, 100px);
  overflow: hidden;
}

// ─── City overlay ────────────────────────────
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
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
}

// ─── White panel ─────────────────────────────
.about__panel {
  position: relative;
  z-index: 2;
  width: min(88vw, 1100px);
  margin: 0 auto;
  background: var(--color-panel);
  border-radius: var(--radius-lg);
  padding: clamp(40px, 6vw, 80px);
  box-shadow: var(--shadow-lift);
}

// ─── Heading ─────────────────────────────────
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

// ─── Intro row ────────────────────────────────
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
    &:hover {
      opacity: 0.75;
    }
  }
}

.about__contact-icon {
  width: 28px;
  text-align: center;
  font-size: 1.1rem;
}

// ─── Profile image ────────────────────────────
.about__profile-wrap {
  flex-shrink: 0;
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

@keyframes morph {
  0%,
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

// ─── Divider ─────────────────────────────────
.about__divider {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 32px 0;

  &--sm {
    margin: 20px 0;
  }
}

// ─── Skills grid ─────────────────────────────
.about__grid {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1.5fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}

.about__sub-title {
  font-family: var(--font-script);
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

// ─── Education ────────────────────────────────
.about__edu-item {
  margin-bottom: 12px;
}

.about__edu-school {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-text-primary);
}

.about__edu-degree {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-top: 2px;
}

.about__edu-year {
  font-size: 0.82rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-top: 2px;
}

// ─── Skill tags ───────────────────────────────
.about__skill-tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: rgba(232, 184, 75, 0.12);
    color: #8b6a00;
    border: 1px solid rgba(232, 184, 75, 0.35);
    padding: 5px 12px;
    border-radius: 999px;
  }
}

// ─── Specialization cards ────────────────────
.about__spec-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.about__spec-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px 12px;
  background: var(--color-bg-light);
  border-radius: var(--radius-card);
  border: 1px solid rgba(0, 0, 0, 0.06);
  text-align: center;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card);
  }
}

.about__spec-icon {
  font-size: 2rem;
  line-height: 1;
}

.about__spec-label {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-text-muted);
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .about__panel {
    width: 94vw;
    padding: 32px 24px;
  }

  .about__intro {
    flex-direction: column-reverse;
    align-items: center;
  }

  .about__profile-ring {
    width: 200px;
    height: 200px;
  }
}
</style>

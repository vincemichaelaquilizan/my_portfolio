<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ComicBorder from './reuse/comicBorder.vue'
import LabelPageTitle from './reuse/labelPageTitle.vue'
import { HERO } from '../content.config.js'

// Animated typewriter for roles
const displayedRole = ref(HERO.roles[0])
let roleIndex = 0
let charIndex = 0
let typing = true
let timer: ReturnType<typeof setTimeout>

const typeRole = () => {
  const role = HERO.roles[roleIndex]
  if (typing) {
    if (charIndex < role.length) {
      displayedRole.value = role.slice(0, ++charIndex)
      timer = setTimeout(typeRole, 75)
    } else {
      typing = false
      timer = setTimeout(typeRole, 1800)
    }
  } else {
    if (charIndex > 0) {
      displayedRole.value = role.slice(0, --charIndex)
      timer = setTimeout(typeRole, 40)
    } else {
      typing = true
      roleIndex = (roleIndex + 1) % HERO.roles.length
      timer = setTimeout(typeRole, 200)
    }
  }
}

onMounted(() => timer = setTimeout(typeRole, 800))
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <section id="home" class="hero bg-hero">
    <!-- Background decorative boxes -->
    <div class="hero__bg-box hero__bg-box--left"></div>
    <div class="hero__bg-box hero__bg-box--right"></div>

    <!-- Airplane -->
    <img class="hero__airplane" :src="HERO.airplaneImage" alt="" aria-hidden="true" />

    <!-- Character / Avatar -->
    <img class="hero__character" :src="HERO.profileImage" alt="Portfolio avatar" />

    <!-- City silhouette -->
    <img class="hero__city" :src="HERO.cityImage" alt="" aria-hidden="true" />

    <!-- Main text content -->
    <div class="hero__content">
      <span class="hero__year">{{ HERO.year }}</span>
      <h1 class="hero__title">{{ HERO.heading }}</h1>
      <div class="hero__typewriter">
        <span class="hero__role">{{ displayedRole }}</span>
        <span class="hero__cursor">|</span>
      </div>
    </div>

    <!-- Manga dots -->
    <ComicBorder />
  </section>
</template>

<style lang="scss" scoped>
// ─── Layout ──────────────────────────────────
.hero {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 560px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

// ─── Content ─────────────────────────────────
.hero__content {
  position: relative;
  z-index: 5;
  padding: 0 clamp(24px, 8vw, 120px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-white);
  margin-top: -40px;
}

.hero__year {
  font-family: var(--font-title);
  font-size: clamp(1.8rem, 5vw, 4rem);
  opacity: 0.6;
  letter-spacing: 0.12em;
  animation: fadeSlideUp 0.7s 0.1s both ease-out;
}

.hero__title {
  font-family: var(--font-title);
  font-size: clamp(4rem, 12vw, 10rem);
  line-height: 0.9;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
  text-shadow: 6px 6px 0 rgba(0, 0, 0, 0.7);
  animation: fadeSlideUp 0.7s 0.2s both ease-out;
}

.hero__typewriter {
  display: flex;
  align-items: center;
  gap: 2px;
  animation: fadeSlideUp 0.7s 0.4s both ease-out;
}

.hero__role {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  font-weight: 600;
  color: var(--color-accent);
  letter-spacing: 0.05em;
  min-height: 1.4em;
}

.hero__cursor {
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  color: var(--color-accent);
  animation: blink 1s step-end infinite;
}

// ─── Images ──────────────────────────────────
.hero__airplane {
  position: absolute;
  top: 10%;
  left: 22%;
  mix-blend-mode: color-dodge;
  opacity: 0.55;
  z-index: 2;
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
}

.hero__character {
  position: absolute;
  bottom: 0;
  right: 4vw;
  height: 90%;
  object-fit: contain;
  object-position: bottom;
  z-index: 4;
  transform: scaleX(-1);
  filter: drop-shadow(-10px 0 30px rgba(0, 0, 0, 0.5));
  animation: fadeSlideUp 0.9s 0.3s both ease-out;
}

.hero__city {
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%) scaleX(1.1);
  width: 100%;
  min-width: 800px;
  opacity: 0.55;
  mix-blend-mode: soft-light;
  z-index: 3;
  pointer-events: none;
}

// ─── Decorative bg boxes ──────────────────────
.hero__bg-box {
  position: absolute;
  width: 50rem;
  height: 50rem;
  background: rgba(255, 255, 255, 0.04);
  z-index: 1;

  &--left {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%) rotate(33.5deg) scaleX(5);
  }

  &--right {
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%) rotate(145.5deg) scaleX(5);
  }
}

// ─── Animations ──────────────────────────────
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 768px) {
  .hero__content {
    padding: 0 clamp(20px, 6vw, 40px);
    margin-top: -20px;
    width: 100%;
  }

  .hero__character {
    height: 55%;
    right: -10px;
    opacity: 0.6;
  }

  .hero__airplane {
    left: -20%;
    opacity: 0.3;
  }

  .hero__city {
    transform: translateX(-50%) scale(1.5);
  }
}
</style>

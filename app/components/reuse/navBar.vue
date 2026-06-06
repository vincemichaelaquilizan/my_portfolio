<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { NAV } from './../../content.config'

const isVisible = ref(false)
const menuOpen = ref(false)
const activeLink = ref('#home')

const handleScroll = () => {
  isVisible.value = window.scrollY > 80
  // auto-highlight active section
  const sections = NAV.links.map((l) => l.href.replace('#', ''))
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeLink.value = NAV.links[i].href
      break
    }
  }
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--visible': isVisible }">
    <div class="navbar__inner">
      <!-- Logo -->
      <a href="#home" class="navbar__logo" @click="closeMenu">
        {{ NAV.name }}
      </a>

      <!-- Desktop links -->
      <ul class="navbar__links">
        <li v-for="link in NAV.links" :key="link.href">
          <a
            :href="link.href"
            class="navbar__link"
            :class="{ 'navbar__link--active': activeLink === link.href }"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <transition name="drawer">
      <div v-if="menuOpen" class="navbar__drawer">
        <ul>
          <li v-for="link in NAV.links" :key="link.href">
            <a
              :href="link.href"
              class="navbar__drawer-link"
              :class="{ 'navbar__drawer-link--active': activeLink === link.href }"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
// ─── Variables ───────────────────────────────
$nav-height: 68px;
$accent: var(--color-accent);
$font-body: var(--font-body);

// ─── Base ────────────────────────────────────
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  // hidden by default (appears after scroll)
  background: rgba(17, 17, 17, 0);
  backdrop-filter: blur(0px);
  border-bottom: 1px solid transparent;
  transform: translateY(-100%);
  opacity: 0;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease,
    background 0.3s ease,
    backdrop-filter 0.3s ease;

  &--visible {
    transform: translateY(0);
    opacity: 1;
    background: rgba(17, 17, 17, 0.88);
    backdrop-filter: blur(14px);
    border-bottom-color: rgba(255, 255, 255, 0.06);
  }
}

// ─── Inner layout ────────────────────────────
.navbar__inner {
  max-width: var(--content-max);
  width: 100%;
  margin: 0 auto;
  height: $nav-height;
  padding: 0 clamp(16px, 4vw, 48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

// ─── Logo ────────────────────────────────────
.navbar__logo {
  font-family: var(--font-title);
  font-size: clamp(0.9rem, 1.5vw, 1.15rem);
  color: var(--color-white);
  letter-spacing: 0.03em;
  transition: color 0.2s;

  &:hover {
    color: $accent;
  }
}

// ─── Desktop nav links ────────────────────────
.navbar__links {
  list-style: none;
  display: flex;
  gap: clamp(16px, 3vw, 36px);
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
}

.navbar__link {
  font-family: $font-body;
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  position: relative;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: $accent;
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover,
  &--active {
    color: $accent;
    &::after {
      width: 100%;
    }
  }
}

// ─── Hamburger ────────────────────────────────
.navbar__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-white);
    border-radius: 2px;
    transition:
      transform 0.3s ease,
      opacity 0.2s ease;
    transform-origin: center;
  }

  &--open {
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }
    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
}

// ─── Mobile drawer ────────────────────────────
.navbar__drawer {
  background: rgba(17, 17, 17, 0.97);
  backdrop-filter: blur(20px);
  padding: 24px clamp(16px, 6vw, 40px) 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}

.navbar__drawer-link {
  display: block;
  font-family: $font-body;
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition:
    color 0.2s,
    padding-left 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover,
  &--active {
    color: $accent;
    padding-left: 8px;
  }
}

// ─── Drawer transition ────────────────────────
.drawer-enter-active,
.drawer-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

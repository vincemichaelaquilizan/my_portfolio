<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { MUSIC } from '../content.config.js'

// ─── State ───────────────────────────────────
const isOpen     = ref(false)
const isPlaying  = ref(false)
const trackIndex = ref(0)
const progress   = ref(0)
const volume     = ref(0.7)
const audio      = ref<HTMLAudioElement | null>(null)

const track = computed(() => MUSIC.tracks[trackIndex.value])

// ─── Helpers ─────────────────────────────────
const fmt = (s: number) => {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

const currentTime = ref(0)
const duration    = ref(0)

// ─── Audio controls ──────────────────────────
const loadTrack = () => {
  if (!audio.value) return
  audio.value.src = track.value.src || ''
  audio.value.volume = volume.value
  if (isPlaying.value) audio.value.play().catch(() => {})
}

const togglePlay = () => {
  if (!audio.value) return
  if (isPlaying.value) {
    audio.value.pause()
    isPlaying.value = false
  } else {
    if (!audio.value.src || audio.value.src === window.location.href) {
      loadTrack()
    }
    audio.value.play().then(() => { isPlaying.value = true }).catch(() => {})
  }
}

const nextTrack = () => {
  trackIndex.value = (trackIndex.value + 1) % MUSIC.tracks.length
}

const prevTrack = () => {
  trackIndex.value = (trackIndex.value - 1 + MUSIC.tracks.length) % MUSIC.tracks.length
}

const seekTo = (e: MouseEvent) => {
  if (!audio.value || !duration.value) return
  const bar = e.currentTarget as HTMLElement
  const ratio = e.offsetX / bar.offsetWidth
  audio.value.currentTime = ratio * duration.value
}

const setVolume = (e: Event) => {
  const v = parseFloat((e.target as HTMLInputElement).value)
  volume.value = v
  if (audio.value) audio.value.volume = v
}

watch(trackIndex, loadTrack)

onMounted(() => {
  audio.value = new Audio()
  audio.value.volume = volume.value

  audio.value.addEventListener('timeupdate', () => {
    currentTime.value = audio.value!.currentTime
    duration.value    = audio.value!.duration || 0
    progress.value    = duration.value ? (currentTime.value / duration.value) * 100 : 0
  })

  audio.value.addEventListener('ended', nextTrack)

  if (MUSIC.autoplay) {
    loadTrack()
    audio.value.play().then(() => { isPlaying.value = true }).catch(() => {})
  }
})

onUnmounted(() => {
  audio.value?.pause()
  audio.value?.removeEventListener('ended', nextTrack)
})
</script>

<template>
  <div class="player" :class="{ 'player--open': isOpen }">
    <!-- Toggle button -->
    <button class="player__toggle" @click="isOpen = !isOpen" aria-label="Toggle music player">
      <span v-if="isOpen">✕</span>
      <span v-else class="player__note" :class="{ 'player__note--playing': isPlaying }">♪</span>
    </button>

    <!-- Panel -->
    <div class="player__panel">
      <!-- Cover art -->
      <div class="player__cover-wrap">
        <img
          class="player__cover"
          :src="track.cover"
          :alt="track.title"
          :class="{ 'player__cover--spin': isPlaying }"
        />
      </div>

      <!-- Track info -->
      <div class="player__info">
        <p class="player__track-title">{{ track.title }}</p>
        <p class="player__track-artist">{{ track.artist }}</p>
      </div>

      <!-- Progress bar -->
      <div class="player__progress-wrap" @click="seekTo">
        <div class="player__progress-track">
          <div class="player__progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="player__times">
          <span>{{ fmt(currentTime) }}</span>
          <span>{{ duration ? fmt(duration) : '--:--' }}</span>
        </div>
      </div>

      <!-- Controls -->
      <div class="player__controls">
        <button class="player__btn" @click="prevTrack" aria-label="Previous">⏮</button>
        <button class="player__btn player__btn--main" @click="togglePlay" aria-label="Play/Pause">
          <span v-if="isPlaying">⏸</span>
          <span v-else>▶</span>
        </button>
        <button class="player__btn" @click="nextTrack" aria-label="Next">⏭</button>
      </div>

      <!-- Volume -->
      <div class="player__volume">
        <span class="player__volume-icon">🔈</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          :value="volume"
          @input="setVolume"
          class="player__volume-slider"
          aria-label="Volume"
        />
        <span class="player__volume-icon">🔊</span>
      </div>

      <!-- Track list -->
      <div class="player__tracklist">
        <button
          v-for="(t, i) in MUSIC.tracks"
          :key="t.id"
          class="player__track-btn"
          :class="{ 'player__track-btn--active': i === trackIndex }"
          @click="trackIndex = i; isPlaying && loadTrack()"
        >
          <span class="player__track-num">{{ i + 1 }}</span>
          <span class="player__track-name">{{ t.title }}</span>
          <span class="player__track-art">{{ t.artist }}</span>
        </button>
      </div>

      <p class="player__hint">Add .mp3 URLs in <code>content.config.js → MUSIC.tracks</code></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// ─── Floating position ────────────────────────
.player {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

// ─── Toggle button ────────────────────────────
.player__toggle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--color-accent), #c49a2a);
  color: var(--color-text-primary);
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 32px rgba(0,0,0,0.4);
  }
}

.player__note {
  display: inline-block;
  transition: transform 0.3s;

  &--playing {
    animation: noteFloat 1.5s ease-in-out infinite;
  }
}

@keyframes noteFloat {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50%       { transform: translateY(-4px) rotate(5deg); }
}

// ─── Panel ───────────────────────────────────
.player__panel {
  width: 300px;
  background: rgba(20, 20, 30, 0.97);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 24px 20px 16px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  gap: 14px;

  // hidden by default
  opacity: 0;
  transform: translateY(20px) scale(0.96);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;

  .player--open & {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: all;
  }
}

// ─── Cover ───────────────────────────────────
.player__cover-wrap {
  display: flex;
  justify-content: center;
}

.player__cover {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(232,184,75,0.4);
  transition: transform 0.3s;

  &--spin {
    animation: spin 8s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// ─── Info ────────────────────────────────────
.player__info { text-align: center; }

.player__track-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-white);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.player__track-artist {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.45);
  margin-top: 3px;
}

// ─── Progress ────────────────────────────────
.player__progress-wrap { cursor: pointer; }

.player__progress-track {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.12);
  border-radius: 999px;
  overflow: hidden;
}

.player__progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), #c49a2a);
  border-radius: 999px;
  transition: width 0.3s linear;
}

.player__times {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.35);
}

// ─── Controls ────────────────────────────────
.player__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.player__btn {
  background: rgba(255,255,255,0.07);
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: var(--color-white);
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: rgba(255,255,255,0.14);
    transform: scale(1.08);
  }

  &--main {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
    background: linear-gradient(135deg, var(--color-accent), #c49a2a);
    color: var(--color-text-primary);

    &:hover { background: var(--color-accent); }
  }
}

// ─── Volume ──────────────────────────────────
.player__volume {
  display: flex;
  align-items: center;
  gap: 8px;
}

.player__volume-icon {
  font-size: 0.9rem;
  opacity: 0.5;
}

.player__volume-slider {
  flex: 1;
  height: 4px;
  accent-color: var(--color-accent);
  cursor: pointer;
}

// ─── Track list ──────────────────────────────
.player__tracklist {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 120px;
  overflow-y: auto;
}

.player__track-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 7px 10px;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.06); }

  &--active {
    background: rgba(232,184,75,0.12);
    .player__track-name { color: var(--color-accent); }
    .player__track-num  { color: var(--color-accent); }
  }
}

.player__track-num {
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(255,255,255,0.3);
  width: 16px;
  flex-shrink: 0;
}

.player__track-name {
  flex: 1;
  font-size: 0.82rem;
  font-weight: 600;
  color: rgba(255,255,255,0.8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.player__track-art {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.3);
  white-space: nowrap;
}

// ─── Hint ────────────────────────────────────
.player__hint {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.2);
  text-align: center;
  line-height: 1.5;

  code {
    font-family: monospace;
    font-size: 0.66rem;
    color: rgba(232,184,75,0.5);
  }
}

// ─── Mobile ───────────────────────────────────
@media (max-width: 480px) {
  .player {
    bottom: 16px;
    right: 16px;
  }

  .player__panel {
    width: 270px;
  }
}
</style>

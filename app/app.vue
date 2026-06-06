<script setup>
import NavBar from './components/reuse/navBar.vue'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  if (document.readyState === 'complete') {
    isLoading.value = false
  } else {
    window.addEventListener('load', () => { isLoading.value = false })
  }
})
</script>

<template>
  <NavBar />
  <NuxtPage />

  <!-- All sections live here in one scroll flow -->
  <TitlePage />
  <AboutMe />
  <MyContent />
  <Certifications />
  <Reviews />
  <SocialMedia />
  <MusicPlayer />
</template>

<style lang="scss">
// Global page wrapper
#__nuxt {
  position: relative;
}
</style>

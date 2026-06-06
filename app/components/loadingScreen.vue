<template>
  <div v-if="loading" class="loading-screen">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
const loading = useState('loading')
</script>

<style>
.loading-screen {
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

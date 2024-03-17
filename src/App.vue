<script setup>
import Main from './components/Main.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar msg="Vite" />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>

<style scoped>
.container {
  /* width: 100vw; */
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>

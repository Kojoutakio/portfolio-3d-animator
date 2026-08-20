<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1800)
})
</script>

<template>
  <div class="app-wrapper">
    <Transition name="fade">
      <div v-if="isLoading" class="loading-screen">
        <div class="loader-3d">
          <div class="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
        <p class="loading-text">INITIALIZING 3D SPACE...</p>
      </div>
    </Transition>

    <div v-show="!isLoading" class="main-content">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: var(--bg-primary);
  overflow-x: hidden;
}

.loading-screen {
  position: fixed;
  inset: 0;
  background: #050510;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-3d {
  perspective: 600px;
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 2s infinite linear;
}

.face {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid #00f0ff;
  background: rgba(0, 240, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
}

.front  { transform: translateZ(40px); }
.back   { transform: rotateY(180deg) translateZ(40px); }
.left   { transform: rotateY(-90deg) translateZ(40px); }
.right  { transform: rotateY(90deg) translateZ(40px); }
.top    { transform: rotateX(90deg) translateZ(40px); }
.bottom { transform: rotateX(-90deg) translateZ(40px); }

@keyframes rotateCube {
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

.loading-text {
  font-family: 'Orbitron', sans-serif;
  color: #00f0ff;
  letter-spacing: 4px;
  font-size: 0.9rem;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-leave-to {
  opacity: 0;
}

.main-content {
  position: relative;
}
</style>

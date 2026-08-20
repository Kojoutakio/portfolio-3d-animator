<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobile = () => {
  isMobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <a href="#hero" class="logo" @click="closeMobile">
        <span class="logo-icon">◆</span>
        <span class="logo-text">3D<span class="accent">ANIM</span></span>
      </a>

      <nav :class="['nav-links', { open: isMobileOpen }]">
        <a href="#about" @click="closeMobile">About</a>
        <a href="#projects" @click="closeMobile">Projects</a>
        <a href="#skills" @click="closeMobile">Skills</a>
        <a href="#contact" @click="closeMobile">Contact</a>
      </nav>

      <button class="mobile-toggle" @click="toggleMobile" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(5, 5, 16, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 240, 255, 0.15);
  padding: 0.8rem 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
}

.logo-icon {
  color: var(--accent-cyan);
  font-size: 1.1rem;
  animation: spinSlow 8s linear infinite;
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.logo .accent {
  color: var(--accent-cyan);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
}

.nav-links a {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-cyan);
  transition: width 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent-cyan);
}

.nav-links a:hover::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mobile-toggle span {
  width: 24px;
  height: 2px;
  background: var(--accent-cyan);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(10, 10, 26, 0.98);
    flex-direction: column;
    padding: 5rem 2rem;
    gap: 2rem;
    transition: right 0.3s ease;
    border-left: 1px solid rgba(0, 240, 255, 0.2);
  }

  .nav-links.open {
    right: 0;
  }
}
</style>

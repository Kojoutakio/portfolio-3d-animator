<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouse = (e: MouseEvent) => {
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 20
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 20
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouse)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouse)
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="grid-floor"></div>
      <div class="floating-shapes">
        <div class="shape shape-1" :style="{ transform: `translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)` }"></div>
        <div class="shape shape-2" :style="{ transform: `translate(${mouseX * -0.3}px, ${mouseY * -0.3}px)` }"></div>
        <div class="shape shape-3" :style="{ transform: `translate(${mouseX * 0.7}px, ${mouseY * 0.4}px)` }"></div>
      </div>
    </div>

    <div class="container hero-content">
      <div class="hero-badge">INDUSTRIAL 3D ANIMATION</div>
      <h1 class="hero-title">
        Bringing <span class="gradient">Machines</span><br />
        to <span class="gradient">Life</span>
      </h1>
      <p class="hero-desc">
        Specialized 3D animator creating high-fidelity industrial visualizations,
        product animations, and technical storytelling for manufacturing & engineering.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-outline">Get In Touch</a>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-num">80+</span>
          <span class="stat-label">Projects</span>
        </div>
        <div class="stat">
          <span class="stat-num">6+</span>
          <span class="stat-label">Years Exp</span>
        </div>
        <div class="stat">
          <span class="stat-num">25+</span>
          <span class="stat-label">Clients</span>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-floor {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background:
    linear-gradient(to top, rgba(0, 240, 255, 0.05) 0%, transparent 100%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 49px,
      rgba(0, 240, 255, 0.08) 50px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 49px,
      rgba(0, 240, 255, 0.08) 50px
    );
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
  opacity: 0.6;
}

.floating-shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  border: 1px solid rgba(0, 240, 255, 0.3);
  background: rgba(0, 240, 255, 0.05);
  transition: transform 0.15s ease-out;
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 15%;
  border-radius: 8px;
  transform: rotate(15deg);
  animation: float1 8s ease-in-out infinite;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 55%;
  right: 25%;
  border-radius: 50%;
  animation: float2 10s ease-in-out infinite;
}

.shape-3 {
  width: 60px;
  height: 60px;
  top: 30%;
  right: 35%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: float3 7s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateY(0) rotate(15deg); }
  50% { transform: translateY(-25px) rotate(25deg); }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(20px); }
}
@keyframes float3 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: var(--accent-cyan);
  border: 1px solid rgba(0, 240, 255, 0.4);
  border-radius: 2px;
  margin-bottom: 1.5rem;
  background: rgba(0, 240, 255, 0.05);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.2rem);
  line-height: 1.15;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.hero-title .gradient {
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 540px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-cyan);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.mouse {
  width: 24px;
  height: 38px;
  border: 2px solid rgba(0, 240, 255, 0.4);
  border-radius: 12px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: var(--accent-cyan);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 1.5s ease-in-out infinite;
}

@keyframes scrollWheel {
  0% { opacity: 1; top: 6px; }
  100% { opacity: 0; top: 18px; }
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 1.5rem;
  }
  .stat-num {
    font-size: 1.4rem;
  }
}
</style>

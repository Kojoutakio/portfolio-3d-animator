<script setup lang="ts">
import { skills } from '../data/projects'
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <h2 class="section-title">Skills & Expertise</h2>
      <p class="section-subtitle">
        Tools and specialties honed through years of industrial 3D production.
      </p>

      <div class="skills-grid">
        <div
          v-for="(skill, i) in skills"
          :key="skill.name"
          class="skill-card"
          :style="{ animationDelay: `${i * 0.05}s` }"
        >
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-level">{{ skill.level }}%</span>
          </div>
          <div class="skill-bar">
            <div
              class="skill-fill"
              :style="{ width: skill.level + '%' }"
            ></div>
          </div>
          <span class="skill-category">{{ skill.category }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.1);
  border-radius: 8px;
  padding: 1.3rem 1.5rem;
  transition: border-color 0.3s ease, transform 0.3s ease;
  animation: fadeUp 0.5s ease both;
}

.skill-card:hover {
  border-color: rgba(0, 240, 255, 0.35);
  transform: translateY(-3px);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}

.skill-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--text-primary);
}

.skill-level {
  font-size: 0.85rem;
  color: var(--accent-cyan);
  font-weight: 600;
}

.skill-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.6rem;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
  border-radius: 3px;
  transition: width 1s ease;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
}

.skill-category {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

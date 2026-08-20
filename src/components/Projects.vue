<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, type Project } from '../data/projects'

const activeCategory = ref('All')
const selectedProject = ref<Project | null>(null)

const categories = computed(() => {
  const cats = new Set(projects.map(p => p.category))
  return ['All', ...Array.from(cats)]
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

const openModal = (project: Project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

const handleTilt = (e: MouseEvent, el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 15
  const rotateY = (centerX - x) / 15
  el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
}

const resetTilt = (el: HTMLElement) => {
  el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
}
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title">Featured Work</h2>
      <p class="section-subtitle">
        Industrial & technical 3D animations crafted for real-world applications.
        Click any project to explore details.
      </p>

      <div class="filter-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['filter-btn', { active: activeCategory === cat }]"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
          @click="openModal(project)"
          @mousemove="handleTilt($event, $event.currentTarget as HTMLElement)"
          @mouseleave="resetTilt($event.currentTarget as HTMLElement)"
        >
          <div class="card-image">
            <div class="image-placeholder">
              <span class="placeholder-icon">▣</span>
              <span class="placeholder-text">{{ project.category }}</span>
            </div>
            <div class="card-overlay">
              <span class="view-btn">View Details →</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-meta">
              <span class="card-category">{{ project.category }}</span>
              <span class="card-year">{{ project.year }}</span>
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.description.slice(0, 100) }}...</p>
            <div class="card-tools">
              <span v-for="tool in project.tools.slice(0, 3)" :key="tool" class="tool-tag">
                {{ tool }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
          <div class="modal-content">
            <button class="modal-close" @click="closeModal">✕</button>
            <div class="modal-image">
              <div class="image-placeholder large">
                <span class="placeholder-icon">▣</span>
                <span class="placeholder-text">{{ selectedProject.category }}</span>
              </div>
            </div>
            <div class="modal-body">
              <div class="modal-meta">
                <span class="card-category">{{ selectedProject.category }}</span>
                <span class="card-year">{{ selectedProject.year }}</span>
              </div>
              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              <p class="modal-desc">{{ selectedProject.description }}</p>
              <div class="modal-section">
                <h4>Tools Used</h4>
                <div class="card-tools">
                  <span v-for="tool in selectedProject.tools" :key="tool" class="tool-tag">
                    {{ tool }}
                  </span>
                </div>
              </div>
              <div class="modal-section">
                <h4>Tags</h4>
                <div class="card-tools">
                  <span v-for="tag in selectedProject.tags" :key="tag" class="tool-tag tag">
                    #{{ tag }}
                  </span>
                </div>
              </div>
              <div v-if="selectedProject.video" class="modal-section">
                <h4>Demo</h4>
                <div class="video-wrapper">
                  <iframe
                    :src="selectedProject.video"
                    frameborder="0"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <a
                v-if="selectedProject.link"
                :href="selectedProject.link"
                target="_blank"
                rel="noopener"
                class="btn btn-primary"
                style="margin-top: 1.5rem"
              >
                View External Link
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.filter-btn {
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  background: transparent;
  border: 1px solid rgba(0, 240, 255, 0.25);
  color: var(--text-secondary);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: rgba(0, 240, 255, 0.15);
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
}

.project-card {
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.12);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease;
  transform-style: preserve-3d;
}

.project-card:hover {
  border-color: rgba(0, 240, 255, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 240, 255, 0.1);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.08), rgba(139, 92, 246, 0.12));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.image-placeholder.large {
  height: 280px;
  border-radius: 8px 8px 0 0;
}

.placeholder-icon {
  font-size: 3rem;
  color: var(--accent-cyan);
  opacity: 0.5;
}

.placeholder-text {
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--text-muted);
  text-transform: uppercase;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 16, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  font-family: var(--font-display);
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: var(--accent-cyan);
  border: 1px solid var(--accent-cyan);
  padding: 0.6rem 1.4rem;
  border-radius: 4px;
}

.card-body {
  padding: 1.4rem;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}

.card-category {
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--accent-cyan);
  font-family: var(--font-display);
}

.card-year {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.card-title {
  font-size: 1.15rem;
  margin-bottom: 0.6rem;
  color: var(--text-primary);
  line-height: 1.3;
}

.card-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.card-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tool-tag {
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  background: rgba(0, 240, 255, 0.08);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 3px;
  color: var(--text-secondary);
}

.tool-tag.tag {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
  color: var(--accent-purple);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-content {
  background: var(--bg-secondary);
  border: 1px solid rgba(0, 240, 255, 0.25);
  border-radius: 12px;
  max-width: 720px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 0 60px rgba(0, 240, 255, 0.15);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--accent-magenta);
  border-color: var(--accent-magenta);
}

.modal-body {
  padding: 1.5rem 2rem 2rem;
}

.modal-title {
  font-size: 1.6rem;
  margin: 0.5rem 0 1rem;
  color: var(--text-primary);
}

.modal-desc {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.modal-section {
  margin-bottom: 1.5rem;
}

.modal-section h4 {
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: var(--accent-cyan);
  margin-bottom: 0.6rem;
  text-transform: uppercase;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(0, 240, 255, 0.2);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}
.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(20px);
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

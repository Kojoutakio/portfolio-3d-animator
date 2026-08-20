<script setup lang="ts">
import { about } from '../data/projects'
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual">
          <div class="avatar-frame">
            <div class="avatar-placeholder">
              <span class="avatar-icon">◈</span>
            </div>
            <div class="frame-corner tl"></div>
            <div class="frame-corner tr"></div>
            <div class="frame-corner bl"></div>
            <div class="frame-corner br"></div>
          </div>
          <div class="floating-label">AVAILABLE FOR HIRE</div>
        </div>

        <div class="about-text">
          <h2 class="section-title">About Me</h2>
          <p class="role">{{ about.title }}</p>
          <p class="bio">{{ about.bio }}</p>

          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Experience</span>
              <span class="info-value">{{ about.experience }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Projects</span>
              <span class="info-value">{{ about.projectsCompleted }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Clients</span>
              <span class="info-value">{{ about.clients }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Location</span>
              <span class="info-value">{{ about.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 26, 0.5) 50%, transparent 100%);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: center;
}

.about-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.avatar-frame {
  position: relative;
  width: 280px;
  height: 280px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(0, 240, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.avatar-icon {
  font-size: 5rem;
  color: var(--accent-cyan);
  opacity: 0.6;
  animation: pulse 3s ease-in-out infinite;
}

.frame-corner {
  position: absolute;
  width: 24px;
  height: 24px;
  border-color: var(--accent-cyan);
  border-style: solid;
}

.tl { top: -6px; left: -6px; border-width: 2px 0 0 2px; }
.tr { top: -6px; right: -6px; border-width: 2px 2px 0 0; }
.bl { bottom: -6px; left: -6px; border-width: 0 0 2px 2px; }
.br { bottom: -6px; right: -6px; border-width: 0 2px 2px 0; }

.floating-label {
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--accent-orange);
  background: var(--bg-primary);
  padding: 0.3rem 0.8rem;
  border: 1px solid rgba(255, 107, 0, 0.4);
  white-space: nowrap;
}

.role {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--accent-cyan);
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
}

.bio {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  white-space: pre-line;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem;
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.1);
  border-radius: 6px;
  transition: border-color 0.3s ease;
}

.info-item:hover {
  border-color: rgba(0, 240, 255, 0.4);
}

.info-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-value {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--text-primary);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .about-visual {
    order: -1;
  }
  .avatar-frame {
    width: 220px;
    height: 220px;
  }
}
</style>

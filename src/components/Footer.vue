<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="logo-icon">◆</span>
        <span>3D ANIMATOR</span>
      </div>
      <p class="footer-copy">
        © {{ year }} · Built with Vue + TypeScript · Portfolio data editable via GitHub
      </p>
      <p class="footer-note">
        Edit <code>src/data/projects.ts</code> to update projects anytime.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(0, 240, 255, 0.1);
  padding: 2.5rem 0;
  background: rgba(5, 5, 16, 0.8);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: 2px;
  color: var(--text-primary);
}

.logo-icon {
  color: var(--accent-cyan);
}

.footer-copy {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-note {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-note code {
  background: rgba(0, 240, 255, 0.1);
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  color: var(--accent-cyan);
  font-size: 0.75rem;
}
</style>

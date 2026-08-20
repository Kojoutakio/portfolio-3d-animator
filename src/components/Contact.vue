<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = (e: Event) => {
  e.preventDefault()
  console.log('Form submitted:', form.value)
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', email: '', message: '' }
  }, 4000)
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">Let's Collaborate</h2>
      <p class="section-subtitle">
        Have an industrial visualization or product animation project in mind?
        Let's turn complex ideas into stunning 3D experiences.
      </p>

      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-block">
            <h4>Email</h4>
            <a href="mailto:earthkun03@gmail.com">earthkun03@gmail.com</a>
          </div>
          <div class="info-block">
            <h4>Location</h4>
            <p>Jakarta, Indonesia · Remote Worldwide</p>
          </div>
          <div class="info-block">
            <h4>Social</h4>
            <div class="social-links">
              <a href="#" target="_blank" rel="noopener">ArtStation</a>
              <a href="#" target="_blank" rel="noopener">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener">Behance</a>
              <a href="#" target="_blank" rel="noopener">YouTube</a>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit="handleSubmit">
          <div v-if="submitted" class="success-msg">
            ✓ Message sent! I'll get back to you soon.
          </div>
          <template v-else>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </template>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;
  align-items: start;
}

.info-block {
  margin-bottom: 2rem;
}

.info-block h4 {
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent-cyan);
  margin-bottom: 0.5rem;
}

.info-block a,
.info-block p {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-links a {
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 0.4rem 0.9rem;
  border: 1px solid rgba(0, 240, 255, 0.25);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: rgba(0, 240, 255, 0.1);
  border-color: var(--accent-cyan);
}

.contact-form {
  background: var(--bg-card);
  border: 1px solid rgba(0, 240, 255, 0.15);
  border-radius: 10px;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.3rem;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 6px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.success-msg {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--accent-cyan);
  font-family: var(--font-display);
  font-size: 1.1rem;
}

@media (max-width: 800px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>

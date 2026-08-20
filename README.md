# 3D Animator Portfolio — Industrial Visualization

Website portfolio interaktif bertema **3D / Animation** untuk **3D Animator** spesialisasi **Industrial Visualization**.

## Tech Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Frontend     | Vue 3 + TypeScript      |
| Styling      | CSS (custom 3D theme)   |
| Markup       | HTML5                   |
| Build        | Vite                    |
| Scripts      | Shell (bash)            |
| Utility      | Java (ProjectValidator) |

## Fitur

- Tema gelap cyber/industrial dengan efek 3D (CSS perspective + tilt cards)
- Loading screen animasi cube 3D
- Filter project by category
- Modal detail project + optional video embed
- Data-driven: **semua portfolio bisa diubah lewat code**
- Responsive mobile-friendly
- Siap deploy ke GitHub Pages / Vercel / Netlify

## Cara Mengubah Portfolio (via GitHub)

1. Buka file **`src/data/projects.ts`**
2. Edit / tambah / hapus object di dalam array `projects`
3. Commit & push perubahan
4. Website otomatis update (jika CI/CD atau GitHub Pages aktif)

Contoh menambah project baru:

```ts
{
  id: 7,
  title: "Nama Project Baru",
  category: "Mechanical",          // Industrial Viz | Product Animation | Mechanical | Architecture | VFX
  description: "Deskripsi singkat...",
  tools: ["Blender", "Unreal Engine 5"],
  year: 2026,
  image: "/images/nama-gambar.jpg",
  featured: true,
  tags: ["industrial", "animation"]
}
```

Juga bisa edit data **About** dan **Skills** di file yang sama.

## Menjalankan Locally

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build production
npm run build
# atau
./scripts/build.sh

# Preview build
npm run preview
```

## Deploy ke GitHub Pages

```bash
# Pastikan repo sudah di-push ke GitHub
./scripts/deploy-gh-pages.sh
```

Atau pakai Vercel / Netlify: connect repo → auto deploy on push.

## Java Utility

Ada utility sederhana di `java-utils/` untuk validasi struktur project (berguna jika nanti integrasi pipeline asset):

```bash
cd java-utils
javac -d out src/main/java/com/portfolio/ProjectValidator.java
java -cp out com.portfolio.ProjectValidator
```

## Struktur Folder

```
├── public/
│   ├── favicon.svg
│   └── images/          ← taruh gambar project di sini
├── scripts/
│   ├── build.sh
│   └── deploy-gh-pages.sh
├── java-utils/
│   └── src/main/java/com/portfolio/ProjectValidator.java
├── src/
│   ├── components/      ← Vue components
│   ├── data/
│   │   └── projects.ts  ← ★ EDIT PORTFOLIO DI SINI
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── index.html
├── package.json
└── vite.config.ts
```

## Customisasi

- Ganti nama & bio di `src/data/projects.ts` → object `about`
- Ganti warna di `src/style.css` → CSS variables (`--accent-cyan`, dll)
- Tambah gambar project ke `public/images/` lalu update path di data

---

Dibuat dengan Vue 3 + TypeScript + CSS 3D effects.

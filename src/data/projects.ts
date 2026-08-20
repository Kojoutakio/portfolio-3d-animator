/**
 * ============================================================
 *  PORTFOLIO DATA - EDIT THIS FILE TO UPDATE YOUR PROJECTS
 * ============================================================
 * 
 * Cara mengubah portfolio (via GitHub):
 * 1. Buka file ini di repository GitHub kamu
 * 2. Edit / tambah / hapus object di dalam array `projects`
 * 3. Commit & push perubahan
 * 4. Website akan otomatis update (jika deploy via GitHub Pages / Vercel)
 *
 * Setiap project memiliki:
 * - id: unique number
 * - title: judul project
 * - category: kategori (Industrial Viz, Product Animation, Mechanical, Architecture, VFX)
 * - description: deskripsi singkat
 * - tools: array tools yang digunakan (Blender, Maya, Cinema 4D, Unreal, dll)
 * - year: tahun
 * - image: path gambar (letakkan di public/images/)
 * - video?: optional URL video demo
 * - link?: optional external link
 * - featured: true jika ingin muncul di featured section
 * - tags: array keyword
 */

export interface Project {
  id: number
  title: string
  category: string
  description: string
  tools: string[]
  year: number
  image: string
  video?: string
  link?: string
  featured: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Industrial Robotic Arm Animation",
    category: "Mechanical",
    description: "High-detail 3D animation of a 6-axis industrial robotic arm performing precision assembly tasks. Includes realistic material, motion blur, and factory environment lighting.",
    tools: ["Blender", "Substance Painter", "After Effects"],
    year: 2025,
    image: "/images/robotic-arm.jpg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    featured: true,
    tags: ["robotics", "industrial", "animation", "mechanical"]
  },
  {
    id: 2,
    title: "Automotive Product Visualization",
    category: "Product Animation",
    description: "Cinematic product reveal for an electric vehicle chassis. Focused on material fidelity, exploded views, and technical cutaways for marketing & engineering presentations.",
    tools: ["Cinema 4D", "Redshift", "Photoshop"],
    year: 2025,
    image: "/images/ev-chassis.jpg",
    featured: true,
    tags: ["automotive", "product", "visualization", "cinematic"]
  },
  {
    id: 3,
    title: "Factory Assembly Line Simulation",
    category: "Industrial Viz",
    description: "Real-time capable 3D simulation of a complete production line. Used for process optimization training and stakeholder presentations.",
    tools: ["Unreal Engine 5", "Blender", "Houdini"],
    year: 2024,
    image: "/images/assembly-line.jpg",
    featured: true,
    tags: ["factory", "simulation", "real-time", "industrial"]
  },
  {
    id: 4,
    title: "Architectural Walkthrough - Smart Factory",
    category: "Architecture",
    description: "Immersive 3D walkthrough of a proposed smart manufacturing facility. Integrated lighting, atmospheric effects, and interactive hotspots.",
    tools: ["3ds Max", "V-Ray", "Unreal Engine"],
    year: 2024,
    image: "/images/smart-factory.jpg",
    featured: false,
    tags: ["architecture", "walkthrough", "smart-factory"]
  },
  {
    id: 5,
    title: "Heavy Machinery Exploded View",
    category: "Mechanical",
    description: "Detailed technical animation showing the internal components of industrial heavy machinery. Perfect for training manuals and technical documentation.",
    tools: ["Maya", "Arnold", "Substance"],
    year: 2024,
    image: "/images/heavy-machinery.jpg",
    featured: false,
    tags: ["exploded-view", "technical", "machinery"]
  },
  {
    id: 6,
    title: "Oil & Gas Pipeline Visualization",
    category: "Industrial Viz",
    description: "Large-scale environmental visualization of offshore pipeline systems with fluid simulation and atmospheric effects.",
    tools: ["Houdini", "Nuke", "Blender"],
    year: 2023,
    image: "/images/pipeline.jpg",
    featured: false,
    tags: ["oil-gas", "environment", "simulation"]
  }
]

export const skills = [
  { name: "Blender", level: 95, category: "3D Software" },
  { name: "Maya", level: 88, category: "3D Software" },
  { name: "Cinema 4D", level: 85, category: "3D Software" },
  { name: "Unreal Engine 5", level: 82, category: "Real-time" },
  { name: "Houdini", level: 75, category: "FX / Simulation" },
  { name: "Substance Painter", level: 90, category: "Texturing" },
  { name: "After Effects", level: 80, category: "Compositing" },
  { name: "Technical Animation", level: 92, category: "Specialty" },
  { name: "Product Visualization", level: 94, category: "Specialty" },
  { name: "Industrial Design Viz", level: 90, category: "Specialty" }
]

export const about = {
  name: "Kojouta",
  title: "3D Animator | Industrial Visualization Specialist",
  bio: `Passionate 3D animator specializing in industrial and product visualization. 
With over 6 years of experience creating high-fidelity animations for manufacturing, 
automotive, and engineering clients. I bridge the gap between technical accuracy 
and cinematic storytelling — turning complex machinery into compelling visual narratives.`,
  experience: "6+ Years",
  projectsCompleted: "80+",
  clients: "25+",
  location: "Jakarta, Indonesia"
}

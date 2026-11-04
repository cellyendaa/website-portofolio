import { useState, useRef } from "react";
import "./App.css";
import FotoPutri from "./assets/FotoPutri.jpeg";
import Logo from "./assets/Logo.png";
// import LibraryProject from "./assets/perpustakaanUAI.png";
// import FoodiesProject from "./assets/yendafoodies1.png";
// import FoodiesProject2 from "./assets/yendafoodies2.png";
import Jalin from "./assets/Jalin.jpeg";
import KerjaJalin from "./assets/KerjaJalin.jpeg";
import Perhutani from "./assets/perumPerhutani1.jpeg";
import DivisiITPerhutani from "./assets/DivisiITPerumPerhutani.jpeg";
import DivisiBIT from "./assets/DivisiITBIT.jpeg";
import Mengajar from "./assets/mengajar.jpeg";
import NilaiJalin from "./assets/NilaiJalin.png";
import Nilai from "./assets/Nilai.png";
import Sertifikat from "./assets/Sertifikat.png";
// import Vector1 from "./assets/VectorOne.png";
// import Vector2 from "./assets/VectorTwo.png";
import Reveal from "./components/Reveal";
import MagneticButton from "./components/MagneticButton";
import { SparklesIcon, CodeBracketIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, ArrowUpRightIcon, AcademicCapIcon, UserGroupIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Golang", "PHP", "Python", "Dart"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Flutter"],
  },
  {
    category: "Backend Development",
    skills: ["Spring Boot", "Node.js", "Express.js", "CodeIgniter", "REST API"],
  },
  {
    category: "Database & Integration",
    skills: ["MySQL", "SQL", "JSON", "REST API Integration"],
  },
  {
    category: "AI & Technologies",
    skills: ["RAG", "Gemini LLM", "AI/LLM Integration"],
  },
  {
    category: "Tools & Development",
    skills: ["Git", "GitLab", "GitHub", "Postman", "Docker", "VS Code", "DBeaver", "Linux", "VM", "Figma"],
  },
  {
    category: "Software Engineering",
    skills: ["Debugging", "Regression Testing", "SDLC", "UI/UX", "Wireframe", "ERD", "Use Case Diagram"],
  },
];

const internshipExperiences = [
  {
    company: "PT Jalin Pembayaran Nusantara",
    projectName: "JSmart – Procurement Planning & Management System",
    role: "Software Developer (Internship)",
    period: "September 2026 – Oktober 2026",
    location: "Jakarta, Indonesia",
    description: "Berkontribusi dalam pengembangan sistem internal perusahaan untuk mendukung proses procurement planning, monitoring pengadaan, dan pengelolaan anggaran.",
    points: [
      "Mengembangkan automated planning reminder serta notifikasi in-app dan email menggunakan React.js, Python, dan SQL.",
      "Mengimplementasikan reminder bertingkat berdasarkan sisa waktu target PO, dari Officer hingga Head, VP, dan SVP, termasuk pengingat mingguan dan pencegahan notifikasi duplikat.",
      "Membangun Reminder Center untuk memantau log notifikasi serta Parameter Reminder untuk mengatur level, rentang waktu, frekuensi, dan status pengingat.",
      "Mengembangkan Milestone Reference Documents yang terintegrasi dengan Update Progress dan OneDrive untuk standardisasi dokumentasi milestone procurement.",
      "Mengembangkan User Management dengan pengaturan email, jabatan, role Operator, visibilitas password, serta kontrol akses berbasis role dan menu.",
      "Mengelola branch GitLab, code review, merge request, dan production deployment.",
    ],
    technologies: ["React.js", "Python", "SQL", "GitLab", "HTML"],
  },
  {
    company: "PT Bringin Inti Teknologi (BIT)",
    projectName: "Beerp – Business Enterprise Application",
    projectUrl: "https://beerp.bitcorp.id/",
    role: "Full-Stack Developer (Internship)",
    period: "Agustus 2025 – Februari 2026",
    mode: "Hybrid",
    description: "Berkontribusi dalam pengembangan dan pemeliharaan aplikasi bisnis, khususnya pada modul Leave, Topics, dan Late for Work.",
    points: [
      "Mengembangkan History Approval Edit Annual Leave, termasuk approval matrix, pembaruan kuota cuti otomatis, notifikasi real-time, serta antarmuka table view dan popup approval.",
      "Mengimplementasikan Permission View (Team) pada modul Leave agar Team Leader dapat memantau data anggota tim berdasarkan struktur organisasi dengan filter status dan tipe cuti dinamis.",
      "Mengimplementasikan Permission Edit (Own) pada modul Topics untuk membatasi hak edit berdasarkan kepemilikan data pengguna.",
      "Memperbaiki backend approval logic pada Late for Work agar tombol Approve dan Reject tampil sesuai dengan approver aktif.",
    ],
    technologies: ["PHP", "React.js", "CodeIgniter", "MySQL", "Docker", "DBeaver", "Git", "GitLab"],
  },
  {
    company: "Perum Perhutani",
    projectName: "Tebu Temani Perhutani",
    projectUrl: "https://teman.perhutani.co.id/login",
    role: "Full-Stack Developer (Internship)",
    period: "Agustus 2025 – Desember 2025",
    location: "Jakarta, Indonesia",
    description: "Berkontribusi dalam pengembangan aplikasi web untuk mendukung proses operasional melalui implementasi fitur frontend dan backend.",
    points: [
      "Mengembangkan Task Form DHHBK secara end-to-end menggunakan PHP dan Laravel, termasuk validasi input, multiple image upload, penyimpanan database, dan pemeriksaan integritas data di backend.",
      "Mengimplementasikan validasi aturan password di frontend dan backend, dilengkapi indikator real-time serta fitur show/hide password.",
      "Mengembangkan dynamic recipient filtering menggunakan database queries, loading states, dan penanganan edge cases.",
      "Melakukan regression testing pada staging environment untuk memastikan tidak ada critical bug sebelum feature review.",
    ],
    technologies: ["PHP", "JavaScript", "SQL", "Laravel", "GitLab", "Database", "DBeaver", "Regression Testing"],
  },
];

const teachingExperiences = [
  {
    company: "Universitas Al-Azhar Indonesia",
    role: "Asisten Praktikum – Algoritma Pemrograman",
    period: "Maret 2025 – Agustus 2025",
    mode: "Hybrid",
    points: [
      "Membimbing 43 mahasiswa dalam format hybrid (offline & online) untuk memahami konsep dasar pemrograman menggunakan Python dan algoritma dasar.",
      "Menganalisis kemampuan coding mahasiswa, menemukan sekitar 23% yang masih awam, lalu memberikan pendampingan hingga mereka mampu memahami dasar-dasar logika pemrograman.",
      "Mendampingi mahasiswa selama sesi praktikum, membantu debugging, serta tugas coding langsung untuk meningkatkan kemampuan pemecahan masalah.",
      "Berkolaborasi dengan dosen dalam merancang penilaian dan memantau perkembangan mahasiswa.",
    ],
  },
  {
    company: "Bebras Indonesia",
    role: "Mentor",
    location: "Jakarta, Indonesia",
    period: "2023",
    mode: "Offline",
    points: ["Membimbing siswa sekolah dasar untuk memahami dasar-dasar berpikir komputasional melalui aktivitas yang menyenangkan dan interaktif."],
  },
];

const featuredProject = {
  number: "01",
  title: "SnapRent",
  subtitle: "AI-Powered Camera Rental Chatbot",
  type: "Proyek Skripsi · 2026",
  description:
    "Mengembangkan chatbot berbasis web untuk layanan persewaan kamera menggunakan Node.js, TypeScript, dan Express.js. Mengimplementasikan Retrieval-Augmented Generation (RAG) dengan LLM Gemini untuk menangani query kompleks dan tidak terstruktur. Menangani pengembangan end-to-end, meliputi REST API, integrasi database, serta frontend dan backend.",
  liveUrl: "https://snaprent-ten.vercel.app/",
  technologies: ["Node.js", "TypeScript", "Express.js", "RAG", "Gemini", "REST API", "Database", "Frontend & Backend"],
};

const projects = [
  /* {
    number: "02",
    title: "Yenda Foodies",
    subtitle: "Aplikasi Pemesanan Makanan",
    type: "Proyek Akademik · 2024",
    description:
      "Mengembangkan aplikasi pemesanan makanan menggunakan Flutter dengan fokus pada antarmuka responsif dan mudah digunakan. Mengimplementasikan desain dari Figma ke UI Flutter serta menghubungkan form pemesanan dengan backend.",
    image: FoodiesProject,
  }, */
  /* {
    number: "03",
    title: "Sistem Enkripsi File Berbasis Web",
    type: "Proyek Akademik · 2025",
    description: "Membangun aplikasi enkripsi file berbasis web menggunakan JavaScript dengan algoritma AES dan RSA. Menangani proses upload, enkripsi, dekripsi, serta download file melalui integrasi frontend dan backend.",
    image: LibraryProject,
  }, */
];

const contacts = [
  {
    label: "GitHub",
    value: "cellyendaa",
    href: "https://github.com/cellyendaa?tab=repositories",
  },
  {
    label: "LinkedIn",
    value: "Putri Cellyenda",
    href: "https://www.linkedin.com/in/putri-cellyenda-029653381/",
  },
  {
    label: "Instagram",
    value: "putricellyendaa_",
    href: "https://www.instagram.com/putricellyendaa_?igsh=MXhiZHpwcXU3emVjMg==",
  },
];

const activityGallery = [
  { src: Jalin, title: "Divisi PT Jalin Pembayaran Nusantara", category: "Magang" },
  { src: KerjaJalin, title: "Kegiatan Kerja Praktek PT Jalin", category: "Magang" },
  { src: Perhutani, title: "Kegiatan Magang Perhutani", category: "Magang" },
  { src: DivisiITPerhutani, title: "Divisi IT Perum Perhutani", category: "Magang" },
  { src: DivisiBIT, title: "Divisi IT BIT", category: "Magang" },
  { src: Mengajar, title: "Praktikum Algoritma", category: "Mengajar" },
];

const internshipCertificates = [
  { src: NilaiJalin, title: "Sertifikat Magang PT Jalin", category: "Sertifikat", institution: "PT Jalin Pembayaran Nusantara" },
  { src: Sertifikat, title: "Sertifikat Magang Perum Perhutani", category: "Sertifikat", institution: "Perum Perhutani" },
  { src: Nilai, title: "Nilai Magang BIT", category: "Sertifikat", institution: "PT Bit Teknologi Inovasi" },
];

const HeroPhotoDecorations = () => (
  <div className="tech-decorations" aria-hidden="true">
    <span className="tech-float tech-html">HTML</span>
    <span className="tech-float tech-react">⚛</span>
    <span className="tech-float tech-js">JS</span>
    <span className="tech-float tech-python">Py</span>
    <span className="tech-float tech-git">Git</span>
  </div>
);

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const { scrollLeft, clientWidth } = galleryRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;

      galleryRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const navigateModal = (direction) => {
    if (!selectedItem) return;

    const currentArray = selectedItem.type === "activity" ? activityGallery : internshipCertificates;
    const currentIndex = selectedItem.index;

    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % currentArray.length;
    } else {
      nextIndex = (currentIndex - 1 + currentArray.length) % currentArray.length;
    }

    setSelectedItem({ ...currentArray[nextIndex], index: nextIndex, type: selectedItem.type });
  };

  return (
    <div className="portfolio-shell">
      {/* Modal Pop-up */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <button
            className="modal-nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateModal("prev");
            }}
          >
            <ChevronLeftIcon className="icon-small" />
          </button>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>
              &times;
            </button>
            <img src={selectedItem.src} alt={selectedItem.title} />
            <div className="modal-caption">
              <span className="modal-category">{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              {selectedItem.institution && <p className="modal-institution">{selectedItem.institution}</p>}
            </div>
          </div>

          <button
            className="modal-nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              navigateModal("next");
            }}
          >
            <ChevronRightIcon className="icon-small" />
          </button>
        </div>
      )}
      <div className="portfolio-backdrop">
        <span className="blob blob-one" />
        <span className="blob blob-two" />
        <span className="blob blob-three" />
      </div>

      <header className="site-header">
        <a className="brand" href="#home">
          <img className="brand-logo" src={Logo} alt="Logo Putri Cellyenda" />
          <div>
            <span className="brand-name">Putri Cellyenda</span>
            <span className="brand-role">Full-Stack Web Developer</span>
          </div>
        </a>

        <nav className="site-nav" aria-label="Navigasi utama">
          <a href="#about">Tentang</a>
          <a href="#experience">Pengalaman</a>
          <a href="#skills">Keahlian</a>
          <a href="#teaching">Mengajar</a>
          <a href="#projects">Project</a>
          <a href="#contact">Kontak</a>
        </nav>
      </header>

      <main className="portfolio-main">
        <div className="hero-layout">
          <section className="hero-section section-card" id="home">
            <div className="hero-copy fade-in-up">
              <span className="eyebrow">
                <SparklesIcon className="icon-small" /> Informatics Graduate · Fresh Graduate · Full-Stack Developer
              </span>
              <h1>
                Putri <span>Cellyenda</span>
              </h1>
              <p className="hero-text">Full-Stack Developer and Informatics graduate with over 1 year of hands-on experience building and maintaining web applications, business systems, and REST APIs. Experienced in Java, JavaScript, Golang, PHP, and modern web technologies, with a focus on clean code and scalable solutions.</p>

              <div className="hero-actions">
                <a className="primary-button" href="#experience">
                  Lihat Pengalaman <ArrowUpRightIcon className="icon-small-ml" />
                </a>
                <a className="secondary-button" href="https://drive.google.com/file/d/1sP3aivKfYx26Jjw-GHIp93qX-FycYINq/view?usp=sharing" target="_blank" rel="noreferrer">
                  Lihat CV
                </a>
              </div>

              <div className="stats-grid">
                <article>
                  <strong>3+</strong>
                  <span>Pengalaman Industri</span>
                </article>
                <article>
                  <strong>1+</strong>
                  <span>Years of Experience</span>
                </article>
                <article>
                  <strong>3.52</strong>
                  <span>GPA / 4.00</span>
                </article>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-stage">
                <svg className="portrait-line-art" viewBox="0 0 240 430" aria-hidden="true">
                  <path
                    className="portrait-line portrait-line-orbit"
                    d="M120 12 C204 18 235 99 224 214 C214 334 183 407 120 418 C53 407 25 331 16 214 C6 97 38 19 120 12Z"
                  />
                  <path
                    className="portrait-line portrait-line-trace"
                    pathLength="1"
                    d="M26 112 C57 78 82 77 104 104 C130 136 153 143 185 116 C207 97 217 98 226 109"
                  />
                  <path
                    className="portrait-line portrait-line-accent"
                    d="M35 321 L39 331 L50 333 L41 340 L43 351 L35 345 L26 351 L29 340 L20 333 L31 331 Z"
                  />
                  <circle className="portrait-line-dot" cx="197" cy="68" r="3.5" />
                  <circle className="portrait-line-dot portrait-line-dot-delay" cx="27" cy="183" r="3" />
                </svg>
                <HeroPhotoDecorations />
                <div className="photo-ring">
                  <img src={FotoPutri} alt="Profil Putri Cellyenda" />
                </div>
              </div>
            </div>

            <aside className="hero-note">
              <span className="hero-note-label">Fokus Saat Ini</span>
              <strong>Full-Stack Web Developer</strong>
              <p>Membangun solusi web dari antarmuka pengguna hingga logika bisnis backend.</p>
            </aside>
          </section>
        </div>

        <section className="about-grid" id="about">
          <article className="section-card fade-in-up">
            <span className="section-tag">Profil Singkat</span>
            <h2>Tentang Saya</h2>
            <p>
              Lulusan S1 Informatika dari Universitas Al-Azhar Indonesia dengan pengalaman lebih dari satu tahun dalam pengembangan dan pemeliharaan aplikasi web melalui pengalaman profesional dan proyek pengembangan perangkat lunak.
              Memiliki pengalaman mengembangkan fitur frontend dan backend, membangun REST API, mengintegrasikan database, serta mengimplementasikan business logic pada sistem internal perusahaan.
              Terbiasa bekerja dengan Java, JavaScript, Python, PHP, Golang, dan berbagai teknologi web. Memahami software development lifecycle, version control menggunakan Git/GitLab, debugging, regression testing, dan deployment.
            </p>
            {/* <p>
              Saya percaya bahwa teknologi haruslah fungsional namun tetap memiliki jiwa. Itulah mengapa saya selalu mengutamakan detail dalam setiap baris kode dan elemen desain yang saya buat.
            </p> */}
          </article>

          <article className="section-card fade-in-up delay-one">
            <span className="section-tag">Value & Mindset</span>
            {/* <h2>Prinsip Kerja</h2> */}
            <div className="highlight-list">
              <div>
                <strong>Clean & Maintainable Code</strong>
                <p>Menulis kode yang terstruktur dan mudah dikembangkan.</p>
              </div>
              <div>
                <strong>Problem Solving</strong>
                <p>Menganalisis masalah dan mengimplementasikan solusi sesuai kebutuhan sistem.</p>
              </div>
              <div>
                <strong>End-to-End Development</strong>
                <p>Memahami proses pengembangan dari frontend hingga backend</p>
              </div>
              <div>
                <strong>Continuous Learning</strong>
                <p>Terus mengembangkan kemampuan dan mempelajari teknologi baru.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="section-card experience-section" id="experience">
          <div className="section-heading">
            <span className="section-tag">
              <BriefcaseIcon className="icon-small" /> Pengalaman Profesional
            </span>
            <h2>Pengalaman Profesional</h2>
            <p>Pengalaman mengembangkan sistem internal dan aplikasi bisnis, disusun dari pengalaman terbaru ke terlama.</p>
          </div>

          <div className="experience-list">
            {internshipExperiences.map((experience) => (
              <article className="experience-card fade-in-up" key={experience.company}>
                <div className="experience-top">
                  <div>
                    <span className="company-name">{experience.company}</span>
                    {experience.projectName && (
                      <p className="experience-project-name">Project: {experience.projectName}</p>
                    )}
                    {experience.projectUrl && (
                      <a className="experience-project-link" href={experience.projectUrl} target="_blank" rel="noreferrer" aria-label={`Buka project ${experience.projectName} di tab baru`}>
                        Lihat project
                        <ArrowUpRightIcon className="icon-tiny-ml" />
                      </a>
                    )}
                    <h3>{experience.role}</h3>
                  </div>
                  <div className="experience-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location || experience.mode}</span>
                  </div>
                </div>
                {experience.description && <p className="experience-description">{experience.description}</p>}
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {experience.technologies && (
                  <div className="experience-technologies" aria-label={`Teknologi ${experience.company}`}>
                    {experience.technologies.map((technology) => (
                      <span key={technology} className="tech-pill">{technology}</span>
                    ))}
                  </div>
                )}

                {experience.gallery && (
                  <div className="experience-gallery">
                    {experience.gallery.map((item, idx) => (
                      <div key={idx} className={`gallery-item ${item.type}`}>
                        <img src={item.src} alt={item.alt} />
                        {item.type === "certificate" && (
                          <div className="gallery-badge">
                            <SparklesIcon className="icon-tiny" /> Sertifikat
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="teaching-section" id="teaching">
          <div className="section-heading centered">
            <span className="section-tag">
              <AcademicCapIcon className="icon-small" /> Pengalaman Mengajar & Membimbing
            </span>
            <h2>Sharing Knowledge & Mentorship</h2>
            <p>Dedikasi saya dalam berbagi ilmu dan membimbing sesama untuk memahami dunia teknologi dan pemrograman.</p>
          </div>

          <div className="teaching-grid">
            {teachingExperiences.map((experience, index) => (
              <article className={`teaching-card fade-in-up delay-${index === 0 ? "one" : "two"}`} key={experience.company}>
                <div className="teaching-icon-wrapper">{index === 0 ? <CodeBracketIcon className="teaching-icon" /> : <UserGroupIcon className="teaching-icon" />}</div>
                <div className="teaching-content">
                  <div className="teaching-header">
                    <div>
                      <span className="teaching-company">{experience.company}</span>
                      <h3>{experience.role}</h3>
                    </div>
                    <span className="teaching-period">{experience.period}</span>
                  </div>
                  <ul className="teaching-points">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-card fade-in-up">
            <div className="section-heading">
              <span className="section-tag">
                <CodeBracketIcon className="icon-small" /> Tech Stack
              </span>
              <h2>Teknologi & Keahlian</h2>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="skill-cloud">
                    {group.skills.map((skill) => (
                      <span className="skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <Reveal className="section-heading-with-action">
            <div className="section-heading">
              <span className="section-tag">Selected Works</span>
              <h2>Project Pilihan</h2>
              <p>Kumpulan karya yang menunjukkan kemampuan saya dalam menerjemahkan konsep menjadi produk digital yang utuh.</p>
            </div>
            <a href="https://drive.google.com/drive/folders/1hBx3Nh522vDfS-khlRS61ZYPusd5Kp2Q?usp=sharing" target="_blank" rel="noreferrer" className="view-all-link">
              Lihat Semua Project <ArrowUpRightIcon className="icon-small-ml" />
            </a>
          </Reveal>

          {/* FEATURED PROJECT — SnapRent */}
          <Reveal className="featured-project" delay={120}>
            <div className="featured-number">01 — Featured Project</div>
            <div className="featured-grid">
              <div className="featured-visual">
                <div className="featured-image-wrap snaprent-preview" aria-hidden="true">
                  <div className="snaprent-preview-header">
                    <span className="snaprent-avatar">S</span>
                    <div>
                      <strong>SnapRent</strong>
                      <span>Asisten penyewaan kamera</span>
                    </div>
                    <span className="snaprent-status">Online</span>
                  </div>
                  <div className="snaprent-chat">
                    <p className="snaprent-message user">Saya mencari kamera untuk perjalanan.</p>
                    <p className="snaprent-message assistant">Tentu. Saya bisa membantu memilih kamera yang sesuai kebutuhan dan jadwal sewa Anda.</p>
                  </div>
                  <div className="snaprent-input">
                    <span>Tanyakan kebutuhan kamera</span>
                    <ArrowUpRightIcon className="icon-small" />
                  </div>
                </div>
              </div>

              <div className="featured-copy">
                <div className="featured-meta">
                  <span>{featuredProject.type}</span>
                </div>
                <h2 className="featured-title">{featuredProject.title}</h2>
                <p className="featured-subtitle">{featuredProject.subtitle}</p>
                <p className="featured-description">{featuredProject.description}</p>

                <div className="featured-tech">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <MagneticButton as="a" href={featuredProject.liveUrl} target="_blank" rel="noreferrer" className="featured-cta">
                  <span>Live Demo</span>
                  <ArrowUpRightIcon className="featured-cta-arrow" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          {projects.length > 0 && (
            <>
              {/* OTHER PROJECTS */}
              <div className="project-grid">
                {projects.map((project, index) => (
                  <Reveal key={project.title} delay={index * 120 + 180}>
                    <a href="https://drive.google.com/drive/folders/1hBx3Nh522vDfS-khlRS61ZYPusd5Kp2Q?usp=sharing" target="_blank" rel="noreferrer" className="project-card">
                      <div className="project-number">{project.number}</div>
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-image-overlay" />
                      </div>
                      <div className="project-content">
                        <span className="project-type">{project.type}</span>
                        <h3>{project.title}</h3>
                        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                        <p>{project.description}</p>
                        <div className="project-footer">
                          <span className="read-more">
                            Lihat Project <ArrowUpRightIcon className="icon-tiny-ml" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </section>

        <section className="activity-gallery-section" id="activities">
          <div className="section-heading centered">
            <span className="section-tag">Moment & Activity</span>
            <h2>Galeri Kegiatan</h2>
            <p>Cuplikan momen berharga selama masa magang, kegiatan mengajar, dan perjalanan akademik saya.</p>
          </div>

          <div className="gallery-slider-container">
            <button className="slider-btn prev" onClick={() => scrollGallery("left")} aria-label="Slide left">
              <ChevronLeftIcon className="icon-small" />
            </button>

            <div className="activity-grid slider" ref={galleryRef}>
              {activityGallery.map((activity, index) => (
                <div className={`activity-item fade-in-up delay-${(index % 3) + 1}`} key={index} onClick={() => setSelectedItem({ ...activity, index, type: "activity" })}>
                  <img src={activity.src} alt={activity.title} />
                  <div className="activity-overlay">
                    <span className="activity-cat">{activity.category}</span>
                    <h3>{activity.title}</h3>
                    <span className="view-btn">Lihat Foto</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="slider-btn next" onClick={() => scrollGallery("right")} aria-label="Slide right">
              <ChevronRightIcon className="icon-small" />
            </button>
          </div>

          {/* Sub-section for Certificates and Grades */}
          <div className="certificates-sub-section">
            <div className="sub-heading">
              <AcademicCapIcon className="icon-small" />
              <h3>Sertifikat & Nilai Magang</h3>
            </div>
            <div className="certificates-grid">
              {internshipCertificates.map((cert, index) => (
                <div className="cert-card fade-in-up" key={index} onClick={() => setSelectedItem({ ...cert, index, type: "certificate" })}>
                  <div className="cert-icon-box">
                    <SparklesIcon className="icon-medium" />
                  </div>
                  <div className="cert-info">
                    <span className="cert-category">{cert.category}</span>
                    <h4>{cert.title}</h4>
                    <p>{cert.institution}</p>
                  </div>
                  <div className="cert-action">
                    <ArrowUpRightIcon className="icon-small" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-card" id="contact">
          <div className="section-heading">
            <span className="section-tag">
              <ChatBubbleLeftRightIcon className="icon-small" /> Let's Connect
            </span>
            <h2>Mari Berdiskusi</h2>
            <p>Saya selalu terbuka untuk peluang kolaborasi baru atau sekadar bertukar pikiran tentang teknologi.</p>
          </div>

          <div className="contact-grid">
            {contacts.map((contact) => (
              <a className="contact-card" href={contact.href} key={contact.label} target="_blank" rel="noreferrer">
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

import { useState, useRef } from "react";
import "./App.css";
import ProfilePhoto from "./assets/PutriFigma-removebg-preview.png";
import Logo from "./assets/Logo.png";
import InteriorProject from "./assets/ProjekDesainInterior.png";
import AquariumProject from "./assets/akuarium.png";
import LibraryProject from "./assets/perpustakaanUAI.png";
import TrashProject from "./assets/tongsampah-removebg.png";
import FoodiesProject from "./assets/yendafoodies1.png";
// import FoodiesProject2 from "./assets/yendafoodies2.png";
import Perhutani from "./assets/perumPerhutani1.jpeg";
import DivisiITPerhutani from "./assets/DivisiITPerumPerhutani.jpeg";
import DivisiBIT from "./assets/DivisiITBIT.jpeg"
import Mengajar from "./assets/mengajar.jpeg";
import Nilai from "./assets/Nilai.png";
import Sertifikat from "./assets/Sertifikat.png";
// import Vector1 from "./assets/VectorOne.png";
// import Vector2 from "./assets/VectorTwo.png";
import { 
  SparklesIcon, 
  CodeBracketIcon, 
  BriefcaseIcon, 
  ChatBubbleLeftRightIcon,
  ArrowUpRightIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

const skills = [
  "PHP Native",
  "CodeIgniter",
  "JavaScript",
  "React JS",
  "Typescript",
  "Express JS",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "MySQL",
  "Dbeaver",
  "UI/UX Design",
  "Figma",
  "Regression Testing",
  "Full-Stack Web Developer",
  ];

const internshipExperiences = [
  {
    company: "PT Bit Teknologi Inovasi (BIT)",
    role: "Full-Stack Developer",
    period: "Agustus 2025 - Februari 2026",
    mode: "Hybrid",
    points: [
      "Membangun fitur History Approval Edit Annual Leave, termasuk approval matrix, update kuota cuti otomatis, notifikasi real-time ke requester, serta UI table view dan popup form approval.",
      "Mengembangkan fitur Permission View (Team) pada modul Leave agar Team Leader dapat memantau data tim berdasarkan struktur Org Chart dengan filter status dan tipe cuti yang dinamis.",
      "Menerapkan Permission Edit (Own) pada sub-menu Topics untuk membatasi akses edit hanya pada data milik sendiri dan mengurangi risiko manipulasi data antar pengguna.",
      "Memperbaiki bug kritis pada alur approval Late for Work agar tombol Approve dan Reject tampil sesuai kondisi approver aktif untuk request Web maupun Mobile.",
    ],
   
  },
  {
    company: "Perum Perhutani",
    role: "Full-Stack Developer",
    period: "September 2025 - Desember 2025",
    mode: "Hybrid",
    points: [
      "Membangun Task Form DHHBK secara end-to-end, termasuk upload gambar ganda, penyimpanan database, dan popup konfirmasi data sebelum simpan.",
      "Mengembangkan validasi password dengan indikator real-time merah dan hijau, aturan kompleksitas lengkap, serta ikon show/hide pada halaman Ubah Data Pengguna dan Profile.",
      "Membuat fitur filtering penerima berdasarkan status pengiriman dengan query dinamis, loading state, dan penanganan edge case untuk menjaga konsistensi tampilan data.",
      "Melakukan regression testing menyeluruh di staging environment untuk memastikan zero critical bug sebelum fitur diserahkan ke tim review.",
    ],
   
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
    points: [
      "Membimbing siswa sekolah dasar untuk memahami dasar-dasar berpikir komputasional melalui aktivitas yang menyenangkan dan interaktif.",
    ],
  },
];

const projects = [
  {
    title: "E-Waste Keeper",
    image: TrashProject,
    description: "Inovasi smart bin yang membuka penutup otomatis untuk pengalaman penggunaan yang lebih praktis dan higienis.",
  },
  {
    title: "Yenda Foodies",
    image: FoodiesProject,
    description: "Pengembangan sistem pemesanan makanan dari tahap UI/UX hingga implementasi fitur utama bersama tim.",
  },
  {
    title: "Perpustakaan Digital",
    image: LibraryProject,
    description: "Rancangan platform perpustakaan digital dengan alur pencarian, peminjaman, dan membaca koleksi yang lebih ramah pengguna.",
  },
  {
    title: "Low Maintenance Smart Aquarium",
    image: AquariumProject,
    description: "Konsep akuarium pintar untuk memudahkan pemberian pakan dan pemantauan kebersihan dari jarak jauh.",
  },
  {
    title: "Website Desain Interior",
    image: InteriorProject,
    description: "Website responsif dengan fokus pada estetika visual, pengalaman pengguna, dan presentasi desain yang elegan.",
  },
  {
    title: "Koleksi Sertifikat & Penghargaan",
    image: Logo, // Menggunakan logo sebagai placeholder jika belum ada gambar sertifikat khusus
    description: "Kumpulan sertifikat profesional, kursus, dan penghargaan akademik yang telah saya capai selama masa studi.",
    isCertificate: true,
  },
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
  { src: Perhutani, title: "Kegiatan Magang Perhutani", category: "Magang" },
  { src: DivisiITPerhutani, title: "Divisi IT Perum Perhutani", category: "Magang" },
  { src: DivisiBIT, title: "Divisi IT BIT", category: "Magang" },
  { src: Mengajar, title: "Praktikum Algoritma", category: "Mengajar" },
];

const internshipCertificates = [
  { src: Nilai, title: "Nilai Magang BIT", category: "Sertifikat", institution: "PT Bit Teknologi Inovasi" },
  { src: Sertifikat, title: "Sertifikat Magang Perum Perhutani", category: "Sertifikat", institution: "Perum Perhutani" },
];

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const { scrollLeft, clientWidth } = galleryRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      galleryRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
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
          <button className="modal-nav-btn prev" onClick={(e) => { e.stopPropagation(); navigateModal("prev"); }}>
            <ChevronLeftIcon className="icon-small" />
          </button>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>&times;</button>
            <img src={selectedItem.src} alt={selectedItem.title} />
            <div className="modal-caption">
              <span className="modal-category">{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              {selectedItem.institution && <p className="modal-institution">{selectedItem.institution}</p>}
            </div>
          </div>

          <button className="modal-nav-btn next" onClick={(e) => { e.stopPropagation(); navigateModal("next"); }}>
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
            <a href="#experience">Magang</a>
            <a href="#teaching">Mengajar</a>
            <a href="#projects">Project</a>
            <a href="#contact">Kontak</a>
          </nav>
      </header>

      <main className="portfolio-main">
        <section className="hero-section section-card" id="home">
          <div className="hero-copy fade-in-up">
            <span className="eyebrow">
              <SparklesIcon className="icon-small" /> Informatics Undergraduate . Full-Stack Developer
            </span>
            <h1>
              Putri <span>Cellyenda</span>
            </h1>
            <p className="hero-text">
              Full-Stack Developer yang berpengalaman membangun aplikasi web, sistem bisnis, dan pengalaman pengguna yang efisien dari frontend hingga backend.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#experience">
                Lihat Pengalaman <ArrowUpRightIcon className="icon-small-ml" />
              </a>
              <a
                className="secondary-button"
                href="https://drive.google.com/file/d/15ciF376vmZtZtp8tf2PoIMssiaEbbjnY/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Lihat CV
              </a>
            </div>

            <div className="stats-grid">
              <article>
                <strong>2+</strong>
                <span>Pengalaman Industri</span>
              </article>
              <article>
                <strong>5</strong>
                <span>Project Pilihan</span>
              </article>
              <article>
                <strong>12</strong>
                <span>Teknologi</span>
              </article>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-ring">
              <img src={ProfilePhoto} alt="Profil Putri Cellyenda" />
            </div>
            <div className="hero-note">
              <span className="hero-note-label">Fokus Saat Ini</span>
              <strong>Full-Stack Web Developer</strong>
              <p>Membangun solusi web dari antarmuka pengguna hingga logika bisnis backend.</p>
            </div>
          </div>
        </section>

        <section className="about-grid" id="about">
          <article className="section-card fade-in-up">
            <span className="section-tag">Profil Singkat</span>
            <h2>Tentang Saya</h2>
            <p>
              Full-Stack Developer yang berfokus pada pengembangan aplikasi web dan sistem bisnis. Berpengalaman membangun fitur end-to-end, mulai dari antarmuka pengguna hingga implementasi backend dan database.
            </p>
            {/* <p>
              Saya percaya bahwa teknologi haruslah fungsional namun tetap memiliki jiwa. Itulah mengapa saya selalu mengutamakan detail dalam setiap baris kode dan elemen desain yang saya buat.
            </p> */}
          </article>

          <article className="section-card fade-in-up delay-one">
            <span className="section-tag">Value & Mindset</span>
            <h2>Prinsip Kerja</h2>
            <div className="highlight-list">
              <div>
                <strong>Modern & Scalable</strong>
                <p>Membangun sistem yang terstruktur, mudah dipelihara, dan siap berkembang.</p>
              </div>
              <div>
                <strong>User-Centric Design</strong>
                <p>Mengutamakan pengalaman pengguna dalam setiap keputusan desain dan pengembangan.</p>
              </div>
              <div>
                <strong>Meticulous Quality</strong>
                <p>Menjaga kualitas melalui testing, code review, dan perhatian terhadap detail implementasi.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="section-card experience-section" id="experience">
          <div className="section-heading">
            <span className="section-tag">
              <BriefcaseIcon className="icon-small" /> Pengalaman Magang
            </span>
            <h2>Pengalaman Profesional</h2>
            <p>
              Berkontribusi pada pengembangan sistem internal dan aplikasi bisnis melalui pengalaman magang di dua perusahaan.
            </p>
          </div>

          <div className="experience-list">
            {internshipExperiences.map((experience) => (
              <article className="experience-card fade-in-up" key={experience.company}>
                <div className="experience-top">
                  <div>
                    <span className="company-name">{experience.company}</span>
                    <h3>{experience.role}</h3>
                  </div>
                  <div className="experience-meta">
                    <span>{experience.period}</span>
                    <span>{experience.mode}</span>
                  </div>
                </div>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                
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
            <p>
              Dedikasi saya dalam berbagi ilmu dan membimbing sesama untuk memahami dunia teknologi dan pemrograman.
            </p>
          </div>

          <div className="teaching-grid">
            {teachingExperiences.map((experience, index) => (
              <article className={`teaching-card fade-in-up delay-${index === 0 ? 'one' : 'two'}`} key={experience.company}>
                <div className="teaching-icon-wrapper">
                  {index === 0 ? <CodeBracketIcon className="teaching-icon" /> : <UserGroupIcon className="teaching-icon" />}
                </div>
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
            <div className="skill-cloud">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        

        <section className="projects-section" id="projects">
          <div className="section-heading-with-action">
            <div className="section-heading">
              <span className="section-tag">Selected Works</span>
              <h2>Project Pilihan</h2>
              <p>
                Kumpulan karya yang menunjukkan kemampuan saya dalam menerjemahkan konsep menjadi produk digital yang utuh.
              </p>
            </div>
            <a 
              href="https://drive.google.com/drive/folders/1hBx3Nh522vDfS-khlRS61ZYPusd5Kp2Q?usp=sharing" 
              target="_blank" 
              rel="noreferrer"
              className="view-all-link"
            >
              Lihat Semua Project <ArrowUpRightIcon className="icon-small-ml" />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a 
                href="https://drive.google.com/drive/folders/1hBx3Nh522vDfS-khlRS61ZYPusd5Kp2Q?usp=sharing" 
                target="_blank" 
                rel="noreferrer"
                className={`project-card fade-in-up ${project.isCertificate ? 'certificate-card' : ''}`} 
                key={project.title}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.isCertificate && <div className="certificate-badge"><SparklesIcon className="icon-tiny" /> Verified</div>}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <span className="read-more">
                      Read More <ArrowUpRightIcon className="icon-tiny-ml" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="activity-gallery-section" id="activities">
          <div className="section-heading centered">
            <span className="section-tag">Moment & Activity</span>
            <h2>Galeri Kegiatan</h2>
            <p>
              Cuplikan momen berharga selama masa magang, kegiatan mengajar, dan perjalanan akademik saya.
            </p>
          </div>

          <div className="gallery-slider-container">
            <button className="slider-btn prev" onClick={() => scrollGallery("left")} aria-label="Slide left">
              <ChevronLeftIcon className="icon-small" />
            </button>
            
            <div className="activity-grid slider" ref={galleryRef}>
              {activityGallery.map((activity, index) => (
                <div 
                  className={`activity-item fade-in-up delay-${(index % 3) + 1}`} 
                  key={index}
                  onClick={() => setSelectedItem({ ...activity, index, type: "activity" })}
                >
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
                <div 
                  className="cert-card fade-in-up" 
                  key={index}
                  onClick={() => setSelectedItem({ ...cert, index, type: "certificate" })}
                >
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
            <p>
              Saya selalu terbuka untuk peluang kolaborasi baru atau sekadar bertukar pikiran tentang teknologi.
            </p>
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

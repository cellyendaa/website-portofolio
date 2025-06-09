import React from "react";
import Navbar from "./components/navbar.js";
import Foto from "./assets/PutriFigma-removebg-preview.png";
import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import JS from "./assets/js.png";
import Figma from "./assets/figma.png";
import Tailwind from "./assets/tailwind.png";
import Tongsampah from "./assets/tongsampah-removebg.png";
import VectorOne from "./assets/VectorOne.png";
import VectorTwo from "./assets/VectorTwo.png";
import Yendafoodies1 from "./assets/yendafoodies1.png";
import ProjekDesainInterior from "./assets/ProjekDesainInterior.png";
import Perpustakaan from "./assets/perpustakaanUAI.png";
import Akuarium from "./assets/akuarium.png";
import Project from "./components/project.js";
import Contact from "./components/contact.js";

function AboutPage() {
  const projectSaya = [
    {
      gambar: Tongsampah,
      namaProject: "E-Waste Keeper",
      dekripsi: "E-Waste Keeper merupakan salah satu inovasi berupa tempat sampah yang mampu terbuka otomatis.",
    },
    {
      gambar: Yendafoodies1,
      namaProject: "Pengembangan sistem perangkat lunak Yenda Foodies",
      dekripsi: "Saya dan tim mengembangkan sistem perangkat lunak Yenda Foodies, mulai dari perancangan UI/UX hingga implementasi fitur untuk mendukung layanan pemesanan makanan.",
    },
    {
      gambar: Perpustakaan,
      namaProject: "Projek Perpustakaan Digital",
      dekripsi:
        "Saya dan tim merancang konsep dan UI/UX untuk platform perpustakaan Digital. Kami juga mengembangkan prototipe untuk memberikan pengalaman yang mudah dan menarik bagi pengguna dalam mencari, meminjam, dan membaca koleksi buku.",
    },
    {
      gambar: Akuarium,
      namaProject: "Low Maintenance Smart Aquarium",
      dekripsi: "Akuarium pintar yang memudahkan pemberian pakan dan menjaga kebersihan dari jarak jauh lewat ponsel.",
    },
    {
      gambar: ProjekDesainInterior,
      namaProject: "Projek Desain Interior",
      dekripsi: "Saya dan teman saya merancang UI/UX dan mengembangkan website desain interior yang responsif dengan fokus pada tampilan menarik dan kemudahan penggunaan.",
    },
  ];

  const jumpToReleventDiv = (event) => {
    let name = event.target.getAttribute('name')
    console.log("namename", name);
    
    const releventDiv = document.getElementById(name);
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div className="flex flex-col w-full object-left">
      <section className="bg-[#FFFBFB]"></section>
      <Navbar onClick={jumpToReleventDiv} />
      <div className="flex flex-col space-y-5 pt-20">
        <div className="px-4 md:px-13 space-y-28">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 h-48">
              <img className="w-48 h-48 md:w-96 md:h-96 object-cover" src={Foto} alt="Foto" />
            </div>
            <div id="Text" className="flex flex-col md:w-1/2">
              <p1 className="font-inter font-bold text-4xl md:text-6xl text-[#8E7B68]" id="Home">Halo, Saya Putri Cellyenda!</p1>
              <br />
              <p1 className="flex flex-col space-y-10 font-inter text-base  md:text-lg text-[#8E7B68]">
                <span>
                  Saya mahasiswa Informatika dengan minat besar dalam pengembangan web dan desain antarmuka. Saat ini, saya sedang memperdalam keterampilan di bidang frontend development, termasuk menciptakan antarmuka yang intuitif,
                  responsif, dan menarik secara visual.
                </span>
                <span>
                  Saya selalu antusias untuk belajar hal baru, terutama melalui tantangan nyata di dunia kerja. Dengan semangat untuk terus berkembang, saya berharap dapat berkontribusi di lingkungan profesional sekaligus memperluas
                  pengalaman saya di bidang teknologi.
                </span>
              </p1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-20 gap-16">
            <div className="w-full md:w-1/2" id="About">
              <h2 className="flex items-center pb-4 justify-center font-inter font-bold text-2xl text-[#806C6C] text-center">Pendidikan</h2>
              <div className="box-content min-h-[21rem] p-3 rounded-[3rem] pt-2 border-opacity-100 bg-[#FFF0F0]">
                <h3 className="flex items-center justify-center font-inter font-bold text-base text-[#806C6C] text-center">Universitas Al-azhar Indonesia</h3>
                <br />
                <span className="font-inter text-xs text-[#786262]">
                  Saya mahasiswa Program Studi Informatika (Semester 5, IPK: 3.39) yang memiliki minat besar dalam pengembangan perangkat lunak, khususnya di bidang frontend development. Saya aktif mengikuti berbagai kegiatan kampus,
                  seperti seminar teknologi, pelatihan pengembangan web, serta workshop terkait industri IT untuk memperluas wawasan dan meningkatkan keterampilan teknis. Selama perkuliahan, saya terlibat dalam berbagai proyek akademik,
                  termasuk membangun aplikasi berbasis web dalam tugas kelompok, yang melibatkan perancangan antarmuka, pengelolaan database, dan implementasi fitur menggunakan teknologi terkini. Selain itu, saya juga memiliki pengalaman
                  dalam bekerja sama dalam tim lintas disiplin untuk menyelesaikan tantangan teknologi yang kompleks.
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="flex items-center pb-4 justify-center font-inter font-bold text-2xl text-[#806C6C]">Pengalaman Organisasi</h2>
              <div className="box-content min-h-[21rem] border px-3 pt-3 rounded-[3rem] border-[#060000]">
                <h3 className="flex items-center justify-center font-inter font-bold text-base text-[#806C6C] text-center">Pengalaman</h3>
                <p1 className="font-inter font-bold text-base text-[#806C6C] text-center"> Bebras Indonesia (Mentor)</p1>
                <br />
                <span className="font-inter text-xs text-[#786262]">
                  Belajar Berpikir Komputasional dengan Ceria <br /> Periode: 2023
                </span>
                <br />
                <p1 className="font-inter font-bold text-base text-[#806C6C] text-center"> Anggota Himpunan Mahasiswa Informatika</p1>
                <br />
                <span className="font-inter text-xs text-[#786262]">
                  Universitas Al-Azhar Indonesia <br /> Periode: 2023-2024
                </span>
                <br />
                <p1 className="font-inter font-bold text-base text-[#806C6C] text-center"> Master of Ceremony (MC)</p1>
                <br />
                <span className="font-inter text-xs text-[#786262]">
                  Komisi Pemilihan Umum, Fakultas Sains dan Teknologi, Universitas Al-Azhar Indonesia
                  <br />Periode: Januari 2023 - Agustus 2023
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#FFF0F0] relative" id="Skill">
          <img src={VectorOne} className="absolute top-0 left-0 object-cover w-60" alt="Vector One" />
          <img src={VectorTwo} className="absolute bottom-0 right-0 object-cover w-60" alt="Vector Two" />
          <div className="flex justify-center py-20">
            <div className="box-content w-full md:w-3/4 h-72 rounded-[3rem] border-opacity-100 border-white bg-white flex flex-col items-center">
              <h1 className="flex items-center justify-center font-inter text-xl py-2 font-bold text-[#786262]">Skill</h1>
              <hr className="w-full" />
              <div className="p-14 flex flex-row items-center justify-around w-full">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20">
                    <img className="object-cover" src={HTML} alt="HTML" />
                  </div>
                  <p>HTML</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20">
                    <img className="object-cover" src={CSS} alt="CSS" />
                  </div>
                  <p>CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20">
                    <img className="object-cover" src={JS} alt="JavaScript" />
                  </div>
                  <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20">
                    <img className="object-cover" src={Figma} alt="Figma" />
                  </div>
                  <p>Figma</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20">
                    <img className="object-cover" src={Tailwind} alt="Tailwind" />
                  </div>
                  <p>Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#FFFBFB]" id="Project">
          <div className="px-2">
            <p1 className="flex items-center justify-center font-inter text-3xl text-center py-2 font-bold text-[#786262]">Project</p1>
            <br />
            <span className="font-inter text-xs text-[#786262]">
              Sebagai bagian dari tugas perkuliahan, projek-projek ini dikerjakan secara kolaboratif dalam tim. Melalui projek ini, saya belajar bagaimana bekerja sama, membagi tugas, dan menghasilkan solusi yang inovatif dan relevan.
            </span>
            <div className="grid justify-around grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
              {projectSaya.map((event) => {
                return <Project gambar={event.gambar} namaProject={event.namaProject} dekripsi={event.dekripsi} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-2" id="View Resume">
          <div className="relative inline-flex group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#e0c6f8] via-[#f1a9ea] to-[#f0b3b0] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://drive.google.com/file/d/1UlVg6TMnhqmFyayKdE-mPvP947kfEXuY/view?usp=drive_link"
              title="Get quote now"
              target="_blank"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#E1BFBF] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300"
              role="button"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full bg-[#FFF0F0] relative">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
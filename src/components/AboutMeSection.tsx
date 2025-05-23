import hero4 from "../assets/globe1.png";

const AboutMeSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-32"
      style={{
        backgroundImage: `url(${hero4})`,
      }}
    >
      <div className="absolute inset-0 bg-black/80  bg-opacity-60 "></div>

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Gambar Profil (Optional dihilangkan karena sudah jadi background) */}
        {/* <div className="w-full md:w-1/2">
          <img
            src={hero4}
            alt="About Me"
            className="w-full h-auto object-cover"
          />
        </div> */}

        {/* Deskripsi */}
        <div className="w-full md:w-10/12 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 font-Gothic">
            TENTANG <span className="text-amber-500">KAMI</span>
          </h2>
          <p className="mb-4 leading-relaxed text-lg">
            Saya adalah seorang web developer yang berfokus pada pembuatan
            website profesional, cepat, dan responsif. Dengan pengalaman di
            bidang UI/UX dan pengembangan full-stack, saya siap membantu Anda
            membangun website yang tidak hanya indah tetapi juga fungsional.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            Mengutamakan kepuasan klien, saya menyediakan layanan konsultasi
            gratis, revisi fleksibel, serta dukungan teknis. Visi saya adalah
            membantu UMKM dan bisnis digital berkembang melalui teknologi web.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 mt-4 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

import bgImage from "../assets/globe2.png"; // Ganti dengan path gambar kamu

const WebsiteDefinition = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-32"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/80 bg-opacity-60 "></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-Gothic">
          Apa Itu <span className="text-amber-500">Website?</span>
        </h2>
        <p className="text-lg leading-relaxed">
          Website adalah kumpulan halaman digital yang saling terhubung dan
          dapat diakses melalui internet menggunakan alamat domain tertentu
          (seperti www.namadomain.com). Website dapat berisi informasi, layanan,
          produk, hingga fitur interaktif, dan berfungsi sebagai representasi
          digital dari individu, organisasi, atau bisnis.
        </p>

        <p className="text-lg leading-relaxed mt-6">
          Dalam dunia bisnis modern, website menjadi media penting untuk
          membangun kredibilitas, menjangkau pasar lebih luas, serta memberikan
          layanan dan informasi secara efisien selama 24 jam. Dengan desain yang
          responsif dan optimasi mesin pencari (SEO), website membantu bisnis
          Anda tampil profesional dan mudah ditemukan calon pelanggan.
        </p>
      </div>
    </section>
  );
};

export default WebsiteDefinition;

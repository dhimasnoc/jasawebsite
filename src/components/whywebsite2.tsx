import webImage from "../assets/hero3.png"; // Ganti dengan path gambar kamu (bisa PNG, JPG, SVG)

const WhyWebsitePage2 = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Teks Kanan */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 font-Gothic">
            Miliki Website Untuk{" "}
            <span className="text-amber-500">Kesuksesan Bisnis Online</span>
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <p>
                Di era yang serba online ini, website sudah banyak digunakan
                oleh para pengusaha untuk memperkenalkan produk atau jasa mereka
                baik berupa website perusahaan maupun toko online.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <p>
                Banyak sekali keunggulan dengan memiliki website, salah satunya
                adalah meningkatkan integritas perusahaan atau bisnis anda. Hal
                ini merupakan aspek penting untuk mendapatkan kepercayaan
                pelanggan.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <p>
                Kami menyediakan ratusan template menarik dan profesional untuk
                membuat bisnis anda jauh lebih baik. Kini hadir layanan web
                design di IndoWebsite yang akan memberikan kemudahan untuk
                meraih kesuksesan bisnis online anda. Selain prosesnya yang
                mudah, di dalam paket jasa pembuatan website ini juga sudah
                termasuk nama domain beserta hosting.
              </p>
            </li>
          </ul>
        </div>
        {/* Gambar Kiri */}
        <div className="md:w-1/2 w-full">
          <img
            src={webImage}
            alt="Keuntungan memiliki website"
            className="w-4xl h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default WhyWebsitePage2;

import webImage from "../assets/hero2.png"; // Ganti dengan path gambar kamu (bisa PNG, JPG, SVG)

const WhyWebsitePage = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Gambar Kiri */}
        <div className="md:w-1/2 w-full">
          <img
            src={webImage}
            alt="Keuntungan memiliki website"
            className="w-full h-auto "
          />
        </div>

        {/* Teks Kanan */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 font-Gothic">
            Mengapa Bisnis Anda{" "}
            <span className="text-amber-500">Butuh Website?</span>
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <p>
                Tahukah anda, bahwa tingkat kepercayaan pelanggan terhadap suatu
                perusahaan atau organisasi lebih meningkat jika memiliki
                website?. Mungkin anda pernah berpikir dapat membangun brand
                dari microsite atau social media. Namun tetap saja tidak
                maksimal. Karena microsite atau sosial media tidak bisa mewakili
                brand anda.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <p>
                Selain itu, dengan memiliki website akan mengoptimalkan promosi.
                Website akan memperkenalkan usaha yang anda jalani ke seluruh
                dunia kapanpun, dimanapun. Website seperti alat marketing yang
                tak henti-hentinya berpromosi, meskipun anda sedang tidur. Kami
                mengerti akan hal itu, dan kami hadir untuk membantu
                mengembangkan usaha anda.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <p>
                Paket jasa pembuatan website kami adalah paket all in one. Anda
                tidak perlu memikirkan desain, domain, hosting, atau teknik
                pembuatan dan perawatan website. Semua sudah dirangkum dalam
                paket yang lengkap. Cukup berikan kami materi untuk website anda
                dalam bentuk company profile, brosur atau apapun mengenai usaha
                anda. Kami akan buatkan websitenya, merawat dan
                mengoptimalkannya.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsitePage;

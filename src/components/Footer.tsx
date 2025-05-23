const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Kiri: Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            JasaWebsite
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Tengah: Navigasi */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <a href="#about" className="hover:text-amber-500 transition">
              Tentang
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-amber-500 transition">
              Layanan
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-amber-500 transition">
              Produk
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-amber-500 transition">
              Kontak
            </a>
          </li>
        </ul>

        {/* Kanan: Sosial */}
        <div className="flex gap-4">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-amber-500 transition"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-amber-500 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-amber-500 transition"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

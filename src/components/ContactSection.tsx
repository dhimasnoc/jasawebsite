import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10 font-Gothic">
          Hubungi <span className="text-amber-500">Kami</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 text-left">
          {/* Kontak Sosial */}
          <div className="space-y-6">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg text-gray-800 dark:text-white hover:text-amber-500 transition"
            >
              <FaWhatsapp className="text-2xl text-green-500" />
              +62 812-3456-7890 (WhatsApp)
            </a>
            <a
              href="https://instagram.com/namakamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg text-gray-800 dark:text-white hover:text-amber-500 transition"
            >
              <FaInstagram className="text-2xl text-pink-500" />
              @namakamu (Instagram)
            </a>
            <a
              href="https://t.me/namakamu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg text-gray-800 dark:text-white hover:text-amber-500 transition"
            >
              <FaTelegramPlane className="text-2xl text-blue-400" />
              @namakamu (Telegram)
            </a>
          </div>

          {/* Lokasi */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 text-lg text-gray-800 dark:text-white">
              <FaMapMarkerAlt className="text-2xl text-red-500" />
              <span>
                Jl. Contoh Alamat No. 123,
                <br />
                Jakarta, Indonesia
              </span>
            </div>
            <iframe
              className="w-full h-64 rounded-lg border-2 border-gray-300 dark:border-gray-700"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2581751468653!2d106.8166663152687!3d-6.200000095498286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1b4d0b06b07%3A0x1bcd61e1e5f1d8cb!2sJakarta!5e0!3m2!1sid!2sid!4v1716465254961!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

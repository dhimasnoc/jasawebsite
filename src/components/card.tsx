const features = [
  {
    title: "Harga Terjangkau",
    desc: "Solusi digital dengan harga bersahabat, cocok untuk semua kalangan.",
    icon: "💰",
  },
  {
    title: "Desain Profesional",
    desc: "Website tampil modern, cepat, dan memikat pelanggan.",
    icon: "🎨",
  },
  {
    title: "SEO & Mobile Friendly",
    desc: "Optimasi mesin pencari dan tampilan sempurna di semua perangkat.",
    icon: "📱",
  },
  {
    title: "Support & Revisi",
    desc: "Layanan dukungan dan revisi cepat demi kepuasan Anda.",
    icon: "🤝",
  },
  {
    title: "Cepat Online",
    desc: "Proses pembuatan cepat dan siap online dalam hitungan hari.",
    icon: "⚡",
  },
];

const WhyUsSection = () => {
  const duplicatedItems = [...features, ...features]; // Untuk loop halus

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10 font-Gothic">
          KENAPA HARUS PAKAI{" "}
          <span className="text-amber-500">JASA WEBSITE KAMI</span>
        </h2>

        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 px-2 whitespace-nowrap">
            {duplicatedItems.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[250px] sm:min-w-[280px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default WhyUsSection;

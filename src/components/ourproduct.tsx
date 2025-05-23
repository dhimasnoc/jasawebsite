const products = [
  {
    name: "Landing Page",
    desc: "Website satu halaman untuk personal, bisnis, atau promosi.",
    image: "/images/landingpage.jpg",
  },
  {
    name: "Company Profile",
    desc: "Tampilkan profil perusahaan Anda dengan desain profesional.",
    image: "/images/companyprofile.jpg",
  },
  {
    name: "Toko Online",
    desc: "Jual produk Anda secara online dengan sistem belanja lengkap.",
    image: "/images/ecommerce.jpg",
  },
];

const OurProductSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white font-Gothic">
          PRODUK <span className="text-amber-500">UNGGULAN KAMI</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.desc}
                </p>
                <button className="px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;

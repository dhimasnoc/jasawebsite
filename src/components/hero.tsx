import { motion } from "framer-motion";
import heropng from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-40 pb-15 px-4 md:px-10">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Konten kiri */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-Gothic text-gray-900 dark:text-white leading-tight">
            TINGKATKAN KREDIBILITAS BISNIS{" "}
            <span className="text-amber-500 dark:text-amber-500">
              DENGAN WEBSITE TERBAIK
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Kami memberikan solusi digital terbaik untuk kebutuhan bisnis Anda.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-500 transition">
              Mulai Sekarang
            </button>
            <button className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </motion.div>

        {/* Gambar kanan */}
        <motion.div
          className="flex justify-center md:justify-end w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={heropng}
            alt="Hero"
            className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

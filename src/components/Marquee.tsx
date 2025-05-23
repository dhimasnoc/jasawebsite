import { Rocket, Globe, Gift, Smartphone } from "lucide-react";

const Marquee = () => {
  const items = [
    { icon: <Rocket size={20} />, text: "Promo Website Murah!" },
    { icon: <Globe size={20} />, text: "Gratis Konsultasi" },
    { icon: <Gift size={20} />, text: "Garansi Revisi" },
    { icon: <Smartphone size={20} />, text: "Mobile Friendly & SEO Ready!" },
  ];

  const renderItems = () =>
    items.map((item, index) => (
      <span key={index} className="flex items-center gap-2 mx-6">
        {item.icon} {item.text}
      </span>
    ));

  return (
    <div className="overflow-hidden bg-amber-500 dark:bg-gray-800 py-10">
      <div className="flex w-max animate-marquee text-gray-800 dark:text-white text-2xl font-Gothic whitespace-nowrap">
        {renderItems()}
        {renderItems()}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-30%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;

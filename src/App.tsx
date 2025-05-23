import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMeSection from "./components/AboutMeSection";
import WhyUsSection from "./components/card";
import WebsiteDefinition from "./components/definisi";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/navbar";
import OurProductSection from "./components/ourproduct";
import WhyWebsitePage from "./components/whywebsite";
import WhyWebsitePage2 from "./components/whywebsite2";
import ContactSection from "./components/ContactSection";

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WebsiteDefinition />
      <WhyWebsitePage />
      <WhyWebsitePage2 />
      <WhyUsSection />
      <AboutMeSection />
      <OurProductSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMeSection />} />
        <Route path="/products" element={<OurProductSection />} />
        <Route path="/why-us" element={<WhyUsSection />} />
        <Route path="/definition" element={<WebsiteDefinition />} />
        <Route path="/why-website" element={<WhyWebsitePage />} />
        <Route path="/why-website2" element={<WhyWebsitePage2 />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

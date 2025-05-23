import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo kiri */}
        <div className="text-lg font-Gothic text-gray-800 dark:text-white">
          Jasaweb
        </div>

        {/* Menu tengah (desktop only) */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 text-sm font-medium">
          <li className="hover:text-amber-500 cursor-pointer">Home</li>
          <li className="hover:text-amber-500 cursor-pointer">About</li>
          <li className="hover:text-amber-500 cursor-pointer">Contact</li>
        </ul>

        {/* Kanan: Toggle & Menu mobile */}
        <div className="flex items-center space-x-2">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-800 dark:text-white p-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 dark:text-white p-2"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 px-4 pb-4">
          <a
            href="/"
            className="block text-gray-800 dark:text-white hover:text-amber-500"
          >
            Home
          </a>
          <a
            href="/about"
            className="block text-gray-800 dark:text-white hover:text-amber-500"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-800 dark:text-white hover:text-amber-500"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#programs", label: "Program Kerja" },
  { href: "#activities", label: "Kegiatan" },
  { href: "#team", label: "Anggota" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <span className="font-headline-md text-headline-md font-extrabold tracking-tight">
            <span className="text-on-surface">Dala</span>
            <span className="text-deep-maroon">Rangers</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`font-nav-link text-nav-link relative transition-colors ${
                  isActive
                    ? "text-primary nav-active"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-deep-maroon hover:bg-surface-variant rounded-lg transition-all"
          >
            <span className="material-symbols-outlined">share</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-deep-maroon hover:bg-surface-variant rounded-lg transition-all"
          >
            <span className="material-symbols-outlined">group</span>
          </motion.button>
          <button className="md:hidden p-2 text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/motion/FadeInSection";

const FAQS = [
  {
    question: "Bagaimana cara bergabung dengan Dalarangers?",
    answer:
      "Anda dapat mendaftar melalui link pendaftaran di website ini atau datang langsung ke sekretariat kami setiap hari Sabtu sore. Syarat utama adalah pemuda berdomisili di wilayah binaan kami.",
  },
  {
    question: "Apakah ada biaya keanggotaan?",
    answer:
      "Keanggotaan bersifat sukarela dan tanpa biaya pendaftaran. Kami bergerak berdasarkan semangat gotong royong dan dukungan sponsor serta kemitraan.",
  },
  {
    question: "Apa saja kegiatan rutin yang dilakukan?",
    answer:
      "Kegiatan rutin kami meliputi pertemuan bulanan, kerja bakti lingkungan setiap dua minggu sekali, dan kelas bimbingan belajar setiap akhir pekan.",
  },
  {
    question: "Apakah organisasi ini terafiliasi politik?",
    answer:
      "Tidak. Dalarangers adalah organisasi kepemudaan independen yang fokus sepenuhnya pada pembangunan sosial dan pemberdayaan masyarakat tanpa afiliasi partai politik manapun.",
  },
  {
    question: "Dapatkah saya mengajukan program kerja baru?",
    answer:
      "Tentu saja! Kami sangat terbuka dengan ide-ide segar. Anggota dapat mempresentasikan proposal program kerja dalam rapat pleno bulanan kami.",
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest"
      id="faq"
    >
      <div className="max-w-3xl mx-auto px-margin-mobile">
        <FadeInSection className="flex flex-col items-center text-center mb-16">
          <span className="font-label-caps text-label-caps text-deep-maroon mb-2">
            FAQ
          </span>
          <h2 className="font-headline-md text-headline-md text-pure-white">
            Pertanyaan Umum
          </h2>
          <div className="horizontal-accent mx-auto"></div>
        </FadeInSection>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                className={`border-b border-outline-variant py-6 group cursor-pointer ${
                  isOpen ? "pb-8" : ""
                }`}
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center group-hover:text-primary transition-colors">
                  <h4 className="font-bold text-lg text-pure-white group-hover:text-deep-maroon">
                    {faq.question}
                  </h4>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="material-symbols-outlined text-deep-maroon"
                  >
                    add
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

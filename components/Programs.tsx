"use client";

import { motion } from "framer-motion";
import FadeInSection from "@/components/motion/FadeInSection";

const PROGRAMS = [
  {
    icon: "eco",
    title: "Green Impact",
    description:
      "Penghijauan lingkungan dan pengelolaan limbah organik menjadi kompos berkualitas untuk warga sekitar.",
  },
  {
    icon: "school",
    title: "Rumah Cerdas",
    description:
      "Bimbingan belajar gratis untuk anak-anak kurang mampu dengan mentor dari kalangan mahasiswa pemuda setempat.",
  },
  {
    icon: "volunteer_activism",
    title: "Aksi Sosial",
    description:
      "Kegiatan rutin santunan anak yatim dan bantuan logistik bagi warga yang membutuhkan atau terkena musibah.",
  },
  {
    icon: "psychology",
    title: "Workshop Skill",
    description:
      "Pelatihan hard skill & soft skill mulai dari desain grafis, coding, hingga public speaking bagi pemuda.",
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Programs() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop"
      id="programs"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <FadeInSection className="flex flex-col items-center text-center mb-16">
          <span className="font-label-caps text-label-caps text-deep-maroon mb-2">
            PROGRAM KERJA
          </span>
          <h2 className="font-headline-md text-headline-md text-pure-white">
            Apa yang Kami Kerjakan
          </h2>
          <div className="horizontal-accent mx-auto"></div>
        </FadeInSection>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {PROGRAMS.map((program) => (
            <motion.div
              key={program.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-surface-container-high p-8 rounded-xl border border-outline-variant hover:bg-surface-bright transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                className="w-16 h-16 rounded-full bg-deep-maroon flex items-center justify-center mb-6 text-pure-white"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {program.icon}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-pure-white mb-4">
                {program.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

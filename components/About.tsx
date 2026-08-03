"use client";

import { motion } from "framer-motion";
import FadeInSection from "@/components/motion/FadeInSection";

const STATS = [
  { value: "12+", label: "Tahun Aktif" },
  { value: "350+", label: "Anggota" },
  { value: "45+", label: "Program Kerja" },
  { value: "8", label: "Wilayah Binaan" },
];

const MISSIONS = [
  "Membangun jaringan kolaborasi antar organisasi kepemudaan.",
  "Mengembangkan potensi skill teknis dan manajerial anggota.",
  "Menginisiasi program berbasis lingkungan yang berkelanjutan.",
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest"
      id="about"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <FadeInSection className="flex flex-col items-center text-center mb-16">
          <span className="font-label-caps text-label-caps text-deep-maroon mb-2">
            TENTANG KAMI
          </span>
          <h2 className="font-headline-md text-headline-md text-pure-white">
            Siapa Kami
          </h2>
          <div className="horizontal-accent mx-auto"></div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeInSection className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-pure-white mb-4">
                Sejarah &amp; Visi
              </h3>
              <p className="text-text-muted leading-relaxed">
                Berawal dari inisiatif sekumpulan pemuda yang ingin membawa
                perubahan nyata, Dalarangers kini telah berkembang menjadi
                organisasi yang diakui atas kontribusinya dalam pembangunan
                karakter dan lingkungan lokal. Visi kami adalah menjadi
                katalisator pemberdayaan pemuda yang mandiri, kreatif, dan
                berdaya saing global.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-pure-white mb-4">
                Misi Kami
              </h3>
              <ul className="space-y-3">
                {MISSIONS.map((mission) => (
                  <li key={mission} className="flex gap-3 text-text-muted">
                    <span className="material-symbols-outlined text-deep-maroon">
                      check_circle
                    </span>
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

          <motion.div
            className="grid grid-cols-2 gap-gutter"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-surface-charcoal p-8 rounded-xl border border-outline-variant hover:border-deep-maroon transition-colors group"
              >
                <span className="block text-4xl font-extrabold text-deep-maroon mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </span>
                <span className="text-pure-white font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

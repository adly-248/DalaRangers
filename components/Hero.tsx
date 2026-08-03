"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      className="pt-32 pb-section-gap-mobile md:pb-section-gap-desktop px-margin-mobile"
      id="home"
    >
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-gutter items-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-[2px] bg-deep-maroon"></div>
            <span className="font-label-caps text-label-caps text-deep-maroon tracking-[0.2em]">
              - BERSAMA MEMBANGUN LINGKUNGAN -
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white max-w-xl"
          >
            MENCETAK GENERASI MUDA BERDAMPAK.
            <div className="horizontal-accent"></div>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-body-lg text-body-lg text-text-muted max-w-lg leading-relaxed"
          >
            Dalarangers adalah wadah kepemudaan yang berfokus pada
            pemberdayaan sosial, inovasi lingkungan, dan pengabdian
            masyarakat di tingkat Karang Taruna.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-deep-maroon text-pure-white font-bold rounded-lg hover:brightness-110 transition-all"
            >
              Bergabung Sekarang
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-pure-white text-pure-white font-bold rounded-lg hover:bg-pure-white/10 transition-all"
            >
              Lihat Program
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute -inset-4 bg-deep-maroon/20 rounded-xl blur-2xl group-hover:bg-deep-maroon/30 transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-xl aspect-[4/3] border border-outline-variant">
            <Image
              fill
              className="object-cover"
              alt="Pemuda Dalarangers berkolaborasi di ruang komunitas"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl46d9pxAX4v1OoDronfdDSMrTYyNqF6hwKsuXAjOBhv5f5lAB85xSlsCsX9lNQTcQoz1DAdLijhNDjWA4f-rsME2XtfV5JZE7qFi-w1vq2XKsfSEPZaZEy9kpawrtEun8E4ZqF5AM2traoXBtN8Vpq1RmR3lKUU-HeWM6y7hbya7FcPIQR8mfRfYNFfGZYquDGbj2XA38XKigGkD6ZRaxACwy-2YqVPnqXvDg6NzebQR46RrxUF0UCw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

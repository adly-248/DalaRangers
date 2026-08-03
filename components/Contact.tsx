"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/components/motion/FadeInSection";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: hubungkan ke endpoint API (mis. /api/contact) atau layanan email pihak ketiga
    alert("Pesan terkirim! (hubungkan form ini ke backend/email service)");
  };

  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop"
      id="contact"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <FadeInSection className="flex flex-col items-center text-center mb-16">
          <span className="font-label-caps text-label-caps text-deep-maroon mb-2">
            KONTAK
          </span>
          <h2 className="font-headline-md text-headline-md text-pure-white">
            Hubungi Kami
          </h2>
          <div className="horizontal-accent mx-auto"></div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <FadeInSection delay={0.05}>
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-pure-white">
                      Nama Lengkap
                    </label>
                    <input
                      className="w-full bg-background border border-outline-variant rounded-lg p-3 text-on-surface focus:border-deep-maroon focus:ring-1 focus:ring-deep-maroon outline-none transition-all"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-pure-white">
                      Email
                    </label>
                    <input
                      className="w-full bg-background border border-outline-variant rounded-lg p-3 text-on-surface focus:border-deep-maroon focus:ring-1 focus:ring-deep-maroon outline-none transition-all"
                      placeholder="john@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-pure-white">
                    Subjek
                  </label>
                  <input
                    className="w-full bg-background border border-outline-variant rounded-lg p-3 text-on-surface focus:border-deep-maroon focus:ring-1 focus:ring-deep-maroon outline-none transition-all"
                    placeholder="Tujuan pesan anda"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-pure-white">
                    Pesan
                  </label>
                  <textarea
                    className="w-full bg-background border border-outline-variant rounded-lg p-3 text-on-surface focus:border-deep-maroon focus:ring-1 focus:ring-deep-maroon outline-none transition-all"
                    placeholder="Tuliskan pesan anda di sini..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-4 bg-deep-maroon text-pure-white font-bold rounded-lg hover:brightness-110 transition-all"
                >
                  Kirim Pesan
                </motion.button>
              </form>
            </div>
          </FadeInSection>

          {/* Contact Details & Map */}
          <FadeInSection delay={0.15} className="space-y-8">
            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
                  <span className="material-symbols-outlined text-deep-maroon">
                    location_on
                  </span>
                </div>
                <div>
                  <h5 className="font-bold text-pure-white">
                    Alamat Sekretariat
                  </h5>
                  <p className="text-text-muted">
                    Jl. Pemuda No. 45, Dalanbaru, Kota Kreatif 12345
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
                  <span className="material-symbols-outlined text-deep-maroon">
                    mail
                  </span>
                </div>
                <div>
                  <h5 className="font-bold text-pure-white">Email Kami</h5>
                  <p className="text-text-muted">halo@dalarangers.id</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant">
                  <span className="material-symbols-outlined text-deep-maroon">
                    call
                  </span>
                </div>
                <div>
                  <h5 className="font-bold text-pure-white">WhatsApp</h5>
                  <p className="text-text-muted">+62 812-3456-7890</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-outline-variant">
              <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
                <div className="text-center space-y-2">
                  <span className="material-symbols-outlined text-4xl text-deep-maroon">
                    map
                  </span>
                  <p className="text-text-muted font-bold">
                    Peta Lokasi Kami
                  </p>
                </div>
              </div>
              <Image
                fill
                className="absolute inset-0 object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Peta lokasi sekretariat Dalarangers"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmzmVFPGL-RzyrFSD1-C9Su3lsuXUiZn7Np-krHoJurL3Im3jYYe5YLOxZycU7FmIr05wL7A5A7bTbfQjSrPPY5uujixBwsIVMjGywzIVLrt6kw3XJVuWYykrJn1hkHCdu_zkezkKln1j8zO8Ln_NQM5ds2qdl9ISV4XS76d1V_elhdZEzTywZyG3hKy9k8IkeEM-WrQy-lCJXqWnqOm7QbyiG19nEyeKVErvsTFF2laMIXtraD0Z06g"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

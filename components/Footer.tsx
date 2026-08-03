"use client";

import FadeInSection from "@/components/motion/FadeInSection";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-section-gap-mobile pb-8 border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <FadeInSection className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="space-y-4 max-w-sm">
            <span className="font-headline-md text-headline-md font-extrabold tracking-tight">
              <span className="text-on-surface">Dala</span>
              <span className="text-deep-maroon">Rangers</span>
            </span>
            <p className="text-text-muted leading-relaxed">
              Wadah pemuda beraksi untuk negeri. Membangun lingkungan yang
              berkelanjutan melalui aksi nyata dan pemberdayaan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h6 className="font-bold text-pure-white">Navigasi</h6>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-text-muted hover:text-deep-maroon transition-colors"
                    href="#home"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    className="text-text-muted hover:text-deep-maroon transition-colors"
                    href="#about"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    className="text-text-muted hover:text-deep-maroon transition-colors"
                    href="#programs"
                  >
                    Program
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-pure-white">Legal</h6>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-text-muted hover:text-deep-maroon transition-colors"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-text-muted hover:text-deep-maroon transition-colors"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-text-muted hover:text-deep-maroon transition-colors"
                    href="#"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h6 className="font-bold text-pure-white">Ikuti Kami</h6>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-deep-maroon hover:bg-deep-maroon hover:text-pure-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    share
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-deep-maroon hover:bg-deep-maroon hover:text-pure-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    public
                  </span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-deep-maroon hover:bg-deep-maroon hover:text-pure-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">
                    alternate_email
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © 2024 Dalarangers Karang Taruna. Empowering Youth, Building
            Community.
          </p>
          <p className="text-sm text-text-muted">
            Made with passion by Pemuda Dala
          </p>
        </div>
      </div>
    </footer>
  );
}

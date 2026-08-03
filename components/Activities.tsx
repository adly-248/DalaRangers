"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/components/motion/FadeInSection";

const ACTIVITIES = [
  {
    title: "Bakti Lingkungan 2024",
    alt: "Relawan muda membersihkan area tepi sungai saat matahari terbit",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWSssLfsDFJFQqb2Xk-FE_Oy9n3cTZ8BL9erapSCGTQnXY5DVCXE7UEZZk3CouI953H-r9P4jMsaBfCqpsJKzc1JmgunrY-WoDWEvLAEsIJIhT0l0QprBDQIJh_HkME6A2LfFQhqWyFzNl1cNCHv7LLLqNPFYq4TewuT79D7W3nK1Ug8nVU-yrGT-uEKi8t_B-UVNB9w6vX3nC04t2gb7fMVUW39JRhyIk7kqUdOBs-q_4HdfJ21BvTg",
    span: false,
  },
  {
    title: "Rumah Cerdas Ceria",
    alt: "Remaja mengikuti workshop pendidikan lingkungan di luar ruangan",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9FHvCb0pLyntL_C7r7kVWC3rr4oYnkRhoQ_E_kaNi6oXTIaDaN4onNtrORicJzJWagIiAklwYhxEe0-7MNync845FR1C5FBtGBTiW9i6uqxEczLgUudoplUcrpg1sVTQ1recS8Y278BW5U-2-NH0au6vztGXab7JABUJXidkgnH7_L6qm91LH0p_s8JMMACXHqNIymywlRBdPxMyDjJ1_W12Ie7C1_bv5-vJPmTiVFq_3v-2bFfx4sA",
    span: true,
  },
  {
    title: "Musyawarah Tahunan",
    alt: "Pemimpin muda menghadiri musyawarah tahunan di auditorium modern",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcC0f6KuiPuCR1JXbotqJlTbFK-iWfGAgu_WjYCUdm-aflOVkOwg4OnKhCqw5pT_Q6lBHNcFFjEHQGeWhDmAiqqyhZRZH0b1_D1KW7zDVg8lJ3g0VtqhmVNconR3mGVxhb6GBr4zczXYa2nrMXAgakF3ur-YefVHudwe48e_C5Hn9NtD2iMR_XCY9AzwZC8vt-3aEDXKoyniFwXEcxkOVQs1OtIurUP_oOEsHOyGvK2nBrT97ZHyC8Hw",
    span: false,
  },
  {
    title: "Dalarangers Cup",
    alt: "Turnamen olahraga komunitas berlangsung di lapangan malam hari",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBck9GSiMVrUYWRjjtQUtR46zZOxujApvOzc8uAZP8YOCxRtPnKsHwi3OKOfOmJq4Zopf_YPB12V-cx0f9h8Rgd0cYhTQWDfgRzzMdpSK7qICsSTMPzAr7G68-S_ynnaQek66kOd5ZKIVjipmGwz_c-ij9ZaGVN3LMJhYUbUGiVOEMCzrvMKB35rwTK_dbndliDJCxtvPbqHPKqsPcK4umr_0S2ffIAjNdooUavk9Swkyhz1yfBpVIBrg",
    span: false,
  },
  {
    title: "Sembako Murah",
    alt: "Relawan membagikan paket sembako kepada warga pada malam hari",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgI2H40nEa9SZwv1R5o2JYIm83q1zFsHtYQGdupa4Dar_tbXy1o45rp-HlpHodP2cT6qwbe_GS_p5PzyWQQzX3eGEpgQhJbWWNByU22o4rJbdLMMgndXJsuRO6PuCzEtz9Cxvs55JcX8cox-qbxWBMm9J4vVZhxPTBsih1gwEdi1hIOp-AKdRaeoRZVlEdDF2d-t9iOxCHaegoWCq4Fh0IU-bP9UlO2DYZzpfgx7n-7XxBlugVSNLxXQ",
    span: false,
  },
  {
    title: "Gelar Budaya",
    alt: "Pameran kerajinan tradisional ditampilkan di ruang galeri modern",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMm7l0dvm01QR7XuN7IZ6QYqtmeztOmYfqAser555WqucnJMblir3YxzEnKrMPx60kevyWBZ6p5mqsAGBS1-xSvT9bEVLjjqPydglC8LdIDbUz0T4-iicWS1qINHHKnwixWW2GyvVfasEvgGCwnHbuyZ5f-_A-B40R1_3ekvGAEzDOy1yWbUX5YJkQMTLiDJaladCPFGyAI0u3UWdebtYF40n99hVLzgzRHUj6JbkrzrQlPPwkEJ9rvw",
    span: false,
  },
  {
    title: "Tech Camp 2024",
    alt: "Peserta mengikuti workshop teknologi robotika dan elektronik",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUjHmtkrt4lQb4S7YL1I5hf1iMqyLUxeE4gbHJ8OPhlRQttZJL-A-o5EQSgCx4xxg229TshlzDMf5pv-93QujW6PS61r3nG2YbU0k1Haq53I0UvZV9EZ9FK6G2GKNEwWDtewdhAm5hrt6jJpAf1xJn-cLULkxYE3C87w_qQcnNEt97I2pKVQTzdWrlDNJTAIByaXIKakjU6V21BcMaCwW474C9dTbbvqZAMIHegb9kFZ1_khD2i7B5BQ",
    span: false,
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Activities() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest"
      id="activities"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <FadeInSection className="flex flex-col items-center text-center mb-16">
          <span className="font-label-caps text-label-caps text-deep-maroon mb-2">
            KEGIATAN
          </span>
          <h2 className="font-headline-md text-headline-md text-pure-white">
            Dokumentasi Kegiatan Kami
          </h2>
          <div className="horizontal-accent mx-auto"></div>
        </FadeInSection>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {ACTIVITIES.map((activity) => (
            <motion.div
              key={activity.title}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-xl aspect-square group ${
                activity.span ? "md:row-span-2" : ""
              }`}
            >
              <Image
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                alt={activity.alt}
                src={activity.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4">
                <p className="text-xs font-bold text-pure-white uppercase tracking-wider">
                  {activity.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

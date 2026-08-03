"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/components/motion/FadeInSection";

const MEMBERS = [
  {
    name: "Aris Setiawan",
    role: "Ketua Umum",
    alt: "Foto profesional pemimpin muda pria mengenakan setelan formal",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlSeT6hw4xFa1Swl2bx6julgpJfs3oPfsXTPyTzCR1_6zSE6SY5N4F7fxJhHa2AazPtCD64g0DDeC0SPAnOO5NWGJpjEgmao6GZ2IzfW4eE8LdoPd_6ORDDxk2QKL-WkOEV7zVHjAcNUsZoIQB8xPg_u0iE-XARRxTMg3LpSWxYQclE18ZS1PF4ySkQ70wZR0CzYKJGqZ3hL7dbTxtLM4NC6nMSoGs3aKm-FD9osWP-dGnrERdtcGB7Q",
  },
  {
    name: "Dina Rahayu",
    role: "Sekretaris",
    alt: "Foto profesional pemimpin muda wanita mengenakan blazer",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7fQnEea0SIde-y2M6LOu7F2wC-UTLn6ZR79J3Gfod65zB23cxjSjk_Ns55tGpBDyfMej5RnCJ6MWLbBsROOBFyXwEiKf7N8pcJqbyZry2IARbgJLBEX8FikGm7vLRS1aKCcQ6NEvfPvQfLHuivp5yCWzAbQFStE4tRHmOh6HF4jatYBzzn9KxByrPJ__XDKGQPe7mrAaOsFlDdI6BSYbFSSziLZaWKjpcsl82k17qos18oIKfu9CdWQ",
  },
  {
    name: "Budi Cahyono",
    role: "Bendahara",
    alt: "Foto profesional pria muda mengenakan polo maroon",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMC9HL36Do95UunreOIULbGBFNMOFf_4aQyrXLceg7ul9D8UQiLZ_o3ygOQvIK6mmuu_t8E1xBHu3JG-nzg2_axgdFt4z84S6bDtD8XOkBcRtP3y4GZgkz2nanJ4DeBd1x4_GuAJFwdCZTOYIO_rGNkbXjOfwsR4tDCYh5PFAH4wAUwjoIp99hKrbHWsPBcj_9helPAwUDRMtNgB3nH0D_fUQMatBbc_GKo3HEHw13Ba8KEFB--wq8SA",
  },
  {
    name: "Siska Amelia",
    role: "Koor. Program",
    alt: "Foto profesional wanita muda mengenakan turtleneck abu-abu",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb8KT6pGxiUDX2ab7RmcWr2DM1uZ1w-UKKfW_zbgPHKVsnjHE8s9uYjeA-6-eEUW7IoPEPBpB446tWpxzZmh2000uDMo410u8ZRQjLV91PObk6YhzSC7IawG-uagfb8lxc7NEEwUl_0zOFh2T-xlD07hHWf8SbF__kXEdw6WqPt2kCYCRzBg9cYIp_wM9ztIZNVVazdGKx04qQLlhKbaPBzFVXIhYsleCA-XjMUuU3k6aJ471VOs6iVg",
  },
  {
    name: "Fajar Ramadhan",
    role: "Koor. Lapangan",
    alt: "Foto profesional pria muda mengenakan jaket Karang Taruna",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB_6hfs0kFeE5NyNBedj-Hgs0ylWOuuSj5m2dKxpscdUMFFGsUNPUfhOvv3IUKVp2-by8CxNPHVZLoxAiWarLpHNiNyr5Z60TVZh2IBG_X38v1Ecs8sPPfA48oc-wkAXPdI2lmQ841t87b05Ue35B5I-FobCASMaM0loGiON1qOmDenw3tX6pIrC6WOMd_fO7uDqMe_NsGz1PqGtc9HrhUVI3drCKkitK5OhtnxYB7VWlof66pat5z6g",
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

export default function Team() {
  return (
    <section
      className="py-section-gap-mobile md:py-section-gap-desktop"
      id="team"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile">
        <FadeInSection className="flex flex-col items-center text-center mb-16">
          <span className="font-label-caps text-label-caps text-deep-maroon mb-2">
            ANGGOTA
          </span>
          <h2 className="font-headline-md text-headline-md text-pure-white">
            Struktur Kepengurusan
          </h2>
          <div className="horizontal-accent mx-auto"></div>
        </FadeInSection>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-gutter"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {MEMBERS.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-32 h-32 rounded-full border-4 border-deep-maroon p-1 relative overflow-hidden">
                <Image
                  fill
                  className="object-cover rounded-full"
                  alt={member.alt}
                  src={member.src}
                />
              </div>
              <div>
                <h4 className="font-bold text-pure-white">{member.name}</h4>
                <p className="text-deep-maroon text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

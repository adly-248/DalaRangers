# Dalarangers Website (Next.js 15)

Website resmi Karang Taruna Dalarangers, dikonversi dari static HTML ke Next.js 15 (App Router) + Tailwind CSS agar siap di-deploy ke Vercel.

## Struktur Project

```
dalarangers-nextjs/
├── app/
│   ├── layout.tsx      # Root layout, font, metadata
│   ├── page.tsx        # Merangkai semua section
│   └── globals.css     # Global styles + custom classes
├── components/
│   ├── motion/
│   │   └── FadeInSection.tsx  # Reusable scroll fade-in wrapper (Framer Motion)
│   ├── Navbar.tsx       # Navbar + active-section highlight (client)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── Activities.tsx
│   ├── Team.tsx
│   ├── FAQ.tsx          # Accordion animated with Framer Motion (client)
│   ├── Contact.tsx      # Form (client)
│   └── Footer.tsx
├── tailwind.config.ts   # Warna, spacing, font custom dari desain asli
└── next.config.mjs      # Izin domain gambar (lh3.googleusercontent.com)
```

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Animasi (Framer Motion)

Semua section punya animasi fade-in + slide-up saat di-scroll ke viewport (pakai `whileInView`), dengan stagger untuk grid/kartu (Program Kerja, Kegiatan, Anggota). Navbar fade-in saat halaman pertama kali dimuat, dan FAQ punya animasi expand/collapse yang smooth. Komponen `components/motion/FadeInSection.tsx` adalah wrapper reusable untuk animasi ini — tinggal bungkus elemen baru dengan komponen ini kalau mau nambah section baru dengan animasi serupa.

## Catatan penting sebelum deploy

1. **Gambar placeholder**: semua gambar masih memakai URL `lh3.googleusercontent.com` (hasil generate AI). Ganti dengan foto asli kegiatan/anggota Dalarangers — taruh di folder `public/` lalu update `src` di masing-masing komponen ke path lokal (misal `/images/hero.jpg`) untuk performa lebih baik dan menghindari ketergantungan pada URL eksternal.
2. **Form kontak**: form di `Contact.tsx` belum terhubung ke backend/email service — saat ini hanya menampilkan alert. Untuk fungsi kirim email sungguhan, bisa dihubungkan ke:
   - Route handler Next.js (`app/api/contact/route.ts`) + layanan seperti Resend/Nodemailer, atau
   - Layanan pihak ketiga seperti Formspree/EmailJS.
3. **Google Maps**: bagian peta masih placeholder gambar statis. Bisa diganti embed Google Maps iframe asli dengan alamat sekretariat sebenarnya.
4. **Data anggota & program kerja**: masih data contoh (dummy), tinggal edit array di `Team.tsx` dan `Programs.tsx`.

## Deploy ke Vercel

1. Push project ini ke repository GitHub.
2. Buka [vercel.com](https://vercel.com), klik "New Project", import repo tersebut.
3. Vercel otomatis mendeteksi framework Next.js — cukup klik Deploy.
4. Selesai — situs akan live di domain `*.vercel.app` (bisa dihubungkan ke domain custom nanti).

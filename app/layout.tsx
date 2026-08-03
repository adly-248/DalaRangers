import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dalarangers - Karang Taruna",
  description:
    "Dalarangers adalah wadah kepemudaan yang berfokus pada pemberdayaan sosial, inovasi lingkungan, dan pengabdian masyarakat di tingkat Karang Taruna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md overflow-x-hidden">{children}</body>
    </html>
  );
}

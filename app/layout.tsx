import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "יועץ AI ואוטומציות לעסקים - איציק",
  description: "ייעוץ AI ואוטומציות לעסקים קטנים-בינוניים. ממיר בינה מלאכותית לרווח וחיסכון בזמן.",
  keywords: "יועץ AI, אוטומציה לעסקים, AI לעסקים קטנים, סוכן AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alef:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--color-surface)] font-[Alef,sans-serif]">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

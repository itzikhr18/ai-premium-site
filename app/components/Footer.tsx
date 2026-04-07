import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/cases", label: "תוצאות" },
  { href: "/contact", label: "צור קשר" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0520] text-white/50 py-10">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} איציק - יועץ AI ואוטומציות עסקיות
        </p>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 hover:text-accent-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

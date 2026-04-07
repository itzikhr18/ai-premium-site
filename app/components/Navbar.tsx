"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  { href: "/services", label: "שירותים" },
  { href: "/cases", label: "תוצאות" },
  { href: "/contact", label: "צור קשר" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0A2E]/92 backdrop-blur-xl py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <span className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-[10px] flex items-center justify-center text-sm font-bold">
            AI
          </span>
          איציק
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-bold transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 right-0 left-0 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href="https://wa.me/972527237064?text=שלום, אשמח לשיחת היכרות"
            className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2 rounded-full text-sm font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            שיחת היכרות
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 relative z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0F0A2E]/97 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-bold ${
                    pathname === link.href ? "text-white" : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://wa.me/972527237064?text=שלום, אשמח לשיחת היכרות"
              onClick={() => setMobileOpen(false)}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full text-lg font-bold"
            >
              שיחת היכרות
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

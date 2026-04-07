"use client";

import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const methods = [
  {
    icon: "💬",
    title: "וואטסאפ",
    desc: "הדרך הכי מהירה ליצור קשר",
    cta: "שלח הודעה",
    href: "https://wa.me/972527237064?text=שלום, אשמח לשיחת היכרות",
  },
  {
    icon: "📞",
    title: "טלפון",
    desc: "מעדיף לדבר? התקשר ישירות",
    cta: "התקשר עכשיו",
    href: "tel:+972527237064",
  },
];

export default function Contact() {
  return (
    <>
      <HeroSection
        badge="בוא נדבר"
        title="צור קשר"
        subtitle="בוא נדבר על העתיד של העסק שלך"
      />

      <section className="py-24">
        <div className="w-[90%] max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              אני מזמין אותך לשיחת היכרות קצרה כדי להבין מה אפשר להשיג בעזרת AI
              ואוטומציות. אין צורך בטפסים מסובכים – פשוט שלח הודעה בוואטסאפ ונקבע.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {methods.map((m) => (
              <StaggerItem key={m.title}>
                <motion.a
                  href={m.href}
                  whileHover={{ y: -6 }}
                  className="block bg-white rounded-2xl p-10 border border-primary/5 hover:border-primary/15 hover:shadow-xl hover:shadow-primary/5 transition-all text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                  <p className="text-slate-500 text-sm mb-5">{m.desc}</p>
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-sm">
                    {m.cta}
                  </span>
                </motion.a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

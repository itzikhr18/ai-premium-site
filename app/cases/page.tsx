"use client";

import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const cases = [
  {
    stat: "3X",
    title: "הגדלת מכירות פי 3",
    desc: "באמצעות שילוב אוטומציה ומודלי AI מותאמים, עסק קטן בתחום המסעדנות הגדיל את המכירות פי 3 תוך חודש אחד בלבד.",
  },
  {
    stat: "70%",
    title: "חיסכון של 70% בזמן",
    desc: "עסק שירותים הצליח לחסוך 70% מזמן העבודה הידנית באמצעות תהליכי אוטומציה שמצמצמים טעויות ומייעלים תהליכים.",
  },
  {
    stat: "90%",
    title: "ייעול תהליכים והפחתת טעויות",
    desc: "חברת מסחר מקוון יצרה בוט AI פנימי ששולט בפניות שירות לקוחות, והורידה ב־90% את מספר השגיאות בתהליכים.",
  },
];

export default function Cases() {
  return (
    <>
      <HeroSection
        badge="הוכחות מהשטח"
        title="קייסים ותוצאות"
        subtitle="סיפורי הצלחה אמיתיים מעסקים כמו שלך"
      />

      <section className="py-24">
        <div className="w-[90%] max-w-4xl mx-auto">
          <StaggerContainer className="space-y-8">
            {cases.map((c) => (
              <StaggerItem key={c.stat}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-10 border border-primary/5 hover:border-primary/15 hover:shadow-xl hover:shadow-primary/5 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded" />
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none shrink-0">
                      {c.stat}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold mb-3 text-primary">{c.title}</h2>
                      <p className="text-slate-500 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0F0A2E] via-[#1a1145] to-[#0e2a4a] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(108,58,237,0.2),transparent_70%)]" />
        <div className="relative z-10 w-[90%] max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              רוצה תוצאות כאלה גם בעסק שלך?
            </h2>
            <p className="text-white/60 text-lg mb-8">בוא נדבר ונבדוק מה אפשרי</p>
            <a
              href="https://wa.me/972527237064?text=שלום, אשמח לשיחת היכרות"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">שיחת היכרות בוואטסאפ</span>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

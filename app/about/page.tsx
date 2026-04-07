"use client";

import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const values = [
  { icon: "🎯", title: "ממוקד תוצאות", desc: "כל פעולה נמדדת ומכוונת ליצירת ערך עסקי אמיתי" },
  { icon: "💡", title: "פרקטי ופשוט", desc: "פתרונות שעובדים בפועל, בלי סיבוכים מיותרים" },
  { icon: "💪", title: "ליווי אישי", desc: "אני איתך לאורך כל הדרך עד להצלחה מלאה" },
];

export default function About() {
  return (
    <>
      <HeroSection
        badge="מי אני"
        title="אודות"
        subtitle="מי אני ולמה כדאי לכם להקשיב לי"
      />

      {/* About Content */}
      <section className="py-24">
        <div className="w-[90%] max-w-3xl mx-auto">
          <FadeUp>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                אני איציק, יזם ומומחה לבינה מלאכותית ואוטומציות עסקיות. לאורך השנים חיברתי
                בין ביזנס לטכנולוגיה, כדי לעזור לעסקים קטנים ובינוניים בישראל לצמוח.
              </p>
              <p>
                אני מאמין שבינה מלאכותית היא כלי עבודה ולא צעצוע. זו הדרך לייעל תהליכים,
                לחסוך במשאבים ולהגדיל הכנסות בצורה ברת־קיימא.
              </p>
              <p>
                כשאני עובד עם עסקים, אני מתמקד בתוצאות. אין הבטחות שווא או באזזים. רק
                פתרונות פרקטיים שמייצרים ROI אמיתי.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="w-[90%] max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-primary text-sm font-bold tracking-wider mb-3 flex items-center gap-2 justify-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded" />
              הערכים שלי
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              למה{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                לעבוד איתי
              </span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-8 text-center border border-primary/5 hover:border-primary/15 hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm">{v.desc}</p>
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
              רוצה לשמוע איך AI יכול לעזור לעסק שלך?
            </h2>
            <p className="text-white/60 text-lg mb-8">שיחת היכרות קצרה ללא התחייבות</p>
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

"use client";

import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";
import { About3 } from "@/components/ui/about-3";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

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

      {/* About Content - About3 Component */}
      <About3
        title="הסיפור שלי"
        description="אני איציק, יזם ומומחה לבינה מלאכותית ואוטומציות עסקיות. לאורך השנים חיברתי בין ביזנס לטכנולוגיה, כדי לעזור לעסקים קטנים ובינוניים בישראל לצמוח."
        mainImage={{
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
          alt: "צוות עובד עם טכנולוגיה",
        }}
        secondaryImage={{
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          alt: "ניתוח נתונים",
        }}
        breakout={{
          src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=48&fit=crop",
          alt: "AI",
          title: "AI שעובד בשביל העסק שלך",
          description: "אני מאמין שבינה מלאכותית היא כלי עבודה ולא צעצוע. רק פתרונות פרקטיים שמייצרים ROI אמיתי.",
          buttonText: "צור קשר",
          buttonUrl: "/contact",
        }}
        companiesTitle="כלים ופלטפורמות שאני עובד איתם"
        companies={[
          { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg", alt: "OpenAI" },
          { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg", alt: "Make" },
          { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg", alt: "Zapier" },
          { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg", alt: "n8n" },
          { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg", alt: "Anthropic" },
          { src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg", alt: "Vercel" },
        ]}
        achievementsTitle="הישגים במספרים"
        achievementsDescription="תוצאות אמיתיות מלקוחות אמיתיים - מספרים שמדברים בעד עצמם."
        achievements={[
          { label: "עסקים שליוויתי", value: "50+" },
          { label: "אוטומציות שנבנו", value: "200+" },
          { label: "שביעות רצון", value: "99%" },
          { label: "חיסכון ממוצע בזמן", value: "70%" },
        ]}
      />

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
            <a href="https://wa.me/972527237064?text=שלום, אשמח לשיחת היכרות">
              <LiquidButton size="xxl" className="text-white font-bold text-lg">
                שיחת היכרות בוואטסאפ
              </LiquidButton>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

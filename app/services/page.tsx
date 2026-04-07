"use client";

import { motion } from "framer-motion";
import { HeroSection } from "../components/HeroSection";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/AnimatedSection";

const services = [
  {
    icon: "🔍",
    title: "ייעוץ ואבחון AI",
    desc: "ננתח את העסק שלך ונזהה את ההזדמנויות בהן בינה מלאכותית יכולה להגדיל הכנסות ולחסוך זמן. תקבל תוכנית פעולה מותאמת אישית.",
    cta: "לשיחת ייעוץ",
    msg: "אני מעוניין בייעוץ AI",
  },
  {
    icon: "⚙️",
    title: "אוטומציות לעסקים",
    desc: "נבנה עבורך תהליכים אוטומטיים שמפחיתים עבודה ידנית, מצמצמים טעויות ומשחררים אותך להתמקד במה שחשוב באמת.",
    cta: "לפרטים נוספים",
    msg: "אני מעוניין באוטומציות לעסק",
  },
  {
    icon: "🤖",
    title: "סוכני AI וכלים פנימיים",
    desc: "נפתח סוכני AI מותאמים (בוטים) וכלי עבודה פנימיים שמייעלים את התקשורת והשירות ללקוחות שלך.",
    cta: "לבדיקה",
    msg: "אני מעוניין בסוכני AI לעסק",
  },
  {
    icon: "🤝",
    title: "ליווי והטמעה",
    desc: "נלווה אותך צעד אחר צעד עד להטמעה מלאה של הכלים והאוטומציות, עם תמיכה והדרכה מתמשכת.",
    cta: "לשיחת התאמה",
    msg: "אני מעוניין בליווי והטמעה",
  },
];

export default function Services() {
  return (
    <>
      <HeroSection
        badge="השירותים שלי"
        title="שירותים"
        subtitle="פתרונות פרקטיים שמייצרים ROI"
      />

      <section className="py-24">
        <div className="w-[90%] max-w-4xl mx-auto">
          <StaggerContainer className="space-y-8">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-2xl p-10 border border-primary/5 hover:border-primary/15 hover:shadow-xl hover:shadow-primary/5 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start gap-5">
                    <span className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                      {s.icon}
                    </span>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-3">{s.title}</h2>
                      <p className="text-slate-500 leading-relaxed mb-5">{s.desc}</p>
                      <a
                        href={`https://wa.me/972527237064?text=${s.msg}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-sm overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                      >
                        {s.cta}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

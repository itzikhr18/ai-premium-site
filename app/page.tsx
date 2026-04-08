"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { HeroSection } from "./components/HeroSection";
import { FadeUp, StaggerContainer, StaggerItem } from "./components/AnimatedSection";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const problems = [
  { icon: "📉", title: "חוסר הבנת ROI", desc: "השקעה בכלי AI ללא יעדים עסקיים ברורים ומדידים" },
  { icon: "🧩", title: "כלים מורכבים מדי", desc: "טכנולוגיה מסובכת שדורשת ידע טכני שאין לעסקים" },
  { icon: "⏳", title: "יישום לא ממוקד", desc: "בזבוז זמן ומשאבים על פתרונות שלא מתאימים" },
];

const steps = [
  { num: "01", title: "ניתוח צרכים והזדמנויות", desc: "מזהים את נקודות הכאב ואת ההזדמנויות שבהן AI יכול לייצר את ההשפעה הגדולה ביותר", icon: "🔬" },
  { num: "02", title: "בניית אוטומציות יעילות", desc: "מפתחים פתרונות מותאמים אישית שעובדים בצורה אוטומטית ומייעלים תהליכים", icon: "🔧" },
  { num: "03", title: "מדידה ושיפור מתמיד", desc: "עוקבים אחרי התוצאות, מודדים ROI ומשפרים בצורה רציפה", icon: "📊" },
];

const services = [
  { icon: "🔍", title: "ייעוץ ואבחון AI", desc: "נבין יחד איפה AI יכול לייצר יותר ערך בעסק שלך ונבנה תוכנית פעולה.", color: "from-violet-500/10 to-purple-500/10" },
  { icon: "⚙️", title: "אוטומציות לעסקים", desc: "נבנה תהליכים אוטומטיים שחוסכים זמן וכסף ומפחיתים טעויות.", color: "from-cyan-500/10 to-blue-500/10" },
  { icon: "🤖", title: "סוכני AI וכלים פנימיים", desc: "נייצר בוטים חכמים שמטפלים בפניות, שירות לקוחות ועוד.", color: "from-emerald-500/10 to-teal-500/10" },
  { icon: "🤝", title: "ליווי והטמעה", desc: "נלווה אותך לאורך כל הדרך עד להצלחה עם תמיכה מתמשכת.", color: "from-amber-500/10 to-orange-500/10" },
];

const stats = [
  { value: 3, suffix: "X", label: "הגדלת המכירות בעסק קטן תוך חודש" },
  { value: 70, suffix: "%", label: "חיסכון בזמן עבודה ידנית" },
  { value: 90, suffix: "%", label: "ירידה בשגיאות תהליכים" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="יועץ AI ואוטומציות עסקיות"
        title="אני עוזר לעסקים להפוך AI לכלי שמכניס כסף וחוסך זמן"
        subtitle="פתרונות AI פרקטיים שמביאים תוצאות אמיתיות לעסקים קטנים ובינוניים"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/972527237064?text=שלום, אשמח לשיחת היכרות"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">שיחת היכרות בוואטסאפ</span>
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:border-accent hover:bg-accent/10 transition-all"
          >
            לשירותים שלי
          </Link>
        </div>
      </HeroSection>

      {/* Social proof bar */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="w-[90%] max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm">
          <span className="flex items-center gap-2"><span className="text-amber-400">★★★★★</span> 5.0 מלקוחות מרוצים</span>
          <span className="hidden sm:block w-px h-4 bg-slate-200" />
          <span>50+ עסקים שליוויתי</span>
          <span className="hidden sm:block w-px h-4 bg-slate-200" />
          <span>200+ אוטומציות שנבנו</span>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 neural-dots opacity-30" />
        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <p className="text-primary text-sm font-bold tracking-wider mb-3 flex items-center gap-2 justify-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded" />
              הבעיה
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              למה AI{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                לא עובד
              </span>{" "}
              לרוב העסקים?
            </h2>
            <p className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-12">
              רוב העסקים שמנסים ליישם AI נתקלים באותן בעיות שוב ושוב
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-8 text-center transition-shadow hover:shadow-lg hover:shadow-red-100/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-300 to-amber-400 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-red-200/50">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-red-600 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm">{p.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="absolute inset-0 ai-grid" />
        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <p className="text-primary text-sm font-bold tracking-wider mb-3 flex items-center gap-2 justify-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded" />
              התהליך
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              איך אני{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                מיישם AI
              </span>{" "}
              בפועל
            </h2>
            <p className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-14">
              שיטה מוכחת בשלושה שלבים פשוטים
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <StaggerItem key={s.num}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-white rounded-2xl p-9 text-center border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all group"
                >
                  <div className="absolute -top-4 right-6 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    שלב {s.num}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-primary/30 text-2xl">←</div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="w-[90%] max-w-7xl mx-auto">
          <FadeUp>
            <p className="text-primary text-sm font-bold tracking-wider mb-3 flex items-center gap-2 justify-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded" />
              שירותים
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              מה אני{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                מציע
              </span>
            </h2>
            <p className="text-center text-slate-500 text-lg max-w-xl mx-auto mb-12">
              פתרונות מקצה לקצה להטמעת AI בעסק שלך
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`group bg-gradient-to-br ${s.color} rounded-2xl p-9 border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-primary to-accent group-hover:h-full transition-all duration-500 rounded-b" />
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 delay-200 rounded-r" />
                  <span className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    {s.icon}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4C1D95] text-white relative overflow-hidden">
        <div className="absolute inset-0 ai-grid opacity-50" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(108,58,237,0.15),transparent_70%)]" />
        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <p className="text-accent-light text-sm font-bold tracking-wider mb-3 flex items-center gap-2 justify-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary-light rounded" />
              תוצאות
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-3">
              תוצאות{" "}
              <span className="bg-gradient-to-r from-accent-light to-purple-300 bg-clip-text text-transparent">
                אמיתיות
              </span>{" "}
              מהשטח
            </h2>
            <p className="text-center text-white/50 text-lg max-w-xl mx-auto mb-14">
              מספרים שמדברים בעד עצמם
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-9 text-center hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-light to-purple-300 bg-clip-text text-transparent mb-3 leading-none">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-white/60">{s.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-br from-[#0F0A2E] via-[#1a1145] to-[#0e2a4a] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 ai-grid opacity-30" />
        {/* Shimmer lines */}
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
          <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-[shimmer_4s_ease-in-out_infinite_0.5s]" />
          <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-light to-transparent animate-[shimmer_3.5s_ease-in-out_infinite_1s]" />
          <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light to-transparent animate-[shimmer_5s_ease-in-out_infinite_1.5s]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(108,58,237,0.25),transparent_70%)]" />
        <div className="relative z-10 w-[90%] max-w-3xl mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-sm text-accent-light mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
              ללא התחייבות
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              בואו נתחיל להכניס AI לעסק שלכם
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
              שיחת אסטרטגיה של 30 דקות שתשנה את הדרך שבה העסק שלכם עובד
            </p>
            <a
              href="https://wa.me/972527237064?text=שלום, אשמח לשוחח על AI לעסק שלי"
              className="group relative inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/40 animate-[glowPulse_3s_ease-in-out_infinite]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">לתיאום שיחת אסטרטגיה</span>
              <span className="relative">←</span>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

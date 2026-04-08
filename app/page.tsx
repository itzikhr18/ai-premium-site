"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroSection } from "./components/HeroSection";
import { FadeUp, StaggerContainer, StaggerItem } from "./components/AnimatedSection";
import { FloatingPaths } from "@/components/ui/background-paths";

const problems = [
  { icon: "📉", title: "חוסר הבנת ROI", desc: "השקעה בכלי AI ללא יעדים עסקיים ברורים ומדידים" },
  { icon: "🧩", title: "כלים מורכבים מדי", desc: "טכנולוגיה מסובכת שדורשת ידע טכני שאין לעסקים" },
  { icon: "⏳", title: "יישום לא ממוקד", desc: "בזבוז זמן ומשאבים על פתרונות שלא מתאימים" },
];

const steps = [
  { num: "1", title: "ניתוח צרכים והזדמנויות", desc: "מזהים את נקודות הכאב ואת ההזדמנויות שבהן AI יכול לייצר את ההשפעה הגדולה ביותר" },
  { num: "2", title: "בניית אוטומציות יעילות", desc: "מפתחים פתרונות מותאמים אישית שעובדים בצורה אוטומטית ומייעלים תהליכים" },
  { num: "3", title: "מדידה ושיפור מתמיד", desc: "עוקבים אחרי התוצאות, מודדים ROI ומשפרים בצורה רציפה" },
];

const services = [
  { icon: "🔍", title: "ייעוץ ואבחון AI", desc: "נבין יחד איפה AI יכול לייצר יותר ערך בעסק שלך ונבנה תוכנית פעולה." },
  { icon: "⚙️", title: "אוטומציות לעסקים", desc: "נבנה תהליכים אוטומטיים שחוסכים זמן וכסף ומפחיתים טעויות." },
  { icon: "🤖", title: "סוכני AI וכלים פנימיים", desc: "נייצר בוטים חכמים שמטפלים בפניות, שירות לקוחות ועוד." },
  { icon: "🤝", title: "ליווי והטמעה", desc: "נלווה אותך לאורך כל הדרך עד להצלחה עם תמיכה מתמשכת." },
];

const stats = [
  { value: "3X", label: "הגדלת המכירות בעסק קטן תוך חודש" },
  { value: "70%", label: "חיסכון בזמן עבודה ידנית" },
  { value: "90%", label: "ירידה בשגיאות תהליכים" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="יועץ AI ואוטומציות עסקיות"
        title="אני עוזר לעסקים להפוך AI לכלי שמכניס כסף וחוסך זמן"
        subtitle="פתרונות AI פרקטיים שמביאים תוצאות אמיתיות לעסקים קטנים ובינוניים"
        splineScene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
      >
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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

      {/* Problems */}
      <section className="py-24 bg-white">
        <div className="w-[90%] max-w-7xl mx-auto">
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
                  className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 rounded-2xl p-8 text-center transition-shadow hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-300 to-amber-400 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
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
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="w-[90%] max-w-7xl mx-auto">
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
            {steps.map((s) => (
              <StaggerItem key={s.num}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-9 text-center border border-primary/5 hover:border-primary/15 hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-5">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
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
                  className="group bg-white rounded-2xl p-9 border border-primary/5 hover:border-primary/15 hover:shadow-xl hover:shadow-primary/5 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-primary to-accent group-hover:h-full transition-all duration-300 rounded-b" />
                  <span className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
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
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.1),transparent_70%)]" />
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
              <StaggerItem key={s.value}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-9 text-center hover:bg-white/10 transition-all"
                >
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-light to-purple-300 bg-clip-text text-transparent mb-3 leading-none">
                    {s.value}
                  </div>
                  <p className="text-white/60">{s.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA with BackgroundPaths */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F0A2E] via-[#1a1145] to-[#0e2a4a]">
        {/* Animated background lines */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        {/* CTA Content */}
        <div className="relative z-10 text-center w-[90%] max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              בואו נתחיל להכניס AI לעסק שלכם
            </h2>
            <p className="text-white/60 text-lg mb-8">
              שיחת אסטרטגיה של 30 דקות ללא התחייבות
            </p>
            <a
              href="https://wa.me/972527237064?text=שלום, אשמח לשוחח על AI לעסק שלי"
              className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">לתיאום שיחת אסטרטגיה</span>
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Euro, Briefcase, Users, BarChart3,
  Globe2, FileText, Monitor, PenTool
} from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/hero-bg.jpg";
import { useLanguage } from "@/contexts/language-context";
import { Marquee } from "@/components/marquee";
import type { ReactNode } from "react";

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedNumber({ raw }: { raw: string }) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return <>{raw}</>;
  const target = parseFloat(match[1]);
  const suffix = match[2];
  const isFloat = match[1].includes(".");
  const decimals = isFloat ? (match[1].split(".")[1]?.length ?? 0) : 0;

  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(parseFloat((eased * target).toFixed(decimals)));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </span>
  );
}

const serviceIcons: ReactNode[] = [
  <Euro className="w-6 h-6" />,
  <Briefcase className="w-6 h-6" />,
  <Users className="w-6 h-6" />,
  <BarChart3 className="w-6 h-6" />,
  <Globe2 className="w-6 h-6" />,
  <FileText className="w-6 h-6" />,
  <Monitor className="w-6 h-6" />,
  <PenTool className="w-6 h-6" />,
];

const serviceAnchors = ["finance", "restructuring", "hr", "analytics", "development", "docs", "web-dev", "web-design"];
const partners = ["LTRK", "Redmond", "Vlavi", "Kentaro"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── Main page ───────────────────────────────────────────────────────────────
export default function Home() {
  const { t } = useLanguage();
  const { home } = t;

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end pb-20 md:pb-32 pt-20 bg-[#0D0F14] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14] via-transparent to-transparent opacity-70" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[130px] pointer-events-none z-0"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-bold text-white/50 tracking-[0.3em] uppercase">Latvia · EU · CIS</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl">
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl lg:text-[100px] font-serif font-semibold text-white leading-[1.0] tracking-tight mb-8"
            >
              {home.hero.headline}
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
              <motion.p variants={fadeUp} className="text-base text-white/45 font-light max-w-sm leading-relaxed">
                {home.hero.subline}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
                <a href="mailto:info@aj-consulting.eu" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-10 text-xs transition-colors gap-4">
                  <span className="font-bold tracking-[0.2em] uppercase">{home.hero.cta}</span>
                  <span className="w-px h-4 bg-white/30 shrink-0" />
                  <span className="font-bold tracking-[0.2em] uppercase">info@aj-consulting.eu</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-16 h-px bg-gradient-to-r from-primary/50 via-white/10 to-transparent origin-left"
          />
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────── */}
      <section className="bg-[#0D0F14] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {home.stats.map((stat, i) => {
              const isText = isNaN(parseFloat(stat.value));
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative px-8 py-12 group cursor-default"
                >
                  {isText ? (
                    /* text-based stat — badge style */
                    <div className="flex flex-col gap-3 mb-3">
                      {stat.value.split(/[&·\/]/).map((part) => part.trim()).filter(Boolean).map((part, j) => (
                        <span
                          key={j}
                          className="inline-block self-start border border-primary/30 bg-primary/8 px-3 py-1 text-[11px] font-bold text-primary tracking-[0.2em] uppercase"
                        >
                          {part}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-5xl md:text-7xl font-serif font-bold text-white mb-3 leading-none">
                      <AnimatedNumber raw={stat.value} />
                    </div>
                  )}
                  <div className="text-[10px] font-bold text-white/25 uppercase tracking-[0.3em]">{stat.label}</div>
                  <div className="absolute bottom-0 left-8 h-[2px] w-0 group-hover:w-10 bg-primary transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#F7F7F9]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-5">
                {home.servicesSection.viewAll}
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-[#0D0F14] leading-tight">
                {home.servicesSection.title}
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed hidden md:block">
              {home.servicesSection.subtitle}
            </p>
          </div>

          {/* Flip-to-dark cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200">
            {home.services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link href={`/services#${serviceAnchors[i]}`} className="block h-full group">
                  <div className="border-b border-r border-gray-200 p-8 h-full bg-white group-hover:bg-[#0D0F14] transition-colors duration-500 flex flex-col min-h-[260px]">
                    <span className="text-[10px] font-bold text-gray-300 group-hover:text-white/15 tracking-[0.3em] mb-6 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="text-gray-300 group-hover:text-primary transition-colors duration-500 mb-4">
                      {serviceIcons[i]}
                    </div>
                    <h3 className="text-base font-bold text-[#0D0F14] group-hover:text-white mb-3 transition-colors duration-500 font-sans leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-white/35 leading-relaxed transition-colors duration-500 flex-1">
                      {svc.desc}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase">{home.servicesSection.viewAll}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREMIUM ───────────────────────────────────────────── */}
      <section className="py-32 bg-[#0A0C10] relative text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/7 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/8 px-4 py-2 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[9px] font-bold text-primary tracking-[0.3em] uppercase">{home.premium.badge}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
                {home.premium.title}
              </h2>
              <p className="text-sm text-white/35 mb-10 leading-relaxed max-w-lg">
                {home.premium.description}
              </p>
              <a href="mailto:info@aj-consulting.eu" className="group inline-flex items-center justify-center bg-white text-[#0A0C10] hover:bg-white/90 tracking-[0.2em] uppercase h-14 px-10 text-xs font-bold transition-colors gap-3">
                {home.premium.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:info@aj-consulting.eu" className="inline-block text-xs font-bold text-white/35 hover:text-primary transition-colors mt-4">
                info@aj-consulting.eu
              </a>
              <p className="text-[11px] text-white/18 mt-6 max-w-md leading-relaxed">{home.premium.note}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {home.premium.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5 }}
                  className="flex items-start gap-6 py-7 border-b border-white/5 group cursor-default"
                >
                  <span className="text-[10px] font-bold text-white/18 tracking-[0.2em] shrink-0 pt-0.5">0{idx + 1}</span>
                  <h4 className="text-lg font-bold text-white/40 group-hover:text-white transition-colors duration-300 leading-snug flex-1">
                    {step}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-primary ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─────────────────────────────────────── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative select-none"
            >
              <div className="text-[170px] md:text-[210px] font-serif font-bold text-[#F0EEF8] leading-none">10+</div>
              <div className="absolute bottom-8 left-0 flex flex-col gap-2">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">{home.stats[0]?.label}</div>
                <div className="h-px w-14 bg-primary" />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0D0F14] mb-8 leading-tight">
                {home.about.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-10">
                {home.about.text}
              </p>
              <Link href="/about" className="group inline-flex items-center gap-3 text-[10px] font-bold text-[#0D0F14] tracking-[0.25em] uppercase border-b border-[#0D0F14] pb-1 hover:border-primary hover:text-primary transition-colors">
                {home.about.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ──────────────────────────────────────────── */}
      <section className="py-14 bg-[#F7F7F9] border-y border-gray-200 overflow-hidden">
        <div className="mb-6 text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            {home.partners.title}
          </p>
        </div>
        <Marquee items={partners} speed={22} />
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-40 bg-[#0A0C10] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_hsl(268_82%_57%_/_0.12),_transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-16" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
              <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-semibold text-white mb-8 leading-tight">
                {home.finalCta.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm text-white/35 mb-14 max-w-xl mx-auto leading-relaxed">
                {home.finalCta.subtitle}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:info@aj-consulting.eu" className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-12 text-xs font-bold tracking-[0.2em] uppercase transition-colors gap-3">
                  {home.finalCta.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="mailto:info@aj-consulting.eu" className="text-xs font-bold text-white/45 hover:text-primary transition-colors">
                  info@aj-consulting.eu
                </a>
                <Link href="/about" className="inline-flex items-center justify-center border border-white/12 text-white/45 hover:border-white/35 hover:text-white rounded-none h-14 px-12 text-xs font-bold tracking-[0.2em] uppercase transition-colors">
                  {home.about.cta}
                </Link>
              </motion.div>
            </motion.div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mt-16" />
          </div>
        </div>
      </section>
    </>
  );
}

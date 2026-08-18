import { Link } from "wouter";
import { ArrowRight, Euro, Briefcase, Users, BarChart3, Globe2, FileText, Monitor, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/hero-bg.jpg";
import { useLanguage } from "@/contexts/language-context";
import type { ReactNode } from "react";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const { t } = useLanguage();
  const { home } = t;

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-end pb-20 md:pb-32 pt-20 bg-[#0D0F14] overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Corporate background"
            className="w-full h-full object-cover opacity-35"
          />
          {/* layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14] via-transparent to-transparent opacity-70" />
        </div>

        {/* violet glow orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          {/* pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-white/60 tracking-[0.25em] uppercase">Latvia · EU · CIS</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-[100px] font-serif font-semibold text-white leading-[1.0] tracking-tight mb-8"
            >
              {home.hero.headline}
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg text-white/50 font-light max-w-sm leading-relaxed"
              >
                {home.hero.subline}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/contact" className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white gap-3 font-bold tracking-[0.2em] uppercase rounded-none h-14 px-10 text-xs transition-colors">
                  {home.hero.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center border border-white/20 text-white/70 hover:border-white hover:text-white font-bold tracking-[0.2em] uppercase rounded-none h-14 px-10 text-xs transition-colors">
                  {home.hero.secondaryCta}
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* bottom rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-16 h-px bg-gradient-to-r from-primary/60 via-white/10 to-transparent origin-left"
          />
        </div>
      </section>

      {/* ─── STATS ──────────────────────────────────────────────── */}
      <section className="bg-[#0D0F14] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {home.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative px-8 py-12 group"
              >
                <div className="text-5xl md:text-7xl font-serif font-bold text-white mb-3 leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                  {stat.label}
                </div>
                {/* violet accent */}
                <div className="absolute bottom-0 left-8 h-[2px] w-0 group-hover:w-10 bg-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#F7F7F9]">
        <div className="container mx-auto px-6 md:px-12">
          {/* header */}
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-6">
                {home.servicesSection.viewAll}
              </p>
              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-[#0D0F14] leading-tight">
                {home.servicesSection.title}
              </h2>
            </div>
            <p className="text-base text-gray-500 max-w-xs leading-relaxed hidden md:block">
              {home.servicesSection.subtitle}
            </p>
          </div>

          {/* cards — flip-to-dark on hover */}
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
                  <div className="border-b border-r border-gray-200 p-8 h-full bg-white group-hover:bg-[#0D0F14] transition-colors duration-500 relative overflow-hidden flex flex-col min-h-[260px]">
                    {/* number */}
                    <span className="text-[10px] font-bold text-gray-300 group-hover:text-white/20 tracking-[0.3em] uppercase mb-6 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* icon */}
                    <div className="text-gray-300 group-hover:text-primary transition-colors duration-500 mb-4">
                      {serviceIcons[i]}
                    </div>
                    {/* text */}
                    <h3 className="text-base font-bold text-[#0D0F14] group-hover:text-white mb-3 transition-colors duration-500 font-sans leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-white/40 leading-relaxed transition-colors duration-500 flex-1">
                      {svc.desc}
                    </p>
                    {/* arrow */}
                    <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transition-transform">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        {home.servicesSection.viewAll}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREMIUM ─────────────────────────────────────────────── */}
      <section className="py-32 bg-[#0A0C10] relative text-white overflow-hidden">
        {/* background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* left: copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/8 px-4 py-2 mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">
                  {home.premium.badge}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
                {home.premium.title}
              </h2>

              <p className="text-base text-white/40 mb-10 leading-relaxed max-w-lg">
                {home.premium.description}
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-white text-[#0A0C10] hover:bg-white/90 rounded-none tracking-[0.2em] uppercase h-14 px-10 text-xs font-bold transition-colors gap-3"
              >
                {home.premium.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-[11px] text-white/20 mt-6 max-w-md leading-relaxed">
                {home.premium.note}
              </p>
            </motion.div>

            {/* right: steps */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-0"
            >
              {home.premium.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex items-start gap-6 py-8 border-b border-white/5 group cursor-default"
                >
                  <span className="text-[11px] font-bold text-white/20 tracking-[0.2em] shrink-0 pt-0.5">
                    0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-white/50 group-hover:text-white transition-colors duration-300 leading-snug">
                    {step}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-primary ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ──────────────────────────────────────── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* left: decorative */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="text-[180px] md:text-[220px] font-serif font-bold text-[#F0EFF8] leading-none select-none">
                10+
              </div>
              <div className="absolute bottom-8 left-0 flex flex-col gap-1">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                  {home.stats[0]?.label}
                </div>
                <div className="h-px w-16 bg-primary" />
              </div>
            </motion.div>

            {/* right: copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0D0F14] mb-8 leading-tight">
                {home.about.title}
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-10">
                {home.about.text}
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-[10px] font-bold text-[#0D0F14] tracking-[0.25em] uppercase border-b border-[#0D0F14] pb-1 hover:border-primary hover:text-primary transition-colors"
              >
                {home.about.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#F7F7F9] border-y border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] shrink-0 md:mr-16">
              {home.partners.title}
            </p>
            <div className="flex flex-1 flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-8 md:gap-0">
              {partners.map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl font-serif font-bold text-gray-300 hover:text-gray-500 uppercase tracking-widest transition-colors cursor-default"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ──────────────────────────────────────────── */}
      <section className="py-40 bg-[#0D0F14] relative overflow-hidden">
        {/* glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_hsl(268_82%_57%_/_0.15),_transparent)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* decorative line */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-16" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-serif font-semibold text-white mb-8 leading-tight"
              >
                {home.finalCta.title}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-base text-white/40 mb-14 max-w-xl mx-auto leading-relaxed"
              >
                {home.finalCta.subtitle}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-12 text-xs font-bold tracking-[0.2em] uppercase transition-colors gap-3"
                >
                  {home.finalCta.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border border-white/15 text-white/50 hover:border-white/40 hover:text-white rounded-none h-14 px-12 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
                >
                  {home.about.cta}
                </Link>
              </motion.div>
            </motion.div>

            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-16" />
          </div>
        </div>
      </section>
    </>
  );
}

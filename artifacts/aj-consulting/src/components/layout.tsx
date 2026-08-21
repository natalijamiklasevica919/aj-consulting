import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/contexts/language-context";
import type { Lang } from "@/lib/translations";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "lv", label: "LV", flag: "🇱🇻" },
];

function LangSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown className={cn("w-3 h-3 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 bg-[#1C1F28] border border-[#333845] shadow-2xl min-w-[100px]">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                className={cn(
                  "flex items-center gap-2 w-full px-4 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-white/5",
                  lang === l.code ? "text-primary" : "text-white/60"
                )}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-[#252935] shadow-lg py-4 border-[#333845]"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors uppercase tracking-widest group",
                    location === link.href ? "text-primary" : "text-white hover:text-primary"
                  )}
                >
                  {link.label}
                  {/* active underline dot */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                      location === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <LangSwitcher />
          <a href="mailto:info@aj-consulting.eu" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white h-10 px-7 gap-3 transition-colors">
            <span className="font-bold tracking-wide uppercase text-xs">{t.nav.cta}</span>
            <span className="w-px h-3.5 bg-white/30 shrink-0" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">info@aj-consulting.eu</span>
          </a>
        </nav>

        {/* Mobile: lang + toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LangSwitcher />
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#252935] border-t border-[#333845] py-4 shadow-xl">
          <ul className="flex flex-col px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-4 text-white text-lg font-medium border-b border-[#333845]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6 pb-2">
              <a href="mailto:info@aj-consulting.eu" className="inline-flex items-center justify-center w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
                {t.nav.cta}
              </a>
              <a href="mailto:info@aj-consulting.eu" className="block text-center text-sm font-bold text-white/55 hover:text-primary transition-colors mt-3">
                info@aj-consulting.eu
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1C1F28] text-white pt-20 pb-10 border-t border-[#333845]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed mt-6">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 font-semibold">{t.footer.services.title}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {t.footer.serviceLinks.map((label, i) => {
                const anchors = ["finance", "restructuring", "hr", "analytics"];
                return (
                  <li key={i}>
                    <Link href={`/services#${anchors[i]}`} className="hover:text-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 font-semibold">{t.footer.company.title}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t.footer.about}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 font-semibold">{t.footer.contact.title}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Latvija, Rīga</li>
              <li><a href="mailto:info@aj-consulting.eu" className="font-bold hover:text-primary transition-colors">info@aj-consulting.eu</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333845] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="flex-grow flex flex-col relative w-full overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}

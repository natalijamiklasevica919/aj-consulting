import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@assets/aj-consulting-logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О нас" },
    { href: "/contact", label: "Контакты" },
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
        <Link href="/" className="flex items-center gap-2">
          {/* Logo container */}
          <div className="h-10 flex items-center justify-center">
             <img src={logo} alt="AJ Consulting Logo" className="h-full object-contain filter brightness-0 invert" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white border-0 gap-2 font-bold tracking-wide uppercase text-xs h-10 px-8 transition-colors">
              Сотрудничество
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
              <Link href="/contact" className="inline-flex items-center justify-center w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
                  Начать сотрудничество
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1C1F28] text-white pt-20 pb-10 border-t border-[#333845]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <img src={logo} alt="AJ Consulting Logo" className="h-10 mb-6 object-contain filter brightness-0 invert opacity-90" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Премиальный консалтинг для бизнеса в Латвии, ЕС и СНГ.
              Ваш долгосрочный партнёр в достижении реальных результатов.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 font-semibold">Услуги</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services#finance" className="hover:text-primary transition-colors">Финансы</Link></li>
              <li><Link href="/services#restructuring" className="hover:text-primary transition-colors">Реорганизация</Link></li>
              <li><Link href="/services#hr" className="hover:text-primary transition-colors">Персонал</Link></li>
              <li><Link href="/services#analytics" className="hover:text-primary transition-colors">Аналитика</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 font-semibold">Компания</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">О нас</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 font-semibold">Связь</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Латвия, Рига</li>
              <li><a href="mailto:info@aj-consulting.eu" className="hover:text-primary transition-colors">info@aj-consulting.eu</a></li>
              <li><a href="tel:+37100000000" className="hover:text-primary transition-colors">+371 XX XXX XXX</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#333845] pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AJ Consulting. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Navbar />
      <main className="flex-grow flex flex-col relative w-full overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}

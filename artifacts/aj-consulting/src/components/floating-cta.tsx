import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useToast } from "@/hooks/use-toast";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();
  const lb = t.leadBar;

  useEffect(() => {
    if (sessionStorage.getItem("floatingCtaDismissed")) {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      if (window.scrollY > 500) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("floatingCtaDismissed", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSubmitted(true);
    toast({
      title: t.popup.successTitle,
      description: t.popup.successMessage,
    });
    setTimeout(() => dismiss(), 2500);
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* violet top accent line */}
          <div className="h-[2px] bg-gradient-to-r from-primary via-primary/80 to-transparent" />

          <div className="bg-[#0D0F14]/95 backdrop-blur-md border-t border-white/5">
            <div className="container mx-auto px-4 md:px-12 py-3 md:py-4">
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
                {/* left: badge + title */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5 bg-primary/15 border border-primary/30 px-2.5 py-1">
                    <Zap className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-[9px] font-bold text-primary tracking-[0.25em] uppercase whitespace-nowrap">
                      {lb.eyebrow}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white/80 hidden md:block whitespace-nowrap">
                    {lb.title}
                  </p>
                </div>

                {/* divider */}
                <div className="hidden md:block w-px h-8 bg-white/10 shrink-0" />

                {/* form */}
                {submitted ? (
                  <p className="text-sm font-bold text-primary flex-1 text-center">
                    {t.popup.successTitle} — {t.popup.successMessage}
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-1 items-center gap-2 w-full md:w-auto">
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={lb.placeholder}
                      className="flex-1 min-w-0 h-10 bg-white/5 border border-white/10 text-white text-sm px-4 placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                    />
                    <button
                      type="submit"
                      className="group shrink-0 h-10 px-6 bg-primary hover:bg-primary/90 text-white text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 transition-colors whitespace-nowrap"
                    >
                      {lb.cta}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </form>
                )}

                {/* dismiss */}
                <button
                  onClick={dismiss}
                  className="shrink-0 text-white/30 hover:text-white/60 transition-colors p-1"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

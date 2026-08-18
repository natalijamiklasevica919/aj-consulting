import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  const p = t.popup;

  useEffect(() => {
    if (sessionStorage.getItem("leadPopupShown")) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("leadPopupShown", "1");
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSubmitted(true);
    setTimeout(() => close(), 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={close}
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg bg-[#0A0C10] border border-white/8 shadow-2xl pointer-events-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* violet top accent */}
              <div className="h-[3px] bg-gradient-to-r from-primary via-primary/70 to-transparent" />

              {/* glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 blur-[60px] pointer-events-none" />

              {/* close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 text-white/25 hover:text-white/60 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 md:p-10 relative z-10">
                {submitted ? (
                  /* success state */
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{p.successTitle}</h3>
                    <p className="text-white/50 text-sm">{p.successMessage}</p>
                  </div>
                ) : (
                  <>
                    {/* eyebrow */}
                    <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/8 px-3 py-1.5 mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[9px] font-bold text-primary tracking-[0.3em] uppercase">
                        {p.eyebrow}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-3 leading-tight">
                      {p.title}
                    </h2>
                    <p className="text-sm text-white/40 mb-8 leading-relaxed">
                      {p.subtitle}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={p.namePlaceholder}
                        className="w-full h-12 bg-white/5 border border-white/10 text-white text-sm px-4 placeholder:text-white/25 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder={p.contactPlaceholder}
                        required
                        className="w-full h-12 bg-white/5 border border-white/10 text-white text-sm px-4 placeholder:text-white/25 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <button
                        type="submit"
                        className="group w-full h-13 py-3.5 bg-primary hover:bg-primary/90 text-white text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-colors mt-2"
                      >
                        {p.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </form>

                    <button
                      onClick={close}
                      className="w-full text-center mt-4 text-[11px] text-white/25 hover:text-white/50 transition-colors"
                    >
                      {p.close}
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

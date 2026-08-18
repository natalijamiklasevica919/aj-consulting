import { useEffect, type ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Euro, Briefcase, Users, BarChart3, Globe2, FileText, Monitor, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const serviceIcons: ReactNode[] = [
  <Euro className="w-10 h-10 text-primary" />,
  <Briefcase className="w-10 h-10 text-primary" />,
  <Users className="w-10 h-10 text-primary" />,
  <BarChart3 className="w-10 h-10 text-primary" />,
  <Globe2 className="w-10 h-10 text-primary" />,
  <FileText className="w-10 h-10 text-primary" />,
  <Monitor className="w-10 h-10 text-primary" />,
  <PenTool className="w-10 h-10 text-primary" />,
];

const serviceIds = ["finance", "restructuring", "hr", "analytics", "development", "docs", "web-dev", "web-design"];

export default function Services() {
  const { t } = useLanguage();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <>
      <section className="pt-40 pb-20 bg-[#1C1F28] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-semibold mb-6"
          >
            {t.services.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full" defaultValue="finance">
            {t.services.items.map((service, i) => (
              <motion.div
                key={serviceIds[i]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={serviceIds[i]} id={serviceIds[i]}>
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-6 text-left">
                      <div className="p-4 bg-gray-50 rounded-lg group-hover:bg-primary/5 transition-colors">
                        {serviceIcons[i]}
                      </div>
                      <span>{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4 pl-24 pr-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

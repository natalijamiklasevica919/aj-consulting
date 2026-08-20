import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  return (
    <>
      <section className="pt-40 pb-20 bg-[#1C1F28] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
              {contact.hero.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              {contact.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-serif font-semibold text-secondary mb-8">
                  {contact.info.title}
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">{contact.info.office.label}</div>
                      <p style={{ whiteSpace: "pre-line" }}>{contact.info.office.value}</p>
                    </div>
                  </div>
                   <a href={`tel:${contact.info.phone.value.replace(/\s/g, "")}`} className="flex items-start gap-4 text-gray-600 hover:text-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">{contact.info.phone.label}</div>
                      <p>{contact.info.phone.value}</p>
                    </div>
                   </a>
                   <a href="mailto:info@aj-consulting.eu" className="flex items-start gap-4 text-gray-600 hover:text-primary transition-colors">
                    <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">{contact.info.email.label}</div>
                      <p>info@aj-consulting.eu</p>
                    </div>
                   </a>
                </div>
              </div>

              <div className="p-8 bg-gray-50 border border-gray-100">
                <h4 className="font-serif text-xl font-bold text-secondary mb-4">
                  {contact.hours.title}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>{contact.hours.weekdays}</span>
                    <span className="font-medium">{contact.hours.weekdaysTime}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{contact.hours.weekend}</span>
                    <span className="font-medium text-gray-400">{contact.hours.weekendTime}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="h-full bg-[#0D0F14] p-8 md:p-12 shadow-2xl shadow-gray-200/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[90px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="h-[2px] w-12 bg-primary mb-8" />
                  <h3 className="text-3xl font-serif font-semibold text-white mb-5">
                    {contact.hero.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed mb-10">
                    {contact.hero.subtitle}
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:info@aj-consulting.eu" className="flex items-center gap-3 border border-white/10 px-5 py-4 text-sm text-white/70 hover:border-primary/50 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                      info@aj-consulting.eu
                    </a>
                    <a href={`tel:${contact.info.phone.value.replace(/\s/g, "")}`} className="flex items-center gap-3 border border-white/10 px-5 py-4 text-sm text-white/70 hover:border-primary/50 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                      {contact.info.phone.value}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

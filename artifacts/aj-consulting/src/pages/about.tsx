import { motion } from "framer-motion";
import teamPhoto from "@assets/generated_images/team-meeting.jpg";
import officePhoto from "@assets/generated_images/office-workspace.jpg";
import { useLanguage } from "@/contexts/language-context";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <>
      <section className="pt-40 pb-20 bg-[#1C1F28] text-white overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-8">
              {about.hero.title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed max-w-3xl">
              {about.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-serif font-semibold text-secondary mb-6">
                {about.experience.title}
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>{about.experience.p1}</p>
                <p>{about.experience.p2}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 aspect-[4/3] overflow-hidden"
            >
              <img
                src={teamPhoto}
                alt="AJ Group Team"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={officePhoto}
                alt="AJ Group Office"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-semibold text-secondary mb-6">
                {about.individual.title}
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>{about.individual.p1}</p>
                <p>{about.individual.p2}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#14161C] text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-12">{about.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {about.values.items.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10"
              >
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

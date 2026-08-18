import { Link } from "wouter";
import { ArrowRight, BarChart3, Users, Globe2, Briefcase, FileText, Monitor, PenTool, Euro } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/hero-bg.jpg";

const services = [
  {
    icon: <Euro className="w-8 h-8" />,
    title: "Финансы",
    desc: "Оценка и оптимизация финансовых потоков, планирование.",
    anchor: "finance",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Реорганизация",
    desc: "Холдинговые структуры, ISO, оптимизация производства.",
    anchor: "restructuring",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Персонал и обучение",
    desc: "Подбор персонала, корпоративные тренинги.",
    anchor: "hr",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Аналитика",
    desc: "Анализ рынка, оценка деятельности компании.",
    anchor: "analytics",
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Развитие бизнеса",
    desc: "Планы развития, выход на новые рынки ЕС и СНГ.",
    anchor: "development",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Документация",
    desc: "Договоры, лицензии, оптимизация документооборота.",
    anchor: "docs",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Веб-разработка",
    desc: "Сайты любой сложности, подключение сервисов.",
    anchor: "web-dev",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Веб-дизайн",
    desc: "Дизайн сайтов, логотипы, ведение соцсетей.",
    anchor: "web-design",
  },
];

const stats = [
  { value: "10+", label: "Лет опыта" },
  { value: "100+", label: "Клиентов" },
  { value: "8", label: "Направлений" },
  { value: "ЕС & СНГ", label: "Рынки" },
];

const partners = ["LTRK", "Redmond", "Vlavi", "Kentaro"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 bg-[#1C1F28] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F28] via-transparent to-transparent z-10" />
          <img
            src={heroBg}
            alt="Corporate background"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white leading-[1.1] tracking-tight mb-8"
            >
              Ваш путь к успеху начинается с правильного партнёра
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-2xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed"
            >
              Более 10 лет опыта. Реальные результаты. Долгосрочное партнёрство для амбициозного бизнеса.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="group inline-flex items-center justify-center w-full sm:w-auto bg-primary hover:bg-primary/90 text-white gap-2 font-bold tracking-widest uppercase rounded-none h-14 px-10 text-base transition-colors">
                  Начать сотрудничество
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black font-bold tracking-widest uppercase rounded-none h-14 px-10 text-base transition-colors">
                  Наши услуги
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-6xl font-serif font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-secondary mb-6 leading-tight">
                Комплексные решения для бизнеса
              </h2>
              <p className="text-lg text-gray-600">
                Мы берем на себя управление критическими процессами, чтобы вы могли сфокусироваться на глобальном видении.
              </p>
            </div>
            <Link href="/services" className="group shrink-0 hidden md:flex items-center text-primary font-bold tracking-widest uppercase">
              Все услуги <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/services#${svc.anchor}`} className="block h-full group">
                  <div className="bg-white p-8 h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                    <div className="text-gray-400 group-hover:text-primary transition-colors mb-6">
                      {svc.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all text-primary">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden">
             <Link href="/services" className="group flex items-center text-primary font-bold tracking-widest uppercase justify-center">
              Все услуги <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* PREMIUM SECTION */}
      <section className="py-32 bg-[#14161C] relative text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-premium/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="inline-block px-4 py-1.5 border border-premium/30 bg-premium/10 text-premium text-xs font-bold tracking-widest uppercase mb-8">
                Эксклюзив
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-semibold text-white mb-6">
                <span className="text-premium">PREMIUM</span> — Гарантированный рост бизнеса
              </h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
                Флагманская услуга глубокой трансформации. Мы не просто даем советы — мы внедряем алгоритм, который неизбежно ведет к масштабированию и увеличению прибыли.
              </p>
              
              <Link href="/contact" className="group inline-flex items-center justify-center bg-premium hover:bg-premium/90 text-white rounded-none border-0 tracking-widest uppercase h-14 px-10 text-base transition-colors">
                  Запросить анализ
              </Link>
              <p className="text-xs text-gray-600 mt-6 max-w-md italic">
                * Услуга предоставляется только после полного анализа и при условии одобрения всех изменений владельцем бизнеса.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-premium/50 via-premium/20 to-transparent" />
              <div className="space-y-12">
                {[
                  "Вводная консультация",
                  "Оценка текущей ситуации",
                  "Определение целевых показателей",
                  "Разработка плана достижения",
                  "Реализация плана",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-8 relative z-10 group">
                    <div className="w-12 h-12 rounded-none bg-[#1C1F28] border-2 border-premium flex items-center justify-center text-premium font-serif font-bold text-xl shrink-0 group-hover:bg-premium group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-premium transition-colors">{step}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-secondary mb-8">
              О нас
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Наша команда состоит из высококвалифицированных специалистов с более чем 10-летним опытом в различных отраслях. Мы ориентированы на результат и долгосрочное сотрудничество. Каждый клиент получает индивидуальный подход и чёткое понимание того, что необходимо внедрить в его бизнес.
            </p>
            <Link href="/about" className="inline-flex items-center justify-center border border-secondary text-secondary hover:bg-secondary hover:text-white tracking-widest uppercase h-14 px-10 text-base transition-colors rounded-none">
                Подробнее о команде
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Наши партнёры</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            {partners.map((partner) => (
              <div key={partner} className="text-2xl font-serif font-bold text-secondary uppercase tracking-widest">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif font-semibold mb-8">
            Готовы начать?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Оставьте заявку, и наш управляющий партнер свяжется с вами для обсуждения задач вашего бизнеса.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-100 rounded-none h-16 px-12 text-lg font-bold tracking-widest uppercase transition-colors">
              Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
}

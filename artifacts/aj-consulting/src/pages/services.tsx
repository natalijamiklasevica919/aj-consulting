import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Euro, Briefcase, Users, BarChart3, Globe2, FileText, Monitor, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    id: "finance",
    title: "Финансы",
    icon: <Euro className="w-10 h-10 text-primary" />,
    items: [
      "Оценка и оптимизация финансовых потоков",
      "Небанковское кредитование",
      "Страхование бизнеса",
      "Финансовое планирование и бюджетирование"
    ]
  },
  {
    id: "restructuring",
    title: "Реорганизация",
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    items: [
      "Создание холдинговых структур",
      "ISO-сертификация и стандарты качества",
      "Оптимизация производственных процессов",
      "Внедрение HACCP",
      "Вывод бизнеса из серой зоны",
      "Внедрение CRM систем",
      "Масштабирование бизнеса"
    ]
  },
  {
    id: "hr",
    title: "Персонал и обучение",
    icon: <Users className="w-10 h-10 text-primary" />,
    items: [
      "Профессиональный подбор персонала",
      "Обучение и повышение квалификации сотрудников",
      "Организация корпоративных тренингов"
    ]
  },
  {
    id: "analytics",
    title: "Аналитика",
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    items: [
      "Глубокий анализ рынка",
      "Оценка и оптимизация текущей деятельности компании",
      "Анализ и оптимизация торгового ассортимента"
    ]
  },
  {
    id: "development",
    title: "Развитие бизнеса",
    icon: <Globe2 className="w-10 h-10 text-primary" />,
    items: [
      "Разработка стратегических планов развития",
      "Выход на новые рынки (ЕС, СНГ)",
      "Развитие и монетизация клиентской базы",
      "Стратегический маркетинг и логистика",
      "Комплексное продвижение в интернете"
    ]
  },
  {
    id: "docs",
    title: "Документация",
    icon: <FileText className="w-10 h-10 text-primary" />,
    items: [
      "Составление юридически грамотных договоров",
      "Помощь в получении лицензий и сертификатов",
      "Оптимизация документооборота по международным стандартам"
    ]
  },
  {
    id: "web-dev",
    title: "Веб-разработка",
    icon: <Monitor className="w-10 h-10 text-primary" />,
    items: [
      "Надежный хостинг для бизнеса",
      "Разработка сайтов любой сложности",
      "Программирование нестандартных решений",
      "Интеграция и подключение сторонних сервисов"
    ]
  },
  {
    id: "web-design",
    title: "Веб-дизайн",
    icon: <PenTool className="w-10 h-10 text-primary" />,
    items: [
      "Создание рекламных баннеров и буклетов",
      "Разработка логотипов и фирменного стиля",
      "Современный UI/UX дизайн сайтов",
      "Визуальное ведение всех соцсетей"
    ]
  }
];

export default function Services() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-40 pb-20 bg-[#1C1F28] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-semibold mb-6"
          >
            Наши Услуги
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Комплексный консалтинг для решения задач любой сложности. От финансового аудита до полного перестроения бизнес-процессов.
          </motion.p>
        </div>
      </section>

      {/* SERVICES ACCORDION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full" defaultValue="finance">
            {serviceDetails.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem value={service.id} id={service.id}>
                  <AccordionTrigger className="hover:no-underline group">
                    <div className="flex items-center gap-6 text-left">
                      <div className="p-4 bg-gray-50 rounded-lg group-hover:bg-primary/5 transition-colors">
                        {service.icon}
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

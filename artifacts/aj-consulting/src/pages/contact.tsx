import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Наш менеджер свяжется с вами в ближайшее время.",
    });
  };

  return (
    <>
      <section className="pt-40 pb-20 bg-[#1C1F28] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Готовы обсудить ваши задачи? Оставьте заявку, и мы организуем вводную консультацию.
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
                  Контактная информация
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Офис</div>
                      <p>Латвия, Европа<br/>Рига, бизнес-центр</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-gray-600">
                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Телефон</div>
                      <p>+371 XX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-gray-600">
                    <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-secondary mb-1">Email</div>
                      <p>info@aj-consulting.eu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 border border-gray-100">
                <h4 className="font-serif text-xl font-bold text-secondary mb-4">
                  Время работы
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Пн - Пт</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Сб - Вс</span>
                    <span className="font-medium text-gray-400">Выходной</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-2xl font-serif font-semibold text-secondary mb-8">
                  Отправить запрос
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">Имя</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">Компания</label>
                      <Input placeholder="Название компании" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">Email</label>
                      <Input type="email" placeholder="example@domain.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">Телефон</label>
                      <Input type="tel" placeholder="+371" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">Интересующая услуга</label>
                    <select className="flex h-12 w-full border-b border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-primary">
                      <option value="">Выберите направление...</option>
                      <option value="premium">PREMIUM (Эксклюзив)</option>
                      <option value="finance">Финансы</option>
                      <option value="restructuring">Реорганизация</option>
                      <option value="hr">Персонал и обучение</option>
                      <option value="analytics">Аналитика</option>
                      <option value="development">Развитие бизнеса</option>
                      <option value="docs">Документация</option>
                      <option value="web">Веб-разработка / Дизайн</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 uppercase tracking-wide">Сообщение</label>
                    <Textarea placeholder="Опишите вашу задачу вкратце..." required />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 rounded-none font-bold tracking-widest uppercase mt-4">
                    Отправить
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export type Lang = 'ru' | 'en' | 'lv';

export const translations = {
  ru: {
    nav: {
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
      cta: "Сотрудничество",
    },
    home: {
      hero: {
        headline: "Ваш путь к успеху начинается с правильного партнёра",
        subline: "Более 10 лет опыта. Реальные результаты. Долгосрочное партнёрство для амбициозного бизнеса.",
        cta: "Начать сотрудничество",
        secondaryCta: "Наши услуги",
      },
      stats: [
        { value: "10+", label: "Лет опыта" },
        { value: "100+", label: "Клиентов" },
        { value: "8", label: "Направлений" },
        { value: "ЕС & СНГ", label: "Рынки" },
      ],
      servicesSection: {
        title: "Комплексные решения для бизнеса",
        subtitle: "Мы берем на себя управление критическими процессами, чтобы вы могли сфокусироваться на глобальном видении.",
        viewAll: "Все услуги",
      },
      services: [
        { title: "Финансы", desc: "Оценка и оптимизация финансовых потоков, факторинг, планирование." },
        { title: "Реорганизация", desc: "Холдинговые структуры, ISO, оптимизация производства." },
        { title: "Персонал и обучение", desc: "Подбор персонала, корпоративные тренинги." },
        { title: "Аналитика", desc: "Анализ рынка, оценка деятельности компании." },
        { title: "Развитие бизнеса", desc: "Планы развития, выход на новые рынки ЕС и СНГ." },
        { title: "Документация", desc: "Договоры, лицензии, оптимизация документооборота." },
        { title: "Веб-разработка", desc: "Сайты любой сложности, подключение сервисов." },
        { title: "Веб-дизайн", desc: "Дизайн сайтов, логотипы, ведение соцсетей." },
      ],
      premium: {
        badge: "Эксклюзив",
        title: "PREMIUM — Гарантированный рост бизнеса",
        description: "Флагманская услуга глубокой трансформации. Мы не просто даем советы — мы внедряем алгоритм, который неизбежно ведет к масштабированию и увеличению прибыли.",
        cta: "Запросить анализ",
        steps: ["Вводная консультация", "Оценка текущей ситуации", "Определение целевых показателей", "Разработка плана достижения", "Реализация плана"],
        note: "* Услуга предоставляется только после полного анализа и при условии одобрения всех изменений владельцем бизнеса.",
      },
      testimonials: {
        title: "Что говорят клиенты",
        items: [
          {
            quote: "За 6 месяцев работы с AJ Group выручка выросла на 40%. Они реструктурировали финансовую модель и помогли выйти на европейский рынок — профессионально и без лишних слов.",
            name: "Александр М.",
            role: "CEO",
            company: "Redmond Baltic",
          },
          {
            quote: "Реорганизация нашей холдинговой структуры — выполнено в срок, с измеримым финансовым результатом. Команда глубоко погружается в задачу и не выдаёт пустых рекомендаций.",
            name: "Елена К.",
            role: "Финансовый директор",
            company: "VLAVI Group",
          },
          {
            quote: "Стратегия выхода на рынок СНГ дала результат уже в первом квартале: 12 новых контрактов, три новых региона. Работать с ними — значит работать на результат.",
            name: "Мартиньш Д.",
            role: "Совладелец",
            company: "Kentaro",
          },
        ],
      },
      about: {
        title: "О нас",
        text: "Наша команда состоит из высококвалифицированных специалистов с более чем 10-летним опытом в различных отраслях. Мы ориентированы на результат и долгосрочное сотрудничество. Каждый клиент получает индивидуальный подход и чёткое понимание того, что необходимо внедрить в его бизнес.",
        cta: "Подробнее о команде",
      },
      partners: { title: "Наши партнёры" },
      finalCta: {
        title: "Готовы начать?",
        subtitle: "Свяжитесь с нами удобным способом, чтобы обсудить задачи вашего бизнеса.",
        cta: "Связаться с нами",
      },
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Комплексный консалтинг для решения задач любой сложности. От финансового аудита до полного перестроения бизнес-процессов.",
      items: [
        { title: "Финансы", items: ["Оценка и оптимизация финансовых потоков", "Факторинг", "Небанковское кредитование", "Страхование бизнеса", "Финансовое планирование и бюджетирование"] },
        { title: "Реорганизация", items: ["Создание холдинговых структур", "ISO-сертификация и стандарты качества", "Оптимизация производственных процессов", "Внедрение HACCP", "Вывод бизнеса из серой зоны", "Внедрение CRM систем", "Масштабирование бизнеса"] },
        { title: "Персонал и обучение", items: ["Профессиональный подбор персонала", "Обучение и повышение квалификации сотрудников", "Организация корпоративных тренингов"] },
        { title: "Аналитика", items: ["Глубокий анализ рынка", "Оценка и оптимизация текущей деятельности компании", "Анализ и оптимизация торгового ассортимента"] },
        { title: "Развитие бизнеса", items: ["Разработка стратегических планов развития", "Выход на новые рынки (ЕС, СНГ)", "Развитие и монетизация клиентской базы", "Стратегический маркетинг и логистика", "Комплексное продвижение в интернете"] },
        { title: "Документация", items: ["Составление юридически грамотных договоров", "Помощь в получении лицензий и сертификатов", "Оптимизация документооборота по международным стандартам"] },
        { title: "Веб-разработка", items: ["Надежный хостинг для бизнеса", "Разработка сайтов любой сложности", "Программирование нестандартных решений", "Интеграция и подключение сторонних сервисов"] },
        { title: "Веб-дизайн", items: ["Создание рекламных баннеров и буклетов", "Разработка логотипов и фирменного стиля", "Современный UI/UX дизайн сайтов", "Визуальное ведение всех соцсетей"] },
      ],
    },
    about: {
      hero: { title: "О нас", subtitle: "Мы не просто консультируем. Мы становимся частью вашей команды, чтобы вывести бизнес на новый уровень." },
      experience: {
        title: "Опыт, проверенный временем",
        p1: "Наша команда состоит из высококвалифицированных специалистов с более чем 10-летним опытом в различных отраслях. Мы прошли через десятки кризисов и точек роста вместе с нашими клиентами.",
        p2: "Мы ориентированы на результат и долгосрочное сотрудничество. Для нас каждый проект — это не просто контракт, а партнерство, основанное на доверии и измеримых финансовых результатах.",
      },
      individual: {
        title: "Индивидуальный подход",
        p1: "Мы понимаем, что шаблонные решения работают только в теории. На практике каждый бизнес уникален. Каждый клиент получает индивидуальный подход и чёткое понимание того, что необходимо внедрить в его бизнес.",
        p2: "Наши специалисты глубоко погружаются в операционную деятельность, анализируют слабые места и разрабатывают стратегию, которая приносит реальную прибыль, а не красивые отчеты.",
      },
      values: {
        title: "Наши Ценности",
        items: [
          { title: "Ответственность", desc: "Мы отвечаем за каждое внедренное решение и его финансовый результат." },
          { title: "Конфиденциальность", desc: "Данные наших клиентов защищены строжайшими стандартами безопасности (NDA)." },
          { title: "Результативность", desc: "Мы измеряем успех не часами работы, а ростом показателей вашего бизнеса." },
        ],
      },
    },
    contact: {
      hero: { title: "Свяжитесь с нами", subtitle: "Готовы обсудить ваши задачи? Напишите или позвоните нам удобным для вас способом." },
      info: {
        title: "Контактная информация",
        office: { label: "Офис", value: "Латвия, Европа\nРига, бизнес-центр" },
        phone: { label: "Телефон", value: "+371 XX XXX XXX" },
        email: { label: "Email" },
      },
      hours: { title: "Время работы", weekdays: "Пн – Пт", weekdaysTime: "09:00 – 18:00", weekend: "Сб – Вс", weekendTime: "Выходной" },
    },
    footer: {
      tagline: "Премиальный консалтинг для бизнеса в Латвии, ЕС и СНГ. Ваш долгосрочный партнёр в достижении реальных результатов.",
      services: { title: "Услуги" },
      company: { title: "Компания" },
      contact: { title: "Связь" },
      copyright: "AJ Group. Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      serviceLinks: ["Финансы", "Реорганизация", "Персонал", "Аналитика"],
      about: "О нас",
    },
  },

  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Partner With Us",
    },
    home: {
      hero: {
        headline: "Your Path to Success Starts with the Right Partner",
        subline: "Over 10 years of experience. Real results. Long-term partnership for ambitious business.",
        cta: "Start Cooperation",
        secondaryCta: "Our Services",
      },
      stats: [
        { value: "10+", label: "Years of Experience" },
        { value: "100+", label: "Clients" },
        { value: "8", label: "Practice Areas" },
        { value: "EU & CIS", label: "Markets" },
      ],
      servicesSection: {
        title: "Comprehensive Business Solutions",
        subtitle: "We take charge of critical processes so you can focus on your strategic vision.",
        viewAll: "All Services",
      },
      services: [
        { title: "Finance", desc: "Cash flow assessment and optimization, factoring, financial planning." },
        { title: "Reorganization", desc: "Holding structures, ISO certification, production optimization." },
        { title: "HR & Training", desc: "Recruitment, corporate training programs." },
        { title: "Analytics", desc: "Market analysis, business performance assessment." },
        { title: "Business Development", desc: "Growth plans, EU and CIS market entry strategies." },
        { title: "Documentation", desc: "Contracts, licenses, international workflow optimization." },
        { title: "Web Development", desc: "Websites of any complexity, service integrations." },
        { title: "Web Design", desc: "Website design, logos, social media management." },
      ],
      premium: {
        badge: "Exclusive",
        title: "PREMIUM — Guaranteed Business Growth",
        description: "Our flagship transformation service. We don't just give advice — we implement an algorithm that inevitably leads to scaling and increased profit.",
        cta: "Request Analysis",
        steps: ["Initial Consultation", "Current Situation Assessment", "Setting Target Indicators", "Achievement Plan Development", "Plan Implementation"],
        note: "* The service is provided only after a complete analysis and subject to the client's approval of all proposed changes.",
      },
      testimonials: {
        title: "What Clients Say",
        items: [
          {
            quote: "After 6 months with AJ Group, revenue grew by 40%. They restructured our financial model and guided us into the European market — professionally and without wasted words.",
            name: "Alexander M.",
            role: "CEO",
            company: "Redmond Baltic",
          },
          {
            quote: "The reorganization of our holding structure was delivered on time with measurable financial results. The team dives deep and doesn't hand out empty recommendations.",
            name: "Elena K.",
            role: "CFO",
            company: "VLAVI Group",
          },
          {
            quote: "Their CIS market entry strategy delivered in the first quarter: 12 new contracts, three new regions. Working with them means working for results.",
            name: "Martins D.",
            role: "Co-Owner",
            company: "Kentaro",
          },
        ],
      },
      about: {
        title: "About Us",
        text: "Our team consists of highly qualified specialists with over 10 years of experience across various industries. We are results-oriented and focused on long-term cooperation. Every client receives a tailored approach and a clear understanding of what needs to be implemented in their business.",
        cta: "Learn More About Our Team",
      },
      partners: { title: "Our Partners" },
      finalCta: {
        title: "Ready to Get Started?",
        subtitle: "Contact us using your preferred channel to discuss your business objectives.",
        cta: "Contact Us",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive consulting for challenges of any complexity. From financial audits to complete business process transformation.",
      items: [
        { title: "Finance", items: ["Cash flow assessment and optimization", "Factoring", "Non-bank lending attraction", "Business insurance", "Financial planning and budgeting"] },
        { title: "Reorganization", items: ["Holding structure creation", "ISO certification and quality standards", "Production process optimization", "HACCP implementation", "Business legalization (grey zone exit)", "CRM system implementation", "Business scaling"] },
        { title: "HR & Training", items: ["Professional staff recruitment", "Employee training and upskilling", "Corporate training programs"] },
        { title: "Analytics", items: ["In-depth market analysis", "Business performance assessment and optimization", "Sales assortment analysis and optimization"] },
        { title: "Business Development", items: ["Strategic development plans", "New market entry (EU, CIS)", "Client base development and monetization", "Strategic marketing and logistics", "Comprehensive digital promotion"] },
        { title: "Documentation", items: ["Legally sound contract drafting", "License and certificate procurement", "Document management optimization to international standards"] },
        { title: "Web Development", items: ["Reliable business hosting", "Website development of any complexity", "Custom programming solutions", "Third-party service integration"] },
        { title: "Web Design", items: ["Advertising banners and brochures", "Logo and corporate identity development", "Modern UI/UX website design", "Social media visual management"] },
      ],
    },
    about: {
      hero: { title: "About Us", subtitle: "We don't just consult. We become part of your team to take your business to the next level." },
      experience: {
        title: "Experience Proven by Time",
        p1: "Our team consists of highly qualified specialists with over 10 years of experience across various industries. We have navigated dozens of crises and growth milestones alongside our clients.",
        p2: "We are results-oriented and focused on long-term cooperation. For us, every project is not just a contract, but a partnership built on trust and measurable financial outcomes.",
      },
      individual: {
        title: "Tailored Approach",
        p1: "We understand that template solutions only work in theory. In practice, every business is unique. Each client receives a tailored approach and a clear understanding of what needs to be implemented.",
        p2: "Our specialists deeply immerse themselves in operational activities, analyze weaknesses, and develop strategies that deliver real profit, not just elegant reports.",
      },
      values: {
        title: "Our Values",
        items: [
          { title: "Accountability", desc: "We take responsibility for every implemented solution and its financial outcome." },
          { title: "Confidentiality", desc: "Client data is protected by the strictest security standards (NDA)." },
          { title: "Results", desc: "We measure success not by hours worked, but by the growth of your business metrics." },
        ],
      },
    },
    contact: {
      hero: { title: "Contact Us", subtitle: "Ready to discuss your challenges? Email or call our team using your preferred channel." },
      info: {
        title: "Contact Information",
        office: { label: "Office", value: "Latvia, Europe\nRiga, Business Center" },
        phone: { label: "Phone", value: "+371 XX XXX XXX" },
        email: { label: "Email" },
      },
      hours: { title: "Working Hours", weekdays: "Mon – Fri", weekdaysTime: "09:00 – 18:00", weekend: "Sat – Sun", weekendTime: "Closed" },
    },
    footer: {
      tagline: "Premium business consulting in Latvia, EU and CIS. Your long-term partner in achieving real results.",
      services: { title: "Services" },
      company: { title: "Company" },
      contact: { title: "Contact" },
      copyright: "AJ Group. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      serviceLinks: ["Finance", "Reorganization", "HR & Training", "Analytics"],
      about: "About Us",
    },
  },

  lv: {
    nav: {
      services: "Pakalpojumi",
      about: "Par mums",
      contact: "Kontakti",
      cta: "Sadarbība",
    },
    home: {
      hero: {
        headline: "Ceļš uz panākumiem sākas ar pareizā partnera izvēli",
        subline: "Vairāk nekā 10 gadu pieredze. Reāli rezultāti. Ilgtermiņa partnerattiecības ambiciozam biznesam.",
        cta: "Sākt sadarbību",
        secondaryCta: "Mūsu pakalpojumi",
      },
      stats: [
        { value: "10+", label: "Gadi pieredzes" },
        { value: "100+", label: "Klienti" },
        { value: "8", label: "Virzieni" },
        { value: "ES & NVS", label: "Tirgi" },
      ],
      servicesSection: {
        title: "Visaptveroši biznesa risinājumi",
        subtitle: "Mēs uzņemamies kritisko procesu vadību, lai jūs varētu koncentrēties uz stratēģisko vīziju.",
        viewAll: "Visi pakalpojumi",
      },
      services: [
        { title: "Finanses", desc: "Finanšu plūsmu novērtēšana un optimizācija, faktorings, plānošana." },
        { title: "Reorganizācija", desc: "Holdinga struktūras, ISO, ražošanas optimizācija." },
        { title: "Personāls un apmācības", desc: "Personāla atlase, korporatīvās apmācības." },
        { title: "Analītika", desc: "Tirgus analīze, uzņēmuma darbības novērtēšana." },
        { title: "Biznesa attīstība", desc: "Attīstības plāni, ieiešana ES un NVS tirgos." },
        { title: "Dokumentācija", desc: "Līgumi, licences, dokumentu aprites optimizācija." },
        { title: "Web izstrāde", desc: "Mājaslapas jebkurai sarežģītībai, servisu pieslēgšana." },
        { title: "Web dizains", desc: "Mājaslapu dizains, logotipi, sociālo tīklu vadīšana." },
      ],
      premium: {
        badge: "Ekskluzīvs",
        title: "PREMIUM — Garantēta biznesa izaugsme",
        description: "Mūsu vadošais transformācijas pakalpojums. Mēs ne tikai dodam padomus — mēs ievieš algoritmu, kas neizbēgami noved pie mērogošanas un peļņas pieauguma.",
        cta: "Pieprasīt analīzi",
        steps: ["Ievada konsultācija", "Pašreizējās situācijas novērtējums", "Mērķa rādītāju noteikšana", "Sasniegšanas plāna izstrāde", "Plāna īstenošana"],
        note: "* Pakalpojums tiek sniegts tikai pēc pilnīgas analīzes un ar nosacījumu, ka klients apstiprina visas ierosinātās izmaiņas.",
      },
      testimonials: {
        title: "Ko saka klienti",
        items: [
          {
            quote: "6 mēnešu laikā kopā ar AJ Group ieņēmumi pieauga par 40%. Viņi restrukturizēja finanšu modeli un palīdzēja ienākt Eiropas tirgū — profesionāli un bez liekiem vārdiem.",
            name: "Aleksandrs M.",
            role: "CEO",
            company: "Redmond Baltic",
          },
          {
            quote: "Mūsu holdinga struktūras reorganizācija tika pabeigta laikā ar izmērāmiem finanšu rezultātiem. Komanda dziļi iesaistās un nesniedz tukšus ieteikumus.",
            name: "Jeļena K.",
            role: "Finanšu direktore",
            company: "VLAVI Group",
          },
          {
            quote: "Viņu NVS tirgus ienākšanas stratēģija deva rezultātu jau pirmajā ceturksnī: 12 jauni līgumi, trīs jauni reģioni. Strādāt ar viņiem nozīmē strādāt uz rezultātu.",
            name: "Mārtiņš D.",
            role: "Līdzīpašnieks",
            company: "Kentaro",
          },
        ],
      },
      about: {
        title: "Par mums",
        text: "Mūsu komandu veido augsti kvalificēti speciālisti ar vairāk nekā 10 gadu pieredzi dažādās nozarēs. Mēs esam orientēti uz rezultātu un ilgtermiņa sadarbību. Katrs klients saņem individuālu pieeju un skaidru izpratni par to, kas jāievieš viņu biznesā.",
        cta: "Uzzināt vairāk par komandu",
      },
      partners: { title: "Mūsu partneri" },
      finalCta: {
        title: "Gatavi sākt?",
        subtitle: "Sazinieties ar mums sev ērtā veidā, lai apspriestu jūsu biznesa uzdevumus.",
        cta: "Sazināties ar mums",
      },
    },
    services: {
      title: "Mūsu pakalpojumi",
      subtitle: "Visaptverošs konsultācijas pakalpojums jebkuras sarežģītības uzdevumiem. No finanšu audita līdz pilnīgai biznesa procesu pārstrukturēšanai.",
      items: [
        { title: "Finanses", items: ["Finanšu plūsmu novērtēšana un optimizācija", "Faktorings", "Nebanku kreditēšanas piesaiste", "Biznesa apdrošināšana", "Finanšu plānošana un budžetēšana"] },
        { title: "Reorganizācija", items: ["Holdinga struktūru veidošana", "ISO sertifikācija un kvalitātes standarti", "Ražošanas procesu optimizācija", "HACCP ieviešana", "Uzņēmuma izvešana no pelēkās zonas", "CRM sistēmu ieviešana", "Biznesa mērogošana"] },
        { title: "Personāls un apmācības", items: ["Profesionāla personāla atlase", "Darbinieku apmācība un kvalifikācijas paaugstināšana", "Korporatīvo apmācību organizēšana"] },
        { title: "Analītika", items: ["Padziļināta tirgus analīze", "Uzņēmuma darbības novērtēšana un optimizācija", "Tirdzniecības sortimenta analīze un optimizācija"] },
        { title: "Biznesa attīstība", items: ["Stratēģisko attīstības plānu izstrāde", "Ieiešana jaunos tirgos (ES, NVS)", "Klientu bāzes attīstība un monetizācija", "Stratēģiskais mārketings un loģistika", "Visaptverošā interneta veicināšana"] },
        { title: "Dokumentācija", items: ["Juridiski korektu līgumu sagatavošana", "Palīdzība licenču un sertifikātu saņemšanā", "Dokumentu aprites optimizācija atbilstoši starptautiskajiem standartiem"] },
        { title: "Web izstrāde", items: ["Uzticams biznesam paredzēts hostings", "Mājaslapu izstrāde jebkurai sarežģītībai", "Nestandarta risinājumu programmēšana", "Trešo pušu servisu integrācija"] },
        { title: "Web dizains", items: ["Reklāmas banneru un bukletu izveide", "Logotipu un korporatīvā stila izstrāde", "Moderns UI/UX mājaslapu dizains", "Vizuāla visu sociālo tīklu vadīšana"] },
      ],
    },
    about: {
      hero: { title: "Par mums", subtitle: "Mēs ne tikai konsultējam. Mēs kļūstam par daļu no jūsu komandas, lai palīdzētu biznesam sasniegt jaunu līmeni." },
      experience: {
        title: "Pierādīta pieredze",
        p1: "Mūsu komandu veido augsti kvalificēti speciālisti ar vairāk nekā 10 gadu pieredzi dažādās nozarēs. Mēs esam izgājuši cauri desmitiem krīžu un izaugsmes punktu kopā ar mūsu klientiem.",
        p2: "Mēs esam orientēti uz rezultātu un ilgtermiņa sadarbību. Katrs projekts mums ir ne tikai līgums, bet partnerattiecības, kas balstītas uz uzticēšanos un izmērāmiem finansiāliem rezultātiem.",
      },
      individual: {
        title: "Individuāla pieeja",
        p1: "Mēs saprotam, ka veidņu risinājumi darbojas tikai teorijā. Praksē katrs bizness ir unikāls. Katrs klients saņem individuālu pieeju un skaidru izpratni par to, kas jāievieš.",
        p2: "Mūsu speciālisti dziļi iedziļinās operacionālajā darbībā, analizē vājās vietas un izstrādā stratēģiju, kas nes reālu peļņu, nevis skaistus pārskatus.",
      },
      values: {
        title: "Mūsu vērtības",
        items: [
          { title: "Atbildība", desc: "Mēs atbildam par katru ieviesto risinājumu un tā finansiālo rezultātu." },
          { title: "Konfidencialitāte", desc: "Klientu dati ir aizsargāti ar visstingrākajiem drošības standartiem (NDA)." },
          { title: "Rezultativitāte", desc: "Mēs mēram panākumus nevis ar nostrādātajām stundām, bet ar jūsu biznesa rādītāju pieaugumu." },
        ],
      },
    },
    contact: {
      hero: { title: "Sazināties ar mums", subtitle: "Gatavi apspriest jūsu uzdevumus? Rakstiet vai zvaniet mūsu komandai sev ērtā veidā." },
      info: {
        title: "Kontaktinformācija",
        office: { label: "Birojs", value: "Latvija, Eiropa\nRīga, biznesa centrs" },
        phone: { label: "Tālrunis", value: "+371 XX XXX XXX" },
        email: { label: "E-pasts" },
      },
      hours: { title: "Darba laiks", weekdays: "P – Pk", weekdaysTime: "09:00 – 18:00", weekend: "Se – Sv", weekendTime: "Slēgts" },
    },
    footer: {
      tagline: "Premium biznesa konsultācijas Latvijā, ES un NVS. Jūsu ilgtermiņa partneris reālu rezultātu sasniegšanā.",
      services: { title: "Pakalpojumi" },
      company: { title: "Uzņēmums" },
      contact: { title: "Kontakti" },
      copyright: "AJ Group. Visas tiesības aizsargātas.",
      privacy: "Privātuma politika",
      terms: "Lietošanas noteikumi",
      serviceLinks: ["Finanses", "Reorganizācija", "Personāls", "Analītika"],
      about: "Par mums",
    },
  },
} as const;

export type Translations = typeof translations.ru;

import { 
  Code, PieChart, Search, Target, Megaphone, LineChart, 
  Layers, Database, Globe, BarChart4, Settings, Users 
} from 'lucide-react';

export const webDevelopmentServices = [
  {
    icon: Code,
    title: "Разработка сайтов",
    description: "Создаем современные и функциональные сайты с высокой конверсией, адаптированные для всех устройств",
    features: [
      "Адаптивный дизайн для всех устройств",
      "SEO-оптимизация на этапе разработки",
      "Интеграция с CRM и аналитикой",
      "Высокая скорость загрузки",
      "Техническая поддержка"
    ],
    price: "от 60 000 ₽"
  },
  {
    icon: Layers,
    title: "Лендинги",
    description: "Разрабатываем продающие одностраничные сайты, заточенные на конверсию посетителей в клиентов",
    features: [
      "Продающая структура страницы",
      "A/B тестирование элементов",
      "Интеграция форм с CRM",
      "Настройка целей аналитики",
      "Оптимизация скорости"
    ],
    price: "от 40 000 ₽"
  },
  {
    icon: Database,
    title: "Интернет-магазины",
    description: "Создаем функциональные онлайн-магазины с удобным управлением товарами и интеграцией платежных систем",
    features: [
      "Удобный каталог товаров",
      "Интеграция платежных систем",
      "Личный кабинет пользователя",
      "Система управления заказами",
      "Интеграция с 1С и CRM"
    ],
    price: "от 120 000 ₽"
  }
];

export const seoServices = [
  {
    icon: Search,
    title: "SEO-продвижение",
    description: "Выводим сайты в топ поисковых систем и увеличиваем органический трафик",
    features: [
      "Аудит и анализ сайта",
      "Составление семантического ядра",
      "Внутренняя оптимизация",
      "Работа с внешними факторами",
      "Ежемесячная отчетность"
    ],
    price: "от 30 000 ₽/мес"
  },
  {
    icon: Globe,
    title: "Техническая оптимизация",
    description: "Исправляем технические ошибки, которые мешают продвижению сайта в поисковых системах",
    features: [
      "Поиск и устранение ошибок",
      "Оптимизация скорости загрузки",
      "Настройка robots.txt и sitemap",
      "Оптимизация мета-тегов",
      "Устранение дублей страниц"
    ],
    price: "от 25 000 ₽"
  },
  {
    icon: BarChart4,
    title: "Контент-маркетинг",
    description: "Создаем полезный контент, который привлекает целевую аудиторию и повышает авторитет сайта",
    features: [
      "Разработка контент-стратегии",
      "Создание SEO-текстов",
      "Оптимизация существующего контента",
      "Ведение блога компании",
      "Анализ эффективности"
    ],
    price: "от 35 000 ₽/мес"
  }
];

export const advertisingServices = [
  {
    icon: Target,
    title: "Контекстная реклама",
    description: "Настраиваем эффективные рекламные кампании в Яндекс.Директ и Google Ads",
    features: [
      "Анализ ниши и конкурентов",
      "Составление семантического ядра",
      "Настройка таргетинга",
      "Создание креативов",
      "Оптимизация рекламных кампаний"
    ],
    price: "от 20 000 ₽/мес"
  },
  {
    icon: Megaphone,
    title: "SMM-продвижение",
    description: "Продвигаем ваш бизнес в социальных сетях и привлекаем целевую аудиторию",
    features: [
      "Разработка SMM-стратегии",
      "Создание и оформление аккаунтов",
      "Создание контент-плана",
      "Настройка таргетированной рекламы",
      "Аналитика и отчетность"
    ],
    price: "от 25 000 ₽/мес"
  },
  {
    icon: Settings,
    title: "Комплексный интернет-маркетинг",
    description: "Разрабатываем и внедряем комплексную стратегию продвижения для достижения максимальных результатов",
    features: [
      "Аудит текущего состояния",
      "Разработка маркетинговой стратегии",
      "SEO + контекстная реклама + SMM",
      "Email-маркетинг",
      "Регулярная аналитика и отчетность"
    ],
    price: "от 80 000 ₽/мес"
  }
];

export const supportServices = [
  {
    icon: LineChart,
    title: "Сопровождение и поддержка",
    description: "Обеспечиваем стабильную работу сайта и его постоянное развитие",
    features: [
      "Мониторинг работоспособности",
      "Регулярное обновление CMS",
      "Исправление ошибок",
      "Резервное копирование",
      "Консультации и поддержка"
    ],
    price: "от 15 000 ₽/мес"
  },
  {
    icon: PieChart,
    title: "Аналитика и улучшение конверсии",
    description: "Анализируем эффективность сайта и маркетинговых каналов для увеличения конверсии",
    features: [
      "Настройка систем аналитики",
      "Отслеживание конверсионных целей",
      "Анализ пользовательского поведения",
      "A/B тестирование элементов",
      "Рекомендации по улучшению"
    ],
    price: "от 30 000 ₽/мес"
  },
  {
    icon: Users,
    title: "Обучение и консалтинг",
    description: "Обучаем вашу команду эффективно управлять интернет-маркетингом и развитием сайта",
    features: [
      "Индивидуальные консультации",
      "Корпоративные тренинги",
      "Разработка инструкций",
      "Аудит внутренних процессов",
      "Стратегическое планирование"
    ],
    price: "от 50 000 ₽"
  }
];

export const serviceCategories = [
  {
    title: "Разработка сайтов и веб-приложений",
    subtitle: "Разработка",
    description: "Создаем современные, функциональные и красивые сайты, которые приносят реальные результаты вашему бизнесу",
    badgeText: "Разработка",
    badgeClass: "bg-brand-100",
    services: webDevelopmentServices,
    bgClass: ""
  },
  {
    title: "SEO-продвижение и оптимизация",
    subtitle: "SEO",
    description: "Выводим сайты в топ поисковых систем и увеличиваем органический трафик для привлечения целевых клиентов",
    badgeText: "SEO",
    badgeClass: "bg-violet-light",
    services: seoServices,
    bgClass: "bg-muted/50"
  },
  {
    title: "Реклама и продвижение",
    subtitle: "Реклама",
    description: "Настраиваем эффективные рекламные кампании, которые привлекают целевую аудиторию и увеличивают продажи",
    badgeText: "Реклама",
    badgeClass: "bg-accent",
    services: advertisingServices,
    bgClass: ""
  },
  {
    title: "Сопровождение и аналитика",
    subtitle: "Поддержка",
    description: "Обеспечиваем стабильную работу сайта, его постоянное развитие и улучшение показателей эффективности",
    badgeText: "Поддержка",
    badgeClass: "bg-brand-100",
    services: supportServices,
    bgClass: "bg-muted/50"
  }
];

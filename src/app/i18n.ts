export type Locale = "ru" | "kz" | "en";

export const locales: Locale[] = ["ru", "kz", "en"];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Рус",
  kz: "Қаз",
  en: "Eng",
};

export interface Translations {
  nav: { about: string; services: string; contacts: string };
  hero: { title1: string; title2: string; subtitle: string; cta: string };
  about: {
    title: string;
    p1: string;
    p2: string;
    detailsTitle: string;
    bin: string;
    director: string;
    directorValue: string;
    address: string;
    addressValue: string;
  };
  services: {
    title: string;
    cards: { title: string; description: string }[];
  };
  contacts: {
    title: string;
    phone: string;
    email: string;
    address: string;
    addressValue: string;
    director: string;
    directorValue: string;
    mapTitle: string;
  };
  footer: { rights: string; city: string };
}

const ru: Translations = {
  nav: { about: "О компании", services: "Услуги", contacts: "Контакты" },
  hero: {
    title1: "Надёжный партнёр в сфере",
    title2: "вооружения и военной техники",
    subtitle:
      "Разработка, производство, ремонт и сервисное обслуживание — полный цикл работ для обеспечения обороноспособности.",
    cta: "Связаться с нами",
  },
  about: {
    title: "О компании",
    p1: "ТОО «Арсенал про Групп» — предприятие, специализирующееся на полном цикле работ в сфере вооружения и военной техники: от разработки и производства до ремонта и сервисного обслуживания.",
    p2: "Компания осуществляет деятельность на территории Республики Казахстан и является надёжным партнёром в обеспечении обороноспособности страны.",
    detailsTitle: "Реквизиты",
    bin: "БИН",
    director: "Директор",
    directorValue: "Бегайдаров Кайрат Рамазанович",
    address: "Адрес",
    addressValue: "010000, г. Астана, Проспект Тұран, дом №89/3, 1",
  },
  services: {
    title: "Направления деятельности",
    cards: [
      {
        title: "Разработка и производство",
        description:
          "Боеприпасы, вооружение, военная техника, запасные части, комплектующие изделия и приборы.",
      },
      {
        title: "Ремонт и модернизация",
        description:
          "Ремонт, модернизация и наладка вооружения и военной техники.",
      },
      {
        title: "Сервисное обслуживание",
        description:
          "Монтаж, установка, хранение и полное сервисное обслуживание.",
      },
      {
        title: "Реализация и приобретение",
        description:
          "Приобретение и реализация боеприпасов, вооружения и комплектующих.",
      },
      {
        title: "Специальные материалы",
        description:
          "Поставка специальных материалов и оборудования для производства.",
      },
      {
        title: "Комплексные решения",
        description: "Полный цикл — от проектирования до ввода в эксплуатацию.",
      },
    ],
  },
  contacts: {
    title: "Контакты",
    phone: "Телефон",
    email: "Email",
    address: "Адрес",
    addressValue: "010000, г. Астана, Проспект Тұран, дом №89/3, 1",
    director: "Директор",
    directorValue: "Бегайдаров Кайрат Рамазанович",
    mapTitle: "Расположение офиса на карте",
  },
  footer: {
    rights: "© 2026 ТОО «Арсенал про Групп». Все права защищены.",
    city: "г. Астана, Республика Казахстан",
  },
};

const kz: Translations = {
  nav: {
    about: "Компания туралы",
    services: "Қызметтер",
    contacts: "Байланыс",
  },
  hero: {
    title1: "Қару-жарақ және әскери техника саласындағы",
    title2: "сенімді серіктес",
    subtitle:
      "Әзірлеу, өндіру, жөндеу және сервистік қызмет көрсету — қорғаныс қабілетін қамтамасыз ету үшін жұмыстардың толық циклі.",
    cta: "Бізбен байланысу",
  },
  about: {
    title: "Компания туралы",
    p1: "«Арсенал про Групп» ЖШС — қару-жарақ пен әскери техника саласында жұмыстардың толық циклін жүргізуге маманданған кәсіпорын: әзірлеу мен өндіруден бастап жөндеу мен сервистік қызмет көрсетуге дейін.",
    p2: "Компания Қазақстан Республикасы аумағында қызметін жүзеге асырады және елдің қорғаныс қабілетін қамтамасыз етудегі сенімді серіктес болып табылады.",
    detailsTitle: "Деректемелер",
    bin: "БСН",
    director: "Директор",
    directorValue: "Бегайдаров Қайрат Рамазанұлы",
    address: "Мекенжай",
    addressValue: "010000, Астана қ., Тұран даңғылы, №89/3 үй, 1",
  },
  services: {
    title: "Қызмет бағыттары",
    cards: [
      {
        title: "Әзірлеу және өндіру",
        description:
          "Оқ-дәрілер, қару-жарақ, әскери техника, қосалқы бөлшектер, жинақтаушы бұйымдар мен аспаптар.",
      },
      {
        title: "Жөндеу және жаңғырту",
        description:
          "Қару-жарақ пен әскери техниканы жөндеу, жаңғырту және баптау.",
      },
      {
        title: "Сервистік қызмет көрсету",
        description:
          "Монтаж, орнату, сақтау және толық сервистік қызмет көрсету.",
      },
      {
        title: "Сату және сатып алу",
        description:
          "Оқ-дәрілер, қару-жарақ және жинақтаушыларды сатып алу мен сату.",
      },
      {
        title: "Арнайы материалдар",
        description:
          "Өндіріске арналған арнайы материалдар мен жабдықтарды жеткізу.",
      },
      {
        title: "Кешенді шешімдер",
        description: "Жобалаудан бастап пайдалануға беруге дейін — толық цикл.",
      },
    ],
  },
  contacts: {
    title: "Байланыс",
    phone: "Телефон",
    email: "Email",
    address: "Мекенжай",
    addressValue: "010000, Астана қ., Тұран даңғылы, №89/3 үй, 1",
    director: "Директор",
    directorValue: "Бегайдаров Қайрат Рамазанұлы",
    mapTitle: "Кеңсенің картадағы орны",
  },
  footer: {
    rights: "© 2026 «Арсенал про Групп» ЖШС. Барлық құқықтар қорғалған.",
    city: "Астана қ., Қазақстан Республикасы",
  },
};

const en: Translations = {
  nav: { about: "About", services: "Services", contacts: "Contacts" },
  hero: {
    title1: "Reliable partner in",
    title2: "armaments and military equipment",
    subtitle:
      "Development, manufacturing, repair and maintenance — a full cycle of operations for defense capability.",
    cta: "Contact us",
  },
  about: {
    title: "About the company",
    p1: "Arsenal Pro Group LLP is an enterprise specializing in the full cycle of operations in the field of armaments and military equipment: from development and manufacturing to repair and maintenance.",
    p2: "The company operates in the Republic of Kazakhstan and is a reliable partner in ensuring the country's defense capability.",
    detailsTitle: "Details",
    bin: "BIN",
    director: "Director",
    directorValue: "Begaidarov Kairat Ramazanovich",
    address: "Address",
    addressValue: "010000, Astana, Turan Avenue, building 89/3, 1",
  },
  services: {
    title: "Areas of activity",
    cards: [
      {
        title: "Development & Manufacturing",
        description:
          "Ammunition, armaments, military equipment, spare parts, components and instruments.",
      },
      {
        title: "Repair & Modernization",
        description:
          "Repair, modernization and adjustment of armaments and military equipment.",
      },
      {
        title: "Maintenance",
        description:
          "Installation, mounting, storage and full service maintenance.",
      },
      {
        title: "Procurement & Sales",
        description:
          "Procurement and sales of ammunition, armaments and components.",
      },
      {
        title: "Special Materials",
        description:
          "Supply of special materials and equipment for manufacturing.",
      },
      {
        title: "Integrated Solutions",
        description: "Full cycle — from design to commissioning.",
      },
    ],
  },
  contacts: {
    title: "Contacts",
    phone: "Phone",
    email: "Email",
    address: "Address",
    addressValue: "010000, Astana, Turan Avenue, building 89/3, 1",
    director: "Director",
    directorValue: "Begaidarov Kairat Ramazanovich",
    mapTitle: "Office location on map",
  },
  footer: {
    rights: "© 2026 Arsenal Pro Group LLP. All rights reserved.",
    city: "Astana, Republic of Kazakhstan",
  },
};

const translations: Record<Locale, Translations> = { ru, kz, en };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.ru;
}

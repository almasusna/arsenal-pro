export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-[var(--color-primary)] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-nobg.png"
              alt="Арсенал про Групп логотип"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-lg font-bold tracking-wide">
                Арсенал про Групп
              </h1>
              <p className="text-xs text-gray-300 uppercase tracking-widest">
                ТОО
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a
              href="#about"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              О компании
            </a>
            <a
              href="#services"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contacts"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-slate-800 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Надёжный партнёр в сфере{" "}
            <span className="text-[var(--color-accent)]">
              вооружения и военной техники
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Разработка, производство, ремонт и сервисное обслуживание — полный
            цикл работ для обеспечения обороноспособности.
          </p>
          <a
            href="#contacts"
            className="inline-block mt-10 px-8 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-[var(--color-primary)] font-semibold rounded transition-colors"
          >
            Связаться с нами
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>О компании</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>ТОО «Арсенал про Групп»</strong> — предприятие,
                специализирующееся на полном цикле работ в сфере вооружения и
                военной техники: от разработки и производства до ремонта и
                сервисного обслуживания.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Компания осуществляет деятельность на территории Республики
                Казахстан и является надёжным партнёром в обеспечении
                обороноспособности страны.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h4 className="font-semibold text-lg mb-4 text-[var(--color-primary)]">
                Реквизиты
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <span className="font-medium text-gray-800">БИН:</span>{" "}
                  250340019933
                </li>
                <li>
                  <span className="font-medium text-gray-800">Директор:</span>{" "}
                  Бегайдаров Кайрат Рамазанович
                </li>
                <li>
                  <span className="font-medium text-gray-800">Адрес:</span>{" "}
                  010000, г. Астана, Проспект Тұран, дом №89/3, 1
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Направления деятельности</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Разработка и производство"
              description="Боеприпасы, вооружение, военная техника, запасные части, комплектующие изделия и приборы."
            />
            <ServiceCard
              title="Ремонт и модернизация"
              description="Ремонт, модернизация и наладка вооружения и военной техники."
            />
            <ServiceCard
              title="Сервисное обслуживание"
              description="Монтаж, установка, хранение и полное сервисное обслуживание."
            />
            <ServiceCard
              title="Реализация и приобретение"
              description="Приобретение и реализация боеприпасов, вооружения и комплектующих."
            />
            <ServiceCard
              title="Специальные материалы"
              description="Поставка специальных материалов и оборудования для производства."
            />
            <ServiceCard
              title="Комплексные решения"
              description="Полный цикл — от проектирования до ввода в эксплуатацию."
            />
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Контакты</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <ContactItem
                icon={<PhoneIcon />}
                label="Телефон"
                value="8 (705) 598-14-14"
                href="tel:+77055981414"
              />
              <ContactItem
                icon={<MailIcon />}
                label="Email"
                value="krbegaidarov@mail.ru"
                href="mailto:krbegaidarov@mail.ru"
              />
              <ContactItem
                icon={<MapPinIcon />}
                label="Адрес"
                value="010000, г. Астана, Проспект Тұран, дом №89/3, 1"
              />
              <ContactItem
                icon={<UserIcon />}
                label="Директор"
                value="Бегайдаров Кайрат Рамазанович"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5!2d71.43!3d51.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzQ4LjAiTiA3McKwMjUnNDguMCJF!5e0!3m2!1sru!2skz!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Расположение офиса на карте"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-gray-400 py-8 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 ТОО «Арсенал про Групп». Все права защищены.</p>
          <p>г. Астана, Республика Казахстан</p>
        </div>
      </footer>
    </>
  );
}

/* ─── Components ─────────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-10 text-center">
      {children}
    </h3>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-[var(--color-accent)] transition-all">
      <h4 className="font-semibold text-[var(--color-primary)] mb-2">
        {title}
      </h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[var(--color-accent)] shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-gray-800 font-medium hover:text-[var(--color-accent)] transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-800 font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Icons (inline SVG) ─────────────────────────────────── */

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

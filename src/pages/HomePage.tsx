import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Clock, ShieldCheck, Car, Phone,
    Star, ArrowRight, MapPin, ChevronRight
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import './HomePage.css';

const TOURS = [
    {
        id: 'classic',
        image: '/sigiriya.png',
        days: 12,
        price: '£2,500',
        link: '/private-tours',
    },
    {
        id: 'honeymoon',
        image: '/honeymoon-villa.png',
        days: 10,
        price: '£3,200',
        link: '/honeymoon',
    },
    {
        id: 'wildlife',
        image: '/yala-safari.png',
        days: 8,
        price: '£2,100',
        link: '/wildlife',
    },
    {
        id: 'family',
        image: '/kandy.png',
        days: 14,
        price: '£3,800',
        link: '/private-tours',
    },
];

const DESTINATIONS = [
    { key: 'sigiriya', image: '/sigiriya.png', link: '/destinations/sigiriya', name: 'Sigiriya' },
    { key: 'kandy', image: '/kandy.png', link: '/destinations/kandy', name: 'Kandy' },
    { key: 'ella', image: '/hero-bg.png', link: '/destinations/ella', name: 'Ella' },
    { key: 'galle', image: '/galle.png', link: '/destinations/galle', name: 'Galle' },
    { key: 'yala', image: '/yala-safari.png', link: '/destinations/yala', name: 'Yala' },
];

const TESTIMONIALS = [
    {
        name: 'James & Sarah',
        country: '🇬🇧 United Kingdom',
        text: 'Zelenso organised every detail perfectly. Our 12-day private tour was an absolute dream — from the hill country to the leopards at Yala. We\'ve already recommended to three families.',
        rating: 5,
    },
    {
        name: 'Klaus & Helga',
        country: '🇩🇪 Germany',
        text: 'Wir hatten die schönste Reise unseres Lebens. Unser Chauffeur-Guide Nuwan war fantastisch. Zelenso hat alles perfekt geplant. Wir kommen definitiv wieder!',
        rating: 5,
    },
    {
        name: 'Sophie & Pierre',
        country: '🇫🇷 France',
        text: 'Un voyage de lune de miel absolument parfait. La villa à Galle était magnifique et le safari à l\'aube à Yala était inoubliable. Merci à toute l\'équipe Zelenso!',
        rating: 5,
    },
];

const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as any } },
};

const stagger: any = {
    visible: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
    const { t } = useTranslation();

    const faqItems = [
        { question: t('faq.q1'), answer: t('faq.a1') },
        { question: t('faq.q2'), answer: t('faq.a2') },
        { question: t('faq.q3'), answer: t('faq.a3') },
        { question: t('faq.q4'), answer: t('faq.a4') },
        { question: t('faq.q5'), answer: t('faq.a5') },
    ];

    return (
        <main className="homepage">
            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="hero" aria-labelledby="hero-heading">
                <div className="hero__bg">
                    <img src="/hero-bg.png" alt="Sri Lanka Nine Arch Bridge Ella" />
                    <div className="overlay-dark" />
                </div>
                <div className="hero__content container">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="hero__inner"
                    >
                        <span className="badge hero__badge">
                            <MapPin size={12} /> {t('hero.badge')}
                        </span>
                        <h1 id="hero-heading" className="hero__headline">
                            {t('hero.headline')}
                        </h1>
                        <p className="hero__subtext">{t('hero.subtext')}</p>
                        <div className="hero__actions">
                            <Link to="/contact" className="btn btn--primary btn--lg" id="hero-cta">
                                {t('hero.cta_primary')} <ArrowRight size={18} />
                            </Link>
                            <Link to="/private-tours" className="btn btn--ghost-white btn--lg">
                                {t('hero.cta_secondary')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="hero__scroll-indicator">
                    <div className="hero__scroll-dot" />
                </div>
            </section>

            {/* ═══════════════════ TRUST BAR ═══════════════════ */}
            <section className="section section--sand trust-section" aria-labelledby="trust-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <span className="section-label">{t('trust.label')}</span>
                        <h2 id="trust-heading" className="section-title">{t('trust.title')}</h2>
                        <div className="divider divider--center" />
                    </motion.div>
                    <motion.div
                        className="trust-bar"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        {[
                            { icon: <Clock size={22} />, title: t('trust.item1_title'), desc: t('trust.item1_desc') },
                            { icon: <ShieldCheck size={22} />, title: t('trust.item2_title'), desc: t('trust.item2_desc') },
                            { icon: <Car size={22} />, title: t('trust.item3_title'), desc: t('trust.item3_desc') },
                            { icon: <Phone size={22} />, title: t('trust.item4_title'), desc: t('trust.item4_desc') },
                        ].map((item, i) => (
                            <motion.div key={i} className="trust-item" variants={fadeUp}>
                                <div className="trust-icon">{item.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.82rem', margin: 0 }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ FEATURED TOURS ═══════════════════ */}
            <section className="section" aria-labelledby="tours-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <span className="section-label">{t('tours.label')}</span>
                        <h2 id="tours-heading" className="section-title">{t('tours.title')}</h2>
                        <p className="section-subtitle">{t('tours.subtitle')}</p>
                        <div className="divider divider--center" />
                    </motion.div>

                    <motion.div
                        className="tours-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={stagger}
                    >
                        {TOURS.map((tour) => (
                            <motion.article key={tour.id} variants={fadeUp} className="card tour-card">
                                <div className="card__image">
                                    <img src={tour.image} alt={t(`tours.${tour.id}_title`)} loading="lazy" />
                                    <div className="tour-card__days-badge">
                                        {tour.days} {t('tours.days')}
                                    </div>
                                </div>
                                <div className="card__body">
                                    <h3 className="tour-card__title">{t(`tours.${tour.id}_title`)}</h3>
                                    <p className="tour-card__desc">{t(`tours.${tour.id}_desc`)}</p>
                                    <div className="tour-card__footer">
                                        <span className="tour-card__price">
                                            {t('tours.from')} <strong>{tour.price}</strong>
                                        </span>
                                        <Link to={tour.link} className="btn btn--secondary btn--sm">
                                            {t('tours.enquire')} <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ DESTINATIONS PREVIEW ═══════════════════ */}
            <section className="section section--cream" aria-labelledby="dest-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <span className="section-label">{t('destinations.label')}</span>
                        <h2 id="dest-heading" className="section-title">{t('destinations.title')}</h2>
                        <p className="section-subtitle">{t('destinations.subtitle')}</p>
                        <div className="divider divider--center" />
                    </motion.div>

                    <motion.div
                        className="destinations-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={stagger}
                    >
                        {DESTINATIONS.map((dest) => (
                            <motion.div key={dest.key} variants={fadeUp} className="dest-card">
                                <Link to={dest.link}>
                                    <div className="dest-card__image">
                                        <img src={dest.image} alt={dest.name} loading="lazy" />
                                        <div className="dest-card__overlay" />
                                        <div className="dest-card__info">
                                            <h3 className="dest-card__name">{dest.name}</h3>
                                            <p className="dest-card__desc">{t(`destinations.${dest.key}_desc`)}</p>
                                            <span className="dest-card__cta">
                                                {t('destinations.view')} <ChevronRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
            <section className="section section--dark" aria-labelledby="testimonials-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>
                            {t('testimonials.label')}
                        </span>
                        <h2 id="testimonials-heading" className="section-title">{t('testimonials.title')}</h2>
                        <div className="divider divider--center" style={{ background: 'linear-gradient(90deg, var(--color-earth), var(--color-sand))' }} />
                    </motion.div>

                    <motion.div
                        className="testimonials-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={stagger}
                    >
                        {TESTIMONIALS.map((t_, i) => (
                            <motion.div key={i} variants={fadeUp} className="testimonial-card">
                                <div className="testimonial-card__stars">
                                    {[...Array(t_.rating)].map((_, j) => (
                                        <Star key={j} size={15} fill="var(--color-earth)" color="var(--color-earth)" />
                                    ))}
                                </div>
                                <blockquote className="testimonial-card__quote">"{t_.text}"</blockquote>
                                <div className="testimonial-card__author">
                                    <div className="testimonial-card__avatar">
                                        {t_.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="testimonial-card__name">{t_.name}</p>
                                        <p className="testimonial-card__country">{t_.country}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ LEAD MAGNET ═══════════════════ */}
            <section className="section section--cream lead-section" aria-labelledby="leadmag-heading">
                <div className="container">
                    <motion.div
                        className="lead-magnet"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <div className="lead-magnet__content">
                            <span className="section-label">{t('lead_magnet.label')}</span>
                            <h2 id="leadmag-heading">{t('lead_magnet.title')}</h2>
                            <p>{t('lead_magnet.subtitle')}</p>
                        </div>
                        <form
                            className="lead-magnet__form"
                            onSubmit={(e) => { e.preventDefault(); alert('Thank you! Check your inbox.'); }}
                        >
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <input
                                    type="email"
                                    required
                                    placeholder={t('lead_magnet.placeholder')}
                                    style={{
                                        flex: 1,
                                        padding: '0.85rem 1.1rem',
                                        border: '1.5px solid var(--color-sand-dark)',
                                        borderRadius: 'var(--radius-full)',
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        minWidth: '200px',
                                    }}
                                />
                                <button type="submit" className="btn btn--primary">
                                    {t('lead_magnet.cta')} <ArrowRight size={16} />
                                </button>
                            </div>
                            <p style={{ fontSize: '0.78rem', marginTop: '0.6rem', color: 'var(--color-text-light)' }}>
                                {t('lead_magnet.disclaimer')}
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ CTA SECTION ═══════════════════ */}
            <section className="cta-section" aria-labelledby="cta-heading">
                <div className="cta-section__bg">
                    <img src="/honeymoon-villa.png" alt="Sri Lanka luxury travel" />
                    <div className="overlay-green" />
                </div>
                <div className="container cta-section__content">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <h2 id="cta-heading" style={{ color: 'var(--color-white)', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                            {t('cta_section.title')}
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '1rem', marginBottom: '2.5rem' }}>
                            {t('cta_section.subtitle')}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn--white btn--lg" id="main-cta">
                                {t('cta_section.btn_primary')} <ArrowRight size={18} />
                            </Link>
                            <a
                                href="https://wa.me/94705522299"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--ghost-white btn--lg"
                            >
                                {t('cta_section.btn_secondary')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════ FAQ ═══════════════════ */}
            <section className="section" aria-labelledby="faq-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <span className="section-label">{t('faq.label')}</span>
                        <h2 id="faq-heading" className="section-title">{t('faq.title')}</h2>
                        <div className="divider divider--center" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <FAQAccordion items={faqItems} />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

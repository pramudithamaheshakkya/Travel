import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Sunrise, Heart, MapPin, ShieldCheck } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import './WellnessPage.css';

const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as any } },
};

const stagger: any = {
    visible: { transition: { staggerChildren: 0.12 } },
};

export default function WellnessPage() {
    const { t } = useTranslation();

    const faqItems = [
        { question: t('wellness.faq.q1'), answer: t('wellness.faq.a1') },
        { question: t('wellness.faq.q2'), answer: t('wellness.faq.a2') },
        { question: t('wellness.faq.q3'), answer: t('wellness.faq.a3') },
        { question: t('wellness.faq.q4'), answer: t('wellness.faq.a4') },
    ];

    return (
        <main className="wellness-page">
            <Helmet>
                <title>{t('wellness.title')} | Zelenso Travel</title>
                <meta name="description" content={t('wellness.subtitle')} />
            </Helmet>

            {/* ═══════════════ HERO ═══════════════ */}
            <section className="page-hero" aria-labelledby="hero-heading">
                <div className="page-hero__bg">
                    <img src="/honeymoon-villa.png" alt="Sri Lanka Wellness Retreat" />
                    <div className="overlay-dark" style={{ background: 'linear-gradient(to top, var(--color-charcoal) 0%, rgba(0,0,0,0.3) 100%)' }} />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        className="page-hero__content text-center"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.span variants={fadeUp} className="badge hero__badge" style={{ margin: '0 auto 1.5rem' }}>
                            <Heart size={12} /> {t('wellness.label')}
                        </motion.span>
                        <motion.h1 id="hero-heading" variants={fadeUp} className="hero__headline">
                            {t('wellness.title')}
                        </motion.h1>
                        <motion.p variants={fadeUp} className="hero__subtext" style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                            {t('wellness.subtitle')}
                        </motion.p>
                        <motion.div variants={fadeUp} className="hero__actions" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                {t('wellness.btn_primary')} <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ WHY SRI LANKA ═══════════════ */}
            <section className="section section--sand" aria-labelledby="why-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <h2 id="why-heading" className="section-title">{t('wellness.why_title')}</h2>
                        <p className="section-subtitle">{t('wellness.why_subtitle')}</p>
                        <div className="divider divider--center" />
                    </motion.div>

                    <motion.div
                        className="wellness-reasons-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={stagger}
                    >
                        {[
                            { icon: <Sunrise size={32} />, key: 'r1' },
                            { icon: <Heart size={32} />, key: 'r2' },
                            { icon: <MapPin size={32} />, key: 'r3' },
                            { icon: <ShieldCheck size={32} />, key: 'r4' },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} className="wellness-reason-card">
                                <div className="wellness-reason-card__icon">{item.icon}</div>
                                <h3>{t(`wellness.reasons.${item.key}_title`)}</h3>
                                <p>{t(`wellness.reasons.${item.key}_desc`)}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ PACKAGES ═══════════════ */}
            <section className="section" aria-labelledby="packages-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <span className="section-label">{t('wellness.label')}</span>
                        <h2 id="packages-heading" className="section-title">{t('wellness.packages_title')}</h2>
                        <div className="divider divider--center" />
                    </motion.div>

                    <motion.div
                        className="wellness-packages-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={stagger}
                    >
                        {[
                            { key: 'p1', image: '/ayurveda-retreat.png' },
                            { key: 'p2', image: '/beach-yoga.jpg' },
                            { key: 'p3', image: '/kandy.png' },
                            { key: 'p4', image: '/eco-retreat.jpg' },
                        ].map((pkg, i) => (
                            <motion.article key={i} variants={fadeUp} className="wellness-package-card">
                                <div className="wellness-package-card__image">
                                    <img src={pkg.image} alt={t(`wellness.packages.${pkg.key}_title`)} loading="lazy" />
                                </div>
                                <div className="wellness-package-card__content">
                                    <h3>{t(`wellness.packages.${pkg.key}_title`)}</h3>
                                    <p className="wellness-package-card__desc">{t(`wellness.packages.${pkg.key}_desc`)}</p>
                                    <ul className="wellness-package-card__features">
                                        {[1, 2, 3, 4].map((f) => (
                                            <li key={f}>
                                                <CheckCircle size={16} />
                                                <span>{t(`wellness.packages.${pkg.key}_f${f}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="wellness-package-card__footer">
                                        <p className="wellness-package-card__price">{t(`wellness.packages.${pkg.key}_price`)}</p>
                                        <Link to="/contact" className="btn btn--outline btn--sm">
                                            {t('wellness.btn_primary')}
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ WHY ZELENSO ═══════════════ */}
            <section className="section section--dark" aria-labelledby="why-us-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={stagger}
                    >
                        <motion.h2 variants={fadeUp} id="why-us-heading" className="section-title" style={{ color: 'var(--color-white)' }}>
                            {t('wellness.why_us_title')}
                        </motion.h2>
                        <motion.div variants={fadeUp} className="divider divider--center" style={{ background: 'linear-gradient(90deg, var(--color-earth), var(--color-sand))' }} />

                        <div className="wellness-trust-grid">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <motion.div key={i} variants={fadeUp} className="wellness-trust-item">
                                    <CheckCircle size={20} color="var(--color-earth)" />
                                    <span>{t(`wellness.why_us.u${i}`)}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ FAQ ═══════════════ */}
            <section className="section section--cream" aria-labelledby="faq-heading">
                <div className="container">
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                    >
                        <h2 id="faq-heading" className="section-title">{t('wellness.faq_title')}</h2>
                        <div className="divider divider--center" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        variants={fadeUp}
                        style={{ maxWidth: '800px', margin: '0 auto' }}
                    >
                        <FAQAccordion items={faqItems} />
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════ CTA ═══════════════ */}
            <section className="cta-section">
                <div className="cta-section__bg">
                    <img src="/hero-bg.png" alt="Sri Lanka wellness travel" />
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
                        <h2 style={{ color: 'var(--color-white)', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
                            {t('wellness.cta_title')}
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '1rem', marginBottom: '2.5rem' }}>
                            {t('wellness.cta_subtitle')}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn--white btn--lg">
                                {t('wellness.btn_primary')} <ArrowRight size={18} />
                            </Link>
                            <a
                                href="https://wa.me/94705522299"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--ghost-white btn--lg"
                            >
                                {t('wellness.btn_secondary')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Train, Utensils, Sunrise, ArrowRight } from 'lucide-react';
import './HoneymoonPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as any } },
};
const stagger = { visible: { transition: { staggerChildren: 0.13 } } };

const FEATURES = [
    { icon: <Heart size={28} />, key: 'feature1' },
    { icon: <Utensils size={28} />, key: 'feature2' },
    { icon: <Train size={28} />, key: 'feature3' },
    { icon: <Sunrise size={28} />, key: 'feature4' },
];

export default function HoneymoonPage() {
    const { t } = useTranslation();
    return (
        <main>
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/honeymoon-villa.png" alt="Sri Lanka Honeymoon" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>{t('honeymoon.label')}</span>
                        <h1 className="page-hero__title">{t('honeymoon.title')}</h1>
                        <p className="page-hero__subtitle">{t('honeymoon.subtitle')}</p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                Plan Our Honeymoon <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container">
                    <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2 className="section-title">Every Detail, Perfectly Romantic</h2>
                        <div className="divider divider--center" />
                    </motion.div>
                    <motion.div
                        className="honeymoon-features"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {FEATURES.map((f) => (
                            <motion.div key={f.key} className="honeymoon-feature-card" variants={fadeUp}>
                                <div className="honeymoon-feature-card__icon">{f.icon}</div>
                                <h3>{t(`honeymoon.${f.key}_title`)}</h3>
                                <p>{t(`honeymoon.${f.key}_desc`)}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Two-column promo */}
            <section className="section section--cream">
                <div className="container honeymoon-split">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="honeymoon-split__image">
                        <img src="/yala-safari.png" alt="Sunrise safari for two" />
                    </motion.div>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.65 } } }}
                        className="honeymoon-split__content"
                    >
                        <span className="section-label">The Perfect Honeymoon Awaits</span>
                        <h2>Sri Lanka for Two</h2>
                        <p>Whether you dream of waking up to the sound of the ocean in a private beach villa, watching the sunrise from a mountain-top bungalow over misty tea estates, or spotting leopards together in Yala at dawn — Zelenso will design it all.</p>
                        <p style={{ marginTop: '1rem' }}>Our honeymoon packages are handcrafted with zero compromise. No group tours, no tight schedules — just the two of you and the magic of Sri Lanka.</p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn btn--primary">
                                Plan My Honeymoon <ArrowRight size={16} />
                            </Link>
                            <Link to="/private-tours" className="btn btn--secondary">View Sample Itineraries</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SEO content block */}
            <section className="section">
                <div className="container" style={{ maxWidth: '820px' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2>Why Sri Lanka for Your Honeymoon?</h2>
                        <div className="divider" />
                        <p>Sri Lanka consistently ranks among the world's top honeymoon destinations — and for good reason. It offers an extraordinary variety of landscapes and experiences packed into one compact island: ancient ruins, misty mountains, wildlife-rich national parks, and pristine beaches all within easy reach.</p>
                        <p style={{ marginTop: '1rem' }}>Unlike many beach destinations, Sri Lanka can genuinely surprise and delight you at every turn. Couples who choose Sri Lanka for their honeymoon rarely regret it — many return for their anniversaries.</p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

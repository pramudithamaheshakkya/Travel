import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './AboutPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as any } },
};
const stagger = { visible: { transition: { staggerChildren: 0.13 } } };

const VALUES = [
    { title: 'Private Only', desc: 'We only operate private tours — no group buses, no shared vans.' },
    { title: 'Boutique Quality', desc: 'We hand-pick every hotel, guide, and experience in our network.' },
    { title: 'Locally Rooted', desc: 'Our team is Sri Lankan — we live here, we know this island deeply.' },
    { title: 'Fully Transparent', desc: 'Everything is quoted clearly. No surprises, no hidden extras.' },
];

export default function AboutPage() {
    const { t } = useTranslation();
    return (
        <main>
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/kandy.png" alt="About Zelenso Travel" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>{t('about.label')}</span>
                        <h1 className="page-hero__title">{t('about.title')}</h1>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="section">
                <div className="container about-story">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="about-story__image">
                        <img src="/galle.png" alt="Sri Lanka" />
                    </motion.div>
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.65 } } }}
                        className="about-story__content"
                    >
                        <span className="section-label">Our Story</span>
                        <h2>Born in Sri Lanka. Built for the World.</h2>
                        <div className="divider" />
                        <p>{t('about.story')}</p>
                        <p style={{ marginTop: '1rem' }}>Our founders spent years working in Sri Lanka's tourism industry before realising there was something missing: a truly boutique, private, quality-focused operator that could serve the discerning travellers coming from the UK and Europe — people who wanted depth over breadth, authenticity over itineraries, and safety over compromise.</p>
                        <p style={{ marginTop: '1rem' }}>Zelenso Travel was the answer to that gap.</p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="section section--cream">
                <div className="container">
                    <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="section-label">Our Values</span>
                        <h2 className="section-title">What We Stand For</h2>
                        <div className="divider divider--center" />
                    </motion.div>
                    <motion.div
                        className="values-grid"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {VALUES.map((v, i) => (
                            <motion.div key={i} variants={fadeUp} className="value-card">
                                <div className="value-card__number">0{i + 1}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Driver Standards */}
            <section className="section">
                <div className="container" style={{ maxWidth: '860px' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="section-label">{t('about.driver_title')}</span>
                        <h2 className="section-title">{t('about.driver_title')}</h2>
                        <div className="divider" />
                        <p>{t('about.driver_desc')}</p>
                    </motion.div>
                    <motion.div
                        style={{ marginTop: '3rem' }}
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    >
                        <span className="section-label">{t('about.safety_title')}</span>
                        <h2 className="section-title" style={{ fontSize: '1.8rem' }}>{t('about.safety_title')}</h2>
                        <div className="divider" />
                        <p>{t('about.safety_desc')}</p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section--dark">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2>Ready to Experience the Zelenso Difference?</h2>
                        <p style={{ color: 'rgba(245,237,211,0.8)', margin: '1rem auto 2.5rem', maxWidth: 500 }}>
                            Let's design your perfect Sri Lanka journey together.
                        </p>
                        <Link to="/contact" className="btn btn--primary btn--lg">
                            Plan My Trip <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

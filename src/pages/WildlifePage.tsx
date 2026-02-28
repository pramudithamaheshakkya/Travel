import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Sunset, Binoculars, Car, ArrowRight, CheckCircle } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as any } },
};
const stagger = { visible: { transition: { staggerChildren: 0.13 } } };

const ANIMALS = ['Sri Lankan Leopard', 'Asian Elephant', 'Sloth Bear', 'Mugger Crocodile', 'Painted Stork', 'Peacock', 'Grey Langur', 'Water Buffalo'];

export default function WildlifePage() {
    const { t } = useTranslation();
    return (
        <main>
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/yala-safari.png" alt="Sri Lanka Wildlife Safari" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>{t('wildlife.label')}</span>
                        <h1 className="page-hero__title">{t('wildlife.title')}</h1>
                        <p className="page-hero__subtitle">{t('wildlife.subtitle')}</p>
                        <Link to="/contact" className="btn btn--primary btn--lg" style={{ marginTop: '2rem' }}>
                            Plan a Safari <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Yala Section */}
            <section className="section">
                <div className="container">
                    <div className="wildlife-split">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="wildlife-split__image">
                            <img src="/yala-safari.png" alt="Yala National Park" style={{ borderRadius: 'var(--radius-xl)', width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.65 } } }}
                            className="wildlife-split__content"
                        >
                            <span className="section-label">{t('wildlife.yala_title')}</span>
                            <h2>The World's Highest Density of Leopards</h2>
                            <div className="divider" />
                            <p>{t('wildlife.yala_desc')}</p>
                            <ul className="wildlife-features" style={{ marginTop: '1.5rem' }}>
                                {Object.values({ a: t('wildlife.features.private_jeep'), b: t('wildlife.features.expert_guide'), c: t('wildlife.features.photography'), d: t('wildlife.features.sunrise') }).map((f, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                                        <CheckCircle size={16} color="var(--color-deep-green)" />
                                        <span style={{ fontSize: '0.95rem' }}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                                Book Private Safari <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Wildlife you'll see */}
            <section className="section section--cream">
                <div className="container">
                    <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="section-label">Wildlife</span>
                        <h2 className="section-title">Animals You May Encounter</h2>
                        <div className="divider divider--center" />
                    </motion.div>
                    <motion.div
                        className="animals-grid"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {ANIMALS.map((animal) => (
                            <motion.div key={animal} className="animal-tag" variants={fadeUp}>
                                {animal}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Our Safari Experience */}
            <section className="section section--dark">
                <div className="container">
                    <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2>Our Private Safari Experience</h2>
                        <p style={{ color: 'rgba(245,237,211,0.8)', maxWidth: '600px', margin: '1rem auto 3rem' }}>
                            We believe the best wildlife encounters happen without crowds. Every Zelenso safari is fully private.
                        </p>
                    </motion.div>
                    <motion.div
                        className="safari-features"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {[
                            { icon: <Car size={28} />, title: 'Private Game Car', desc: 'Your own vehicle — go where you want, when you want, for as long as you want.' },
                            { icon: <Binoculars size={28} />, title: 'Expert Naturalist Guide', desc: 'Our guides know Yala intimately and know exactly where to find wildlife.' },
                            { icon: <Camera size={28} />, title: 'Photography Stops', desc: 'Light-optimised morning and dusk drives. Perfect for wildlife photography.' },
                            { icon: <Sunset size={28} />, title: 'Dawn & Dusk Safaris', desc: 'Animals are most active at first and last light — that\'s when we go.' },
                        ].map((f, i) => (
                            <motion.div key={i} className="safari-feature-card" variants={fadeUp}>
                                <div className="safari-feature-card__icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/contact" className="btn btn--white btn--lg">
                            Book Your Private Safari <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

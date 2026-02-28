import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Clock, Calendar } from 'lucide-react';
import './DestinationsPage.css';

const DESTINATIONS = [
    { key: 'sigiriya', name: 'Sigiriya', image: '/sigiriya.png', link: '/destinations/sigiriya', nights: '1–2', bestTime: 'Year-round' },
    { key: 'kandy', name: 'Kandy', image: '/kandy.png', link: '/destinations/kandy', nights: '2–3', bestTime: 'Year-round' },
    { key: 'ella', name: 'Ella', image: '/hero-bg.png', link: '/destinations/ella', nights: '2–3', bestTime: 'Dec–Apr' },
    { key: 'galle', name: 'Galle', image: '/galle.png', link: '/destinations/galle', nights: '2–3', bestTime: 'Nov–Apr' },
    { key: 'yala', name: 'Yala National Park', image: '/yala-safari.png', link: '/destinations/yala', nights: '2–3', bestTime: 'Feb–Jul' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as any } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function DestinationsPage() {
    const { t } = useTranslation();
    return (
        <main>
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/sigiriya.png" alt="Sri Lanka Destinations" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>{t('destinations.label')}</span>
                        <h1 className="page-hero__title">{t('destinations.title')}</h1>
                        <p className="page-hero__subtitle">{t('destinations.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="destinations-list"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {DESTINATIONS.map((dest, i) => (
                            <motion.article key={dest.key} variants={fadeUp} className={`dest-list-card ${i % 2 === 1 ? 'dest-list-card--reversed' : ''}`}>
                                <div className="dest-list-card__image">
                                    <img src={dest.image} alt={dest.name} />
                                </div>
                                <div className="dest-list-card__content">
                                    <span className="section-label"><MapPin size={12} /> Sri Lanka</span>
                                    <h2>{dest.name}</h2>
                                    <p>{t(`destinations.${dest.key}_desc`)}</p>
                                    <div className="dest-list-card__meta">
                                        <span><Clock size={14} /> {dest.nights} nights recommended</span>
                                        <span><Calendar size={14} /> Best: {dest.bestTime}</span>
                                    </div>
                                    <Link to={dest.link} className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                                        Explore {dest.name} <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

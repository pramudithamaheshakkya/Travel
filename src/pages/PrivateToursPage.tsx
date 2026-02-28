import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, CheckCircle } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as any } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const ITINERARY = [
    { day: '1–2', location: 'Colombo → Sigiriya', desc: 'Arrive Colombo, transfer to Sigiriya. Lion Rock & Pidurangala Rock climb.' },
    { day: '3–4', location: 'Sigiriya → Kandy', desc: 'Dambulla Cave Temple. Drive to Kandy via spice gardens. Temple of the Tooth & cultural show.' },
    { day: '5–6', location: 'Kandy → Nuwara Eliya', desc: 'Scenic country drive via tea plantations. Tea factory visit. Nuwara Eliya town exploration.' },
    { day: '7–8', location: 'Ella', desc: 'Iconic Ella train journey. Nine Arch Bridge. Little Adam\'s Peak hike. Ravana Falls.' },
    { day: '9–10', location: 'Yala', desc: 'Drive to Yala. Dawn & dusk private game drives. Leopard tracking & elephant herds.' },
    { day: '11–12', location: 'Galle → Beach', desc: 'Galle Fort exploration. Drive along the south coast. Beach resort relaxation. Seafood dinner.' },
];

const PROCESS_STEPS = [
    { num: '01', title: 'Tell Us Your Dream', desc: 'Share your travel dates, interests, budget, and what you\'d love to experience.' },
    { num: '02', title: 'We Design Your Itinerary', desc: 'Within 24–48 hours you\'ll receive a fully detailed, custom itinerary.' },
    { num: '03', title: 'We Refine Together', desc: 'Any adjustments — hotels, activities, pacing — we adapt until it\'s perfect.' },
    { num: '04', title: 'You Travel, We Handle Everything', desc: 'Your guide picks you up at the airport. We manage all logistics.' },
];

export default function PrivateToursPage() {
    const { t } = useTranslation();
    return (
        <main>
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/sigiriya.png" alt="Private Sri Lanka Tours" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>{t('private_tours.label')}</span>
                        <h1 className="page-hero__title">{t('private_tours.title')}</h1>
                        <p className="page-hero__subtitle">{t('private_tours.subtitle')}</p>
                        <Link to="/contact" className="btn btn--primary btn--lg" style={{ marginTop: '2rem' }}>
                            Start Planning <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section">
                <div className="container">
                    <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="section-label">{t('private_tours.how_title')}</span>
                        <h2 className="section-title">From Dream to Reality in 4 Simple Steps</h2>
                        <div className="divider divider--center" />
                    </motion.div>
                    <motion.div
                        className="process-grid"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {PROCESS_STEPS.map((step, i) => (
                            <motion.div key={i} className="process-step" variants={fadeUp}>
                                <div className="process-step__num">{step.num}</div>
                                <h3 className="process-step__title">{step.title}</h3>
                                <p className="process-step__desc">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Sample Itinerary */}
            <section className="section section--cream">
                <div className="container">
                    <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="section-label">{t('private_tours.sample_title')}</span>
                        <h2 className="section-title">Classic 12-Day Sri Lanka Journey</h2>
                        <p className="section-subtitle">A sample private itinerary — every aspect can be personalised for you.</p>
                        <div className="divider divider--center" />
                    </motion.div>
                    <motion.div
                        className="itinerary-list"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {ITINERARY.map((item, i) => (
                            <motion.div key={i} className="itinerary-item" variants={fadeUp}>
                                <div className="itinerary-item__day">Day {item.day}</div>
                                <div className="itinerary-item__content">
                                    <h4 className="itinerary-item__location">{item.location}</h4>
                                    <p className="itinerary-item__desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div variants={fadeUp} className="itinerary-cta">
                            <Link to="/contact" className="btn btn--primary btn--lg">
                                Get This as Your Custom Itinerary <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Inclusions */}
            <section className="section section--dark">
                <div className="container">
                    <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <h2>What's Always Included</h2>
                        <div className="divider divider--center" style={{ background: 'var(--color-earth)' }} />
                    </motion.div>
                    <motion.div
                        className="inclusions-grid"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {[
                            'Dedicated private chauffeur-guide',
                            'Comfortable air-conditioned vehicle',
                            'Accommodation as specified',
                            'Entrance fees to sites & parks',
                            'Airport meet & greet',
                            '24/7 Zelenso support',
                            'Detailed daily itinerary document',
                            'Flexible scheduling, your pace',
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} className="inclusion-item">
                                <CheckCircle size={18} color="var(--color-earth)" />
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/contact" className="btn btn--white btn--lg">
                            <Users size={18} /> Plan My Private Tour
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

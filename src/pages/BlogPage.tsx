import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as any } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const ARTICLES = [
    { key: 'article1', image: '/hero-bg.png', readTime: '12 min', tag: 'Itinerary' },
    { key: 'article2', image: '/kandy.png', readTime: '8 min', tag: 'Budget & Cost' },
    { key: 'article3', image: '/sigiriya.png', readTime: '10 min', tag: 'Planning' },
    { key: 'article4', image: '/galle.png', readTime: '9 min', tag: 'Seasonal Guide' },
    { key: 'article5', image: '/yala-safari.png', readTime: '11 min', tag: 'Wildlife' },
];

export default function BlogPage() {
    const { t } = useTranslation();
    return (
        <main>
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src="/hero-bg.png" alt="Sri Lanka Travel Blog" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>{t('blog.label')}</span>
                        <h1 className="page-hero__title">{t('blog.title')}</h1>
                        <p className="page-hero__subtitle">{t('blog.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.div
                        className="blog-grid"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                    >
                        {ARTICLES.map((article, i) => (
                            <motion.article key={article.key} variants={fadeUp} className={`blog-card ${i === 0 ? 'blog-card--featured' : ''}`}>
                                <div className="blog-card__image">
                                    <img src={article.image} alt={t(`blog.${article.key}_title`)} loading="lazy" />
                                </div>
                                <div className="blog-card__body">
                                    <div className="blog-card__meta">
                                        <span className="badge"><Tag size={11} /> {article.tag}</span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Clock size={12} /> {article.readTime} read
                                        </span>
                                    </div>
                                    <h3 className="blog-card__title">{t(`blog.${article.key}_title`)}</h3>
                                    <p className="blog-card__desc">{t(`blog.${article.key}_desc`)}</p>
                                    <Link to={`/blog/${article.key}`} className="blog-card__cta">
                                        {t('blog.read_more')} <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Lead magnet */}
                    <motion.div
                        className="blog-lead-magnet"
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    >
                        <div>
                            <h3>Get the Free Sri Lanka Route Planner PDF</h3>
                            <p>Month-by-month guide: best routes, weather, must-see places, and insider tips.</p>
                        </div>
                        <form onSubmit={(e) => { e.preventDefault(); }} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <input type="email" required placeholder="Your email" style={{ padding: '0.75rem 1rem', border: '1.5px solid var(--color-sand-dark)', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', flex: 1, minWidth: '200px' }} />
                            <button type="submit" className="btn btn--primary">Download Free <ArrowRight size={15} /></button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

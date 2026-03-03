import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import './ContactPage.css';



const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', email: '', interests: '', website: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `New Form Submission:
Name: ${form.name}
Email: ${form.email}
Message: ${form.interests}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/94705522299?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };

    return (
        <main className="contact-page">
            {/* Page Header */}
            <section className="page-hero page-hero--contact">
                <div className="page-hero__bg">
                    <img src="/galle.png" alt="Sri Lanka contact" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)' }}>{t('contact.label')}</span>
                        <h1 className="page-hero__title">{t('contact.title')}</h1>
                        <p className="page-hero__subtitle">{t('contact.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    {/* FORM */}
                    <motion.div
                        className="contact-form-wrap"
                        initial="hidden" animate="visible" variants={fadeUp}
                    >
                        {submitted ? (
                            <div className="contact-success">
                                <div className="contact-success__icon">✓</div>
                                <h3>Thank you, {form.name}!</h3>
                                <p>We've received your enquiry and will send you a personalised itinerary within 48 hours.</p>
                                <a href="https://wa.me/94705522299" target="_blank" rel="noopener noreferrer" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                                    <MessageCircle size={16} /> Also chat on WhatsApp
                                </a>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-name">{t('contact.form_name')} *</label>
                                        <input
                                            id="contact-name" type="text" required
                                            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-email">Email Address *</label>
                                        <input
                                            id="contact-email" type="email" required
                                            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-interests">Interests & Preferences *</label>
                                    <textarea
                                        id="contact-interests" rows={6} required
                                        value={form.interests} onChange={e => setForm({ ...form, interests: e.target.value })}
                                        placeholder={t('contact.interests_placeholder')}
                                    />
                                </div>

                                <div className="form-row" style={{ display: 'none' }}>
                                    <div className="form-group">
                                        <label htmlFor="website">Website</label>
                                        <input
                                            id="website" type="text" autoComplete="off"
                                            value={form.website} onChange={e => setForm({ ...form, website: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn--primary btn--lg"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    {t('contact.form_submit')} <ArrowRight size={18} />
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* CONTACT INFO */}
                    <motion.div
                        className="contact-info"
                        initial="hidden" animate="visible"
                        variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2, duration: 0.6 } } }}
                    >
                        <h3>{t('contact.or_contact_directly')}</h3>
                        <div className="contact-info__items">
                            <a href={`mailto:${t('contact.email')}`} className="contact-info__item">
                                <div className="contact-info__icon"><Mail size={20} /></div>
                                <div>
                                    <p className="contact-info__label">Email</p>
                                    <p className="contact-info__value">{t('contact.email')}</p>
                                </div>
                            </a>
                            <a href={`https://wa.me/94705522299`} target="_blank" rel="noopener noreferrer" className="contact-info__item">
                                <div className="contact-info__icon contact-info__icon--wa"><MessageCircle size={20} /></div>
                                <div>
                                    <p className="contact-info__label">WhatsApp</p>
                                    <p className="contact-info__value">{t('contact.whatsapp')}</p>
                                </div>
                            </a>
                            <a href={`tel:${t('contact.phone')}`} className="contact-info__item">
                                <div className="contact-info__icon"><Phone size={20} /></div>
                                <div>
                                    <p className="contact-info__label">Phone</p>
                                    <p className="contact-info__value">{t('contact.phone')}</p>
                                </div>
                            </a>
                        </div>

                        <div className="contact-promise">
                            <MapPin size={18} color="var(--color-earth)" />
                            <div>
                                <h4>Our Promise</h4>
                                <p>You will receive a personalised itinerary draft within 24–48 hours of your enquiry. No pressure, no sales calls — just thoughtful journey planning.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

import { motion } from 'framer-motion';
import { ShieldCheck, Info, Settings, MousePointerClick } from 'lucide-react';
import './SharedPages.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CookiePolicy() {

    return (
        <main className="policy-page">
            <section className="page-hero page-hero--small">
                <div className="page-hero__bg">
                    <img src="/tea-plantation.png" alt="Sri Lanka Cookies" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="page-hero__title">Cookie Policy</h1>
                        <p className="page-hero__subtitle">Transparency about how we use cookies on our platform.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="policy-content">
                        <div className="policy-intro">
                            <p>Last Updated: March 2026</p>
                            <p>This Cookie Policy explains what cookies are and how we use them on the Zelenso Travel website. By using our site, you agree to the use of cookies as described in this policy.</p>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <Info className="policy-icon" />
                                <h2>What are Cookies?</h2>
                            </div>
                            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences over time, providing a smoother user experience.</p>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <ShieldCheck className="policy-icon" />
                                <h2>How We Use Cookies</h2>
                            </div>
                            <p>We use cookies for the following purposes:</p>
                            <ul>
                                <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly (e.g., language selection, navigation).</li>
                                <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our site, helping us improve content and performance.</li>
                                <li><strong>Marketing Cookies:</strong> To provide relevant updates or offers based on your browsing habits.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <Settings className="policy-icon" />
                                <h2>Managing Your Cookies</h2>
                            </div>
                            <p>Most web browsers allow you to control cookies through their settings. You can block or delete cookies, but please note that some features of our website may not function as intended if you do so.</p>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <MousePointerClick className="policy-icon" />
                                <h2>Third-Party Cookies</h2>
                            </div>
                            <p>Some third-party services on our site (like Google Analytics or integrated maps) may also place cookies on your device. We do not have direct control over these cookies.</p>
                        </div>

                        <div className="policy-cta" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--color-cream)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                            <p>Have questions? Reach out to us at <strong>contact@zelenso.com</strong></p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

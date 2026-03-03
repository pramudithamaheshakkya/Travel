import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import './SharedPages.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PrivacyPolicy() {

    return (
        <main className="policy-page">
            <section className="page-hero page-hero--small">
                <div className="page-hero__bg">
                    <img src="/sigiriya.png" alt="Sri Lanka Privacy" />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="page-hero__title">Privacy Policy</h1>
                        <p className="page-hero__subtitle">How we protect your personal data at Zelenso Travel.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container container--narrow">
                    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="policy-content">
                        <div className="policy-intro">
                            <p>Last Updated: March 2026</p>
                            <p>At Zelenso Travel, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <Eye className="policy-icon" />
                                <h2>1. Information We Collect</h2>
                            </div>
                            <p>We collect information that you provide directly to us through our contact forms, email, or WhatsApp. This may include:</p>
                            <ul>
                                <li><strong>Contact Details:</strong> Name, email address, and phone/WhatsApp number.</li>
                                <li><strong>Travel Preferences:</strong> Interests, preferred destinations, and specific requirements for your journey.</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, and usage data via cookies.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <Shield className="policy-icon" />
                                <h2>2. How We Use Your Information</h2>
                            </div>
                            <p>Your data is used strictly to provide you with a premium travel experience:</p>
                            <ul>
                                <li>Creating personalised itineraries and providing quotes.</li>
                                <li>Responding to your enquiries and providing customer support.</li>
                                <li>Improving our website functionality and user experience.</li>
                                <li>Complying with legal and regulatory requirements.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <Lock className="policy-icon" />
                                <h2>3. Data Protection & Sharing</h2>
                            </div>
                            <p>We do not sell, rent, or trade your personal data. We only share your information with trusted partners (such as boutique hotels or local guides) only when necessary to fulfill your travel arrangements.</p>
                            <p>We implement industry-standard security measures to protect your information from unauthorized access or disclosure.</p>
                        </div>

                        <div className="policy-section">
                            <div className="policy-section__header">
                                <FileText className="policy-icon" />
                                <h2>4. Your Rights</h2>
                            </div>
                            <p>Under GDPR and other privacy laws, you have the right to access, correct, or request the deletion of your personal data. You may also object to processing or request data portability.</p>
                            <p>To exercise any of these rights, please contact us at <strong>contact@zelenso.com</strong>.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

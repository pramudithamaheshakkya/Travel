import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <span className="footer__logo-mark">Z</span>
                            <span className="footer__logo-text">
                                <span>Zelenso</span>
                                <span>Travel</span>
                            </span>
                        </Link>
                        <p className="footer__tagline">{t('footer.tagline')}</p>
                        <div className="footer__socials">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer__tiktok">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.54V6.78a4.85 4.85 0 0 1-1.06-.09z" />
                                </svg>
                            </a>
                        </div>
                        <div className="footer__contact">
                            <a href="mailto:hello@zelesotravel.com" className="footer__contact-item">
                                <Mail size={14} />
                                <span>{t('contact.email')}</span>
                            </a>
                            <a href="tel:+94112345678" className="footer__contact-item">
                                <Phone size={14} />
                                <span>{t('contact.phone')}</span>
                            </a>
                        </div>
                    </div>

                    {/* Tours */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">{t('footer.tours_title')}</h4>
                        <ul className="footer__links">
                            <li><Link to="/private-tours">{t('nav.tours')}</Link></li>
                            <li><Link to="/honeymoon">{t('nav.honeymoon')}</Link></li>
                            <li><Link to="/wildlife">{t('nav.wildlife')}</Link></li>
                            <li><Link to="/contact">{t('hero.cta_primary')}</Link></li>
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">{t('footer.destinations_title')}</h4>
                        <ul className="footer__links">
                            <li><Link to="/destinations/sigiriya">Sigiriya</Link></li>
                            <li><Link to="/destinations/kandy">Kandy</Link></li>
                            <li><Link to="/destinations/ella">Ella</Link></li>
                            <li><Link to="/destinations/galle">Galle</Link></li>
                            <li><Link to="/destinations/yala">Yala National Park</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer__col">
                        <h4 className="footer__col-title">{t('footer.company_title')}</h4>
                        <ul className="footer__links">
                            <li><Link to="/about">{t('nav.about')}</Link></li>
                            <li><Link to="/blog">{t('nav.blog')}</Link></li>
                            <li><Link to="/contact">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">{t('footer.copyright')}</p>
                    <div className="footer__legal">
                        <a href="#">{t('footer.gdpr')}</a>
                        <a href="#">{t('footer.cookies')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

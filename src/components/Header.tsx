import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import './Header.css';

const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export default function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code);
        setLangOpen(false);
    };

    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

    const navLinks = [
        { to: '/private-tours', label: t('nav.tours') },
        { to: '/honeymoon', label: t('nav.honeymoon') },
        { to: '/wellness', label: t('wellness.label') },
        { to: '/wildlife', label: t('nav.wildlife') },
        { to: '/destinations', label: t('nav.destinations') },
        { to: '/about', label: t('nav.about') },
        { to: '/blog', label: t('nav.blog') },
    ];

    const isHome = location.pathname === '/';

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''} ${isHome && !scrolled ? 'header--transparent' : ''}`}>
            <div className="header__inner container">
                {/* Logo */}
                <Link to="/" className="header__logo">
                    <span className="header__logo-mark">Z</span>
                    <span className="header__logo-text">
                        <span className="header__logo-name">Zelenso</span>
                        <span className="header__logo-sub">Travel</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="header__nav" role="navigation" aria-label="Main navigation">
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`header__nav-link ${location.pathname === link.to ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Controls */}
                <div className="header__controls">
                    {/* Language Switcher */}
                    <div className="lang-switcher" onMouseLeave={() => setLangOpen(false)}>
                        <button
                            className="lang-switcher__trigger"
                            onClick={() => setLangOpen(!langOpen)}
                            aria-label="Switch language"
                            aria-expanded={langOpen}
                        >
                            <Globe size={15} />
                            <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                            <ChevronDown size={13} className={langOpen ? 'rotated' : ''} />
                        </button>
                        {langOpen && (
                            <div className="lang-switcher__dropdown">
                                {LANGUAGES.map(lang => (
                                    <button
                                        key={lang.code}
                                        className={`lang-switcher__option ${i18n.language === lang.code ? 'active' : ''}`}
                                        onClick={() => changeLanguage(lang.code)}
                                    >
                                        {lang.flag} {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CTA */}
                    <Link to="/contact" className="btn btn--primary btn--sm header__cta">
                        {t('nav.contact')}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="header__mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="header__mobile-menu">
                    <nav>
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`header__mobile-link ${location.pathname === link.to ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn--primary header__mobile-cta">
                            {t('hero.cta_primary')}
                        </Link>
                    </nav>
                    <div className="header__mobile-langs">
                        {LANGUAGES.map(lang => (
                            <button
                                key={lang.code}
                                className={`header__mobile-lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                                onClick={() => changeLanguage(lang.code)}
                            >
                                {lang.flag} {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

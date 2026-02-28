import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
const PrivateToursPage = React.lazy(() => import('./pages/PrivateToursPage'));
const WellnessPage = React.lazy(() => import('./pages/WellnessPage'));
import HoneymoonPage from './pages/HoneymoonPage';
import WildlifePage from './pages/WildlifePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

// Import shared page styles
import './pages/ContactPage.css';
import './pages/SharedPages.css';
import './pages/DestinationDetailPage.css';
import './pages/DestinationsPage.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={`main-content ${location.pathname === '/' ? 'main-content--home' : ''}`}>
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/private-tours" element={<PrivateToursPage />} />
            <Route path="/honeymoon" element={<HoneymoonPage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/wildlife" element={<WildlifePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
            {/* 404 */}
            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
                <h2>Page Not Found</h2>
                <p style={{ marginBottom: '2rem' }}>The page you're looking for doesn't exist.</p>
                <a href="/" className="btn btn--primary">Go Home</a>
              </div>
            } />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

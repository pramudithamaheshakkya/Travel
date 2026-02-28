import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const DESTINATION_DATA: Record<string, {
    name: string;
    image: string;
    heroImage: string;
    overview: string;
    bestTime: string;
    nights: string;
    experiences: string[];
    hotels: string;
    lat: string;
}> = {
    sigiriya: {
        name: 'Sigiriya',
        image: '/sigiriya.png',
        heroImage: '/sigiriya.png',
        overview: `Rising 200 metres above the surrounding plains, Sigiriya is Sri Lanka's most iconic landmark. This ancient rock fortress was built in the 5th century by King Kashyapa and features extraordinary frescoes, water gardens, and panoramic views across the jungle. A UNESCO World Heritage Site and an unmissable highlight of any Sri Lanka itinerary.`,
        bestTime: 'Year-round (best: Dec–Apr for clear skies)',
        nights: '1–2 nights',
        experiences: [
            'Climb Sigiriya Lion Rock fortress',
            'Explore the 5th-century water gardens',
            'See the world-famous Sigiriya frescoes',
            'Hike Pidurangala Rock for sunset views',
            'Visit the nearby Minneriya National Park (elephant gathering)',
            'Explore Dambulla Cave Temple (30 min drive)',
        ],
        hotels: 'Luxury eco-lodges and boutique hotels with jungle views',
        lat: '7.957',
    },
    kandy: {
        name: 'Kandy',
        image: '/kandy.png',
        heroImage: '/kandy.png',
        overview: `Kandy is Sri Lanka's last royal capital — a hillside city of temples, spice markets, and cool mountain air. Home to the Sacred Temple of the Tooth Relic, a UNESCO World Heritage Site, the city is a living cultural museum surrounded by lush tea country. The Kandy Lake and the atmospheric street markets make it one of Sri Lanka's most enchanting cities.`,
        bestTime: 'Year-round (best: Dec–Apr)',
        nights: '2–3 nights',
        experiences: [
            'Visit the Temple of the Sacred Tooth Relic',
            'Watch the Kandyan cultural performance',
            'Explore Peradeniya Royal Botanical Gardens',
            'Take a cooking class with a local family',
            'Visit a tea factory in the surrounding hills',
            'Experience the Esala Perahera festival (July/August)',
        ],
        hotels: 'Heritage boutique hotels overlooking Kandy Lake',
        lat: '7.299',
    },
    ella: {
        name: 'Ella',
        image: '/hero-bg.png',
        heroImage: '/hero-bg.png',
        overview: `Ella is a small mountain town in the heart of Sri Lanka's tea country, famous for stunning viewpoints, the iconic Nine Arch Bridge, and what many describe as the world's most scenic train journey. It's a favourite for hikers, nature lovers, and slow travellers. The mist-draped mountains, lush tea slopes, and cool highland air make Ella feel like nowhere else on earth.`,
        bestTime: 'December to March (clear views)',
        nights: '2–3 nights',
        experiences: [
            'Watch the train cross the Nine Arch Bridge',
            'Hike to Little Adam\'s Peak for sunrise',
            'Take the iconic Ella to Kandy train journey',
            'Visit Ravana Falls',
            'Hike to Ella Rock',
            'Explore local tea estate and factory',
        ],
        hotels: 'Boutique guesthouses and eco-retreats with valley views',
        lat: '6.868',
    },
    galle: {
        name: 'Galle',
        image: '/galle.png',
        heroImage: '/galle.png',
        overview: `Galle is a UNESCO World Heritage Site on Sri Lanka's southern coast. Its 17th-century Dutch colonial fort encloses cobblestone streets, boutique hotels, independent galleries, and excellent restaurants. The fort walls offer spectacular Indian Ocean views at sunset. Galle combines history, culture, and coastal beauty in a way that's entirely unique in Sri Lanka.`,
        bestTime: 'November to April',
        nights: '2–3 nights',
        experiences: [
            'Walk the 17th-century Dutch colonial fort walls',
            'Explore the boutique shops and galleries inside the fort',
            'Watch the famous stilt fishermen at sunrise',
            'Day trip to Mirissa or Unawatuna Beach',
            'Whale watching (December–April)',
            'Turtle hatchery visit at Kosgoda',
        ],
        hotels: 'Fort boutique hotels, historic villas, and beachfront resorts',
        lat: '6.053',
    },
    yala: {
        name: 'Yala National Park',
        image: '/yala-safari.png',
        heroImage: '/yala-safari.png',
        overview: `Yala National Park is Sri Lanka's most visited and second largest national park, covering 978 km² of diverse ecosystems. It supports the highest density of leopards in the world and is home to Asian elephants, sloth bears, crocodiles, and hundreds of bird species. A private game drive through Yala at dawn is one of the most extraordinary wildlife experiences in Asia.`,
        bestTime: 'February to July (best leopard sightings)',
        nights: '2–3 nights',
        experiences: [
            'Private dawn leopard tracking safari',
            'Elephant family sightings in the wetlands',
            'Sloth bear spotting (rare and exciting)',
            'Birdwatching — 200+ species recorded',
            'Sunset game drive along the coast',
            'Visit Block 5 for more exclusive safari experience',
        ],
        hotels: 'Eco-luxury safari lodges and tented camps at the park boundary',
        lat: '6.372',
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as any } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function DestinationDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const data = DESTINATION_DATA[slug || ''];

    if (!data) {
        return (
            <main style={{ textAlign: 'center', padding: '8rem 2rem' }}>
                <h2>Destination not found</h2>
                <Link to="/destinations" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                    View All Destinations
                </Link>
            </main>
        );
    }

    return (
        <main>
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero__bg">
                    <img src={data.heroImage} alt={data.name} />
                    <div className="overlay-dark" />
                </div>
                <div className="container page-hero__content">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" as any }}>
                        <span className="section-label" style={{ color: 'var(--color-sand)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <MapPin size={12} /> Sri Lanka Destination
                        </span>
                        <h1 className="page-hero__title">{data.name}</h1>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                            <span style={{ color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                                <Clock size={15} /> {data.nights}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.95rem' }}>
                                <Calendar size={15} /> {data.bestTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="dest-detail-grid">
                        {/* Main content */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2>Overview</h2>
                            <div className="divider" />
                            <p style={{ lineHeight: 1.85, color: 'var(--color-text)' }}>{data.overview}</p>

                            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>Top Experiences</h3>
                            <motion.ul
                                className="dest-experiences"
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                            >
                                {data.experiences.map((exp, i) => (
                                    <motion.li key={i} variants={fadeUp} className="dest-experience-item">
                                        <span className="dest-experience-dot" />
                                        <span>{exp}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <div style={{ marginTop: '3rem' }}>
                                <h3>Accommodation</h3>
                                <p style={{ marginTop: '0.5rem' }}>{data.hotels}</p>
                            </div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.aside
                            className="dest-sidebar"
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.25, duration: 0.65 } } }}
                        >
                            <div className="dest-sidebar__card">
                                <h4>Quick Facts</h4>
                                <ul className="dest-sidebar__list">
                                    <li><Clock size={15} /><div><span>Suggested Stay</span><strong>{data.nights}</strong></div></li>
                                    <li><Calendar size={15} /><div><span>Best Time</span><strong>{data.bestTime}</strong></div></li>
                                    <li><MapPin size={15} /><div><span>Location</span><strong>Sri Lanka</strong></div></li>
                                </ul>
                            </div>

                            <div className="dest-sidebar__cta">
                                <h4>Include {data.name} in Your Tour?</h4>
                                <p>Tell us your interests and we'll build the perfect itinerary featuring {data.name}.</p>
                                <Link to="/contact" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                                    Plan My Trip <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="dest-sidebar__other">
                                <h4>Other Destinations</h4>
                                {Object.entries(DESTINATION_DATA)
                                    .filter(([key]) => key !== slug)
                                    .slice(0, 4)
                                    .map(([key, d]) => (
                                        <Link key={key} to={`/destinations/${key}`} className="dest-sidebar__other-link">
                                            <img src={d.image} alt={d.name} />
                                            <span>{d.name}</span>
                                        </Link>
                                    ))}
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>
        </main>
    );
}

import json

wellness_en = {
    "label": "Wellness & Ayurveda",
    "title": "Restore Your Balance in Sri Lanka",
    "subtitle": "Escape the noise. From ancient Ayurveda to sunrise beach yoga, discover a deeper kind of healing in the tropics.",
    "why_title": "Why Sri Lanka for Wellness?",
    "why_subtitle": "More than just a spa holiday \u2014 a true return to nature.",
    "reasons": {
        "r1_title": "2,500-Year Ayurveda Heritage",
        "r1_desc": "Authentic, doctor-led treatments passing down millennia of profound healing knowledge.",
        "r2_title": "Nature's Pharmacy",
        "r2_desc": "Treatments use fresh, locally grown herbs, oils, and organic ingredients you just can't find in Europe.",
        "r3_title": "Ocean & Mountain Energy",
        "r3_desc": "Meditate to the sound of the Indian Ocean or find stillness in the misty, cool upland tea estates.",
        "r4_title": "Uncrowded & Authentic",
        "r4_desc": "Far from the commercialized crowds of other Asian hubs, offering genuine peace and safety."
    },
    "packages_title": "Wellness Experiences We Offer",
    "packages": {
        "p1_title": "Ayurveda Detox Retreat (7\u201314 Days)",
        "p1_desc": "A complete physical and mental reset led by certified Ayurvedic doctors.",
        "p1_f1": "Private doctor consultation & pulse reading",
        "p1_f2": "Personalized herbal treatments & massages",
        "p1_f3": "Panchakarma therapy & detox diet",
        "p1_f4": "Airport transfers & beautiful tropical setting",
        "p1_price": "Essential Wellness: From \u20ac900",
        
        "p2_title": "Beach Yoga & Mindfulness Escape (5\u201310 Days)",
        "p2_desc": "Realign your body and mind with the rhythm of the ocean.",
        "p2_f1": "Sunrise beach yoga & guided meditation",
        "p2_f2": "Surf therapy & relaxation time",
        "p2_f3": "Organic seafood & vegan dining options",
        "p2_f4": "Boutique beachfront accommodation",
        "p2_price": "Essential Wellness: From \u20ac1,100",

        "p3_title": "Tea & Mountain Healing Retreat (7 Days)",
        "p3_desc": "A cool-climate digital detox surrounded by infinite green.",
        "p3_f1": "Luxury tea estate bungalow stay",
        "p3_f2": "Guided forest nature walks",
        "p3_f3": "Complete digital detox & mindfulness program",
        "p3_f4": "Herbal steam & deep tissue massage therapy",
        "p3_price": "Premium Healing: From \u20ac1,800",

        "p4_title": "Luxury Eco-Wellness Retreat",
        "p4_desc": "The ultimate high-end healing experience with absolute privacy.",
        "p4_f1": "Private eco-luxury villa stay",
        "p4_f2": "Dedicated private chef (wellness menu)",
        "p4_f3": "Premium spa treatments & daily yoga",
        "p4_f4": "Exclusive cultural temple meditation",
        "p4_price": "Luxury Escape: From \u20ac2,800"
    },
    "why_us_title": "Why Plan With Zelenso Travel?",
    "why_us": {
        "u1": "Handpicked, certified wellness resorts only",
        "u2": "English, German & French speaking support",
        "u3": "24/7 on-ground assistance",
        "u4": "100% personalized itineraries",
        "u5": "Safe, private luxury transport",
        "u6": "European-friendly service standards"
    },
    "faq_title": "Frequently Asked Questions",
    "faq": {
        "q1": "Is Sri Lanka good for Ayurveda retreats?",
        "a1": "Absolutely. Sri Lanka shares the birthplace of Ayurveda with India but offers a distinctively softer, more tropical, and incredibly hospitable approach to wellness, often set against pristine beaches or lush jungles.",
        "q2": "What is the best time to visit Sri Lanka for wellness?",
        "a2": "Sri Lanka is a year-round destination. The South/West coasts are best from November to April, while the East coast is perfect from May to September. For hill country retreats, the weather is pleasant all year.",
        "q3": "Is Sri Lanka safe for solo female travelers?",
        "a3": "Yes, Sri Lanka is highly regarded as a safe destination for solo female travelers. Zelenso provides dedicated private chauffeurs and carefully vets all wellness resorts for utmost security and comfort.",
        "q4": "Do I need a visa for Sri Lanka from the UK, Germany, or France?",
        "a4": "Yes, but it is a simple process. Travelers from these countries can easily apply for an Electronic Travel Authorization (ETA) online before arrival."
    }
}

wellness_fr = {
    "label": "Bien-\u00eatre & Ayurveda",
    "title": "Restaurez Votre \u00c9quilibre au Sri Lanka",
    "subtitle": "\u00c9chappez au bruit. De l'Ayurveda mill\u00e9naire au yoga sur la plage \u00e0 l'aube, d\u00e9couvrez une gu\u00e9rison profonde sous les tropiques.",
    "why_title": "Pourquoi le Sri Lanka pour le Bien-\u00eatre?",
    "why_subtitle": "Plus qu'un s\u00e9jour spa \u2014 un v\u00e9ritable retour \u00e0 la nature.",
    "reasons": {
        "r1_title": "H\u00e9ritage Ayurv\u00e9dique de 2 500 ans",
        "r1_desc": "Traitements authentiques dirig\u00e9s par des m\u00e9decins transmettant des mill\u00e9naires de connaissances de gu\u00e9rison.",
        "r2_title": "La Pharmacie de la Nature",
        "r2_desc": "Utilisation d'herbes fra\u00eeches, d'huiles et d'ingr\u00e9dients biologiques introuvables en Europe.",
        "r3_title": "\u00c9nergie de l'Oc\u00e9an et des Montagnes",
        "r3_desc": "M\u00e9ditez au son de l'Oc\u00e9an Indien ou trouvez le calme dans les plantations de th\u00e9 brumeuses.",
        "r4_title": "D\u00e9tendue et Authentique",
        "r4_desc": "Loin de la foule commerciale des autres hubs asiatiques, offrant une v\u00e9ritable s\u00e9curit\u00e9 et s\u00e9r\u00e9nit\u00e9."
    },
    "packages_title": "Nos Exp\u00e9riences Bien-\u00eatre",
    "packages": {
        "p1_title": "Retraite D\u00e9tox Ayurveda (7\u201314 Jours)",
        "p1_desc": "Une r\u00e9initialisation compl\u00e8te dirig\u00e9e par des m\u00e9decins ayurv\u00e9diques certifi\u00e9s.",
        "p1_f1": "Consultation priv\u00e9e & diagnostic",
        "p1_f2": "Massages & traitements personnalis\u00e9s",
        "p1_f3": "Th\u00e9rapie Panchakarma & r\u00e9gime d\u00e9tox",
        "p1_f4": "Transferts a\u00e9roport & cadre tropical majestueux",
        "p1_price": "Bien-\u00eatre Essentiel : \u00c0 partir de 900 \u20ac",
        
        "p2_title": "\u00c9vasion Plage, Yoga & Pleine Conscience (5\u201310 Jours)",
        "p2_desc": "R\u00e9alignez votre corps et esprit avec le rythme de l'oc\u00e9an.",
        "p2_f1": "Yoga sur la plage au lever du soleil",
        "p2_f2": "Th\u00e9rapie par le surf & d\u00e9tente",
        "p2_f3": "Fruits de mer biologiques & options v\u00e9gan",
        "p2_f4": "H\u00e9bergement boutique en bord de mer",
        "p2_price": "Bien-\u00eatre Essentiel : \u00c0 partir de 1 100 \u20ac",

        "p3_title": "Gu\u00e9rison en Montagne & Th\u00e9 (7 Jours)",
        "p3_desc": "Une d\u00e9tox digitale en climat frais entour\u00e9 d'une verdure infinie.",
        "p3_f1": "S\u00e9jour luxueux dans un bungalow de plantation",
        "p3_f2": "Promenades guid\u00e9es en for\u00eat",
        "p3_f3": "Programme de d\u00e9tox digitale & r\u00e9flexion",
        "p3_f4": "Vapeur aux herbes & massages profonds",
        "p3_price": "Gu\u00e9rison Premium : \u00c0 partir de 1 800 \u20ac",

        "p4_title": "Retraite \u00c9co-Bien-\u00eatre de Luxe",
        "p4_desc": "L'exp\u00e9rience ultime de r\u00e9g\u00e9n\u00e9ration avec une intimit\u00e9 absolue.",
        "p4_f1": "S\u00e9jour en villa \u00e9co-luxe priv\u00e9e",
        "p4_f2": "Chef priv\u00e9 d\u00e9di\u00e9 (menu bien-\u00eatre)",
        "p4_f3": "Traitements spa premium & yoga quotidien",
        "p4_f4": "M\u00e9ditation culturelle d'exclusivit\u00e9",
        "p4_price": "\u00c9vasion Luxe : \u00c0 partir de 2 800 \u20ac"
    },
    "why_us_title": "Pourquoi Organiser avec Zelenso Travel?",
    "why_us": {
        "u1": "Seuls des complexes bien-\u00eatre s\u00e9lectionn\u00e9s",
        "u2": "Support francophone, anglophone & germanophone",
        "u3": "Assistance sur place 24/7",
        "u4": "Itin\u00e9raires 100% personnalis\u00e9s",
        "u5": "Transport priv\u00e9 s\u00e9curis\u00e9 & confort",
        "u6": "Standards de service adapt\u00e9s \u00e0 l'Europe"
    },
    "faq_title": "Foire Aux Questions",
    "faq": {
        "q1": "Le Sri Lanka est-il id\u00e9al pour l'Ayurveda?",
        "a1": "Absolument. Le Sri Lanka partage l'Ayurveda avec l'Inde mais offre une approche plus douce et tropicale, souvent situ\u00e9e face \u00e0 de belles plages ou montagnes luxuriantes.",
        "q2": "Quelle est la meilleure p\u00e9riode pour le bien-\u00eatre au Sri Lanka?",
        "a2": "Les c\u00f4tes Sud/Ouest sont privil\u00e9gi\u00e9es de novembre \u00e0 avril. L'Est de mai \u00e0 septembre. La r\u00e9gion des th\u00e9s est int\u00e9ressante toute l'ann\u00e9e.",
        "q3": "Est-ce s\u00e9curis\u00e9 pour les voyageuses solo?",
        "a3": "Oui, tr\u00e8s s\u00e9curis\u00e9. Pour le plus grand confort Zelenso fournit un chauffeur priv\u00e9 et nous filtrons rigoureusement chaque centre.",
        "q4": "Faut-il un visa depuis la France?",
        "a4": "Oui, mais tr\u00e8s simple. La demande d'autorisation \u00e9lectronique (ETA) se fait rapidement en ligne avant le d\u00e9part."
    }
}

wellness_de = {
    "label": "Wellness & Ayurveda",
    "title": "Stellen Sie Ihr Gleichgewicht wieder her",
    "subtitle": "Entfliehen Sie dem L\u00e4rm. Ayurveda oder Yoga am Strand \u2013 entdecken Sie tiefe Heilung im Tropenparadies.",
    "why_title": "Warum Sri Lanka f\u00fcr Wellness?",
    "why_subtitle": "Mehr als nur Spa \u2014 eine wahre R\u00fcckkehr zur Natur.",
    "reasons": {
        "r1_title": "2.500 Jahre Ayurveda Erbe",
        "r1_desc": "Authentische, von \u00c4rzten geleitete Behandlungen basierend auf Jahrtausenden altbekannter Heilkunst.",
        "r2_title": "Apotheke der Natur",
        "r2_desc": "Frische Kr\u00e4uter, \u00d6le und \u00f6kologische Zutaten aus eigenem Anbau.",
        "r3_title": "Energie von Ozean & Bergen",
        "r3_desc": "Malediven? Finden Sie bei uns mehr Ruhe im Teeland der Berge oder mediativ am indischen Ozean.",
        "r4_title": "Authentisch & unaufgeregt",
        "r4_desc": "Weit weg von der kommerziellen Hektik asiatischer Mainstreamziele, f\u00fcr vollkommene Entspannung."
    },
    "packages_title": "Unsere Wellness-Erlebnisse",
    "packages": {
        "p1_title": "Ayurveda Detox Retreat (7\u201314 Tage)",
        "p1_desc": "Gef\u00fchrtes Zur\u00fccksetzen des K\u00f6rpers, geleitet von \u00e4rztlicher Hand.",
        "p1_f1": "Private Konsultation & Pulsdiagnose",
        "p1_f2": "Pers\u00f6nliche Kr\u00e4uter- massagen",
        "p1_f3": "Panchakarma Therapie & Detox Di\u00e4t",
        "p1_f4": "Alle Transfers inklusive bei tropischer Kulisse",
        "p1_price": "Basic Wellness: Ab \u20ac900",
        
        "p2_title": "Strand, Yoga & Mindfulness Escape (5\u201310 Tage)",
        "p2_desc": "Im Rhythmus der Seele die Mitte wiederfinden.",
        "p2_f1": "Sonnenaufgangs Yoga & Meditation",
        "p2_f2": "Surftherapie zum Entspannen",
        "p2_f3": "Bio R\u00fcckzug & vegane K\u00fcche",
        "p2_f4": "Boutique Unterkunft am Meer",
        "p2_price": "Basic Wellness: Ab \u20ac1.100",

        "p3_title": "Tee & Berg Heilungskur (7 Tage)",
        "p3_desc": "Ein wundervoller Digital-Detox in klammer gr\u00fcner Lunge.",
        "p3_f1": "H\u00fctten-Stay bei der Tee-Plantage",
        "p3_f2": "Wanderungen f\u00fcr innere Ruhe",
        "p3_f3": "Kompletter Digital-Detox Tagrhythmus",
        "p3_f4": "Dampfb\u00e4der & Tiefengewebemassage",
        "p3_price": "Premium Heilung: Ab \u20ac1.800",

        "p4_title": "Eco-Wellness & Luxus",
        "p4_desc": "Das Ma\u00df aller Dinge f\u00fcr Entspannung in absoluter Natur-Privatsph\u00e4re.",
        "p4_f1": "Umweltbewusste private Luxusvilla",
        "p4_f2": "Hauschef f\u00fcr die Wellnessmen\u00fcs",
        "p4_f3": "T\u00e4glich Spa & private Yoga Retreats",
        "p4_f4": "Kulturelle Einblicke & Tempel-Meditationen",
        "p4_price": "Luxus Escape: Ab \u20ac2.800"
    },
    "why_us_title": "Weshalb bei Zelenso Travel planen?",
    "why_us": {
        "u1": "Ausgew\u00e4hlte, zertifizierte Resorts",
        "u2": "Support auf Deutsch, Englisch & Franz\u00f6sisch",
        "u3": "24/7 Notfall-Hilfe vor Ort",
        "u4": "100% individualisierte Abl\u00e4ufe",
        "u5": "Private Luxustransporte z.B. Benz/SUV",
        "u6": "Europ\u00e4ischer Servicestandard"
    },
    "faq_title": "H\u00e4ufig Gestellte Fragen",
    "faq": {
        "q1": "Ist das Land gut f\u00fcr Ayurveda Kuren?",
        "a1": "Ja! Anders als in st\u00e4dtischen \u00fcberf\u00fcllten Regionen haben Sie hier ungest\u00f6rte tropische Buchten zur ungest\u00f6rten spirituellen Heilung mit hervorragenden \u00c4rzten.",
        "q2": "Was ist die beste Jahreszeit?",
        "a2": "Ganzj\u00e4hrig m\u00f6glich. F\u00fcr den westlichen S\u00fcden Nov\u2013April. Zentral-Ausland ist klimatisch konstant k\u00fchl u. erfrischend.",
        "q3": "Sind Einzelreisen der Frauen im Land wirklich sicher?",
        "a3": "Verl\u00e4ssliche Antworten: Ja. Sri Lanka bietet einen h\u00f6flichen Tourismus-Vorteil und unsere private Guide-Betreuung untermauert das f\u00fcr Ihren Fokus absolut.",
        "q4": "Brauche ich aus Deutschland ein Visum?",
        "a4": "Ein klassisches Online-Verfahren (ETA), l\u00e4sst den Antrag binnen kurzer Zeit unkompliziert vor der Anreise best\u00e4tigt da sein."
    }
}

for (lang, data) in [("en", wellness_en), ("fr", wellness_fr), ("de", wellness_de)]:
    with open(f"src/i18n/locales/{lang}.json", "r") as f:
        file_json = json.load(f)
        
    try:
        del file_json["wellness"]
    except KeyError:
        pass
        
    file_json["wellness"] = data
    
    with open(f"src/i18n/locales/{lang}.json", "w") as f:
        json.dump(file_json, f, indent=4)

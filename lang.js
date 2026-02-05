// Language switcher script
const translations = {
    sk: {
        // Navigation
        home: 'Domov',
        about: 'O nás',
        contact: 'Kontakty',
        
        // Hero section
        heroTitle: 'CHEMICKÉ INOVÁCIE PRE VÁŠ POKROK',
        heroSubtitle: 'Moderné riešenia, certifikovaná kvalita a odborné poradenstvo pre váš priemysel.',
        
        // Features
        reliability: 'SPOĽAHLIVOSŤ',
        reliabilityText: 'V dynamickom svete priemyslu a výskumu je spoľahlivosť kľúčová. Spolupracujeme s lídrami v distribúcii vysokokvalitných chemikálií pre priemyselné a laboratórne využitie.',
        
        expertise: 'ODBORNÉ PORADENSTVO A PODPORA',
        expertiseText: 'Naším cieľom je nielen poskytovať chemikálie, ale aj ponúkať odborné poradenstvo. Náš tím odborníkov rozumie vašim potrebám a dodáva riešenia presne na mieru.',
        
        products: 'ŠIROKỲ SORTIMENT PRODUKTOV',
        productsText: 'Sme hrdí na širokỳ sortiment produktov — od základných chemikálií po špecializované zlúčeniny a ekologicky šetrné riešenia. Zaručujeme kvalitu každej dodávky.',
        
        // Icon cards
        certifiedQuality: 'Certifikovaná kvalita',
        certifiedQualityText: 'Všetky produkty podliehajú prísnym kvalitativnym testom a sú certifikované podľa medzinárodných noriem.',
        
        experience: 'Dlhoročné skúsenosti',
        experienceText: 'Viac ako 20 rokov praxe v chemickom priemysle. Trusted partner pre stovky firiem.',
        
        flexibility: 'Flexibilita objednávok',
        flexibilityText: 'Prispôsobujeme sa vašim potrebám. Možnosť individuálneho balenia a personalizácie.',
        
        individualApproach: 'Individuálny prístup',
        individualApproachText: 'Každý klient je pre nás jedinečný. Personalizované konzultácie a podpora pri výbere produktov.',
        
        expertAdvice: 'Odborné poradenstvo',
        expertAdviceText: 'Náš tím chemikov a odborníkov je stále pripravený pomôcť s technickými otázkami a riešeniami.',
        
        wideRange: 'Široký sortiment',
        wideRangeText: 'Rozsiahly výber chemických produktov a laboratorného vybavenia od svetových výrobcov.',
        
        exclusiveDistributor: 'Výhradný distribútor',
        exclusiveDistributorText: 'Oficiálny partner viacerých prémiumových značiek v sektore chemických produktov.',
        
        // Footer
        information: 'Informácie',
        termsConditions: 'Všeobecné obchodné podmienky',
        privacyCookies: 'Ochrana osobných údajov a Cookies',
        complaintsProcedure: 'Reklamačný poriadok',
        withdrawalForm: 'Formulár na odstúpenie od zmluvy',
        complaintForm: 'Reklamačný formulár',
        
        quickLinks: 'Rýchle odkazy',
        homeFooter: 'Domov',
        aboutFooter: 'O nás',
        contactFooter: 'Kontakty',
        discounts: 'Zľavy',
        
        contactInfo: 'Kontaktné informácie',
        companyName: 'STELACHEM spol. s r.o.',
        companyAddress: 'Karpatská nám. 10A 831 06 Bratislava',
        phone: '00421 903 481 012',
        email: 'stelachem@stelachem.sk',
        
        copyright: '© 2026 Stelachem.sk, Všetky práva vyhradené.',
        
        // About page
        aboutPageTitle: 'O NÁS',
        block1Title: 'Všetko pre laboratórium – pod jednou strechou.',
        block1Text: 'Od základných chemikálií až po špičkové prístroje – pomáhame laboratóriám naprieč všetkými odvetviami zabezpečiť hladký a efektívny chod. Či už pôsobíte vo zdravotníctve, farmácii, priemysle, školstve alebo vo výskume, u nás nájdete všetko, čo potrebujete.',
        
        block2Title: 'Špecialisti na chémiu',
        block2Text: 'S hrdosťou pôsobíme ako výhradný distribútor slovenského výrobcu MIKROCHEM, svetového lídra ACROS Organics a portfólia ThermoScientific. Vďaka týmto partnerstvám vám vieme ponúknuť kvalitné a overené chemikálie a laboratórne produkty, ktoré sú zárukou spoľahlivosti.',
        
        block3Title: 'Odborné poradenstvo ako pridaná hodnota',
        block3Text: 'Náš tím skúsených odborníkov je pripravený poradiť pri výbere správneho riešenia aj v tých najnáročnejších situáciách. Sme tu, aby vaše laboratórium fungovalo bez problémov – bezpečne a efektívne.',
        
        block4Title: 'Kvalita a bezpečnosť na prvom mieste',
        block4Text: 'Naše aktivity sú riadené podľa najvyšších štandardov kvality a environmentálneho manažérstva. Pravidelne prechádzame auditmi, aby sme vám mohli garantovať spoľahlivosť a bezpečnosť našich riešení.',
        
        // Contact page
        contactPageTitle: 'KONTAKTY',
        managementTitle: 'Vedenie spoločnosti',
        receptionTitle: 'Recepcia',
        salesTitle: 'Obchodné oddelenie',
        
        // Contact roles SK
        roleManagementBoard: 'konateľka; úhrady',
        roleReception: 'recepcia',
        roleSalesDirector: 'obchodný riaditeľ',
        roleProductManager: 'produktový manažér',
        roleSalesRep: 'obchodný zástupca – stredné Slovensko',
        roleOrdersLogisticsHead: 'objednávky, vedúca logistiky',
        roleOrdersLogistics: 'objednávky, logistika',
        roleProcurement: 'nákupca'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About Us',
        contact: 'Contact',
        
        // Hero section
        heroTitle: 'CHEMICAL INNOVATIONS FOR YOUR PROGRESS',
        heroSubtitle: 'Modern solutions, certified quality and expert advice for your industry.',
        
        // Features
        reliability: 'RELIABILITY',
        reliabilityText: 'In the dynamic world of industry and research, reliability is key. We partner with leaders in the distribution of high-quality chemicals for industrial and laboratory use.',
        
        expertise: 'EXPERT ADVICE AND SUPPORT',
        expertiseText: 'Our goal is not only to provide chemicals, but also to offer expert advice. Our team of experts understands your needs and delivers tailor-made solutions.',
        
        products: 'WIDE RANGE OF PRODUCTS',
        productsText: 'We are proud of our wide range of products — from basic chemicals to specialized compounds and eco-friendly solutions. We guarantee the quality of every delivery.',
        
        // Icon cards
        certifiedQuality: 'Certified Quality',
        certifiedQualityText: 'All products undergo rigorous quality testing and are certified according to international standards.',
        
        experience: 'Years of Experience',
        experienceText: 'Over 20 years of experience in the chemical industry. Trusted partner for hundreds of companies.',
        
        flexibility: 'Order Flexibility',
        flexibilityText: 'We adapt to your needs. Option of individual packaging and customization.',
        
        individualApproach: 'Individual Approach',
        individualApproachText: 'Each customer is unique to us. Personalized consultations and support in product selection.',
        
        expertAdvice: 'Expert Advice',
        expertAdviceText: 'Our team of chemists and experts is always ready to help with technical questions and solutions.',
        
        wideRange: 'Wide Range',
        wideRangeText: 'Extensive selection of chemical products and laboratory equipment from world manufacturers.',
        
        exclusiveDistributor: 'Exclusive Distributor',
        exclusiveDistributorText: 'Official partner of several premium brands in the chemical products sector.',
        
        // Footer
        information: 'Information',
        termsConditions: 'Terms and Conditions',
        privacyCookies: 'Data Protection and Cookies',
        complaintsProcedure: 'Complaint Procedure',
        withdrawalForm: 'Withdrawal Form',
        complaintForm: 'Complaint Form',
        
        quickLinks: 'Quick Links',
        homeFooter: 'Home',
        aboutFooter: 'About Us',
        contactFooter: 'Contact',
        discounts: 'Discounts',
        
        contactInfo: 'Contact Information',
        companyName: 'STELACHEM spol. s r.o.',
        companyAddress: 'Karpatská nám. 10A 831 06 Bratislava',
        phone: '00421 903 481 012',
        email: 'stelachem@stelachem.sk',
        
        copyright: '© 2026 Stelachem.sk, All rights reserved.',
        
        // About page
        aboutPageTitle: 'ABOUT US',
        block1Title: 'Everything for a laboratory – under one roof.',
        block1Text: 'From basic chemicals to cutting-edge instruments – we help laboratories across all industries ensure smooth and efficient operation. Whether you work in healthcare, pharmaceuticals, industry, education or research, you\'ll find everything you need with us.',
        
        block2Title: 'Chemistry Specialists',
        block2Text: 'We are proud to be an exclusive distributor of the Slovak manufacturer MIKROCHEM, world leader ACROS Organics and ThermoScientific portfolio. Thanks to these partnerships, we can offer you quality and proven chemicals and laboratory products that are a guarantee of reliability.',
        
        block3Title: 'Expert Advice as Added Value',
        block3Text: 'Our team of experienced specialists is ready to advise on the selection of the right solution even in the most challenging situations. We are here to make your laboratory work smoothly – safely and efficiently.',
        
        block4Title: 'Quality and Safety First',
        block4Text: 'Our activities are governed by the highest standards of quality and environmental management. We regularly undergo audits to guarantee you reliability and safety of our solutions.',
        
        // Contact page
        contactPageTitle: 'CONTACTS',
        managementTitle: 'Company Management',
        receptionTitle: 'Reception',
        salesTitle: 'Sales Department',
        
        // Contact roles EN
        roleManagementBoard: 'Managing Director; Finance',
        roleReception: 'Reception',
        roleSalesDirector: 'Sales Director',
        roleProductManager: 'Product Manager',
        roleSalesRep: 'Sales Representative – Central Slovakia',
        roleOrdersLogisticsHead: 'Orders, Logistics Manager',
        roleOrdersLogistics: 'Orders, Logistics',
        roleProcurement: 'Procurement'
    }
};

// Get current language from localStorage or default to Slovak
function getCurrentLanguage() {
    return localStorage.getItem('lang') || 'sk';
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    updatePageLanguage(lang);
    updateLanguageButtons(lang);
}

// Update all translatable elements on the page
function updatePageLanguage(lang) {
    const t = translations[lang];
    
    // Update nav links
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Re-apply active link styling after translation
    setActiveNavLink();
}

// Set active nav link based on current page
function setActiveNavLink() {
    const links = document.querySelectorAll('.navbar nav a');
    const path = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === path || link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

// Update language button states
function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLanguage();
    updatePageLanguage(currentLang);
    updateLanguageButtons(currentLang);
    setActiveNavLink();

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

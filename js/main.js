/**
 * TS URBAN ALLIED SERVICES & ENTERPRISES (PRIVATE) LIMITED
 * Main Interactive Controller
 * Features:
 * - Permanent Fixed Sticky Navbar (Scroll transitions & Active Navigation with IntersectionObserver)
 * - Mobile Navigation Drawer & Hamburger Animation
 * - Premium Animated Service Detail Modal (Verbatim PDF Source Data, Watermark Header, Staggered Reveal, Smooth Exit)
 * - Video Story & Quote Request Modals
 * - Parallax Motion & Viewport Fit Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // =========================================================================
    // 1. COMPLETE VERBATIM SERVICE DATA (SOURCE: TS URBAN COMPANY PROFILE PDF)
    // =========================================================================
    const serviceData = {
        'janitorial-cleaning': {
            number: '01',
            title: 'JANITORIAL & CLEANING SERVICES',
            tagline: 'CLEAN SPACES SAFE PLACES BETTER PLACES',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
            intro: 'Providing professional and reliable cleaning solutions to create clean, safe and healthy environments for every client.',
            servicesTitle: 'OUR SERVICES',
            services: [
                { title: 'OFFICE CLEANING', desc: 'Comprehensive daily and periodic corporate office sanitization.' },
                { title: 'WASHROOM SANITATION', desc: 'Deep hygienic washroom cleaning and infection control.' },
                { title: 'DUSTING & VACUUMING', desc: 'Detailed surface dusting, upholstery, and carpet vacuuming.' },
                { title: 'WASTE MANAGEMENT', desc: 'Safe disposal, recycling, and environmental waste handling.' },
                { title: 'GENERAL CLEANING', desc: 'Thorough commercial and residential space maintenance.' }
            ],
            featuresTitle: 'WHY CHOOSE US',
            features: [
                { title: 'PROFESSIONAL TEAM', desc: 'Trained & experienced cleaning staff.' },
                { title: 'QUALITY SERVICE', desc: 'High standards with attention to detail.' },
                { title: 'SAFE & HYGIENIC', desc: 'Safe products for a healthier environment.' },
                { title: 'ON TIME', desc: 'Reliable service you can count on.' },
                { title: 'CUSTOMER FOCUSED', desc: 'Your satisfaction is our priority.' }
            ]
        },

        'online-trading': {
            number: '02',
            title: 'ONLINE TRADING',
            tagline: 'SMART TRADING | BETTER DECISIONS | FINANCIAL FREEDOM',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
            intro: 'Our online trading services help you trade smarter, manage risks and grow your investments with confidence.',
            servicesTitle: 'OUR SERVICES',
            services: [
                { title: 'MARKET ANALYSIS', desc: 'In-depth market research and trend analysis.' },
                { title: 'STRATEGY PLANNING', desc: 'Personalized trading strategies for better results.' },
                { title: 'RISK MANAGEMENT', desc: 'Smart risk management to protect your capital.' },
                { title: 'TRADE EXECUTION', desc: 'Fast and secure trade execution.' },
                { title: 'LEARNING & SUPPORT', desc: 'Continuous guidance and support for traders.' }
            ],
            featuresTitle: 'OUR STRENGTHS',
            features: [
                { title: 'PROVEN RESULTS', desc: 'Data-driven strategies for consistent growth.' },
                { title: 'SECURE & RELIABLE', desc: 'Safe, transparent and trusted trading services.' },
                { title: 'EXPERT TEAM', desc: 'Experienced traders and analysts.' },
                { title: '24/7 SUPPORT', desc: 'We are here to support you anytime.' },
                { title: 'YOUR SUCCESS', desc: 'Your goals are our top priority.' }
            ]
        },

        'manpower-supply': {
            number: '03',
            title: 'MANPOWER',
            tagline: 'RIGHT PEOPLE | RIGHT SKILLS | RIGHT TIME',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            intro: 'Reliable manpower solutions to meet your business needs. We provide skilled, semi-skilled and unskilled staff for all types of industries with professionalism and trust.',
            servicesTitle: 'OUR MANPOWER SERVICES',
            services: [
                { title: 'SKILLED MANPOWER', desc: 'Qualified and experienced professionals for specialized tasks.' },
                { title: 'SEMI-SKILLED MANPOWER', desc: 'Trained and reliable staff to support your operations efficiently.' },
                { title: 'UNSKILLED MANPOWER', desc: 'Dependable workers for general and supporting roles.' },
                { title: 'TEMPORARY STAFFING', desc: 'Short-term staffing solutions to meet your urgent requirements.' },
                { title: 'CONTRACT & OUTSOURCING', desc: 'Flexible contract and outsourcing services tailored to your needs.' }
            ],
            featuresTitle: 'WHY CHOOSE US',
            features: [
                { title: 'TRUSTED SERVICES', desc: 'Reliable and dependable manpower solutions.' },
                { title: 'VERIFIED WORKFORCE', desc: 'Background verified and skilled professionals.' },
                { title: 'QUALITY ASSURED', desc: 'We ensure quality and timely delivery.' },
                { title: 'ON TIME SUPPLY', desc: 'Right people at the right time.' },
                { title: 'CLIENT SATISFACTION', desc: 'Your satisfaction is our priority.' }
            ]
        },

        'employment-services': {
            number: '04',
            title: 'EMPLOYMENT',
            tagline: 'RIGHT PEOPLE | RIGHT OPPORTUNITIES | BETTER FUTURE',
            secondaryTagline: 'BUILDING CAREERS | BUILDING FUTURES',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
            intro: 'Connecting talent with opportunities. We provide end-to-end employment solutions to help businesses grow and individuals build a better career.',
            servicesTitle: 'OUR EMPLOYMENT SERVICES',
            services: [
                { title: 'JOB PLACEMENT', desc: 'We match the right candidates with the right job opportunities.' },
                { title: 'RECRUITMENT SOLUTIONS', desc: 'End-to-end recruitment services for all levels and industries.' },
                { title: 'CAREER COUNSELING', desc: 'Guidance and support to help individuals choose the right career path.' },
                { title: 'SKILL DEVELOPMENT', desc: 'Training and development programs to enhance skills and employability.' },
                { title: 'MANPOWER CONSULTING', desc: 'Expert advice to help businesses optimise their workforce.' },
                { title: 'RESUME SUPPORT', desc: 'Resume support services.' }
            ],
            featuresTitle: 'OUR STRENGTHS',
            features: [
                { title: 'TRUSTED SERVICES', desc: 'Reliable & transparent employment solutions.' },
                { title: 'EXPERT TEAM', desc: 'Experienced professionals dedicated to your success.' },
                { title: 'QUALITY ASSURED', desc: 'We ensure quality candidates for quality results.' },
                { title: 'TIMELY SUPPORT', desc: 'Quick response and on-time service delivery.' },
                { title: 'CLIENT SATISFACTION', desc: 'Your satisfaction is our priority.' }
            ]
        },

        'general-order-supplier': {
            number: '05',
            title: 'GENERAL ORDER SUPPLIER',
            tagline: 'QUALITY PRODUCTS | RELIABLE SUPPLY | COMPETITIVE PRICING',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
            intro: 'Your trusted partner for all kind of general supplies. We provide a wide range of quality products to meet your business, office, industrial and daily use needs.',
            servicesTitle: 'OUR SUPPLIES INCLUDE',
            services: [
                { title: 'OFFICE SUPPLIES', desc: 'Stationery, papers, files, pens, notebooks and more.' },
                { title: 'CLEANING & SANITATION', desc: 'Cleaning materials, hygiene products, disposables and janitorial items.' },
                { title: 'INDUSTRIAL SUPPLIES', desc: 'Tools, safety items, hardware and industrial accessories.' },
                { title: 'ELECTRICAL ITEMS', desc: 'Wires, switches, fittings, bulbs and electrical accessories.' },
                { title: 'PANTRY & KITCHEN SUPPLIES', desc: 'Cups, tissues, refreshments and kitchen essentials.' },
                { title: 'GENERAL ITEMS', desc: 'Packaging, tapes, batteries and many more general products.' }
            ],
            featuresTitle: 'OUR STRENGTHS',
            features: [
                { title: 'QUALITY ASSURED', desc: 'We provide high quality products from trusted brands.' },
                { title: 'RELIABLE SERVICE', desc: 'Committed to providing consistent and dependable supply.' },
                { title: 'ON TIME DELIVERY', desc: 'Ensuring timely delivery to keep your operations running smoothly.' },
                { title: 'COMPETITIVE PRICES', desc: 'Best quality products at the most competitive prices.' },
                { title: 'CUSTOMER SUPPORT', desc: 'Dedicated support to assist you at every step.' }
            ]
        },

        'visa-consultancy': {
            number: '06',
            title: 'VISA',
            tagline: 'TRAVEL | STUDY | WORK | SETTLE ABROAD',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/><circle cx="16" cy="14" r="2"/></svg>`,
            intro: 'Your trusted partner for visa and immigration solutions. We help you travel, study, work and settle abroad with confidence.',
            servicesTitle: 'OUR VISA SERVICES',
            services: [
                { title: 'TOURIST VISA', desc: 'Visit your dream destination for holiday and leisure.' },
                { title: 'STUDENT VISA', desc: 'Study in top universities and build your future abroad.' },
                { title: 'WORK VISA', desc: 'Get work opportunities and build your career internationally.' },
                { title: 'FAMILY VISA', desc: 'Bring your family closer and stay connected.' },
                { title: 'BUSINESS VISA', desc: 'Travel for business meetings, conferences and events.' },
                { title: 'IMMIGRATION SERVICES', desc: 'Expert guidance for PR, residency and settlement programs.' },
                { title: 'VISA FILE PREPARATION', desc: 'Complete documentation and application support.' }
            ],
            featuresTitle: 'WHY CHOOSE US',
            features: [
                { title: 'EXPERIENCED CONSULTANTS', desc: 'Years of experience in visa & immigration services.' },
                { title: 'HIGH SUCCESS RATE', desc: 'Proven track record of successful visa approvals.' },
                { title: 'PERSONALIZED GUIDANCE', desc: 'Tailored solutions according to your profile.' },
                { title: 'FAST & RELIABLE PROCESS', desc: 'Timely processing with complete transparency.' },
                { title: 'CONFIDENTIAL & SECURE', desc: 'Your information is 100% safe with us.' },
                { title: 'GLOBAL NETWORK', desc: 'Strong connections with embassies worldwide.' }
            ]
        },

        'freight-forwarding': {
            number: '07',
            title: 'FREIGHT FORWARDING',
            tagline: 'BY SEA | BY AIR',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 19c2.5 1 5.5 1 8 0s5.5-1 8 0 3.5.7 4 0"/><path d="M3.5 15l1.5-4h14l1.5 4z"/><path d="M6 11V7h3v4"/><path d="M11 11V6h3v5"/><path d="M16 11V8h2v3"/></svg>`,
            intro: 'We provide efficient and cost-effective freight forwarding solutions by sea and by air. We handle your cargo with care and deliver it safely to its destination, anywhere in the world.',
            servicesTitle: 'OUR FREIGHT FORWARDING SERVICES',
            services: [
                { title: 'WORLDWIDE COVERAGE', desc: 'Shipping to and from anywhere in the world.' },
                { title: 'SEA FREIGHT FORWARDING', desc: 'Full Container Load (FCL) and Less than Container Load (LCL) services to all major ports worldwide.' },
                { title: 'AIR FREIGHT FORWARDING', desc: 'Fast and secure air freight services for urgent and time-sensitive cargo.' },
                { title: 'DOOR TO DOOR DELIVERY', desc: 'Complete logistics solutions from pickup to final delivery.' },
                { title: 'CUSTOMS CLEARANCE', desc: 'Professional handling of documentation and customs clearance.' },
                { title: 'CARGO INSURANCE', desc: 'Comprehensive insurance coverage for your valuable shipments.' },
                { title: 'WAREHOUSING & DISTRIBUTION', desc: 'Safe storage and efficient distribution services worldwide.' }
            ],
            featuresTitle: 'WHY CHOOSE US',
            features: [
                { title: 'EXPERT TEAM', desc: 'Experienced professionals handling your shipments.' },
                { title: 'ON TIME DELIVERY', desc: 'Reliable sea freight solutions for all your shipping needs.' },
                { title: 'GLOBAL NETWORK', desc: 'Strong global network to connect your business worldwide.' },
                { title: 'CUSTOMS SUPPORT', desc: 'Expert support for smooth customs clearance.' },
                { title: 'COST EFFECTIVE', desc: 'Competitive rates with best service.' },
                { title: 'RELIABLE PARTNER', desc: 'Your trusted partner in logistics and shipping.' },
                { title: 'TIMELY DELIVERY', desc: 'Timely delivery, every time, everywhere.' },
                { title: 'CUSTOMER FOCUSED', desc: 'Dedicated support at every step.' }
            ]
        },

        'international-deliveries': {
            number: '08',
            title: 'INTERNATIONAL',
            tagline: 'GLOBAL REACH | SAFE & SECURE | ON TIME, EVERY TIME',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
            intro: 'We deliver more than just parcels. We deliver trust, care and commitment across borders. Fast, reliable and affordable international delivery solutions for your business and personal needs.',
            servicesTitle: 'OUR INTERNATIONAL DELIVERY SERVICES',
            services: [
                { title: 'WORLDWIDE PARCEL DELIVERY', desc: 'Door to door delivery to 200+ countries worldwide.' },
                { title: 'EXPRESS DELIVERY', desc: 'Fast and express delivery options for urgent shipments.' },
                { title: 'SEA FREIGHT SERVICES', desc: 'Cost-effective sea freight solutions for large and heavy shipments.' },
                { title: 'CUSTOMS CLEARANCE', desc: 'Complete customs documentation and clearance support.' },
                { title: 'SECURE PACKAGING', desc: 'Safe and durable packaging to ensure your items reach in perfect condition.' },
                { title: 'TRACK & TRACE', desc: 'Real-time tracking and updates for complete peace of mind.' },
                { title: '24/7 CUSTOMER SUPPORT', desc: 'Our support team is always here to assist you.' }
            ],
            featuresTitle: 'KEY FEATURES',
            features: [
                { title: 'SAFE & SECURE', desc: 'Reliable handling of your shipments.' },
                { title: 'GLOBAL NETWORK', desc: 'Strong network with trusted partners worldwide.' },
                { title: 'WORLDWIDE DELIVERY', desc: 'Delivering to 200+ countries and territories.' },
                { title: 'SEA FREIGHT', desc: 'Reliable and economical sea freight solutions.' },
                { title: 'SECURE PACKAGING', desc: 'Professional packaging for maximum safety.' },
                { title: 'COMPETITIVE RATES', desc: 'Competitive rates with reliable service.' },
                { title: 'PICKUP & DELIVERY', desc: 'Pick up from your location and deliver to the destination.' },
                { title: 'AIR FREIGHT', desc: 'Fast and secure air freight for urgent shipments.' },
                { title: 'TRACK & TRACE', desc: 'Track your shipment anytime, anywhere.' },
                { title: 'ON TIME DELIVERY', desc: 'Timely delivery with speed and reliability.' },
                { title: 'CUSTOMS CLEARANCE', desc: 'Hassle-free customs clearance and documentation.' },
                { title: 'CUSTOMER SUPPORT', desc: '24/7 support for all your delivery queries.' },
                { title: 'TRUSTED PARTNER', desc: 'Reliable, experienced and professional service.' }
            ]
        },

        'construction-services': {
            number: '09',
            title: 'CONSTRUCTION',
            tagline: 'BUILD BETTER | PLAN SMART | DELIVER ON TIME',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20"/><path d="M4 18a8 8 0 0 1 16 0"/><path d="M9 10a3 3 0 0 1 6 0v8H9z"/></svg>`,
            intro: 'We provide reliable and professional construction services for residential, commercial and industrial projects with quality, safety and long-lasting results.',
            servicesTitle: 'OUR CONSTRUCTION SERVICES',
            services: [
                { title: 'BUILDING CONSTRUCTION', desc: 'Residential & commercial buildings.' },
                { title: 'INFRASTRUCTURE WORK', desc: 'Roads, bridges & public infrastructure.' },
                { title: 'RENOVATION & REMODELING', desc: 'Modern upgrades, better living.' },
                { title: 'PROJECT MANAGEMENT', desc: 'On-time, on-budget delivery.' },
                { title: 'STRUCTURAL WORK', desc: 'Strong foundation, lasting quality.' },
                { title: 'CIVIL ENGINEERING', desc: 'Safe and smart construction solutions.' }
            ],
            featuresTitle: 'OUR COMMITMENTS',
            features: [
                { title: 'QUALITY WORKMANSHIP', desc: 'Built to last.' },
                { title: 'SAFETY FIRST', desc: 'Zero compromise.' },
                { title: 'PROJECT MANAGEMENT', desc: 'Professional project management.' },
                { title: 'CLIENT SATISFACTION', desc: 'Your trust, our success.' },
                { title: 'TIMELY COMPLETION', desc: 'Keep your project on track.' }
            ]
        },

        'event-management': {
            number: '10',
            title: 'EVENT MANAGEMENT',
            tagline: 'WE PLAN | YOU ENJOY',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/></svg>`,
            intro: 'From concept to celebration, we create extraordinary events that inspire, engage and leave lasting impressions.',
            servicesTitle: 'OUR EVENT MANAGEMENT SERVICES',
            services: [
                { title: 'CORPORATE EVENTS', desc: 'Conferences, seminars, product launches & business meetings.' },
                { title: 'WEDDINGS & RECEPTIONS', desc: 'Beautifully planned weddings and memorable celebrations.' },
                { title: 'PRIVATE PARTIES', desc: 'Birthday parties, anniversaries & private gatherings.' },
                { title: 'CONCERTS & SHOWS', desc: 'Live concerts, performances & entertainment shows.' },
                { title: 'EXHIBITIONS & TRADE SHOWS', desc: 'Booth design, setup & complete event management.' },
                { title: 'EVENT PLANNING & COORDINATION', desc: 'End-to-end planning, coordination & on-site management.' },
                { title: 'THEME DESIGN & DECOR', desc: 'Creative themes, décor & ambiance setup.' },
                { title: 'CATERING & HOSPITALITY', desc: 'Delicious catering & guest hospitality services.' }
            ],
            featuresTitle: 'WHY CHOOSE US',
            features: [
                { title: 'EXPERIENCED TEAM', desc: 'Skilled professionals for perfect execution.' },
                { title: 'CREATIVE IDEAS', desc: 'Unique concepts that inspire and engage.' },
                { title: 'ON TIME DELIVERY', desc: 'We deliver every event on time, every time.' },
                { title: 'QUALITY ASSURED', desc: 'High standards with attention to detail.' },
                { title: 'CLIENT SATISFACTION', desc: 'Your happiness is our success.' }
            ]
        },

        'travel-tourism': {
            number: '11',
            title: 'TRAVEL & TOURISM',
            tagline: 'JOURNEY BEYOND BOUNDARIES',
            secondaryTagline: 'YOUR JOURNEY | OUR PASSION',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.2-2 .9l-.5.9 5.8 3.6-3 3-2.1-.7c-.5-.2-1.1 0-1.4.5l-.3.5 2.7 1.9 1.9 2.7.5-.3c.5-.3.7-.9.5-1.4l-.7-2.1 3-3 3.6 5.8.9-.5c.7-.4 1.1-1.2.9-2z"/></svg>`,
            intro: 'We make your travel easy, comfortable and unforgettable. From dream vacations to business trips, we provide complete travel solutions under one roof.',
            servicesTitle: 'OUR TRAVEL SERVICES',
            services: [
                { title: 'FLIGHT BOOKINGS', desc: 'Domestic & international flight bookings at the best fares.' },
                { title: 'HOTEL RESERVATIONS', desc: 'Comfortable stays for leisure and business travelers.' },
                { title: 'VISA ASSISTANCE', desc: 'Hassle-free visa processing for multiple destinations.' },
                { title: 'TOUR PACKAGES', desc: 'Exciting holiday packages for families, couples & groups.' },
                { title: 'HOLIDAY PLANNING', desc: 'Customized itineraries for your perfect vacations.' },
                { title: 'TRANSPORT SERVICES', desc: 'Airport transfers, city tours and private transport.' },
                { title: 'TRAVEL INSURANCE', desc: 'Comprehensive travel insurance plans.' }
            ],
            featuresTitle: 'WHY CHOOSE US',
            features: [
                { title: 'WIDE NETWORK', desc: 'Global partners for seamless travel.' },
                { title: 'BEST PRICES', desc: 'Competitive fares & exclusive deals.' },
                { title: '24/7 SUPPORT', desc: 'We are here for you anytime, anywhere.' },
                { title: 'SAFE & SECURE', desc: 'Your safety is our highest priority.' },
                { title: 'EXPERT TEAM', desc: 'Experienced professionals at your service.' }
            ]
        },

        'ts-trading': {
            number: '12',
            title: 'TS TRADING',
            tagline: 'IMPORT | EXPORT | GENERAL TRADING',
            secondaryTagline: 'BUILDING TRUST, DELIVERING VALUE',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 6v12"/></svg>`,
            intro: 'TS Trading is a dynamic trading company engaged in import, export and supply of high-quality products globally. We are committed to building long-term partnerships through trust, quality and reliability.',
            servicesTitle: 'OUR TRADING SERVICES',
            services: [
                { title: 'IMPORT & EXPORT', desc: 'Global sourcing and international trading solutions.' },
                { title: 'GENERAL TRADING', desc: 'Wide range of products across multiple industries.' },
                { title: 'SUPPLY CHAIN', desc: 'Efficient logistics and timely delivery worldwide.' }
            ],
            categoriesTitle: 'PRODUCT CATEGORIES',
            categories: [
                'ELECTRONICS',
                'FMCG PRODUCTS',
                'TEXTILES & APPAREL',
                'INDUSTRIAL GOODS',
                'AGRICULTURAL PRODUCTS',
                'BUILDING MATERIALS'
            ],
            commitmentsTitle: 'OUR COMMITMENTS',
            commitments: [
                { title: 'QUALITY ASSURANCE', desc: 'We ensure the highest quality in every product.' },
                { title: 'COMPETITIVE PRICES', desc: 'Best value with transparent and fair pricing.' },
                { title: 'CUSTOMER SUPPORT', desc: 'Dedicated support for our valuable clients.' }
            ],
            featuresTitle: 'WHY CHOOSE TS TRADING?',
            features: [
                { title: 'TRUST & INTEGRITY', desc: 'Honest business practices you can rely on.' },
                { title: 'GLOBAL NETWORK', desc: 'Strong network of suppliers and buyers worldwide.' },
                { title: 'EXPERIENCED TEAM', desc: 'Professional team with expertise in global trade.' },
                { title: 'ON TIME DELIVERY', desc: 'We value your time and ensure on-time delivery.' },
                { title: 'GROWTH PARTNER', desc: 'We grow together with our clients\' success.' }
            ]
        },

        'security-services': {
            number: '13',
            title: 'SECURITY SERVICES',
            tagline: 'PROFESSIONAL SECURITY SERVICES',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
            intro: 'Professional Security Services.',
            isNotice: true,
            noticeMessage: 'Detailed service information is not provided in the current company profile document.'
        },

        'freelancing-services': {
            number: '14',
            title: 'FREELANCING SERVICES',
            tagline: 'FREELANCING SERVICES',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
            intro: 'Freelancing Services.',
            isNotice: true,
            noticeMessage: 'Detailed service information is not provided in the current company profile document.'
        }
    };

    // =========================================================================
    // 2. RELIABLE VIEWPORT-BASED SCROLLSPY & ACTIVE NAVBAR CONTROLLER — TS URBAN
    // =========================================================================
    const siteHeader = document.getElementById('site-header');
    const navLinksTrack = document.getElementById('ts-navbar-links');
    const navIndicator = document.getElementById('ts-navbar-indicator');
    const desktopNavLinks = document.querySelectorAll('.ts-navbar-link, .nav-link');
    const mobileNavLinks = document.querySelectorAll('.ts-navbar-mobile-link, .mobile-nav-link');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileBackdrop = document.getElementById('ts-navbar-mobile-backdrop');

    // The 5 target sections in chronological page order
    const targetSectionIds = ['hero-section', 'about', 'services', 'leadership', 'contact'];

    // Cache section DOM elements
    const sectionElements = targetSectionIds.map(id => ({
        id: id,
        el: document.getElementById(id)
    })).filter(item => item.el !== null);

    // Reposition moving gold indicator
    const updateIndicatorPosition = () => {
        if (!navLinksTrack || !navIndicator) return;
        const activeLink = navLinksTrack.querySelector('.ts-navbar-link.active, .nav-link.active');
        if (activeLink) {
            const trackRect = navLinksTrack.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            const leftOffset = linkRect.left - trackRect.left;
            const linkWidth = linkRect.width;

            navIndicator.style.transform = `translateX(${leftOffset}px)`;
            navIndicator.style.width = `${linkWidth}px`;
            navIndicator.classList.add('is-visible');
        } else {
            navIndicator.classList.remove('is-visible');
        }
    };

    // Update active classes and aria-current on desktop & mobile
    let currentActiveId = 'hero-section';
    const updateActiveNav = (activeId) => {
        if (!activeId || !targetSectionIds.includes(activeId)) return;
        currentActiveId = activeId;

        desktopNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const targetId = href.substring(1);
            
            if (targetId === activeId) {
                link.classList.add('active', 'ts-navbar-link-active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active', 'ts-navbar-link-active');
                link.removeAttribute('aria-current');
            }
        });

        mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const targetId = href.substring(1);
            
            if (targetId === activeId) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });

        updateIndicatorPosition();
    };

    // Detect currently active section using viewport activation line (~35% of viewport height)
    let isClickScrolling = false;
    let clickScrollTimer = null;

    const detectActiveSection = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // 1. Boundary: Very top of page
        if (scrollY < 80) {
            return 'hero-section';
        }

        // 2. Boundary: Near bottom of page (ensures Contact is reliably activated)
        if (scrollY + viewportHeight >= documentHeight - 70) {
            return 'contact';
        }

        // 3. Main Viewport Activation Line (~35% of viewport height)
        const activationPoint = viewportHeight * 0.35;

        // Find the section that covers the activation line (top <= activationPoint && bottom > activationPoint)
        for (let i = 0; i < sectionElements.length; i++) {
            const { id, el } = sectionElements[i];
            const rect = el.getBoundingClientRect();
            if (rect.top <= activationPoint && rect.bottom > activationPoint) {
                return id;
            }
        }

        // Fallback: Pick section with minimum distance from top to activation line
        let closestId = currentActiveId;
        let minDistance = Infinity;

        for (let i = 0; i < sectionElements.length; i++) {
            const { id, el } = sectionElements[i];
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(rect.top - activationPoint);
            if (distance < minDistance) {
                minDistance = distance;
                closestId = id;
            }
        }

        return closestId;
    };

    // Throttled Scroll Listener using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Sticky Navbar appearance styling
        if (siteHeader) {
            if (scrollY > 20) {
                siteHeader.classList.add('scrolled', 'ts-navbar-scrolled');
            } else {
                siteHeader.classList.remove('scrolled', 'ts-navbar-scrolled');
            }
        }

        // If user clicked a link and page is smooth-scrolling, skip detection until finished
        if (isClickScrolling) return;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                const detectedId = detectActiveSection();
                if (detectedId && detectedId !== currentActiveId) {
                    updateActiveNav(detectedId);
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
        window.requestAnimationFrame(() => {
            const detectedId = detectActiveSection();
            updateActiveNav(detectedId);
        });
    }, { passive: true });

    // Initial setup on page load
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            handleScroll();
            const initialId = detectActiveSection();
            updateActiveNav(initialId);
        }, 100);
    });

    // Also run immediately
    handleScroll();
    updateActiveNav(detectActiveSection());

    // Smooth click handler with exact header offset calculation for all navbar & hero CTA links
    const allActionLinks = document.querySelectorAll('.ts-navbar-link, .nav-link, .ts-navbar-mobile-link, .mobile-nav-link, .ts-hero-contact-btn, #btn-explore-services, #btn-hero-contact');
    allActionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    e.preventDefault();
                    
                    // Mark as click scrolling to avoid flickering during smooth scroll animation
                    isClickScrolling = true;
                    if (clickScrollTimer) clearTimeout(clickScrollTimer);
                    
                    // Immediately activate clicked link
                    updateActiveNav(targetId);

                    const headerHeight = siteHeader ? siteHeader.offsetHeight : 74;
                    const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetId === 'hero-section' ? 0 : Math.max(0, elementPosition - headerHeight - 12);

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    closeMobileMenu();

                    // Re-enable scrollspy detection after smooth scroll settles
                    clickScrollTimer = setTimeout(() => {
                        isClickScrolling = false;
                        updateActiveNav(detectActiveSection());
                    }, 850);
                }
            }
        });
    });

    // =========================================================================
    // 3. ACCESSIBLE MOBILE MENU & HAMBURGER CONTROLLER
    // =========================================================================
    const openMobileMenu = () => {
        if (!hamburgerBtn || !mobileDrawer) return;
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');
        hamburgerBtn.classList.add('active');
        mobileDrawer.classList.add('active');
        if (mobileBackdrop) mobileBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        if (!hamburgerBtn || !mobileDrawer) return;
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
        hamburgerBtn.classList.remove('active');
        mobileDrawer.classList.remove('active');
        if (mobileBackdrop) mobileBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close on backdrop click
        if (mobileBackdrop) {
            mobileBackdrop.addEventListener('click', closeMobileMenu);
        }

        // Close when clicking outside of mobile drawer
        document.addEventListener('click', (e) => {
            if (mobileDrawer.classList.contains('active')) {
                if (!mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    closeMobileMenu();
                }
            }
        });

        // Close on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
                closeMobileMenu();
                hamburgerBtn.focus();
            }
        });
    }

    // =========================================================================
    // 4. PREMIUM ANIMATED SERVICE DETAIL MODAL CONTROLLER
    // =========================================================================
    const serviceModal = document.getElementById('service-modal');
    const modalNumWatermark = document.getElementById('modal-num-watermark');
    const modalServiceTitle = document.getElementById('modal-service-title');
    const modalServiceTagline = document.getElementById('modal-service-tagline');
    const modalIconBadge = document.getElementById('modal-icon-badge');
    const modalServiceBody = document.getElementById('service-modal-body');
    const serviceModalClose = document.getElementById('service-modal-close');
    const modalFooterExploreMore = document.getElementById('modal-footer-explore-more');

    let isModalClosing = false;
    let lastActiveTrigger = null;

    function renderServiceModal(key) {
        const data = serviceData[key];
        if (!data || !modalServiceBody) return;

        // 1. Watermark, Title, Tagline, and Animated Icon
        if (modalNumWatermark) modalNumWatermark.textContent = data.number || '';
        if (modalServiceTitle) modalServiceTitle.textContent = data.title || '';
        if (modalServiceTagline) {
            modalServiceTagline.textContent = data.tagline || '';
        }
        if (modalIconBadge) {
            modalIconBadge.innerHTML = data.icon || '';
        }

        let html = '';

        // 2. Section 8: Overview / Introduction (Stagger 1)
        html += `
            <div class="modal-overview-block modal-anim-block anim-1">
                <span class="modal-section-label">OVERVIEW</span>
                <p class="modal-overview-text">${data.intro}</p>
                ${data.secondaryTagline ? `<p class="modal-secondary-tagline">${data.secondaryTagline}</p>` : ''}
            </div>
        `;

        // 3. Special Case Notice for Services 13 & 14 (No invented claims)
        if (data.isNotice) {
            html += `
                <div class="modal-notice-box modal-anim-block anim-2">
                    <svg class="modal-notice-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <div class="modal-notice-text">
                        <h4>DETAILED INFORMATION</h4>
                        <p>${data.noticeMessage}</p>
                    </div>
                </div>
            `;
        }

        // 4. Section 9: What We Offer (2-Column Mini Items, Stagger 2)
        if (data.services && data.services.length > 0) {
            html += `
                <div class="modal-anim-block anim-2">
                    <div class="modal-section-header">
                        <h3 class="modal-heading-sub">WHAT WE OFFER</h3>
                    </div>
                    <div class="modal-offers-grid">
                        ${data.services.map(item => `
                            <div class="modal-offer-item">
                                <div class="modal-offer-header">
                                    <svg class="modal-offer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    <span class="modal-offer-title">${item.title}</span>
                                </div>
                                <p class="modal-offer-desc">${item.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 5. Product Categories (For TS Trading)
        if (data.categories && data.categories.length > 0) {
            html += `
                <div class="modal-anim-block anim-3">
                    <div class="modal-section-header">
                        <h3 class="modal-heading-sub">${data.categoriesTitle || 'PRODUCT CATEGORIES'}</h3>
                    </div>
                    <div class="modal-tags-wrapper">
                        ${data.categories.map(cat => `
                            <span class="modal-category-tag">${cat}</span>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 6. Commitments (For TS Trading or Construction)
        if (data.commitments && data.commitments.length > 0) {
            html += `
                <div class="modal-anim-block anim-3">
                    <div class="modal-section-header">
                        <h3 class="modal-heading-sub">${data.commitmentsTitle || 'OUR COMMITMENTS'}</h3>
                    </div>
                    <div class="modal-strengths-grid">
                        ${data.commitments.map(item => `
                            <div class="modal-strength-item">
                                <span class="modal-check-badge">✓</span>
                                <div class="modal-strength-content">
                                    <span class="modal-strength-title">${item.title}</span>
                                    <p class="modal-strength-desc">${item.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 7. Section 10: Why Choose Us / Strengths (Stagger 3/4)
        if (data.features && data.features.length > 0) {
            html += `
                <div class="modal-anim-block anim-3">
                    <div class="modal-section-header">
                        <h3 class="modal-heading-sub">${data.featuresTitle || 'WHY CHOOSE US'}</h3>
                    </div>
                    <div class="modal-strengths-grid">
                        ${data.features.map(feat => `
                            <div class="modal-strength-item">
                                <span class="modal-check-badge">✓</span>
                                <div class="modal-strength-content">
                                    <span class="modal-strength-title">${feat.title}</span>
                                    <p class="modal-strength-desc">${feat.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // 8. Service Quote Inquire Banner (Stagger 4)
        html += `
            <div class="modal-inquire-box modal-anim-block anim-4">
                <span class="modal-inquire-text">Interested in partnering for <strong>${data.title}</strong>?</span>
                <button class="modal-inquire-btn" id="modal-btn-inquire" data-service-select="${data.title}">
                    <span>Request a Quote</span>
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                        <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        `;

        modalServiceBody.innerHTML = html;

        // Reset scroll position of modal body to top
        modalServiceBody.scrollTop = 0;

        // Attach event listener to inner quote button
        const inquireBtn = modalServiceBody.querySelector('#modal-btn-inquire');
        if (inquireBtn) {
            inquireBtn.addEventListener('click', () => {
                closeServiceModal();
                const serviceName = inquireBtn.getAttribute('data-service-select') || '';
                const serviceSelect = document.getElementById('quote-service');
                if (serviceSelect && serviceName) {
                    const cleanTarget = serviceName.toLowerCase().replace(/[^a-z0-9]/g, ' ').trim();
                    const targetWords = cleanTarget.split(/\s+/).filter(w => w.length > 2);
                    let matched = false;

                    // 1. Try exact or substring match
                    for (let opt of serviceSelect.options) {
                        const optVal = opt.value.toLowerCase();
                        const optText = opt.text.toLowerCase();
                        if (opt.value && (optVal.includes(cleanTarget) || cleanTarget.includes(optVal) || optText.includes(cleanTarget))) {
                            serviceSelect.value = opt.value;
                            matched = true;
                            break;
                        }
                    }

                    // 2. Try keyword match
                    if (!matched) {
                        for (let opt of serviceSelect.options) {
                            const optVal = opt.value.toLowerCase();
                            const optText = opt.text.toLowerCase();
                            if (opt.value && targetWords.some(w => optVal.includes(w) || optText.includes(w))) {
                                serviceSelect.value = opt.value;
                                break;
                            }
                        }
                    }
                }
                setTimeout(() => {
                    openQuoteModal();
                }, 400);
            });
        }
    }

    function openServiceModal(serviceKey, triggerBtn = null) {
        if (!serviceModal || isModalClosing) return;
        lastActiveTrigger = triggerBtn;

        renderServiceModal(serviceKey);

        serviceModal.classList.remove('closing');
        serviceModal.classList.add('active');
        serviceModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Focus close button for accessibility
        if (serviceModalClose) {
            setTimeout(() => {
                serviceModalClose.focus();
            }, 100);
        }
    }

    function closeServiceModal() {
        if (!serviceModal || !serviceModal.classList.contains('active') || isModalClosing) return;

        isModalClosing = true;
        serviceModal.classList.add('closing');
        serviceModal.classList.remove('active');

        // Allow 0.45s smooth exit animation before setting hidden
        setTimeout(() => {
            serviceModal.classList.remove('closing');
            serviceModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            isModalClosing = false;

            // Restore focus to triggering Explore button
            if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
                lastActiveTrigger.focus();
            }
        }, 450);
    }

    // Event delegation for opening service modal
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-open-service]');
        if (btn) {
            e.preventDefault();
            const serviceKey = btn.getAttribute('data-open-service');
            if (serviceKey) openServiceModal(serviceKey, btn);
        }
    });

    if (serviceModalClose) {
        serviceModalClose.addEventListener('click', closeServiceModal);
    }

    if (serviceModal) {
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) closeServiceModal();
        });
    }

    // Footer "Explore More Services" button closes modal and scrolls to services section
    if (modalFooterExploreMore) {
        modalFooterExploreMore.addEventListener('click', (e) => {
            e.preventDefault();
            closeServiceModal();
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const headerHeight = siteHeader ? siteHeader.offsetHeight : 76;
                const offsetPos = servicesSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: offsetPos,
                    behavior: 'smooth'
                });
            }
        });
    }

    // =========================================================================
    // 5. SCROLL REVEAL INTERSECTION OBSERVER (STAGGERED DELAYS)
    // =========================================================================
    const animElements = document.querySelectorAll('.scroll-anim');
    if ('IntersectionObserver' in window && animElements.length > 0) {
        const animObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.10,
            rootMargin: '0px 0px -40px 0px'
        });

        animElements.forEach(el => animObserver.observe(el));
    } else {
        animElements.forEach(el => el.classList.add('is-revealed'));
    }

    // =========================================================================
    // 6. VIDEO STORY MODAL CONTROLLER
    // =========================================================================
    const btnWatchStory = document.getElementById('btn-watch-story');
    const videoModal = document.getElementById('video-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openVideoModal() {
        if (videoModal) {
            videoModal.classList.add('active');
            videoModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeVideoModal() {
        if (videoModal) {
            videoModal.classList.remove('active');
            videoModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    if (btnWatchStory) btnWatchStory.addEventListener('click', openVideoModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeVideoModal);
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideoModal();
        });
    }

    // =========================================================================
    // SHARED WHATSAPP DISPATCH UTILITY
    // =========================================================================
    const TS_WHATSAPP_NUMBER = '923001065120';

    function openWhatsAppMessage(rawMessage) {
        if (!rawMessage) return;
        const encodedText = encodeURIComponent(rawMessage.trim());
        const waUrl = `https://wa.me/${TS_WHATSAPP_NUMBER}?text=${encodedText}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    // =========================================================================
    // 7. GET A QUOTE MODAL CONTROLLER
    // =========================================================================
    const quoteModal = document.getElementById('quote-modal');
    const quoteButtons = document.querySelectorAll('#btn-quote-header, #btn-quote-mobile, a[href="#quote"]');
    const quoteModalClose = document.getElementById('quote-modal-close');
    const quoteForm = document.getElementById('quote-form');

    function openQuoteModal(e) {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();
        if (quoteModal) {
            quoteModal.classList.add('active');
            quoteModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeQuoteModal() {
        if (quoteModal) {
            quoteModal.classList.remove('active');
            quoteModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    quoteButtons.forEach(btn => {
        btn.addEventListener('click', openQuoteModal);
    });

    if (quoteModalClose) quoteModalClose.addEventListener('click', closeQuoteModal);
    if (quoteModal) {
        quoteModal.addEventListener('click', (e) => {
            if (e.target === quoteModal) closeQuoteModal();
        });
    }

    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('quote-name');
            const emailEl = document.getElementById('quote-email');
            const serviceEl = document.getElementById('quote-service');
            const phoneEl = document.getElementById('quote-phone');
            const detailsEl = document.getElementById('quote-details');

            const name = nameEl ? nameEl.value.trim() : '';
            const email = emailEl ? emailEl.value.trim() : '';
            const phone = phoneEl ? phoneEl.value.trim() : '';
            const serviceVal = serviceEl ? serviceEl.value.trim() : '';
            const requirements = detailsEl ? detailsEl.value.trim() : '';

            // Get clean service name from dropdown selection
            let serviceName = serviceVal;
            if (serviceEl && serviceEl.selectedIndex >= 0) {
                const selOption = serviceEl.options[serviceEl.selectedIndex];
                serviceName = selOption.value || selOption.text.replace(/^\d+\s*[—–-]\s*/, '').trim();
            }

            // Step 2 & 3: Validate required fields
            if (!name) {
                if (nameEl) {
                    nameEl.focus();
                    if (typeof nameEl.reportValidity === 'function') nameEl.reportValidity();
                }
                return;
            }
            if (!email) {
                if (emailEl) {
                    emailEl.focus();
                    if (typeof emailEl.reportValidity === 'function') emailEl.reportValidity();
                }
                return;
            }
            if (!serviceName) {
                if (serviceEl) {
                    serviceEl.focus();
                    if (typeof serviceEl.reportValidity === 'function') serviceEl.reportValidity();
                }
                return;
            }
            if (!requirements) {
                if (detailsEl) {
                    detailsEl.focus();
                    if (typeof detailsEl.reportValidity === 'function') detailsEl.reportValidity();
                }
                return;
            }

            // Step 5 & 6: Format Quote WhatsApp Message
            const formattedPhone = phone || 'N/A';
            const waText = [
                'Hello TS URBAN,',
                '',
                'I would like to request a quote for your service.',
                '',
                'Service:',
                serviceName,
                '',
                'Name:',
                name,
                '',
                'Email:',
                email,
                '',
                'Phone:',
                formattedPhone,
                '',
                'Requirements:',
                requirements,
                '',
                'Thank you.'
            ].join('\n');

            // Step 8, 9 & 10: Open WhatsApp with safe encoding
            openWhatsAppMessage(waText);

            // Close modal & reset form
            closeQuoteModal();
            quoteForm.reset();
        });
    }

    // =========================================================================
    // 8. GLOBAL ESCAPE KEY LISTENER
    // =========================================================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeServiceModal();
            closeVideoModal();
            closeQuoteModal();
            if (mobileDrawer && mobileDrawer.classList.contains('active')) {
                hamburgerBtn?.classList.remove('active');
                mobileDrawer?.classList.remove('active');
                hamburgerBtn?.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });

    // =========================================================================
    // 9. SUBTLE MOUSE PARALLAX CONTROLLER (HERO SECTION)
    // =========================================================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024 && !('ontouchstart' in window);

    if (isDesktop && !prefersReducedMotion) {
        const heroSection = document.getElementById('hero-section');
        const heroBgImage = document.getElementById('hero-bg-image');
        const heroCurveContainer = document.getElementById('hero-curve-container');
        const heroGlobalConnection = document.querySelector('.hero-global-connection');
        const sunGlow = document.querySelector('.sun-glow-overlay');
        const ambientGlow = document.querySelector('.ambient-glow');

        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;
        let isTicking = false;

        if (heroSection && heroBgImage) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const xNorm = ((e.clientX - rect.left) / rect.width) - 0.5;
                const yNorm = ((e.clientY - rect.top) / rect.height) - 0.5;

                targetX = xNorm * 8;
                targetY = yNorm * 5;

                if (!isTicking) {
                    isTicking = true;
                    requestAnimationFrame(updateHeroParallax);
                }
            }, { passive: true });

            heroSection.addEventListener('mouseleave', () => {
                targetX = 0;
                targetY = 0;
                if (!isTicking) {
                    isTicking = true;
                    requestAnimationFrame(updateHeroParallax);
                }
            });

            const updateHeroParallax = () => {
                currentX += (targetX - currentX) * 0.05;
                currentY += (targetY - currentY) * 0.05;

                heroBgImage.style.transform = `scale(1.02) translate3d(${currentX * -0.4}px, ${currentY * -0.4}px, 0)`;

                if (heroCurveContainer) {
                    heroCurveContainer.style.transform = `translate3d(${currentX * 0.5}px, ${currentY * 0.35}px, 0)`;
                }

                if (heroGlobalConnection) {
                    heroGlobalConnection.style.transform = `translate3d(${currentX * 0.7}px, ${currentY * 0.5}px, 0)`;
                }

                if (sunGlow) {
                    sunGlow.style.transform = `translate3d(${currentX * 0.4}px, ${currentY * 0.35}px, 0)`;
                }

                if (ambientGlow) {
                    ambientGlow.style.transform = `translate3d(${currentX * 0.6}px, ${currentY * 0.5}px, 0)`;
                }

                if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
                    requestAnimationFrame(updateHeroParallax);
                } else {
                    isTicking = false;
                }
            };
        }
    }

    // =========================================================================
    // 10. CINEMATIC LEADERSHIP SPOTLIGHT INTERACTIVE CONTROLLER
    // =========================================================================
    const leadershipSection = document.getElementById('leadership');
    if (leadershipSection) {
        // Subtle 3D Tilt Parallax on Leader Spotlight Cards
        if (isDesktop && !prefersReducedMotion) {
            const spotlights = leadershipSection.querySelectorAll('.ts-ls-spotlight');
            
            spotlights.forEach(spotlight => {
                const card = spotlight.querySelector('.ts-ls-portrait-card');
                const aura = spotlight.querySelector('.ts-ls-portrait-aura');
                const avatar = spotlight.querySelector('.ts-ls-executive-avatar');
                if (!card) return;

                spotlight.addEventListener('mousemove', (e) => {
                    const rect = spotlight.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;

                    const rotateY = x * 10;
                    const rotateX = -y * 8;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
                    if (aura) {
                        aura.style.transform = `translate3d(${x * 24}px, ${y * 24}px, 0) scale(1.15)`;
                    }
                    if (avatar) {
                        avatar.style.transform = `translate3d(${x * 12}px, ${y * 10}px, 20px) scale(1.04)`;
                    }
                }, { passive: true });

                spotlight.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                    if (aura) aura.style.transform = '';
                    if (avatar) avatar.style.transform = '';
                });
            });
        }
    }

    // =========================================================================
    // 11. GLOBAL CONTACT HUB INTERACTIVE CONTROLLER
    // =========================================================================
    const contactForm = document.getElementById('ts-contact-form');
    const contactCtaFocusBtn = document.getElementById('ts-contact-cta-focus-btn');
    const contactNameInput = document.getElementById('ts-contact-name');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameEl = document.getElementById('ts-contact-name');
            const emailEl = document.getElementById('ts-contact-email');
            const phoneEl = document.getElementById('ts-contact-phone');
            const serviceEl = document.getElementById('ts-contact-service');
            const messageEl = document.getElementById('ts-contact-message');

            const name = nameEl ? nameEl.value.trim() : '';
            const email = emailEl ? emailEl.value.trim() : '';
            const phone = phoneEl ? phoneEl.value.trim() : '';
            const service = serviceEl ? serviceEl.value.trim() : '';
            const message = messageEl ? messageEl.value.trim() : '';

            // Step 2 & 3: Validate required fields
            if (!name) {
                if (nameEl) {
                    nameEl.focus();
                    if (typeof nameEl.reportValidity === 'function') nameEl.reportValidity();
                }
                return;
            }
            if (!email) {
                if (emailEl) {
                    emailEl.focus();
                    if (typeof emailEl.reportValidity === 'function') emailEl.reportValidity();
                }
                return;
            }
            if (!service) {
                if (serviceEl) {
                    serviceEl.focus();
                    if (typeof serviceEl.reportValidity === 'function') serviceEl.reportValidity();
                }
                return;
            }
            if (!message) {
                if (messageEl) {
                    messageEl.focus();
                    if (typeof messageEl.reportValidity === 'function') messageEl.reportValidity();
                }
                return;
            }

            // Step 4 & 5: Format WhatsApp Message
            const formattedPhone = phone || 'N/A';
            const waText = [
                'Hello TS URBAN,',
                '',
                'I would like to contact you regarding your services.',
                '',
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${formattedPhone}`,
                `Service / Subject: ${service}`,
                '',
                'Message:',
                message,
                '',
                'Thank you.'
            ].join('\n');

            // Step 6, 7 & 8: Open WhatsApp in a new tab/window via shared utility
            openWhatsAppMessage(waText);
        });
    }

    if (contactCtaFocusBtn && contactNameInput) {
        contactCtaFocusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            contactNameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                contactNameInput.focus();
            }, 500);
        });
    }

    // =========================================================================
    // 12. FINAL COMPACT DARK FOOTER CONTROLLER
    // =========================================================================
    // Social Media Links Configuration (Placeholders for unconfirmed URLs, official WhatsApp active)
    const socialLinks = {
        facebook: '',
        instagram: '',
        linkedin: '',
        whatsapp: 'https://wa.me/923084081479'
    };

    const fbBtn = document.getElementById('ts-social-fb');
    const igBtn = document.getElementById('ts-social-ig');
    const inBtn = document.getElementById('ts-social-in');
    const waBtn = document.getElementById('ts-social-wa');

    if (fbBtn) {
        if (socialLinks.facebook) {
            fbBtn.href = socialLinks.facebook;
            fbBtn.target = '_blank';
        } else {
            fbBtn.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    }

    if (igBtn) {
        if (socialLinks.instagram) {
            igBtn.href = socialLinks.instagram;
            igBtn.target = '_blank';
        } else {
            igBtn.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    }

    if (inBtn) {
        if (socialLinks.linkedin) {
            inBtn.href = socialLinks.linkedin;
            inBtn.target = '_blank';
        } else {
            inBtn.addEventListener('click', (e) => {
                e.preventDefault();
            });
        }
    }

    if (waBtn && socialLinks.whatsapp) {
        waBtn.href = socialLinks.whatsapp;
    }

    // Back to Top Smooth Scroll Handler
    const backToTopBtn = document.getElementById('ts-footer-back-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof updateActiveNav === 'function') {
                updateActiveNav('hero-section');
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Footer Staggered IntersectionObserver Animation
    const footerAnimElements = document.querySelectorAll('.ts-footer-anim');
    if ('IntersectionObserver' in window && footerAnimElements.length > 0) {
        const footerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -20px 0px'
        });

        footerAnimElements.forEach(el => footerObserver.observe(el));
    } else {
        footerAnimElements.forEach(el => el.classList.add('active'));
    }

    console.log('TS URBAN: Global Contact Hub & Final Footer initialized.');
});




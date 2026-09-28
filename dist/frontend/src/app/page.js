'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LandLordMasterApp;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const CompanyWebsiteLink_1 = require("../components/CompanyWebsiteLink");
const AIAssistant_1 = require("../components/AIAssistant");
const AISearchBar_1 = require("../components/AISearchBar");
const LUXURY_PROPERTIES = [
    {
        id: 'prop-01',
        code: 'AZURE RESIDENCE',
        title: 'Skyline Azure 3BHK Ultra-Luxury Penthouse',
        subTitle: 'Indiranagar 100ft Skyline • Direct Owner',
        type: 'APARTMENT',
        listingType: 'BUY',
        price: 18500000,
        location: 'Indiranagar 100ft Road',
        city: 'Bangalore',
        bedrooms: 3,
        bathrooms: 3,
        areaSqFt: 2150,
        areaM2: 200,
        isVerified: true,
        verificationBadge: 'Official Land Registry & Encumbrance Verified',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
        ],
        sellerName: 'Vikramaditya Sharma',
        sellerPhone: '+91 98450 12345',
        description: 'Corner high-rise residence featuring 270-degree skyline views, Italian marble flooring, private high-speed elevator lobby, and zero brokerage direct owner transaction.',
        amenities: ['Private Elevator', '2 Covered Car Parks', 'Infinity Pool', '24/7 Power Backup', 'Clubhouse']
    },
    {
        id: 'prop-02',
        code: 'PALM MEADOWS VILLA',
        title: 'Emerald Palms Private Heated Pool Villa',
        subTitle: 'Whitefield Palm Meadows • Freehold Title',
        type: 'VILLA',
        listingType: 'BUY',
        price: 34000000,
        location: 'Whitefield Palm Meadows',
        city: 'Bangalore',
        bedrooms: 4,
        bathrooms: 5,
        areaSqFt: 3800,
        areaM2: 353,
        isVerified: true,
        verificationBadge: 'Clear Title & Encumbrance Free Certificate',
        imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
        ],
        sellerName: 'Ananya Deshmukh',
        sellerPhone: '+91 97310 99882',
        description: 'Secured gated community estate with private heated pool, landscaped lawn, solar rooftop integration, and verified municipal plan approvals.',
        amenities: ['Private Heated Pool', 'Solar Roof', 'Modular German Kitchen', 'Servant Quarters', 'Smart Home Automation']
    },
    {
        id: 'prop-03',
        code: 'WORLI PANORAMA',
        title: 'Seaside Horizon Panoramic Ocean Residence',
        subTitle: 'Worli Sea Face • Luxury High-Rise',
        type: 'APARTMENT',
        listingType: 'RENT',
        price: 95000,
        location: 'Worli Sea Face',
        city: 'Mumbai',
        bedrooms: 2,
        bathrooms: 2,
        areaSqFt: 1450,
        areaM2: 135,
        isVerified: true,
        verificationBadge: 'Verified Ownership Certificate',
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
        ],
        sellerName: 'Rajesh Singhania',
        sellerPhone: '+91 98200 44551',
        description: 'Arabian Sea view residence, fully furnished with Italian designer interiors, 2 months deposit only, direct connection with owner.',
        amenities: ['Sea Facing Balcony', 'Valet Parking', 'Gymnasium', 'Concierge Desk']
    },
    {
        id: 'prop-04',
        code: 'CHENNAI COAST VILLA',
        title: 'Boutique Seaside Villa Estate',
        subTitle: 'East Coast Road (ECR) • Gated Community',
        type: 'VILLA',
        listingType: 'BUY',
        price: 15000000,
        location: 'ECR Neelankarai',
        city: 'Chennai',
        bedrooms: 3,
        bathrooms: 3,
        areaSqFt: 2600,
        areaM2: 241,
        isVerified: true,
        verificationBadge: 'RERA & CMDA Approved Direct Title',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
        ],
        sellerName: 'Karthik Subramanian',
        sellerPhone: '+91 94440 88221',
        description: 'Contemporary coastal 3 bedroom villa with private garden, 2 covered car parks, rainwater harvesting, and direct beach access pathway.',
        amenities: ['Private Garden', '2 Covered Car Parks', 'Beach Access', '24/7 Security', '100% Power Backup']
    }
];
function LandLordMasterApp() {
    const [properties, setProperties] = (0, react_1.useState)(LUXURY_PROPERTIES);
    const [currentPropertyIndex, setCurrentPropertyIndex] = (0, react_1.useState)(0);
    const [navOpen, setNavOpen] = (0, react_1.useState)(false);
    const [searchFilters, setSearchFilters] = (0, react_1.useState)({});
    const [isDiscussModalOpen, setIsDiscussModalOpen] = (0, react_1.useState)(false);
    const [isListingModalOpen, setIsListingModalOpen] = (0, react_1.useState)(false);
    const [isVerificationModalOpen, setIsVerificationModalOpen] = (0, react_1.useState)(false);
    const [isInspectModalOpen, setIsInspectModalOpen] = (0, react_1.useState)(false);
    const [isVisitModalOpen, setIsVisitModalOpen] = (0, react_1.useState)(false);
    const [isDealRoomModalOpen, setIsDealRoomModalOpen] = (0, react_1.useState)(false);
    const [toastMessage, setToastMessage] = (0, react_1.useState)(null);
    const [offerAmount, setOfferAmount] = (0, react_1.useState)('');
    const [contactName, setContactName] = (0, react_1.useState)('');
    const [contactPhone, setContactPhone] = (0, react_1.useState)('');
    const [contactMessage, setContactMessage] = (0, react_1.useState)('');
    const [visitDate, setVisitDate] = (0, react_1.useState)('');
    const [visitTime, setVisitTime] = (0, react_1.useState)('11:00 AM');
    const [newTitle, setNewTitle] = (0, react_1.useState)('');
    const [newCity, setNewCity] = (0, react_1.useState)('Bangalore');
    const [newLocation, setNewLocation] = (0, react_1.useState)('');
    const [newPrice, setNewPrice] = (0, react_1.useState)('');
    const [newType, setNewType] = (0, react_1.useState)('VILLA');
    const [newListingType, setNewListingType] = (0, react_1.useState)('BUY');
    const [newBeds, setNewBeds] = (0, react_1.useState)('3');
    const [newArea, setNewArea] = (0, react_1.useState)('2200');
    const currentProperty = properties[currentPropertyIndex] || properties[0];
    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 4500);
    };
    const handleNextProperty = () => {
        setCurrentPropertyIndex((prev) => (prev + 1) % properties.length);
    };
    const handlePrevProperty = () => {
        setCurrentPropertyIndex((prev) => (prev - 1 + properties.length) % properties.length);
    };
    const handleCreateListing = (e) => {
        e.preventDefault();
        if (!newTitle || !newPrice || !newLocation) {
            showToast('Please fill in required listing fields.');
            return;
        }
        const created = {
            id: `prop-${Date.now().toString().slice(-4)}`,
            code: `DIRECT ESTATE 0${properties.length + 1}`,
            title: newTitle,
            subTitle: `${newLocation}, ${newCity} • Direct Owner`,
            type: newType,
            listingType: newListingType,
            price: parseFloat(newPrice),
            location: newLocation,
            city: newCity,
            bedrooms: parseInt(newBeds) || 0,
            bathrooms: 3,
            areaSqFt: parseFloat(newArea) || 2000,
            areaM2: Math.round((parseFloat(newArea) || 2000) / 10.764),
            isVerified: false,
            verificationBadge: 'Awaiting Document Audit & Title Verification',
            imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
            gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
            sellerName: 'Direct Owner (You)',
            sellerPhone: '+91 93452 69211',
            description: 'Exclusive direct listed architectural property with immediate title verification capability and 0% buyer commission.',
            amenities: ['Covered Parking', '24/7 Security', 'Power Backup', 'Landscaped Garden']
        };
        setProperties([created, ...properties]);
        setIsListingModalOpen(false);
        showToast('🎉 Property submitted to Verification Desk without listing fees.');
    };
    const handleVerifyProperty = (id) => {
        setProperties(properties.map(p => {
            if (p.id === id) {
                return {
                    ...p,
                    isVerified: true,
                    verificationBadge: 'Official Land Registry & Encumbrance Verified'
                };
            }
            return p;
        }));
        setIsVerificationModalOpen(false);
        showToast('✅ 100% Title Verification granted to listing.');
    };
    const handleScheduleVisit = (e) => {
        e.preventDefault();
        setIsVisitModalOpen(false);
        showToast(`📅 Private visit request dispatched to owner for ${visitDate || 'upcoming weekend'} at ${visitTime}.`);
    };
    const handleSendOffer = (e) => {
        e.preventDefault();
        setIsDiscussModalOpen(false);
        showToast('🚀 Direct offer transmitted to property owner with transparent 0% buyer commission.');
    };
    const formatPrice = (val, isRent) => {
        if (isRent)
            return `₹${val.toLocaleString('en-IN')} / MONTH`;
        if (val >= 10000000)
            return `₹${(val / 10000000).toFixed(2)} CR`;
        if (val >= 100000)
            return `₹${(val / 100000).toFixed(2)} LAKH`;
        return `₹${val.toLocaleString('en-IN')}`;
    };
    const displayedProperties = properties.filter((p) => {
        if (searchFilters.city && !p.city.toLowerCase().includes(searchFilters.city.toLowerCase()))
            return false;
        if (searchFilters.type && p.type !== searchFilters.type)
            return false;
        if (searchFilters.maxPrice && p.price > searchFilters.maxPrice)
            return false;
        if (searchFilters.bedrooms && p.bedrooms !== searchFilters.bedrooms)
            return false;
        if (searchFilters.query) {
            const q = searchFilters.query.toLowerCase();
            return (p.title.toLowerCase().includes(q) ||
                p.location.toLowerCase().includes(q) ||
                p.city.toLowerCase().includes(q));
        }
        return true;
    });
    return (<div className="bg-[#050505] text-white min-h-screen relative font-sans selection:bg-white selection:text-black">
      
      
      {toastMessage && (<div className="fixed top-8 right-8 z-50 bg-white text-black px-6 py-4 shadow-2xl flex items-center gap-3 text-xs tracking-wider uppercase font-semibold border-l-4 border-black animate-fade-scale font-mono">
          <lucide_react_1.Sparkles className="w-4 h-4 text-black"/>
          <span>{toastMessage}</span>
        </div>)}

      
      <AIAssistant_1.AIAssistant onApplySearch={(query) => setSearchFilters({ query })}/>

      
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-6 md:p-10 flex justify-between items-start">
        
        <div className="pointer-events-auto flex items-center gap-6">
          <button onClick={() => setNavOpen(!navOpen)} className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90 hover:text-white flex items-center gap-2 transition-opacity font-mono">
            <span className="font-mono text-sm">{navOpen ? '[-]' : '[+]'}</span> NAVIGATION
          </button>
        </div>

        
        <div className="pointer-events-auto cursor-pointer text-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="text-sm font-black tracking-[0.3em] uppercase text-white font-mono">
            LAND LORD
          </div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-mono hidden sm:block">
            DIRECT PROPERTY • ZERO BROKERAGE
          </div>
        </div>

        
        <div className="pointer-events-auto flex items-center gap-6">
          <button onClick={() => setIsListingModalOpen(true)} className="text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-white transition-colors font-mono hidden sm:inline-block">
            + LIST PROPERTY
          </button>

          <button onClick={() => setIsDiscussModalOpen(true)} className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90 hover:text-white flex items-center gap-1.5 group transition-all font-mono">
            LET&apos;S DISCUSS <lucide_react_1.ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
          </button>
        </div>
      </nav>

      
      {navOpen && (<div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex items-center p-8 md:p-20 animate-fade-scale font-mono">
          <div className="max-w-4xl space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8">[ DIRECT PROPERTY DIRECTORY ]</div>
            <div className="space-y-4 text-xl sm:text-3xl md:text-4xl font-light uppercase tracking-[0.15em]">
              <div onClick={() => { setNavOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 01 ]</span> HOME
              </div>
              <div onClick={() => { setNavOpen(false); document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 02 ]</span> AI PROPERTY SEARCH
              </div>
              <div onClick={() => { setNavOpen(false); document.getElementById('properties-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 03 ]</span> FEATURED PROPERTIES
              </div>
              <div onClick={() => { setNavOpen(false); document.getElementById('how-it-works-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 04 ]</span> HOW IT WORKS (DIRECT FLOW)
              </div>
              <div onClick={() => { setNavOpen(false); document.getElementById('fees-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 05 ]</span> TRANSPARENT FEES
              </div>
              <div onClick={() => { setNavOpen(false); document.getElementById('verification-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 06 ]</span> TITLE VERIFICATION
              </div>
              <div onClick={() => { setNavOpen(false); document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 07 ]</span> ABOUT LAND LORD & CEO
              </div>
              <div onClick={() => { setNavOpen(false); document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 cursor-pointer flex items-center gap-4 transition-colors">
                <span className="text-sm font-mono text-white/30">[ 08 ]</span> CONTACT & COMPANY WEBSITE
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 flex flex-wrap items-center gap-8 text-xs uppercase tracking-widest text-white/40">
              <CompanyWebsiteLink_1.CompanyWebsiteLink label="VISIT COMPANY WEBSITE →"/>
              <a href="http://localhost:3000/docs" target="_blank" rel="noreferrer" className="hover:text-white">API Docs (Swagger) ↗</a>
              <a href="http://localhost:3000/health" target="_blank" rel="noreferrer" className="hover:text-white">System Health ↗</a>
            </div>
          </div>
        </div>)}

      
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=90" alt="Land Lord Luxury Estate" className="w-full h-full object-cover brightness-[0.65] contrast-[1.05]"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50"/>
        </div>

        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto space-y-6">
          <div className="inline-block border border-white/30 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] font-mono text-white/80 backdrop-blur-md">
            LAND LORD
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-2xl">
            DIRECT PROPERTY.<br />
            TRANSPARENT FEES.<br />
            TRUSTED TRANSACTIONS.
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-light tracking-[0.18em] uppercase text-white/80 max-w-2xl mx-auto font-mono leading-relaxed">
            Discover verified properties, connect directly with owners, and move from discovery to negotiation with greater transparency.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-mono font-bold uppercase tracking-[0.2em]">
            <button onClick={() => document.getElementById('properties-section')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-8 py-4 hover:bg-white/90 transition-all">
              EXPLORE PROPERTIES
            </button>
            <button onClick={() => setIsListingModalOpen(true)} className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all">
              LIST YOUR PROPERTY
            </button>
          </div>
        </div>

        
        <div className="absolute right-0 bottom-0 z-20 bg-white text-black p-6 sm:p-8 max-w-xs w-full space-y-4 shadow-2xl hidden md:block font-mono">
          <div className="text-[10px] uppercase tracking-widest text-black/60 font-serif-editorial italic">
            Direct real estate marketplace
          </div>
          <div className="space-y-1.5 text-xs font-bold uppercase tracking-wider">
            <div onClick={() => document.getElementById('properties-section')?.scrollIntoView({ behavior: 'smooth' })} className="flex justify-between items-center hover:translate-x-1 cursor-pointer transition-transform border-b border-black/10 pb-1">
              <span>BUY DIRECT</span> <span>↗</span>
            </div>
            <div onClick={() => setIsListingModalOpen(true)} className="flex justify-between items-center hover:translate-x-1 cursor-pointer transition-transform border-b border-black/10 pb-1">
              <span>SELL (0% ADVANCE)</span> <span>↗</span>
            </div>
            <div onClick={() => setIsVerificationModalOpen(true)} className="flex justify-between items-center hover:translate-x-1 cursor-pointer transition-transform border-b border-black/10 pb-1">
              <span>VERIFY TITLE</span> <span>↗</span>
            </div>
            <div onClick={() => setIsDealRoomModalOpen(true)} className="flex justify-between items-center hover:translate-x-1 cursor-pointer transition-transform">
              <span>DEAL ROOM</span> <span>↗</span>
            </div>
          </div>
        </div>
      </section>

      
      <section id="search-section" className="py-20 bg-[#0c0c0c] border-b border-white/10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">[ NATURAL LANGUAGE DISCOVERY ]</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white font-mono">
              AI-ASSISTED DIRECT DISCOVERY
            </h2>
            <p className="text-xs sm:text-sm font-mono text-white/60 max-w-2xl mx-auto">
              Describe your ideal property in natural language. LAND LORD AI structures your requirements and matches verified listings.
            </p>
          </div>

          <AISearchBar_1.AISearchBar onCriteriaChange={(criteria) => setSearchFilters(criteria)}/>
        </div>
      </section>

      
      <section id="properties-section" className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between p-6 md:p-16 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img src={currentProperty.imageUrl} alt={currentProperty.title} className="w-full h-full object-cover brightness-[0.45] contrast-[1.1] transition-all duration-1000"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"/>
        </div>

        
        <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-6 font-mono">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">[ CASE 0{currentPropertyIndex + 1} / 0{displayedProperties.length} ]</span>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-widest text-white">{currentProperty.city} • {currentProperty.type}</h3>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={handlePrevProperty} className="w-12 h-12 border border-white/30 hover:border-white flex items-center justify-center transition-colors bg-black/40 backdrop-blur-md">
              <lucide_react_1.ChevronLeft className="w-5 h-5"/>
            </button>
            <button onClick={handleNextProperty} className="w-12 h-12 border border-white/30 hover:border-white flex items-center justify-center transition-colors bg-black/40 backdrop-blur-md">
              <lucide_react_1.ChevronRight className="w-5 h-5"/>
            </button>
          </div>
        </div>

        
        <div className="relative z-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] font-mono text-emerald-400 flex items-center gap-2">
              <lucide_react_1.ShieldCheck className="w-4 h-4"/> {currentProperty.verificationBadge}
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              {currentProperty.code}
            </h2>
            <p className="text-base sm:text-xl font-light text-white/90 max-w-xl">
              {currentProperty.title}
            </p>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white pt-2">
              {formatPrice(currentProperty.price, currentProperty.listingType === 'RENT')}
            </div>
          </div>

          
          <div className="space-y-6 lg:text-right font-mono">
            <div className="text-5xl sm:text-7xl font-black text-white leading-none">
              {currentProperty.areaM2} M²
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/70 max-w-md ml-auto">
              {currentProperty.areaSqFt} SQ.FT • {currentProperty.bedrooms > 0 ? `${currentProperty.bedrooms} BEDROOMS` : 'COMMERCIAL/PLOT'} • {currentProperty.location}, {currentProperty.city}
            </div>

            <div className="flex flex-wrap gap-4 justify-start lg:justify-end pt-4 text-xs font-bold tracking-widest uppercase">
              <button onClick={() => setIsInspectModalOpen(true)} className="bg-white text-black px-8 py-4 hover:bg-white/90 transition-colors flex items-center gap-2">
                <lucide_react_1.Eye className="w-4 h-4"/> INSPECT DOSSIER
              </button>
              <button onClick={() => setIsVisitModalOpen(true)} className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                <lucide_react_1.Calendar className="w-4 h-4"/> SCHEDULE VISIT
              </button>
            </div>
          </div>
        </div>

        
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 font-mono">
          {displayedProperties.map((p, idx) => (<div key={p.id} onClick={() => setCurrentPropertyIndex(idx)} className={`p-3 border transition-all cursor-pointer bg-black/40 backdrop-blur-md ${idx === currentPropertyIndex ? 'border-white bg-white/10' : 'border-white/20 hover:border-white/50'}`}>
              <div className="text-[10px] text-white/50 uppercase">0{idx + 1} / {p.city}</div>
              <div className="text-xs font-bold uppercase truncate text-white mt-1">{p.code}</div>
            </div>))}
        </div>
      </section>

      
      <section id="how-it-works-section" className="py-28 bg-[#111111] text-white px-6 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">[ THE DIRECT TRANSACTION PROTOCOL ]</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono">
              DIRECT PROPERTY JOURNEY
            </h2>
            <p className="text-xs sm:text-sm font-mono text-white/60 max-w-xl mx-auto">
              Connecting property owners directly with buyers through certified verification, digital negotiation, and zero middleman friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs">
            
            <div className="p-6 bg-black border border-white/20 space-y-4">
              <div className="text-xl font-bold text-white/40">[ 01 ]</div>
              <h3 className="text-sm font-bold text-white uppercase">DIRECT DISCOVERY</h3>
              <p className="text-white/60 leading-relaxed font-sans text-xs">
                Search verified listings directly posted by property owners or use LAND LORD AI natural language criteria matching.
              </p>
            </div>

            
            <div className="p-6 bg-black border border-white/20 space-y-4">
              <div className="text-xl font-bold text-white/40">[ 02 ]</div>
              <h3 className="text-sm font-bold text-white uppercase">6-POINT TITLE AUDIT</h3>
              <p className="text-white/60 leading-relaxed font-sans text-xs">
                Dedicated verification officers audit ownership KYC, 30-year Encumbrance Certificates (EC), and municipal plan approvals.
              </p>
            </div>

            
            <div className="p-6 bg-black border border-white/20 space-y-4">
              <div className="text-xl font-bold text-white/40">[ 03 ]</div>
              <h3 className="text-sm font-bold text-white uppercase">VISIT & DIRECT OFFER</h3>
              <p className="text-white/60 leading-relaxed font-sans text-xs">
                Schedule private property visits and submit digital purchase / lease offers directly to the registered owner.
              </p>
            </div>

            
            <div className="p-6 bg-black border border-white/20 space-y-4">
              <div className="text-xl font-bold text-white/40">[ 04 ]</div>
              <h3 className="text-sm font-bold text-white uppercase">DIGITAL DEAL ROOM</h3>
              <p className="text-white/60 leading-relaxed font-sans text-xs">
                Track agreement milestones, transparent documentation, and closing tasks without middleman commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="fees-section" className="py-28 bg-[#f5f5f5] text-black px-6 md:px-16">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-black/50 block">
              [ ZERO BROKERAGE • FULL TRANSPARENCY ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black font-mono">
              TRANSPARENT FEES STRUCTURE
            </h2>
            <p className="text-base sm:text-lg font-serif-editorial text-black/80 leading-relaxed">
              LAND LORD eliminates the conventional 2% - 3% broker commission. Fees are straightforward and transparently communicated prior to deal finalization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-xs">
            
            <div className="p-8 bg-white border border-black/10 space-y-4 shadow-xl">
              <div className="text-xs uppercase tracking-widest text-black/50 font-bold">FOR BUYERS & TENANTS</div>
              <div className="text-3xl font-black text-black">0% COMMISSION</div>
              <p className="text-black/70 font-sans text-sm leading-relaxed">
                No standard transaction commission by default. Browse, discover, connect, and negotiate directly with registered owners.
              </p>
              <div className="pt-4 border-t border-black/10 space-y-2 text-[11px] text-black/80">
                <div>✓ Direct Owner Connection</div>
                <div>✓ Verified Legal Dossiers Included</div>
                <div>✓ Zero Intermediary Markups</div>
              </div>
            </div>

            
            <div className="p-8 bg-white border border-black/10 space-y-4 shadow-xl">
              <div className="text-xs uppercase tracking-widest text-black/50 font-bold">FOR PROPERTY OWNERS</div>
              <div className="text-3xl font-black text-black">1% PLATFORM FEE</div>
              <p className="text-black/70 font-sans text-sm leading-relaxed">
                No listing fee by default. A 1% LAND LORD service fee applies only upon successful sale registration.
              </p>
              <div className="pt-4 border-t border-black/10 space-y-2 text-[11px] text-black/80">
                <div>✓ Free Direct Listing Publication</div>
                <div>✓ Verification Desk Inspection Included</div>
                <div>✓ Digital Deal Room & Offer Management</div>
              </div>
            </div>
          </div>

          
          <div className="p-6 bg-black text-white font-mono text-xs space-y-2">
            <div className="text-amber-300 font-bold uppercase tracking-wider flex items-center gap-2">
              <lucide_react_1.Lock className="w-4 h-4"/> MONEY CUSTODY & REGULATORY TRANSPARENCY
            </div>
            <p className="text-white/70 font-sans text-xs leading-relaxed">
              LAND LORD provides marketplace discovery, title verification workflows, and digital deal management. LAND LORD does not hold property purchase funds or act as an escrow agent. Property purchase consideration is transferred directly between buyer and seller through scheduled bank transfers during legal registration.
            </p>
          </div>
        </div>
      </section>

      
      <section id="verification-section" className="py-28 bg-[#0a0a0a] text-white px-6 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-400 block">
              [ 6-POINT VERIFICATION PROTOCOL ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono leading-tight">
              100% AUDITED LAND TITLES & RECORDS
            </h2>
            <p className="text-sm text-white/70 font-sans leading-relaxed">
              Every certified property on LAND LORD passes through an in-depth document review to verify rightful ownership, physical demarcation, and clear marketable title.
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-4">
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="text-white font-bold">1. OWNER IDENTITY</div>
                <div className="text-white/50 text-[10px] mt-0.5">KYC & Aadhaar / Passport validation</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="text-white font-bold">2. TITLE DEEDS</div>
                <div className="text-white/50 text-[10px] mt-0.5">30-year Encumbrance Certificate (EC)</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="text-white font-bold">3. PLAN SANCTION</div>
                <div className="text-white/50 text-[10px] mt-0.5">RERA / Municipal layout approvals</div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10">
                <div className="text-white font-bold">4. GEO-COORDINATES</div>
                <div className="text-white/50 text-[10px] mt-0.5">Physical survey demarcation</div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#141414] border border-white/20 font-mono text-xs space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="font-bold uppercase text-white">VERIFICATION DESK AUDITOR STATUS</div>
              <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                <lucide_react_1.ShieldCheck className="w-4 h-4"/> ACTIVE
              </div>
            </div>

            <div className="space-y-3 text-white/70">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>Total Registered Properties:</span>
                <span className="text-white font-bold">{properties.length} Estates</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>Verified Clean Titles:</span>
                <span className="text-emerald-400 font-bold">{properties.filter(p => p.isVerified).length} Estates</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Direct Owner Listings:</span>
                <span className="text-white font-bold">100%</span>
              </div>
            </div>

            <button onClick={() => setIsVerificationModalOpen(true)} className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-white/90 transition-colors">
              OPEN VERIFICATION QUEUE
            </button>
          </div>
        </div>
      </section>

      
      <section id="about-section" className="py-28 bg-[#111111] text-white px-6 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 block">
                [ ABOUT LAND LORD ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono leading-tight">
                BUILT WITH A DIRECT VISION.
              </h2>
              <p className="text-base sm:text-lg font-serif-editorial text-white/80 leading-relaxed">
                LAND LORD is building a more direct way to discover, connect and move through property transactions. We eliminate intermediate friction to ensure complete transparency, fair fees, and verified real estate peace of mind.
              </p>

              <div className="pt-4">
                <CompanyWebsiteLink_1.CompanyWebsiteLink label="VISIT COMPANY WEBSITE →"/>
              </div>
            </div>

            
            <div className="p-8 bg-black border border-white/20 font-mono text-xs space-y-6">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                [ COMPANY LEADERSHIP ]
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-black uppercase tracking-wider text-white">
                  D PAUL BLESSON
                </div>
                <div className="text-white/60 text-xs font-bold uppercase">
                  CEO, LAND LORD
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2.5 text-white/80">
                <div className="flex items-center gap-3">
                  <lucide_react_1.PhoneCall className="w-4 h-4 text-white/50"/>
                  <a href="tel:9345269211" className="hover:text-white underline underline-offset-4">
                    9345269211
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <lucide_react_1.Send className="w-4 h-4 text-white/50"/>
                  <a href="mailto:dpaulblesson@gmail.com" className="hover:text-white underline underline-offset-4">
                    dpaulblesson@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <CompanyWebsiteLink_1.CompanyWebsiteLink label="VISIT OUR COMPANY WEBSITE →"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact-section" className="py-24 bg-[#0a0a0a] text-white px-6 md:px-16 border-t border-white/10 font-mono">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40 block">
                [ CONTACT LAND LORD ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                DIRECT INQUIRY & HEADQUARTERS
              </h2>
              
              <div className="space-y-3 text-xs text-white/80">
                <div><strong>CEO:</strong> D PAUL BLESSON</div>
                <div>
                  <strong>PHONE:</strong>{' '}
                  <a href="tel:9345269211" className="hover:text-white underline">
                    9345269211
                  </a>
                </div>
                <div>
                  <strong>EMAIL:</strong>{' '}
                  <a href="mailto:dpaulblesson@gmail.com" className="hover:text-white underline">
                    dpaulblesson@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <CompanyWebsiteLink_1.CompanyWebsiteLink label="VISIT COMPANY WEBSITE →"/>
              </div>
            </div>

            
            <form onSubmit={handleSendOffer} className="p-6 bg-black border border-white/20 space-y-4 text-xs">
              <div className="font-bold uppercase tracking-widest text-white">SEND CONCIERGE MESSAGE</div>
              <div>
                <label className="block text-white/60 mb-1">YOUR NAME</label>
                <input type="text" required placeholder="Legal Name" value={contactName} onChange={(e) => setContactName(e.target.value)} className="w-full bg-[#141414] border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"/>
              </div>
              <div>
                <label className="block text-white/60 mb-1">PHONE NUMBER</label>
                <input type="tel" required placeholder="+91 Phone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="w-full bg-[#141414] border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-white"/>
              </div>
              <div>
                <label className="block text-white/60 mb-1">MESSAGE</label>
                <textarea rows={3} placeholder="Inquire on verified properties, seller listing, or partnership..." value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} className="w-full bg-[#141414] border border-white/20 p-2.5 text-white focus:outline-none focus:border-white"/>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 hover:bg-white/90 transition-colors">
                SUBMIT INQUIRY ↗
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <footer className="py-20 bg-black text-white px-6 md:px-16 border-t border-white/20 font-mono text-xs">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            <div className="space-y-4">
              <div className="text-base font-black tracking-widest text-white">LAND LORD</div>
              <p className="text-white/60 text-[11px] leading-relaxed uppercase tracking-wider">
                DIRECT PROPERTY.<br />
                TRANSPARENT FEES.<br />
                TRUSTED TRANSACTIONS.
              </p>
              <div className="pt-2">
                <CompanyWebsiteLink_1.CompanyWebsiteLink label="COMPANY WEBSITE →"/>
              </div>
            </div>

            
            <div className="space-y-2.5 uppercase tracking-widest text-white/70">
              <div className="text-white font-bold pb-1">NAVIGATION</div>
              <div><a href="#properties-section" className="hover:text-white">PROPERTIES</a></div>
              <div><span onClick={() => setIsListingModalOpen(true)} className="hover:text-white cursor-pointer">SELL</span></div>
              <div><a href="#how-it-works-section" className="hover:text-white">HOW IT WORKS</a></div>
              <div><a href="#about-section" className="hover:text-white">ABOUT</a></div>
              <div><a href="#contact-section" className="hover:text-white">CONTACT</a></div>
            </div>

            
            <div className="space-y-2 uppercase tracking-widest text-white/70">
              <div className="text-white font-bold pb-1">COMPANY LEADERSHIP</div>
              <div>CEO: D PAUL BLESSON</div>
              <div>PHONE: <a href="tel:9345269211" className="hover:text-white underline">9345269211</a></div>
              <div>EMAIL: <a href="mailto:dpaulblesson@gmail.com" className="hover:text-white underline normal-case font-mono">dpaulblesson@gmail.com</a></div>
              <div className="pt-2">
                <CompanyWebsiteLink_1.CompanyWebsiteLink label="COMPANY WEBSITE →"/>
              </div>
            </div>

            
            <div className="space-y-2.5 uppercase tracking-widest text-white/70">
              <div className="text-white font-bold pb-1">PLATFORM & LEGAL</div>
              <div><a href="http://localhost:3000/docs" target="_blank" rel="noreferrer" className="hover:text-white">API & SWAGGER DOCS</a></div>
              <div><a href="http://localhost:3000/health" target="_blank" rel="noreferrer" className="hover:text-white">HEALTH STATUS</a></div>
              <div><span className="text-white/40">PRIVACY POLICY</span></div>
              <div><span className="text-white/40">TERMS OF SERVICE</span></div>
              <div><span className="text-white/40">COOKIE POLICY</span></div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[10px] uppercase tracking-widest">
            <div>© {new Date().getFullYear()} LAND LORD. ALL RIGHTS RESERVED.</div>
            <div>DIRECT OWNER PROTOCOL • 100% TITLE VERIFICATION</div>
          </div>
        </div>
      </footer>

      

      
      {isDiscussModalOpen && (<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-white/20 p-8 max-w-lg w-full space-y-6 animate-fade-scale text-white font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-base font-bold uppercase tracking-widest">INITIATE DIRECT OFFER</h3>
              <button onClick={() => setIsDiscussModalOpen(false)} className="text-white/50 hover:text-white">
                <lucide_react_1.X className="w-5 h-5"/>
              </button>
            </div>

            <form onSubmit={handleSendOffer} className="space-y-4 text-xs">
              <div>
                <label className="block text-white/70 mb-1 uppercase">Target Estate</label>
                <div className="p-3 bg-black border border-white/20 text-white font-bold">
                  {currentProperty.code} — {currentProperty.title}
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-1 uppercase">Direct Offer Amount (INR)</label>
                <input type="text" value={offerAmount || currentProperty.price.toString()} onChange={(e) => setOfferAmount(e.target.value)} className="w-full bg-black border border-white/30 px-4 py-3 text-white font-bold text-base focus:outline-none focus:border-white"/>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/70 mb-1 uppercase">Your Name</label>
                  <input type="text" required placeholder="Legal Name" value={contactName} onChange={(e) => setContactName(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-2.5 text-white focus:outline-none focus:border-white"/>
                </div>
                <div>
                  <label className="block text-white/70 mb-1 uppercase">Phone</label>
                  <input type="tel" required placeholder="+91 Phone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-2.5 text-white focus:outline-none focus:border-white"/>
                </div>
              </div>

              <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-white/90 text-xs">
                SUBMIT DIRECT OFFER ↗
              </button>
            </form>
          </div>
        </div>)}

      
      {isVisitModalOpen && (<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-white/20 p-8 max-w-md w-full space-y-6 animate-fade-scale text-white font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-base font-bold uppercase tracking-widest">SCHEDULE PRIVATE VISIT</h3>
              <button onClick={() => setIsVisitModalOpen(false)} className="text-white/50 hover:text-white">
                <lucide_react_1.X className="w-5 h-5"/>
              </button>
            </div>

            <form onSubmit={handleScheduleVisit} className="space-y-4 text-xs">
              <div>
                <label className="block text-white/70 mb-1 uppercase">Select Preferred Date</label>
                <input type="date" required value={visitDate} onChange={(e) => setVisitDate(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-2.5 text-white focus:outline-none focus:border-white"/>
              </div>

              <div>
                <label className="block text-white/70 mb-1 uppercase">Preferred Time Window</label>
                <select value={visitTime} onChange={(e) => setVisitTime(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-2.5 text-white focus:outline-none">
                  <option value="10:00 AM">Morning (10:00 AM - 12:00 PM)</option>
                  <option value="02:00 PM">Afternoon (02:00 PM - 04:00 PM)</option>
                  <option value="05:00 PM">Evening (05:00 PM - 07:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-white/70 mb-1 uppercase">Your Contact Phone</label>
                <input type="tel" required placeholder="+91 Phone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-2.5 text-white focus:outline-none focus:border-white"/>
              </div>

              <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-white/90 text-xs">
                CONFIRM PRIVATE VISIT REQUEST
              </button>
            </form>
          </div>
        </div>)}

      
      {isDealRoomModalOpen && (<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#121212] border border-white/20 max-w-2xl w-full p-8 space-y-6 max-h-[90vh] overflow-y-auto animate-fade-scale text-white font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">DIGITAL DEAL ROOM</span>
                <h3 className="text-lg font-bold uppercase">{currentProperty.code}</h3>
              </div>
              <button onClick={() => setIsDealRoomModalOpen(false)} className="text-white/50 hover:text-white">
                <lucide_react_1.X className="w-5 h-5"/>
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px]">DEAL STATUS</span>
                  <span className="text-emerald-400 font-bold">MUTUAL AGREEMENT READY</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px]">REGISTERED SELLER</span>
                  <span className="text-white font-bold">{currentProperty.sellerName}</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-white/10 pt-4">
                <div className="font-bold text-white uppercase text-xs">DEAL MILESTONES & TASKS:</div>
                <div className="space-y-2 text-white/70">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <lucide_react_1.Check className="w-4 h-4"/> 1. Initial Direct Discovery & Price Agreement
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <lucide_react_1.Check className="w-4 h-4"/> 2. 6-Point Title & Encumbrance Audit
                  </div>
                  <div className="flex items-center gap-2 text-amber-300">
                    <lucide_react_1.Clock className="w-4 h-4"/> 3. Draft Sale Agreement Preparation
                  </div>
                  <div className="flex items-center gap-2 text-white/40">
                    <lucide_react_1.Clock className="w-4 h-4"/> 4. Sub-Registrar Office Registration Schedule
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => setIsDealRoomModalOpen(false)} className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 text-xs">
              CLOSE DEAL ROOM
            </button>
          </div>
        </div>)}

      
      {isInspectModalOpen && (<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#121212] border border-white/20 max-w-3xl w-full p-8 space-y-6 max-h-[90vh] overflow-y-auto animate-fade-scale text-white font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">ARCHITECTURAL DOSSIER</span>
                <h3 className="text-xl font-bold uppercase tracking-wide">{currentProperty.title}</h3>
              </div>
              <button onClick={() => setIsInspectModalOpen(false)} className="text-white/50 hover:text-white">
                <lucide_react_1.X className="w-6 h-6"/>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] overflow-hidden bg-black border border-white/10">
                <img src={currentProperty.imageUrl} alt={currentProperty.title} className="w-full h-full object-cover"/>
              </div>
              <div className="space-y-4 text-xs uppercase tracking-wider">
                <div className="p-3 bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px]">PRICE</span>
                  <span className="text-lg font-bold text-white">{formatPrice(currentProperty.price, currentProperty.listingType === 'RENT')}</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px]">VERIFICATION STATUS</span>
                  <span className="text-emerald-400 font-bold">{currentProperty.verificationBadge}</span>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px]">DIRECT REGISTERED OWNER</span>
                  <span className="text-white font-bold">{currentProperty.sellerName} ({currentProperty.sellerPhone})</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-white/80">
              <div className="font-bold text-white uppercase">PROPERTY SPECIFICATIONS:</div>
              <p className="leading-relaxed normal-case font-sans text-sm text-white/70">{currentProperty.description}</p>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/10">
              <button onClick={() => {
                setIsInspectModalOpen(false);
                setIsDiscussModalOpen(true);
            }} className="flex-1 bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-white/90 text-xs">
                PROCEED TO DIRECT OFFER
              </button>
            </div>
          </div>
        </div>)}

      
      {isListingModalOpen && (<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-white/20 p-8 max-w-lg w-full space-y-6 max-h-[90vh] overflow-y-auto animate-fade-scale text-white font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h3 className="text-base font-bold uppercase tracking-widest">LIST PROPERTY DIRECTLY</h3>
              <button onClick={() => setIsListingModalOpen(false)} className="text-white/50 hover:text-white">
                <lucide_react_1.X className="w-5 h-5"/>
              </button>
            </div>

            <form onSubmit={handleCreateListing} className="space-y-4 text-xs">
              <div>
                <label className="block text-white/70 mb-1 uppercase">Property Title *</label>
                <input type="text" required placeholder="e.g. Sovereign Sky Villa Residence" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full bg-black border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white"/>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/70 mb-1 uppercase">Listing Type</label>
                  <select value={newListingType} onChange={(e) => setNewListingType(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-3 text-white focus:outline-none">
                    <option value="BUY">For Sale (Outright)</option>
                    <option value="RENT">For Rent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-1 uppercase">Property Type</label>
                  <select value={newType} onChange={(e) => setNewType(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-3 text-white focus:outline-none">
                    <option value="VILLA">Villa</option>
                    <option value="APARTMENT">Apartment</option>
                    <option value="PLOT">Plot</option>
                    <option value="COMMERCIAL">Commercial</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/70 mb-1 uppercase">Price (INR) *</label>
                  <input type="number" required placeholder="e.g. 24000000" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="w-full bg-black border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white"/>
                </div>
                <div>
                  <label className="block text-white/70 mb-1 uppercase">City *</label>
                  <select value={newCity} onChange={(e) => setNewCity(e.target.value)} className="w-full bg-black border border-white/30 px-3 py-3 text-white focus:outline-none">
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Hyderabad">Hyderabad</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-1 uppercase">Locality / Landmark *</label>
                <input type="text" required placeholder="e.g. Indiranagar / Neelankarai ECR" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} className="w-full bg-black border border-white/30 px-4 py-3 text-white focus:outline-none focus:border-white"/>
              </div>

              <div className="p-4 bg-black border border-dashed border-white/30 text-center text-white/60">
                <lucide_react_1.Camera className="w-5 h-5 mx-auto mb-1 text-white"/>
                <span>MinIO S3 High-Res Uploads (0% Advance Listing Fee)</span>
              </div>

              <button type="submit" className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-white/90 text-xs">
                SUBMIT TO VERIFICATION DESK ↗
              </button>
            </form>
          </div>
        </div>)}

      
      {isVerificationModalOpen && (<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141414] border border-white/20 p-8 max-w-2xl w-full space-y-6 max-h-[90vh] overflow-y-auto animate-fade-scale text-white font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <lucide_react_1.ShieldCheck className="w-5 h-5 text-emerald-400"/>
                <h3 className="text-base font-bold uppercase tracking-widest">TITLE VERIFICATION DESK</h3>
              </div>
              <button onClick={() => setIsVerificationModalOpen(false)} className="text-white/50 hover:text-white">
                <lucide_react_1.X className="w-5 h-5"/>
              </button>
            </div>

            <div className="space-y-4">
              {properties.filter(p => !p.isVerified).length === 0 ? (<div className="p-8 text-center bg-black border border-white/10 space-y-2">
                  <lucide_react_1.CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto"/>
                  <div className="font-bold uppercase tracking-widest text-xs">ALL SUBMISSIONS AUDITED</div>
                  <div className="text-white/40 text-[10px] uppercase">NO PENDING AUDITS IN QUEUE</div>
                </div>) : (properties.filter(p => !p.isVerified).map((item) => (<div key={item.id} className="p-4 bg-black border border-white/20 flex items-center justify-between gap-4 text-xs">
                    <div>
                      <div className="font-bold text-white uppercase">{item.title}</div>
                      <div className="text-white/50 text-[10px] mt-0.5">{item.location} • ₹{item.price.toLocaleString('en-IN')}</div>
                    </div>
                    <button onClick={() => handleVerifyProperty(item.id)} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 uppercase tracking-wider text-[10px]">
                      APPROVE TITLE & ISSUE BADGE
                    </button>
                  </div>)))}
            </div>
          </div>
        </div>)}

    </div>);
}
//# sourceMappingURL=page.js.map
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AISearchBar = void 0;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const AISearchBar = ({ onCriteriaChange }) => {
    const [naturalQuery, setNaturalQuery] = (0, react_1.useState)('');
    const [parsedTags, setParsedTags] = (0, react_1.useState)([]);
    const [isSearching, setIsSearching] = (0, react_1.useState)(false);
    const handleAISearch = (queryToParse) => {
        const q = queryToParse || naturalQuery;
        if (!q.trim())
            return;
        setIsSearching(true);
        const tags = [];
        const lower = q.toLowerCase();
        const criteria = {
            query: q,
        };
        if (lower.includes('chennai')) {
            tags.push('Chennai ✓');
            criteria.city = 'Chennai';
        }
        else if (lower.includes('bangalore')) {
            tags.push('Bangalore ✓');
            criteria.city = 'Bangalore';
        }
        else if (lower.includes('mumbai')) {
            tags.push('Mumbai ✓');
            criteria.city = 'Mumbai';
        }
        else if (lower.includes('hyderabad')) {
            tags.push('Hyderabad ✓');
            criteria.city = 'Hyderabad';
        }
        if (lower.includes('villa')) {
            tags.push('Villa ✓');
            criteria.type = 'VILLA';
        }
        else if (lower.includes('apartment') || lower.includes('flat') || lower.includes('penthouse')) {
            tags.push('Apartment ✓');
            criteria.type = 'APARTMENT';
        }
        else if (lower.includes('plot') || lower.includes('land')) {
            tags.push('Plot / Land ✓');
            criteria.type = 'PLOT';
        }
        else if (lower.includes('commercial') || lower.includes('office')) {
            tags.push('Commercial ✓');
            criteria.type = 'COMMERCIAL';
        }
        if (lower.includes('3 bed') || lower.includes('3bhk') || lower.includes('3 bedroom')) {
            tags.push('3 Bedrooms ✓');
            criteria.bedrooms = 3;
        }
        else if (lower.includes('2 bed') || lower.includes('2bhk') || lower.includes('2 bedroom')) {
            tags.push('2 Bedrooms ✓');
            criteria.bedrooms = 2;
        }
        else if (lower.includes('4 bed') || lower.includes('4bhk') || lower.includes('4 bedroom')) {
            tags.push('4 Bedrooms ✓');
            criteria.bedrooms = 4;
        }
        if (lower.includes('1.5') || lower.includes('1.5 cr') || lower.includes('under 2 cr')) {
            tags.push('Under ₹1.5 - ₹2.0 Cr ✓');
            criteria.maxPrice = 20000000;
        }
        if (lower.includes('parking'))
            tags.push('Covered Parking ✓');
        if (lower.includes('garden') || lower.includes('pool'))
            tags.push('Private Garden / Pool ✓');
        tags.push('0% Brokerage Direct ✓');
        setTimeout(() => {
            setParsedTags(tags);
            setIsSearching(false);
            onCriteriaChange(criteria);
        }, 400);
    };
    return (<div className="w-full max-w-4xl mx-auto space-y-4">
      
      <div className="bg-[#111111]/90 backdrop-blur-xl border border-white/20 p-2 sm:p-3 flex flex-col md:flex-row gap-3 items-center shadow-2xl">
        <div className="flex-1 flex items-center gap-3 px-3 w-full">
          <lucide_react_1.Sparkles className="w-5 h-5 text-amber-300 flex-shrink-0 animate-pulse"/>
          <input type="text" placeholder="AI Search: e.g. Find me a 3 bedroom villa in Chennai or Bangalore with private pool under ₹2 Cr..." value={naturalQuery} onChange={(e) => setNaturalQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAISearch()} className="w-full bg-transparent text-sm text-white placeholder-white/40 py-2.5 focus:outline-none font-mono"/>
        </div>

        <button onClick={() => handleAISearch()} disabled={isSearching} className="w-full md:w-auto bg-white text-black px-6 py-3 text-xs uppercase tracking-[0.2em] font-mono font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 flex-shrink-0">
          {isSearching ? 'PARSING WITH AI...' : 'DISCOVER DIRECT'}
        </button>
      </div>

      
      {parsedTags.length > 0 && (<div className="flex items-center gap-2 flex-wrap text-[11px] font-mono animate-fade-scale">
          <span className="text-white/40 uppercase tracking-widest text-[10px]">AI CRITERIA:</span>
          {parsedTags.map((tag, idx) => (<span key={idx} className="bg-white/10 border border-white/20 px-2.5 py-1 text-white tracking-wider flex items-center gap-1">
              {tag}
            </span>))}
          <button onClick={() => {
                setParsedTags([]);
                setNaturalQuery('');
                onCriteriaChange({});
            }} className="text-[10px] text-white/50 hover:text-white underline ml-2">
            Reset
          </button>
        </div>)}
    </div>);
};
exports.AISearchBar = AISearchBar;
//# sourceMappingURL=AISearchBar.js.map
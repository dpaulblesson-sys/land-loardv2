'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAssistant = void 0;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const AIAssistant = ({ onApplySearch }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [input, setInput] = (0, react_1.useState)('');
    const [messages, setMessages] = (0, react_1.useState)([
        {
            sender: 'ai',
            text: 'Hello. I am LAND LORD AI. How can I assist your direct property discovery, title verification, or offer preparation today?',
        },
    ]);
    const quickPrompts = [
        'Find 3BHK villas in Chennai under ₹1.5 Cr with parking',
        'How does 100% Title Verification work?',
        'Explain the 0% Brokerage & 1% Seller Fee structure',
        'Prepare a direct purchase offer for owner review',
    ];
    const handleSend = (textToSend) => {
        const query = textToSend || input;
        if (!query.trim())
            return;
        setMessages((prev) => [...prev, { sender: 'user', text: query }]);
        if (!textToSend)
            setInput('');
        setTimeout(() => {
            let reply = '';
            const lower = query.toLowerCase();
            if (lower.includes('villa') || lower.includes('chennai') || lower.includes('3bhk') || lower.includes('find')) {
                reply = 'I have structured your criteria: Location: Chennai/Bangalore • Type: Villa/Penthouse • Bedrooms: 3 BHK • Parking: Included. I have updated the property results on the page.';
                if (onApplySearch)
                    onApplySearch(query);
            }
            else if (lower.includes('fee') || lower.includes('brokerage') || lower.includes('1%')) {
                reply = 'LAND LORD operates on transparent fees: 0% standard commission for buyers. Sellers pay only a 1% platform service fee upon successful registration. No hidden charges or advance listing deposits.';
            }
            else if (lower.includes('verification') || lower.includes('title') || lower.includes('document')) {
                reply = 'Every verified listing undergoes a 6-point legal audit: Owner KYC Identity, 30-year Encumbrance Certificate (EC), Municipal Sanction Plan, Geo-coordinate demarcation, High-res media audit, and Duplicate check.';
            }
            else {
                reply = `I have analyzed your request regarding "${query}". LAND LORD connects you directly with the registered owner with zero middleman interference. Would you like to schedule an on-site visit or submit a direct offer?`;
            }
            setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
        }, 700);
    };
    return (<div className="fixed bottom-8 right-8 z-40">
      
      {!isOpen && (<button onClick={() => setIsOpen(true)} className="bg-white text-black hover:bg-white/90 shadow-2xl p-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-mono font-bold border border-black/20 hover:scale-105 transition-all group">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
          <lucide_react_1.Sparkles className="w-4 h-4 text-black"/>
          <span>ASK LAND LORD AI</span>
        </button>)}

      
      {isOpen && (<div className="bg-[#111111] border border-white/20 shadow-2xl w-80 sm:w-96 text-white text-xs font-mono flex flex-col h-[520px] animate-fade-scale">
          
          <div className="p-4 bg-black border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <lucide_react_1.Bot className="w-5 h-5 text-white"/>
              <div>
                <div className="font-bold tracking-wider uppercase text-white">LAND LORD AI</div>
                <div className="text-[10px] text-emerald-400 font-sans">Direct Discovery & Verification Assistant</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <lucide_react_1.X className="w-4 h-4"/>
            </button>
          </div>

          
          <div className="p-3 bg-white/5 border-b border-white/10 overflow-x-auto flex gap-2 no-scrollbar">
            {quickPrompts.map((prompt, idx) => (<button key={idx} onClick={() => handleSend(prompt)} className="flex-shrink-0 text-[10px] bg-black/60 hover:bg-white hover:text-black border border-white/20 px-2.5 py-1.5 transition-colors">
                {prompt}
              </button>))}
          </div>

          
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#0a0a0a]">
            {messages.map((m, idx) => (<div key={idx} className={`p-3 max-w-[85%] leading-relaxed ${m.sender === 'ai'
                    ? 'bg-[#181818] border border-white/10 text-white/90 mr-auto'
                    : 'bg-white text-black font-semibold ml-auto'}`}>
                {m.text}
              </div>))}
          </div>

          
          <div className="p-3 bg-black border-t border-white/10 flex gap-2">
            <input type="text" placeholder="Ask anything or describe your ideal home..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="flex-1 bg-[#181818] border border-white/20 px-3 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-white"/>
            <button onClick={() => handleSend()} className="bg-white text-black px-3.5 flex items-center justify-center hover:bg-white/90">
              <lucide_react_1.Send className="w-3.5 h-3.5"/>
            </button>
          </div>
        </div>)}
    </div>);
};
exports.AIAssistant = AIAssistant;
//# sourceMappingURL=AIAssistant.js.map
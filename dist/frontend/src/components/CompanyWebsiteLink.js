"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyWebsiteLink = void 0;
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const constants_1 = require("../config/constants");
const CompanyWebsiteLink = ({ label = 'VISIT COMPANY WEBSITE →', className = '', url = constants_1.COMPANY_WEBSITE_URL, }) => {
    return (<a href={url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 group text-xs uppercase tracking-[0.2em] font-semibold text-white/90 hover:text-white transition-all ${className}`}>
      <span className="group-hover:underline underline-offset-4 transition-all">
        {label}
      </span>
      <lucide_react_1.ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
    </a>);
};
exports.CompanyWebsiteLink = CompanyWebsiteLink;
//# sourceMappingURL=CompanyWebsiteLink.js.map
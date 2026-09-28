"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
exports.metadata = {
    title: "LAND LORD | Zero-Brokerage Direct Real Estate Platform",
    description: "Direct marketplace connecting buyers and sellers with verified land records, 0% brokerage, and digital contracts.",
};
function RootLayout({ children, }) {
    return (<html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>);
}
//# sourceMappingURL=layout.js.map
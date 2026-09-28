"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    getHome() {
        return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LAND LORD | Direct Real Estate Platform</title>
  <style>
    :root {
      --primary: #2563eb;
      --primary-hover: #1d4ed8;
      --bg: #0f172a;
      --card-bg: #1e293b;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #10b981;
      --border: #334155;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { background-color: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; }
    header { border-bottom: 1px solid var(--border); padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; background: rgba(30, 41, 59, 0.8); backdrop-filter: blur(8px); }
    .logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -0.5px; color: #60a5fa; display: flex; align-items: center; gap: 8px; }
    .logo span { color: #f8fafc; }
    .badge { background: #065f46; color: #34d399; font-size: 0.75rem; padding: 0.25rem 0.6rem; border-radius: 9999px; font-weight: 600; }
    nav a { color: var(--text-muted); text-decoration: none; margin-left: 1.5rem; font-weight: 500; transition: color 0.2s; }
    nav a:hover { color: var(--text); }
    .hero { text-align: center; padding: 4rem 1.5rem 3rem; max-width: 900px; margin: 0 auto; }
    .hero h1 { font-size: 3rem; font-weight: 800; line-height: 1.15; margin-bottom: 1rem; background: linear-gradient(to right, #93c5fd, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero p { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 2rem; line-height: 1.6; }
    .btn-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn { padding: 0.8rem 1.8rem; border-radius: 8px; font-weight: 600; text-decoration: none; transition: all 0.2s; font-size: 1rem; display: inline-flex; align-items: center; gap: 8px; }
    .btn-primary { background: var(--primary); color: #fff; }
    .btn-primary:hover { background: var(--primary-hover); transform: translateY(-1px); }
    .btn-secondary { background: var(--card-bg); color: var(--text); border: 1px solid var(--border); }
    .btn-secondary:hover { background: #334155; transform: translateY(-1px); }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; max-width: 1100px; margin: 2rem auto; padding: 0 1.5rem; width: 100%; }
    .card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 1.75rem; transition: transform 0.2s, border-color 0.2s; }
    .card:hover { transform: translateY(-3px); border-color: #60a5fa; }
    .card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px; }
    .card p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; }
    .status-bar { margin-top: auto; border-top: 1px solid var(--border); padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-muted); background: #0b1120; }
    .status-dot { display: inline-block; width: 8px; height: 8px; background: #10b981; border-radius: 50%; margin-right: 6px; }
  </style>
</head>
<body>
  <header>
    <div class="logo">🏢 LAND <span>LORD</span> <span class="badge">SYSTEM READY</span></div>
    <nav>
      <a href="/docs">API Docs (Swagger)</a>
      <a href="/health">Health Status</a>
      <a href="/api/info">API Info</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Zero-Brokerage Direct Real Estate Platform</h1>
      <p>Direct marketplace connecting property buyers and sellers with built-in official verification, digital agreements, and media management.</p>
      <div class="btn-group">
        <a href="/docs" class="btn btn-primary">📖 Explore Swagger API Docs</a>
        <a href="/health" class="btn btn-secondary">🔍 Check Health Endpoint</a>
      </div>
    </section>

    <div class="grid">
      <div class="card">
        <h3>🔐 Authentication & RBAC</h3>
        <p>JWT-based multi-role auth supporting Buyers, Sellers, Admins, and Verification Officers with argon2 password hashing.</p>
      </div>
      <div class="card">
        <h3>🏡 Direct Property Listings</h3>
        <p>Complete property catalog with pricing, physical details, media uploads, and geographic coordinates.</p>
      </div>
      <div class="card">
        <h3>🛡️ Multi-tier Verification</h3>
        <p>Comprehensive property verification pipeline managed by certified verification officers with audit trails.</p>
      </div>
      <div class="card">
        <h3>📁 MinIO Object Storage</h3>
        <p>Scalable S3-compatible media uploads for high-resolution images, floor plans, and video tours.</p>
      </div>
    </div>
  </main>

  <footer class="status-bar">
    <div><span class="status-dot"></span>Backend Server: <strong>Online & Listening on Port 3000</strong></div>
    <div>LAND LORD 2.0 • Production Ready</div>
  </footer>
</body>
</html>`;
    }
    getHealth() {
        return {
            status: 'ok',
            service: 'landlord-backend',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        };
    }
    getInfo() {
        return {
            name: 'LAND LORD API & Platform',
            version: '1.0.0',
            status: 'online',
            documentation: '/docs',
            description: 'Zero-Brokerage Real Estate Marketplace & Verification System',
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHome", null);
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHealth", null);
__decorate([
    (0, common_1.Get)('api/info'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getInfo", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map
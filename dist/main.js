"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    app.use((0, helmet_1.default)({ contentSecurityPolicy: false }));
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('LAND LORD API')
        .setDescription('Real-estate direct marketplace and verification platform')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') ?? 3000;
    await app.listen(port);
    console.log(`🚀 LAND LORD Server running at http://localhost:${port}`);
    console.log(`📑 Swagger Documentation available at http://localhost:${port}/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map
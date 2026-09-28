export declare class AppController {
    getHome(): string;
    getHealth(): {
        status: string;
        service: string;
        timestamp: string;
        uptime: number;
    };
    getInfo(): {
        name: string;
        version: string;
        status: string;
        documentation: string;
        description: string;
    };
}

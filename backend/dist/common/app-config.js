"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3000,
    username: "root",
    password: "",
    database: "MedCab",
    entities: [
        "./entities/*.js"
    ],
    synchronize: true,
});
//# sourceMappingURL=app-config.js.map
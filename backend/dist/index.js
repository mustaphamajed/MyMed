"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const appConfig = require("./common/app-config");
const routes_1 = require("./routes");
/**
 * Create Express server.
 */
var cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Express configuration.
 */
//nothing is hereg
//Set all routes from routes folder
app.use("/", routes_1.default);
app.listen('5000', () => {
    console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
});
/**
 * Create connection to DB using configuration provided in
 * appconfig file.
 */
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield appConfig.AppDataSource.initialize()
        .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Connected to DB");
    }))
        .catch((error) => console.log("TypeORM connection error: ", error));
}))();
//# sourceMappingURL=index.js.map
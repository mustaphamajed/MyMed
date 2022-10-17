import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";

import * as appConfig from "./common/app-config";
import routes from "./routes";



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
app.use("/", routes);


app.listen('5000', () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
});





/**
 * Create connection to DB using configuration provided in
 * appconfig file.
 */

(async () => {
  await appConfig.AppDataSource.initialize()
    .then(async (connection) => {
      console.log("Connected to DB");
    })
    .catch((error) => console.log("TypeORM connection error: ", error));
})();
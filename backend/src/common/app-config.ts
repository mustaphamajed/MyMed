import "reflect-metadata";

import { DataSource} from "typeorm";


export let AppDataSource =new DataSource ({
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
})
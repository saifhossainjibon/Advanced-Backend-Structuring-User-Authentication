import app from "./app";
import config from "./config"; // aikhne amra esm use korci aijonno import/export korbo
import { initDB } from "./db";


// amder jokhon e server ta cholebe tokhoni  database er sathe connected hobe aijonn initDB aikhne rakhbo
const main=()=>{
  initDB();
  app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
}
main() // ai function chalanor jonno call kore diye rakhbo, app.listen dawer karon holo amra script e server.ts 
//  diyecilam patha hisebe, ai page aro code cilo ja app.ts e shift korsi
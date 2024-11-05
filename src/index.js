const express = require("express");
const routes = require("./routes/index");
const {connectToDatabase} = require("./config/database");
const {initialTestData} = require("./seeders/initialSeeder");
const app = express();

app.use(express.json());

app.use(routes);

(async () => {
    await connectToDatabase();
    // await initialTestData();
    console.log("Base de datos sincronizada");
})();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Ejecutando servidor en puerto ${PORT}`);
});

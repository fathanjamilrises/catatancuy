// Inisialisai Module
const modules = require("./modules/module");
const registerRoute = require("./route/auth");
const exampleRoute = require("./route/example");

// Inisialisasi Middleware Awal
const app = modules.express();
app.use(modules.cors());
app.use(modules.express.json());
// End Point
app.use("/api/v1", exampleRoute);
app.use("/api/v1", registerRoute);

// Middleware Akhir
app.listen(8000, () => {
  console.log("Anda Berjalan Di localhost dengan port 8000");
});

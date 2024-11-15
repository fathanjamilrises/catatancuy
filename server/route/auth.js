const modules = require("./../modules/module");
const Router = modules.express.Router();
const authController = require("../controllers/authController");
Router.post("/register", authController.store);

module.exports = Router;

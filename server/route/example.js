const modules = require("./../modules/module");
const Router = modules.express.Router();
const exampleController = require("./../controllers/exampleController");
Router.get("/example", (req, res) => {
  res.send("Ini Adalah Conto Aja");
});

Router.post("/example", exampleController.index);

module.exports = Router;

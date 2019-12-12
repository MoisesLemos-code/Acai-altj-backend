const express = require('express');

const UserController = require('./controllers/UserController');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const SessionsController = require('./controllers/SessionController');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post("/user/create/", UserController.store);
routes.post("/cliente/create/", ClienteController.store);
routes.post("/produto/create/", ProdutoController.store);
routes.get("/", UserController.list);
routes.get("/user/:id", UserController.index);
routes.get("/cliente/list/", ClienteController.list);
routes.get("/cliente/:id", ClienteController.index);
routes.get("/produto/list/", ProdutoController.list);
routes.get("/produto/:id", ProdutoController.index);

routes.post("/sessions", SessionsController.store);

routes.use(authMiddleware);
routes.delete("/delete/:id", UserController.destroy);
routes.put("/user/update/:id", UserController.update);
routes.delete("/cliente/delete/:id", ClienteController.destroy);
routes.put("/cliente/update/:id", ClienteController.update);
routes.delete("/produto/delete/:id", ProdutoController.destroy);
routes.put("/produto/update/:id", ProdutoController.update);

routes.get('/token', (req, res) => res.json({ ok: true }))

module.exports = routes;

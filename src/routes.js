const express = require('express');

const UserController = require('./controllers/UserController');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const VendaController = require('./controllers/VendaController');
const ItemVendaController = require('./controllers/ItemVendaController')
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
routes.get("/venda/list/", VendaController.list);
routes.get("/venda/:id", VendaController.index);
routes.get("/itemVenda/list/", ItemVendaController.list);
routes.get("/itemVenda/:id", ItemVendaController.index);
routes.get("/produto/search/:descricao", ProdutoController.indexName);

routes.post("/sessions", SessionsController.store);

routes.use(authMiddleware);
routes.post("/venda/create/", VendaController.store);
routes.delete("/delete/:id", UserController.destroy);
routes.put("/user/update/:id", UserController.update);
routes.delete("/cliente/delete/:id", ClienteController.destroy);
routes.put("/cliente/update/:id", ClienteController.update);
routes.delete("/produto/delete/:id", ProdutoController.destroy);
routes.put("/produto/update/:id", ProdutoController.update);
routes.delete("/venda/delete/:id", VendaController.destroy);
routes.put("/venda/update/:id", VendaController.update);

routes.get('/token', (req, res) => res.json({ ok: true }))

module.exports = routes;

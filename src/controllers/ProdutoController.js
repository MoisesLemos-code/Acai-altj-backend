const Produto = require('../models/Produto');


module.exports = {
  async index(req, res) {
    const produtoInc = await Produto.findOne({ _id: req.params.id });
    return res.json(produtoInc);
  },
  async list(req, res) {
    const produtoInc = await Produto.find({});
    return res.json(produtoInc);
  },
  async store(req, res) {
    //Inserir no banco de dados
    const produtoInc = await Produto.create(req.body);

    req.io.sockets.in(req.body._id).emit('file', produtoInc)

    return res.json(produtoInc);
  },
  async destroy(req, res) {
    await Produto.deleteOne({ _id: req.params.id });
    return res.json({ success: "ok" });
  },
  async update(req, res) {
    const produtoInc = await Produto.updateOne({ _id: req.params.id }, req.body);
    return res.json(produtoInc);
  },

}
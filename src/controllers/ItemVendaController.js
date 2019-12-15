const ItemVenda = require('../models/ItemVenda');


module.exports = {
  async index(req, res) {
    try {
      const itemInc = await ItemVenda.find({ venda_id: req.params.id }, { useFindAndModify: false });
      return res.json(itemInc);
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Falha ao buscar produtos da venda!' })
    }

  },
  async list(req, res) {
    const itemInc = await ItemVenda.find({});
    return res.json(itemInc);
  }

}
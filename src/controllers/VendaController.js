const Venda = require('../models/Venda');
const ItemVenda = require('../models/ItemVenda');


module.exports = {
  async index(req, res) {
	  try{
			const vendaInc = await Venda.findOne({ _id: req.params.id }).populate('usuario_id');
			return res.json(vendaInc);
	  } catch(err){
		 return res.status(400).send({ error: 'Falha ao identificar a venda!' })
	  }
  },
  async list(req, res) {
	  try{
			const vendaInc = await Venda.find({}).populate('usuario_id');
			return res.json({vendaInc});
	  } catch(err){
		  return res.status(400).send({ error: 'Falha ao listar vendas!' })
	  }
  },
  async store(req, res) {
	try{
		
		const { numero, statusVenda, totalBruto, totalFinal, produtos, cliente_id } = req.body
		
		 //Inserir no banco de dados
        const vendaInc = await Venda.create({numero, statusVenda, totalBruto, totalFinal, usuario_id: req.userId });

		itens.map( item =>{
			const vendaItens = new ItemVenda({ ... item, venda_id: vendaInc._id });
			
			vendaItens.save().then( item => Venda.produtos.push(item));
		});
		
		await vendaInc.save();
		
        //req.io.sockets.in(req.body._id).emit('file', vendaInc)

        return res.json(vendaInc);
	} catch(err){
		return res.status(400).send({ error: 'Falha ao criar uma nova venda!' })
	} 
  },
  async destroy(req, res) {
	  try{
		await Venda.deleteOne({ _id: req.params.id });
		return res.json({ success: "Registro removido com sucesso!" });
	  } catch(err){
		return res.status(400).send({ error: 'Falha ao remover o registro!' })
	  }
  },
  async update(req, res) {
    const vendaInc = await Venda.updateOne({ _id: req.params.id }, req.body);
    console.log(req.body);
    return res.json(vendaInc);
  },

}
const { Schema, model } = require('mongoose');

const ItemVendaSchema = new Schema({
	descricao: {
		type: String,
		required: true
	},
	tamanho: {
		type: String,
		required: true
	},
	quantidade: {
		type: Schema.Types.Decimal128,
		required: true
	},
	valor: {
		type: Schema.Types.Decimal128,
		required: true
	},
	venda_id: {
		type: Schema.Types.ObjectId,
		ref: 'Venda',
		required: true
	},
	produto_id: {
		type: Schema.Types.ObjectId,
		ref: 'Produto',
		required: true
	},
	usuario_id: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
},
	{
		timestamps: true
	});

module.exports = model('ItemVenda', ItemVendaSchema);
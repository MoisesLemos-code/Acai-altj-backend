const { Schema, model } = require('mongoose');

const VendaSchema = new Schema({
	numero: {
		type: Schema.Types.Number,
		required: true
	},
	statusVenda: {
		type: Boolean,
		required: true,
		default: false
	},
	totalBruto: {
		type: Schema.Types.Decimal128,
		required: true
	},
	totalFinal: {
		type: Schema.Types.Decimal128,
		required: true
	},
	produtos: [
		{
			type: Schema.Types.ObjectId,
			ref: 'ItemVenda'
		}
	],
	cliente_id: {
		type: Schema.Types.ObjectId,
		ref: 'Cliente',
		required: false
	},
	usuario_id: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
},
	{
		timestamps: true
	});

module.exports = model('Venda', VendaSchema);
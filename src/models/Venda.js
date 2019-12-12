const { Schema, model } = require('mongoose');

const VendaSchema = new Schema({
    numero: {
        type: double,
        required: true
    },
	statusVenda:{
		type: Boolean,
		required: true,
		default: false
	},
    totalBruto: {
        type: double,
        required: true
    },
	totalFinal: {
		type: double,
		required: true
	},
	produtos: [
	  {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'ItemVenda'
	  }
	],
	cliente_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cliente',
		required: true
	},
	usuario_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
},
    {
        timestamps: true
    });

module.exports = model('Venda', VendaSchema);
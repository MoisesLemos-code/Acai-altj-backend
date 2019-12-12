const { Schema, model } = require('mongoose');

const ProdutoSchema = new Schema({
    descricao: {
        type: String,
        required: true
    },
    tamanho: {
        type: String,
        required: true
    },
    estoque: {
        type: Schema.Types.Decimal128,
        required: true
    },
    valor: {
        type: Schema.Types.Decimal128,
        required: true
    },
    itensVenda: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ItemVenda'
        }
    ]
},
    {
        timestamps: true
    });

module.exports = model('Produto', ProdutoSchema);
const mongoose = require('mongoose')
    /**meu D.B de artistas
     * [x]nome
     * [x]musica
     * [x]ano de inicio de carreira
     * [x]clipe
     * [x]categoria
     * [x]imagem
     */
const NomeSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId

    },
    nome: {
        type: String,
        required: true
    },
    musica: {
        type: String,
        required: true,
        unique: true
    },
    categoria: [String],
    inicioDeCarreirao: Date,
    clipe: Boolean,
    imagens: [String],
    curtidas: Number,
}, { timestamps: true })
const Model = mongoose.model('nome', NomeSchema)
module.exports = Model
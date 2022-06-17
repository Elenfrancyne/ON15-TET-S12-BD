const ArtistModel = require('../models/artistModels')

const createArtist = async(request, response) => {
    const {
        nome,
        musica,
        inicioDeCarreira,
        clipe,
        categoria,
        imagens
    } = request.body

    if (!nome) {
        return response
            .status(400)
            .json({ message: "O artista não pode ser vazio" })
    }

    try {
        const newArtist = new ArtistModel({
            curtidas: 0,
            nome: nome,
            musica: music,
            inicioDeCarreira: initYear,
            clipe,
            categoria: category,
            imagens: images
        })
        const savedArtist = await newArtist.save()
        response.status(201).json(savedArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findAllArtist = async(request, response) => {

    const { nome, music } = request.query

    let query = {}


    if (music) query.musica = new RegExp(music, 'i')

    if (nome) query.nome = new RegExp(nome, 'i')

    try {
        const findAllArtist = await ArtistModel.find(query)
        response.status(200).json(allArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findById = async(request, response) => {
    try {
        const findArtist = await ArtistModel.findById(request.params.id)
        response.status(200).json(findArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findOneByInitYear = async(request, reponse) => {
    try {
        const findArtist = await ArtistModel.findOne({
            inicioDeCarreira: request.query.initYear
        })

        reponse.status(200).json(findArtist)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
}

const findByOneCategory = async(request, response) => {
    try {
        const findArtist = await ArtistModel.findOne({
            categoria: request.params.name
        })

        response.status(200).json(findArtist)

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    createArtist,
    findAllArtist,
    findById,
    findOneByInitYear,
    findByOneCategory
}
const MusicModel = require('../models/musicModel')

const createMusic = async(request, response) => {
    const {
        artista,
        titulo,
        anoDeLancamento,
        clipe,
        compositor,
        categoria,
        imagens
    } = request.body

    if (!artist) {
        return response
            .status(400)
            .json({ message: "O artista não pode ser vazio" })
    }

    try {
        const newMusic = new MusicModel({
            curtidas: 0,
            artista: artist,
            titulo: title,
            anoDeLancamento: lounchYear,
            clipe,
            compositor: composer,
            categoria: category,
            imagens: images
        })
        const savedMusic = await newMusic.save()
        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findAllMusic = async(request, response) => {
    // retornar todos 
    // e/ou retorna por artista
    // e/ou retornar por titulo
    const { artist, title } = request.query

    let query = {}

    // music.aritsta.toLowerCase().includes(artist.toLowercase()) -> ignore case
    if (artist) query.artista = new RegExp(artist, 'i')

    if (title) query.titulo = new RegExp(title, 'i')

    try {
        const allMusics = await MusicModel.find(query)
        response.status(200).json(allMusics)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findById = async(request, response) => {
    try {
        const findMusic = await MusicModel.findById(request.params.id)
        response.status(200).json(findMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

// exemplo de consulta com data
const findOneByLounchYear = async(request, reponse) => {
    try {
        const findMusic = await MusicModel.findOne({
            anoDeLancamento: request.query.lounchYear
        })

        reponse.status(200).json(findMusic)
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
}

/**
 * 
 * embora não seja coerente com a nossa entidade, fica como exemplo para consulta
 * por exemplo com cpf, cnpj, numero de prontuario, codigo de barras,
 * nome fantasia..., sim, funciona com array!!
 */
const findByOneCategory = async(request, response) => {
    try {
        const findMusic = await MusicModel.findOne({
            categoria: request.params.name
        })

        response.status(200).json(findMusic)

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    createMusic,
    findAllMusic,
    findById,
    findOneByLounchYear,
    findByOneCategory
}
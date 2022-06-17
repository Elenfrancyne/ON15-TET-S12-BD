const controller = require('../controller/artistController')
const express = require('express')

const router = express.Router()

router.post("/artist/create", controller.createArtist);
router.get("/artists", controller.findAllArtist);
router.get("/artists/init_year", controller.findOneByInitYear);

router.get("/artists/category/:nome", controller.findByOneCategory);
router.get("/artist/:id", controller.findById);

module.exports = router
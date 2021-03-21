const { Router } = require('express')
const Cartridge = require('../models/Cartridge')
const router = Router()


router.post('/addcartridge', async (req, res) => {
    try {
        const {modelName, registered, inStock, toRefuel, issued, subdivision, issuedDate} = req.body //получаем поля с фронтенда в теле запроса

        const cartridge = new Cartridge({modelName, registered, inStock, toRefuel, issued, subdivision, issuedDate})

        await cartridge.save()

        res.status(201).json({message: 'Добавлен новый картридж'})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/base', async (req, res) => {
    try {
        const base = await Cartridge.find({})
        res.status(201).json(base)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router
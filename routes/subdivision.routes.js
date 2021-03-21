const { Router } = require('express')
const Subdivision = require('../models/Subdivision')
const router = Router()


router.post('/addsubdivision', async (req, res) => {
    try {
        const {divisionName, address} = req.body //получаем поля с фронтенда в теле запроса

        const division = new Subdivision({divisionName, address})

        await division.save()

        res.status(201).json({message: 'Добавлено новое подразделение'})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

router.get('/getsubdivision', async (req, res) => {
    try {
        const subdivision = await Subdivision.find({})
        res.status(201).json(subdivision)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router
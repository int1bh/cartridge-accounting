const { Router } = require('express')
const Subdivision = require('../models/Subdivision')
const router = Router()


// ==================================================================================
//                           Получение списка отделений
// ==================================================================================

router.get('/getsubdivision', async (req, res) => {
    try {
        const subdivision = await Subdivision.find({})
        res.status(201).json(subdivision)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Добавление нового отделения
// ===================================================================================

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


// ===================================================================================
//                               Удаление отделения
// ===================================================================================

router.delete('/dropsubdivision', async (req, res) => {
    try {
        const {divisionName} = req.body //получаем поля с фронтенда в теле запроса

        await Subdivision.deleteOne({divisionName})
        
        res.status(201).json({message: 'Успешно удалено'})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})



module.exports = router
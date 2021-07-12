const e = require('express')
const { Router } = require('express')
const CartridgeModel = require('../models/CartridgeModels')
const router = Router()


// ==================================================================================
//                           Получение списка моделей
// ==================================================================================

router.get('/getmodel', async (req, res) => {
    try {
        const model = await CartridgeModel.find({})
        res.status(201).json(model)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Добавление новой модели
// ===================================================================================

router.post('/addmodel', async (req, res) => {
    try {
        const {modelName, color, printers} = req.body //получаем поля с фронтенда в теле запроса

        const model = new CartridgeModel({modelName, color, printers})

        await model.save()

        res.status(201).json({message: 'Добавлена новая модель картриджа'})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Удаление модели
// ===================================================================================

router.delete('/dropmodel', async (req, res) => {
    try {
        const {modelName} = req.body //получаем поля с фронтенда в теле запроса

        console.log("request:", req.body);

        await CartridgeModel.deleteOne({modelName})
        
        res.status(201).json({message: 'Успешно удалено'})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})



module.exports = router
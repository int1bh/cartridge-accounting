const { Router } = require('express')
const Cartridge = require('../models/Cartridge')
const router = Router()


// ==================================================================================
// Получение всех картриджей из базы, фильтрация по модели, лимит выдачи результата
// ==================================================================================

router.get('/base', async (req, res) => {
    try {
        if (req.query.modelName) {
            const base = await Cartridge.find({"modelName": req.query.modelName}).limit(+req.query.limit)
            res.status(201).json(base)
        } else {
            const base = await Cartridge.find().limit(+req.query.limit)
            res.status(201).json(base)
        }
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Добавление картриджа в базу
// ===================================================================================

router.post('/addcartridge', async (req, res) => {
    try {
        const {modelName, registered, issued, issuedHistory, toRefuel} = req.body //получаем поля с фронтенда в теле запроса

        const cartridge = new Cartridge({modelName, registered, issued, issuedHistory, toRefuel})

        await cartridge.save()

        res.status(201).json({message: "Добавлен картридж"})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Выдача картриджей в отделения
// ===================================================================================

router.put('/editcartridge', async (req, res) => {
    try {
        const {_id, issuedHistory, issued} = req.body //получаем поля с фронтенда в теле запроса

        await Cartridge.updateMany({_id: {$in: [..._id]}}, {$push: {issuedHistory: {subdivision: issuedHistory[0].subdivision}}, $set: {issued: issued}})
        
        res.status(201).json({message: "Выдано в" + " " + issuedHistory[0].subdivision})

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Удаление картриджей из базы
// ===================================================================================

router.delete('/removecartridge', async (req, res) => {
    try {
        const {_id} = req.body //получаем поля с фронтенда в теле запроса

        await Cartridge.deleteMany({_id: {$in: [..._id]}})
        
        res.status(201).json({message: 'Успешно удалено'})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router
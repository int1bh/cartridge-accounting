const { Router, json } = require('express')
const Cartridge = require('../models/Cartridge')
const TrashHistory = require('../models/TrashHistory')
const router = Router()


// ==================================================================================
// Получение всех картриджей из базы, фильтрация по модели, лимит выдачи результата
// ==================================================================================

router.get('/getall', async (req, res) => {
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

// ==================================================================================
//                           Получение картриджа по штрихкоду
// ==================================================================================

router.get('/getone', async (req, res) => {
    try {
            const base = await Cartridge.find({"barcode": req.query.barcode})
            res.status(201).json(base)
        
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Добавление картриджа в базу
// ===================================================================================

router.post('/addcartridge', async (req, res) => {
    try {
        await Cartridge.insertMany(req.body)
        
        res.status(201).json({message: `Добавлено картриджей: ${req.body.length} шт.`})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                      Внесение информации по удаленным картриджам
// ===================================================================================

router.post('/trash', async (req, res) => {
    try {
        await TrashHistory.insertMany(req.body)
        
        res.status(201).json({message: `Информация внесена`})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ==================================================================================
//                      Получение информации по удаленным картриджам
// ==================================================================================

router.get('/gettrash', async (req, res) => {
    try {
            const base = await TrashHistory.find().limit(+req.query.limit)
            res.status(201).json(base)
        
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Выдача картриджей в отделения
// ===================================================================================

router.put('/issue', async (req, res) => {
    try {
        const {barcode, issuedHistory} = req.body //получаем поля с фронтенда в теле запроса
        const result = await Cartridge.find({"barcode": req.body.barcode})
             
        if(!result[0].issued) {
            await Cartridge.updateMany({barcode: {$in: [...barcode]}}, {$push: {issuedHistory: {subdivision: issuedHistory[0].subdivision}}, $set: {issued: true}})
            res.status(201).json({message: "Выдано в" + " " + issuedHistory[0].subdivision})
        } else {
            res.status(500).json({message: "Нельзя выдать ранее выданный картридж!"})
        } 

    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// ===================================================================================
//                               Возврат на склад
// ===================================================================================

router.put('/returnwarehouse', async (req, res) => {
    try {
        const {barcode} = req.body
        const result = await Cartridge.find({"barcode": req.body.barcode})
        
        if(result[0].issued) {
            await Cartridge.updateMany({barcode: {$in: [...barcode]}}, {$push: {issuedHistory: {subdivision: "Склад"}}, $set: {issued: false}})
            res.status(201).json({message: "Успешно!"})
        } else {
            res.status(500).json({message: "Картридж уже возвращен"})
        }
    
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// ===================================================================================
//                               Отправка на заправку
// ===================================================================================

router.put('/torefuel', async (req, res) => {
    try {
        const {barcode} = req.body
        const result = await Cartridge.find({"barcode": req.body.barcode})
        
        if(!result[0].issued & !result[0].toRefuel) {
            await Cartridge.updateMany({barcode: {$in: [...barcode]}}, {$push: {issuedHistory: {subdivision: "Отдан в заправку"}}, $set: {issued: false, toRefuel: true}})
            res.status(201).json({message: "Отдан в заправку"})
        } else {
            res.status(500).json({message: "Ошибка! Картридж уже в заправке"})
        }
    
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// ===================================================================================
//                               Прием с заправки
// ===================================================================================

router.put('/returnrefuel', async (req, res) => {
    try {
        const {barcode} = req.body
        const result = await Cartridge.find({"barcode": req.body.barcode})
        
        if(!result[0].issued & result[0].toRefuel) {
            await Cartridge.updateMany({barcode: {$in: [...barcode]}}, {$push: {issuedHistory: {subdivision: "Склад"}}, $set: {issued: false, toRefuel: false}})
            res.status(201).json({message: "Принят на склад"})
        } else {
            res.status(500).json({message: "Принят ранее"})
        }
    
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})


// ===================================================================================
//                               Удаление картриджей из базы
// ===================================================================================

router.delete('/dropcartridge', async (req, res) => {
    try {
        const {barcode} = req.body //получаем поля с фронтенда в теле запроса

        await Cartridge.deleteMany({barcode: {$in: [...barcode]}})
        
        res.status(201).json({message: 'Успешно удалено'})
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

module.exports = router
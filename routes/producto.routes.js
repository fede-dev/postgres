const express = require('express')
const router = express.Router()
const model = require('../models/producto.models')


router.get('/', (req, res) => {
    model.findAll().then((result) => {
        res.status(200).json({ data: result })
    }).catch((error) => {
        res.status(500).json({ data: error })
    })
})

router.get('/:id', (req, res) => {

})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router
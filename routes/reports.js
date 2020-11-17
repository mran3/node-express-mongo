const express = require('express')
const router = express.Router()
const Report = require('../models/report')

async function getReport(req, res, next) {
    try {
      subscriber = await Subscriber.findById(req.params.id)
      if (subscriber == null) {
        return res.status(404).json({ message: 'Cant find subscriber'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.subscriber = subscriber
    next()
  

// Get all subscribers
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find()
        res.json(reports)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one subscriber
router.get('/:id', (req, res) => {
})

// Create one subscriber
router.post('/', async (req, res) => {
    const report = new Report({
        cabId: req.body.cabId,
        stars: req.body.stars,
        comment: req.body.comment
      })
      try {
          const newReport = await report.save()
          res.status(201).json(newReport)
      } catch(err) {
          res.status(400).json({ message: err.message })
      }
})

// Update one subscriber
router.patch('/:id', (req, res) => {
})

// Delete one subscriber
router.delete('/:id', (req, res) => {
})

module.exports = router
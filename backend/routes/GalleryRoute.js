const route = require('express').Router()
const {Gallery} = require('../models')

route.get('/', async (req, res) => {
    try {
      const data = await Gallery.findAll({ raw: true });
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  });
  
module.exports = route
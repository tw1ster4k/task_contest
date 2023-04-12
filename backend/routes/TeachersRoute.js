const route = require('express').Router()
const {Teacher} = require("../models")

route.get('/', async (req, res) => {
    try {
      const data = await Teacher.findAll({ raw: true });
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  });
  
module.exports = route;
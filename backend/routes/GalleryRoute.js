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

  route.post("/delete", async (req, res) => {
    try {
      const { id } = req.body;
      await Gallery.destroy({ where: { id } });
      res.json({ delete: 'Удалено!' });
    } catch (error) {
      console.log(error);
    }
  })

  route.post("/new", async (req, res) => {
    try {
      await Gallery.create(req.body);
      res.json({ info: 'Сохранено!' });
    } catch (error) {
      console.log(error)
    }
  })
  
module.exports = route
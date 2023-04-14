const route = require('express').Router();

route.get('/', async (req, res) => {
  try {
    if (req.session) {
      console.log(req.session.user);
      req.session.destroy();
      res.clearCookie('Session');
      res.status(200).end();
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
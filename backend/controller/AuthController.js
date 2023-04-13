const {Admin} = require('../models')

const login = async (req,res) => {
    const {name, password} = req.body
    try {
        const admin = await Admin.findOne({ where: { name }, raw: true });
        if(admin){
            const passCheck = password === admin.password;
            if(passCheck){
                req.session.user = admin.name;
                req.session.user_id = admin.id;
                req.session.save(() => {
                    res.json({ answer: 'Done', name: admin.name });
                  });
            }else{
                res.json({ answer: 'Не правильный пароль' });
            }
        }else{
            res.json({ answer: 'Аккаунт не найден' });
        }
    } catch (error) {
        res.send(`Error ------> ${error}`);
      }
      
}
      const checkAdmin = async (req, res) => {
        if (req.session) {
          res.json({ admin: 'Выполнено', name: req.session.user });
        } else {
          res.json({ error: 'Не выполнено' });
        }
      };

  module.exports = {login, checkAdmin}    
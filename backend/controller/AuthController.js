const {Admin} = require('../models')
const bcrypt = require('bcrypt')

const login = async (req,res) => {
    const {name, password} = req.body
    
    try {
        const admin = await Admin.findOne({ where: { name }, raw: true });
        if(admin){
            const hash = await bcrypt.hash(admin.password, 10)
            const passCheck = await bcrypt.compare(password, hash);
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
          res.json({ answer: 'Выполнено', name: req.session.user });
        } else {
          res.json({ answer: 'Не выполнено' });
        }
      };

  module.exports = {login, checkAdmin}    
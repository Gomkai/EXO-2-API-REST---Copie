var express = require('express');
var router = express.Router();

// Importation de la route `users.js`
const userRoute = require('./users'); // Assurez-vous que le chemin est correct

/* GET home page. */
router.get('/', async(req,res)=>{
  res.status(200).json({
    name : process.env.APP_NAME,
    version: '1.0',
    status : 200,
    message : 'Bienvenui sur l/API!'
  });
});




router.use('/users', userRoute);

module.exports = router;

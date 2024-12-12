const express = require('express');
const router = express.Router();



const service = require('../services/users');  // La variable correcte est Service

router.get('/:id', service.getById);  
router.put('/:add', service.add);      
router.patch('/:id', service.update); 
router.delete('/:id', service.delete); 

module.exports = router;

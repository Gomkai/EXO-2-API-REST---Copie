const express = require('express');
const router = express.Router();



const service = require('../services/users');  // La variable correcte est userService
// Correction des appels en utilisant userService
router.get('/:id', service.getById);  // Remplace "service" par "userService"
router.put('/:add', service.add);      // Remplace "service" par "userService"
router.patch('/:id', service.update); // Remplace "service" par "userService"
router.delete('/:id', service.delete); // Remplace "service" par "userService"

module.exports = router;

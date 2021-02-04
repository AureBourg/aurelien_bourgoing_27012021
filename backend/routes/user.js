// Importation des modules
const express = require('express');

//Création du router
const router = express.Router();

// Association avec le controller
const userCtrl = require('../controllers/user');

// Création des différentes routes de l'API
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// Exportation du router
module.exports = router;
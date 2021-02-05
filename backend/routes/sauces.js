// Importation des modules
const express = require('express');
const router = express.Router();

// Association avec le controller
const saucesCtrl = require('../controllers/sauces');

// Ajout des middlewares auth et multer
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Création des différentes routes de l'API
router.post('/', auth, multer, saucesCtrl.createSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/:id/like', auth, saucesCtrl.likeDislikeSauce)

// Exportation du router
module.exports = router;
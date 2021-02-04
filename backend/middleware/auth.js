// Importation des modules
const jwt = require('jsonwebtoken');

// Création et exportation du middleware auth
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); //Changer clé secrète
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User ID non valable !';
    } else {
      next();
    }
  } catch (error){
    res.status(401).json({ error: error | 'Requete non authentifiée !'});
    };
};
const passwordSchema = require('../models/Password');

// On vérifie que le mot de passe valide le schema décrit
module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.writeHead(400, "Le mot de passe doit avoir au moins 8 caractères dont une majuscule et une minuscule.", {'content-type': 'application/json'});
        res.end('Format de mot de passe incorrect');
    } else {
        next();
    }
};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Create new user
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                pseudo: req.body.pseudo,
                biography: req.body.biography,
                avatarUrl: req.body.avatarUrl,
                bannerUrl: req.body.bannerUrl,
                email: req.body.email,
                password: hash,
                isAdmin: false
            });
            user.save()
                .then(() => res.status(201).json({message: 'Utilisateur créé !'}))
                .catch(error => User.findOne({email: req.body.email})
                    .then(user => {
                        if (!user) {
                            return res.status(401).json({error: 'Veuillez remplir les champs'});
                        }
                    }));
        })
        .catch(error => res.status(500).json({error}));
};

// Login your user
exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({error: 'Utilisateur non trouvé !'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({error: 'Mot de passe incorrect !'});
                    }
                    res.status(200).json({
                        userId: user._id,
                        name: user.name,
                        pseudo: user.pseudo,
                        biography: user.biography,
                        avatarUrl: user.avatarUrl,
                        bannerUrl: user.bannerUrl,
                        token: jwt.sign(
                            {
                                userId: user._id,
                                isAdmin: user.isAdmin
                            },
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: '1h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};

// Get post author infos
exports.getInfos = (req, res, next) => {
    User.findOne({_id: req.body.authorId})
        .then(user => {
            if (!user) {
                return res.status(401).json({error: 'Utilisateur non trouvé !'});
            }
            res.status(200).json({
                userId: user._id,
                name: user.name,
                pseudo: user.pseudo,
                biography: user.biography,
                avatarUrl: user.avatarUrl,
                bannerUrl: user.bannerUrl,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        })
        .catch(error => res.status(500).json({error}));
}

// Modify account informations
exports.modifyAccount = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.updateOne({_id: req.params.id},
        {name: req.body.name, biography: req.body.biography, avatarUrl: req.body.avatarUrl, bannerUrl: req.body.bannerUrl, password: hashedPassword}).then(
        () => {
            res.status(201).json({
                message: 'Account updated successfully!'
            });
        }).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
};

// Check if the user is admin or not
exports.getIsAdmin = (req, res, next) => {
    User.findOne({_id: req.params.id})
        .then(user => {
            if (!user) {
                return res.status(401).json({error: 'Utilisateur non trouvé !'});
            }
            res.status(200).json({
                isAdmin: user.isAdmin,
            });
        })
        .catch(error => res.status(500).json({error}));
}
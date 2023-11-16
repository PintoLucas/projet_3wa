const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// MongoDB schema for the user created
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    pseudo: { type: String, required: true, unique: true },
    biography: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    bannerUrl: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

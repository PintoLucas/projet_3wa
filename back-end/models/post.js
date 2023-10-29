const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    description: { type: String },
    imageUrl: { type: String },
    userId: { type: String },
    likes: { type: Number },
    usersLiked: { type: [String] }
});

module.exports = mongoose.model('Post', postSchema);

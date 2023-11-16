const mongoose = require('mongoose');

// MongoDB schema for the post created
const postSchema = mongoose.Schema({
    description: { type: String },
    imageUrl: { type: String },
    userId: { type: String },
    likes: { type: Number },
    usersLiked: { type: [String] },
    listOfComments: { type: [Array] }
});

module.exports = mongoose.model('Post', postSchema);

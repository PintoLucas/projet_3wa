const Post = require('../models/post');
const fs = require("fs");

// Add new Post
exports.createPost = (req, res, next) => {
    const post = new Post({
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        likes: 0,
        usersLiked: [],
        listOfComments: []
    });
    post.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

// Fetch all the posts
exports.getAllPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
            res.status(200).json(posts);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

// Fetch one post
exports.getOnePost = (req, res, next) => {
    Post.findOne({
        _id: req.params.id
    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

// Modify one post
exports.modifyPost = (req, res, next) => {
    Post.updateOne({_id: req.params.id}, {description: req.body.description, imageUrl: req.body.imageUrl}).then(
        () => {
            res.status(201).json({
                message: 'Post updated successfully!'
            });
        }).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
};

// Delete one post
exports.deletePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
        .then(Post.deleteOne({_id: req.params.id})
            .then(
                () => {
                    res.status(200).json({
                        message: 'Deleted!'
                    });
                }
            )
            .catch(
                (error) => {
                    res.status(400).json({
                        error: error
                    });
                }
            ))
}

// Like one post
exports.likePost = (req, res, next) => {
    Post.findOne({_id: req.params.id}).then((post) => {
        if (post.usersLiked.includes(req.body.userId)) {
            post.usersLiked.remove(req.body.userId)
            post.likes--
        } else {
            post.usersLiked.push(req.body.userId)
            post.likes++
        }
        post.save().then(
            () => {
                res.status(201).json({
                    likes: post.likes,
                    message: "Post Like Updated!"
                })
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    });
}

// Comment one post
exports.commentPost = (req, res, next) => {
    Post.findOne({_id: req.params.id}).then((post) => {
        post.listOfComments.push([req.body.userName, req.body.userAvatar, req.body.comments])
        post.save().then(
            () => {
                res.status(201).json({
                    comments: post.comments,
                    message: "Post comments Updated!"
                })
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    });
}

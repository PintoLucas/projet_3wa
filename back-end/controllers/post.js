const Post = require('../models/post');
const fs = require("fs");
exports.test = (req, res, next) => {
    res.status(200).json({message: 'Post OK'});
}

exports.createPost = (req, res, next) => {
    const post = new Post({
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        likes: 0,
        usersLiked: []
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

exports.getAllPosts = (req, res, next) => {
    Post.find().then(
        (sauces) => {
            res.status(200).json(sauces);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

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

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ?
        {
            ...JSON.parse(req.body.post)
        } : {...req.body};
    delete req.body._id;
    Post.updateOne({_id: req.params.id}, {...postObject, _id: req.params.id}).then(
        () => {
            res.status(201).json({
                message: 'Post updated successfully!'
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
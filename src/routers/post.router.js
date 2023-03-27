const express = require('express');
const PostsRouter = express.Router();
const PostController = require('../controllers/post.controller');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' })


const endPoint = '/posts';

PostsRouter.get(`${endPoint}`, PostController.getPosts);
PostsRouter.get(`${endPoint}/:id`, PostController.getPost);
PostsRouter.post(endPoint, upload.array('photo',8), PostController.createPost);
PostsRouter.put(`${endPoint}/:id`,upload.array('photo',8), PostController.updatePost);
PostsRouter.delete(`${endPoint}/:id`, PostController.deletePost);
PostsRouter.get(`${endPoint}/search/:searchTerm`, PostController.searchPosts);

module.exports = PostsRouter;
const router = require('express').Router();

const apiPostsRouter = require('./api/posts');
router.use('/posts',apiPostsRouter);

const apiAutoresRouter = require('./api/autores');
router.use('/autores',apiAutoresRouter);

module.exports = router;
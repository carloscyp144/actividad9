const router = require('express').Router();
const {getAll,create}=require('../../models/posts.model')

/* GET home page. */
router.get('/', (req, res)=> {
    getAll()
    .then((result)=>res.json(result[0]))
    .catch((err)=>res.json({error:err.mensage}));
})
router.post('/', async (req, res)=> {
    const [result] = await create(req.body);
    res.json(result);
});

module.exports = router;
const router = require('express').Router();
const {getAll,create,getAllById}=require('../../models/autores.model')

/* GET home page. */
router.get('/', (req, res)=> {
    getAll()
    .then((result)=>res.json(result[0]))
    .catch((err)=>res.json({error:err.mensage}));
});
router.get('/:Id', (req, res)=> {
    getAllById(req.params.Id)
    .then((result)=>res.json(result[0]))
    .catch((err)=>res.json({error:err.mensage}));
});
router.post('/', async (req, res)=> {
    const [result] = await create(req.body);
    res.json(result);
});

module.exports = router;
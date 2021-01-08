module.exports = (app) => {

const proteinsController = require('../controllers/protein.controller');

var router = require('express').Router();

router.post('/' , proteinsController.create);
router.get('/' , proteinsController.findAll);
router.get("/:id" , proteinsController.findOne)
router.put("/:id" , proteinsController.update)
router.delete("/:id" , proteinsController.delete)



app.use('/api/proteins' , router)

};
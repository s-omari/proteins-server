module.exports = (app) => {

const proteinsController = require('../controllers/protein.controller');

var router = require('express').Router();

router.post('/' , proteinsController.create);
router.get('/' , proteinsController.findAll);
router.get("/:id" , proteinsController.findOne)


app.use('/api/proteins' , router)

};
const Protein = require("../models").proteins


// create
// findAll
// findOne
// update
// delete
// deleteAll
// findAllPublished

exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({ message: 'cant create a protein without a name' })
        return;
    }

    // create a protein object from model
    const protein = new Protein({
        name: req.body.name,
        pdbId: req.body.pdbId
    })

    // save protein
    protein.save(protein)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || 'some error occured'
            })
        })
}

exports.findAll = (req , res) => {
Protein.find()
    .then(data => res.send(data))
    .catch(err=>{
        res.status(500).send({
            message: err.message || 'error occured while retrieving proteins'
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Protein.findById(id)
        .then((data)=> res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || `some error occured while retrieving protein ${id}`
            })
        })
}
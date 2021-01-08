const Protein = require("../models").proteins


// create
// findAll
// findOne
// update
// delete
// deleteAll
// findAllCondition

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

exports.findAll = (req, res) => {
    Protein.find()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || 'error occured while retrieving proteins'
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Protein.findById(id)
        .then((data) => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: err.message || `some error occured while retrieving protein ${id}`
            })
        })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'request body is empty!'
        })
    }
    const id = req.params.id
    Protein.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `cannot update protein with id  ${id}`
                })
            }
            else res.send({ message: `updated protein ${id}` })

        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: `error updating `
            })
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Protein.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `cannot delete protein with id  ${id} , possibly not found`
                })
            }
            else res.send({ message: `deleted protein ${id}` })

        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message: `error deleting `
            })
        })
}

exports.deleteAll = (res, req) => {
    Protein.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} proteins were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all proteins."
            });
        });
}


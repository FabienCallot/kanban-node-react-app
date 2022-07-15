const { UniqueConstraintError, ValidationError } = require('sequelize');

const errorController = {

    notFound(_, res) {
        res.status(404).json({ error: `API route doesn't exists` });
    },

    error(err, req, res, next) {
        if(err instanceof UniqueConstraintError){
            res.status(400).json({ error: `Entity already exists` });
        } else if (err instanceof ValidationError) {
            res.status(400).json({ error: err.message });
        } else {
            console.error(err);
            res.status(500).json({ error: `Internal server error` });
        }
    }

}

module.exports = errorController;
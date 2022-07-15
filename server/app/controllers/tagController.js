const { Tag } = require('../models');

const tagController = {

    async getAll(req, res, next) {
        try {
            const tags = await Tag.findAll();
            res.json(tags);
        } catch (err) {
            next(err);
        }
    },

    async getOne(req, res, next) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id) || id < 1) {
                return next();
            }
            const tag = await Tag.findByPk(id);
            if (!tag) {
                return res.status(404).json({ error: `Tag doesn't exists` });
            }
            res.json(tag);
        } catch (err) {
            next(err);
        }
    },

    async create(req, res, next) {
        try {
            const tag = await Tag.create(req.body, {
                silent: true
            });
            res.json(tag);
        } catch (err) {
            next(err);
        }
    },

    async update(req, res, next) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id) || id < 1) {
                return next();
            }
            const result = await Tag.update(req.body, {
                where: {
                    id
                },
                returning: true
            });
            const tag = result[1][0];
            res.json(tag);
        } catch (err) {
            next(err);
        }
    },

    async delete(req, res, next) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id) || id < 1) {
                return next();
            }
            const result = await Tag.destroy({
                where: {id}
            });
            if(!result){
                return res.status(404).json({ error: `Tag doesn't exists` });
            }
            res.status(204).json();
        } catch (err) {
            next(err);
        }
    }

}

module.exports = tagController;
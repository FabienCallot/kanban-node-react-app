const { List } = require('../models');

const listController = {
  async getAll(req, res, next) {
    try {
      const lists = await List.findAll({
        include: {
          association: 'cards',
          include: 'tags',
        },
        order: [
          ['position', 'ASC'],
          ['cards', 'position', 'ASC'],
        ],
      });
      res.json(lists);
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
      const list = await List.findByPk(id);
      if (!list) {
        return res.status(404).json({ error: `List doesn't exists` });
      }
      res.json(list);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const list = await List.findOne({
        where: {
          name: req.body.name,
        },
      });
      const newList = await List.create(req.body, {
        silent: true,
      });
      console.log(`Ceci est la liste : ${list}`);

      if (list) {
        return res.status(401).json({
          error: 'list already exist',
        });
      } else {
        res.json(newList);
      }
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
      const result = await List.update(req.body, {
        where: {
          id,
        },
        returning: true,
      });
      const list = result[1][0];
      res.json(list);
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
      const result = await List.destroy({
        where: { id },
      });
      if (!result) {
        return res.status(404).json({ error: `List doesn't exists` });
      }
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  },
};

module.exports = listController;

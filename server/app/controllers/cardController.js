const { Card } = require('../models');
const { ValidationError } = require('sequelize');

const cardController = {
  async getAll(req, res, next) {
    try {
      const cards = await Card.findAll();
      res.json(cards);
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
      const card = await Card.findByPk(id, {
        include: 'tags',
      });
      if (!card) {
        return res.status(404).json({ error: `Card doesn't exists` });
      }
      res.json(card);
    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const card = await Card.create(req.body, {
        silent: true,
      });
      res.json(card);
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
      const result = await Card.update(req.body, {
        where: {
          id,
        },
        returning: true,
      });
      const card = result[1][0];
      res.json(card);
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
      const result = await Card.destroy({
        where: { id },
      });
      if (!result) {
        return res.status(404).json({ error: `Card doesn't exists` });
      }
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  },

  async getByListId(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const cards = await Card.findAll({
        where: {
          list_id: id,
        },
        include: 'tags',
      });
      res.json(cards);
    } catch (err) {
      next(err);
    }
  },

  async associateTag(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      if (!req.body.tag_id) {
        throw new ValidationError(`l'id du tag est obligatoire`);
      }

      let card = await Card.findByPk(id, {
        include: 'tags',
      });

      if (!card) {
        return res.status(404).json({ error: `Card doesn't exists` });
      }

      await card.addTag(req.body.tag_id);

      card = await Card.findByPk(id, {
        include: 'tags',
      });

      res.json(card);
    } catch (err) {
      next(err);
    }
  },

  async dissociateTag(req, res, next) {
    try {
      const card_id = parseInt(req.params.card_id, 10);
      if (isNaN(card_id) || card_id < 1) {
        return next();
      }

      const tag_id = parseInt(req.params.tag_id, 10);
      if (isNaN(tag_id) || tag_id < 1) {
        return next();
      }

      let card = await Card.findByPk(id, {
        include: 'tags',
      });

      if (!card) {
        return res.status(404).json({ error: `Card doesn't exists` });
      }

      await card.removeTag(req.body.tag_id);

      card = await Card.findByPk(id, {
        include: 'tags',
      });

      res.json(card);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = cardController;

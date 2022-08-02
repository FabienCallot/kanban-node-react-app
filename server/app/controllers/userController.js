const { User } = require('../models');
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const userController = {
  async signinAction(req, res) {
    try {
      // /* validation of the email. */
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (user) {
        return res.status(401).json({ error: 'Utilisateur déjà enregistré.' });
      }
      /* validation of the email. */
      if (!emailValidator.validate(req.body.email)) {
        return res
          .status(401)
          .json({ error: `L'email est invalide. Réessayez.` });
      }
      /* Checking if the password and the password confirmation are the same. */
      if (req.body.password !== req.body.passwordConfirm) {
        return res.status(401).json({
          error: 'Les mots de passe ne sont pas identiques. Réessayer.',
        });
      }
      /* Encrypting the password. */
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(req.body.password, salt);
      /* It creates a new user with the data that we have in the request. */
      const newUser = new User({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: encryptedPassword,
      });
      /* Saving the new user in the database. */
      await newUser.save();
      res.status(200).json({
        message: 'compte crée',
      });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err.message);
    }
  },

  /* We are trying to recover the user who has a given email. */
  async loginAction(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(401).json({
          error: 'Erreur de saisie du login et/ou du mot de passe',
        });
      }
      /* This is a validation of the password. */
      const validPwd = await bcrypt.compare(req.body.password, user.password);
      if (!validPwd) {
        return res.status(401).json({
          error: 'Erreur de saisie du login et/ou du mot de passe',
        });
      }
      console.log(user);
      /* delete user.password; */
      let u = { ...user };
      delete u.dataValues.password;
      const newUser = u.dataValues;

      res.status(200).json({
        newUser,
        token: jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: '24h',
        }),
      });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err.message);
    }
  },

  /* A method that allows you to delete a user. */
  async deleteAction(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const result = await User.destroy({
        where: { id },
      });
      if (!result) {
        return res.status(404).json({ error: `L'utilisateur n'existe pas` });
      }
      res.status(204).json();
    } catch (err) {
      next(err);
    }
  },
  /* A method that allows you to update a user. */
  async updateAction(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id) || id < 1) {
        return next();
      }
      const result = await User.update(req.body, {
        where: {
          id,
        },
        returning: true,
      });
      const user = result[1][0];
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;

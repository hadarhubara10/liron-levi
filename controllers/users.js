const mongoose = require('mongoose');
const User = require('../models/user');
const reMail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
rePhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
  getAllUsers: (req, res) => {
    User.find()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) =>
        res.status(500).json({
          error,
        })
      );
  },
  getUser: (req, res) => {
    const userID = req.params.userID;
    User.findById(userID)
      .then((user) => {
        return res.status(200).json({ user });
      })
      .catch((err) => {
        return res.status(500).json({ message: err });
      });
  },
  createUser: async (req, res) => {
    const { name, phoneNumber, email, dateOfEvent } = req.body;
    if (name != '' && phoneNumber != '' && reMail.test(email)) {
      const userInDB = await User.findOne({ email: email }).catch((err) => {
        return res.status(500).json(err);
      });
      if (!userInDB) {
        const userDetails = new User({
          _id: mongoose.Types.ObjectId(),
          name,
          phoneNumber,
          email,
          dateOfEvent,
        });
        userDetails
          .save()
          .then(() => {
            return res.status(201).json(userDetails);
          })
          .catch((err) => {
            return res.status(400).json(err);
          });
      } else {
        await userInDB.dateOfEvent.push(dateOfEvent);
        await userInDB.save();
        return res.status(200).json({
          message: 'The email is in DB - Date Pushed to dates !',
        });
      }
    } else {
      return res.status(400).json({
        message: 'details false',
      });
    }
  },
  deleteUser: (req, res) => {
    const { userID } = req.params;
    const validID = mongoose.Types.ObjectId.isValid(userID);
    if (!validID) return res.status(400).json({ error: 'User not found' });
    User.findByIdAndDelete(userID)
      .then(() => {
        return res.status(200).json({ message: 'User deleted' });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },
  editUser: (req, res) => {
    const userID = req.params.userID;
    const validID = mongoose.Types.ObjectId.isValid(userID);
    if (!validID) {
      return res.status(404).json({ message: 'User not found' });
    }
    const bodyToChange = req.body;
    console.log(bodyToChange);
    User.findByIdAndUpdate(userID, bodyToChange, { new: true }, (err, doc) => {
      if (err) return res.status(400).json(err);
      return res.status(201).json(doc);
    });
  },

  checkAdmin: (req, res) => {
    const { email, password } = req.body;
    if (email == 'liron@levi.com') {
      bcrypt.compare(
        password,
        '$2a$12$jaAxbuzmY36x6UHVkC68h.9XFbvynbXR04AHttOcvtbqie9jwy.kC',
        (err, result) => {
          if (err) return res.status(400).json(err);
          if (!result)
            return res.status(400).json({ error: 'password not valid' });
          jwt.sign({ role: 'admin' }, 'privateKey', (err, token) => {
            if (err) return res.status(400).json(err);
            return res.status(200).json({ token });
          });
        }
      );
    } else {
      return res.status(500).json({ err: 'email not found' });
    }
  },
  verifyToken: (req, res) => {
    console.log('verifyToken');
    const authHeader = req.headers['authorization'];
    if (authHeader.startsWith('Bearer ')) {
      // Get Token from headers
      const token = authHeader.substring(7, authHeader.length);
      if (token !== '') {
        jwt.verify(token, 'privateKey', (err, decoded) => {
          if (err) return res.status(401).json({ error: 'Invalid Token' });

          return res.status(200).json({ role: decoded.role });
        });
      } else {
        return res
          .status(403)
          .json({ error: 'A token is required for authentication' });
      }
    } else {
      return res
        .status(403)
        .json({ error: 'A token is required for authentication' });
    }
  },
};

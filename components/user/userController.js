// controllers/userController.js
require('dotenv').config();
const { User } = require('../../models');
const { sequelize } = require('../../models');
const error = require('../../middlewares/errorHandling/errorConstants');





exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  if (users.length === 0) {
    return res.json({
      message: "no users found",
    })
  }
  return res.json(users);
}
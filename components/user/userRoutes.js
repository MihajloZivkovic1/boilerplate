// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('./userController');
const { catchAsyncError } = require('../../lib/functionErrorHandler');


router.get('/', catchAsyncError(userController.getAllUsers));
router.get('/:userId', catchAsyncError(userController.getUser));

module.exports = router;
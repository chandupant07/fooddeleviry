const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { model } = require('mongoose');
const { body, validationResult } = require('express-validator');


router.post('/createuser', [
  body('name').isLength({ min: 5 }),
  body('email').isEmail(),
  body('password', 'Invalid password').isLength({ min: 5 })],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      })
      res.json({ success: true });
    }
    catch (error) {
      console.log(error);
    }
    res.json({ success: false });
  })
////////////////////////////// user login////////////////////////////////////////

router.post('/logineuser', [
  body('email').isEmail(),
  body('password', 'Incorrect Password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(({ errors: errors.array() }));
  }

  let email = req.body.email;

  try {
    let userData = await User.findOne({ email })
    if (!userData) {
      return res.status(400).json({ erroers: "check user email and password" })
    }
    if (req.body.password !== userData.password) {
      return res.status(400).json({ erroers: "check user email and password" })
    }
    return res.json({ success: true })
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
})

module.exports = router;
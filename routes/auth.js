const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

// @route    POST /auth/signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const varFiltersCg = await User.findOne({ email });

  if (varFiltersCg) {
    return res.status(400).json({ msg: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword
  });

  await newUser.save();
  res.json({ msg: 'User created successfully' });
});

// @route    POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const varOcg = await User.findOne({ email });

  if (!varOcg) {
    return res.status(400).json({ msg: 'Invalid Credentials' });
  }

  const isMatch = await bcrypt.compare(password, varOcg.password);
  if (!isMatch) {
    return res.status(400).json({ msg: 'Invalid Password' });
  }

  const token = jwt.sign({ id: varOcg.id }, process.env.SESSION_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// @route    GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @route    GET /auth/google/callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    const user = req.user;
    // Successful login
    // res.send('Logged in with Google!');
    
  // Create JWT
  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send token to client
  res.json({token:token,message:'Logged in with Google!'});
  }
);

module.exports = router;

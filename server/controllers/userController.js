const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require('config');

const User = require('../models/userModel');

const signinController = async (req, res) => {
  if (req.body.googleAccessToken) {
    // gogole-auth
    const { googleAccessToken } = req.body;

    axios
      .get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async response => {
        const name = response.data.given_name + response.data.family_name;
        const email = response.data.email;
        const picture = response.data.picture;

        const existingUser = await User.findOne({ email });

        if (!existingUser)
          return res.status(404).json({ message: "User don't exist!" });

        const token = jwt.sign(
          {
            email: existingUser.email,
            id: existingUser._id,
          },
          config.get('JWT_SECRET'),
          { expiresIn: '1h' }
        );

        res.status(200).json({ result: existingUser, token });
      })
      .catch(err => {
        res.status(400).json({ message: 'Invalid access token!' });
      });
  } else {
    // normal-auth
    const { email, password } = req.body;
    if (email === '' || password === '')
      return res.status(400).json({ message: 'Invalid field!' });
    try {
      const existingUser = await User.findOne({ email });

      if (!existingUser)
        return res.status(404).json({ message: "User don't exist!" });

      const isPasswordOk = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordOk)
        return res.status(400).json({ message: 'Invalid credintials!' });

      const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        config.get('JWT_SECRET'),
        { expiresIn: '1h' }
      );

      res.status(200).json({ result: existingUser, token });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong!' });
    }
  }
};

const signupController = async (req, res) => {
  if (req.body.googleAccessToken) {
    const { googleAccessToken } = req.body;

    axios
      .get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      })
      .then(async response => {
        const name = response.data.given_name + response.data.family_name;
        const email = response.data.email;
        const picture = response.data.picture;

        const existingUser = await User.findOne({ email });

        if (existingUser)
          return res.status(400).json({ message: 'User already exist!' });

        const result = await User.create({
          verified: 'true',
          email,
          name,
          profilePicture: picture,
        });

        const token = jwt.sign(
          {
            email: result.email,
            id: result._id,
          },
          config.get('JWT_SECRET'),
          { expiresIn: '1h' }
        );

        res.status(200).json({ result, token });
      })
      .catch(err => {
        res.status(400).json({ message: 'Invalid access token!' });
      });
  } else {
    // normal form signup
    const { email, password, name } = req.body;

    try {
      if (
        email === '' ||
        password === '' ||
        name === '' 
      )
        return res.status(400).json({ message: 'Invalid field!' });

      const existingUser = await User.findOne({ email });

      if (existingUser)
        return res.status(400).json({ message: 'User already exist!' });

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await User.create({
        email,
        password: hashedPassword,
        name
      });

      const token = jwt.sign(
        {
          email: result.email,
          id: result._id,
        },
        config.get('JWT_SECRET'),
        { expiresIn: '1h' }
      );

      res.status(200).json({ result, token });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong!' });
    }
  }
};

module.exports = {
  signinController,
  signupController,
};

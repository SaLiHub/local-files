'use strict';

const { port, host } = require('./configuration');
const { connectDB } = require('./utils/db.js');
const express = require('express');
const app = express();
const { User } = require('./models/user.js');

connectDB()
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', startServer);

function startServer() {
  app.listen(port, () => {
    console.log(`running on ${host}:${port}`);
  });
}

app.get('/users', async (req, res) => {
  try {
    const user = new User({ userName: 'Alex' });
    await user.save();
    const users = await User.find();
    res.json({ users });
  } catch (e) {
    res.send({ e });
  }
});

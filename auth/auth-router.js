const router = require('express').Router();
const bcrypt = require('bcryptjs');
const genToken = require('./genToken.js');
const restricted = require('./restricted.js');
const Users = require('../users/users-model.js');

router.post('/register', async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  if (!user.first_name || !user.last_name || !user.username || !user.password || !user.email || !user.location){
    res.status(400).json({ message: "Please complete all input fields." })
  }
  try {
    const saved = await Users.add(user);
    const token = genToken(saved)
    res.status(201).json({ created_user: saved, token: token });
  } catch {
    res.status(500).json({ message: 'Something went wrong.' })
  }
});

router.post('/login', async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password){
    res.status(400).json({ message: 'Please enter both a username and password.' });
  }
  try { 
    const user = await Users.findBy({ username }).first();
    if(user && bcrypt.compareSync(password, user.password)) {
      const token = genToken(user);
      res.status(200).json({ message: `Welcome ${user.first_name} (${user.username})`, token: token });
    } else {
      res.status(401).json({ message: 'Invalid Credentials.' })
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong.' })
  }
})

module.exports = router;
const mongoose = require('mongoose');
const User = mongoose.model('User');

async function list(req, res) {
  const users = await User.find();

  res.json(users);
}

async function create(req, res) {
  const user = new User({
    nickname: req.body ? req.body.nickname : null,
  });

  await user.save();

  res.json(user);
}

async function update(req, res) {
  const user = await User.findOne({
    nickname: req.body ? req.body.nickname : null,
  });

  if (!user) {
    const error = new Error('User not found');
    error.code = 'UserNotFound';

    throw error;
  }

  await user.save();

  res.json(user);
}

module.exports = function() {
  const router = this.Router();

  router.get('/', list);
  router.post('/', create);
  router.put('/', update);

  this.use('/user/', router);
};

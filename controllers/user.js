const UsersController = {
  index: (req, res) => {
    if (!req.user) {
      return res.status(401).send('Not Authenticated');
    }
    res.json(req.user);
  }
};

module.exports = {
  UsersController
};

const UsersController = {
  index: (req, res) => {
    res.json(req.user);
  }
};

module.exports = {
  UsersController
};

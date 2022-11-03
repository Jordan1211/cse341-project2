const index = (req, res) => {
  res.send(
    'This is the starting point for the custody API here are the endpoints for use: <br> /authorization/login - in order to make calls to /user endpoint as a logged in user <br> /api-docs <br> /holiday <br> /family <br> /finance <br> /user_admin'
  );
};

module.exports = {
  index
};

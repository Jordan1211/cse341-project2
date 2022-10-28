const index = (req, res) => {
  res.send(
    'This is the starting point for the custody API here are the endpoints for use: <br> /api-docs <br> /holiday <br> /family <br> /user <br> /authorization'
  );
};

module.exports = {
  index
};

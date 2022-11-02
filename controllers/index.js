const index = (req, res) => {
  res.send(
    'This is the starting point for the custody API here are the endpoints for use: <br> /api-docs <br> /holiday <br> /family <br> /finance <br> /user admin <br> /authorization - in order to make calls as a logged in usery'
  );
};

module.exports = {
  index
};

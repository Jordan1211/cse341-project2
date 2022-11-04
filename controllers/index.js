const index = (req, res) => {
  res.send(
    'This is the starting point for the custody API please review the <strong> /api-docs </strong> endpoint to see all options, here is a brief summary of endpoints: <br> <strong> /authorization/login </strong> - starting point to login <br> <strong> /user </strong> - lists specific user that is logged in <br> <strong> /family </strong> - grouping of family members <br> <strong> /finance </strong> - holds peer to peer billing records <br><br> ---- INSTRUCTOR USE (no login necessary) ---- <br> <strong> /holiday </strong> - list of available holidays for selection <br> <strong> /user_admin </strong> - view of all viewers for admin/instructor use'
  );
};

module.exports = {
  index
};

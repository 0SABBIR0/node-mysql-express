const connectDB = require("../connection/connect");

exports.getData = (req, res) => {
  let sqlQ =
    "SELECT * FROM `airtel` WHERE `Serial_Number`=" + `'${req.params.code}'`;

  connectDB.query(sqlQ, function (error, result) {
    if (error) throw error;
    res.send(JSON.stringify(result));
  });
};

exports.updateStatus = (req, res) => {
  console.log(req.params, req.body);
  let sqlQ =
    "UPDATE airtel SET Status='" +
    req.body.Status +
    "' where Serial_Number='" +
    req.params.code +
    "'";
  connectDB.query(sqlQ, function (error, result) {
    if (error) throw error;
    res.send(JSON.stringify(result));
  });
};

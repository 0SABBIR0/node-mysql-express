const mysql = require("mysql");
const DBConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "ccnedb",
};

const connectDB = mysql.createConnection(DBConfig);
connectDB.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connection Success");
  }
});

module.exports = connectDB;

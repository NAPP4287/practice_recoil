const mysql = require("mysql");

const dataInfo = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "test",
  database: "mysql",
};

module.exports = {
  init: function () {
    return mysql.createConnection(dataInfo);
  },
  connect: function (conn) {
    return conn.connect(function (err) {
      if (err) console.log("mysql 연결 에러 : " + err);
      else console.log("mysql 연결 성공");
    });
  },
};

const mysql = require('mysql');
class DBConnect {
    connect() {
        return mysql.createConnection({
            host: '127.0.0.1',
            user: 'admin',
            database: 'eshop-app',
            password: '123456@Abc'
        })
    }
}

module.exports = DBConnect;

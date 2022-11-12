const mysql=require('mysql2');
const pool=mysql.createPool({
    host: '',
    user: '',
    password: '',
    port: 3306,
    database: 'blog2'
});
global.db=pool.promise();
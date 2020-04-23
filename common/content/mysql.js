const mysql = require('mysql')

// MySQL 连接配置项
let options = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'Node_MySQL'
}

// 创建连接对象
let con = mysql.createConnection(options)

// 连接数据库
con.connect(err => {
  if (err) {
    return console.log('连接数据库失败')
  }
  console.log('连接数据库成功 Success Connet MySQL')
})

// 运行sql语句函数
function sqlQuery(sqlStr, sqlParamArr) {
  return new Promise((resolve, reject) => {
    con.query(sqlStr, sqlParamArr, (err, result) => {
      if (err) {
        reject(err.message)
      }
      resolve(result)
    })
  })
}

module.exports = sqlQuery

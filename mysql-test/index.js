const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'myblog'
})

// 开始链接
con.connect()

// 执行sql语句
// const sql = 'select * from users;' //查询
// const sql = `update users set realname='李四2' where username='lisi'`; //修改
const sql = `insert into blogs (title,content,createtime,author) values ('标题A','内容A','1586167059847','zhangsan');`
con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(result)
})

// 关闭链接
con.end()
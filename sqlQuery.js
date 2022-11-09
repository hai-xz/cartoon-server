const mysql=require('mysql')

const opt={
  host:'localhost',
  user:'root',
  password:'root',
  database:'cartoon'
}

async function sqlQuery(sql){
  console.log('sql:',sql)
  return new Promise((resolve,reject)=>{
    const connection=mysql.createConnection(opt)
    connection.connect()
    connection.query(sql,(err,res)=>{
      connection.end()
      if(err){
        console.log(`-------------------------sql语句执行错误---------------------------`)
        console.log(err)
        resolve(false)
      }else{
        resolve(res)
      }
    })
  })
}

// sqlQuery(`UPDATE user set headSrc='dfsd' where id='12323'`).then(res=>{
//   console.log(res)
// })

exports.sqlQuery=sqlQuery
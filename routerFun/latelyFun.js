const sqlQuery=require('../sqlQuery').sqlQuery

function latelyFun(req,res){
  let limit=req.query.limit||12
  let offset=req.query.offset||0
  let sql=`SELECT * FROM car ORDER BY updateTime DESC limit ${limit} OFFSET ${offset}`
  let sql2=`select COUNT(*) as quantity from car`

  Promise.all([sqlQuery(sql),sqlQuery(sql2)]).then(resolve=>{
    let data={
      data:resolve[0],
      quantity:resolve[1][0]?.quantity
    }
    res.send(data)
  })
}

exports.latelyFun=latelyFun
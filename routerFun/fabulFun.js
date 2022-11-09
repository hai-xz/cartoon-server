const sqlQuery=require('../sqlQuery').sqlQuery

//点赞排序
let sql2='select COUNT(*) as quantity from car'
let colum='id,name,introduction,author,isEnd,updateTime,coverHref,chapter,Collection,highly,browse'
function fabulFun(req,res){
  let limit=req.query.limit?req.query.limit:12
  let offset=req.query.offset?req.query.offset:0
  let sql=`SELECT ${colum} FROM car ORDER BY highly DESC limit ${limit} OFFSET ${offset}`

  Promise.all([sqlQuery(sql),sqlQuery(sql2)]).then(resolve=>{
    let data={
      data:resolve[0],
      quantity:resolve[1][0]?.quantity
    }
    res.send(data)
  })
}
exports.fabulFun=fabulFun
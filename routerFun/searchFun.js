const sqlQuery=require('../sqlQuery').sqlQuery


//搜索
function searchFun(req,res){
  let text=t(req.query.name||'')
  let limit=req.query.limit||24
  limit=limit>48?48:limit
  let sql=`SELECT * FROM car WHERE name LIKE '${text}' limit ${limit}`
  let sql2=`select COUNT(*) as quantity from car WHERE name LIKE '${text}'`

  Promise.all([sqlQuery(sql),sqlQuery(sql2)]).then(resolve=>{
    let data={
      data:resolve[0],
      quantity:resolve[1][0]?.quantity
    }
    res.send(data)
  })
}

exports.searchFun=searchFun

function t(text){
  if(t.length>20){
    t=t.slice(0,20)
  }
  let k='%'
  for(let i in text){
    k=k+text[i]+'%'
  }
  return k
}

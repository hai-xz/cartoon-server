const sqlQuery=require('../sqlQuery').sqlQuery
//获取顶部轮播图推荐
let sql='SELECT car.id,rcrec.imgHref,car.`name` FROM `rcrec` LEFT JOIN car ON rcrec.id=car.id'

function rcrecFun(req,res){
  sqlQuery(sql).then(resolve=>{
    res.send(resolve)
  }).catch(()=>res.sendStatus(500))
}

exports.rcrecFun=rcrecFun
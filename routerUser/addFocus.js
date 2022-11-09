const sqlQuery=require('../sqlQuery').sqlQuery
const modifyId=require('../fuzuhansu/modifyId').modifyId

function addFocus(req,res){
  let id=req.cookies.id
  id=modifyId(id,false)
  let carId=req.query.id
  if(id==undefined||carId==undefined){
    res.status(500).send('参数错误或者未登录')
    return 0
  }
  let time=Date.parse(new Date())/1000
  let sql=`update user set lostliketime=${time} where id=${id} and ${time}-lostliketime>20`
  sqlQuery(sql).then(resolve=>{
    if(resolve==false||resolve.affectedRows==0){
      res.status(500).send('点赞间隔时间过短')
    }else{
      res.send('操作成功')
	  let sql3=`update car set highly=highly+1 where id=${carId}`
	  sqlQuery(sql3)
    }
  })
}

exports.addFocus=addFocus
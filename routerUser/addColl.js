const sqlQuery=require('../sqlQuery').sqlQuery
const modifyId=require('../fuzuhansu/modifyId').modifyId

function addColl(req,res){
  let id=req.cookies.id
  id=modifyId(id,false)
  let carId=req.query.id
  if(id==undefined||carId==undefined){
    res.status(500).send('参数错误或者未登录')
    return 0
  }
  let sql=`update user set soucan=json_array_append(soucan,'$',JSON_OBJECT('id',${carId},'name',(select name from car where id=${carId}),'time',${Date.parse(new Date())/1000})) where id=${id} and (json_contains(soucan,'{"id":${carId}}'))=0 and ${carId}=(select id from car where id=${carId})`
  sqlQuery(sql).then(resolve=>{
    if(resolve==false||resolve.affectedRows==0){
      res.status(500).send('操作失败,参数错误或者已经收藏')
    }else{
      res.send('操作成功')
      let sql2=`update user set soucan=JSON_REMOVE(soucan, '$[0]') where JSON_LENGTH(soucan)>24 and id=${id}`
      sqlQuery(sql2).then()
	  let sql3=`update car set collection=collection+1 where id=${carId}`
	  sqlQuery(sql3)
    }
  })
}

exports.addColl=addColl
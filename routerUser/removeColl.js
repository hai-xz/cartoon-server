const sqlQuery=require('../sqlQuery').sqlQuery
const modifyId=require('../fuzuhansu/modifyId').modifyId

async function removeColl(req,res){
  let id=req.cookies.id
  id=modifyId(id,false)
  let carId=req.query.id
  if(id==undefined||carId==undefined){
    res.status(400).send('参数错误或者未登录')
    return 0
  }
  let sql=`select soucan from user where id=${id}`
  let data=await sqlQuery(sql)
  if(data===false||data.length==0){
    res.status(500).send('请求执行错误')
    return 0
  }
  data[0]=JSON.parse(data[0].soucan)
  let list=rmv(data[0],carId)
  if(list===false){
    res.status(500).send('参数错误可能是由于未收藏该漫画,无法取消')
    return 0
  }
  let sql2=`update user set soucan='${JSON.stringify(list)}'`
  sqlQuery(sql2).then(resolve=>{
    if(resolve===false){
      res.status(500).send('操作失败')
      return 0
    }else{
      res.send('操作成功')
	  let sql3=`update car set collection=collection-1 where id=${carId}`
	  sqlQuery(sql3)
    }
  })
}

exports.removeColl=removeColl

function rmv(data,carId){
  for(let i in data){
    if(data[i].id==carId){
      data.splice(i,1)
      return data
    }
  }
  return false
}
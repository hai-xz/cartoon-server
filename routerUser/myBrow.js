const sqlQuery=require('../sqlQuery').sqlQuery
const modifyId=require('../fuzuhansu/modifyId').modifyId

function myBrow(req,res){
  let id=req.cookies.id
  if(id==undefined){
    res.status(400).send('未登录')
  }else{
    id=modifyId(id,false)
    let sql=`select liulanjilu as browList from user where id='${id}'`
    sqlQuery(sql).then(resolve=>{
      if(resolve===false){
        res.status(500).send('请求处理错误')
      }else{
        res.send(resolve[0])
      }
    })
  }
}

exports.myBrow=myBrow
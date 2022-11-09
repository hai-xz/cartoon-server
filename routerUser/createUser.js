const sqlQuery=require('../sqlQuery').sqlQuery
const modifyId=require('../fuzuhansu/modifyId').modifyId
const signin=require('./signin').signin

function createUser(req,res){
  let data=req.query
  if(inspect(data)){
    const colum='(user.id,user.pwd,user.name,user.zuceshijian,user.soucan,user.liulanjilu,user.lostLikeTime)'
    let sql=`insert into user ${colum} value (${data.id},'${data.pwd}','${data.name}',${Date.parse(new Date())/1000},'[]','[]',0)`
    sqlQuery(sql).then(resolve=>{
      if(resolve===false){
        data.text='数据库操作失败'
        res.status(500).send(data)
      }else{
        signin(req,res)   //创建完成后调用登录接口返回用户信息
      }
    })
  }else{
    data.text='你的参数不太正确,请确保id由数字组成并且提交参数包含name以及pwd字段'
    res.status(400).send(data)
  }
}

function inspect(data){
  if(data.id!=undefined && data.name!=undefined && data.pwd!=undefined){
    if(!/\D/.test(data.id) && data.id.length<12 ){
      return true
    }
  }
  return false
}

exports.createUser=createUser
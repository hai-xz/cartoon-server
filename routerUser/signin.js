const sqlQuery=require('../sqlQuery').sqlQuery
const modifyId=require('../fuzuhansu/modifyId').modifyId

const colum='user.id,user.name,user.zuceshijian,user.liulanjilu,user.soucan,user.headSrc'
function signin(req,res){
  let data=req.query
  if(data.id && data.pwd){
    let sql=`select ${colum} from user where id='${data.id}' and pwd='${data.pwd}'`
    sqlQuery(sql).then(resolve=>{
      if(resolve===false || resolve.length===0){
        data.text='登录失败'
        res.status(500).send(data)
      }else{
        data.text='登录成功'
        data.data=resolve
        res.cookie('id', modifyId(data.id,true), {maxAge: 1000*60*60*24*30, httpOnly: true})
        res.send(data)
      }
    })
  }else{
    data.text='参数错误'
    res.status(400).send(data)
  }
}

exports.signin=signin
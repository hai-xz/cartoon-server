const sqlQuery=require('../sqlQuery').sqlQuery
const modifyId=require('../fuzuhansu/modifyId').modifyId

async function addBrow(req){
  let id=req.cookies.id
  let cartoonId=req.query.id
  let i=req.query.i	//i表示第几章节
  if(id==undefined||cartoonId==undefined||i==undefined){
    return 0
  }
  id=modifyId(id,false)
  let sql=`UPDATE user set liulanjilu=json_array_append(liulanjilu,'$',JSON_OBJECT('id',${cartoonId}, 'name',(select name from car WHERE id=${cartoonId}), 'time', ${Date.parse(new Date())/1000}, 'i', ${i})) where id=${id} `
  sqlQuery(sql).then(resolve=>{
    if(resolve!=false){
      let sql=`UPDATE user set liulanjilu=JSON_REMOVE(liulanjilu, '$[0]') WHERE JSON_LENGTH(liulanjilu)>48 and id=${id}`
      sqlQuery(sql).then(r=>{})
    }
  })
}

exports.addBrow=addBrow
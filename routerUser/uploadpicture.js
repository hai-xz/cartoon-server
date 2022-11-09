const formidable = require('formidable')
const modifyId = require('../fuzuhansu/modifyId').modifyId
const sqlQuery = require('../sqlQuery').sqlQuery 
const fs=require('fs')

const path='F://我的漫画/用户头像/'

async function uploadpicture(req, res) {

  let isDirty=false
  const sendResponse=(statu,text)=>{
    if(isDirty) return 0
    res.status(statu).send(text)
    isDirty=true
  }


  let id = req.cookies.id
  if (!id) {
    sendResponse(500,'未获取到用户信息')
    return
  }
  id = modifyId(id, false)

  const filename = () =>`${id}.jpg`
  const form = formidable({
    uploadDir: path,
    maxFiles: 1,
    maxFileSize: 2 * 1024 * 1024,  //单位字节
    filename: filename
  })

  form.parse(req, (err, fields, files) => {
    if (err) {
      sendResponse(500,'请求处理出错')
    }
  })
  form.on('end',()=>{
    sqlQuery(`UPDATE user set headSrc='/img/用户头像/${id}.jpg' where id=${id}`).then(data=>{
      console.log(data,data.affectedRows==1)
      if(data===false || data.affectedRows!=1){
        sendResponse(500,'请求处理出错')
        fs.unlink(path+filename(),()=>{})
      }else{
        sendResponse(200,'ok')
      }
    })
  })
}

exports.uploadpicture = uploadpicture
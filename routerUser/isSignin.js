const sqlQuery = require('../sqlQuery').sqlQuery
const modifyId = require('../fuzuhansu/modifyId').modifyId

const colum = 'user.id,user.name,user.zuceshijian,user.liulanjilu,user.soucan,user.headSrc'
function isSignin(req, res) {
  let id = req.cookies.id
  if (!id) {
    res.status(400).send('未登录')
  } else {
    id = modifyId(id, false)
    let sql = `select ${colum} from user where id=${id}`
    sqlQuery(sql).then(resolve => {
      if (resolve === false) {
        res.status(500).send('密码错误')
      } else {
        let data = {
          text: '已登录',
          data: resolve
        }
        res.send(data)
      }
    })
  }
}

exports.isSignin = isSignin
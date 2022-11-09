const sqlQuery=require('../sqlQuery').sqlQuery
const readImgDir=require('../fuzuhansu/readImgDir').readImgDir
const isFolder=require('../fuzuhansu/isFolder').isFolder

const p='F:/我的漫画/'
const absPath=p+'漫画/'

async function carlistFun(req,res){
  let id=req.query.id
  let i=req.query.i
  console.log(id,i)
  if(id==undefined||i==undefined){
    res.status(400).send('参数错误,缺少请求参数')
    return 0
  }
  let sql=`call cartoon(${id},'$[${i}]')`
  let data=await sqlQuery(sql)
  console.log(data)
  if(data==false||data[0].length==0)  {
    res.status(500).send('参数错误')
    return 0
  }
  data[0]=data[0][0]
  data[0].kk=data[0].kk.slice(1,-1)
  let path=absPath+data[0].id+'__'+data[0].name+'漫画\\'+data[0].kk
  let imgList=await readImgDir(path)
  imgList=imgList.filter(isFolder).sort((val1,val2)=>val1.split('.')[0]-val2.split('.')[0])
  imgList=imgList.map(val=>'/img/漫画/'+data[0].id+'__'+data[0].name+'漫画/'+data[0].kk+'/'+val)
  let allData={list:imgList,quantity:imgList.length}
  res.send(allData)
}

exports.carlistFun=carlistFun
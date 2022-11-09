const fs=require('fs')

async function readImgDir(path){
  return new Promise(res=>{
    fs.readdir(path,(err,list)=>{
      if(err){
        console.log(err)
        res(false)
      }else{
        res(list)
      }
    })
  })
}

exports.readImgDir=readImgDir
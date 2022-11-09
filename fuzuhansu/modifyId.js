const key='479657012380'

function modifyId(text,t){  //t为布尔值,true为加密,false为解密
  let k=[]
  if(t){
    for(let i in text){
      k[i]=(Number(text[i])+Number(key[i]))%10
    }
  }else{
    for(let i in text){
      k[i]=text[i]>=key[i]?text[i]-key[i]:text[i]-key[i]+10
    }
  }
  return k.join('')
}

exports.modifyId=modifyId
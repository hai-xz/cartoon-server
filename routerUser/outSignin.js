
function outSignin(req,res){
  res.cookie('id','1111',{maxAge: 0, httpOnly: true})
  res.send('')
}

exports.outSignin=outSignin
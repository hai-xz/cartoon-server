const reg=/(.jpg)/

function isFolder(txt){
  return reg.test(txt)
}

exports.isFolder=isFolder
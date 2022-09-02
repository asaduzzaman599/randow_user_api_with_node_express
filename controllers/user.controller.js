const fs = require("fs");
const { mkdir } = require("fs/promises");

module.exports.getAllUser =async(req,res)=>{
    const data = fs.readFileSync(mkdir+'./../files/user.file.json')
    const users = JSON.parse(data)
    res.send({"data":users,count:users.length})
}
module.exports.getRandomUser =async(req,res)=>{
    res.send({"name":"hello random"})
}
const userDataFile = require("../utils/fileConnect")


module.exports.getAllUser =async(req,res)=>{
    const users = await userDataFile.getUsersData()
    res.send({"data":users,count:users.length})
}
module.exports.getRandomUser =async(req,res)=>{
    const users = await userDataFile.getUsersData()
    const length =users.length
    const user = users[Math.floor(Math.random()*length)]
    
    res.send({"udataser":user})
}
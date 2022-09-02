const userDataFile = require("../utils/fileConnect")


module.exports.getAllUser =async(req,res)=>{
    console.log('all')
    const users = await userDataFile.getUsersData()
    res.send({"data":users,count:users.length})
}
 module.exports.getRandomUser =async(req,res)=>{
    const users = await userDataFile.getUsersData()
    const length =users.length
    const index = Math.floor(Math.random()*length)
    console.log(index)
    const user = users[index]
    res.send({"udataser":user})
}

module.exports.addUser =async(req,res)=>{
    const user = req.body
    const status = await userDataFile.addUserData(user)

    res.send(
    status
    )
}



module.exports.updateUser = async(req,res) =>{
    const {_id} = req.body
    
    const users = await userDataFile.getUsersData()

    const userIndex = users.findIndex(user=>user._id.toString() === _id.toString())
    const user = {...users[userIndex],...req.body}
    users[userIndex] = user
    const status = await userDataFile.addUsersData(users)
    res.send(
        status
    )
} 


module.exports.bulkUpdateUsers = async(req,res) =>{
    const updatedUsers = req.body
    
    const users = await userDataFile.getUsersData()

    updatedUsers.forEach(async updatedUser=>{

    const userIndex = users.findIndex(user=>user._id.toString() === updatedUser._id.toString())
    const user = {...users[userIndex],...updatedUser}
    users[userIndex] = user
    })

    const status = await userDataFile.addUsersData(users)
    res.send(
        status
    )
}

module.exports.deleteUser = async(req,res) =>{
    const {userId} = req.query
    console.log(userId)
    const status = await userDataFile.deleteUserData(userId)

    res.send(
    status
    )
} 
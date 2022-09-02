const userDataFile = require("../utils/fileConnect")


module.exports.getAllUser =async(req,res)=>{
    const limit = req.query.limit
    
    const users = await userDataFile.getUsersData()
    if(!isNaN(limit)){
        
        return res.send({"data":users.slice(0,limit),count:users.length})
        
    }
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
    
    if(user.gender && user.name  && user.contact  && user.address  && user.photoUrl ){
            const status = await userDataFile.addUserData(user)
            res.send(
            status
            )
        }else{
            res.send({message:"Please provide all valid information", field:"name, gender, contactm address amd photoURL"})
        }
}



module.exports.updateUser = async(req,res) =>{
    const {_id} = req.body
    if(!_id){
        return res.send({message:"Invalid ID!!"})
    }
    
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
    if(!updatedUsers.length>0){
        return res.send({message:"No data. Please insert data first."})
    }
    
    const users = await userDataFile.getUsersData()

    updatedUsers.forEach(async (updatedUser)=>{
        if(!updatedUser.id){
            return res.send({message:'Invalid ID' , data: updatedUser})
        }
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
    const {userId} = req.query || ''
    if(!userId)return res.send({ message:'Invalid ID' })
    const status = await userDataFile.deleteUserData(userId)

    res.send(
    status
    )
} 
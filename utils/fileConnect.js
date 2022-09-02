const fs = require("fs");
const { mkdir } = require("fs/promises");



const getUsersData = () =>{
    const data = fs.readFileSync(mkdir+'./../files/user.file.json')
    const users = JSON.parse(data)
    return users

} 

const addUserData = async (user)=>{
    try{
        const users = await getUsersData()
         users.push(user)
       fs.writeFileSync(mkdir+'./../files/user.file.json', JSON.stringify(users));
        return {success : true}
        }catch(err){
        return {success : false}

       }    
}

const addUsersData = async (data)=>{
    try{
       fs.writeFileSync(mkdir+'./../files/user.file.json', JSON.stringify(data));
        return {success : true}
        }catch(err){
        return {success : false}

       }    
}


const deleteUserData = async (userId)=>{
    try{
     const users = await getUsersData()
     console.log(userId)
     const reamainingUsers = users.filter(user=>user._id.toString() !== userId.toString())
     console.log(reamainingUsers)
    fs.writeFileSync(mkdir+'./../files/user.file.json', JSON.stringify(reamainingUsers));
     return {success : true}
    }catch(err){
     return {success : false}
    }
}
 

module.exports = {getUsersData, addUserData, addUsersData , deleteUserData }


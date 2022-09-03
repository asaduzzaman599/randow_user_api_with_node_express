const fs = require("fs");
const { mkdir } = require("fs/promises");



const getUsersData = () =>{
    const data = fs.readFileSync(__dirname+'./../files/user.file.json')
    const users = JSON.parse(data)
    return users

} 

const addUserData = async (user)=>{
    try{
        const users = await getUsersData()
        const _id = users.length+1
         users.push({...user,_id})
       fs.writeFileSync(__dirname+'./../files/user.file.json', JSON.stringify(users));
        return {success : true , data: {...user,_id}}
        }catch(err){
        return {success : false}

       }    
}

const addUsersData = async (data)=>{
    try{
       fs.writeFileSync(__dirname+'./../files/user.file.json', JSON.stringify(data));
        return {success : true}
        }catch(err){
        return {success : false}
       }    
}


const deleteUserData = async (userId)=>{
    try{
     const users = await getUsersData()
     const remainingUsers = users.filter(user=>user._id.toString() !== userId.toString())
     if(users.length === remainingUsers.length)return {message : "No Data found for delete"}
     
    fs.writeFileSync(__dirname+'./../files/user.file.json', JSON.stringify(remainingUsers));
     return {success : true}
    }catch(err){
     return {success : false}
    }
}
 

module.exports = {getUsersData, addUserData, addUsersData , deleteUserData }


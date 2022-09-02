const fs = require("fs");
const { mkdir } = require("fs/promises");
module.exports.getUsersData = () =>{
    const data = fs.readFileSync(mkdir+'./../files/user.file.json')
    const users = JSON.parse(data)
    return users

} 
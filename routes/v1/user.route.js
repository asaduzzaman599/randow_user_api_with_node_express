const express = require('express');
const usersControllers = require('../../controllers/user.controller.js');

const router = express.Router()



router
/**
 * @api
 * 
 */
 .get('/',(req,res)=>{
    res.send({server:"Running"})
 })
 .get('/all',usersControllers.getAllUser)

.get('/random',usersControllers.getRandomUser)


.post('/save',usersControllers.addUser)



.patch('/update',usersControllers.updateUser)



.patch('/bulk-update',usersControllers.bulkUpdateUsers)


.delete('/delete',usersControllers.deleteUser)
 

module.exports = router
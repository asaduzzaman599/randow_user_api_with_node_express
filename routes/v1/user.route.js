const express = require('express');
const usersControllers = require('../../controllers/user.controller');

const router = express.Router()



router
/**
 * @api
 * 
 */
 .get('/all',usersControllers.getAllUser)

.get('/random',usersControllers.getRandomUser)


.post('/save',usersControllers.addUser)



.patch('/update',usersControllers.updateUser)



.patch('/bulk-update',usersControllers.deleteUser)


.delete('/delete',usersControllers.deleteUser)
 

module.exports = router
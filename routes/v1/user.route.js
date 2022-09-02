const express = require('express');
const usersControllers = require('../../controllers/user.controller');

const router = express.Router()



router
/**
 * @api
 * 
 */
.get('/random',usersControllers.getRandomUser)
/**
 * @api
 * 
 */
.get('/all',usersControllers.getAllUser)


/**
 * @api
 * 
 */
.post('/save',usersControllers.getAllUser)


/**
 * @api
 * 
 */
.patch('/update',usersControllers.getAllUser)


/**
 * @api
 * 
 */
.get('/bulk-update',usersControllers.getAllUser)


/**
 * @api
 * 
 */
.delete('/bulk-delete',usersControllers.getAllUser)


module.exports = router
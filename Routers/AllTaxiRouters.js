const {
    getAllCustomers,
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    getAllDrivers,
    getDriver,
    addDriver,
    updateDriver,
    deleteDriver,
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    getViewDriver
} = require('../Controllers/Controllers.js')
const { Router } = require('express')
const router = Router()

// CRUD
// User

router.get('/User', getAllUsers)
router.get('/User/:tg_id', getUser)
router.post('/User/add', addUser)
router.put('/User/:tg_id', updateUser)
router.delete('/User/:tg_id', deleteUser)

// Driver

router.get('/Driver', getAllDrivers)
router.get('/Driver/:tg_id', getDriver)
router.post('/Driver/add', addDriver)
router.put('/Driver/:tg_id', updateDriver)
router.delete('/Driver/:tg_id', deleteDriver)

//  ViewDriver
router.get('/viewDriver/:viewDriver', getViewDriver)

//  Customer

router.get('/', getAllCustomers)
router.get('/:tg_id', getCustomer)
router.post('/add', addCustomer)
router.put('/:tg_id', updateCustomer)
router.delete('/:tg_id', deleteCustomer)


module.exports = router
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
    deleteUser
} = require('../Controllers/Controllers.js')
const { Router } = require('express')
const router = Router()

// CRUD
// User

router.get('/User', getAllUsers)
router.get('/User/:id', getUser)
router.post('/User/add', addUser)
router.put('/User/:id', updateUser)
router.delete('/User/:id', deleteUser)

// Driver

router.get('/Driver', getAllDrivers)
router.get('/Driver/:id', getDriver)
router.post('/Driver/add', addDriver)
router.put('/Driver/:id', updateDriver)
router.delete('/Driver/:id', deleteDriver)

//  Customer

router.get('/', getAllCustomers)
router.get('/:id', getCustomer)
router.post('/add', addCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)


module.exports = router
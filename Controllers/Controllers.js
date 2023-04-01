const Customer = require("../Model/Models")
const Driver = require("../Model/DrModel")
const Users = require('../Model/AllUsers')


// Method: Get
// Desc: Get All Travels Book

const getAllDrivers = async (req, res) => {
    try {
        const Drivers = await Driver.find()

        res.status(200).json({
            message: "success",
            Drivers: Drivers.reverse()
        })
    } catch (error) {
        console.log(error, "getalldr");
        res.send(error)
    }
}

// Method: Get One Travel
// Desc: Get One Travel Book

const getDriver = async (req, res) => {
    try {
        const DriverGet = await Driver.find({ tg_id: req.params.tg_id })

        if (!DriverGet) {
            return res.status(404).json({
                message: "Not Found"
            })
        }

        return res.status(200).json({
            message: 'succes',
            Driver: DriverGet
        })
    } catch (error) {
        console.log(error, "getdr");
        res.send(error)
    }
}


// Method: Add One Travel
// Desc: Add New Travel Book

const addDriver = async (req, res) => {
    try {
        const {
            tg_id,
            username,
            firstname,
            lastname,
            driverMashina,
            driverQayerTaxi,
            driverQayerTumanTaxi,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        } = req.body

        const newDriver = await Driver.create({
            tg_id,
            username,
            firstname,
            lastname,
            driverMashina,
            driverQayerTaxi,
            driverQayerTumanTaxi,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        })

        res.status(201).json({
            message: "New User Added",
            newDriver: newDriver
        })
    } catch (error) {
        console.log(error, "getadddr");
        res.send(error)
    }
}


// Method: PUT
// Desc: Edit Travel Book

const updateDriver = async (req, res) => {
    try {
        const {
            tg_id,
            username,
            firstname,
            lastname,
            driverMashina,
            driverQayerTaxi,
            driverQayerTumanTaxi,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        } = req.body

        const updateDriver = await Driver.findOneAndUpdate({ tg_id: req.params.tg_id }, {
            tg_id,
            username,
            firstname,
            lastname,
            driverMashina,
            driverQayerTaxi,
            driverQayerTumanTaxi,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        })

        res.status(201).json({
            message: "UPDATED",
            updateDriver: updateDriver
        })
    } catch (error) {
        console.log(error, "getup");
        res.send(error)
    }
}


// Method: DELETE
// Desc: Delete Travel Book

const deleteDriver = async (req, res) => {
    try {

        const deleteTDriver = await Driver.findOneAndRemove({ tg_id: req.params.tg_id })

        res.status(201).json({
            message: "DELETED",
        })
    } catch (error) {
        console.log(error, "deldr");
        res.send(error)
    }
}



// Customer

const getAllCustomers = async (req, res) => {
    try {
        const Customers = await Customer.find()

        res.status(200).json({
            message: "success",
            Customers: Customers.reverse()
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

// Method: Get One Travel
// Desc: Get One Travel Book

const getCustomer = async (req, res) => {
    console.log(req.params.tg_id);

    try {
        const CustomerGet = await Customer.find({ tg_id: req.params.tg_id })

        if (!CustomerGet) {
            return res.status(404).json({
                message: "Not Found"
            })
        }

        return res.status(200).json({
            message: 'succes',
            Customer: CustomerGet
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


// Method: Add One Travel
// Desc: Add New Travel Book

const addCustomer = async (req, res) => {
    try {
        const {
            tg_id,
            username,
            firstname,
            lastname,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        } = req.body

        const newCustomer = await Customer.create({
            tg_id,
            username,
            firstname,
            lastname,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        })

        res.status(201).json({
            message: "New User Added",
            newCustomer: newCustomer
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


// Method: PUT
// Desc: Edit Travel Book

const updateCustomer = async (req, res) => {
    try {
        const {
            tg_id,
            username,
            firstname,
            lastname,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        } = req.body

        const updateCustomer = await Customer.findOneAndUpdate({ tg_id: req.params.tg_id }, {
            tg_id,
            username,
            firstname,
            lastname,
            kishiSoni,
            manzil,
            manzilTuman,
            name,
            nameCustomer,
            phone,
            yolNarxi
        })

        res.status(201).json({
            message: "UPDATED",
            updateCustomer: updateCustomer
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


// Method: DELETE
// Desc: Delete Travel Book

const deleteCustomer = async (req, res) => {
    try {

        const deleteTCustomer = await Customer.findOneAndRemove({ tg_id: req.params.tg_id })

        res.status(201).json({
            message: "DELETED",
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


// Users

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.find()

        res.status(200).json({
            message: "success",
            Users: allUsers.reverse()
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

// Method: Get One Travel
// Desc: Get One Travel Book

const getUser = async (req, res) => {
    try {
        const UsersGet = await Users.find({ tg_id: req.params.tg_id })

        if (!UsersGet) {
            return res.status(404).json({
                message: "Not Found"
            })
        }

        return res.status(200).json({
            message: 'succes',
            User: UsersGet
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


// Method: Add One Travel
// Desc: Add New Travel Book

const addUser = async (req, res) => {
    try {
        const {
            tg_id,
            username,
            firstname,
            lastname
        } = req.body

        const newUser = await Users.create({
            tg_id,
            username,
            firstname,
            lastname
        })

        res.status(201).json({
            message: "New User Added",
            newUser: newUser
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


// Method: PUT
// Desc: Edit Travel Book

const updateUser = async (req, res) => {
    try {
        const {
            tg_id,
            username,
            firstname,
            lastname
        } = req.body

        const updateUser = await Users.findOneAndUpdate({ tg_id: req.params.tg_id }, {
            tg_id,
            username,
            firstname,
            lastname
        })

        res.status(201).json({
            message: "UPDATED",
            updateUser: updateUser
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


// Method: DELETE
// Desc: Delete Travel Book

const deleteUser = async (req, res) => {
    try {

        const deleteTUser = await Users.findOneAndRemove({ tg_id: req.params.tg_id })

        res.status(201).json({
            message: "DELETED",
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}


const getViewDriver = async (req, res) => {
    try {
        const UsersGet = await Users.find({ viewDriver: req.params.viewDriver })

        if (!UsersGet) {
            return res.status(404).json({
                message: "Not Found"
            })
        }

        return res.status(200).json({
            message: 'succes',
            User: UsersGet
        })
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
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
}
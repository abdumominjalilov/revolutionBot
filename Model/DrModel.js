const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')



const DriverModel = new Schema({
    
    tg_id: {
        type: String
    },
    username: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    driverMashina: {
        type: String
    },
    driverQayerTaxi: {
        type: String
    },
    kishiSoni: {
        type: String
    },
    manzil: {
        type: String
    },
    manzilTuman: {
        type: String
    },
    name: {
        type: String
    },
    nameCustomer: {
        type: String
    },
    phone: {
        type: String
    },
    yolNarxi: {
        type: String
    }
});

module.exports = model("Driver", DriverModel);

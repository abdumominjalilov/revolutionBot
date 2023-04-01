const { Schema, model } = require('mongoose')



const CustomerModel = new Schema({

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




module.exports = model("Customer", CustomerModel);

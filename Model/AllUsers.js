const { Schema, model } = require('mongoose')



const usersModel = new Schema({
    
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
    }
});

module.exports = model("Users", usersModel);

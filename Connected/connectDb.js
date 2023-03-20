const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
            ,
            useUnifiedTopology: true,
            family: 4,
        })

        console.log(`MongoDB "${conn.connection.host}" ga Ulandi`);
    } catch (error) {
        console.log(error, "hatolik mongoga ulanishda");
    }
};

module.exports = connectDb;
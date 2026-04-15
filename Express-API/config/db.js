const mongoose = require("mongoose");
// const dbgr = require("debug")("development:server");
// const config = require("config");

function connectToDB() {
    mongoose.
    connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongodb Connected");
    })
    .catch(
        (err) => console.log(err));
}


// function connectToDB() {
//     mongoose.connect(`${config.get('MongoDB_URL')}/ecomerce`)
//     .then(() => {
//         dbgr("Mongodb Connected");
//     })
//     .catch((err) => dbgr(err));
// }

module.exports = connectToDB;
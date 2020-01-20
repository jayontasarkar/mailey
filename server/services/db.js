const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.info("Connected to MongoDB..."));
};
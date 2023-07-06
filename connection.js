const mongoose  = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crud_test").then(res => {
    console.log("DB is connected");
}).catch(err => {
    console.log(`something went wrong`,err);
})
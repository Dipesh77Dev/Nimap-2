module.exports =(mongoose) => {
    const User = mongoose.model(
        "user", mongoose.Schema({
            uid : Number,
            name : String,
            // username: String,
            email : String,
            password : String,
            phoneNo : Number,
            address : String
        })
    )
    return User
}

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var userSchema = new Schema({
//     uid : Number,
//     name : String,
//     username: String,
//     email : String,
//     password : String,
//     phoneNo : Number,
//     address : String
// });

// module.exports =  mongoose.model('User', userSchema)
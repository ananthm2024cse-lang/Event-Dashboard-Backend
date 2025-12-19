const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true,"Name is required"],
        trim :true,
        minLength : [5,"Minimum 5 Characters is required"]
    },
    age: {
        type : Number,
        required:[true,"Age is required"],
    },
    email: {
        type : String,
        required:[true,"Email is required"],
    },
    clgName : {
        type : String,
        required:[true,"ClgName is required"],
    }
});


const Users = mongoose.model("User",userSchema);

module.exports = Users;

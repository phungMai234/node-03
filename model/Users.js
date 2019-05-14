const mongoose = require("mongoose");
const db = require("../database");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        allowNull: false
    },
    password: {
        type: String,
        require: true,
        allowNull: false,
    },
    created:{
        type: Date,
        default: Date.now()
    }
}, {versionKey: false});


UserSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject();
    delete userObject.password;
    return userObject
}
const Users = db.model('Users', UserSchema);

module.exports = Users;
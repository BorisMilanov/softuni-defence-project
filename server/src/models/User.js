const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, require: true,unique: true},
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, minlength: 8},
    passwordConfirm: {type:String,require: true, minlength:8}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
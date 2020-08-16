'use strict';
var mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: false,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    user_image:{
        type: String,
        default:"profile.png"
    }
}, {
    timestamps: true
});

var userModel = mongoose.model('User', userSchema);
// module.exports = userModel;


exports.create = form_data => userModel.create(form_data);

exports.findByUserEmail = form_data => userModel.findOne({email:form_data.email}).exec();








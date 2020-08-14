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
    
}, {
    timestamps: true
});

var userModel = mongoose.model('User', userSchema);
// module.exports = userModel;



exports.create = form_data => userModel.create(form_data);

exports.findByName = form_data => userModel.findOne({name:form_data.name}).exec();








'use strict';
var mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});

var postModel = mongoose.model('post', postSchema);
exports.create = form_data => postModel.create(form_data);
exports.findUserPost = form_data => postModel.findOne({ _id: form_data.postId, userId: form_data.userId }).exec();
exports.updateUserPost = form_data => postModel.findOneAndUpdate({ _id: form_data.postId, userId: form_data.userId }, { description: form_data.description }, { new: true }).exec();
exports.getAllPost = () => postModel.find().exec();








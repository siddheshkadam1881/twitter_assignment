"use strict";
module.exports = class userFormatter {
    createPost(req) {
        let form_data = {
            description: req.body.description,
            userId: req.body.userId
        };
        return form_data;
    }

    updatePost(req) {
        let form_data = {
            description: req.body.description,
            userId: req.body.userId,
            postId: req.body.postId,
        };
        return form_data;
    }
    postlist(req) {
        let form_data = {
            userId: req.body.userId
        };
        return form_data;
    }


}
"use strict";
module.exports = class userFormatter {
    addUser(req) {
        let form_data = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            age: req.body.age,
            user_image: req.files == undefined ? null : req.files.user_image,

        };
        return form_data;
    }

    login(req) {
        let form_data = {
            password: req.body.password,
            email: req.body.email
        };
        return form_data;
    }


    
}
let responseMessages = require("../response/user.response");
const UserModel = require("../model/user_model");
const path = require("path");
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = class userService {
    async addUser(form_data) {
        return UserModel.findByName(form_data)
            .then(async (users) => {
                if (users) {
                    return responseMessages.success("existing_user", users);
                }
                await bcrypt.hash(form_data.password, saltRounds).then(function (hashPassword) {
                    if (!hashPassword) {
                        return responseMessages.failed("password_create_issue");
                    }
                    form_data.password = hashPassword;
                });
                return UserModel.create(form_data)
                    .then(async (user) => {
                        if (user) {
                            return responseMessages.success("user_create_success");
                        }
                        else {
                            return responseMessages.failed("user_not_create");
                        }
                    })
                    .catch((err) => {
                        return responseMessages.failed("something_went_wrong");
                    })
            })
            .catch((err) => {
                return responseMessages.failed("something_went_wrong");
            })
    }
}

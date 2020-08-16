let responseMessages = require("../response/user.response");
const UserModel = require("../model/user_model");
const path = require("path");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var ip = require('ip');

module.exports = class userService {
    async addUser(form_data) {
        var actual_path = process.cwd();
        if (form_data.user_image) {
            if (form_data.user_image.mimetype == "image/png" || form_data.user_image.mimetype == "image/jpg" || form_data.user_image.mimetype == "image/jpeg") {
                if (!form_data.user_image.size) {
                    return responseMessages.failed("form_field_required", "", form_data.lang_code);
                } else {
                    form_data.user_image.mv(actual_path + `/uploads/` + form_data.user_image.name)
                    let user_image = ip.address() + `:3000/uploads/` + form_data.user_image.name;
                    form_data.user_image = user_image;
                }
            }
            else {
                return responseMessages.failed("image_validation", "", form_data.lang_code);
            }
        }
        else {
            let user_image = ip.address() + `:3000/uploads/profile.png`;
            form_data.user_image = user_image;
        }
        return UserModel.findByUserEmail(form_data)
            .then(async (users) => {
                if (users) {
                    return responseMessages.failed("existing_user");
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
                        return responseMessages.failed("issue_creating_user");
                    })
            })
            .catch((err) => {
                return responseMessages.failed("user_fetch_error");
            })
    }

    async login(form_data) {
        return UserModel.findByUserEmail(form_data)
            .then(async (users) => {
                if (!users) {
                    return responseMessages.failed("invalid_email");
                }
                let match = await bcrypt.compare(form_data.password, users.password);
                users['password'] = undefined;
                users['createdAt'] = undefined;
                users['updatedAt'] = undefined;
                users['__v'] = undefined;
                if (!match) {
                    return responseMessages.failed("invalid_password");
                }
                return responseMessages.success("login_user_successfully", users);
            })
            .catch((err) => {
                return responseMessages.failed("user_fetch_error");
            })
    }
}

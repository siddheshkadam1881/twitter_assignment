let response = {
    validation_error: {
        EN: {
            status: false,
            status_code: 'CC422',
            message: "Incorrect data"
        },
        RS: {
            status: false,
            status_code: 'CC422',
            message: "Нетачни подаци"
        }
    },
    form_field_required: {
        EN: {
            message: "Form fields required",
            status_code: "CC400",
        },
        RS: {
            message: "Обавезна поља обрасца су обавезна",
            status_code: "CC400"
        }
    },
    user_create_success: {
        EN: {
            message: "user create success",
            status_code: "CC200"
        }
    },
    existing_user: {
        EN: {
            message: "Existing User",
            status_code: "CC200"
        }
    },
    password_create_issue: {
        EN: {
            message: "Issue While Creating Password",
            status_code: "CC400"
        }
    },
    issue_creating_user: {
        EN: {
            message: "issue while creating user",
            status_code: "CC500"
        }
    },
    user_fetch_error: {
        EN: {
            message: "User fetch error",
            status_code: "CC500"
        }
    },
    invalid_password: {
        EN: {
            message: "Password Not Match",
            status_code: "CC400"
        }
    },
    invalid_email: {
        EN: {
            message: "Email Not Match",
            status_code: "CC400"
        }
    },
    image_validation: {
        EN: {
            message: "Only .png, .jpg and .jpeg format allowed!",
            status_code: "CC400"
        }
    },
    login_user_successfully:{
        EN: {
            message: "Login user successfully",
            status_code: "CC400"
        }
    }
}
module.exports = response;
module.exports.success = function (key, values, lang) {
    console.log(lang)
    if (lang == undefined || lang == null) {
        lang = "EN"
    }
    let returnResponse = response[key] == undefined ? {} : response[key][lang];
    returnResponse.status = true;
    values ? returnResponse.values = values : "";
    return returnResponse;
}
module.exports.failed = function (key, errors, lang) {
    if (lang == undefined || lang == null) {
        lang = "EN"
    }
    let returnResponse = response[key] == undefined ? {} : response[key][lang];
    returnResponse.status = false;
    errors && errors != key ? returnResponse.error = errors : "";
    return returnResponse;
}
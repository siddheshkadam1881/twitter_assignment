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
    post_create_success: {
        EN: {
            message: "post create success",
            status_code: "CC200"
        }
    },
    post_create_issue: {
        EN: {
            message: "Issue While Creating post",
            status_code: "CC400"
        }
    },
    issue_creating_post: {
        EN: {
            message: "issue while creating user",
            status_code: "CC500"
        }
    },
    post_not_found: {
        EN: {
            message: "Post not mapped with User",
            status_code: "CC400"
        }
    },
    update_note: {
        EN: {
            message: "Update note successfully",
            status_code: "CC200"
        }
    },
    update_note_fail: {
        EN: {
            message: "update note fail",
            status_code: "CC400"
        }
    },
    note_fetch_error: {
        EN: {
            message: "issue while fetching note",
            status_code: "CC500"
        }
    },
    get_notes: {
        EN: {
            message: "Get all Notes Successfully",
            status_code: "CC200"
        }
    },
    note_not_found:{
        EN: {
            message: "Notes not found",
            status_code: "CC200"
        }
    }
}
module.exports = response;
module.exports.success = function (key, values, lang) {
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
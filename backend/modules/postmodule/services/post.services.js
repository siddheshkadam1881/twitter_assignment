let responseMessages = require("../response/post.response");
const PostModel = require("../model/post_model");
module.exports = class userService {
    async createPost(form_data) {
        return PostModel.create(form_data)
            .then(async (user) => {
                if (user) {
                    return responseMessages.success("post_create_success");
                }
                else {
                    return responseMessages.failed("post_create_issue");
                }
            })
            .catch((err) => {
                return responseMessages.failed("issue_creating_post", err);
            })
    }

    async updatePost(form_data) {
        return PostModel.findUserPost(form_data)
            .then(async (noteObj) => {
                if (!noteObj) {
                    return responseMessages.failed("post_not_found");
                }
                let updateObj = await PostModel.updateUserPost(form_data);
                if (updateObj) {
                    return responseMessages.success("update_note");
                }
                return responseMessages.success("update_note_fail");
            })
            .catch((err) => {
                return responseMessages.failed("note_fetch_error");
            })
    }

    async postlist() {
        return PostModel.getAllPost()
            .then(async (noteObjs) => {
                if (noteObjs.length > 0) {
                    return responseMessages.success("get_notes", noteObjs);
                }
                return responseMessages.success("note_not_found");
            })
            .catch((err) => {
                return responseMessages.failed("note_fetch_error");
            })
    }
}

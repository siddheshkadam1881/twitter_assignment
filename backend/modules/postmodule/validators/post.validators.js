module.exports = class postValidator {
    createPost() {
        let form_data = {
            description: "required",
            userId: "required",
        };
        return form_data;
    }

    updatePost() {
        let returnData = {
            description: "required",
            userId: "required",
            postId: "required"
        };
        return returnData;
    }

    postlist() {
        let returnData = {
            userId: "required"
        };
        return returnData;
    }
}
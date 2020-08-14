module.exports = class OfferValidator {
    addUser() {
        let returnData = {
            name: "required",
            password: "required",
            // max_limit: "required|numeric|max:99|digits_between:1,2"
        };
        return returnData;
    }
}
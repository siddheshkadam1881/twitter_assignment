module.exports = class OfferValidator {
    addUser() {
        let returnData = {
            name: "required",
            password: "required",
            email: "required|email",
            age:"required|numeric"
        };
        return returnData;
    }

    login(){
        let returnData = {
            password: "required",
            email: "required|email",
        };
        return returnData;
    }
}
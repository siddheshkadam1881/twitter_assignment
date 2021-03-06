"use strict";
let Validator = require('validatorjs');
let UserService = require("../services/offer.services");
let userService = new UserService();
let userFormatter = new (require('../formatters/user.formatter'))();
let userValidator = new (require("../validators/user.validators"));
let responseMessages = require("../response/user.response");
module.exports = class UserController {
    constructor() { }
    /**
     * create User
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async addUser(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.addUser(req);
        // Getting voucher Validator
        let rules = userValidator.addUser();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            returnResponse = await userService.addUser(form_data);
        } else {
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
     * create User
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async login(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.login(req);
        // Getting voucher Validator
        let rules = userValidator.login();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            returnResponse = await userService.login(form_data);
        } else {
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }


}

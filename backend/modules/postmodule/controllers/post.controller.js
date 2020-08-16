"use strict";
let Validator = require('validatorjs');
let PostService = require("../services/post.services");
let postService = new PostService();
let postFormatter = new (require('../formatters/post.formatter'))();
let postValidator = new (require("../validators/post.validators"));
let responseMessages = require("../response/post.response");
module.exports = class PostController {
    constructor() { }
    /**
     * create User
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async createPost(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = postFormatter.createPost(req);
        // Getting voucher Validator
        let rules = postValidator.createPost();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            returnResponse = await postService.createPost(form_data);
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
     * update Post
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async updatePost(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = postFormatter.updatePost(req);
        // Getting voucher Validator
        let rules = postValidator.updatePost();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            returnResponse = await postService.updatePost(form_data);
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
     *  Post list
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async postlist(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = postFormatter.postlist(req);
        // Getting voucher Validator
        let rules = postValidator.postlist();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            returnResponse = await postService.postlist(form_data);
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

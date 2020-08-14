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
     * Get offer List
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async offerList(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.offerList(req);
        // Getting voucher Validator
        let rules = userValidator.offerList();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.offerList(form_data);
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
      * Get Offers Category
      *
      * @param {*} req
      * @param {*} res
      * @returns {Promise<void>}
      */
    async getoffersCategory(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.getoffersCategory(req);
        // Getting voucher Validator
        let rules = userValidator.getoffersCategory();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.getoffersCategory(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
      * Get Offers Category
      *
      * @param {*} req
      * @param {*} res
      * @returns {Promise<void>}
      */
    async getSubcriptionlist(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.getSubcriptionlist(req);
        // Getting voucher Validator
        let rules = userValidator.getSubcriptionlist();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.getSubcriptionlist(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
      * Get Offers Category
      *
      * @param {*} req
      * @param {*} res
      * @returns {Promise<void>}
      */
    async getSubcriptionOffers(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.getSubcriptionOffers(req);
        // Getting voucher Validator
        let rules = userValidator.getSubcriptionOffers();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.getSubcriptionOffers(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
    * Offer Details
    *
    * @param {*} req
    * @param {*} res
    * @returns {Promise<void>}
    */
    async offerDetails(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.offerDetails(req);
        // Getting voucher Validator
        let rules = userValidator.offerDetails();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.offerDetails(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
    * offer Use Now
    *
    * @param {*} req
    * @param {*} res
    * @returns {Promise<void>}
    */
    async generateOfferCode(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.offerDetails(req);
        // Getting voucher Validator
        let rules = userValidator.generateOfferCode();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.generateOfferCode(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
     * add Remove Fav Offer
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async addRemoveFavOffer(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.addRemoveFavOffer(req);
        // Getting voucher Validator
        let rules = userValidator.addRemoveFavOffer();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.addRemoveFavOffer(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
        * buy Subscription
        *
        * @param {*} req
        * @param {*} res
        * @returns {Promise<void>}
        */
    async buySubscription(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.buySubscription(req);
        // Getting voucher Validator
        let rules = userValidator.buySubscription();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.buySubscription(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**
     *       
     * use Offer
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async redeemOffer(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.redeemOffer(req);
        // Getting voucher Validator
        let rules;
        rules = userValidator.redeemOffer();
        // if (req.body.offer_code) {
        //     rules = userValidator.redeemOffer();
        // }
        // else {
        //     rules = userValidator.redeemCustomerReward();
        // }
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.redeemOffer(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**      
     * fetch Rewards
     *
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async fetchRewards(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.fetchRewards(req);
        // Getting voucher Validator
        let rules = userValidator.fetchRewards();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.fetchRewards(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    async saveOfferList(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.saveOfferList(req);
        // Getting voucher Validator
        let rules = userValidator.saveOfferList();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.saveOfferList(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }


    /**
     *       
     * use Offer
     * @param {*} req
     * @param {*} res
     * @returns {Promise<void>}
     */
    async useOffer(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        var rules;
        // Format request data
        let form_data = userFormatter.useOffer(req);
        // Getting voucher Validator
        rules = userValidator.useOffer();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.useOffer(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    /**      
    * my Coupons
    *
    * @param {*} req
    * @param {*} res
    * @returns {Promise<void>}
    */
    async myCoupons(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.myCoupons(req);
        // Getting voucher Validator
        let rules = userValidator.myCoupons();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.myCoupons(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    async rewardDetail(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.rewardDetail(req);
        // Getting voucher Validator
        let rules = userValidator.rewardDetail();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.rewardDetail(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    async purchaseReward(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.purchaseReward(req);
        // Getting voucher Validator
        let rules = userValidator.purchaseReward();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.purchaseReward(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    async uploadfileforocr(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.uploadfileforocr(req);
        // Getting voucher Validator
        let rules = userValidator.uploadfileforocr();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.uploadFileForOcr(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }

    async uploadFile(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.uploadfileforocr(req);
        // Getting voucher Validator
        let rules = userValidator.uploadfileforocr();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            /**
             * Validation success
             */
            returnResponse = await userService.uploadFile(form_data);
        } else {
            /*
                //Validation fail
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        // return response to client request
        return res.json(returnResponse);
    }


    async getBrandlist(req, res) {
        // returnResponse variable use for returning data to client request
        let returnResponse = {}
        // Format request data
        let form_data = userFormatter.getBrandlist(req);
        // Getting voucher Validator
        let rules = userValidator.getBrandlist();
        // Check and store validation data
        let validation = new Validator(form_data, rules);
        // Check validation is passed or failed
        if (validation.passes() && !validation.fails()) {
            returnResponse = await userService.getBrandlist(form_data);
        } else {
            /*
            */
            // store return code and message in returnResponse variable
            returnResponse = responseMessages.validation_error[form_data.lang_code ? form_data.lang_code : 'EN'];
            // Getting errors of validation and store in returnResponse variable
            returnResponse.errors = validation.errors.errors;
        }
        return res.json(returnResponse);
    }
}

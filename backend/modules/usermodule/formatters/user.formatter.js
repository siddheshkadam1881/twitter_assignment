"use strict";
module.exports = class userFormatter {
    addUser(req) {
        let form_data = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        };
        return form_data;
    }

    offerList(req) {
        let form_data = {
            cms_customer_id: req.body.cms_customer_id,
            lang_code: req.body.lang_code,
            brand_code: req.body.brand_code,
            category_code: req.body.category_code,
            sub_category_code: req.body.sub_category_code,
            limit: req.body.limit ? parseInt(req.body.limit) : null,
            offset: req.body.offset ? parseInt(req.body.offset) : null,
            tier_code: req.body.tier_code == undefined ? "T1":req.body.tier_code,
            offer_type: req.body.offer_type
        };
        return form_data;
    }

    getoffersCategory(req) {
        let form_data = {
            lang_code: req.body.lang_code,
            tag_type: req.body.tag_type
        };
        // for (let [key, value] of Object.entries(req.body.offerFlag)) {
        //     form_data.offerFlag = key;
        // }
        return form_data;
    }

    getSubcriptionlist(req) {
        let form_data = {
            lang_code: req.body.lang_code,
            cms_customer_id: req.body.cms_customer_id,
            trending_offers: 1,
            tier_code: req.body.tier_code == undefined ? "T1":req.body.tier_code,
        };
        return form_data;
    }
    getSubcriptionOffers(req) {
        let form_data = {
            lang_code: req.body.lang_code,
            limit: parseInt(req.body.limit) ? parseInt(req.body.limit) : null,
            offset: parseInt(req.body.offset),
            code: req.body.code,
            category_code: req.body.category_code,
            sub_category_code: req.body.sub_category_code,
            cms_customer_id: req.body.cms_customer_id,
            tier_code: req.body.tier_code == undefined ? "T1":req.body.tier_code,

        };
        return form_data;
    }

    offerDetails(req) {
        let form_data = {
            offer_code: req.body.offer_code,
            lang_code: req.body.lang_code,
            cms_customer_id: req.body.cms_customer_id
        };
        return form_data;
    }

    addRemoveFavOffer(req) {
        let form_data = {
            offer_code: req.body.offer_code,
            cms_customer_id: req.body.cms_customer_id,
            lang_code: req.body.lang_code,
            is_fav: req.body.is_fav
        };
        return form_data;
    }

    buySubscription(req) {
        let form_data = {
            cms_customer_id: req.body.cms_customer_id == undefined ? null : req.body.cms_customer_id.toString(),
            lang_code: req.body.lang_code,
            payment_type: req.body.payment_type,
            point_rate: req.body.point_rate,
            amount: req.body.amount,
            sub_code: req.body.code,
            paid_by_cash: req.body.paid_by_cash == undefined ? 0 : req.body.paid_by_cash,
            paid_by_points: req.body.paid_by_points == undefined ? 0 : req.body.paid_by_points,
            email: req.body.email,
            phone: req.body.phone,
            membership_no: req.body.membership_no,
            name: req.body.first_name + " " + req.body.last_name 
        };
        return form_data;
    }

    redeemOffer(req) {
        let form_data = {
            offer_code: req.body.offer_code,
            cms_customer_id: req.body.cms_customer_id,
            lang_code: req.body.lang_code,
            brand_code: req.body.brand_code,
            redeem_type: req.body.redeem_type,
            reward_code: req.body.reward_code,
            voucher_code: req.body.voucher_code,
            email: req.body.email,
            phone: req.body.phone,
            membership_no: req.body.membership_no,
            name: req.body.first_name + " " + req.body.last_name 

        };
        return form_data;
    }

    useOffer(req) {
        let form_data = {
            offer_code: req.body.offer_code,
            cms_customer_id: req.body.cms_customer_id,
            lang_code: req.body.lang_code,
            redeem_type: req.body.redeem_type,
            reward_code: req.body.reward_code,
            voucher_code: req.body.voucher_code

        };
        return form_data;
    }

    fetchRewards(req) {
        let form_data = {
            cms_customer_id: req.body.cms_customer_id,
            lang_code: req.body.lang_code,
            start_point_limit: req.body.start_point_limit == undefined ? 0 : parseInt(req.body.start_point_limit),
            end_point_limit: req.body.end_point_limit == undefined ? 0 : parseInt(req.body.end_point_limit),
            category_code: req.body.category_code,
            sub_category_code:req.body.sub_category_code,
            tier_code: req.body.tier_code == undefined ? "T1":req.body.tier_code,
        };
        return form_data;
    }

    myCoupons(req) {
        let form_data = {
            cms_customer_id: req.body.cms_customer_id == undefined ? null : req.body.cms_customer_id.toString(),
            lang_code: req.body.lang_code,
            type: req.body.type,
            limit: parseInt(req.body.limit) == null ? 0 : parseInt(req.body.limit),
            offset: parseInt(req.body.limit) == null ? 0 : parseInt(req.body.offset)
        }
        return form_data;
    }

    saveOfferList(req) {
        let returnData = {
            cms_customer_id: req.body.cms_customer_id,
            lang_code: req.body.lang_code

        };
        return returnData;
    }

    rewardDetail(req) {
        let returnData = {
            cms_customer_id: req.body.cms_customer_id,
            reward_code: req.body.reward_code,
            lang_code: req.body.lang_code
        };
        return returnData;
    }

    purchaseReward(req) {
        let form_data = {
            cms_customer_id: req.body.cms_customer_id,
            lang_code: req.body.lang_code,
            payment_type: req.body.payment_type,
            point_rate: req.body.point_rate,
            amount: req.body.amount,
            reward_code: req.body.reward_code,
            paid_by_cash: req.body.paid_by_cash,
            paid_by_points: req.body.paid_by_points,
            email: req.body.email,
            phone: req.body.phone,
            membership_no: req.body.membership_no,
            name: req.body.first_name + " " + req.body.last_name 
        };
        return form_data;
    }

    uploadfileforocr(req) {
        let form_data = {
            cms_customer_id: req.body.cms_customer_id,
            receipt: req.files == undefined ? null : req.files.receipt,
            scope: "expenses",
            lang: "srp+srp_latn",
            lang_code: req.body.lang_code,
            tier_code: req.body.tier_code == undefined ? "T1":req.body.tier_code,
            email: req.body.email,
            phone: req.body.phone,
            membership_no: req.body.membership_no,
            name: req.body.first_name + " " + req.body.last_name 
        }
        return form_data;
    }

    getBrandlist(req) {
        let form_data = {
            lang_code: req.body.lang_code
        }
        return form_data;
    }
}
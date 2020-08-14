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
            status_code: "CC404"
        }
    },
    offers_not_found: {
        EN: {
            message: "Offers not found",
            status_code: "CC404"
        },
        RS: {
            message: "Понуда није пронађена",
            status_code: "CC404"
        }
    },
    offer_fetch_error: {
        EN: {
            message: "Offer fetch error",
            status_code: "CC500"
        },
        RS: {
            message: "cung cấp lỗi tìm nạp",
            status_code: "CC500"
        }
    },

    fetch_subscription_successfully: {
        EN: {
            message: "Subscription package found",
            status_code: "CC200"
        },
        RS: {
            message: "Успешно преузимање претплате",
            status_code: "CC200"
        }
    },
    subscriptions_not_found: {
        EN: {
            message: "Subscriptions not found",
            status_code: "CC404"
        },
        RS: {
            message: "Претплате нису пронађене",
            status_code: "CC404"
        }
    },
    subcription_fetch_error: {
        EN: {
            message: "Subsriptions fetch error",
            status_code: "CC500"
        },
        RS: {
            message: "грешка дохваћања претплата",
            status_code: "CC500"
        }
    },
    fetch_tag_successfully: {
        EN: {
            message: "Categories found",
            status_code: "CC200"
        },
        RS: {
            message: "Успешно дохваћање ознаке",
            status_code: "CC200"
        }
    },
    tag_not_found: {
        EN: {
            message: "No categories found",
            status_code: "CC404"
        },
        RS: {
            message: "Oзнака није пронађена",
            status_code: "CC404"
        }
    },
    fetch_tag_error: {
        EN: {
            message: "Fetch tag error",
            status_code: "CC500",
        },
        RS: {
            message: "грешка дохваћања ознаке",
            status_code: "CC500"
        }
    },
    something_went_wrong: {
        EN: {
            message: "Something went wrong. Please try again",
            status_code: "CC500",
        },
        RS: {
            message: "Нешто није у реду",
            status_code: "CC500"
        }
    },
    generate_code_successfully: {
        EN: {
            message: "Generate code successfully",
            status_code: "CC200",
        },
        RS: {
            message: "Генерише код успешно",
            status_code: "CC200"
        }
    },
    user_invalid_token: {
        EN: {
            message: "Invalid user token",
            status_code: "CC401"
        },
        RS: {
            message: "Неважећи токен корисника",
            status_code: "CC401"
        }
    },
    token_not_found: {
        EN: {
            message: "token not found",
            status_code: "CC404"
        },
        VI: {
            message: "không tìm thấy mã thông báo",
            status_code: "CC404"
        }
    },
    token_created_successfully: {
        EN: {
            message: "Token created successfully",
            status_code: "CUS_200",
        },
        RS: {
            message: "Токен је успешно креиран",
            status_code: "CUS_200"
        }
    },
    session_timeout: {
        EN: {
            message: "Session timeout",
            status_code: "CC404",
        },
        RS: {
            message: "Истек времена сесије",
            status_code: "CC404"
        }
    },
    invalid_user: {
        EN: {
            message: "Invalid user",
            status_code: "CC404"
        },
        RS: {
            message: "Неважећи корисник",
            status_code: "CC404"
        }
    },
    favourite_add_successful: {
        EN: {
            message: "Offer marked as favorite",
            status_code: "CC200"
        },
        RS: {
            message: "Понуда означена као омиљена",
            status_code: "CC200"
        }
    },
    favourite_remove_successful: {
        EN: {
            message: "Offer removed from favorite",
            status_code: "CC200"
        },
        RS: {
            message: "Понуда означена као омиљена",
            status_code: "CC200"
        }
    },
    favourite_add_fail: {
        EN: {
            message: "Offer favorite failed",
            status_code: "CC400"
        },
        RS: {
            message: "Омиљена понуда није успела",
            status_code: "CC400"
        }
    },
    favourite_offer_update_successful: {
        EN: {
            message: "favourite offer update successful",
            status_code: "CC200"
        },
        RS: {
            message: "ажурирање омиљене понуде успешно",
            status_code: "CC200"
        }
    },
    favourite_update_fail: {
        EN: {
            message: "favourite update fail",
            status_code: "CC400"
        },
        RS: {
            message: "омиљена исправка није успела",
            status_code: "CC400"
        }
    },
    buy_subcription_successfully: {
        EN: {
            message: "Subcription purchased successfully",
            status_code: "CC200"
        },
        RS: {
            message: "Претплата је успјешно купљена",
            status_code: "CC200"
        }
    },
    issue_in_lock_point: {
        EN: {
            message: "Issue in lock point",
            status_code: "CC400"
        },
        RS: {
            message: "Издање у тачки закључавања",
            status_code: "CC400"
        }
    },
    issue_in_burn_point: {
        EN: {
            message: "Issue in burn point",
            status_code: "CC400"
        },
        RS: {
            message: "Издавање у тачки сагоревања",
            status_code: "CC400"
        }
    },
    issue_checking_balance: {
        EN: {
            message: "Issue while checking point balance",
            status_code: "CC400"
        },
        RS: {
            message: "Издавање током провере стања тачке",
            status_code: "CC400"
        }
    },
    cust_less_balance: {
        EN: {
            message: "Sorry,you have less balance",
            status_code: "CC400"
        },
        RS: {
            message: "Извините, имате мање равнотеже",
            status_code: "CC400"
        }
    },
    order_create_fail: {
        EN: {
            message: "Order create fail",
            status_code: "CC400"
        },
        RS: {
            message: "Неуспешно креирање налога",
            status_code: "CC400"
        }
    },
    offer_use_successfully: {
        EN: {
            message: "Offer redeemed successfully",
            status_code: "CC200"
        },
        RS: {
            message: "Понуда је успешно искоришћена",
            status_code: "CC200"
        }
    },
    subscription_is_expired: {
        EN: {
            message: "Sorry, Your Offer Subscription is expired",
            status_code: "CC400"
        },
        RS: {
            message: "Извините, претплата ваших понуда је истекла",
            status_code: "CC400"
        }
    },
    ofr_max_limit_reach: {
        EN: {
            message: "Maximum use limit of offer reached",
            status_code: "CC400"
        },
        RS: {
            message: "Достигнуто максимално ограничење употребе понуде",
            status_code: "CC400"
        }
    },
    subscription_update_issue: {
        EN: {
            message: "Subscription update issue",
            status_code: "CC400"
        },
        RS: {
            message: "Питање ажурирања претплате",
            status_code: "CC400"
        }
    },
    rewards_fetch_successfully: {
        EN: {
            message: "Rewards found",
            status_code: "CC200"
        },
        RS: {
            message: "Награде успешно доносе",
            status_code: "CC200"
        }
    },
    rewards_not_found: {
        EN: {
            message: "Rewards not found",
            status_code: "CC404"
        },
        RS: {
            message: "Награде нису пронађене",
            status_code: "CC404"
        }
    },
    offer_proceed: {
        EN: {
            message: "Offer is valid. You may proceed now",
            status_code: "CC200"
        },
        RS: {
            message: "Понуда је валидна. Можете наставити сада",
            status_code: "CC200"
        }
    },
    buy_reward_successfully: {
        EN: {
            message: "Reward purchased successfully",
            status_code: "CC200"
        },
        RS: {
            message: "Купујте награду успешно",
            status_code: "CC200"
        }
    },
    reward_not_found: {
        EN: {
            message: "Reward not found",
            status_code: "CC404"
        },
        RS: {
            message: "Награда није пронађена",
            status_code: "CC404"
        }
    },
    subscription_already_exist: {
        EN: {
            message: "subscription already exist",
            status_code: "CC400"
        },
        RS: {
            message: "Претплата већ постоји",
            status_code: "CC400"
        }
    },
    reward_proceed: {
        EN: {
            message: "Reward is valid. You may proceed now",
            status_code: "CC200"
        },
        RS: {
            message: "Награда је важећа. Можете наставити сада",
            status_code: "CC200"
        }
    },
    reward_is_expired: {
        EN: {
            message: "Reward is expired",
            status_code: "CC400"
        },
        RS: {
            message: "Награда је истекла",
            status_code: "CC400"
        }
    },
    reward_use_successfully: {
        EN: {
            message: "Reward use successfully",
            status_code: "CC200"
        },
        RS: {
            message: "Награда се успешно користи",
            status_code: "CC200"
        }
    },
    invoice_scanned_successfully: {
        EN: {
            message: "Invoice scanned successfully",
            status_code: "CC200"
        },
        RS: {
            message: "Слика је успешно отпремљена",
            status_code: "CC200"
        }
    },
    invoice_scan_fail: {
        EN: {
            message: "Invoice scanning failed",
            status_code: "CC400"
        },
        RS: {
            message: "Отказивање слике није успјело",
            status_code: "CC400"
        }
    },
    reward_not_map: {
        EN: {
            message: "Sorry, This Reward is not mapped with you",
            status_code: "CC400"
        },
        RS: {
            message: "Извините, ово награђивање није са вама",
            status_code: "CC400"
        }
    },
    reward_already_used: {
        EN: {
            message: "Sorry, This Reward reward already used",
            status_code: "CC400"
        },
        RS: {
            message: "Извините, ова награда је већ искоришћена",
            status_code: "CC400"
        }
    },
    image_validation: {
        EN: {
            message: "Only .png, .jpg and .jpeg format allowed!",
            status_code: "CC400"
        },
        RS: {
            message: "Допуштени су само .пнг, .јпг и .јпег формат!",
            status_code: "CC400"
        }
    },
    reward_limit_reach: {
        EN: {
            message: "Sorry,The Reward total limit crossed now,so this reward is unavailable",
            status_code: "CC400"
        },
        RS: {
            message: "Извините, тренутно је прешао укупни лимит награде, тако да ова награда није доступна",
            status_code: "CC400"
        }
    },
    reward_per_person_limit_reach: {
        EN: {
            message: "Sorry,Maximum limit  of purchased reward  of per customer limit is over",
            status_code: "CC400"
        },
        RS: {
            message: "Извините, Максимални лимит купљене награде по лимиту купца је прекорачен",
            status_code: "CC400"
        }
    },
    offer_limit_reach: {
        EN: {
            message: "Sorry,The offer total limit crossed now,so this offer is unavailable",
            status_code: "CC400"
        },
        RS: {
            message: "Жао нам је, тренутно је прешао укупни лимит понуде, тако да је ова понуда недоступна",
            status_code: "CC400"
        }
    },
    user_not_found: {
        EN: {
            message: "User not found",
            status_code: "CC404"
        },
        RS: {
            message: "Корисник није пронађен",
            status_code: "CC404"
        }
    },
    user_deactive: {
        EN: {
            message: "Current user in deactive mode",
            status_code: "CC400"
        },
        RS: {
            message: "Тренутни корисник у статусу деактиве",
            status_code: "CC400"
        }
    },
    point_not_zero: {
        EN: {
            message: "Point should not zero",
            status_code: "CC400"
        },
        RS: {
            message: "Тачка не би требало да представља нулу",
            status_code: "CC400"
        }
    },
    minimum_points: {
        EN: {
            message: "Minimum points should be 25000 point",
            status_code: "CC400"
        },
        RS: {
            message: "Минимални бод треба да буде 25000 бодова",
            status_code: "CC400"
        }
    },
    amount_not_zero: {
        EN: {
            message: "Amount not be zero",
            status_code: "CC400"
        },
        RS: {
            message: "Износ не може бити нула",
            status_code: "CC400"
        }
    },
    paid_cash_validation: {
        EN: {
            message: "Paid by cash always greater than 500 RSD",
            status_code: "CC400"
        },
        RS: {
            message: "Плаћа се готовином увек већом од 500 динара ",
            status_code: "CC400"
        }
    },
    wrong_tier: {
        EN: {
            message: "Pass wrong customer tier",
            status_code: "CC400"
        },
        RS: {
            message: "Пренесите погрешан ниво купца",
            status_code: "CC400"
        }
    },
    issue_date_format: {
        EN: {
            message: "Invoice scanning failed,issue in date format. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање рачуна није успјело, издајте у формату датума. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    blank_invoice_id: {
        RS: {
            message: "Неуспешно је скенирање рачуна, ИД фактуре. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        },
        EN: {
            message: "Invoice scanning failed,blank invoice id. We will be manually checking the invoice and update",
            status_code: "CC400"
        }
    },
    blank_total_bill: {
        EN: {
            message: "Invoice scanning failed,Blank total bill. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање рачуна није успјело, празан укупни рачун. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    issue_in_total_bill: {
        EN: {
            message: "Invoice scanning failed,issue in Total bill amount. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање рачуна није успјело, издајте у укупном износу рачуна. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    blank_currency: {
        EN: {
            message: "Invoice scanning failed,Blank currency issue. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Неуспјешно је скенирање рачуна, издавање празне валуте. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    blank_outlet_address: {
        EN: {
            message: "Invoice scanning failed,Blank outlet address.We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање рачуна није успјело, празна адреса утичнице. Ручно ћемо провјерити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    blank_outlet_name: {
        EN: {
            message: "Invoice scanning failed,Blank outlet name.We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање рачуна није успјело, Име празног излаза. Ручно ћемо провјерити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    outlet_name_not_found: {
        EN: {
            message: "Invoice scanning failed,Outlet name not found. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање фактуре није успјело, назив утичнице није пронађен. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    old_invoice_date: {
        EN: {
            message: "Invoice scanning failed,old invoice. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање рачуна није успјело, стара фактура. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    cc_invoice_response_fail: {
        EN: {
            message: "cc invoice response fail",
            status_code: "CC400"
        },
        RS: {
            message: "Одговор на рачуну за цц није успео",
            status_code: "CC400"
        }
    },
    already_used_invoice: {
        EN: {
            message: "Invoice scanning failed,Scanned invoice. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање фактуре није успјело, Скенирана фактура. Ручно ћемо проверити фактуру и ажурирати",
            status_code: "CC400"
        }
    },
    brand_found: {
        EN: {
            message: "Brand found",
            status_code: "CC400"
        },
        RS: {
            message: "Бренд је пронађен",
            status_code: "CC400"
        }
    },
    brand_not_found: {
        EN: {
            message: "Brand not found",
            status_code: "CC400"
        },
        RS: {
            message: "Бренд није пронађен",
            status_code: "CC400"
        }
    },
    sub_paid_cash_not_match: {
        EN: {
            message: "Please check amount",
            status_code: "CC400"
        },
        RS: {
            message: "Молимо проверите износ",
            status_code: "CC400"
        }
    },
    transaction_limit_exceeded: {
        EN: {
            message: "Transaction limit exceeded",
            status_code: "CC400"
        },
        RS: {
            message: "Прекорачен је лимит трансакције",
            status_code: "CC400"
        }
    },
    outlet_address_not_found:{
        EN: {
            message: "Invoice scanning failed,outlet address not found. We will be manually checking the invoice and update",
            status_code: "CC400"
        },
        RS: {
            message: "Скенирање фактуре није успјело, адреса утичнице није пронађена. Ручно ћемо проверити фактуру и ажурирати",
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
    console.log("key, errors, lang", key, errors, "sidn", lang)
    if (lang == undefined || lang == null) {
        lang = "EN"
    }
    let returnResponse = response[key] == undefined ? {} : response[key][lang];
    returnResponse.status = false;
    errors && errors != key ? returnResponse.error = errors : "";
    return returnResponse;
}
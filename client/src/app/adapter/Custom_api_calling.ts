import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";

@Injectable()
export class Custom_api_calling {
    constructor(private httpClient: HttpClient) {
    }

    http_calling_post(api, body, callback) {
        // const requestOptions = {
        //     headers: new HttpHeaders(Constants.API_HEADER)
        // };
        let Constants;
        let result = this.httpClient.post(Constants.API_URL + api, body);
        result.subscribe((data) => {
            if (data['status_code'] == 6) {
                // this.storage.remove('log_in_email');
                // this.storage.remove('log_in_token');
                // this.storage.set('session_expired', data['message']);
                document.getElementById("dashboard_container").remove();
                window.location.reload();
            }
            else {
                callback(data);
            }
        });


    }
    // http_calling_file_post(api, body, callback) {
    //     const requestOptions = {
    //         headers: new HttpHeaders(Constants.API_FILE_HEADER)
    //     };

    //     this.httpClient.post(Constants.API_URL + api, body, requestOptions).subscribe((data) => {
    //         if (data['status_code'] == 6) {
    //             this.storage.remove('log_in_email');
    //             this.storage.remove('log_in_token');
    //             this.storage.set('session_expired', data['message']);
    //             document.getElementById("dashboard_container").remove();
    //             window.location.reload();
    //         }
    //         else {
    //             callback(data);
    //         }
    //     });

    // }

    // http_calling_json_put(api, body, callback) {
    //     const requestOptions = {
    //         headers: new HttpHeaders(Constants.API_FILE_HEADER)
    //     };
    //     this.httpClient.put(Constants.API_URL + api, body, requestOptions).subscribe((data) => {
    //         if (data['status_code'] == 6) {
    //             this.storage.remove('log_in_email');
    //             this.storage.remove('log_in_token');
    //             this.storage.set('session_expired', data['message']);
    //             document.getElementById("dashboard_container").remove();
    //             window.location.reload();
    //         }
    //         else {
    //             callback(data);
    //         }
    //     });

    // }

    // http_calling_get(api, callback) {
    //     const requestOptions = {
    //         headers: new HttpHeaders(Constants.API_HEADER)
    //     };
    //     this.httpClient.get(Constants.API_URL + api, requestOptions).subscribe((data) => {
    //         if (data['status_code'] == 6) {
    //             this.storage.remove('log_in_email');
    //             this.storage.remove('log_in_token');
    //             this.storage.set('session_expired', data['message']);
    //             document.getElementById("dashboard_container").remove();
    //             window.location.reload();
    //         } 
    //         else {
    //             callback(data);
    //         }
    //     });
    // }

    // http_calling_file_put(api, body, callback) {
    //     const requestOptions = {
    //         headers: new HttpHeaders(Constants.API_FILE_HEADER)
    //     };
    //     console.log('body----', body);
    //     this.httpClient.put(Constants.API_URL + api, body, requestOptions).subscribe((data) =>
    //         this.api_return_result(data, callback), (error) => {
    //             callback(error);
    //         });

    // }
    // http_calling_put(api, body, callback) {
    //     const requestOptions = {
    //         headers: new HttpHeaders(Constants.API_FILE_HEADER)
    //     };
    //     let result = this.httpClient.put(Constants.API_URL + api, body, requestOptions);

    //     result.subscribe((data) => this.api_return_result(data, callback), (error) => {
    //         callback(error);
    //     });
    // }

    // http_calling_patch(api, body, callback) {
    //     // const requestOptions = {
    //     //     headers: new HttpHeaders(Constants.API_FILE_HEADER)
    //     // };
    //     let result = this.httpClient.patch(Constants.API_URL + api, body, requestOptions);

    //     result.subscribe((data) => this.api_return_result(data, callback), (error) => {
    //         callback(error);
    //     });
    // }


    // private api_return_result(data, callback) {
    //     if (data['status_code'] == 6) {
    //         this.storage.remove('log_in_email');
    //         this.storage.remove('log_in_token');
    //         this.storage.set('session_expired', data['message']);
    //         document.getElementById("dashboard_container").remove();
    //         window.location.reload();
    //     } else {
    //         callback(data);
    //     }
    // }


}

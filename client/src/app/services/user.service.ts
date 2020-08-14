import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

declare const FB:any;

@Injectable()
export class UserService {

  constructor(private http: AuthHttp) {
    FB.init({
      appId      : '209419629801960',
      status     : false, // the SDK will attempt to get info about the current user immediately after init
      cookie     : false,  // enable cookies to allow the server to access
      // the session
      xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
      version    : 'v2.8' // use graph api version 2.5
    });
  }

  fbLogin() {
    return new Promise((resolve, reject) => {
      FB.login(result => {
            console.log("facebook aceess token ",result.authResponse.accessToken);
        if (result.authResponse) {

            return this.http.post(`http://localhost:3000/api/auth/facebook`, {access_token: result.authResponse.accessToken})
            // , {access_token: result.authResponse.accessToken})
            .toPromise()
              .then(response => {


                 var token = response.headers.get('x-auth-token');
                  //console.log(token)
                  if (token) {
                  localStorage.setItem('token', token);
                }
                resolve(response.json());
              })
              .catch(() => reject());
        } else {
          reject();
        }
      }, {scope: 'public_profile,email'})

    });
  }

  logout() {
    localStorage.removeItem('token');
  }
}

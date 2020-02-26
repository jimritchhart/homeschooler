import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

import { BasicAuthenticationService } from "src/app/services/basic-authentication.service";

@Injectable({
  providedIn: "root"
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private BasicAuthenticationService: BasicAuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) { 
    /*       let username = 'user';
      let passowrd = 'password'; */
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + passowrd);

    let basicAuthHeaderString = this.BasicAuthenticationService.getAuthenticatedToken();
    let username = this.BasicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}

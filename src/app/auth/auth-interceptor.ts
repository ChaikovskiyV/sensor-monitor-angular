import { HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core'

import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({ 
    providedIn: 'root'
  })
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenStorage: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authReq = req;
        const token = this.tokenStorage.getToken();

        if (token) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) })
        }
        return next.handle(authReq);
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
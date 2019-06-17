import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.authService.getToken();
    let copiedReq = req;

    if (accessToken) {
      copiedReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + accessToken)
      });
    }

    return next.handle(copiedReq).pipe(
      tap(
        succ => { },
        err => {
          if (err.status === 401) {
            console.error(err);
            this.router.navigate(['register']);
          }
        }
      )
    );
  }
}

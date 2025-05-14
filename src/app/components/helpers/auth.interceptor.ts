import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _loginService : LoginService) {}

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._loginService.token();

    console.log('Token Interceptor', token);

    if(token){
      const clone = request.clone({
        headers : request.headers.set('Authorization', `Bearer ${token}`)
      })
      return next.handle(clone);
    }

    return next.handle(request);
  }
}

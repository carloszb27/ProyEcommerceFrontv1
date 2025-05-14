import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiUrl;

  private login: string = `${this.baseUrl}/auth/authenticate`;

  constructor(private http: HttpClient) {}

  ingresar(request: any): Observable<any> {
    return this.http
      .post(`${this.login}`, request, {
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          localStorage.setItem('token', body.token);
          return body;
        })
      );
  }

  token() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = `${environment.apiUrl}/user`;;
    
    constructor(private http:HttpClient) { }
    
    public getCurrentUser(): Observable<Response[]> {
      return this.http.get<Response[]>(`${this.baseUrl}/me`);
    }

    public lista(): Observable<Response[]> {
      return this.http.get<Response[]>(this.baseUrl);
    }
  
    public registrar(user: User): Observable<Response> {
      return this.http.post<Response>(this.baseUrl, user);
    }
  
    public buscar(id_user: number): Observable<Response> {
      return this.http.get<Response>(`${this.baseUrl}/${id_user}`);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';
import { Observable } from 'rxjs';
import { Response } from '../model/response';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseUrl: string = `${environment.apiUrl}/proveedor`;;
  
  constructor(private http:HttpClient) { }
  
  public lista(): Observable<Response[]> {
    return this.http.get<Response[]>(`${this.baseUrl}`);
  }



}

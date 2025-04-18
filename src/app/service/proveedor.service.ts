import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../model/proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseUrl: string = 'http://localhost:8083/api/v1';
  
  constructor(private http:HttpClient) { }
  
  public lista(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.baseUrl}/proveedor`);
  }



}

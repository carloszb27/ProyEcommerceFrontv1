import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl: string = 'http://localhost:8083/api/v1/producto';
  
  constructor(private http:HttpClient) { }
  
  public lista(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl);
  }

  public registrar(producto: Producto): Observable<any> {
    return this.http.post<any>(this.baseUrl, producto);
  }

  public buscar(id_prod: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id_prod}`);
  }


  public actualizar(producto: Producto): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, producto);
  }

  public eliminar(id_prod: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id_prod}`);
  }
  

}

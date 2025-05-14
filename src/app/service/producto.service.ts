import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../model/response';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl: string = `${environment.apiUrl}/producto`;;
  
  constructor(private http:HttpClient) { }
  
  public lista(): Observable<Response[]> {
    return this.http.get<Response[]>(this.baseUrl);
  }

  public listarPorLote(id_lote: number): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}/lote/${id_lote}`);
  }

  public registrar(producto: Producto): Observable<Response> {
    return this.http.post<Response>(this.baseUrl, producto);
  }

  public buscar(id_prod: number): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}/${id_prod}`);
  }


  public actualizar(producto: Producto): Observable<Response> {
    return this.http.put<Response>(`${this.baseUrl}`, producto);
  }

  public eliminar(id_prod: number): Observable<Response> {
    return this.http.delete<Response>(`${this.baseUrl}/${id_prod}`);
  }
  

}

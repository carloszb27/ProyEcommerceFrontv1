import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lote } from '../model/lote';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

    private baseUrl: string = `${environment.apiUrl}/lote`;;
    
    constructor(private http:HttpClient) { }
    
    public lista(): Observable<Lote> {
      return this.http.get<Lote>(this.baseUrl);
    }
  
    public registrar(lote: Lote): Observable<any> {
      return this.http.post<any>(this.baseUrl, lote);
    }
  
    public buscar(id_prod: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id_prod}`);
    }
  
  
    public actualizar(lote: Lote): Observable<Object> {
      return this.http.put(`${this.baseUrl}`, lote);
    }
  
    public eliminar(id_prod: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id_prod}`);
    }
}

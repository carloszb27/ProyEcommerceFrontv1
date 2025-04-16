import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: string = 'http://localhost:8083/api/v1';

  constructor(private http:HttpClient) { }

  public lista(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/categoria`);
  }

}

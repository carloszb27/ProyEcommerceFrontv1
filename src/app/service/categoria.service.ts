import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: string = `${environment.apiUrl}/categoria`;

  constructor(private http:HttpClient) { }

  public lista(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl);
  }

}

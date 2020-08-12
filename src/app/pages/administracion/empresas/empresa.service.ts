import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private urlEndPoint = 'http://localhost:8080/api/empresas';
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable <Empresa[]> {
    return this.http.get<Empresa[]>(this.urlEndPoint);
  }
}

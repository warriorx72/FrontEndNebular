import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  private urlEndPoint = 'http://localhost:8090/api/empresas';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.urlEndPoint);
  }

  postEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.urlEndPoint, empresa, { headers: this.httpHeaders });
  }

  getEmpresa(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.urlEndPoint}/${id}`);
  }

  putEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.urlEndPoint}/${empresa.id}`, empresa, { headers: this.httpHeaders });
  }

  deleteEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.delete<Empresa>(`${this.urlEndPoint}/${empresa.id}`, { headers: this.httpHeaders });
  }
}

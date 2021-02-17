import { HttpClient, ɵangular_packages_common_http_http_c } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this._http.get("http://127.0.0.1:8000/api/inventory/get",{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  create(data: JSON): Observable<any> {
    return this._http.post("http://127.0.0.1:8000/api/inventory/create",data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  delete(id: number): Observable<any> {
    return this._http.delete(`http://127.0.0.1:8000/api/inventory/delete/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  save(data: JSON,id: string): Observable<any> {
    return this._http.post(`http://127.0.0.1:8000/api/inventory/update/${id}`,data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  get(id: string): Observable<any> {
    return this._http.get(`http://127.0.0.1:8000/api/inventory/get/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}

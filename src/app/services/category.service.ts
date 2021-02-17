import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(id: string): Observable<any> {
    return this._http.get(`http://127.0.0.1:8000/api/category/get/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  create(data: JSON, id: string): Observable<any> {
    return this._http.post(`http://127.0.0.1:8000/api/category/create/${id}`,data,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  delete(id: number): Observable<any> {
    return this._http.delete(`http://127.0.0.1:8000/api/category/delete/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}

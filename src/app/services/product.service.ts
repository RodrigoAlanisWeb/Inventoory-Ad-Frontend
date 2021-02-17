import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(id: string): Observable<any> {
    return this._http.get(`http://127.0.0.1:8000/api/product/getall/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }

  create(id: number,data: any): Observable<any> {
    return this._http.post(`http://127.0.0.1:8000/api/product/create/`,{
      "name" : data.name,
      "description" : data.description,
      "count" : data.count,
      "category" : id
    },{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}

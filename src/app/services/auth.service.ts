import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  register(data: JSON): Observable<any> {
    return this._http.post("http://127.0.0.1:8000/api/auth/register", data)
  }

  login(data: JSON): Observable<any> {
    return this._http.post("http://127.0.0.1:8000/api/auth/login", data)
  }

  verify_token(): Observable<any> {
    let token = localStorage.getItem('token');
    return this._http.get("http://127.0.0.1:8000/api/user/profile",{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }

  logout(): Observable<any> {
    let token = localStorage.getItem('token');
    return this._http.get("http://127.0.0.1:8000/api/user/logout",{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }
}

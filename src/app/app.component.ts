import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;

  constructor(
    private _auth: AuthService
  ) {
    this.user = false;
    this.verify_user();
  }

  verify_user() {
    this._auth.verify_token().subscribe(res => {
      this.user = res.user;
      console.log(this.user);
    })
  }

  logout() {
    this._auth.logout().subscribe(res => console.log(res));
    this.user = false;
  }
}

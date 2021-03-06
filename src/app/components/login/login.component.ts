import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log_form: FormGroup;
  error: boolean;
  gapiSetup: boolean;
  authInstance: any;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private parent: AppComponent,
    private router: Router
  ) { 
    this.log_form = _fb.group({
      'email': ['',Validators.compose([Validators.required,Validators.email])],
      'password': ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(50)])],
      'remember_me': [''],
    });
    this.error = false;
    this.gapiSetup = false;
  }

  ngOnInit(): void {
  }

  submit(data: JSON) {
    this._auth.login(data).subscribe(res => {
      if (res.res) {
        localStorage.setItem('token', res.token.accessToken);
        this.parent.verify_user(); 
        this.router.navigate(['/'])
      } else {
        this.error = true;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg_form: FormGroup;
  error: boolean;

  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private parent: AppComponent
  ) {
    this.reg_form = this._fb.group({
      'name': ['', Validators.compose([Validators.maxLength(40),Validators.minLength(5),Validators.required])],
      'email': ['',Validators.compose([Validators.required,Validators.email])],
      'password': ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(50)])],
      'company': ['',Validators.required],
      'remember_me': [''],
    });
    this.error = false;
  }

  ngOnInit(): void { }


  submit(value: any) {
    if (value.remember_me == "") {
      value.remember_me = false;
    }
    this._auth.register(value).subscribe(res => {
      if (res.res) {
        localStorage.setItem('token', res.token.accessToken);
        location.pathname = "/"
        this.parent.verify_user(); 
      } else {
        this.error = true;
      }
    });
  }

}

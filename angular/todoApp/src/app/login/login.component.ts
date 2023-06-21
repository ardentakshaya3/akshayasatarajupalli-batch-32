import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  session = sessionStorage.getItem('user');
  constructor(private router: Router) {

    }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)])
     });
  }

  login(data:any) {
    // console.log(data.email);
    if(data.email=="akshaya@gmail.com" && data.password=="user") {
      sessionStorage.setItem('user', data.email);
      alert("Login Successful");
            this.router.navigate(['/profile'])
            .then(() => {
               window.location.reload();
             });
    }
    else {
             alert("Invalid credentials");
        }

  }
}

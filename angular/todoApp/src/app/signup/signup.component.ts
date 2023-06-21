import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

const STORAGE_KEY = 'user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  login: FormGroup;
  
  signup() {
    console.log('Signup clicked!');
  }

  constructor(private router: Router) { 
    this.login = new FormGroup({
      firstName: new FormControl(null,[Validators.required,Validators.email]),
      lastName: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      email: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      phone: new FormControl(null,[Validators.required, Validators.maxLength(10)]),
      dob: new FormControl(null,[Validators.required, Validators.minLength(6)])
     });

    }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['/login']);
  }

}
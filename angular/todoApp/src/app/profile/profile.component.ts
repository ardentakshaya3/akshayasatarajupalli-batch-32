import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  show=false;
  fname:string='Akshaya';
  lname:string='S';
  phone: number=9821036475;
  dob:Date=new Date("07/02/2020");
  email:string='akshaya@gmail.com';
  hobby:string='keeps on changing';
  month = this.dob.getUTCMonth() + 1;
  day = this.dob.getUTCDate();
  year = this.dob.getUTCFullYear();

  session = sessionStorage.getItem('user');

  constructor(private router: Router) { }

  ngOnInit() {
  }
  showProfile(){
    this.show=true;
  }

}

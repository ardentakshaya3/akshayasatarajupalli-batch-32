import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  status = "Login";
  flag=true;
  switchStatus() {
    this.flag = !this.flag;
    this.status = this.flag==false?"Logout":"Login";
  }

}

  

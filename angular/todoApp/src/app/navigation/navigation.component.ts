import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  status = "Login";
  flag=true;
  switchStatus() {
    this.flag = !this.flag;
    this.status = this.flag==false?"Logout":"Login";
  }
}

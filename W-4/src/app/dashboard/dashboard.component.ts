import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data = JSON.parse(localStorage.getItem('users')|| '{}')
  displayusername = this.data.username
  displaypassword = this.data.password
}

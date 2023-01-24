import { Component } from '@angular/core';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  login(){
    document.location.href = "/menu";
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    alert(username + "  "+password);
   }
}
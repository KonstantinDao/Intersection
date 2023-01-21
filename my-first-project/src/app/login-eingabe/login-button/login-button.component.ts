import { Component } from '@angular/core';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  login(){
    document.location.href = "/menu";
    // username = document.getElementById('username').value;
    //  alert(username);
   }
}
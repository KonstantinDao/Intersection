import { Component } from '@angular/core';

var username = "";

@Component({
  selector: 'app-login-eingabe',
  templateUrl: './login-eingabe.component.html',
  styleUrls: ['./login-eingabe.component.css']
})
export class LoginEingabeComponent {
    fehler(){
      document.getElementsByTagName('p')[0].innerHTML = "Something didn't work. Please try again.";
    }
}


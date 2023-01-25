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
    checkUser() {

      var username = (<HTMLInputElement>document.getElementById('username')).value;
      var password = (<HTMLInputElement>document.getElementById('password')).value;
  
      const data: User = {
        id: '',
        name: username,
        password: password,
        interests: [],
        matchingHistory: []
      }
  
      this.http.post(this.ROOT_URL + '/users', data).subscribe(data => {
        console.log(data);
        this.user = data;
      })
      document.location.href = "/menu";
    }
}


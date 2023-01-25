import { Component } from '@angular/core';
//  const user = require('../../../../../src/models/user');
//  const userService = require('../../../../../src/services/userService');

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  async login(){
    document.location.href = "/menu";
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;
    alert(username + "  "+password);

  //     const userData = new user({
  //     name: username,
  //     password: password,
  //     interests: []
  // });
  // console.log(await userService.createNewUser(userData));


    }

    fehler(){
      document.getElementsByTagName('p')[0].innerHTML = "Something didn't work. Please try again.";
    }
}
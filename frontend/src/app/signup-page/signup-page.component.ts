import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  readonly ROOT_URL = 'http://localhost:8080/api'


  users: any
  newUser: any

  constructor(private http: HttpClient) {}

  getUsers() {
    this.users = this.http.get<User[]>(this.ROOT_URL + '/users');
  }

  createUser() {
    document.location.href = "/menu";
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;

    const data: User = {
      id: '',
      name: username,
      password: password,
      interests: [],
      matchingHistory: []
    }

    this.newUser = this.http.post(this.ROOT_URL + '/users', data)
  
  }


}

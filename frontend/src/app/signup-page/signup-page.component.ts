import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/User';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent {


  readonly ROOT_URL = 'http://localhost:8080/api'

  users: any
  user: any

  constructor(private http: HttpClient) {}

  createUser() {

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
      console.log(`/menu/${this.user._id}`)
      document.location.href = `/menu/${this.user._id}`;
      
    })
    // 
  }



}

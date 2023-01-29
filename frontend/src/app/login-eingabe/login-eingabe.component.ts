import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { User } from '../models/User';

var username = "";

@Component({
  selector: 'app-login-eingabe',
  templateUrl: './login-eingabe.component.html',
  styleUrls: ['./login-eingabe.component.css']
})
export class LoginEingabeComponent {
  user: any
  public id: string = '';
  readonly ROOT_URL = 'http://localhost:8080/api'

  constructor(private http: HttpClient, private route: ActivatedRoute) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id === null){
     this.id = '';
    } else{
     this.id = id;
    }
 }


  inputError(pCause : String){

    if(pCause === "username"){
      document.getElementsByTagName('p')[0].innerHTML = "User does not exist. Please try again.";
    } else if(pCause === "password"){
      document.getElementsByTagName('p')[0].innerHTML = "Password is incorrect. Please try again.";
    }else{
      document.getElementsByTagName('p')[0].innerHTML = "Something didn't work. Please try again.";
    }
    
  }
  
  checkUser() {

    var username = (<HTMLInputElement>document.getElementById('username')).value;
    var password = (<HTMLInputElement>document.getElementById('password')).value;

    return this.http.get<User>(this.ROOT_URL + `/usersByName/${username}`).subscribe(user => {
      if(user != null && user.name === username){
          if(user.password === password){
            this.user = user;
            console.log(this.user._id)
            document.location.href = `/menu/${this.user._id}`;
           } else {
             this.inputError("password");
           }
        } else {
          this.inputError("username");
        }
    });
  } 

  
}


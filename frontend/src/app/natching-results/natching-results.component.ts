import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { Matching } from '../models/Matching'



@Component({
  selector: 'app-natching-results',
  templateUrl: './natching-results.component.html',
  styleUrls: ['./natching-results.component.css']
})
export class NatchingResultsComponent {
  id: string = '';
  user: any;
  partner1: string = '';
  partner2: string = '';
  partner3: string = '';
  matching: any;
  readonly ROOT_URL = 'http://localhost:8080/api'

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id === null){
     this.id = '';
    } else{
     this.id = id;
    }
    this.showmatches();
 }

 showmatches(){

  return this.http.get<User>(this.ROOT_URL + `/users/${this.id}`).subscribe(user => {
    this.user = user;
    const matching = this.user.matchingHistory.pop();
    this.http.get<Matching>(this.ROOT_URL + `/matchings/${matching}`).subscribe(matching =>{
      this.matching = matching;
      const partners = this.matching.partners
      if(partners[0] != this.id){
        this.http.get<User>(this.ROOT_URL + `/users/${partners[0]}`).subscribe(user => {
          this.partner1 = user.name;
          document.getElementsByTagName('p')[1].innerHTML = this.partner1;          
        })
      }
      if(partners[1] != this.id){
        this.http.get<User>(this.ROOT_URL + `/users/${partners[1]}`).subscribe(user => {
          if(this.partner1 == ''){
            this.partner1 = user.name;
            document.getElementsByTagName('p')[1].innerHTML = this.partner1;
          } else {
            this.partner2 = user.name;
            document.getElementsByTagName('p')[2].innerHTML = this.partner2;
          } 
        })
      }
      if(partners[2] != this.id){
        this.http.get<User>(this.ROOT_URL + `/users/${partners[2]}`).subscribe(user => {
          if(this.partner1 == ''){
            this.partner1 = user.name;
            document.getElementsByTagName('p')[1].innerHTML = this.partner1;
          } else if(this.partner2 == ''){
            this.partner2 = user.name;
            document.getElementsByTagName('p')[2].innerHTML = this.partner2;
          } else{
            this.partner3 = user.name;
            document.getElementsByTagName('p')[3].innerHTML = this.partner3;
          }

        })
      }
      if(partners.length == 4 && partners[3] != this.id){
        this.http.get<User>(this.ROOT_URL + `/users/${partners[3]}`).subscribe(user => {
          if(this.partner1 == ''){
            this.partner1 = user.name;
            document.getElementsByTagName('p')[1].innerHTML = this.partner1;
          } else if(this.partner2 == ''){
            this.partner2 = user.name;
            document.getElementsByTagName('p')[2].innerHTML = this.partner2;
          } else{
            this.partner3 = user.name;
            document.getElementsByTagName('p')[3].innerHTML = this.partner3;
          }
        })
      }

    })
  });


 }


}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, Observable, timer } from 'rxjs';
import { User } from '../models/User'

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css']
})
export class WaitingRoomComponent {
  public id: string = '';
  public userMatchings: any;

  readonly ROOT_URL = 'http://localhost:8080/api'

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');
     if(id === null){
      this.id = '';
     } else{
      this.id = id;
     }
     
    this.getUser().subscribe(userZero =>{
      const time$ = timer(0, 3000);
      time$.subscribe(count => {
       console.log(count);
        this.getUser().subscribe(updatedUser =>{
          console.log(userZero)
          console.log(updatedUser.name)
          if(!this.arraysEqual(userZero.matchingHistory, updatedUser.matchingHistory)){
           document.location.href = `/matchingresults/${this.id}`;
         }
        })
      })
    })
     
  }

  arraysEqual(a : any, b : any) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  
  getUser(): Observable<User> {
    return this.http.get<User>(this.ROOT_URL + `/users/${this.id}`)
  }


/*   newView(){
    var element = <HTMLInputElement>document.getElementById('s1');
    var parent = <HTMLInputElement>element.parentNode;
    parent.removeChild(element);
  } */
}

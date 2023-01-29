import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../models/Room';


@Component({
  selector: 'app-calculate-matching',
  templateUrl: './calculate-matching.component.html',
  styleUrls: ['./calculate-matching.component.css']
})
export class CalculateMatchingComponent {
  
  private roomId: string = '';
  readonly ROOT_URL = 'http://localhost:8080/api';
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('roomId');
    if(id === null){
     this.roomId = '';
    } else{
     this.roomId = id;
     console.log(this.roomId)
    }

    this.http.get<Room>(this.ROOT_URL + `/rooms/${this.roomId}`).subscribe(room =>{
      document.getElementsByTagName('p')[0].innerHTML = "Room Nr.: " + room.room_nr.toString();
    })
   
 }

  startmatching(){
    
    this.http.get<Boolean>(this.ROOT_URL + `/rooms/matching/${this.roomId}`).subscribe(result => {
      if(result){
        document.getElementsByTagName('p')[1].innerHTML = "Success!";
      } else {
        document.getElementsByTagName('p')[1].innerHTML = "Something bad happened!";
      }
    });
  }
}


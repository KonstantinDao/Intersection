import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../models/Room'

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent {

  private id: string = '';
  private room: any;
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

  joinroom(){
    var room_Nr = (<HTMLInputElement>document.getElementById('roomNr')).value;

    this.http.get<Room>(this.ROOT_URL + `/roomByNumber/${room_Nr}`).subscribe(room => {
      this.room = room;
      const participantsArray = room.participants;
      const pNumberOfParticipants = room.numberOfParticipants;
      participantsArray.push(this.id)
      const data = {
        participants: participantsArray,
        numberOfParticipants: pNumberOfParticipants+1
      }

      console.log(this.room._id)
      this.http.patch(this.ROOT_URL + `/rooms/${this.room._id}`, data).subscribe(data => {
        document.location.href = `/interests/${this.id}`;
      })
    });
  }
}

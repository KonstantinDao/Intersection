import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Room } from './Room';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {

  room: any;

  readonly ROOT_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  createRoom(){
    var pRoomNr = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    document.getElementsByTagName('p')[2].innerHTML = "Room-Nr:  " + pRoomNr;

    var pRoomName = (<HTMLInputElement>document.getElementById('roomName')).value;

    const data: Room = {
      id: '',
      name: pRoomName,
      room_nr: pRoomNr,
      participants: [],
      numberOfParticipants: 0,
      matches: []
    }

    this.http.post(this.ROOT_URL + '/rooms', data).subscribe(data => {
      console.log(data);
      this.room = data;
    })
  

   }

  startmatching(){
    document.location.href = "/matchingresults"; 
  }
}

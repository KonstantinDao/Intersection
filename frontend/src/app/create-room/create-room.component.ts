import { Component } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {
  submit(){
    var roomname = (<HTMLInputElement>document.getElementById('roomName')).value;
    var x = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    alert(x);
    document.location.href = "/room";
   }
}

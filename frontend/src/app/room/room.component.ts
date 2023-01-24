import { Component } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  createnumber(){
    var x = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }

}
